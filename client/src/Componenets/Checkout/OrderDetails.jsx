import Layout from "../Layout/Layout";
import "./orderDetails.scss";

const OrderDetails = () => {
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
          <p>name : {order.userId}</p>
          <p>adress :</p>
          <p>{order.adress.street}</p>
          <p>{order.adress.city}</p>
          <p>{order.adress.country}</p>
        </section>
        <section className="payment">
          <h2> payment </h2>
          <hr />
          <p> method : {order.paymentMethod} </p>
        </section>
        <section className="order-items">
          <h2>order items</h2>
          <hr />
          {order.products.map((product) => (
            <div>
              <img src="" alt="item" />
              <div className="paragraph">
                <p> {product.productId} </p>
                <p>
                  {`${product.quantity}×${product.price} ${
                    product.quantity * product.price
                  } `}
                </p>
              </div>
            </div>
          ))}
        </section>
        <section className="order-summary">
          <h2>order summary</h2>
          <hr />
          <p>items :</p>
          <p>shipping :</p>
          <p>total :</p>
          <div className="order-state">
            <p> status : pending </p>
            <button> cancel order </button>
          </div>
        </section>
      </div>
    </Layout>
  );
};
export default OrderDetails;
