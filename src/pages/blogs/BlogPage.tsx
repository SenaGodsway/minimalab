import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import AppHeader from '../../components/header';
import Footer from '../../components/footer';
import { BlogService } from '../../expose_db';
import { Blog } from './types';
import ReactMarkdown from 'react-markdown';

const BlogPage = () => {
  const { id } = useParams<{ id: string }>();
  const [blog, setBlog] = useState<Blog | undefined>(undefined);

  useEffect(() => {
    if (id) {
      BlogService.getBlogById(id).then(setBlog);
    }
  }, [id]);

  if (!blog) {
    return (
      <>
        <AppHeader />
        <div className="flex min-h-screen flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-bold">Blog Post Not Found</h1>
          <p className="mt-4 text-lg text-gray-600">Sorry, we couldn't find the post you're looking for.</p>
          <Link to="/blogs" className="mt-6 rounded-md bg-black px-4 py-2 font-semibold text-white">
            Back to Blogs
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <AppHeader />
      <main className="mx-auto max-w-4xl px-4 py-12 pt-32 sm:px-6 lg:px-8">
        <article>
          <header className="mb-12 text-center">
            <p className="mb-2 text-gray-500">{blog.createdAt}</p>
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
              {blog.title || "Blog Post"}
            </h1>
          </header>
          {blog.image_url ? (
            <img src={blog.image_url} alt="Blog" className="mb-12 h-auto w-full rounded-lg object-cover shadow-lg" style={{maxHeight: '500px'}}/>
          ) : (
            <div className="mb-12 h-64 w-full rounded-lg bg-slate-200 flex items-center justify-center text-gray-400">
              No Image
            </div>
          )}
          <div className="prose prose-lg max-w-none">
            <ReactMarkdown>{blog.content}</ReactMarkdown>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default BlogPage;
