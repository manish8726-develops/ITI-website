"use client"

import React, { useState, useEffect } from "react"

export function SmoothLabeledProgress({
  label,
  finalValue,
  initialValue = 0,
  duration = 2000,
  delay = 500,
}) {
  const [progress, setProgress] = useState(initialValue)

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(finalValue)
    }, delay)
    return () => clearTimeout(timer)
  }, [finalValue, delay])

  return (
    <div className="w-full max-w-6xl mb-6">
      <div className="mb-2 text-gray-600 text-base font-normal">{label}</div>

      <div className="relative w-full h-5 bg-gray-200 rounded-full overflow-hidden">
        {/* Progress bar */}
        <div
          className="h-full bg-[#0794d1] rounded-full transition-all ease-in-out"
          style={{
            width: `${progress}%`,
            transitionDuration: `${duration}ms`,
          }}
        ></div>

        {/* Tooltip */}
        <div
          className="absolute -top-9 text-white text-xs font-semibold bg-black px-2 py-1 rounded shadow-md"
          style={{
            left: `calc(${progress}% - 20px)`,
            transition: 'left 0.5s ease-in-out',
          }}
        >
          {progress}%
          {/* Triangle */}
          <div className="absolute left-1/2 -bottom-2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-black"></div>
        </div>
      </div>
    </div>
  )
}
