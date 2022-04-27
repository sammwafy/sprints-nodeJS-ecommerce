/** @format */

import React, { useState } from "react";
import { useEffect } from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import {
  FaAngleDown,
  FaAngleUp,
  FaDollarSign,
  FaShoppingBag,
} from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { cartActions } from "../../../store/cartSlice";

const AddToCarts = ({ id }) => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {

    // localStorage.setItem("cart", JSON.stringify({ id: id, count: quantity }));
    dispatch(cartActions.updateCart({ id: id, count: quantity }));


  }, [quantity]);

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const DecrementQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const addToCart = () => {
    const cartItemsClone = [...cartItems];
    const inThecart = cartItemsClone.filter((item) => item.productId === id);
    console.log(inThecart);
    if (inThecart.length > 0) {
      const newCartItems = cartItemsClone.filter(
        (item) => item.productId !== id
      );
      const modifiedProduct = {
        ...inThecart[0],
        quantity: inThecart[0].quantity + 1,
      };
      newCartItems.push(modifiedProduct);
      dispatch(cartActions.setCart(newCartItems));
    } else {
      dispatch(
        cartActions.addtoCart({
          productId: id,
          quantity: 1,
        })
      );
    }
  };

  return (
    <div className="add-to-cart">
      <div className="incremental">
        <FormControl
          type="number"
          aria-label="quantity"
          min="1"
          value={quantity}
        />
        <div className="d-flex flex-column">
          <Button variant="outline-secondary" onClick={incrementQuantity}>
            <FaAngleUp />
          </Button>
          <Button variant="outline-secondary" onClick={DecrementQuantity}>
            <FaAngleDown />
          </Button>
        </div>
      </div>

      <Button variant="dark" onClick={addToCart}>
        <FaShoppingBag />
        Add to cart
      </Button>
      <Button variant="success" onClick={addToCart}>
        <FaDollarSign />
        buy now
      </Button>
    </div>
  );
};

export default AddToCarts;
