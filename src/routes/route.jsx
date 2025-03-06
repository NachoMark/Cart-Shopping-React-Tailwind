import { createBrowserRouter } from "react-router";
import { HomePage } from "../pages/HomePage";
import { CartPage } from "../pages/CartPage";
import { Layout } from "../components/Layout";
import { ProductDetails } from "../pages/ProductDetails";
import { LogIn } from "../pages/LogIn";
import { SingUp } from "../pages/SingUp";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [{
            path: "/",
            element: <HomePage />
        },
        {
            path: "/login",
            element: <LogIn />
        },
        {
            path: "/singup",
            element: <SingUp />
        },
        {
            path: "/products/:id",
            element: <ProductDetails />
        },
        {
            path: "/cart",
            element: <CartPage />
        }]
    }
])

export default router