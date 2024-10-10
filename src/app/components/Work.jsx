import Image from 'next/image'
import React from 'react'
import logo from '@/public/Logo.png'
import pic1 from '@/public/Photo1.png'
import pic2 from '@/public/Photo2.png'
import pic3 from '@/public/Photo3.png'
import pic4 from '@/public/Photo4.png'
import pic5 from '@/public/Photo5.png'
import pic6 from '@/public/Photo6.png'
import Footer from './Footer'

const Work = () => {
  return (
    <div className='flex flex-col min-h-screen w-screen items-center mt-14 px-4' id='work'>
      <h1 className='text-5xl text-[#4A4845] font-semibold text-center'>Our Work</h1>
      <Image src={logo} alt='logo' width={390} className='mx-auto' />

      <div className='flex flex-col w-full py-5 lg:py-0 gap-16 mt-14'>
        {/* Top Row of Images */}
        <div className='flex flex-wrap justify-center lg:justify-evenly w-full gap-5'>
          <Image src={pic1} alt='pic' height={275} width={275} className='flex-shrink-0' />
          <Image src={pic2} alt='pic' height={275} width={275} className='flex-shrink-0' />
          <Image src={pic3} alt='pic' height={275} width={275} className='flex-shrink-0' />
        </div>

        {/* Bottom Row of Images */}
        <div className='flex flex-wrap  justify-center lg:justify-evenly w-full gap-5 mb-20'>
          <Image src={pic4} alt='pic' height={275} width={275} className='flex-shrink-0' />
          <Image src={pic5} alt='pic' height={275} width={275} className='flex-shrink-0' />
          <Image src={pic6} alt='pic' height={275} width={275} className='flex-shrink-0' />
        </div>
      </div>
      
      <Footer />
    </div>
  )
}

export default Work
