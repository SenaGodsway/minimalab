import LinkButton from '../../components/button'
import Carousel from './carousel'

const HeroSection = () => {
  return (
     <div className="flex md:flex-row flex-col gap-[24px] pt-6 pl-0 md:pl-6"> 
    <div className="px-6 md:px-12 pt-16 sm:w-full md:w-[45%] text-black">
        <h1 className="mb-12 font-semibold text-[30px] text-black md:text-4xl leading-10">
          We Build Intelligent Digital Experiences — Engineering the Future with AI.
        </h1>
        <p className="my-6 text-[16px] text-neutral-500">AI-powered apps, seamless user experiences, and scalable cloud solutions—from concept to launch and beyond. </p>

        <span className='mt-16 w-full'>
            <LinkButton to='/about'>Get To know Us</LinkButton>
        </span>
        </div>
    <div className="mt-6 pl-[-4px] rounded-xl w-full md:w-[50%] h-[40vh] md:h-[70vh] overflow-hidden aspect-square object-cover">
      <Carousel/>
    </div>
</div>
  )
}

export default HeroSection