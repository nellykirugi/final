'use client'
import React from 'react'
import { PlusIcon,MinusIcon,MagnifyingGlassIcon} from '@heroicons/react/24/solid'
import { Button } from "@/components/ui/button"
export function ButtonDemo() {}

const page = () => {
  return (
    <div className='bg-white h-screen mb-8 '>
      <div className='  relative w-[500px] '>
      <input
        onChange={(e) => setSearch(e.target.value)}
        className='font-semibold border-slate  placeholder:text-black flex px-3 py-2 m-5 rounded-md border-2 w-[500px]'
        placeholder='Search ' 
        type="text" />
        <MagnifyingGlassIcon className='text-black cursor-pointer h-5 w-5 absolute right-5 top-3'/>
      </div>


      <div className=' grid grid-cols-3 '>
        <h6 className='font-bold items center text-lg ml-5'> Explore Our Products Gallery</h6>

        <div className=' font-semibold items flex '> 
    
        <img 
    className='w-[150px]'
    src="/ganodema.webp" 
    alt="" />
    <div className='ml-3'>
      <ul> Ganodema mushrooms</ul>
      <ul>kshs 3000/500g </ul>
      <div className='grid grid-cols-3'>
      <MinusIcon className='text-black h-5 w-5'/>
      <Button className='w-[5px]'>1</Button>
      <PlusIcon className='text-black h-5 w-5'/>
      <Button className ='items justify-center'> Add to cart</Button>
      </div>
      </div>
      
    </div>
    <div className='font-semibold items flex'>
    <img 
    className='w-[150px]'
    src="/button.jpg" 
    alt="" />
       <div className='ml-3 '>
      <ul> Button mushrooms </ul>
      <ul> kshs 350/250g </ul>
      <div className='grid grid-cols-3'>
      <MinusIcon className='text-black h-5 w-5'/>
      <Button className='w-[5px]'>1</Button>
      <PlusIcon className='text-black h-5 w-5'/>
      <Button className ='items justify-center'> Add to cart</Button>
      </div>
      </div>
      </div>
    <div className='font-semibold items flex'>
    <img 
    className='w-[150px]'
    src="/oyster.jpg" 
    alt="" />
        <div className='ml-3 '>
      <ul> Oyster mushrooms</ul>
      <ul>kshs 150/250g </ul>
      <div className='grid grid-cols-3'>
      <MinusIcon className='text-black h-5 w-5'/>
      <Button className='w-[5px]'>1</Button>
      <PlusIcon className='text-black h-5 w-5'/>
      <Button className ='items justify-center'> Add to cart</Button>
      </div>
      </div>
      </div>
      <div className=' font-semibold items flex'>
    
        <img 
    className='w-[150px]'
    src="/turkey.jpg" 
    alt="" />
            <div className='ml-3 '>
      <ul> Turkey tail mushrooms</ul>
      <ul>kshs 150/250g </ul>
      <div className='grid grid-cols-3 -m-1 -mr-2'>
      <MinusIcon className='text-black h-5 w-5'/>
      <Button className='w-[5px]'>1</Button>
      <PlusIcon className='text-black h-5 w-5'/>
      <Button className ='items justify-center'> Add to cart</Button>
      </div>
      </div>
    </div>
    <div className='font-semibold items flex'>
   <img 
    className='w-[150px]'
    src="/shiitake.webp" 
    alt="" />
                <div className='ml-3 font-bold '>
      <ul>Shiitake mushrooms</ul>
      <ul>kshs 899/50g </ul>
      <div className='grid grid-cols-3'>
      <MinusIcon className='text-black h-5 w-5'/>
      <Button className='w-[5px]'>1</Button>
      <PlusIcon className='text-black h-5 w-5'/>
      <Button className ='items justify-center'> Add to cart</Button>
      </div>
      </div>

</div>
      </div>
      <footer className='bg-lime-300 items justify-center text-black font-bold flex space-x-2 px-10 py-5 w-screen mt-20 my-1'> All rights reserved </footer>
   </div>
  )
}

export default page
