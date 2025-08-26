import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='flex flex-col items-center justify-center px-2 pt-16 md:px-24'>
      <div className='mb-6 flex items-center justify-center gap-6'>
        <Link to="/" className='text-3xl'><FaFacebook/></Link>
        <Link to="/" className='text-3xl'><FaX/></Link>
        <Link to="/" className='text-3xl'><FaInstagram/></Link>
        <Link to="/" className='text-3xl'><FaYoutube/></Link>
        <Link to="/" className='text-3xl'><FaLinkedin/></Link>
      </div>

      <div className='mb-14 flex flex-col gap-4 p-6 text-center text-[18px]'>
        <p>cscodelabs@gmail.com</p>
        <p>All rights reserved. Sailnex &copy; {new Date().getFullYear()}</p>
      </div>
    </div>
  )
}

export default Footer
