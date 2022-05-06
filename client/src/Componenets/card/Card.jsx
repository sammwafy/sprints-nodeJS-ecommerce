/** @format */

import "./card.scss";
import useAuth from "../../Hooks/useAuth";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cartSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Card({ title, price, id, img }) {
  const { auth } = useAuth();
  const [cookies, setCookie] = useCookies([]);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  const addToCart = () => {
    const cartItemsClone = [...cartItems];
    const inThecart = cartItemsClone.filter((item) => item.productId === id);
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
    <div className="card">
      {/* <Link to={`/shop/${id}`}> */}
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img
              src={img[0]}
              alt="Avatar"
              style={{ width: "300px", height: "300px" }}
            />
          </div>
          <div className="flip-card-back" style={{ zIndex: "-1" }}>
            <a href={`/shop/${id}`} style={{ zIndex: "-1" }}>
              <img
                src={img[1]}
                alt="Avatar"
                style={{ width: "300px", height: "300px" }}
              />
            </a>
            <div className="icons" style={{ zIndex: "999999" }}>
              <button className="add" onClick={addToCart}>
                ADD TO CART
              </button>
              <button className="wish-list"> ❤ </button>
            </div>
          </div>
        </div>
      </div>
      {/* </Link> */}
      <div className="card-title">
        <p style={{ fontWeight: "bold" }}> {title} </p>

        <p style={{ color: "crimson", fontWeight: "bold" }}> {price}$</p>
      </div>
    </div>
  );
}
