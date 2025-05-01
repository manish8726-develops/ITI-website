'use client'
import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Infobar from './Infobar'
import PageInfo from './PageInfo'
import { usePathname } from "next/navigation";
const Layout = ({children}) => {
  const pathname = usePathname(); 
  const infobarBlackList = ['/','/aboutUs',]
  return (
    <>
       <Navbar/>
       {(pathname!=='/')?<PageInfo/>:''}
        <div className='md:flex justify-between mx-10 gap-20 '>
        {children}
      
       
       {!infobarBlackList.includes(pathname) ? <Infobar /> : null}
        
        </div>
        <Footer/>
    </>
  )
}

export default Layout
