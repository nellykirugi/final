'use client'
import { useContext,createContext,useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [value,setValue] = useState([
        {
            product:"",
            price:""
        }
    ])
    return (
        <CartContext.Provider value={{value,setValue}}>
            {children}
        </CartContext.Provider>
    )
}
