'use client'
import React from 'react'

const page = () => {

  return (
    <div className='bg-white '>

 <div className='flex'>
      <div className=' w-3/4 ml-4 items-center items float-left'>
        <h6 className='font-bold items-center text-lg'> JKUAT MUSHROOM GROWING CENTER</h6>
        <p className='w-[600px] font-normal'> JKUAT MUSHROOM GROWING CENTER is fully owned  by JKUAT. The institution trains farmers across the counties on how 
          to build a mushroom housing structure, grow, prepare, dry and package the mushroom. They also  farmers will also be
           taught how to construct a solar drier to help boost the preservation of harvested mushrooms. The farm grows and sells
            Shiitake, Ganoderma, Oyster and Button among others.  It has also introduced a new type of mushroom,Trametes also
            known as Turkey Tail.</p>

      </div>

      <div className=' w-1/4 items float-right my-1 mt-4 mr-3' >
      <img 
    className='w-screen'
    src="/mushroom1.webp" 
    alt="" />
    

      </div>
      </div>

       <footer className='bg-lime-300 items justify-center text-black font-bold flex space-x-5 px-10 py-5 w-screen mt-10 my-1'> All rights reserved </footer>
    </div>
  )
}

export default page
