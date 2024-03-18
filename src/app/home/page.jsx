import React from 'react'

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export function AlertDemo() {}
const page = () => {
  return (
    <div className='bg-white'>

      <div className='items bg-center'>
      <Alert>
  
    <AlertTitle>Welcome John, we are glad to have you here!</AlertTitle>
  <AlertDescription>
    Need help on the system walkthrough? 
    Navigate to the virtual assistant on the
    navigation bar.
  </AlertDescription>
</Alert>
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
