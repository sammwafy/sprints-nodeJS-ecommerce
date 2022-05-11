import "./datatable.scss"
import axios from '../../../Hooks/axios';
import { useCookies } from "react-cookie";
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";

const OrdersTable = () => {
    const [orders, setOrders] = useState([])
    const [cookies, setCookie] = useCookies(["token", "id"]);

    useEffect(() => {

        axios
            .get(`/api/orders/`, {
                headers: {
                    token: "Bearer " + cookies.token,

                    "Content-Type": "application/json",
                },
                withCredentials: true,
            })
            .then(function (response) {
                // handle success

                setOrders(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });


    }, []);





    const ordersColumns = [
        { field: "id", headerName: "ID", width: 50 },
        { field: "custumer", headerName: "Custumer", width: 70 },

        {
            field: "date",
            headerName: "Date",
            description: "This column has a value getter and is not sortable.",
            sortable: false,
            width: 130,
        },
        { field: "total", headerName: "Total", width: 70 },
        { field: "payment", headerName: "Payment", width: 130 },
        {
            field: "status", headerName: "Status", width: 130,
            renderCell: (params) => {
                return (

                    <span className={`status ${params.row.status}`}>{params.row.status}</span>

                );
            },


        },
    ];


    const actionColumns = [
        {
            field: "actions",
            headerName: "Actions",
            width: 250,
            renderCell: (params) => {
                return (
                    <div className="actions">
                        <Link to={`/admin/orders/${params.row.id}`}>
                            <div className="viewButton">View</div>
                        </Link>
                    </div>
                );
            },
        },
    ];

    const rows = orders?.map((order) => ({
        id: order._id,
        custumer: order.userId,
        date: order.createdAt,
        total: order.amount,
        payment: order.payment,
        status: order.status,
    }));



    return (
        <div className="datatable">
            <div style={{ height: 400, width: "100%", padding: "10px" }}>
                <DataGrid
                    rows={rows}
                    columns={ordersColumns.concat(actionColumns)}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                />
            </div>
        </div>
    )
}

export default OrdersTable