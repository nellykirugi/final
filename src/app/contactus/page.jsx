'use client'
import React,{useState} from 'react'
import axios from 'axios'
import {PhoneIcon,EnvelopeIcon,StarIcon}from '@heroicons/react/24/solid'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useToast } from '@/components/ui/use-toast'

export function InputDemo(){}
export function ButtonDemo(){}

const page = () => {
  const [name,setName] = useState('')
  const [phone,setPhone] = useState('')
  const [email,setEmail] = useState('')
  const [message,setMessage] = useState('')
  const {toast} = useToast()
  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await axios.post("http://localhost:8000/api/message",{
      username:name,
      email,
      phone,
      message
    })
    console.log(res.data.message)
    if (res.data.message){
      toast({
        title:res.data.message
      })
    }
  }
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
        <form onSubmit={handleSubmit}>
        <div className='grid grid-rows-4 gap-8 px-20'>

        <Input onChange={(e) => setName(e.target.value)} name="name" placeholder="Name" />
        <Input onChange={(e) => setEmail(e.target.value)} name="email" placeholder="Email" />
        <Input onChange={(e) => setPhone(e.target.value)}  name="phone" placeholder="Phone Number" />
        <Input onChange={(e) => setMessage(e.target.value)} name="message" placeholder="Message" /> 

        <Button type='submit' className=''>Submit</Button>
      
        </div>
        </form>
      </div>
      </div>

      <footer className='bg-lime-300 items justify-center  text-black font-bold flex space-x-5 px-10 py-5 w-screen mt-10 my-1'> All rights reserved </footer>
    </div>
  )
}

export default page
