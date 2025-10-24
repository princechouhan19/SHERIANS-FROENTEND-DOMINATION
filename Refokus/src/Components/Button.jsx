import React from 'react'
import { IoIosReturnRight } from "react-icons/io";
 
function Button({title = "Get Started"}) {
  return (
    <div className='w-40 px-4 py-2 bg-zinc-100 text-black rounded-full flex justify-between items-center'>
        <span className='text-sm font-medium'>{title}</span>
        <IoIosReturnRight className='w-5 h-5' />
    </div>
  )
}

export default Button