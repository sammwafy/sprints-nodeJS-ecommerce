import { DataGrid } from '@mui/x-data-grid'
import axios from '../../../Hooks/axios';
import './datatable.scss'
import { useSelector, useDispatch } from "react-redux";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { productActions } from '../../../store/productsSlice';

const ProductTable = () => {

    const [cookies, setCookie] = useCookies(["token", "id"]);
    const dispatch = useDispatch()
    const products = useSelector(state => state.products)
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`/api/products`)
            .then(function (response) {
                // handle success

                dispatch(productActions.getProducts(response.data));
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }, [products])



    const handleDelete = (id) => {
        const confirm = window.confirm("Are you sure you want to delete this");
        if (confirm) {

            axios.delete(`/api/products/${id}`,
                {
                    headers: {
                        token: "Bearer " + cookies.token,

                        "Content-Type": "application/json",


                    },
                    withCredentials: true,
                }


            ).then(window.location.reload(false)).catch(error => console.log(error))

        } else {
            return
        }
    }

    const productsColumns = [
        { field: "id", headerName: "ID", width: 130 },

        {
            field: "avatar",
            headerName: "Avatar",
            width: 70,
            renderCell: (params) => {
                return (
                    <img
                        src={params.row.avatar}
                        alt={`${params.row.title}`}
                        style={{
                            padding: "5px",
                            width: "50px",
                            height: "50px",
                            borderRadius: "50%",
                            objectFit: "cover",
                        }}
                    />
                );
            },
        },
        { field: "title", headerName: "Title", width: 200 },

        {
            field: "stock",
            headerName: "Stock",
            description: "This column has a value getter and is not sortable.",
            sortable: false,
            width: 70,
        },
        { field: "price", headerName: "Price", width: 130 },
        {
            field: "actions",
            headerName: "Actions",
            width: 250,
            renderCell: (params) => {
                return (
                    <div className="actions">
                        <Link to={`/admin/products/${params.row.id}`}>
                            <div className="viewButton">View</div>
                        </Link>
                        <div
                            className="deleteButton"
                            onClick={() => handleDelete(params.row.id)}
                        >
                            Delete
                        </div>
                    </div>
                );
            },
        },
    ];


    const rows =
        products.length > 0 &&
        products.map((product) => {
            return {
                id: product._id,
                avatar:
                    product.image[product?.featuredImg ? product?.featuredImg : 0],
                title: product.title,
                stock: product.quantity,
                price: product.price,
            };
        });



    return (

        <div className="datatable">
            <button className="button" onClick={() => navigate(`/admin/products/new`)}>New Product</button>
            <div style={{ height: 400, width: "100%", padding: "10px" }}>
                <DataGrid
                    rows={rows}
                    columns={productsColumns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                />
            </div>
        </div>
    )
}

export default ProductTable