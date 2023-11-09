import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sidebar: false,
};

const counterSlice = createSlice({
  name: "sidebar",
  reducers: {
    changesidebar: (state = initialState, action) => {
      state.sidebar = !state.sidebar;
      console.log("state", state.sidebar);
      console.log("action", action.payload);
    },
  },
  initialState,
});

export const { changesidebar } = counterSlice.actions;
export default counterSlice.reducer;