import Image from 'next/image'
import logo from '@/public/Logo.png'
import dots from '@/public/Dots.png'
import React from 'react'

const Pricing = () => {
  return (
    <div className='flex flex-col w-screen h-auto items-center bg-[#FDF8E9] justify-evenly py-10 sm:h-screen'>
       <h1 className='text-[#4A4845] text-2xl sm:text-5xl font-semibold text-center'>Barbershop Pricing Plan</h1>
       <Image src={logo} alt='logo' width={200} className="sm:w-[350px]" />
       <div className='flex flex-col sm:flex-row w-full justify-evenly px-5 mt-5'>
       
         <div className='flex flex-col w-full sm:w-1/2 items-center justify-evenly'>
         
         <div className='flex flex-col w-full sm:w-[90%] p-2 items-center gap-3'>
            <div className='w-full flex flex-col sm:flex-row items-center justify-around'>
              <h1 className='text-xl sm:text-3xl text-[#35312F]'>Hair Cut</h1>
              <Image src={dots} alt='dots' width={100} className="sm:w-[175px]" />
              <h1 className='text-2xl sm:text-4xl text-[#D9A536]'>$10</h1>
            </div>
            <div className='w-[90%] '>
              <p className='text-sm sm:text-lg text-left'>Lorem ipsum dolor sit amet, consectetur milam elit. Lorem ipsum dolor sit amet, consectetur milam elit</p>
            </div>
          </div>

          <div className='flex flex-col w-full sm:w-[90%] p-2 items-center gap-2'>
            <div className='w-full flex flex-col sm:flex-row items-center justify-around'>
              <h1 className='text-xl sm:text-3xl text-[#35312F]'>Hair Styling</h1>
              <Image src={dots} alt='dots' width={100} className="sm:w-[175px]" />
              <h1 className='text-2xl sm:text-4xl text-[#D9A536]'>$25</h1>
            </div>
            <div className='w-[90%]'>
              <p className='text-sm sm:text-lg text-left'>Lorem ipsum dolor sit amet, consectetur milam elit. Lorem ipsum dolor sit amet, consectetur milam elit</p>
            </div>
          </div>

          <div className='flex flex-col w-full sm:w-[90%] p-2 items-center gap-2'>
            <div className='w-full flex flex-col sm:flex-row items-center justify-around'>
              <h1 className='text-xl sm:text-3xl text-[#35312F]'>Hair Trimming</h1>
              <Image src={dots} alt='dots' width={100} className="sm:w-[175px]" />
              <h1 className='text-2xl sm:text-4xl text-[#D9A536]'>$30</h1>
            </div>
            <div className='w-[90%]'>
              <p className='text-sm sm:text-lg text-left'>Lorem ipsum dolor sit amet, consectetur milam elit. Lorem ipsum dolor sit amet, consectetur milam elit</p>
            </div>
          </div>

          <div className='flex flex-col w-full sm:w-[90%] p-2 items-center gap-2'>
            <div className='w-full flex flex-col sm:flex-row items-center justify-around'>
              <h1 className='text-xl sm:text-3xl text-[#35312F]'>Kids Hair Cut</h1>
              <Image src={dots} alt='dots' width={100} className="sm:w-[175px]" />
              <h1 className='text-2xl sm:text-4xl text-[#D9A536]'>$15</h1>
            </div>
            <div className='w-[90%]'>
              <p className='text-sm sm:text-lg text-left'>Lorem ipsum dolor sit amet, consectetur milam elit. Lorem ipsum dolor sit amet, consectetur milam elit</p>
            </div>
          </div>

         </div>

         <div className='flex flex-col w-full sm:w-1/2 items-center justify-evenly mt-5 sm:mt-0'>
         
         <div className='flex flex-col w-full sm:w-[90%] p-2 items-center gap-3'>
            <div className='w-full flex flex-col sm:flex-row items-center justify-around'>
              <h1 className='text-xl sm:text-3xl text-[#35312F]'>Shaving</h1>
              <Image src={dots} alt='dots' width={100} className="sm:w-[175px]" />
              <h1 className='text-2xl sm:text-4xl text-[#D9A536]'>$40</h1>
            </div>
            <div className='w-[90%]'>
              <p className='text-sm sm:text-lg text-left'>Lorem ipsum dolor sit amet, consectetur milam elit. Lorem ipsum dolor sit amet, consectetur milam elit</p>
            </div>
          </div>

          <div className='flex flex-col w-full sm:w-[90%] p-2 items-center gap-2'>
            <div className='w-full flex flex-col sm:flex-row items-center justify-around'>
              <h1 className='text-xl sm:text-3xl text-[#35312F]'>Beard Trim</h1>
              <Image src={dots} alt='dots' width={100} className="sm:w-[175px]" />
              <h1 className='text-2xl sm:text-4xl text-[#D9A536]'>$25</h1>
            </div>
            <div className='w-[90%]'>
              <p className='text-sm sm:text-lg text-left'>Lorem ipsum dolor sit amet, consectetur milam elit. Lorem ipsum dolor sit amet, consectetur milam elit</p>
            </div>
          </div>

          <div className='flex flex-col w-full sm:w-[90%] p-2 items-center gap-2'>
            <div className='w-full flex flex-col sm:flex-row items-center justify-around'>
              <h1 className='text-xl sm:text-3xl text-[#35312F]'>Face Cleaning</h1>
              <Image src={dots} alt='dots' width={100} className="sm:w-[175px]" />
              <h1 className='text-2xl sm:text-4xl text-[#D9A536]'>$60</h1>
            </div>
            <div className='w-[90%]'>
              <p className='text-sm sm:text-lg text-left'>Lorem ipsum dolor sit amet, consectetur milam elit. Lorem ipsum dolor sit amet, consectetur milam elit</p>
            </div>
          </div>

          <div className='flex flex-col w-full sm:w-[90%] p-2 items-center gap-2'>
            <div className='w-full flex flex-col sm:flex-row items-center justify-around'>
              <h1 className='text-xl sm:text-3xl text-[#35312F]'>Mustache Trim</h1>
              <Image src={dots} alt='dots' width={100} className="sm:w-[175px]" />
              <h1 className='text-2xl sm:text-4xl text-[#D9A536]'>$12</h1>
            </div>
            <div className='w-[90%]'>
              <p className='text-sm sm:text-lg text-left'>Lorem ipsum dolor sit amet, consectetur milam elit. Lorem ipsum dolor sit amet, consectetur milam elit</p>
            </div>
          </div>

         </div>

       </div>
       <button className='w-28 sm:w-36 h-12 sm:h-14 rounded-xl text-white bg-[#D9A536] mt-5 sm:mt-0'>View More</button>
    </div>
  )
}

export default Pricing;
