import Footer from "../../components/footer";
import AppHeader from "../../components/header";
import GetQuotes from "../../components/reuseable/get_quotes";
import BlogList from "./BlogList";
import PageContainer from "../../components/PageContainer";

const Blogs =()=>{
    return(
        <>
        <AppHeader />
         <PageContainer className="mb-10 mt-10 text-center">
          <h1 className="mb-4 text-4xl font-bold">Our Blogs</h1>
          <p className="mb-6 text-lg text-gray-600">
            Stay updated with the latest insights, trends, and stories from our team. Explore our collection of blogs covering a wide range of topics designed to inform, inspire, and engage our readers.
          </p>
        </PageContainer>

        <BlogList/>


        <Footer/>
        <GetQuotes />
        </>
    )
}

export default Blogs;