import { Input } from 'postcss'
import React from 'react'
import Button from './ui/Button'

const Search = () => {
    return (
            
        <div className='flex gap-3 justify-center'>
            <div>
                <input type="text" placeholder="Search for a job" className='border-2 border-[#2E2E2E] bg-[#1E1E1E] py-3 px-3 w-[500px] rounded-sm'/>
                <p>*Find the position and location to work</p>
            </div> 
            <div>
                <Button text='Explore'/>  
            </div>
        
        </div>
  )
}

export default Search
