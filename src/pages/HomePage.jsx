import { useContext } from "react"
import { Card } from "../components/Card"
import { ProductContext } from "../context/ProductsProvider"

export const HomePage = () => {

    const { products } = useContext(ProductContext)


    return (
        <div className="md:flex md:flex-wrap md:justify-center md:py-18 md:px-20 bg-gray-100 
        flex flex-wrap justify-center py-18">
            {products.map(product =>
                <Card key={product.id}
                    image={product.images[0]}
                    price={product.price}
                    title={product.title}
                    id={product.id} />
            )}
        </div>
    )
}
