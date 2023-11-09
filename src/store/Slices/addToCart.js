import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addtocardarr: [],
};

const counterSlice = createSlice({
  name: "addtocounter",
  reducers: {
    addCounter: (state = initialState, action) => {
      state.addtocardarr = state.addtocardarr.push(action.payload);
      console.log("state", state.addtocardarr);
      console.log("action", action.payload);
    },
  },
  initialState,
});

export const { addCounter } = counterSlice.actions;
export default counterSlice.reducer;