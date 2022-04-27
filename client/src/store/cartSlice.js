/** @format */

import { createSlice } from "@reduxjs/toolkit";

// const initialValue = JSON.parse(localStorage.getItem("cart")).products || [];

const theCart = JSON.parse(localStorage.getItem("cart")) 
const initialValue = theCart?.products || [];
const cartSlice = createSlice({
	name: "cart",
	initialState: initialValue,
	reducers: {
		addtoCart(state, action) {
			state.push(action.payload);
		},
    reset(state,action){
      state= {}
    },
		setCart(state, action) {
			return (state = action.payload);
		},
		updateCart(state, action) {

			const targetIndex = state.findIndex(
				(item) => item.productId === action.payload.id
			);
      
			return state.map((item, i) =>
				i === targetIndex
					? {
							...item,
							quantity: action.payload.count,
					  }
					: item
			);

			/** using slice instead of map */
			// return [
			//   ...state.slice(0, targetIndex),
			//   {
			//     ...state[targetIndex],
			//     quantity: action.payload.count,
			//   },
			//   ...state.slice(targetIndex + 1),
			// ];
		},
	},
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
