import { configureStore } from "@reduxjs/toolkit";
import { ApiService } from "./service/ApiService";
import cartReducer, { getTotalAmount, getTotalQuantity } from "./features/cartSlice";
import { useEffect } from "react";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        [ApiService.reducerPath]: ApiService.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(ApiService.middleware),
})

store.dispatch(getTotalQuantity());
store.dispatch(getTotalAmount());
