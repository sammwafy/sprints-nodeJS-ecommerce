/** @format */

import { createSlice } from "@reduxjs/toolkit";
const initialValue = { authUser: "sara", users: [] };
const usersSlice = createSlice({
	name: "users",
	initialState: initialValue,
	reducers: {
		login(state, action) {
			state.authUser = action.payload;
		},
		getUsers(state, action) {
			state.users = action.payload;
		},
	},
});

export const usersActions = usersSlice.actions;
export default usersSlice.reducer;
