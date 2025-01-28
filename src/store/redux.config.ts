import { configureStore } from "@reduxjs/toolkit";
import loginSlice from './features/login'
import cartSlice from './features/cart' 

export const store = configureStore({
    reducer:{
        login:loginSlice,
        cart:cartSlice
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializability check
    }),
})

export type rootState = ReturnType<typeof store.getState>