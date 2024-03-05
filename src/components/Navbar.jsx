import React from 'react'

function Navbar() {
  return (
    <div className='flex justify-around h-16 items-center font-HedvigLettersSans border-b-2 shadow-md'>
        <div className='w-24'> 
        <img src="https://console.zerodha.com/static/images/logo.svg" alt="" />
        </div>

        <div >
            <ul className='flex space-x-10 text-[12px] text-[#929191] *:cursor-pointer'>
                <li className='hover:text-blue-600 '>Dashboard</li>
                <li className='hover:text-blue-600 '>Portfolio</li>
                <li className='hover:text-blue-600 '>Reports</li>
                <li className='hover:text-blue-600 '>Funds</li>
                <li className='hover:text-blue-600 '>Account</li>
                
            </ul>
        </div>
    </div>
  )
}

export default Navbar