import React from 'react'

interface ButtonProps { 
  text: string;
    
}

const Button = (props: ButtonProps) => {
  return (
    <button className='bg-button hover:bg-button-hover px-7 py-3 text-lg rounded-sm'>
        <p>{props.text}</p>
    </button>
  )
}

export default Button
