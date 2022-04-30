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
import useAuth from "../../Hooks/useAuth";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cartSlice";

function createData(image, productName, quantity, unitPrice, total) {
  return { image, productName, quantity, unitPrice, total };
}

export default function Cart() {
  //Collapse open close state
  const [open, setOpen] = useState(false);

  // redirection
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  //................................................................
  //continue shopping
  const continuShopping = () => {
    from
      ? setTimeout(() => navigate(from, { replace: true }))
      : setTimeout(() => navigate("/"), 2000);
  };
  //go checkout page
  const goCheckout = () => {
    setTimeout(() => navigate("/checkout"), 2000);
  };
  //................................................................

  //get glopal info about login user and cartProducts
  const { auth, cartProducts, setCartProducts } = useAuth();

  //get array of items in cart slice id/quantity
  const cartItems = useSelector((state) => state.cart);


  useEffect(() => {
    //get products by id from backend and set to cartProducts global state
    cartItems.length > 0 &&
      Promise.all(
        cartItems.map((item) =>
          axios
            .get(`/api/products/find/${item.productId}`)
            .then((res) => setCartProducts((prev) => [...prev, res.data]))
            .catch((err) => console.log(err))
        )
      );
  }, []);


  ////set cart to local and database............
  useEffect(() => {
    let newArr = [];
    newArr = JSON.parse(localStorage.getItem("cart")) || [];
    newArr.products = cartItems;

    localStorage.setItem("cart", JSON.stringify(newArr));

    if (auth?.username && cartItems.length > 0) {
      axios
        .put(
          `/api/carts/${auth?.id}`,
          {
            userId: auth?.id,
            products: cartItems,
          },
          {
            headers: {
              "Content-Type": "application/json",
              token: `Bearer ${auth?.token}`,
            },
            withCredentials: true,
          }
        )
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
    }

    /** get user cart for admin */
    //     axios.get(`/api/carts/find/${auth?.id}`,
    //       {
    //         headers: {
    //           "Content-Type": "application/json",
    //           "token": `Bearer ${auth?.token}`
    //         },
    //         withCredentials: true,
    //       }).then(res => localStorage.setItem("cart", JSON.stringify(res.data)))
    //       .catch(err => console.log(err))
    //   } else {
    //     localStorage.setItem("cart", JSON.stringify(cartItems))
    //   }
  }, [cartProducts]);

  //dispatch to cart slice
  const dispatch = useDispatch()
  //handle remove from cart buttons
  const handleDelete = (e, id) => {
    const filteredProducts = cartProducts.filter(product => product._id !== id)
    const filteredCart = cartItems.filter(item => item.productId !== id)
    setCartProducts(filteredProducts)
    dispatch(cartActions.setCart(filteredCart))
  }
  useEffect(() => {



  }, [cartProducts])

  let totalPrice = 0;
  const rows =
    cartItems.map((item) => {
      let currentProduct = cartProducts.filter((product) => product._id === item.productId)[0]

      let price = item?.quantity * currentProduct?.price;
      totalPrice += price;
      return createData(
        <img src={currentProduct?.image[0]} alt="product?Img" />,
        <div>
          <p>{currentProduct?.title}</p> <p>{currentProduct?.categories[0]}</p>
        </div>,
        <div className="table-quantity">
          <Quantity quantity={item.quantity} id={item.productId} />
          <button className="butt">
            <AiOutlineSync />
          </button>
          <button className="butt" onClick={(e) => handleDelete(e, currentProduct._id)}>
            <AiOutlineClose />
          </button>
        </div>,
        <p>{currentProduct?.price}</p>,
        <p>{currentProduct?.price * item.quantity}</p>
      );


    });

  console.log(rows);
  console.log(cartItems);
  console.log(cartProducts);

  return (
    <div className="cart-container">
      <div className="cart-nav">
        <Link to="/">
          <AiOutlineHome />
        </Link>
        <p>
          <span> &#47; </span> shopping cart
        </p>
      </div>
      <div className="cart-title">
        <h2> Shopping Cart </h2>
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
                {rows && rows.map((row) => (
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
            Sub-Total :{" "}
            <span className="sub-total-num">{`$ ${totalPrice}`}</span>
          </div>
          <div className="sub-total">
            Total : <span className="sub-total-num">{`$ ${totalPrice}`}</span>
          </div>
          <div className="check-continu">
            <button className="continu" onClick={continuShopping}>
              <BsArrowLeftShort className="arow" /> CONTINU SHOPPING
            </button>
            <button className="check" onClick={goCheckout}>
              CHECK OUT <BsArrowRightShort className="arow" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
