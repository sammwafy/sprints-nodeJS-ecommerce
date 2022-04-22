import { useState } from "react";
import "./cart.scss";

export default function Quantity() {
  const [count, setCount] = useState(1);

  const increament = () => {
    setCount(count + 1);
  };
  const decreament = () => {
    setCount(count - 1);
  };

  return (
    <div className="container">
      <button onClick={increament}>
        {" "}
        <span> &#43;</span>{" "}
      </button>
      <button onClick={decreament}>
        {" "}
        <span> &#8722;</span>{" "}
      </button>
      <p> {count < 1 ? 1 : count} </p>
    </div>
  );
}
