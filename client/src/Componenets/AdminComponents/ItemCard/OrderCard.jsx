import { useState } from "react"
import { useEffect } from "react"
import { useCookies } from "react-cookie"
import { useParams } from "react-router-dom"
import axios from "../../../Hooks/axios"
import { Collapse, Form } from 'react-bootstrap';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import "./orderCard.scss"


const OrderCard = () => {
    const { id } = useParams()
    const [cookies, setCookie] = useCookies(["token", "id"]);
    const [order, setOrder] = useState({});
    const [open, setOpen] = useState(false)
    const [status, setStatus] = useState(order.status || "")
    const [user, setUser] = useState({})
    const [products, setProducts] = useState([])

    const handleOpen = () => {
        setOpen(!open);
    };

    const handleChange = (e) => {
        setStatus(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .put(`/api/orders/${id}`, { status: status }, {
                headers: {
                    token: "Bearer " + cookies.token,
                },
                withCredentials: true,
            })
            .then((response) => {
                setOrder(response?.data);
            })

    }

    useEffect(() => {
        axios
            .get(`/api/orders/find/${id}`, {
                headers: {
                    token: "Bearer " + cookies.token,
                },
                withCredentials: true,
            })
            .then((response) => {

                setOrder(response.data[0]);
                axios.get(`/api/users/find/${order.userId}`, {
                    headers: {
                        token: "Bearer " + cookies.token,
                    },
                    withCredentials: true,
                })
                    .then((response) => {
                        setUser(response?.data);
                    })
                    .catch((err) => console.log(err))


            })
            .catch((err) => console.log(err));


    }, [])

    useEffect(() => {

        order?.products && Promise.all(
            order?.products.map((item) =>
                axios
                    .get(`/api/products/find/${item._id}`)
                    .then((res) => setProducts((prev) => [...prev, res.data]))
                    .catch((err) => console.log(err))
            )
        )
    }, [order]);


    console.log(order);
    console.log(user);
    console.log(products);

    return (
        <div className="order-card-container">
            <h4 className="h4">Order Details</h4>

            <div className="section">
                <h4>Personal details</h4>
                <div className="detail-row">
                    <span>Order ID</span>
                    <span className="value">{order?._id}</span>
                </div>
                <div className="detail-row">
                    <span>Name</span>
                    <span className="value">value</span>
                </div>
            </div>

            <div className="section">
                <h4>Products details</h4>
                <div className="product-detail-row">
                    <div className="img-wrapper">
                        <img src="" alt="" />
                    </div>
                    <div className="detail-row">
                        <span>key</span>
                        <span className="value">value</span>
                    </div>
                </div>
                <div className="detail-row">
                    <span>key</span>
                    <span className="value">value</span>
                </div>
            </div>

            <div className="section">
                <h4>Payment method</h4>
                <div className="detail-row">
                    <span>Payment method</span>
                    <span className="value">value</span>
                </div>
            </div>

            <div className="section">
                <h4>Order Status</h4>
                <div className="detail-row">
                    <span>Status</span>
                    <span className="value">value</span>
                </div>
                <button className="button" onClick={() => setOpen(!open)}>Change status</button>
                <Collapse in={open}>

                    <Form className="m-2 p-6" onSubmit={handleSubmit}>
                        <FormControl>
                            <InputLabel id="demo-simple-select-label">{order?.status}</InputLabel>
                            <Select
                                className="select"
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={status}
                                label={order?.status}
                                onChange={handleChange}
                            >
                                <MenuItem value={"pending"}>pending</MenuItem>
                                <MenuItem value={"inReview"}>In review</MenuItem>
                                <MenuItem value={"inProgress"}>In progress</MenuItem>
                                <MenuItem value={"canceled"}>Canceled</MenuItem>
                                <MenuItem value={"onTheWay"}>On the way</MenuItem>
                                <MenuItem value={"delivered"}>Delivered</MenuItem>
                            </Select>
                        </FormControl>
                        <button type="submit" className="button">Update</button>
                    </Form>

                </Collapse>
            </div>

        </div>
    )
}

export default OrderCard