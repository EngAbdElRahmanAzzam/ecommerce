import { Navigate, Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import NotFound from "../pages/notFound";
import SigninPage from "../pages/SigninPage";
import HomePage from "../pages/home";
import ProductPage from "@/pages/products";
import RootLayout from "@/layouts/rootLayout";
import ProductDetailPage from "@/pages/productDetails";
import SignupPage from "@/pages/signupPage";
import TeamPage from "@/pages/team";
import ProtectedRoute from "@/components/Auth/protectedRoute";

const router = createBrowserRouter(
    createRoutesFromElements(
    <>
        <Route path="/home" element=<Navigate to="/"/>  />

        <Route path="/" element=<RootLayout/> >
            <Route index element=<HomePage/> />
            <Route path="/products" element=<ProductPage/> />
            <Route path="/products/:productId" element=<ProductDetailPage/> />
            <Route path="/team" element=<TeamPage/> />
            <Route path="/signin" element=<ProtectedRoute role="guest" page={<SigninPage/>} redirect="/"/> />
            <Route path="/signup" element=<SignupPage/> />
        </Route>
        
        <Route path="*" element=<NotFound/> />
    </>
    )
)

export default router