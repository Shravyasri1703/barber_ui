import React from 'react'
import logo from '@/public/Logo.png'
import pic1 from '@/public/Sticker1.png'
import pic2 from '@/public/Sticker2.png'
import pic3 from '@/public/Sticker3.png'
import pic4 from '@/public/Sticker4.png'
import w1 from '@/public/work1.png'
import w2 from '@/public/work2.png'
import w3 from '@/public/work3.png'
import Image from 'next/image'

const Blog = () => {
  return (
    <div className='w-screen min-h-screen flex flex-col items-center mt-14 px-4' id='blog'>
      <h1 className='text-4xl text-[#D9A536] text-center'>NEWS FROM BLOG</h1>
      <h1 className='text-5xl text-[#4A4845] font-semibold text-center'>What&apos;s On Our Mind</h1>
      <Image src={logo} alt='logo' width={390} />

      {/* Blog Articles */}
      <div className='flex flex-col md:flex-row w-full justify-evenly my-12 gap-10'>
        <div className='flex flex-col items-center'>
          <Image src={w1} alt='pic' width={300} />
          <div className='flex flex-col w-[290px] gap-3'>
            <div className='max-w-[270px] mt-4 px-2 border-l-4 ml-2 border-[#D9A536]'>
              <h1 className='text-lg text-slate-400'>BEARD STYLES / BY ADMIN</h1>
              <h1 className='text-2xl font-semibold'>The Best Barbershop In The Town</h1>
            </div>
            <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates sit amet dolor consectetur.</p>
          </div>
        </div>

        <div className='flex flex-col items-center'>
          <Image src={w2} alt='pic' width={300} />
          <div className='flex flex-col w-[290px] gap-3'>
            <div className='max-w-[270px] mt-4 px-2 border-l-4 ml-2 border-[#D9A536]'>
              <h1 className='text-lg text-slate-400'>BEARD STYLES / BY ADMIN</h1>
              <h1 className='text-2xl font-semibold'>The Best Barbershop In The Town</h1>
            </div>
            <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates sit amet dolor consectetur.</p>
          </div>
        </div>

        <div className='flex flex-col items-center'>
          <Image src={w3} alt='pic' width={300} />
          <div className='flex flex-col w-[290px] gap-3'>
            <div className='max-w-[270px] mt-4 px-2 border-l-4 ml-2 border-[#D9A536]'>
              <h1 className='text-lg text-slate-400'>BEARD STYLES / BY ADMIN</h1>
              <h1 className='text-2xl font-semibold'>The Best Barbershop In The Town</h1>
            </div>
            <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates sit amet dolor consectetur.</p>
          </div>
        </div>
      </div>

      {/* Clients Section */}
      <div className='flex flex-col items-center'>
        <h1 className='text-5xl text-[#4A4845] font-semibold text-center'>Our Clients</h1>
        <Image src={logo} alt='logo' width={390} />
        <div className='flex flex-wrap justify-center gap-10 mt-3'>
          <Image src={pic1} alt='pic' width={250} />
          <Image src={pic2} alt='pic' width={250} />
          <Image src={pic3} alt='pic' width={250} />
          <Image src={pic4} alt='pic' width={250} />
        </div>
      </div>
    </div>
  )
}

export default Blog
