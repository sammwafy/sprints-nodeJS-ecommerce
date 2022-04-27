/** @format */

import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import productSlice from "./productsSlice";
import usersSlice from "./usersSlice";

const theCart = JSON.parse(localStorage.getItem("cart"));
const initialValue = theCart?.products || {};

const store = configureStore({
  reducer: {
    products: productSlice,
    users: usersSlice,
    cart: cartSlice,
  },
  initialValue,
  reducers: {
    reset: () => initialValue,
  },
});

export default store;
