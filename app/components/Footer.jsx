'use client'
import Image from 'next/image'
import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import Link from 'next/link';
import CurrentYear from './Currentyear';
const Footer = () => {
  return (
    <div className='bg-[#121214] flex flex-col md:flex md:flex-row gap-8 p-7 '>
      <div>
      <div className='md:flex md:flex-col'>
        <Image src={'https://lucknowmoderniti.com/img/logo-footer.png'} width={100} height={100} alt='footer-logo'/>
        <p className='para leading-7 [&:not(:first-child)]:mt-6'>
        Our Institute affiliated by National council of vocational Training (NCVT), Ministry of Labor, Govt. of India. <span className='flex text-white items-center gap-2'> View More <FaArrowRight/></span> 
        </p>
      </div>
      </div>
      <div className=''>
        <h1  className='text-2xl text-white leading-7 [&:not(:first-child)]:mt-6'>Get in touch</h1>
       
        <p  className='para leading-7 [&:not(:first-child)]:mt-6 gap-2'><span className='font-bold flex items-center gap-1'><MdLocationPin/>
        Address:</span>  Ambedkar Chauraha Takrohi Road, Indira Nagar Lucknow, Uttar Pradesh 226016</p>
        <p  className='para leading-7 [&:not(:first-child)]:mt-6 flex gap-2'><span className='font-bold flex items-center gap-1'> <FaPhone/>
        Phone:</span> 9389354607</p>
        <p  className='para leading-7 [&:not(:first-child)]:mt-6 flex gap-2'><span className='font-bold flex items-center gap-1'> <IoMdMail/>
        Email:</span> lmoderniti@gmail.com</p>
        <p className='para leading-7 [&:not(:first-child)]:mt-6'>&copy; Copyright {<CurrentYear/>}. All Rights Reserved.</p>
      </div>
      <blockquote className="mt-6 border-l-2 pl-6 italic para">
      Desgin & Developed By <Link className='text-white hover:underline' href={'/'}>Manish Chaurasia</Link>
    </blockquote>
    </div>
  )
}

export default Footer