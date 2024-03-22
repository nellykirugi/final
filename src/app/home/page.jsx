'use client'

import React from 'react'

import { Button } from "@/components/ui/button"

import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"

export function ToastDemo() {}


const page = () => {

  
  const { toast } = useToast()
  return (
    <div className='bg-white relative'>
               <Button
      variant="outline"
      onClick={() => {
        toast({
          title: "Need help on system? ",
          description: "Go to virtual assistant ",
          action: (
            <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
          ),
        })
      }}
    >
      Welcome
    </Button>

      <div className='items bg-center'>

      <img 
    className='w-screen h-96 rounded-xl mr-1 ml-3'
    src="/mushroom.PNG" 
    alt="" />
      </div>


      <footer className='bg-lime-300 items justify-center text-black font-bold flex space-x-5 px-10 py-5 w-screen mt-10 my-1'> All rights reserved </footer>
   </div>
  )
}


export default page
