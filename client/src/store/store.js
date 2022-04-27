/** @format */

import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import productSlice from "./productsSlice";
import usersSlice from "./usersSlice";
const store = configureStore({
	reducer: {
		products: productSlice,
		users: usersSlice,
		cart: cartSlice,
	},
});

export default store;
