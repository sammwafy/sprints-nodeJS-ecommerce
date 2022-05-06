import "./checkout.scss"
import PersonalForm from "./PersonalForm"
import PaymentForm from "./PaymentForm"
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import Paper from "@mui/material/Paper";
import { useState } from "react"
import { useSelector } from "react-redux"
import axios from "../../Hooks/axios"
import { useEffect } from "react"
import { Button, Collapse, Form } from "react-bootstrap";
import { FaCcVisa } from "react-icons/fa";
import { BsCashCoin } from "react-icons/bs";
import useAuth from "../../Hooks/useAuth";
import CardSection from './CardSection';



//strip................................
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from "@stripe/stripe-js";


// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");



//table rows function
function createData(image, productName, quantity, unitPrice, total) {
    return { image, productName, quantity, unitPrice, total };
}


const CheckoutLayout = () => {


    //Collapse open/close
    const [open, setOpen] = useState(false);

    //cart info
    const cartItems = useSelector(state => state.cart)
    const [products, setProducts] = useState([])
    const { auth, cartProducts, setCartProducts } = useAuth();
    console.log(cartProducts);

    //adress form state and actions
    const [inputData, setInputData] = useState({});
    console.log(inputData);

    const handleChange = (e) => {
        setInputData((prevState) => {
            return { ...prevState, [e.target.name]: e.target.value };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        console.log(Object.fromEntries([...formData]));
    }
    //................................................................

    const rows = cartItems.length > 0 && cartItems.map((item) => {
        let product = cartProducts.filter(product => product._id === item.productId)[0]

        return createData(
            <img src="" alt="product?Img" />,
            <div>
                <p>{product?.title}</p>
            </div>,
            <div className="table-quantity">
                {item.quantity}
            </div>,
            <p>{product?.price}</p>,
            <p>{product?.price * item.quantity}</p>)
    })


    return (
        <div className="checkout-wrapper">
            <div className="checkout-top">
                <h4 className="checkout-title">PAYMENT METHOD</h4>
                <div className="mb-4 px-3">


                    <Form.Check
                        inline
                        label="Cash on delivery"
                        name="group1"
                        type="radio"
                        id={`inline-radio-1`}
                        onChange={(e) => e.target.checked ? setOpen(false) : ""}
                        className="mx-3"
                    />
                    <BsCashCoin style={{ fontSize: "20px", marginLeft: "-10px" }} />
                    <Form.Check
                        inline
                        label="Pay with card"
                        name="group1"
                        type="radio"
                        id={`inline-radio-2`}
                        onChange={(e) => e.target.checked ? setOpen(true) : ""}
                        className="mx-3"

                    />
                    <FaCcVisa style={{ fontSize: "20px", marginLeft: "-10px" }} />
                </div>
            </div>

            <Collapse in={open}>


                {/* try stripe..... */}
                <div className="chechout-middle">
                    <h4 className="checkout-title">card DETAILS</h4>
                    <Elements stripe={stripePromise}>
                        <CheckoutForm />
                    </Elements>
                </div>
                {/* try stripe...... */}

            </Collapse>

            <div className="checkout-bottom">
                <div className="checkout-bottom-left">


                    <PaymentForm handleSubmit={handleSubmit} onChange={handleChange} />
                </div>
                <div className="checkout-bottom-right">
                    <h4 className="checkout-title">ORDER DETAILS</h4>

                    <div className="checkout-oeder-details">
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead className="table-head" sx={{ background: " rgb(222, 220, 220)" }}>
                                    <TableRow>
                                        <TableCell align="center">IMAGE</TableCell>
                                        <TableCell align="center">PRODUCT NAME</TableCell>
                                        <TableCell align="center">QUANTITY</TableCell>
                                        <TableCell align="center">UNIT PRICE</TableCell>
                                        <TableCell align="center">TOTAL</TableCell>
                                    </TableRow>
                                </TableHead>

                                <TableBody>
                                    {rows.length > 0 && rows.map((row) => (
                                        <TableRow
                                            key={row.name}
                                            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                                        >
                                            <TableCell align="center" component="th" scope="row">
                                                {row?.image}
                                            </TableCell>
                                            <TableCell align="center">{row.productName}</TableCell>
                                            <TableCell align="center">{row.quantity}</TableCell>
                                            <TableCell align="center">{row.unitPrice}</TableCell>
                                            <TableCell align="center">{row.total}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                    <div className="checkout-bottom-right-summary">
                        <div className="checkout-summary">
                            <div className="checkout-summary-line">
                                <span className="checkout-summary-title">APPLYED COUPON:</span>
                                <span className="checkout-summary-value">NONE</span>
                            </div>
                        </div>
                    </div>
                    <div className="checkout-bottom-right-summary">
                        <div className="checkout-summary">
                            <div className="checkout-summary-line">
                                <span className="checkout-summary-title">SUB-TOTAL :</span>
                                <span className="checkout-summary-value">12300 $</span>
                            </div>
                            <div className="checkout-summary-line">
                                <span className="checkout-summary-title">SHIPPING RATE :</span>
                                <span className="checkout-summary-value">12300 $</span>
                            </div>
                            <div className="checkout-summary-line">
                                <span className="checkout-summary-title">TOTAL :</span>
                                <span className="checkout-summary-value">12300 $</span>
                            </div>
                        </div>
                    </div>
                    <Button variant="dark" className="checkout-button">place order</Button>
                </div>
            </div>



        </div>
    )
}

export default CheckoutLayout