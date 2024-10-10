import Image from 'next/image'
import logo from '@/public/Rectangle 146.png'
import RightPic from '@/public/IntroPic.png'
import React from 'react'

const IntroPage = () => {
  return (
    <div className='flex flex-col lg:flex-row min-h-screen lg:h-screen min-w-screen lg:w-screen items-center justify-center mb-5 lg:mb-0' id='Intro'>
        <div className='h-[90%] w-full lg:w-3/5 flex flex-col items-center px-5 gap-5'>
          <h1 className='text-[30px] lg:text-[40px] text-[#D9A536]'>INTRODUCING</h1>
          <h1 className='text-[35px] lg:text-[55px] text-[#4A4865] font-semibold text-center'>
            BARBERZ...The Barbershop Since 1990
          </h1>
          <Image src={logo} alt='logo' width={100} height={97} className='lg:w-[120px] lg:h-[117px]' />
          <div className='w-full lg:w-[90%]'>
            <p className='text-[18px] lg:text-[22px] text-[#4A4865] text-center'>
              Barber is a person whose occupation is mainly to cut, dress, groom, style, and shave men&apos;s and boy&apos;s hair. A barber&apos;s place of work is known as a &#8222;barbershop&#8222; or a &#8222;barber&apos;s&#8222;. Barbershops are also places of social interaction and public discourse. In some instances, barbershops are also public forums.
            </p>
          </div>
          <button className='w-[300px] lg:w-[365px] h-12 lg:h-16 bg-[#D9A536] text-lg lg:text-2xl text-white mt-5'>MORE ABOUT US</button>
        </div>
        <div className='h-[60%] lg:h-full w-full lg:w-2/5 justify-center items-center p-3 mt-10 lg:mt-0'>
          <Image src={RightPic} alt='right' width={300} height={300} className='lg:w-[522px]' />
        </div>
    </div>
  )
}

export default IntroPage;
