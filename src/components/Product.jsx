'use client'
import React,{useState} from 'react'
import { Button } from "@/components/ui/button"
import { useContext } from "react";
import { CartContext } from "@/app/contexts";
import { PlusIcon,MinusIcon,ShoppingCartIcon,MagnifyingGlassIcon} from '@heroicons/react/24/solid'

const Product = (product) => {
    const [amount,setAmount] = useState(0)
    const {value,setValue} = useContext(CartContext)
    console.log(product.product)
    const {image,name,price} = product.product
    const increaseAmount = () => setAmount((prev) => prev + 1)
    const decreaseAmount = () => {
        if (amount > 0){
            setAmount((prev) => prev - 1)
        }
    }
    const addCart = (product) => {
        setValue(prevItems => [...prevItems,{
          product:product.name,
          price:product.price
        }])
      }
  return (
    <div className=' font-semibold items flex  border-2 rounded-sm p-2'> 
          <img 
          className='w-[150px]'
          src={image} 
          alt={name} />
          <div className='ml-3'>
            <ul> {name}</ul>
            <ul>kshs {price} </ul>
            <div className='flex items-center'>
            <MinusIcon onClick={decreaseAmount} className='text-black h-5 w-5'/>
            <Button className='w-[5px]'>{amount}</Button>
            <PlusIcon onClick={increaseAmount} className='text-black h-5 w-5'/>
            </div>
            <Button onClick={() => addCart({name,price})} className ='items justify-center mt-2'> Add to cart</Button>
          </div>
        
        </div>
  )
}

export default Product
