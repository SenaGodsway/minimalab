import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

import { PrimaryColor } from '../utils/constants'

const Footer = () => {
  return (
    <div className='mt-24 flex w-full flex-col items-center justify-center px-12 pt-16 md:px-24'>
    <h1 className="mb-6 text-4xl font-bold"> Lets get connected</h1>
      <div className='grid grid-cols-2 items-center justify-center gap-8 md:flex md:flex-row md:gap-12'>
        {/* Facebook */}
        <div className='flex items-center gap-3 border-2 px-4 py-2 rounded transition-colors hover:text-`{PrimaryColor}` cursor'>
          <FaFacebook className='text-2xl' />
          <div className='flex flex-col text-sm'>
            <span>Facebook</span>
            <span>@minimalabofficial</span>
          </div>
        </div>
        
        {/* Twitter/X */}
        <div className='flex items-center gap-3 rounded border-2 px-4 py-2 transition-colors hover:text-black'>
          <FaX className='text-2xl' />
          <div className='flex flex-col text-sm'>
            <span>X</span>
            <span>@minimalabofficial</span>
          </div>
        </div>
        
        {/* Instagram */}
        <div className='flex items-center gap-3 rounded border-2 px-4 py-2 transition-colors hover:text-pink-600'>
          <FaInstagram className='text-2xl' />
          <Link to="/" className='flex flex-col text-sm'>
            <span>Instagram</span>
            <span>@minimalabofficial</span>
          </Link>
        </div>
        
        {/* YouTube */}
        <div className='flex items-center gap-3 rounded border-2 px-4 py-2 transition-colors hover:text-red-600'>
          <FaYoutube className='text-2xl' />
          <div className='flex flex-col text-sm'>
            <span>YouTube</span>
            <span>MinimaLab</span>
          </div>
        </div>
        
        {/* LinkedIn */}
        <div className='flex items-center gap-3 rounded border-2 px-4 py-2 transition-colors hover:text-blue-700'>
          <FaLinkedin className='text-2xl' />
          <div className='flex flex-col text-sm'>
            <span>LinkedIn</span>
            <span>MinimaLab</span>
          </div>
        </div>
      </div>
      <div className='my-8 p-6 text-center text-sm text-gray-600 md:text-base'> 
        <p>All rights reserved MinimaLab @2025</p>
      </div>
    </div>
  )
}

export default Footer

