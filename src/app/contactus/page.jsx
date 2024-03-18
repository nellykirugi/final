
import React from 'react'
import {PhoneIcon,EnvelopeIcon,StarIcon}from '@heroicons/react/24/solid'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function InputDemo(){}
export function ButtonDemo(){}

const page = () => {
  return (
    <div className='bg-white'>


      <div className='flex'>
      <div className='w-1/4  h-screen  '>
        <h6 className='font-bold text-lg ml-3'>Contact Info </h6>
        <ul className='ml-3 flex gap-1'> 
        <PhoneIcon className='text-black cursor-pointer h-5 w-5'/> 0709715815 </ul>
        <ul className='ml-3 flex gap-1'>
        <EnvelopeIcon className='text-black cursor-pointer h-5 w-5'/>
          info@jkuat.ac.ke</ul>
        <h7 className='font-bold text-md ml-3'> Find us on</h7>
        <div className='grid grid-cols-4 gap-x-o.5 ml-3'>
        <img 
    className='w-[35px]'
    src="/facebook.png" 
    alt="" />
            <img 
    className='w-[35px]'
    src="/instagram.jpg" 
    alt="" />
            <img 
    className='w-[35px]'
    src="/twitter.png" 
    alt="" />
            <img 
    className='w-[35px]'
    src="/youtube.png" 
    alt="" />
    </div>
    <div className='font-bold text-md ml-3 mt-8'> Rate Us
    <div className='flex gap-1'>
    <StarIcon className='text-black cursor-pointer h-5 w-5'/>
    <StarIcon className='text-black cursor-pointer h-5 w-5'/>
    <StarIcon className='text-black cursor-pointer h-5 w-5'/>
    <StarIcon className='text-black cursor-pointer h-5 w-5'/>
    <StarIcon className='text-black cursor-pointer h-5 w-5'/>
    </div>

    </div>

      </div>
      <div className='w-3/4 float-right items justify-center h-screen  ml-2 my-0'> 
      <h1 className='font-bold text-lg ml-8'> Send Us A Feedback</h1>
      <div className='grid grid-rows-4 gap-8 px-20'>
      { <Input type="name" placeholder="Name" />}
      {  <Input type="email" placeholder="Email" />}
      { <Input type="phone number" placeholder="Phone Number" /> }
      { <Input type="message" placeholder="Message" /> }
      <Button className='bg-slate-400 text-black py-1 w-[10%] float-right ml-20 '>Submit</Button>
     
      </div>
      </div>
      </div>
      <footer className='bg-lime-300 items justify-center  text-black font-bold flex space-x-5 px-10 py-5 w-screen mt-10 my-1'> All rights reserved </footer>
    </div>
  )
}

export default page
