import "./datatable.scss";
import { DataGrid } from '@mui/x-data-grid';
import { Link, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "../../../Hooks/axios"
import { productActions } from "../../../store/productsSlice"
import { useCookies } from "react-cookie";
import { usersActions } from "../../../store/usersSlice";
import { useState } from "react";

const DataTable = ({ columns, type }) => {
    const [cookies, setCookie] = useCookies(["token", "id"]);
    const dispatch = useDispatch()
    const products = useSelector(state => state.products)
    const users = useSelector(state => state.users.users)
    const [orders, setOrders] = useState([])
    console.log(users);
    //delete action
    const handleClick = (id) => {
        const confirm = window.confirm("Are you sure you want to delete this");
        if (confirm) {
            switch (type) {
                case "users":

                    axios.delete(`/api/users/${id}`,
                        {
                            headers: {
                                token: "Bearer " + cookies.token,

                                "Content-Type": "application/json",


                            },
                            withCredentials: true,
                        }


                    ).then(window.location.reload(false)).catch(error => console.log(error))
                    break;
                case "products":
                    axios.delete(`/api/products/${id}`,
                        {
                            headers: {
                                token: "Bearer " + cookies.token,

                                "Content-Type": "application/json",


                            },
                            withCredentials: true,
                        }


                    ).then(window.location.reload(false)).catch(error => console.log(error))
                    break;
                default: return

            }
        } else {
            return
        }
    }



    useEffect(() => {
        switch (type) {
            case "products":
                axios
                    .get(`/api/products/`)
                    .then(function (response) {
                        // handle success
                        dispatch(productActions.getProducts(response.data));
                    })
                    .catch(function (error) {
                        // handle error
                        console.log(error);
                    });
                break;
            case "users":
                axios
                    .get(`/api/users/`, {
                        headers: {
                            token: "Bearer " + cookies.token,

                            "Content-Type": "application/json",


                        },
                        withCredentials: true,
                    }
                    )
                    .then(function (response) {
                        // handle success
                        console.log(response.data);
                        dispatch(usersActions.getUsers(response.data));
                    })
                    .catch(function (error) {
                        // handle error
                        console.log(error);
                    });
                break;

            case "orders":
                axios
                    .get(`/api/orders/`, {
                        headers: {
                            token: "Bearer " + cookies.token,

                            "Content-Type": "application/json",
                        },
                        withCredentials: true,
                    }
                    )
                    .then(function (response) {
                        // handle success
                        console.log(response.data);
                        setOrders(response.data)
                    })
                    .catch(function (error) {
                        // handle error
                        console.log(error);
                    });
                break;
            default: return

        }
        // call useEffect every change in type
    }, [type])

    //get data from redux




    // fill table rows from database
    let rows
    switch (type) {
        //fill user table
        case "users": rows =
            users.map(user => {
                return { id: user._id, username: user.username, email: user.email, status: user.status }
            })
            break;
        //fill product table
        case "products": rows = (products.length > 0) && products.map(product => {
            return { id: product._id, avatar: product.image[product?.featuredImg ? product?.featuredImg : 0], title: product.title, stock: product.quantity, price: product.price }
        })
            break;
        //fill categories table
        case "categories": rows = [
            {
                id: "2",
                avatar:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVUGCx0Ph3KqbQvFqbXv22NAOKmt--e33mmQ&usqp=CAU",
                title: "Cersei@gmail.com",
            },
        ]
            break;

        //fill brand table
        case "brands": rows = [
            {
                id: "2",
                avatar:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVUGCx0Ph3KqbQvFqbXv22NAOKmt--e33mmQ&usqp=CAU",
                title: "Cersei@gmail.com",
            },
        ]
            break;

        //fill order table
        case "orders": rows = orders.map(order => ({
            id: order._id,
            custumer:
                order.userId,
            date: order.createdAt,
            total: order.amount,
            payment: "cash dummy",
            status: order.status,
        }))

            break;

        case "coupons": rows = orders.map(order => ({
            id: order._id,
            custumer:
                order.userId,
            date: order.createdAt,
            total: order.amount,
            payment: "cash dummy",
            status: order.status,
        }))

            break;





        default: { }
    }


    //create buttons for table rows
    const actionColumns = [
        {
            field: "actions", headerName: "Actions", width: 250,
            renderCell: (params) => {
                return (
                    <div className="actions">

                        <Link to={`/admin/${type}/${params.row.id}`}>
                            <div className="viewButton">View</div>
                        </Link>

                        <Link to={`/admin/${type}/${params.row.id}/edit`}>
                            <div className="editButton">Edit</div>
                        </Link>

                        <div className="deleteButton" onClick={() => handleClick(params.row.id)}>Delete</div>
                    </div >
                )
            }
        },
    ]



    return (
        <>
            {(type !== "users" && type !== "orders") && (<Link className="link" to={`/admin/${type}/new`} >
                <div className="newButton"><span>{`Add new ${type.slice(0, -1)}`}</span></div>
            </Link>)}
            <div className="datatable" >
                <div style={{ height: 400, width: '100%', padding: '10px' }}>
                    <DataGrid
                        rows={rows}
                        columns={columns.concat(actionColumns)}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        checkboxSelection
                    />
                </div>
            </div>
        </>
    )
}

export default DataTable