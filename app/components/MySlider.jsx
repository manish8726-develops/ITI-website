"use client"

import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

const images = [
  {
    src: "https://lucknowmoderniti.com/img/jobfair21/1.jpeg",
    alt: "Job Fair Event 1",
  },
  {
    src: "https://lucknowmoderniti.com/img/jobfair21/2.jpeg",
    alt: "Job Fair Event 2",
  },
  {
    src: "https://lucknowmoderniti.com/img/5sep2019/7.jpg",
    alt: "Job Fair Event 3",
  },
]

const MySlider = () => {
  const [current, setCurrent] = React.useState(0)

  return (
    <div className="w-full flex flex-col items-center pt-10">
      <Carousel
        setApi={(api) => {
          api.on("select", () => {
            setCurrent(api.selectedScrollSnap())
          })
        }}
        className="relative w-[1138px] h-[431px] max-w-full rounded-t-xl shadow-lg overflow-hidden"
      >
        <CarouselContent>
          {images.map((img, index) => (
            <CarouselItem key={index} className="flex items-center justify-center">
              <div className="relative w-full h-[431px]">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1200px) 100vw, 1138px"
                  priority={index === 0}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      {/* Dot Indicators */}
      {/* <div className="mt-4 flex gap-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === current ? "bg-blue-600" : "bg-gray-400"
            }`}
          />
        ))}
      </div> */}
    </div>
  )
}

export default MySlider
