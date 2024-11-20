import Header from "../../components/new_header"
import Footer from "../../components/footer"
import Gallery from "../landing_page/gallery"
import GetQuotes from "../../components/reuseable/get_quotes"


export default function Works() {
  
  return (
    <>
    <Header/>
        <div className="my-12"> 
       <header className="space-y-4 text-center">
          {/* <div className="inline-block border-gray-900 px-3 py-1 border text-sm">
            LIFE-CHANGING UPDATE
          </div> */}
          <h1 className="font-bold text-5xl">Our Works</h1>
          <p className="mx-auto max-w-2xl text-xl">
            Stunning footage. Longer clips. Jaw-dropping moves.
            We've got a new model. And you've got the power to do all kinds of wild new things.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim odio natus id mollitia tempore fugit praesentium ut corrupti ipsa molestias!
          </p>
        </header>
       </div>
       <div className="mx-auto my-12 w-[90%]">
        <Gallery/>
       </div>
    <Footer/>
    <GetQuotes/>
    </>
  )
}