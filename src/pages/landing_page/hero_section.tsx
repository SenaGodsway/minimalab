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
            The <br/>
            November Agency.</h1>
        <p className="my-6 text-[16px] text-neutral-500">We are a full service lead by a bunch of tech heads and we we build beautiful digital product, brands and experiences </p>

        <span className='mt-16 w-full'>
            <LinkButton to='/about'>Get To know Us</LinkButton>
        </span>
        </div>
    <div className="pl-[-4px] w-full md:w-[55%] h-[40vh] md:h-[80vh] overflow-hidden aspect-square object-cover">
      <Carousel/>
    </div>
</div>
  )
}

export default HeroSection