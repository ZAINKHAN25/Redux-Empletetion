import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mainarr: [],
};

const mainArraySlice = createSlice({
  name: "mainarray",
  reducers: {
    addMainArray: (state = initialState, action) => {
      state.mainarr = action.payload;
    },
  },
  initialState,
});

export const { addMainArray } = mainArraySlice.actions;
export default mainArraySlice.reducer;