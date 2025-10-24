import Footer from "../../components/footer";
import AppHeader from "../../components/header";
import GetQuotes from "../../components/reuseable/get_quotes";
import BlogList from "./BlogList";

const Blogs =()=>{
    return(
        <>
        <AppHeader />
         <div className="mx-auto mb-10 mt-32 w-full px-4 text-center md:w-7/12">
          <h1 className="mb-4 text-4xl font-bold">Our Blogs</h1>
          <p className="mb-6 text-lg text-gray-600">
            We&apos;re always looking for talented individuals to join our team.
            If you're passionate about what you do and want to make an impact, we want to hear from you!
          </p>
        </div>

        <BlogList/>


        <Footer/>
        <GetQuotes />
        </>
    )
}

export default Blogs;