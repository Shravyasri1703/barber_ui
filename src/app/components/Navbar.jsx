import React from 'react'
import Image from 'next/image'
import logo from '@/public/HomeLogo.png'
import tube from '@/public/You.png'
import tweet from '@/public/twitter.png'
import fb from '@/public/Fb.png'
import web from '@/public/Web.png'
import one from '@/public/nav1.png'
import two from '@/public/nav2.png'
const Navbar = () => {

  return (
    <div className='w-full bg-white/5 fixed top-0 left-0 z-50'>
    <div className='flex flex-col h-40 w-screen items-center'>
        <div className='flex flex-row w-full h-[60px] items-center justify-between px-20'>
          <div className='flex flex-row items-center gap-5 '>
              <Image src={one} alt='pic' width={131} />
              <Image src={two} alt='pic' width={215} />
          </div>
          <div className='flex flex-row items-center gap-5'>
              <Image src={fb} alt='pic' width={25} height={2} />
              <Image src={tube} alt='pic' width={25} height={25} />
              <Image src={web} alt='pic' width={25} height={25} />
              <Image src={tweet} alt='pic' width={25} height={25} />
          </div>
        </div>

        <div className='flex flex-row w-screen items-center justify-around h-[100px]'>
          <h1 className='text-3xl text-white'>Home</h1>
          <h1 className='text-3xl text-white'>Services</h1>
          <h1 className='text-3xl text-white'>About Us</h1>
          <Image src={logo} alt='logo' width={210} />
          <h1 className='text-3xl text-white'>Team</h1>
          <h1 className='text-3xl text-white'>Booking</h1>
          <h1 className='text-3xl text-white'>Contact Us</h1>
          

        </div>
    </div>
    </div>
  )
}

export default Navbar