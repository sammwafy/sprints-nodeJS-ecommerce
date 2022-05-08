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

import StripeCheckout from 'react-stripe-checkout';



//strip................................
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from "@stripe/stripe-js";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";


// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.



//table rows function
function createData(image, productName, quantity, unitPrice, total) {
    return { image, productName, quantity, unitPrice, total };
}

const key = "pk_test_51Kwvb1EC091tOSrIKnqiSJtaVVp8ualm3nywRDZ6ckXMXdHUPZieYKGLmDKTgxAFkyCHxUNOKvGVND5bCsoVpXSG00IDvkywA2"


const CheckoutLayout = () => {
    const [cookies, setCookie] = useCookies(["token", "id"]);
    const navigate = useNavigate();


    //stripe requirment
    const [payment, setPayment] = useState(0)
    const [stripeToken, setStripeToken] = useState(null)
    const [totalAmount, setTotalAmount] = useState(0)
    console.log("test", typeof (parseInt(totalAmount)));
    const onToken = (token) => {
        setStripeToken(token)
    }

    useEffect(() => {

        const makeRequest = async () => {
            try {
                const res = await axios.post(`/api/stripe/payment`, {
                    tokenID: stripeToken.id,
                    amount: totalAmount,
                })
                console.log(res.data);
            } catch (err) {
                console.log(err);
            }

        };

        stripeToken && makeRequest()
    }, [stripeToken])


    //

    //cart info
    const cartItems = useSelector(state => state.cart)
    const { auth, cartProducts, setCartProducts } = useAuth();

    //adress form state and actions
    const [inputData, setInputData] = useState({});


    const handleChange = (e) => {
        setInputData((prevState) => {
            return { ...prevState, [e.target.name]: e.target.value };
        });
    };
    console.log(cookies.id);
    console.log(cartItems);
    console.log(totalAmount);
    console.log(inputData);

    const handleCashOrder = (e) => {
        e.preventDefault();
        axios.post(`/api/orders/`,
            {
                userId: cookies.id,
                products: cartItems,
                amount: totalAmount,
                address: inputData,
                status: "pending",
            }
            ,
            {
                headers: {
                    token: "Bearer " + cookies.token,
                    "Content-Type": "application/json",
                },
            }
        )
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = Object.fromEntries([...new FormData(e.currentTarget)]);
        console.log(Object.fromEntries([...new FormData(e.currentTarget)]));
    }
    //................................................................

    let totalPrice = 0
    const rows = cartItems.length > 0 && cartItems.map((item) => {
        let product = cartProducts.filter(product => product._id === item.productId)[0]


        totalPrice += product?.price * item.quantity
        return createData(
            <img src={product?.image[0]} alt={product?.title} className="checkout-img" />,
            <div>
                <p>{product?.title}</p>
            </div>,
            <div className="table-quantity">
                {item.quantity}
            </div>,
            <p>{product?.price}</p>,
            <p>{product?.price * item.quantity}</p>,

        )

    })
    console.log("here", totalPrice);

    useEffect(() => {
        setTotalAmount(totalPrice)
    }, [totalPrice])

    return (
        <div className="checkout-wrapper">
            <div className="checkout-top">
                <h4 className="checkout-title">PAYMENT METHOD</h4>
                <div className="mb-4 px-3">


                    <Form.Check
                        inline
                        label="Cash on delivery"
                        value={payment}
                        name="group1"
                        type="radio"
                        id={`inline-radio-1`}
                        onChange={(e) => setPayment(0)}
                        className="mx-3"
                    />
                    <BsCashCoin style={{ fontSize: "20px", marginLeft: "-10px" }} />
                    <Form.Check
                        inline
                        label="Pay with card"
                        name="group1"
                        type="radio"
                        id={`inline-radio-2`}
                        onChange={(e) => setPayment(1)}
                        className="mx-3"

                    />
                    <FaCcVisa style={{ fontSize: "20px", marginLeft: "-10px" }} />
                </div>
            </div>



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
                                <span className="checkout-summary-value">{totalAmount} $</span>
                            </div>
                            <div className="checkout-summary-line">
                                <span className="checkout-summary-title">SHIPPING RATE :</span>
                                <span className="checkout-summary-value">{totalAmount} $</span>
                            </div>
                            <div className="checkout-summary-line">
                                <span className="checkout-summary-title">TOTAL :</span>
                                <span className="checkout-summary-value">{totalAmount} $</span>
                            </div>
                        </div>
                    </div>




                    {payment === 1 ?

                        <StripeCheckout
                            name="sprints"
                            image="logo192.png"
                            billingAddress
                            shippingAddress
                            discription={`Your  Total is ${totalAmount}`}
                            amount={totalAmount}
                            token={onToken}
                            stripeKey={key}

                        >
                            <Button variant="dark" className="checkout-button" >place order</Button>

                        </StripeCheckout>


                        :
                        <Button variant="dark" className="checkout-button" onClick={handleCashOrder}>place order</Button>

                    }





                </div>
            </div >



        </div >
    )
}

export default CheckoutLayout