import { axiosInstance } from '@/config/axios.config'
import {createAsyncThunk} from '@reduxjs/toolkit/react'
import {createSlice} from '@reduxjs/toolkit'
import { IUserLogin } from '@/interfaces/user'
import { rootState } from '../redux.config'
import {createStandaloneToast} from "@chakra-ui/react"
import { useNavigate } from 'react-router-dom'
import cookieApi from '@/utilits/cookieApi'

interface ILoginSlice{
    loader:boolean
    data:unknown|null
    error:unknown|null
}

const initialState:ILoginSlice ={
    loader:false,
    data:null,
    error:null,
} 

const {toast} = createStandaloneToast()

export const loginService = createAsyncThunk<
any, 
IUserLogin, // Payload type (e.g., data passed to the thunk)
any 
>("", async (userLogin, thunkAPI) => {
    const {rejectWithValue} = thunkAPI
    try{
        const {data} = await axiosInstance.post('/auth/local', userLogin)
        return data
    }catch(error)
    {
        return rejectWithValue(error)
    }

})

const loginSlice = createSlice({
    name:"login",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
        .addCase(loginService.pending, (state) => {state.loader = true})
        .addCase(loginService.fulfilled, (state, payload) => {
            state.loader = false
            toast({
                title:"Login successfully",
                description: "Wellcome to Matgark",
                status: "success",
                isClosable:true,
                duration:3000,
                position:'bottom-right'
              })
            state.data = payload.payload
            cookieApi.set("jwt", payload.payload.jwt)
        })
        .addCase(loginService.rejected, (state, payload) => {
            toast({
                title:"Error",
                description: `${payload.payload.response.data.error.message as string}`,
                status: "error",
                isClosable:true,
                duration:3000,
                position:'bottom-right'
              })
            state.loader = false
            state.error = payload.payload
        })
    },
})



export const selectorLogin = ({login}:rootState) => {login}  
export default loginSlice.reducer