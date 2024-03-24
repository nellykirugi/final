'use client'
import React from 'react'

const page = () => {

  return (
    <div className='bg-white '>

 <div className='flex'>
      <div className=' w-3/4 ml-4 items-center items float-left'>
        <h6 className='font-bold items-center text-lg'> JKUAT MUSHROOM GROWING CENTER</h6>
        <p className=' font-normal'> JKUAT MUSHROOM GROWING CENTER is fully owned  by JKUAT. The institution trains farmers across the counties on how 
          to build a mushroom housing structure, grow, prepare, dry and package the mushroom. They also train the farmers how to construct a solar drier to help 
           boost the preservation of harvested mushrooms. The farm grows and sells Shiitake, Ganoderma, Oyster and Button among others.  
           It has also introduced a new type of mushroom,Trametes also known as Turkey Tail. This mushroom variety has medicinal value and if consumed, 
          and plays a significant role in managing the impact of lifestyle diseases. The mushrooms have various benefits that include: </p>
          
            <li> Has compounds may also offer benefits for gut health inhibiting colon cancer cell growth thus stopping them from migrating and infecting other healthy cells.</li>
            <li> A component of Turkey tail has also been found to help prevent obesity.</li>
            <li>the mushroom contains a wide variety of phenol and flavonoid antioxidants which are useful in strengthening the immune system by reducing inflammation
               and stimulating the release of protective compounds critical in managing lifestyle diseases such as blood pressure, blood cholesterol and Leukemia.</li>
          
          
          

      </div>

      <div className=' w-1/4 items float-right my-1 mt-4 mr-3' >
      <img 
    className='w-screen'
    src="/mushroom1.webp" 
    alt="" />
    

      </div>
      </div>
      <div className='bg-slate-400 text-black w-screen h-60 items-center '>
        <h1 className='text-lg font-bold items flex justify-center items-center'> Why Us </h1>
        <li> We sell oyster, button, shiitake, turkeytail and ganodema mushrooms</li>
        <li> We offer training on how to build a mushroom housing structure, grow, prepare, dry and package the mushroom.</li>
        <li> We train on how to construct solar driers to help preserve the mushrooms</li>
        <li> We sell smaller portions of the mushroom at pocket friendly price</li>
       </div>
       <footer className='bg-lime-300 items justify-center text-black font-bold flex space-x-5 px-10 py-5 w-screen mt-10 my-1'> All rights reserved </footer>

    </div>
  )
}

export default page
