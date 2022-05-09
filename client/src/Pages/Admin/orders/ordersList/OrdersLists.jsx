import './ordersList.scss';
import AdminLayout from ''
import { useEffect, uesState } from 'react';
import axios from '../../../../Hooks/axios';
import { useCookies } from 'react-cookie';
import { Link } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';


const OrdersLists = () => {
    const [orders, setOrders] = uesState([])
    const [cookies, setCookie] = useCookies(["token", "id"]);
    useEffect(() => {

        axios
            .get(`/api/orders`, {
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

        // call useEffect every change in type
    }, []);

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

                        <Link to={`/admin/orders/${params.row.id}/edit`}>
                            <div className="editButton">Edit</div>
                        </Link>
                    </div>
                );
            },
        },
    ];

    const rows = orders.map((order) => ({
        id: order._id,
        custumer: order.userId,
        date: order.createdAt,
        total: order.amount,
        payment: "cash dummy",
        status: order.status,
    }));

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
        { field: "status", headerName: "Status", width: 130 },
    ];

    return (
        <AdminLayout>

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
        </AdminLayout>
    )
}

export default OrdersLists