import React from 'react'
import background from '@/public/AppointmentBg.png'
const Appointment = () => {
  return (
    <div className='flex flex-col min-h-screen lg:h-screen w-screen justify-evenly items-center' id='appointment'
    style={{
        backgroundImage: `url(${background.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
       }}
    >
     <h1 className='text-[#D9A536] text-2xl lg:text-4xl'>BEST BARBERSHOP IN THE CITY</h1>
     <div className='max-w-[60%] flex flex-col gap-10'>
     <h1 className='text-4xl lg:text-7xl text-white text-center'>Making You Look Good Is In Our Heritage</h1>
     <p className='text-xl lg:text-3xl text-white text-center'>Barber is a Person Whose Occupation is mainly To Cut Dress Groom Style And Shave Men&apos;s And Boy&apos;s Hair</p>
     </div>
     <button className='text-white w-[250px] lg:w-[400px] h-[60px] lg:h-[90px] text-lg lg:text-3xl bg-[#D9A536]'>MAKE AN APPOINTMENT</button>
    </div>
  )
}

export default Appointment