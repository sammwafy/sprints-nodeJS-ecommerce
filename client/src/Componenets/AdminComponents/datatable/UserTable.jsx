import "./datatable.scss"
import { DataGrid } from "@mui/x-data-grid";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "../../../Hooks/axios"
import { useCookies } from "react-cookie";
import { usersActions } from "../../../store/usersSlice";
import { useState } from "react";

const UserTable = () => {
    const [cookies, setCookie] = useCookies(["token", "id"]);
    const dispatch = useDispatch()
    const users = useSelector(state => state.users.users)
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`/api/users`, {
                headers: {
                    token: "Bearer " + cookies.token,

                    "Content-Type": "application/json",
                },
                withCredentials: true,
            })
            .then(function (response) {
                // handle success

                dispatch(usersActions.getUsers(response.data));
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });


    }, [users])


    //table fields

    const usersColumns = [
        { field: "id", headerName: "No.", width: 70 },
        { field: "username", headerName: "User Name", width: 100 },
        { field: "email", headerName: "Email", width: 200 },

        {
            field: "status",
            headerName: "Status",
            description: "This column has a value getter and is not sortable.",
            sortable: false,
            width: 70,
            renderCell: (params) => {
                return (
                    <span
                        className={`badge ${params.row.status}`}
                        style={{ color: "black" }}
                    >
                        {params.row.status}
                    </span>
                );
            },
        },
        {
            field: "view",
            headerName: "View",
            description: "This column has a value getter and is not sortable.",
            sortable: false,
            width: 100,
            renderCell: (params) => {
                return (
                    <button className="viewButton" onClick={() => navigate(`/admin/users/${params.row.id}`)}>view</button>
                );
            },
        },
    ];



    //table rows
    const rows =

        users.map((user) => {
            return {
                id: user._id,
                username: user.username,
                email: user.email,
                status: user.status,
                view: user._id
            };
        });




    return (
        <div className="datatable">
            <div style={{ height: 400, width: "100%", padding: "10px" }}>
                <DataGrid
                    rows={rows}
                    columns={usersColumns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                />
            </div>
        </div>
    )
}

export default UserTable