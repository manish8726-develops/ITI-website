import React from 'react'
import MySlider from '../components/MySlider'
import { Button } from "@/components/ui/button"
import MessageCard from "@/app/components/MessageCard"
import Link from 'next/link'
const HomePage = () => {
  return (
    <div>
     <section>
     <MySlider/>
     <div >
    <div className='text-xl p-4 rounded-b-xl mb-10 bg-[#171717] text-white md:flex items-center md:justify-between md:flex-row flex flex-col md:gap-0 gap-6'>
    <div className='w-[75%] font-medium'>
    ISO Certified Lucknow Modern Industrial Training Institute of Technical Education (I.T.I.) is an institute which would constantly endeavor to change the face of <span className='text-[#00aaff] text-3xl font-[cursive]'>technical Education</span>
    </div>
    <Button className={'bg-[#0088cc] p-4 text-xl hover:bg-[#0099e6] cursor-pointer  '}>Know more</Button>
    </div>
     </div>
     </section>
   <section className='   md:flex md:flex-row flex flex-col items-center'>
   <div className="flex flex-col md:flex-row gap-6 items-center py-6">
      <MessageCard
        title="Director's Message"
        imageSrc="https://lucknowmoderniti.com/img/manager.jpg"
        message="Lucknow Modern I.T.I. was established in 2014 under the Rajneesh Educational welfare Society Lucknow, U.P."
      />

      <MessageCard
        title="Founder's Message"
        imageSrc="https://lucknowmoderniti.com/img/founder-image.jpg"
        message="It is my proud privilege to congratulate the parents who have posed their faith in Lucknow Modern I.T.I."
      />
    </div>
    <section className="px-2 py-6 max-w-4xl mx-auto text-center md:text-left">
      <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-snug">
        Lucknow Modern ITI is{" "}
        <span className="bg-blue-500 text-white font-bold px-2 py-1">
          incredible
        </span>
        <br />
        Technical Institute.
      </h1>

      <p className="mt-4 text-gray-600 text-base leading-relaxed text-[22px]">
        Lucknow Modern Industrial Training Institute of Technical Education (I.T.I.)
        has been set up by Shri S. Kureel under the{" "}
        <span className="font-bold text-gray-800">
          Rajneesh Educational Welfare Society
        </span>
        . The Institute was commenced during the year 2014. Recently, we have got{" "}
        <Link
          href="/iso-certification"
          className="text-blue-600 hover:underline font-medium"
        >
          ISO Certification
        </Link>
        .
      </p>
    </section>
   </section>
    </div>
  )
}

export default HomePage
