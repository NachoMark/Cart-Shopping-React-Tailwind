
import router from "./routes/route.jsx"
import { RouterProvider } from 'react-router'
import './App.css'
import { CartProvider } from './context/CartProvider'
import { ProductsProvider } from './context/ProductsProvider'


function App() {

  return (
    <>
      <ProductsProvider>
        <CartProvider>
          <RouterProvider router={router} />
        </CartProvider>
      </ProductsProvider>
    </>
  )
}

export default App
