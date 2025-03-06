import { createContext, useEffect, useState } from "react"

const ProductContext = createContext()

export const ProductsProvider = ({children}) => {

  const [products, setProducts] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredProducts, setFilteredProducts] = useState([])

  const fetchData = async ()  => {
     const response = await fetch("https://api.escuelajs.co/api/v1/products")
     const data = await response.json()
     setProducts(data)
     setFilteredProducts(data)
     console.log(data)
  }

  useEffect(()=> {
      fetchData()
  },[])

  useEffect(() => {
    const filtered = products.filter(product => 
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setFilteredProducts(filtered)
  },[searchTerm, products])

  return (
    <ProductContext.Provider value={{products: filteredProducts, setSearchTerm}}>
      {children}
    </ProductContext.Provider>
  )
}
export { ProductContext}
