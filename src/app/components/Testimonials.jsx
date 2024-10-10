import Image from 'next/image'
import logo from '@/public/Logo.png'
import background from '@/public/TestimonialBg.png'
import p1 from '@/public/Person1.png'
import p2 from  '@/public/Person2.png'
import comma from '@/public/comma.png'
import React from 'react'

const Testimonials = () => {
  return (
    <div className='flex flex-col w-screen min-h-screen md:h-screen items-center lg:mt-0 mt-2 bg-black'
      style={{
        backgroundImage: `url(${background.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className='flex flex-col w-screen h-auto md:h-screen items-center z-50 justify-center'>
        <h1 className='text-4xl text-[#D9A536]'>TESTIMONIALS</h1>
        <h1 className='text-6xl font-semibold text-white text-center'>Hear From Our Customers</h1>
        <Image src={logo} alt='logo' width={400} />
        
        <div className='flex flex-col md:flex-row w-full justify-evenly mt-16 gap-8 sm:items-center'>
       
        <div className='flex flex-col w-[90%] md:w-[550px] h-[500px] lg:h-[370px] bg-[#252424] p-3 rounded-xl'>
  <div className='flex flex-col md:flex-row items-start w-full h-2/3'>
    <Image src={p1} alt='pic' width={145} className='md:mr-3' />
    <div className='w-full'>
      <p className='text-lg text-white font-semibold'>
        Just came back to home and should say that it is definitely a great experience. I would recommend it for everyone who needs a bike for a short term or want to t...
      </p>
    </div>
  </div>
  <div className='flex flex-col h-1/3 w-full mt-3 md:mt-0 md:ml-[190px]'>
    <h1 className='text-3xl font-semibold text-[#D9A536]'>Robert Fox</h1>
    <h2 className='text-xl text-white font-semibold'>Writer</h2>
    <p>⭐⭐⭐⭐⭐</p>
  </div>
  <Image src={comma} alt='pic' width={70} className='ml-auto md:ml-[450px] bottom-0' />
</div>
       
<div className='flex flex-col w-[90%] md:w-[550px] h-[500px] lg:h-[370px] bg-[#252424] p-3 rounded-xl'>
  <div className='flex flex-col md:flex-row items-center w-full h-2/3'>
    <Image src={p2} alt='pic' width={145} className='md:mr-3' />
    <div className='w-full mt-3 md:mt-0'>
      <p className='text-lg text-white font-semibold'>
        Amazing service! Claire helped me to reduce the shipping price a little and shipped it immediately after purchasing. The amethyst cave I got is a beauty and I c...
      </p>
    </div>
  </div>
  <div className='flex flex-col h-1/3 w-full mt-3 md:mt-0 md:ml-[190px]'>
    <h1 className='text-3xl font-semibold text-[#D9A536]'>Marvin McKinney</h1>
    <h2 className='text-xl text-white font-semibold'>Businessman</h2>
    <p>⭐⭐⭐⭐</p>
  </div>
  <Image src={comma} alt='pic' width={70} className='ml-auto md:ml-[450px] bottom-0' />
</div>

       
        </div>
      </div>
    </div>
  )
}

export default Testimonials;
