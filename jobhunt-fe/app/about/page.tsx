import Animations from '@/components/ui/Animations'
import Button from '@/components/ui/Button'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div>
      <h1 className='font-bold text-5xl pt-10 text-center'>About Us</h1>
      <p className='text-center w-[550px] mx-auto pt-3 leading-6 text-base'>Get your dream job, with offers from different countries and job positions. Apply today to get internships and work-from-home jobs.</p>
      <div className='flex gap-10 items-center justify-center py-16 px-12'>
        
          <Image src='/about1.png' alt='person1' width={320} height={50}/>
          <Image src='/about2.png' alt='person1' width={320} height={50}  />
          <Image src='/about3.png' alt='person1' width={320} height={50}/>
          <Image src='/about4.png' alt='person1' width={320} height={50}  />
      </div>

      <div className='flex gap-10 py-16 px-20'>
        <div className='w-1/2'>
          <h2 className='text-2xl font-bold pb-4'>Mission</h2>
          <p className='leading-8'>Our mission is to empower individuals and organizations with a seamless platform that connects opportunities with talent, fosters growth through innovation, and delivers solutions tailored to inspire success.</p>
        </div>

        <div>
          <h2 className='text-2xl font-bold'>Vision</h2>
          <ul className='list-disc pl-4 pt-4'>
            <li className='mb-2'>Lead the way in connecting talent and opportunities worldwide.</li>
            <li className='mb-2'>Inspire innovation and create transformative impact globally.</li>
            <li className='mb-2'>Build a future of collaboration, excellence, and growth for all.</li>
          </ul>
        </div>

      </div>
        <div className='flex px-32 pt-16 pb-32 justify-between'>
          <div className='flex flex-col items-center'>
            <h1 className='font-bold text-5xl font-poppins'>2M</h1>
            <p>2 million daily active users</p>
          </div>
    
          <div className='flex flex-col items-center'>
              <h1 className='font-bold text-5xl font-poppins'>8k</h1>
              <p>Over 8k open job positions</p>
          </div>
        
          <div className='flex flex-col items-center'>
            <h1 className='font-bold text-5xl font-poppins'>15M</h1>
            <p>Over 15 million stories shared</p>
          </div>
        
      </div>

      <div className='bg-black pt-20 px-8'>
        <h1 className='font-bold text-4xl pb-4'>Testimonials</h1>
        <p>Here’s what our users are saying about their experience with us!</p>
        <Animations />
      </div>
      
      <div className='flex gap-20 px-24 pt-40 pb-20'>
        <div className='bg-black flex gap-2 items-end justify-end'>
          <div className='flex flex-col pl-10 py-10 gap-5 w-fit'>
            <h1 className='text-3xl font-bold'>Post a featured job</h1>
            <p>Boost your reach—post a featured job today and attract top talent faster!</p>
            <div className=''>

              <Button text='Post a job'/>
            </div>
          </div>
          <Image src={'/postajob1.png'} width={150} height={100} alt='image'/>
        </div>

        <div className='bg-black flex gap-2 items-end justify-end'>
          <div className='flex flex-col pl-10 py-10 gap-5 w-fit'>
            <h1 className='text-3xl font-bold'>Post a free job</h1>
            <p>Start hiring now—post a job for free and connect with great candidates!</p>
            <div className=''>

              <Button text='Post a job'/>
            </div>
          </div>
          <Image src={'/postajob2.png'} width={150} height={50} alt='image'/>
        </div>
        </div>
    </div>
  )
}

export default About
