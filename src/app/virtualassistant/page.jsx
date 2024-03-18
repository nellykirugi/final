import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"


const page = () => {
  return (
    <div className='bg-white '>
    <div className='font-bold text-lg ml-4'>
    <Carousel>
  <CarouselContent>
    <CarouselItem>Home</CarouselItem>
   </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
<Carousel>
  <CarouselContent>
 <CarouselItem>About us</CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
<Carousel>
  <CarouselContent>
 <CarouselItem>Products</CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
<Carousel>
  <CarouselContent>
 <CarouselItem>Contact us</CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
    </div>
    <footer className='bg-lime-300 items justify-center text-black font-bold flex space-x-5 px-10 py-5 w-screen mt-10 my-1'>All rights reserved</footer>
      
    </div>
  )
}

export default page
