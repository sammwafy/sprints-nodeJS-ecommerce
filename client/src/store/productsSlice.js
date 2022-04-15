/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initialValue = [];

const productSlice = createSlice({
	name: "products",
	initialstate: initialValue,
	reducers: {
		getProducts(state, action) {
			return (state = action.payload);
		},
		removeProduct(state, action) {
			state.filter((product) => product._id !== action.payload);
		},
		addProduct(state, action) {
			state.push(action.payload);
		},
		updateProduct(state, action) {
			//update in backend
			state.push(action.payload);
		},
	},
});
