import { IProduct } from "@/interfaces/models";
import { interactivity } from "@chakra-ui/react";
import { createSlice } from "@reduxjs/toolkit";



type ICartSlice = IProduct[]

const initialState:ICartSlice = []

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addProduct:()=>{

        },
        clearCart:(state) => {

        } 
    }
})


export const {addProduct,clearCart} = cartSlice.actions
export default cartSlice.reducer