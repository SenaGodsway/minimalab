import LogoCarousel from "../logo_carousel"
// import RoundButton from "../../components/button"
import Works from "./works_section"
import Footer from "../../components/footer"
import Introducing from "../introucing/introducing"
import HeroSection from "./hero_section"
import GetQuotes from "../../components/reuseable/get_quotes"
import AllServices from "../services_page/all_services"
import Header from "../../components/header"
import Testimonials from "./testimonials"
import Pipeline from "./pipeline"

const LandingPage = () => {
  return (
    <div className="relative">
    <Header/>
    <div className="w-full">
    <HeroSection/>
    </div>

    <div className="mt-4 bg-white py-16">
        <LogoCarousel/>
    </div>

  <Introducing/>

      <div className="mt-12">
        <div className="py-6 text-center">
          <h1 className="text-center text-[30px] font-semibold md:text-[48px]">Our Services</h1>
        </div>
      <AllServices/>
      </div>


      <div className="mx-auto mt-48 w-11/12 md:w-10/12" >
    <div className="flex md:max-h-screen flex-col items-end gap-[24px] pl-3 md:flex-row md:pl-12">
      <div className="flex w-full flex-col justify-center gap-10 pr-0 md:w-1/2 md:pr-8">
      <h1 className="text-left text-[30px] font-semibold md:text-[40px]">Project Pipeline</h1>

       <div className="">
       <p className="text-[16px] leading-[28px] text-neutral-600">
          Transform ideas into reality with seamless, scalable solutions. Our tools streamline development, reduce friction, and accelerate delivery—so you can focus on what matters most: building the future.
        </p>
       </div>
       <div>
        <Pipeline/>
       </div>
      </div>

      <div className="relative sm:h-[40vh] md:h-full w-full overflow-hidden rounded-2xl md:w-1/2">
        <video
        className="!h-full w-full"
        autoPlay
        loop
         src="https://cdn.dribbble.com/userupload/18414846/file/original-819b877a4c2923c0ace851053359c1b3.mp4"/>


      </div>
    </div>
         </div>

    <div className="mt-24 p-6 md:p-16">
      <div className='py-8 text-center'>
          <h1 className='text-[30px] font-semibold text-neutral-900 md:text-[48px]'>Selected Works</h1>
        </div>
        <Works/>
    </div>
    <div className="container mx-auto mt-12">
      <Testimonials/>
    </div>
    <div className="mt-18">
    <Footer/>
    </div>
    <GetQuotes/>
    </div>
  )
}

export default LandingPage

