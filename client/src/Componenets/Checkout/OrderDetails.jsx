import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useParams } from "react-router-dom";
import axios from "../../Hooks/axios";
import Layout from "../Layout/Layout";
import "./orderDetails.scss";

const OrderDetails = () => {
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
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

  useEffect(() => {
    orders[0] &&
      Promise.all(
        orders[0]?.products.map((item) =>
          axios
            .get(`/api/products/find/${item.productId}`)
            .then((res) => setProducts((prev) => [...prev, res.data]))
            .catch((err) => console.log(err))
        )
      );
  }, []);
  console.log(orders);
  console.log(products);

  return (
    <Layout>
      <div className="order-details">
        <section className="shipping">
          <h2>shipping</h2>
          <hr />
          <p>name : {cookies.username}</p>
          <p>adress :</p>
          <p>{orders[0]?.address?.street || "no address"}</p>
          <p>{orders[0]?.address?.city || "no address"}</p>
          <p>{orders[0]?.address?.country || "no address"}</p>
        </section>
        <section className="payment">
          <h2> payment </h2>
          <hr />
          <p> method : {orders[0]?.payment} </p>
        </section>
        <section className="order-items">
          <h2>order items</h2>
          <hr />
          {products.length > 0 &&
            orders[0]?.products.map((product, index) => (
              <div>
                <img src={products[index]?.image[0]} alt="item" />
                <div className="paragraph">
                  <p> {products[index]?.title} </p>
                  <p>
                    {`${product.quantity}×${products[index].price} ${product.quantity * products[index].price
                      } `}
                  </p>
                </div>
              </div>
            ))}
        </section>
        <section className="order-summary">
          <h2>order summary</h2>
          <hr />
          <p>items : {orders[0]?.products.reduce((acc, e) => acc + e.quantity, 0)}</p>
          <p>shipping :no Shipping </p>
          <p>total :$ {orders[0]?.amount}</p>
          <div className="order-state">
            <p> status : {orders[0]?.status} </p>
            <button> cancel order </button>
          </div>
        </section>
      </div>
    </Layout>
  );
};
export default OrderDetails;
