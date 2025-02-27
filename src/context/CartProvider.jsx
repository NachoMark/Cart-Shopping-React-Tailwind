import { createContext, useReducer } from "react"

const CartContext = createContext()

const initialState = []

export const CartProvider = ({ children }) => {

    const buyReducer = (state = initialState, action = {}) => {
        switch (action.type) {
            case "Add Product":
                return [...state, action.payload]
            case "Delete Product":
                return state.filter((product) => product.id !== action.payload)
            case "Increment Quantity":
                return state.map(product => {
                    const quant = product.quantity + 1
                    if (product.id === action.payload) return { ...product, quantity: quant }
                    return product
                })
            case "Decrement Quantity":
                return state.map(product => {
                    const quant = product.quantity - 1
                    if (product.id === action.payload && product.quantity > 0) return { ...product, quantity: quant }
                    return product
                })
            case "Delete All":
                return state.filter((product) => product.id === -1)
            default:
                return state;
        }
    }

    const [productsList, dispatch] = useReducer(buyReducer, initialState)

    const addProduct = (buy) => {
        buy.quantity = 1
        dispatch({ type: "Add Product", payload: buy })
    }
    const deleteProduct = (id) => {
        dispatch({ type: "Delete Product", payload: id })
    }

    const incrementProductQuantity = (id) => {
        dispatch({ type: "Increment Quantity", payload: id })
    }

    const decrementProductQuantity = (id) => {
        dispatch({ type: "Decrement Quantity", payload: id })
    }

    const deleteAll = () => {
        dispatch({ type: "Delete All" })
    }

    return (
        <CartContext.Provider value={{ productsList, addProduct, deleteProduct, incrementProductQuantity, decrementProductQuantity, deleteAll }}>
            {children}
        </CartContext.Provider>
    )
}

export { CartContext }