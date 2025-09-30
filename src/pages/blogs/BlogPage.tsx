import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import AppHeader from '../../components/header';
import Footer from '../../components/footer';
import { getBlogBySlug } from './BlogList';
import { Blog } from './types';

const BlogPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [blog, setBlog] = useState<Blog | undefined>(undefined);

  useEffect(() => {
    if (slug) {
      const foundBlog = getBlogBySlug(slug);
      setBlog(foundBlog);
    }
  }, [slug]);

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
            <p className="mb-2 text-gray-500">{blog.date} &bull; {blog.author}</p>
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">{blog.title}</h1>
          </header>
          <img src={blog.imageUrl} alt={blog.title} className="mb-12 h-auto w-full rounded-lg object-cover shadow-lg" style={{maxHeight: '500px'}}/>
          <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: blog.content }} />
        </article>
      </main>
      <Footer />
    </>
  );
};

export default BlogPage;
