import React from 'react'
import logo from '@/public/Logo.png'
import scissors from '@/public/Scissor.png'
import Kit from '@/public/Razor.png'
import Brush from '@/public/Brush.png'
import Trimmer from '@/public/Trimmer.png'
import Image from 'next/image'

const Services = () => {
  return (
    <div className='flex flex-col min-h-screen lg:h-screen w-screen bg-[#FDF8E9] p-3 items-center justify-evenly mb-8 lg:mb-0' id='services'>
        <h1 className='text-3xl md:text-4xl text-[#D9A536]'>Services</h1>
        <h1 className='text-4xl md:text-5xl text-[#4A4845] font-semibold'>Our Services</h1>
        <Image src={logo} alt='logo' width={200} height={200} className='md:w-[392px]' />
        
        <div className='flex flex-col md:flex-row w-full items-center justify-evenly px-5 gap-8 md:gap-0 lg:mt-0 mt-5'>
            <div className='flex flex-col w-[250px] md:w-[300px] h-[450px] md:h-[500px] bg-white items-center p-3 gap-5'>
                <Image src={scissors} alt='sci' width={94} />
                <h1 className='text-[#4A4845] text-2xl md:text-3xl'>Hair Cut</h1>
                <div className='w-full md:w-[90%]'>
                    <p className='text-sm md:text-lg text-center'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quo quasi suscipit, natus ea error architecto voluptatem odio debitis labore.
                    </p>
                </div>
                <button className='w-32 md:w-40 h-10 md:h-12 border-2 border-[#D9A536] text-[#D9A536] text-lg md:text-xl rounded-lg'>READ MORE</button>
            </div>

            <div className='flex flex-col w-[250px] md:w-[300px] h-[450px] md:h-[500px] bg-white items-center p-3 gap-5'>
                <Image src={Kit} alt='sci' width={94} />
                <h1 className='text-[#4A4845] text-2xl md:text-3xl'>Shaving</h1>
                <div className='w-full md:w-[90%]'>
                    <p className='text-sm md:text-lg text-center'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quo quasi suscipit, natus ea error architecto voluptatem odio debitis labore.
                    </p>
                </div>
                <button className='w-32 md:w-40 h-10 md:h-12 border-2 border-[#D9A536] text-[#D9A536] text-lg md:text-xl rounded-lg'>READ MORE</button>
            </div>

            <div className='flex flex-col w-[250px] md:w-[300px] h-[450px] md:h-[500px] bg-white items-center p-3 gap-5'>
                <Image src={Brush} alt='sci' width={94} />
                <h1 className='text-[#4A4845] text-2xl md:text-3xl'>Hair Color</h1>
                <div className='w-full md:w-[90%]'>
                    <p className='text-sm md:text-lg text-center'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quo quasi suscipit, natus ea error architecto voluptatem odio debitis labore.
                    </p>
                </div>
                <button className='w-32 md:w-40 h-10 md:h-12 border-2 border-[#D9A536] text-[#D9A536] text-lg md:text-xl rounded-lg'>READ MORE</button>
            </div>

            <div className='flex flex-col w-[250px] md:w-[300px] h-[450px] md:h-[500px] bg-white items-center p-3 gap-5'>
                <Image src={Trimmer} alt='sci' width={94} />
                <h1 className='text-[#4A4845] text-2xl md:text-3xl'>Beard Trim</h1>
                <div className='w-full md:w-[90%]'>
                    <p className='text-sm md:text-lg text-center'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quo quasi suscipit, natus ea error architecto voluptatem odio debitis labore.
                    </p>
                </div>
                <button className='w-32 md:w-40 h-10 md:h-12 border-2 border-[#D9A536] text-[#D9A536] text-lg md:text-xl rounded-lg'>READ MORE</button>
            </div>
        </div>
    </div>
  )
}

export default Services;
