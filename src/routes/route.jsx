import { createBrowserRouter } from "react-router";
import { HomePage } from "../pages/HomePage";
import { CartPage } from "../pages/CartPage";
import { Layout } from "../components/Layout";
import { ProductDetails } from "../pages/ProductDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [{
            path: "/",
            element: <HomePage />
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