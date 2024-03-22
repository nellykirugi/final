'use client'
import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function CarouselDemo() {
  const data=[
    ' Once you log in, go to the products page',
    ' Search for the mushrooms and the quantity you need, then add to cart',
    'Then go to checkout and check for the products you have ordered',
    'Make payment for the mushrooms ordered',
    'The product gets delivered',
  ]
 

  return (
    <div>
      <h1 className="font-bold text-lg  items justify-center ml-20 mb-4 mt-4"> Step by step guide</h1>
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {data.map((d, index) => (
          <CarouselItem key={index}>
            <div className="p-1 ml-20">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6 ">
                {d}
              
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </div>
  )
}
