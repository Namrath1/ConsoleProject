import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex w-screen z-10 fixed h-16 items-center bg-transparent backdrop-blur-sm justify-between font-HedvigLettersSans px-10 shadow-md'>
        <div className='w-24 '> 
        <span className='font-bold text-2xl text-white'>Trader.</span>
        <span className='font-bold text-xl italic text-blue-600'>console</span>
        </div>

        <div >
            <ul className='flex space-x-10 text-[12px] font-SpaceGrotesk text-[#929191] *:cursor-pointer '>
                <Link to="/"><li className='hover:text-blue-600  text-lg'>Home</li></Link>
                <Link to="/report"> <li className='hover:text-blue-600 text-lg'>Annual Report</li></Link>
                
                
            </ul>
        </div>
    </div>
  )
}

export default Navbar