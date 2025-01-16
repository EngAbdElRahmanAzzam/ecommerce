import { Card, Divider, Stack } from "@chakra-ui/react"
import {
  Skeleton,
  SkeletonText,
} from "@/components/ui/skeleton"

const ProductSkeleton = () => {
  return (
    <Card boxShadow="lg">
        <Skeleton height="200px" />
          <Stack m='2' spacing='2'p="2">
            <SkeletonText w="120px" height="12px" m="auto"/>
            <SkeletonText w="full" noOfLines={4} m="auto"/>
            <SkeletonText w="100px" height="8px" m="auto"/>   
          </Stack>

          <Divider />

          <Stack p="6">
            <SkeletonText height="15px" mx="auto" w="80%"/>
          </Stack>
    </Card>
  )
}

export default ProductSkeleton
