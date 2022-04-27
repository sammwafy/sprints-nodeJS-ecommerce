import { createSlice } from "@reduxjs/toolkit";

const initialState = {}

export const counterSlice = createSlice({
  name: "reset",
  initialState,
  reducers: {
    reset: () => initialState,
  },
});

export const {  reset } = counterSlice.actions;

export default counterSlice.reducer;
