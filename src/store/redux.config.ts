import { configureStore } from "@reduxjs/toolkit";
import loginSlice from './features/login'


export const store = configureStore({
    reducer:{
        login:loginSlice
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializability check
    }),
})

export type rootState = ReturnType<typeof store.getState>