
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'
const Footer = () => {
  return (
    <div className='flex flex-col justify-center items-center px-12 md:px-24 pt-16'>
      <div className='flex justify-center items-center gap-6'>
        <span className='text-3xl'><FaFacebook/></span>
        <span className='text-3xl'><FaX/></span>
        <span className='text-3xl'><FaInstagram/></span>
        <span className='text-3xl'><FaYoutube/></span>
        <span className='text-3xl'><FaLinkedin/></span>
      </div>

      <div className='p-6 text-[18px] text-center'> 
        <p>All rights reseved MinimaLab @2025</p>
      </div>
    </div>
  )
}

export default Footer

