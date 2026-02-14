import { FaLinkedin, FaYoutube } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import PageContainer from './PageContainer'

const Footer = () => {
  return (
    <PageContainer className='flex flex-col items-center justify-center pt-16'>
      <div className='mb-6 flex items-center justify-center gap-6'>
        <Link to="/" className='text-3xl'><FaLinkedin/></Link>
        <Link to="/" className='text-3xl'><FaX/></Link>
        <Link to="/" className='text-3xl'><FaYoutube/></Link>
      </div>

      <div className='mb-14 flex flex-col gap-4 text-center text-[18px]'>
        <div className='flex flex-col md:flex-row md:gap-6 justify-center items-center gap-2 mt-0'>
          <Link to='/careers' className=''>Careers</Link>
        </div>
        <p>All rights reserved. Sailnex &copy; {new Date().getFullYear()}</p>
      </div>
    </PageContainer>
  )
}

export default Footer
