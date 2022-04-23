import { useState } from "react";
import "./cart.scss";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

export default function Quantity() {
  const [count, setCount] = useState(1);

  const increament = () => {
    setCount(count + 1);
  };
  const decreament = () => {
    setCount(count - 1);
  };

  return (
    <div className="quantity">
      <p>{count < 1 ? 1 : count}</p>
      <div className="quantity-buttons">
        <button className="small-button" onClick={increament}>
          <BsChevronUp className="up" />
        </button>
        <button className="small-button" onClick={decreament}>
          <BsChevronDown className="up" />
        </button>
      </div>
    </div>
  );
}
