import Footer from "../../components/footer"
import Header from "../../components/new_header"
import GetQuotes from "../../components/reuseable/get_quotes"
import FAQSection from "../landing_page/faq"
import TeamSection from "../landing_page/team_section"


const About = () => {
  return (
    <>
      <Header/>
       <div className="my-24"> 
       <header className="space-y-4 text-center">
          {/* <div className="inline-block border-gray-900 px-3 py-1 border text-sm">
            LIFE-CHANGING UPDATE
          </div> */}
          <h1 className="font-bold text-5xl">About Us</h1>
          <p className="mx-auto max-w-2xl text-xl">
            Stunning footage. Longer clips. Jaw-dropping moves.
            We've got a new model. And you've got the power to do all kinds of wild new things.
          </p>
        </header>
       </div>

     <TeamSection/>
     <div className="p-6 md:p-12">
        <FAQSection/>
    </div>
      <Footer/> 

      <GetQuotes/>
    </>
  )
}

export default About