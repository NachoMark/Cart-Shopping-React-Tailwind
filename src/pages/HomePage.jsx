import { useContext } from "react"
import { Card } from "../components/Card"
import { ProductContext } from "../context/ProductsProvider"

export const HomePage = () => {

    const { products } = useContext(ProductContext)

    return (
        <div className="bg-gray-50">
            <div className="lg:flex lg:flex-wrap lg:justify-center lg:py-18 lg:mx-40  
        flex flex-wrap justify-center py-18">
                {products.map(product =>
                    <Card key={product.id}
                        image={product.images[0]}
                        price={product.price}
                        title={product.title}
                        id={product.id} />
                )}
            </div>
        </div>
    )
}
