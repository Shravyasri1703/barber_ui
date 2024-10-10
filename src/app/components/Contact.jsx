import React from 'react';
import Background from '@/public/ConBg.png';
import LeftBackground from '@/public/World.png';
import { IoIosCut } from "react-icons/io";
import Image from 'next/image';
import logo from '@/public/Logo.png';

const Contact = () => {
  return (
    <div className='flex flex-col min-h-screen lg:h-screen w-screen items-center' id='contact'>

      <div className='w-screen h-screen flex flex-col lg:flex-row'>
        {/* Left Section */}
        <div className='w-full lg:w-[70%] h-full flex flex-col items-center justify-center'
          style={{
            backgroundImage: `url(${Background.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className='flex flex-col w-[90%] lg:w-[60%] gap-2 p-4'>
            <h1 className='text-3xl lg:text-4xl text-[#D9A536]'>CONTACT</h1>
            <h1 className='text-white text-4xl lg:text-6xl font-semibold'>Get In Touch</h1>
            <Image src={logo} alt='pic' width={250} className='lg:w-[350px]' />
            <p className='text-white mt-5 text-lg lg:text-2xl'>
              Suspendisse pretium felis dolor, sed placerat diam blandit vitae. Sed eu nisl massa. Phasellus vehicula tristique orci ut ultrices. Duis eu libero augue. In vulputate sodales tempus. Phasellus dolor orci, consectetur in tincidunt eget, consectetur non orci.
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className='w-full lg:w-[30%] h-full bg-black/95 flex flex-col items-center justify-evenly p-5 lg:p-0'
          style={{
            backgroundImage: `url(${LeftBackground.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className='flex flex-col items-center w-full lg:w-[80%] justify-center'>
            <h1 className='text-2xl lg:text-3xl text-[#D9A536] font-semibold text-center'>Make An Appointment</h1>
            <h2 className='text-lg lg:text-xl text-white text-center font-light'>
              Barber Is A Person Whose Occupation Is Mainly To Cut Dress Groom 
            </h2>
          </div>
          <div className='flex flex-col lg:flex-row w-full items-center justify-center gap-4 lg:gap-0'>
            <div className='flex flex-col w-full lg:w-1/2 h-[700px] lg:h-full gap-4 lg:gap-8 items-center'>
              <input 
                type='text'
                placeholder='Name'
                className='border-2 border-white p-2 text-wrap bg-transparent w-[75%]'
              />
              <input 
                type='text'
                placeholder='Phone'
                className='border-2 border-white p-2 text-wrap bg-transparent w-[75%]'
              />
              <input 
                type='text'
                placeholder='Services'
                className='border-2 border-white p-2 text-wrap bg-transparent w-[75%]'
              />
            </div>

            <div className='flex flex-col w-full lg:w-1/2 gap-4 lg:gap-8 items-center'>
              <input 
                type='text'
                placeholder='Email'
                className='border-2 border-white p-2 text-wrap bg-transparent w-[75%]'
              />
              <input 
                type='text'
                placeholder='Phone'
                className='border-2 border-white p-2 text-wrap bg-transparent w-[75%]'
              />
              <input 
                type='text'
                placeholder='Services'
                className='border-2 border-white p-2 text-wrap bg-transparent w-[75%]'
              />
            </div>
          </div>

          <button className='text-white w-[200px] lg:w-[300px] p-2 h-14 bg-[#D9A536]'>
            MAKE AN APPOINTMENT
          </button>
        </div>
      </div>

      {/* Bottom Section */}
      <div className='flex flex-col lg:flex-row w-full items-center h-[400px] lg:h-[200px] bg-[#FDF8E9] justify-evenly'>
        <div className='flex flex-col items-center mb-4 lg:mb-0'>
          <h1 className='text-4xl lg:text-6xl font-semibold'>2000+</h1>
          <p className='text-lg lg:text-2xl'>HAPPY CLIENTS</p>
        </div>
        <IoIosCut size={60}  color='#D9A536' className='lg:hidden'/>
        <IoIosCut className='hidden lg:block text-[#D9A536]' size={90} />
        <div className='flex flex-col items-center mb-4 lg:mb-0'>
          <h1 className='text-4xl lg:text-6xl font-semibold'>500</h1>
          <p className='text-lg lg:text-2xl'>HAIR CUTS</p>
        </div>
        <IoIosCut size={60}  color='#D9A536' className='lg:hidden' />
        <IoIosCut className='hidden lg:block text-[#D9A536]' size={90} />
        <div className='flex flex-col items-center mb-4 lg:mb-0'>
          <h1 className='text-4xl lg:text-6xl font-semibold'>150</h1>
          <p className='text-lg lg:text-2xl'>STYLERS</p>
        </div>
        <IoIosCut size={60} color='#D9A536' className='lg:hidden' />
        <IoIosCut className='hidden lg:block text-[#D9A536]' size={90} />
        <div className='flex flex-col items-center mb-4 lg:mb-0'>
          <h1 className='text-4xl lg:text-6xl font-semibold'>35</h1>
          <p className='text-lg lg:text-2xl'>BRANCHES</p>
        </div>
      </div>
    </div>
  )
}

export default Contact;
