import { useState } from "react";
import "./cart.scss";
import { AiOutlineCaretUp, AiFillCaretDown } from "react-icons/ai";

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
      <p> {count < 1 ? 1 : count} </p>
      <div className="quantity-buttons">
        <button className="small-button" onClick={increament}>
          <AiOutlineCaretUp />
        </button>
        <button className="small-button" onClick={decreament}>
          <AiFillCaretDown />
        </button>
      </div>
    </div>
  );
}
