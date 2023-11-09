import { configureStore } from "@reduxjs/toolkit";
import cartslice from './Slices/addToCart.js'
import sidebar from './Slices/sidebartrue.js'

const store = configureStore({
  reducer: {
    cartslice,  
    sidebar,  
  },
});

export default store;