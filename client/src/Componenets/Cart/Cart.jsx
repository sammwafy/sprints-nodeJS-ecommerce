import "./cart.scss";
import { AiOutlineHome } from "react-icons/ai";
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

function createData(image, productName, model, quantity, unitPrice, total) {
  return { image, productName, model, quantity, unitPrice, total };
}

const rows = [
  createData(
    <img src="a1.jpg" alt="productImg" />,
    <div>
      {" "}
      <a href="/">product name</a> <p> discripe 1</p> <p>discripe 2</p>{" "}
    </div>,
    <p>model num</p>,
    <div>
      {" "}
      <Quantity /> <button> update</button> <button> remove</button>
    </div>,
    <p>unit price</p>,
    <p>total</p>
  ),
  createData(
    <img src="a1.jpg" alt="productImg" />,
    <div>
      {" "}
      <a href="/">product name</a> <p> discripe 1</p> <p>discripe 2</p>{" "}
    </div>,
    <p>model num</p>,
    <div>
      {" "}
      <Quantity /> <button> update</button> <button> remove</button>{" "}
    </div>,
    <p>unit price</p>,
    <p>total</p>
  ),
  createData(
    <img src="a1.jpg" alt="productImg" />,
    <div>
      {" "}
      <a href="/">product name</a> <p> discripe 1</p> <p>discripe 2</p>{" "}
    </div>,
    <p>model num</p>,
    <div>
      {" "}
      <Quantity /> <button> update</button> <button> remove</button>{" "}
    </div>,
    <p>unit price</p>,
    <p>total</p>
  ),
];

export default function Cart() {
  const [open, setOpen] = useState(false);
  return (
    <div className="cart-container">
      <div className="cart-nav">
        <a href="/" className="to-home">
          <AiOutlineHome />
        </a>
        <span> &#47; </span>
        <p>shopping cart</p>
      </div>
      <div className="cart-title">
        <h2> Shopping Cart (0.00kg) </h2>
      </div>
      <div className="cart">
        <div className="main-cart">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>IMAGE</TableCell>
                  <TableCell align="right">PRODUCT NAME</TableCell>
                  <TableCell align="right">MODEL</TableCell>
                  <TableCell align="right">QUANTITY</TableCell>
                  <TableCell align="right">UNIT PRICE</TableCell>
                  <TableCell align="right">TOTAL</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.image}
                    </TableCell>
                    <TableCell align="right">{row.productName}</TableCell>
                    <TableCell align="right">{row.model}</TableCell>
                    <TableCell align="right">{row.quantity}</TableCell>
                    <TableCell align="right">{row.unitPrice}</TableCell>
                    <TableCell align="right">{row.total}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <div className="to-do--next">
          <h1> WHAT WOULD YOU LIKE TO DO NEXT? </h1>
          <h3> ــــــــــــــــــــــ </h3>
          <div
            className="coupon"
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
          >
            <p> USE COUPON CODE</p>
            {open ? <BsArrowDown /> : <BsArrowRight />}
          </div>
          <Collapse in={open}>
            <div className="collapse">
              <p>Enter your coupon here</p>
              <div className="in-collapse">
                <input type="text" />
                <button> APPLY COUPON</button>
              </div>
            </div>
          </Collapse>
          <div className="sub-total">
            Sub-Total: <span>$1,50.00</span>
          </div>
          <div className="total">
            Total: <span>$1,668.00</span>
          </div>
          <div className="check-continu">
            <button>
              <BsArrowLeftShort /> CONTINU SHOPPING
            </button>
            <button>
              CHECK OUT <BsArrowRightShort />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
