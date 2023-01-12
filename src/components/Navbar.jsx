import React, { useState } from 'react'
import { close, menu } from '../assets'

function Navbar() {

	const [click, setClick] = useState(false)

	return (
	  <nav className='h-[70px] w-full flex flex-row justify-between items-center px-5'>
		  
		  {/* Logo */}
		  <div>
			  <h2 className='font-bold text-2xl text-white'>{'<Portfolio />'}</h2>
		  </div>
  
		  {/* Desktop Menu */}
		  <div className='hidden sm:block'>
			  <ul className='list-none flex flex-row'>
				  <li className='pr-5 text-white text-lg font-bold'><a href="#home">Home</a> </li>
				  <li className='pr-5 text-white text-lg font-bold'><a href="#about">About</a></li>
				  <li className='pr-5 text-white text-lg font-bold'><a href="#skills">Skills</a></li>
				  <li className='pr-5 text-white text-lg font-bold'><a href="#projects">Projects</a></li>
				  <li className=' text-white text-lg font-bold'><a href="#contact">Contact</a></li>
			  </ul>
		  </div>
		  {/* Mobile Menu */}
      <div className='flex sm:hidden'>
        <img src={click ? close: menu } alt={click ? "close": "menu" } onClick={()=>setClick(!click)} />
        <div className={`top-[70px] right-[0px] ${click ? "absolute": "hidden"}`}>
          <ul className='flex flex-col bg-black bg-opacity-40 py-5 px-7'>
            <li className='pb-5 text-white text-lg font-bold'><a href="#home">Home</a> </li>
            <li className='pb-5 text-white text-lg font-bold'><a href="#about">About</a></li>
            <li className='pb-5 text-white text-lg font-bold'><a href="#skills">Skills</a></li>
            <li className='pb-5 text-white text-lg font-bold'><a href="#projects">Projects</a></li>
            <li className=' text-white text-lg font-bold'><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
	  </nav>
	)
}

export default Navbar