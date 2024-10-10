import Image from 'next/image'
import logo from '@/public/Logo.png'
import b1 from '@/public/Barber1.png'
import b2 from '@/public/Barber2.png'
import b3 from '@/public/Barber3.png'
import React from 'react'

const Team = () => {
  return (
    <div className='flex flex-col w-screen min-h-screen md:h-screen items-center mb-8 lg:mb-0' id='team'>
      <div className='flex flex-col w-full items-center gap-2 mt-5'>
        <h1 className='text-4xl text-[#D9A536]'>SPECIALIST</h1>
        <h1 className='text-6xl text-[#4A4845] font-semibold'>Our Team</h1>
        <Image src={logo} alt='logo' width={390} />
      </div> 
      
      <div className='flex flex-col md:flex-row flex-wrap w-full items-center justify-evenly mt-10 gap-6'>
      
        <div className='flex flex-col items-center'>
          <Image src={b1} alt='img' width={300} height={540} />
          <div className='h-[90px] w-[300px] bg-[#D9A536] flex flex-col items-center justify-center gap-1 p-2'>
            <h1 className='text-3xl text-white font-semibold'>DAVID</h1>
            <h1 className='text-xl text-white'>Hair Cut Specialist</h1>
          </div>
        </div>

        <div className='flex flex-col items-center'>
          <Image src={b2} alt='img' width={300} height={540} />
          <div className='h-[90px] w-[300px] bg-[#D9A536] flex flex-col items-center justify-center gap-1'>
            <h1 className='text-3xl text-white font-semibold'>PAUL</h1>
            <h1 className='text-lg text-white '>Beard & Trimming</h1>
          </div>
        </div>

        <div className='flex flex-col items-center'>
          <Image src={b3} alt='img' width={300} height={540} />
          <div className='h-[90px] w-[300px] bg-[#D9A536] flex flex-col items-center justify-center gap-1'>
            <h1 className='text-3xl text-white font-semibold'>CHARLIE</h1>
            <h1 className='text-lg text-white'>Hair Color Specialist</h1>
          </div>
        </div>

        <div className='flex flex-col items-center'>
          <Image src={b1} alt='img' width={300} height={540} />
          <div className='h-[90px] w-[300px] bg-[#D9A536] flex flex-col items-center justify-center gap-1'>
            <h1 className='text-3xl text-white font-semibold'>DAVID</h1>
            <h1 className='text-xl text-white'>Hair Cut Specialist</h1>
          </div>
        </div>

      </div>
  
    </div>
  )
}

export default Team;
