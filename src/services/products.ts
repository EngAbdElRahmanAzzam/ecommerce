import { axiosInstance } from "@/config/axios.config"

export const getProducts = async () =>{
    const {data} = await axiosInstance.get('/products?populate=thumbnail')
    return data.data
}

export const getProductById = async (id:number)=>{
    const {data} = await axiosInstance.get(`/product/${id}`)
    console.log("service",data)
    return data.data
}

