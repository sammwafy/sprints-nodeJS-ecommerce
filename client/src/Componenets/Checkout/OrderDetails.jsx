import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useParams } from "react-router-dom";
import axios from "../../Hooks/axios";
import Layout from "../Layout/Layout";
import "./orderDetails.scss";

const OrderDetails = () => {
  const [orders, setOrders] = useState([]);
  const [produts, setProducts] = useState([]);
  const [cookies, setCookie] = useCookies(["token", "id"]);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`/api/orders/find/${id}`, {
        headers: {
          token: "Bearer " + cookies.token,
          "Content-Type": "application/json",
        },
      })
      .then((res) => setOrders(res.data))
      .catch((error) => console.log(error));
  }, []);

  // useEffect(() => {
  //   orders &&
  //     Promise.all(
  //       orders.products.map((item) =>
  //         axios
  //           .get(`/api/products/find/${item.productId}`)
  //           .then((res) => setProducts((prev) => [...prev, res.data]))
  //           .catch((err) => console.log(err))
  //       )
  //     );
  // }, [orders]);
  console.log(orders);
  const order = {
    userId: "admin",
    paymentMethod: "payment on delivery",
    products: [
      {
        productId: "mirror",
        quantity: 3,
        price: 100,
      },
      {
        productId: "sofa",
        quantity: 1,
        price: 1500,
      },
    ],
    amount: 3456,
    adress: {
      street: "abc st.",
      city: "cairo",
      country: "Egypt",
    },
    status: "pending",
  };

  return (
    <Layout>
      <div className="order-details">
        <section className="shipping">
          <h2>shipping</h2>
          <hr />
          <p>name : {cookies.username}</p>
          <p>adress :</p>
          <p>{orders?.address?.street || "no address"}</p>
          <p>{orders?.address?.city || "no address"}</p>
          <p>{orders?.address?.country || "no address"}</p>
        </section>
        <section className="payment">
          <h2> payment </h2>
          <hr />
          <p> method : {orders.payment} </p>
        </section>
        <section className="order-items">
          <h2>order items</h2>
          <hr />
          {/* {orders &&
            orders.products.map((product, index) => (
              <div>
                <img src={produts[index].image[0]} alt="item" />
                <div className="paragraph">
                  <p> {produts[index].title} </p>
                  <p>
                    {`${product.quantity}×${produts[index].price} ${
                      product.quantity * produts[index].price
                    } `}
                  </p>
                </div>
              </div>
            ))} */}
        </section>
        <section className="order-summary">
          <h2>order summary</h2>
          <hr />
          <p>items : {orders.length}</p>
          <p>shipping :{} </p>
          <p>total :</p>
          <div className="order-state">
            <p> status : {orders.status} </p>
            <button> cancel order </button>
          </div>
        </section>
      </div>
    </Layout>
  );
};
export default OrderDetails;
