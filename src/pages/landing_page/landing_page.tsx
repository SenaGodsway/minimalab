// import Header from "../../components/header"
// import Header from "../../components/new_header"
import LogoCarousel from "../logo_carousel"

// import RoundButton from "../../components/button"

// import detail from '../../assets/images/thisisengineering--GoKFTYnRoQ-unsplash.jpg'
import TeamSection from "./team_section"
import Gallery from "./new_gallery"
import Footer from "../../components/footer"
import Introducing from "../introucing/introducing"
import HeroSection from "./hero_section"
import GetQuotes from "../../components/reuseable/get_quotes"
import ImageComponent from "../../components/ImageCompnent"
import AllServices from "../services_page/all_services"
import Header from "../../components/header"
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
      <div className="mx-auto mt-24 w-11/12 md:w-9/12" >
            {/* <h1 className="my-12 font-semibold text-[30px] text-center md:text-[48px]">Details</h1> */}
        {/* <div> */}
    <div className="flex md:flex-row flex-col gap-[24px] pl-3 md:pl-12 min-h-screen">
      <div className="flex flex-col justify-center gap-10 pr-0 md:pr-8 w-full md:w-1/2">
      <h1 className="font-semibold text-[30px] text-left md:text-[48px]">Snapshots</h1>
       
       <div className="container">
        <h2 className="font-semibold text-[20px] text-neutral-900">Software In Your Hand</h2>
       <p className="text-[16px] text-neutral-600 leading-[28px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et pulvinar
          augue. Phasellus suscipit arcu sed blandit tempor. Sed interdum est a lectus
          bibendum vestibulum quis in tortor.
        </p>
       </div>
       <div className="">
        <h2 className="font-semibold text-[20px] text-neutral-900">Do something Great</h2>
       <p className="text-[16px] text-neutral-600 leading-[28px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et pulvinar
          augue. Phasellus suscipit arcu sed blandit tempor. Sed interdum est a lectus
          bibendum vestibulum quis in tortor.
        </p>
       </div>
      </div>
      <div className="relative bg-gray-900 w-full md:w-1/2 overflow-hidden">
        <ImageComponent src='https://images.unsplash.com/photo-1551721434-8b94ddff0e6d?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="hello" isGray={true} className="w-full h-full"/>
    
      </div>
    </div>
         </div>

    <div className="mx-auto mt-24 md-w-3/5 w-full">
    <TeamSection/>
    </div>
    <div className="p-6 md:p-16">
      <div className='py-8 text-center'>
          <h1 className='font-semibold text-[30px] text-neutral-900 md:text-[48px]'>Selected Works</h1>
        </div>
        <Gallery/>
    </div>


    {/* <div className="bg-gray-50 py-12 md:py-14">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center">
          <h2 className="font-semibold text-[30px] text-neutral-900 md:text-[48px]">Testimonials</h2>
        </div>

        <div className="sm:gap-x-6 lg:gap-x-8 space-y-8 sm:space-y-0 sm:grid sm:grid-cols-3 mt-10 sm:mt-16">

            <div className="bg-white shadow px-6 py-10 rounded-lg text-center overflow-hidden">
            <Quote className="block mx-auto mb-6 text-8xl rotate-180" />

              <p className="text-[16px] text-neutral-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et pulvinar augue.
              </p>
              <div className="mt-6 text-center">
                <p className="font-medium text-neutral-500">Name - Title</p>
              </div>
            </div>

            <div className="bg-white shadow px-6 py-10 rounded-lg text-center overflow-hidden">
            <Quote className="block mx-auto mb-6 text-8xl rotate-180" />

              <p className="text-[16px] text-neutral-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et pulvinar augue.
              </p>
              <div className="mt-6 text-center">
                <p className="font-medium text-neutral-500">Name - Title</p>

              </div>
            </div>

            <div className="bg-white shadow px-6 py-10 rounded-lg text-center overflow-hidden">
            <Quote className="block mx-auto mb-6 text-8xl rotate-180" />

              <p className="text-[16px] text-neutral-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et pulvinar augue.
              </p>
              <div className="mt-6 text-center">
                <p className="font-medium text-neutral-500">Name - Title</p>

              </div>
            </div>

        </div>
      </div>
    </div> */}


 
    <Footer/>
    <GetQuotes/>
    </div>
  )
}

export default LandingPage

