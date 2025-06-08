import Footer from "../../components/footer"
import Header from "../../components/header"
import GetQuotes from "../../components/reuseable/get_quotes"
import AllServices from "./all_services"

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
        <Footer/>
        
    <GetQuotes/>
      
    </>
  )
}

export default Services