'use client'
import React from 'react'
import { SmoothLabeledProgress } from './SmoothLabeledProgress'


const Aboutus = () => {
  return (
    <div className='mx-auto'>
      <div className="text-center py-10 px-4 max-w-full">
  {/* Main Heading */}
  <h1 className="text-3xl md:text-4xl font-semibold">
    The New Way of Industrial Training to{" "}
    <span className="bg-[#0096d6] text-white px-4 py-1 rounded font-bold inline-block">
      success.
    </span>
  </h1>

  {/* Subheading Paragraph */}
  <p className="text-gray-600 mt-6 text-lg max-w-4xl mx-auto">
    Lucknow Modern Industrial Training Institute of Technical Education (I.T.I.) is an institute which would constantly
  </p>

  {/* Emphasized Line */}
  <p className="text-[#0096d6] font-bold text-2xl md:text-3xl mt-2 font-[cursive]">
    endeavor to change the face of technical Education
  </p>

  {/* Location Note */}
  <p className="text-gray-600 text-lg">Lucknow - Uttar Pradesh.</p>
</div>
<div className='flex flex-wrap-reverse items-end'>
<section className="px-6  max-w-3xl mx-auto pb-10 text-gray-800 md:w-[40%]">
  <h2 className="text-4xl font-bold mb-4"><span className="text-black">Who</span> We Are</h2>
  <p className="mb-4">
    Lucknow Modern Industrial Training Institute of Technical Education (I.T.I.) was established in 2012 by Shri S. Kureel under the Rajneesh Educational Welfare Society. The institute is located on a lush green campus spread across 2,000 square yards, offering a peaceful and focused learning environment.
  </p>
  <p className="mb-4">
    We are affiliated with the National Council of Vocational Training (NCVT), Ministry of Labour, Government of India. Our institute features well-equipped workshops and modern infrastructure with all the tools and measuring instruments prescribed by the Government of India.
  </p>
  <p>
    Our teaching staff brings decades of experience to the field. Our esteemed Principal, Mr. K. Pandey (Retired Senior Manager, Training at TATA MOTORS, Lucknow), has over 30 years of experience in delivering practical and theoretical training. He has served at world-className training centers, including those in TATA MOTORS Lucknow and Jamshedpur.
  </p>
</section>
<section className='md:w-[60%]'>
<h2 className="text-4xl font-semi-bold mb-4 "><span className="font-bold">Course</span> Registrations</h2>

<SmoothLabeledProgress label="Electrician" finalValue={99} duration={2500} />
<SmoothLabeledProgress label="Fitter" finalValue={85} duration={3000} delay={1500} />




</section>
</div>
    </div>
  )
}

export default Aboutus
