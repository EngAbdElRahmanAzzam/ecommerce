import { Navigate, Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import NotFound from "../pages/notFound";
import HomePage from "../pages/home";
import ProductPage from "@/pages/products";
import RootLayout from "@/pages/index.layout";
import ProductDetailPage from "@/pages/productDetails";


const router = createBrowserRouter(
    createRoutesFromElements(
    <>
        <Route path="/home" element=<Navigate to="/"/>  />

        <Route path="/" element=<RootLayout/> >
            <Route index element=<HomePage/> />
            <Route path="/products" element=<ProductPage/> />
            <Route path="/products/:productId" element=<ProductDetailPage/> />
        </Route>
        
        <Route path="*" element=<NotFound/> />
    </>
    )
)

export default router