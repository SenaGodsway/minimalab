import LogoCarousel from "../logo_carousel"
// import RoundButton from "../../components/button"
import Works from "./works_section"
import Footer from "../../components/footer"
import Introducing from "../introucing/introducing"
import HeroSection from "./hero_section"
import GetQuotes from "../../components/reuseable/get_quotes"
import ImageComponent from "../../components/ImageCompnent"
import AllServices from "../services_page/all_services"
import Header from "../../components/header"
import Testimonials from "./testimonials"

import pipeline_img from '../../assets/images/pipe.png'
import Pipeline from "./pipeline"

const LandingPage = () => {
  return (
    <div className="relative">
    <Header/>

    <div className="w-full">
      <HeroSection/>
    </div>

    <div className="bg-white mt-24 py-16">
        <LogoCarousel/>
    </div>

  <Introducing/>
      
      <div className="mt-24">
        <div className="py-6 text-center">
          <h1 className="font-semibold text-[30px] text-center md:text-[48px]">Our Services</h1>
        </div>
      <AllServices/>
      </div>

      <div className="mt-24 p-1"></div>
      <div className="mx-auto mt-24 w-11/12 md:w-10/12" >
            {/* <h1 className="my-12 font-semibold text-[30px] text-center md:text-[48px]">Details</h1> */}
        {/* <div> */}
    <div className="flex md:flex-row flex-col gap-[24px] pl-3 md:pl-12 items-center h-screen">
      <div className="flex flex-col justify-center gap-10 pr-0 md:pr-8 w-full md:w-1/2">
      <h1 className="font-semibold text-[30px] text-left md:text-[40px]">Project Pipeline</h1>
       
       <div className="container">
       <p className="text-[16px] text-neutral-600 leading-[28px]">
          Transform ideas into reality with seamless, scalable solutions. Our tools streamline development, reduce friction, and accelerate delivery—so you can focus on what matters most: building the future. 
        </p>
       </div>
       <div>
        <Pipeline/>
       </div>
      </div>
      <div className="relative border-2 rounded-2xl w-full h-fit md:w-1/2 overflow-hidden">
        <video
        className="h-full"
        autoPlay
        loop
         src="https://cdn.dribbble.com/userupload/18414846/file/original-819b877a4c2923c0ace851053359c1b3.mp4"/>
    
      </div>
    </div>
         </div>

    <div className="p-6 md:p-16">
      <div className='py-8 text-center'>
          <h1 className='font-semibold text-[30px] text-neutral-900 md:text-[48px]'>Selected Works</h1>
        </div>
        <Works/>
    </div>
    <div className="container mx-auto">
      <Testimonials/>
    </div>
    <div className="mt-24">
    <Footer/>
    </div>
    <GetQuotes/>
    </div>
  )
}

export default LandingPage

