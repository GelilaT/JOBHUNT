import React from 'react'
import Button from './Button'
import Image from 'next/image'

const Footer = () => {
  return (
    <div>
        <div className="mx-auto flex flex-col items-center py-24">
            <p className="text-5xl font-poppins font-bold pb-10">Never miss an update!</p>
            <div className="bg-button-hover border-button-border border-2 flex items-center gap-48 p-1 w-fit">
            <input type="text" placeholder="Enter your email" className="bg-transparent pl-5 text-white text-sm"/>
            <Button text="Subscribe"/>
            </div>
        </div>
          
        <div className='flex justify-between pr-32 pl-10 items-start pb-20'>
            <div className='flex items-center justify-start'>
                <Image src={'/logo.png'} alt="logo" width={100} height={100} />
                <h1 className='font-semibold text-3xl'>Jobhunt</h1>
            </div>    

            <div className='flex flex-col gap-5 text-xl pt-8'>
                <h1>Home</h1>
                <h1>About</h1>
                <h1>Post a job</h1>
                  
            </div>

            <div className='flex flex-col gap-5 text-xl pt-8'>
                <h1>Contact us</h1>
                <h1>Privacy Policy</h1>
  
            </div>

            
        </div>
    </div>
  )
}

export default Footer
