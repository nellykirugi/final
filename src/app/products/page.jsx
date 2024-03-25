'use client'
import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { PlusIcon,MinusIcon,ShoppingCartIcon,MagnifyingGlassIcon} from '@heroicons/react/24/solid'
import { Button } from "@/components/ui/button"
import {Cart} from "@/components/Cart"
import { useContext } from "react";
import { CartContext } from "@/app/contexts";
import Product from '@/components/Product'
export function ButtonDemo() {}

const page = () => {
  const [products,setProducts] = useState([])
  const [search,setSearch] = useState('')
  
  const {value,setValue} = useContext(CartContext)

  useEffect(() => {
    const getProducts = async () => {
      const data = await axios.get('http://localhost:8000/api/products')
      setProducts(data.data.products)
    }
    getProducts()
  },[])
  console.log(products)
  const addCart = (product) => {
    setValue(prevItems => [...prevItems,{
      product:product.name,
      price:product.price
    }])
  }
  const filteredData = search.length > 2 ? products.filter((p) => {
    const productTerm = p.name.toLowerCase()
    const searchTerm = search.toLowerCase()
    return (productTerm.includes(searchTerm))
  } ) : products
  return (
    
    <div className='bg-white h-screen mb-8 flex flex-col items-center '>
      <div className=''>
      <div className='  relative w-[500px] self-center'>
      <input
        onChange={(e) => setSearch(e.target.value)}
        className='font-semibold border-slate  placeholder:text-black flex px-3 py-2 m-5 rounded-md border-2 w-[500px]'
        placeholder='Search ' 
        type="text" />
        <MagnifyingGlassIcon className='text-black cursor-pointer h-5 w-5 absolute right-5 top-7'/>
        <div className='absolute right-20'>
          <Cart/>
        </div>
      </div>
      </div>

        <h6 className='font-bold items center text-lg ml-5'> Explore Our Products Gallery</h6>
      <div className=' mx-auto grid grid-cols-3 mt-5 gap-6 '>
      {filteredData.map((d,i) => {   
        return (
        <Product key={i} product={d}/>
        )
      })}
      </div>

      <footer className='bg-lime-300 items justify-center text-black font-bold flex space-x-2 px-10 py-5 w-screen mt-20 my-1'> All rights reserved </footer>
   </div>
  )
}

export default page
