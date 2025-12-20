import { useState, useEffect } from "react";
import BlogCard from "./BlogCard";
import { Blog } from "./types";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { BlogService } from "../../expose_db";

const BlogList = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  useEffect(() => {
    BlogService.getBlogs().then((data) => {
      console.log("Fetched blogs:", data);
      setBlogs(data);
    });
  }, []);

  // Pagination logic
  const totalPages = Math.ceil(blogs.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogs.slice(indexOfFirstPost, indexOfLastPost);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="mx-auto w-11/12 py-12 md:w-10/12 lg:w-7/12">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Latest Blogs</h1>
        <div className="flex items-center gap-3">
          <button onClick={prevPage} disabled={currentPage === 1} className="rounded-full border border-slate-100 p-3 disabled:cursor-not-allowed disabled:opacity-50"><ChevronLeft/></button>
          <button onClick={nextPage} disabled={currentPage === totalPages} className="rounded-full border border-slate-100 p-3 disabled:cursor-not-allowed disabled:opacity-50"><ChevronRight/></button>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        {currentPosts.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
