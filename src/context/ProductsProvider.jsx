import { createContext, useEffect, useState } from "react"

const ProductContext = createContext()

export const ProductsProvider = ({children}) => {

  const [products, setProducts] = useState([])

  const fetchData = async ()  => {
     const response = await fetch("https://api.escuelajs.co/api/v1/products")
     const data = await response.json()
     setProducts(data)
     console.log(data)
  }

  useEffect(()=> {
      fetchData()
  },[])

  return (
    <ProductContext.Provider value={{products}}>
      {children}
    </ProductContext.Provider>
  )
}
export { ProductContext}
