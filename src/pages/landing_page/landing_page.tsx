import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import LogoCarousel from "../logo_carousel"
// import RoundButton from "../../components/button"
import Works from "./works_section"
import Footer from "../../components/footer"
import Introducing from "../introucing/introducing"
import HeroSection from "./hero_section"
import GetQuotes from "../../components/reuseable/get_quotes"
import AllServices from "../services_page/all_services"
import Header from "../../components/header"
import PageContainer from "../../components/PageContainer"
import Testimonials from "./testimonials"
import BlogCard from "../blogs/BlogCard"
import { BlogService } from "../../expose_db"
import type { Blog } from "../blogs/types"

const LandingPage = () => {
  const [topBlogs, setTopBlogs] = useState<Blog[]>([])

  useEffect(() => {
    BlogService.getBlogs()
      .then((data) => setTopBlogs(data.slice(0, 3)))
      .catch((err) => {
        console.error("Failed to fetch blogs for landing page:", err)
        setTopBlogs([])
      })
  }, [])

  return (
    <div className="relative box-border">
    <Header/>
    <div className="w-full">
    <HeroSection/>
    </div>

<div className="w-full h-0 md:h-32"></div>

  <Introducing/>
  
  <PageContainer className="mt-32 md:mt-32">
        <LogoCarousel/>
    </PageContainer>

      <PageContainer className="mt-12">
        <div className="py-6 text-center">
          <h1 className="text-center text-[30px] font-semibold md:text-[48px]">Our Services</h1>
        </div>
      <AllServices/>
      </PageContainer>


    <PageContainer className="mt-24">
      <div className='py-8 text-center'>
          <h1 className='text-[30px] font-semibold text-neutral-900 md:text-[48px]'>Selected Works</h1>
        </div>
        <Works/>
    </PageContainer>
    <PageContainer className="py-12 md:py-14 my-12">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-[30px] font-semibold md:text-[48px]">Latest Blogs</h2>
        <Link
          to="/blogs"
          className="inline-flex items-center rounded-full border border-slate-200 px-3 py-1 text-sm font-medium text-neutral-700 hover:bg-slate-50"
        >
          View all
        </Link>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {topBlogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} variant="compact" />
        ))}
        {topBlogs.length === 0 ? (
          <div className="rounded border border-slate-200 p-4 text-sm text-neutral-600 sm:col-span-2 lg:col-span-3">
            No blog posts yet.
          </div>
        ) : null}
      </div>
    </PageContainer>
    <PageContainer className="mt-12">
      <Testimonials/>
    </PageContainer>
    <div className="mt-18">
    <Footer/>
    </div>
    <GetQuotes/>
    </div>
  )
}

export default LandingPage

