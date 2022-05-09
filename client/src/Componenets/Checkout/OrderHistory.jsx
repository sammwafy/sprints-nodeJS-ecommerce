import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { format } from "date-fns";
import data from "./data";
import "./orderHistory.scss";
import axios from "../../Hooks/axios";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);
  const [cookies, setCookie] = useCookies(["token", "id"]);
  useEffect(() => {
    axios
      .get(`/api/orders/details/${cookies.id}`, {
        headers: {
          token: "Bearer " + cookies.token,
          "Content-Type": "application/json",
        },
      })
      .then((res) => setOrders(res.data))
      .catch((error) => console.log(error));
  }, []);
  console.log(orders);
  return (
    <Layout>
      <div>
        <h2>Order History</h2>
        <div className="order-history">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead className="table-head">
                <TableRow>
                  <TableCell align="center">ID</TableCell>
                  <TableCell align="center">DATE</TableCell>
                  <TableCell align="center">TOTAL</TableCell>
                  <TableCell align="center">PAID</TableCell>
                  <TableCell align="center">STATUSE</TableCell>
                  <TableCell align="center">ACTIONS</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center">
                    <p> MKJHNBG542187HGFD</p>
                  </TableCell>
                  <TableCell align="center">
                    <p>
                      <div>
                        {data.map((post) => (
                          <p>{format(post.createdAt, "dd/mm/yyyy")}</p>
                        ))}
                      </div>
                    </p>
                  </TableCell>
                  <TableCell align="center">
                    <p>254136</p>
                  </TableCell>
                  <TableCell align="center">
                    <p>no</p>
                  </TableCell>
                  <TableCell align="center">
                    <p>bending</p>
                  </TableCell>
                  <TableCell align="center">
                    <Link to="/details" className="details">
                      Details
                    </Link>
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center">
                    <p> MKJHNBG542187HGFD</p>
                  </TableCell>
                  <TableCell align="center">
                    <p>
                      <div>
                        {data.map((post) => (
                          <p>{format(post.createdAt, "dd/mm/yyyy")}</p>
                        ))}
                      </div>
                    </p>
                  </TableCell>
                  <TableCell align="center">
                    <p>254136</p>
                  </TableCell>
                  <TableCell align="center">
                    <p>no</p>
                  </TableCell>
                  <TableCell align="center">
                    <p>arrived</p>
                  </TableCell>
                  <TableCell align="center">
                    <Link to="/details" className="details">
                      Details
                    </Link>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </Layout>
  );
};

export default OrderHistory;
