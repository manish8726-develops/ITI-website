"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const PageInfo = () => {
  const pathname = usePathname(); // e.g. "/news/events"
  const pathParts = pathname.split("/").filter(Boolean); // ['news', 'events']

  return (
    <div className="bg-[#171717] text-white px-4 py-6">
      <p className="text-sm text-gray-300">
        <Link href="/" className="hover:underline text-white">
          Home
        </Link>
        {pathParts.map((part, index) => {
          const fullPath = "/" + pathParts.slice(0, index + 1).join("/");
          const isLast = index === pathParts.length - 1;
          return (
            <span key={index}>
              {" / "}
              {!isLast ? (
                <Link href={fullPath} className="hover:underline capitalize">
                  {part}
                </Link>
              ) : (
                <span className="capitalize text-gray-400">{part}</span>
              )}
            </span>
          );
        })}
      </p>
      <h1 className="text-3xl mt-2 capitalize">
        {pathParts[pathParts.length - 1] || "Home"}
      </h1>
    </div>
  );
};

export default PageInfo;
