import { useState } from "react";
import "./cart.scss";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cartSlice";
import { useEffect } from "react";

export default function Quantity({ quantity, id }) {
  const [count, setCount] = useState(quantity);
  const cartItems = useSelector(state => state.cart)
  const dispatch = useDispatch()

  //update qty of cart item
  useEffect(() => {
    dispatch(cartActions.updateCart({ id: id, count: count }))
  }, [count])


  const increament = () => {
    setCount(count => count + 1);
  };
  const decreament = () => {
    setCount(count => count > 1 ? count - 1 : count);
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
