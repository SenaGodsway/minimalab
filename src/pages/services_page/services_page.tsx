import Footer from "../../components/footer"
import Header from "../../components/header"
import GetQuotes from "../../components/reuseable/get_quotes"
import AllServices from "./all_services"
import Pipeline from "./pipeline"

const Services = () => {
  return (
    <>
        <Header/>
        <div className="my-12">
        <header className="space-y-4 text-center">
          <h1 className="text-5xl font-bold">Our Services</h1>
          <p className="mx-auto w-11/12 md:max-w-2xl md:text-xl text-xl">
            Next-gen intelligence. Smarter workflows. Boundary-pushing tech.We craft AI that unlocks wild new possibilities—so you can redefine what's possible. Our solutions don't just keep up; they stay ahead, learning and adapting to outpace the competition. From intuitive automation to predictive insights, we build tools that transform complexity into seamless action. Imagine workflows that evolve with you, apps that anticipate needs, and interfaces that feel like second nature. This isn&apos;t just technology—it&apos;s your unfair advantage. Ready to turn 'what if' into 'what's next'?
          </p>
        </header>
        </div>
        <AllServices/>

        <div className="mx-auto mt-24 w-11/12 md:w-10/12 pb-24" >
    <div className="flex flex-col items-end gap-[24px] pl-3 md:max-h-screen md:flex-row md:pl-12">
      <div className="flex w-full flex-col justify-center gap-10 pr-0 md:w-full md:pr-8">
      <h1 className="text-left text-[30px] font-semibold md:text-[40px]">Project Pipeline</h1>

       <div className="w-full md:w-1/2">
       <p className="text-[16px] leading-[28px] text-neutral-600">
          Transform ideas into reality with seamless, scalable solutions. Our tools streamline development, reduce friction, and accelerate delivery—so you can focus on what matters most: building the future.
        </p>
       </div>
       <div className="w-full">
        <Pipeline/>
       </div>
      </div>

      
    </div>
         </div>

        <Footer/>

    <GetQuotes/>

    </>
  )
}

export default Services