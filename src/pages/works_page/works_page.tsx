import Header from "../../components/header"
import Footer from "../../components/footer"
import GetQuotes from "../../components/reuseable/get_quotes"
import WorkSection from "../landing_page/works_section"

export default function Works() {
  
  return (
    <>
    <Header/>
        <div className="my-12"> 
       <header className="space-y-4 text-center">
          <h1 className="text-5xl font-bold">Our Works</h1>
          <p className="mx-auto max-w-2xl text-xl">
            Stunning footage. Longer clips. Jaw-dropping moves.
            We've got a new model. And you've got the power to do all kinds of wild new things.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim odio natus id mollitia tempore fugit praesentium ut corrupti ipsa molestias!
          </p>
        </header>
       </div>
       <div className="mx-auto my-12 w-[90%]">
      
        <WorkSection/>
       </div>
    <Footer/>
    <GetQuotes/>
    </>
  )
}