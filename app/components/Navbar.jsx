"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { FiChevronDown } from "react-icons/fi";
import { usePathname } from "next/navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleNavList, settoggleNavList] = useState(false);
  const [courseNavList, setcourseNavList] = useState(false);
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/aboutUs" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];
  const pathname = usePathname();
  return (
    <>
      <div
        className={`flex items-center justify-between gap-10 px-4 md:px-12 border-y-4 pb-3 text-sky-500 pt-5 border-[#ff7600] relative  ${
          toggle ? "overflow-hidden" : ""
        }`}
      >
        <div>
          <Image
            src="https://lucknowmoderniti.com/img/logo.png"
            width={300}
            height={300}
            alt="lucknowmoderniti"
          />
        </div>
        <div>
          <ul className="md:flex gap-5 hidden font-medium  ">
            <li
              className={`p-2 rounded ${
                pathname === "/" ? "bg-[#0088cc] text-white" : ""
              }`}
            >
              <Link href="/">Home</Link>
            </li>

            <li
              onMouseLeave={() => settoggleNavList(false)}
              onMouseEnter={() => settoggleNavList(!toggleNavList)}
              className={`relative hover:bg-[#0088cc] hover:text-white rounded`}
            >
              <Link
                href="/aboutUs"
                className={`flex  items-center gap-3 p-2 rounded ${
                  pathname === "/aboutUs" ? "bg-[#0088cc] text-white" : ""
                }`}
              >
                About Us <FiChevronDown />
              </Link>
              <ul
                className={
                  toggleNavList
                    ? "absolute w-[150px] bg-[#0088cc] rounded-md "
                    : "hidden"
                }
              >
                <li className="bg-[#0088cc] text-white p-2 rounded-t-md">
                  <Link href="/aboutUs/vision">Our Vision</Link>
                </li>
                <li className="bg-[#0088cc] text-white p-2 rounded-b-md">
                  <Link href="/aboutUs/mission">Our Mission</Link>
                </li>
              </ul>
            </li>

            <li
              onMouseLeave={() => setcourseNavList(false)}
              onMouseEnter={() => setcourseNavList(!courseNavList)}
              className="relative  hover:bg-[#0088cc] hover:text-white rounded"
            >
              <Link
                href="/courses"
                className={`flex  items-center gap-3 p-2 rounded ${
                  pathname === "/courses" ? "bg-[#0088cc] text-white" : ""
                }`}
              >
                Courses <FiChevronDown />
              </Link>
              <ul
                className={
                  courseNavList
                    ? "absolute w-[150px] bg-[#0088cc] rounded-md   "
                    : "hidden"
                }
              >
                <li className="bg-[#0088cc] text-white p-2 rounded-t-md">
                  <Link href="/courses/electrician">Electrician</Link>
                </li>
                <li className="bg-[#0088cc] text-white p-2 rounded-b-md">
                  <Link href="/courses/fitter">Fitter</Link>
                </li>
              </ul>
            </li>
            <li
              className={`p-2 rounded ${
                pathname === "/admission" ? "bg-[#0088cc] text-white" : ""
              }`}
            >
              <Link href="/admission">Admission</Link>
            </li>
            <li
              className={`p-2 rounded ${
                pathname === "/gallery" ? "bg-[#0088cc] text-white" : ""
              }`}
            >
              <Link href="/gallery">Gallery</Link>
            </li>
            <li
              className={`p-2 rounded ${
                pathname === "/contact" ? "bg-[#0088cc] text-white" : ""
              }`}
            >
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div
          onClick={() => {
            setToggle(!toggle);
          }}
          className="md:hidden text-2xl cursor-pointer"
        >
          {toggle ? (
            <div className="text-red-500 text-2xl cursor-pointer">
              <IoCloseSharp />
            </div>
          ) : (
            <RxHamburgerMenu />
          )}
        </div>
      </div>
      <div
        className={toggle ? " md:hidden  bg-black text-white w-full" : "hidden"}
      >
        <ul className="flex flex-col py-7 cursor-pointer px-7 border-b gap-4   ">
          {navLinks.map(({ name, href }, index) => {
            return (
              <li
                key={index}
                className="border-b hover:underline"
                onClick={() => setToggle(!toggle)}
              >
                <Link href={href}>{name}</Link>
              </li>
            );
          })}
          <li>
            <Accordion type="single" collapsible className="m-0 border-b">
              <AccordionItem value="courses-electrician">
                <AccordionTrigger>Courses</AccordionTrigger>
                <AccordionContent>
                  <Link
                    href="/"
                    onClick={() => setToggle(!toggle)}
                    className="block py-1"
                  >
                    Electrician
                  </Link>
                  <Link
                    href="/"
                    onClick={() => setToggle(!toggle)}
                    className="block py-1"
                  >
                    Fitter
                  </Link>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </li>

          <li>
            <Accordion type="single" collapsible className="m-0 border-b">
              <AccordionItem value="about-us">
                <AccordionTrigger>About Us</AccordionTrigger>
                <AccordionContent>
                  <Link
                    href="/aboutUs/vision"
                    onClick={() => setToggle(!toggle)}
                    className="block py-1"
                  >
                    Our Vision
                  </Link>
                  <Link
                    href="/aboutUs/mission"
                    onClick={() => setToggle(!toggle)}
                    className="block py-1"
                  >
                    Our Mission
                  </Link>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
