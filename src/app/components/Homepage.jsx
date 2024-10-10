'use client'
import Image from 'next/image'
import React from 'react'
import back from '@/public/HomeBg.png'
import logo from '@/public/HomeLogo.png'
import tube from '@/public/You.png'
import tweet from '@/public/twitter.png'
import fb from '@/public/Fb.png'
import web from '@/public/Web.png'
import one from '@/public/nav1.png'
import two from '@/public/nav2.png'

const Homepage = () => {

  const handleScroll = (e, sectionId) => {
    e.preventDefault();
    const section = document.querySelector(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
  
    <div className='w-screen h-screen flex flex-col items-center mb-8 lg:mb-0' id='home'
     style={{
      backgroundImage: `url(${back.src})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
     }}
    >
      <div >
      <div className='w-full bg-black/50 z-50 hidden md:flex'>
  <div className='flex flex-col sm:h-20 lg:h-40 w-screen items-center'>
    <div className='flex flex-row w-full h-[60px] items-center justify-between px-4 md:px-10 lg:px-20'>
      <div className='flex flex-row items-center gap-2 md:gap-5'>
        <Image src={one} alt='pic' width={100} className='md:w-[131px]' />
        <Image src={two} alt='pic' width={150} className='md:w-[215px]' />
      </div>
      <div className='flex flex-row items-center gap-3 md:gap-5'>
        <Image src={fb} alt='pic' width={20} className='md:w-[25px]' />
        <Image src={tube} alt='pic' width={20} className='md:w-[25px]' />
        <Image src={web} alt='pic' width={20} className='md:w-[25px]' />
        <Image src={tweet} alt='pic' width={20} className='md:w-[25px]' />
      </div>
    </div>

    <div className='flex flex-row w-screen items-center justify-around h-[80px] md:h-[100px]'>
      <a className='text-xl md:text-2xl lg:text-3xl text-white hover:text-[#CCA34C]' href='#home' onClick={(e) => handleScroll(e, '#home')}>Home</a>
      <a className='text-xl md:text-2xl lg:text-3xl text-white hover:text-[#CCA34C]' href='#services' onClick={(e) => handleScroll(e, '#services')}>Services</a>
      <a className='text-xl md:text-2xl lg:text-3xl text-white hover:text-[#CCA34C]' href='#Intro' onClick={(e) => handleScroll(e, '#Intro')}>About Us</a>
      <Image src={logo} alt='logo' width={140} className='md:w-[210px]' />
      <a className='text-xl md:text-2xl lg:text-3xl text-white hover:text-[#CCA34C]' href='#team' onClick={(e) => handleScroll(e, '#team')}>Team</a>
      <a className='text-xl md:text-2xl lg:text-3xl text-white hover:text-[#CCA34C]' href='#appointment' onClick={(e) => handleScroll(e, '#appointment')}>Booking</a>
      <a className='text-xl md:text-2xl lg:text-3xl text-white hover:text-[#CCA34C]' href='#contact' onClick={(e) => handleScroll(e, '#contact')}>Contact Us</a>
    </div>
  </div>
</div>


    
      </div>

       <div className='flex flex-col items-center w-screen h-[60vh] sm:h-screen lg:h-[60%] gap-4 sm:gap-6 md:gap-10 mt-12 sm:mt-24'>
        <h1 className='text-4xl sm:text-5xl md:text-7xl font-semibold text-white text-center px-4 sm:px-0'>Our Hairstyle Enhances Your Smile!!</h1>
        <div className='w-11/12 sm:w-3/4 md:w-2/3'>
          <p className='text-lg sm:text-2xl md:text-4xl text-white text-center'>Our barbershop is the territory created purely for males who appreciate premium quality, time, and flawless look.</p>
        </div>
        <button className='w-72 sm:w-80 md:w-96 h-14 sm:h-16 md:h-20 text-white bg-[#CCA34C] text-lg sm:text-xl md:text-2xl'>MAKE AN APPOINTMENT</button>
      </div> 
    </div>
  )
}

export default Homepage
