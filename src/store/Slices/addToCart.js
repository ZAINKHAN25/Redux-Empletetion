import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addtocardarr: [],
};

const counterSlice = createSlice({
  name: "addtocounter",
  reducers: {
    addCounter: (state = initialState, action) => {
      const arr = state.addtocardarr;
      const secondarr = [...arr,action.payload]
      state.addtocardarr = secondarr;
    },
  },
  initialState,
});

export const { addCounter } = counterSlice.actions;
export default counterSlice.reducer;