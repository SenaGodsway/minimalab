// import hero from '../../assets/images/jason-goodman-bzqU01v-G54-unsplash.jpg'
import LinkButton from '../../components/button'
// import ImageCarouselDemo from './ImageDemo';
// import ImageComponent from '../../components/ImageCompnent'
import Carousel from './carousel'
// import MultiBoxCarousel from './MultiBoxCarousel'

// import { motion } from 'framer-motion';


//   const containerVariants = {
//     hidden: {},
//     visible: {
//       transition: {
//         staggerChildren: 0.3
//       }
//     }
//   };

//   const wordVariants = {
//     hidden: { 
//       y: 50,
//       opacity: 0 
//     },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.8,
//         ease: [0.6, 0.05, -0.01, 0.9]
//       }
//     }
//   };

//   const descriptionVariants = {
//     hidden: { 
//       opacity: 0,
//       y: 20
//     },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         delay: 1,
//         duration: 0.8,
//         ease: "easeOut"
//       }
//     }
//   };

const HeroSection = () => {
  return (
     <div className="flex md:flex-row flex-col gap-[24px] pt-6 pl-0 md:pl-6"> 
    <div className="px-6 md:px-12 pt-16 sm:w-full md:w-[45%] text-black">
        <h1 className="mb-12 font-semibold text-[30px] text-black md:text-7xl leading-10">
            MinimaLab <br/>
            Agency
            </h1>
        <p className="my-6 text-[16px] text-neutral-500">We bring your ideas to life with tailored solutions designed to elevate your online presence. From stunning website designs and robust development to in-depth UX research, content creation, and SEO optimization, we’ve got you covered.</p>
        <span className='mt-16 w-full'>
            <LinkButton to='/about'>Get To know Us</LinkButton>
        </span>
        </div>
    <div className="mx-auto mt-6 rounded-xl w-11/12 md:w-[50%] h-[50vh] md:h-[70vh] overflow-hidden">
      <Carousel/>
    </div>
</div>
  )
}

export default HeroSection