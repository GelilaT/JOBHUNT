import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-10'>
        <div className='flex items-center '>
            <Image src={'/logo.png'} alt="logo" width={100} height={100} />
            <h1 className='font-semibold text-3xl'>Jobhunt</h1>
        </div>
          <div>
              <ul className='flex gap-16 items-center text-xl'>
                  <Link href="/">
                      
                    <li>Home</li>
                  </Link>
                  
                  <li>Find a Job</li>
                  <li>Cart</li>
                  <li className='border border-white py-2 px-3'>Post a Job</li>
              </ul>
        </div>
    </div>
  )
}

export default Navbar
