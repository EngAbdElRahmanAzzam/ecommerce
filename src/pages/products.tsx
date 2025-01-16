import ProductCard from "@/components/common/card"
import { IProduct } from "@/interfaces/models"
import { Grid } from '@chakra-ui/react'
import {useQuery} from '@tanstack/react-query'
import {getProducts} from "@/services/products"
import ProductSkeleton from "@/components/skeleton/product"


const ProductPage = () => {
  const {isLoading, data:products} = useQuery({
    queryKey:['productsPage'],
    queryFn: ()=>{
        return getProducts()
    }
    })

  if(isLoading)
  {
    return (
    <Grid w="85%" mx="auto" templateColumns={"repeat(auto-fill, minmax(320px, 1fr))"} gap={"6"}>
          {
            Array.from({length:7}, (_, index)=> <ProductSkeleton key={index}/>)
          }
      </Grid>
      )
  }
  // renders
  const productList = products.map( (product:IProduct) => <ProductCard product={product} key={product.id} /> ) 

  return (
      <Grid w="85%" mx="auto" templateColumns={"repeat(auto-fill, minmax(320px, 1fr))"} gap={"6"}>
          {
            productList
          }
      </Grid>
  )
}

export default ProductPage