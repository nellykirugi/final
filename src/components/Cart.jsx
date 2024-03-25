"use client"
import { useContext,useState } from "react";
import { CartContext } from "@/app/contexts";
import { Button } from "./ui/button";
import { PlusIcon,MinusIcon,ShoppingCartIcon,MagnifyingGlassIcon} from '@heroicons/react/24/solid'

export const Cart = () => {
    const {value,setValue} = useContext(CartContext)
    const [viewCart,setViewCart] = useState(false)
    const [displayValues,setDisplayValues] = useState([{}])

    const productsChosen = value.length
    
    return (
        <>
            <div className="relative">
                <ShoppingCartIcon className="w-8 h-8 text-green-800 cursor-pointer" onClick={() => setViewCart(prev => !prev)}/>
                <div className="absolute p-2 w-6 h-6 flex items-center text-sm justify-center text-white font-semibold rounded-full bg-slate-600 left-4 top-0">
                    <p>{productsChosen}</p>
                </div>
                {viewCart && (
                    <div className="bg-green-800 fixed px-4 pt-10 z-20 text-white font-semibold right-0 w-[400px] top-0 bottom-0">
                        <div className="grid gap-2">
                            {
                                value.map((d,i) => (
                                    <div key={i} className="flex items-center gap-2">
                                        <h2>{d.product}</h2>
                                    </div>
                                ))
                            }
                        </div>
                        <Button>Check out</Button>
                    </div>
                )}
            </div>
        </>
    )
}