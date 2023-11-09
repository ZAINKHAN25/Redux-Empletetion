import { configureStore } from "@reduxjs/toolkit";
import cartslice from './Slices/addToCart.js'
import sidebar from './Slices/sidebartrue.js'
import mainArraySlice from './Slices/alldata.js'

const store = configureStore({
  reducer: {
    cartslice,  
    sidebar,  
    mainArraySlice
  },
});

export default store;