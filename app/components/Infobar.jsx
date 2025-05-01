import React from "react";
import "@/app/components/infobar.css";
import { MdLocationPin } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const Infobar = () => {
  return (
    <>
      <div className="flex flex-col md:w-[30%] justify-start mt-7 gap-10 mr-7 ">
        <div className="border-b-2 pb-7 ">
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight h">
            Get in <span className="font-bold">touch</span>
          </h4>
          <p className="leading-7 [&:not(:first-child)]:mt-2 para">
            We are always ready to help you, you can contact us at following
            location or call us at our given number.
          </p>
        </div>
        <div className="border-b-2 flex flex-col pb-7 ">
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight h">
            The <span className="font-bold">Office</span>
          </h4>
          <div className="leading-7 mt-2  para  ">
            <p className="flex items-center gap-1 font-bold">
              <MdLocationPin /> Address: Lucknow Modern ITI
            </p>
            <p>Ambedkar Chauraha Takrohi Road,</p>
            <p>Indira Nagar Lucknow,</p>
            <p>Uttar Pradesh 226016</p>
            <p className="flex gap-2">
              <span className="flex gap-1 items-center font-bold">
                <FaPhoneAlt /> Phone:
              </span>{" "}
              9389354607
            </p>
            <p className="flex gap-2">
              <span className="flex gap-1 items-center font-bold">
                <MdEmail />
                Email:
              </span>
              <span className="text-blue-500">lmoderniti@gmail.com</span>
            </p>
          </div>
        </div>
        <div className="border-b-2 pb-7 flex flex-col ">
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight h">
            Business <span className="font-bold">Hours</span>
          </h4>
          <div className="leading-7 mt-2  para">
         
              <p>Monday - Friday 9am to 5pm </p>
             <p> Saturday - 9am to 2pm </p>
             <p> Sunday - Closed</p>
    
          </div>
        </div>
      </div>
    </>
  );
};

export default Infobar;
