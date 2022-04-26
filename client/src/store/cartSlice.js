/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initialValue = [];

const cartSlice = createSlice({
	name: "cart",
	initialState: initialValue,
	reducers: {
		addtoCart(state, action) {
			return (state = action.payload);
		},
	},
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
