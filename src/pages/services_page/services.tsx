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
          <h1 className="font-bold text-5xl">Our Services</h1>
          <p className="mx-auto max-w-2xl text-xl">
            Stunning footage. Longer clips. Jaw-dropping moves.
            We've got a new model. And you've got the power to do all kinds of wild new things.
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