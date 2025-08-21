import React from 'react'
import logo from '../assets/amlogo.png'
import { FaLinkedinIn, FaGithub, FaTwitterSquare, FaInstagram } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
      <div className='flex flex-shrink-0 items-center'>
        <img className='mx-3 w-10' src={logo} width={50} height={50} alt="logo" />
      </div>

      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <a 
          href="https://www.linkedin.com/in/aman-malik-79bb90256?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition-colors"
        >
          <FaLinkedinIn />
        </a>

        <a 
          href="https://github.com/Aman017" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-gray-700 transition-colors"
        >
          <FaGithub />
        </a>

        <a 
          href="https://x.com/Aman_Malik_00" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-sky-500 transition-colors"
        >
          <FaTwitterSquare />
        </a>

        <a 
          href="https://www.instagram.com/amanmalik002/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-pink-500 transition-colors"
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  )
}

export default Navbar
