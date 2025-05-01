'use client'

import React from 'react'
import {
    Card,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from '@/components/ui/button'
import Gform from './Gform'

const Contact = () => {
  return (
    <>
    {/* <Card className="w-full  mx-auto my-7">
        <CardTitle className="text-2xl text-center">Contact us</CardTitle>
        <form action="/api/contact" method="post" className="flex flex-col items-center gap-6">
            <label htmlFor="email">
                <span className="text-red-500">*</span> Email
            </label>
            <Input 
              required 
              id="email" 
              name="email"      
              type="email"       
              className="w-1/2" 
              placeholder="xyz@mail.com"
            />
            <label htmlFor="phone">
                <span className="text-red-500">*</span> Phone
            </label>
            <Input 
              required 
              id="phone" 
              name="phone"      
              type="tel"         
              className="w-1/2" 
              placeholder="1234567890"
            />
            <label htmlFor="msg">
                Message
            </label>
            <Textarea 
              id="msg" 
              name="message"      
              className="w-1/2" 
              placeholder="Type your message here..." 
            />
            <Button type="submit">Submit</Button>
        </form>
    </Card> */}
    <Gform/>
    </>
  )
}

export default Contact
