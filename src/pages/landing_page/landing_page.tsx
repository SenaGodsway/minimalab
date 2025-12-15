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
import Testimonials from "./testimonials"
import Pipeline from "./pipeline"
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
    <div className="w-full ">
    <HeroSection/>
    </div>

<div className="w-full h-0 md:h-32"></div>

    <div className="mx-auto mt-32 bg-white w-full md:max-w-4xl md:w-full md:mt-32">
        <LogoCarousel/>
    </div>

  <Introducing/>

      <div className="mt-12">
        <div className="py-6 text-center">
          <h1 className="text-center text-[30px] font-semibold md:text-[48px]">Our Services</h1>
        </div>
      <AllServices/>
      </div>


      <div className="mx-auto mt-48 w-11/12 md:w-10/12" >
    <div className="flex flex-col items-end gap-[24px] pl-3 md:max-h-screen md:flex-row md:pl-12">
      <div className="flex w-full flex-col justify-center gap-10 pr-0 md:w-1/2 md:pr-8">
      <h1 className="text-left text-[30px] font-semibold md:text-[40px]">Project Pipeline</h1>

       <div className="">
       <p className="text-[16px] leading-[28px] text-neutral-600">
          Transform ideas into reality with seamless, scalable solutions. Our tools streamline development, reduce friction, and accelerate delivery—so you can focus on what matters most: building the future.
        </p>
       </div>
       <div>
        <Pipeline/>
       </div>
      </div>

      <div className="relative w-full overflow-hidden rounded-2xl sm:h-[40vh] md:h-full md:w-1/2">
        <video
        className="!h-full w-full"
        autoPlay
        loop
         src="https://cdn.dribbble.com/userupload/18414846/file/original-819b877a4c2923c0ace851053359c1b3.mp4"/>


      </div>
    </div>
         </div>

    <div className="mt-24 p-6 md:p-16">
      <div className='py-8 text-center'>
          <h1 className='text-[30px] font-semibold text-neutral-900 md:text-[48px]'>Selected Works</h1>
        </div>
        <Works/>
    </div>
    <div className="mx-auto w-11/12 py-12 md:w-9/12 md:py-14">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-2xl font-bold">Latest Blogs</h2>
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
    </div>
    <div className="container mx-auto mt-12">
      <Testimonials/>
    </div>
    <div className="mt-18">
    <Footer/>
    </div>
    <GetQuotes/>
    </div>
  )
}

export default LandingPage

