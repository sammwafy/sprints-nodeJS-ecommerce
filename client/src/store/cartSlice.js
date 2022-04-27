/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initialValue = [];

const cartSlice = createSlice({
	name: "cart",
	initialState: initialValue,
	reducers: {
		addtoCart(state, action) {
			state.push(action.payload);
		},
		setCart(state, action) {
			return (state = action.payload);
		},
		updateCart(state, action) {
			console.log(action.payload);

			const newState = { ...state };
			state.map((item) => {
				item.productId === action.payload.id;
			});
			state.push({
				productId: action.payload.id,
				quantity: action.payload.count,
			});
		},
	},
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
