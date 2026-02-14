import Header from "../../components/header"
import Footer from "../../components/footer"
import GetQuotes from "../../components/reuseable/get_quotes"
import WorkSection from "../landing_page/works_section"
import PageContainer from "../../components/PageContainer"

export default function Works() {
  
  return (
    <>
    <Header/>
        <PageContainer className="my-12"> 
       <header className="space-y-4 text-center">
          <h1 className="text-5xl font-bold">Our Works</h1>
          <p className="mx-auto max-w-2xl text-xl">
            Explore our diverse portfolio of projects that showcase our expertise and commitment to excellence. From innovative web applications to engaging mobile experiences, our works reflect our dedication to delivering high-quality solutions tailored to meet our clients' unique needs.
          </p>
        </header>
       </PageContainer>
       <PageContainer className="my-14">
      
        <WorkSection/>
       </PageContainer>
    <Footer/>
    <GetQuotes/>
    </>
  )
}