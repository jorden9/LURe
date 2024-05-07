import {configureStore} from "@reduxjs/toolkit";
import { apiSLice } from "./slices/slices.js";
//import { getDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";
import authReducer from './slices/authSlices.js'
import cartSlicesReducer from "./slices/cartSlices.js";
const store = configureStore({
    reducer:{
    [apiSLice.reducerPath]: apiSLice.reducer,
    cart: cartSlicesReducer, 
    auth: authReducer,  
},
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSLice.middleware),
    devTools: true
})

export default store