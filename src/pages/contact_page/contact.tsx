import Header from '../../components/header'
import Footer from '../../components/footer'

import { CiChat1, CiLocationOn, CiPhone } from 'react-icons/ci'
import { FaFacebook, FaInstagram, FaTelegram, FaTwitter, FaYoutube } from 'react-icons/fa'
import ContactForm from './contact_form'

const Contact = () => {
  return (
  <>
  <Header/>
    <div className='flex md:flex-row flex-col-reverse justify-between gap-12 mx-auto py-12 w-full md:w-[95%]'>
        <div className='flex flex-col justify-between gap-6 mx-auto w-[96%] md:w-[35%]'>
            <div className='flex flex-col gap-6'>
            <div className='flex gap-5'>
                <span className='border-[1px] border-gray-200 p-3 rounded w-[40px] h-[40px]'><CiChat1/> </span>
                <div className='text-[16px] container'>
                    <h3 className='font-semibold text-neutral-900'>Talk to us</h3>
                    <p className='mb-3 text-neutral-600'>Our friendly team is ready to help</p>
                    <p className='font-semibold text-neutral-900'>hello@mypagic.com</p>
                </div>
            </div>

            <div className='flex gap-5'>
                <span className='border-[1px] border-gray-200 p-3 rounded w-[40px] h-[40px]'><CiPhone/> </span>
                <div className='text-[16px] container'>
                    <h3 className='font-semibold text-neutral-900'>Call us</h3>
                    <p className='mb-3 text-neutral-600'>Our friendly team is ready to help</p>
                    <p className='font-semibold text-neutral-900'>hello@mypagic.com</p>
                </div>
            </div>  

            <div className='flex gap-5'>
                <span className='border-[1px] border-gray-200 p-3 rounded w-[40px] h-[40px]'><CiLocationOn/> </span>
                <div className='text-[16px] container'>
                    <h3 className='font-semibold text-neutral-900'>Visit us</h3>
                    <p className='mb-3 text-neutral-600'>Come say hello at our office</p>
                    <p className='font-semibold text-neutral-900'>125 Trinity Street</p>
                    <p className='font-semibold text-neutral-900'>Accra Ghana</p>
                    <p className='font-semibold text-neutral-900'>GE-123-897-22</p>
                </div>
            </div>
            </div>


            <div className='flex gap-6'>
                <span><FaFacebook/> </span>
                <span><FaInstagram/> </span>
                <span><FaTwitter/> </span>
                <span><FaYoutube/> </span>
                <span><FaTelegram/> </span>
            </div>
            

            
        </div>
        <div className='mx-auto w-[96%] md:w-[65%] container'>
            <ContactForm/>
        </div>
    </div>
    <Footer/>
  </>
  )
}

export default Contact