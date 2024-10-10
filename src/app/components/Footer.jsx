'use client'
import Image from 'next/image'
import React from 'react'
import logo from '@/public/footerlogo.png'
import bg from '@/public/footer.png'
import mosh from '@/public/Logo.png'
import { RxScissors } from "react-icons/rx";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

const Footer = () => {

  const handleScroll = (e, sectionId) => {
    e.preventDefault();
    const section = document.querySelector(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='flex flex-col md:flex-row w-screen h-auto lg:h-[350px]' // Change to flex-col on small screens
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className='flex flex-col w-full md:w-1/4 items-center justify-evenly gap-2 mt-2 mb-2'>
        <Image src={logo} alt='pic' width={150} />
        <div className='w-[60%] text-center'>
          <p className='text-white font-light text-sm'>There are many variations of passages of lorem ipsum available, but the majority have suffered alteration in some form.</p>
        </div>
        <input
          type='text'
          placeholder='Email*'
          className='p-1 border-2 border-slate-600'
        />
        <button className='w-36 h-8 text-white border-2 border-white rounded-full bg-[#D9A536]'>Subscribe</button>
      </div>
      <div className='flex flex-row w-full md:w-2/4 items-center flex-wrap justify-evenly'> {/* Allow wrapping of columns on smaller screens */}
        <div className='flex flex-col w-1/2 md:w-1/2 text-white items-center'>
          <div className='flex flex-col items-center'>
            <h1 className='text-3xl'>QUICK LINKS</h1>
            <Image src={mosh} alt='pic' width={165} />
          </div>
          <div className='flex flex-col gap-3 mt-2'>
            <div className='flex flex-row items-center gap-3 px-2 mx-2 w-[70%]'>
              <RxScissors size={28} color='#D9A536' />
              <a className='text-2xl' href='#home' onClick={(e) => handleScroll(e, '#home')}>HOME</a>
            </div>
            <div className='flex flex-row items-center gap-3 px-2 mx-2'>
              <RxScissors size={28} color='#D9A536' />
              <a className='text-2xl' href='#Intro' onClick={(e) => handleScroll(e, '#Intro')}>ABOUT US</a>
            </div>
            <div className='flex flex-row items-center gap-3 px-2 mx-2'>
              <RxScissors size={28} color='#D9A536' />
              <a className='text-2xl' href='#blog' onClick={(e) => handleScroll(e, '#blog')}>GALLERY</a>
            </div>
            <div className='flex flex-row items-center gap-3 px-2 mx-2'>
              <RxScissors size={28} color='#D9A536' />
              <a className='text-2xl' href='#contact' onClick={(e) => handleScroll(e, '#contact')}>CONTACT US</a>
            </div>
          </div>
        </div>

        <div className='flex flex-col w-1/2 md:w-1/2 text-white items-center'>
          <div className='flex flex-col items-center'>
            <h1 className='text-3xl'>SERVICES</h1>
            <Image src={mosh} alt='pic' width={165} />
          </div>
          <div className='flex flex-col gap-3 pt-2'>
            <div className='flex flex-row items-center gap-3 px-2 mx-2 w-[70%]'>
              <RxScissors size={28} color='#D9A536' />
              <h1 className='text-2xl'>HAIRS</h1>
            </div>
            <div className='flex flex-row items-center gap-3 px-2 mx-2'>
              <RxScissors size={28} color='#D9A536' />
              <h1 className='text-2xl'>BEAUTY</h1>
            </div>
            <div className='flex flex-row items-center gap-3 px-2 mx-2'>
              <RxScissors size={28} color='#D9A536' />
              <h1 className='text-2xl'>SPA</h1>
            </div>
            <div className='flex flex-row items-center gap-3 px-2 mx-2'>
              <RxScissors size={28} color='#D9A536' />
              <h1 className='text-2xl'>MESSAGE</h1>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col w-full md:w-1/4 items-center justify-evenly text-white p-5'>
        <div className='flex flex-col items-center text-white'>
          <h1 className='text-3xl'>CONTACTS</h1>
          <Image src={mosh} alt='pic' width={165} />
        </div>
        <div className='flex flex-col items-center w-[80%] gap-5 p-3'>
          <div className='flex flex-row items-center gap-3 px-2 mx-2'>
            <FaPhoneVolume size={28} color='#D9A536' />
            <h1 className='text-2xl'>+4124987645</h1>
          </div>

          <div className='flex flex-row items-center gap-3 px-2 mx-2'>
            <IoIosMail size={30} color='#D9A536' />
            <h1 className='text-lg'>barberz.123@info.com</h1>
          </div>

          <div className='flex flex-row items-center gap-3 px-2 mx-2'>
            <FaLocationDot size={28} color='#D9A536' />
            <h1 className='text-2xl'>ABC, XYZ INDIA</h1>
          </div>
        </div>
        <div className='flex flex-row items-center gap-5 mt-4'>
          <div className='p-2 rounded-md bg-[#D9A536]'>
            <FaFacebookF size={15} color='white' />
          </div>

          <div className='p-2 rounded-md bg-[#D9A536]'>
            <FaTwitter size={15} color='white' />
          </div>

          <div className='p-2 rounded-md bg-[#D9A536]'>
            <FaYoutube size={15} color='white' />
          </div>

          <div className='p-2 rounded-md bg-[#D9A536]'>
            <TbWorld size={15} color='white' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
