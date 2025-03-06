import { useContext } from "react"
import { ProductContext } from "../context/ProductsProvider"


const SearchBar = () => {
  const { setSearchTerm } = useContext(ProductContext)

  return (
    <div>
      <input
        type="text"
        className="lg:w-full px-2.5 lg:pr-60 bg-gray-100 lg:py-2  lg:border-none lg:rounded-lg text-black "
        placeholder="Search product"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  )
}

export default SearchBar