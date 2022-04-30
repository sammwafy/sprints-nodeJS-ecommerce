const OrderDetails = () => {
  return (
    <div>
      <div className="shipping">
        <h2>shipping</h2>
        <p>name:</p>
        <p>adress:</p>
      </div>
      <div className="">
        <h2> payment </h2>
        <p> method: </p>
      </div>
      <div>
        <h2>order items</h2>
        <img src="a1.jpg" alt="item" />
        <p> details of item </p>
        <p> quantity and price </p>
      </div>
      <div>
        <h2>order summary</h2>
        <p>items:</p>
        <p>shipping:</p>
        <p>total:</p>
      </div>
    </div>
  );
};
export default OrderDetails;
