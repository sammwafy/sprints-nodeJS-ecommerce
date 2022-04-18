import "./datatable.scss";
import { DataGrid } from '@mui/x-data-grid';

import { Link, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "axios"
import { productActions } from "../../../store/productsSlice"


const DataTable = ({ columns, type }) => {
    const dispatch = useDispatch()
    useEffect(() => {
        axios
            .get("http://localhost:5009/api/products")
            .then(function (response) {
                // handle success

                dispatch(productActions.getProducts(response.data));
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }, [])
    const products = useSelector(state => state.products)
    let no = 1



    let rows
    switch (type) {
        case "users": rows = [{
            id: "9",
            username: "Harvey",
            email: "Harvey@gmail.com",
            status: "Active",
        }]
            break;
        case "products": rows = products.map(product => {
            return { id: no++, avatar: product.image, title: product.title, stock: product.quantity, price: product.price }
        })
            break;

        case "categories": rows = [
            {
                id: "2",
                avatar:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVUGCx0Ph3KqbQvFqbXv22NAOKmt--e33mmQ&usqp=CAU",
                title: "Cersei@gmail.com",
            },
        ]
            break;

        case "brands": rows = [
            {
                id: "2",
                avatar:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVUGCx0Ph3KqbQvFqbXv22NAOKmt--e33mmQ&usqp=CAU",
                title: "Cersei@gmail.com",
            },
        ]
            break;
        case "orders": rows = [{
            id: "Snow",
            custumer:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVUGCx0Ph3KqbQvFqbXv22NAOKmt--e33mmQ&usqp=CAU",
            date: "Jon@gmail.com",
            total: " $35",
            payment: "Active",
            status: "approved",
        }]
            break;


        default: { }
    }

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

                        <div className="deleteButton">Delete</div>



                    </div >
                )
            }
        },
    ]



    return (
        <>
            {(type !== "users" && type !== "orders") && (<Link className="link" to={`/admin/${type}/new`} >
                <div className="viewButton"><span>{`Add new ${type.slice(0, -1)}`}</span></div>
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