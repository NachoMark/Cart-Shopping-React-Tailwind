
import router from "./routes/route.jsx"
import { RouterProvider } from 'react-router'
import './App.css'
import { CartProvider } from './context/CartProvider'
import { ProductsProvider } from './context/ProductsProvider'
import { UserProvider } from "./context/UserProvider.jsx"



function App() {

  return (
    <>
    <UserProvider>
      <ProductsProvider>
        <CartProvider>
          <RouterProvider router={router} />
        </CartProvider>
      </ProductsProvider>
      </UserProvider>
    </>
  )
}

export default App
