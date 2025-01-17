import { IProduct } from "@/interfaces/models"
import {Button, Card, Image, Text , CardBody , CardFooter , Stack  , Heading , Divider } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import useThemeColors from "@/hooks/themes";

interface IProps{
    product:IProduct
}

const ProductCard = ({product}:IProps) =>
{
    const serverDomin = import.meta.env.VITE_DOMAIN_HOST
    const [mainColor, secondColor , colorSchemBtn] = useThemeColors()

    return (
            <Card boxShadow="lg">
                <Image
                    src={`${serverDomin}${product.thumbnail?.url}`}
                    alt='Green double couch with wooden legs'
                    objectFit="cover"
                    h="250px"
                    borderRadius='lg'
                />

                {/* body */}
                <CardBody pt="-0.5" pb="-0.5" height="fit-content">
                    <Stack m='2' spacing='0'>

                        //title of product
                        <Heading color={mainColor} size='md' textAlign="center" >
                            {product.name}
                        </Heading>

                        //discription of product
                        <Text color={secondColor}>
                            {product.discription}
                        </Text>

                        //price of product
                        <Text color={mainColor} fontSize='2xl' textAlign="center">
                            {product.price}
                        </Text>
                    </Stack>
                </CardBody>

                <Divider/>

                {/* footer */}
                <CardFooter>

                    <Button variant='solid' colorScheme={colorSchemBtn} mx="auto" w="80%"
                        as={Link}
                        to={`/products/${product.id}`}
                    >
                        View More...
                    </Button>

                </CardFooter>
            </Card>
    )
}

export default ProductCard
