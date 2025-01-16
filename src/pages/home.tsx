import ProductCard from "@/components/common/card"
import { axiosInstance } from "@/config/axios.config"
import { IProduct } from "@/interfaces/models"
import { Grid } from '@chakra-ui/react'
import { useEffect, useState } from "react"

const HomePage = () => {
  const [products, updateProducts] = useState<IProduct[]>([])
  useEffect(
    ()=>{
      axiosInstance.get("/products?populate=thumbnail").then((res)=>updateProducts(res.data.data))
    }
    ,[])


  // renders
  const productList = products.map( product => <ProductCard product={product} key={product.id} /> ) 

  return (
    <div>
      <Grid w="85%" mx="auto" templateColumns={"repeat(auto-fill, minmax(320px, 1fr))"} gap={"6"}>
          {
            productList
          }
      </Grid>
    </div>
  )
}

export default HomePage