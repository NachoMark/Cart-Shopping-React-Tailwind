import { useContext, useState } from "react"
import { ProductContext } from "../context/ProductsProvider"
import { useParams } from "react-router"
import { CartContext } from "../context/CartProvider"

export const ProductDetails = () => {

  const { id } = useParams()
  const { products } = useContext(ProductContext)
  const { addProduct, deleteProduct } = useContext(CartContext)
  const product = products.find(p => p.id === Number(id))
  const [added, setAdded] = useState(false)

  const handleAddProduct = (buy) => {
    addProduct(buy)
    setAdded(true)
  }
  const handleDeleteProduct = (id) => {
    deleteProduct(id)
    setAdded(false)
  }

  return (
    <>
      <div className="h-screenbg-gray-100">
        <div className="md:container md:mx-auto md:flex md:py-36 md:justify-center
      container mx-auto flex py-30 justify-center">
          <main className="md:w-4/5 w-4/5">
            <div className="md:flex md:flex-nowrap ">
              <img src={product.images[0]} alt="images" className="md:rounded-md  md:w-lg rounded-t-md w-lg" />
              <div className="md:p-4 md:rounded-md md:shadow-md md:text-center p-4 rounded-md shadow-md text-center">
                <h1 className="md:text-2xl md:font-semibold md:mb-2 text-lg font-bold mb-2">{product.title}</h1>
                <p className="md:text-3xl md:font-bold md:mb-2 text-xl font-bold mb-2">${product.price}</p>
                <p className="md:text-md text-gray-600 md:mb-4 text-md mb-4">{product.description}</p>
                {
                  added
                    ? <button type='button'
                      className='bg-red-400 text-gray-100 border-0 md:py-2.5 md:px-5
                rounded-md md:cursor-pointer md:hover:bg-red-500 px-4 py-2.5 active:bg-red-500'
                      onClick={() => handleDeleteProduct(product.id)}>
                      Quitar del carrito
                    </button>
                    : <button type='button' className='bg-blue-400 text-gray-100 border-0 md:py-2.5 md:px-5
                rounded-md md:cursor-pointer md:hover:bg-blue-500 px-4 py-2.5 active:bg-blue-500'
                      onClick={() => handleAddProduct(product)}>
                      Agregar al carrito
                    </button>
                }
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}

