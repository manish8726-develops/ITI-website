"use client"

import Image from "next/image"

export default function MessageCard({ title, message, imageSrc }) {
  return (
    <div className="w-[263px] h-[348px] max-w-full border p-4 flex flex-col items-center text-center rounded shadow-sm bg-white">
      <div className="w-[130px] h-[130px] rounded-full overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          width={130}
          height={130}
          className="object-cover w-full h-full"
        />
      </div>

      <h2 className="text-blue-600 font-semibold text-lg mt-4 mb-2">
        {title}
      </h2>

      <p className="text-gray-600 text-sm mb-4 px-2 leading-relaxed">
        {message}
      </p>

      <button className="mt-auto bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
        More <span className="ml-1">➤</span>
      </button>
    </div>
  )
}
