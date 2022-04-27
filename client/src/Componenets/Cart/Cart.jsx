import "./cart.scss";
import { AiOutlineHome, AiOutlineClose, AiOutlineSync } from "react-icons/ai";
import {
  BsArrowRight,
  BsArrowDown,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Quantity from "./Quantity";
import { useState } from "react";
import { Collapse } from "react-bootstrap";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "../../Hooks/axios";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function createData(image, productName, quantity, unitPrice, total) {
  return { image, productName, quantity, unitPrice, total };
}


export default function Cart() {
  const [open, setOpen] = useState(false);



  // redirection
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  //continue shopping
  const continuShopping = () => {
    from
      ? setTimeout(() => navigate(from, { replace: true }))
      : setTimeout(() => navigate("/"), 2000);
  }


  //get items to cart rows
  const cartItems = useSelector(state => state.cart)

  const [products, setProducts] = useState([])

  useEffect(() => {
    Promise.all(cartItems.map(item =>
      axios.get(`/api/products/find/${item.productId}`).then(res => setProducts(prev => [...prev, res.data])).catch(err => console.log(err))
    ))
  }, [])

  console.log(products);
  console.log(cartItems);

  const rows = products && products.map((product) => {
    let qty = cartItems.filter((item) => item.productId === product._id)[0]
    return createData(
      <img src={product?.image[0]} alt="product?Img" />,
      <div>
        <p>{product?.title}</p> <p>{product?.categories[0]}</p>
      </div>,
      <div className="table-quantity">
        <Quantity quantity={qty.quantity} id={qty.productId} />
        <button className="butt">
          <AiOutlineSync />
        </button>
        <button className="butt">
          <AiOutlineClose />
        </button>
      </div>,
      <p>{product?.price}</p>,
      <p>{product?.price * qty.quantity}</p>
    )
  })
  console.log(rows);

  return (
    <div className="cart-container">
      <div className="cart-nav">
        <a href="/">
          <AiOutlineHome />
        </a>
        <p>
          <span> &#47; </span> shopping cart
        </p>
      </div>
      <div className="cart-title">
        <h2> Shopping Cart (0.00kg) </h2>
      </div>
      <div className="cart">
        <div className="main-cart">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead className="table-head">
                <TableRow>
                  <TableCell align="center">IMAGE</TableCell>
                  <TableCell align="center">PRODUCT NAME</TableCell>
                  <TableCell align="center">QUANTITY</TableCell>
                  <TableCell align="center">UNIT PRICE</TableCell>
                  <TableCell align="center">TOTAL</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {rows.map((row) => (
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
        <div className="to-do-next">
          <p className="title">
            WHAT WOULD YOU LIKE TO DO NEXT?
            <p className="line"> ـــــــــــــــــــــــ </p>
          </p>
          <div className="coupon">
            <div
              className="click-on"
              onClick={() => setOpen(!open)}
              aria-controls="example-collapse-text"
              aria-expanded={open}
            >
              <div className="bottom-border">
                <p className="use-copon">USE COUPON CODE</p>
                <div className="arrow">
                  {open ? <BsArrowDown /> : <BsArrowRight />}
                </div>
              </div>
            </div>
            <Collapse in={open} className="col">
              <div className="collapse">
                <p>Enter your coupon here</p>
                <div className="in-collapse">
                  <input type="text" />
                  <button> APPLY COUPON</button>
                </div>
              </div>
            </Collapse>
          </div>
          <div className="sub-total">
            Sub-Total : <span className="sub-total-num">$ 1,50.00</span>
          </div>
          <div className="sub-total">
            Total : <span className="sub-total-num">$ 1,668.00</span>
          </div>
          <div className="check-continu">
            <button className="continu" onClick={continuShopping}>
              <BsArrowLeftShort className="arow" /> CONTINU SHOPPING
            </button>
            <button className="check">
              CHECK OUT <BsArrowRightShort className="arow" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
