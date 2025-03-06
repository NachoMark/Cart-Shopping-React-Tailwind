import { useContext } from "react"
import { CartContext } from "../context/CartProvider"
import { UserContext } from "../context/UserProvider"
import { Link } from "react-router"

export const CartPage = () => {

    const { productsList, deleteProduct, incrementProductQuantity, decrementProductQuantity, deleteAll } = useContext(CartContext)
    const {logged} = useContext(UserContext)

    const total = productsList.reduce((total, item) => total + item.quantity * item.price, 0).toFixed(2)


    return (
        <div className="bg-gray-100">
        <div className="h-screen mx-40">
            <div className="flex flex-wrap justify-center py-18 px-24">
                <table className="w-full text-left rtl:text-right ">
                    <thead className="text-sm">
                        <tr>
                            <th scope="row" className="px-6 py-3">
                                Product name
                            </th>
                            <th scope="row" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="row" className="px-6 py-3">
                                Quantity
                            </th>
                            <th scope="row" className="px-6 py-3">
                                Delete
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {productsList.map((item) => (
                            <tr key={item.id}>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 ">
                                    {item.title}
                                </th>
                                <td className="px-6 py-4">
                                    ${item.price}
                                </td>
                                <td className="lg:inline-block py-4 grid text-center">
                                    <button
                                        className="m-2 py-2 px-4 rounded-md hover:bg-red-400 cursor-pointer"
                                        onClick={() => decrementProductQuantity(item.id)}>

                                        -
                                    </button>
                                    {item.quantity}
                                    <button
                                        className="m-2 py-2 px-4 rounded-md hover:bg-blue-400 cursor-pointer"
                                        onClick={() => incrementProductQuantity(item.id)}>
                                        +
                                    </button>
                                </td>
                                <td className="px-6 py-4">
                                    <button
                                        className="px-4 py-2 border rounded-md border-red-500 text-red-500 hover:bg-red-500 hover:text-gray-100 cursor-pointer"
                                        onClick={() => deleteProduct(item.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    {productsList.length > 0 && (
                        <tbody>
                            <tr>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                                    TOTAL:
                                </th>
                                <th>
                                </th>
                                <th>
                                    ${total}
                                </th>
                                <th>
                                    <button
                                        className="font-normal px-4 py-2 border rounded-md border-red-500 text-red-500 hover:bg-red-500 hover:text-gray-100 cursor-pointer"
                                        onClick={() => deleteAll()}>
                                        Delete all
                                    </button>
                                </th>
                            </tr>
                        </tbody>
                    )}
                </table>
                {productsList.length > 0 && logged &&(
                    <button className="inline-block bg-blue-400 m-4 w-xl p-2 rounded-sm text-gray-100 font-semibold 
                hover:bg-blue-500 cursor-pointer text-lg"
                        onClick={() => print()}
                    >BUY</button>
                )}
            {!logged && (
                <div className="text-center m-4 text-lg">

                <p className="text-gray-900">You have to be signed in to complete the buy
                    </p>
                    <Link 
                    to={"/login"}
                    className="text-blue-500 hover:text-blue-400 hover:underline">
                        Click here to Sign in
                        </Link>
                    
                </div>
            )}
            </div>
        </div>
        </div>
    )
}

