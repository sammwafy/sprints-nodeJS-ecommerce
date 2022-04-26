/** @format */

import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productsSlice";
import usersSlice from "./usersSlice";
const store = configureStore({
	reducer: {
		products: productSlice,
		users: usersSlice,

		
	},
});

export default store;
