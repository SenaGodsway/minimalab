import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import AppHeader from '../../components/header';
import Footer from '../../components/footer';
import { BlogService } from '../../expose_db';
import { Blog } from './types';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github-dark.css';

const BlogPage = () => {
  const { id } = useParams<{ id: string }>();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      setLoading(true);
      // Backwards compatibility: if an older link appended a suffix (e.g. "--------remove"),
      // strip it so we still fetch by the Firestore document id.
      const normalizedId = id.split("--------remove")[0];
      console.log("Fetching blog with id:", normalizedId);
      BlogService.getBlogById(normalizedId).then((data) => {
        console.log("Fetched blog:", data);
        setBlog(data || null);
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return (
      <>
        <AppHeader />
        <div className="flex min-h-screen flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-bold">Loading Post...</h1>
        </div>
        <Footer />
      </>
    );
  }

  if (!blog && !loading) {

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
            <h2 className="mb-2 text-gray-500">Author: {blog.author}</h2>
          </header>
          {blog.image_url ? (
            <img src={blog.image_url} alt="Blog" className="mb-12 h-auto w-full rounded-lg object-cover shadow-lg" style={{maxHeight: '500px'}}/>
          ) : (
            <div className="mb-12 h-64 w-full rounded-lg bg-slate-200 flex items-center justify-center text-gray-400">
              No Image
            </div>
          )}
          <div className="prose prose-lg max-w-none prose-pre:bg-transparent prose-pre:text-black">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeHighlight]}
            >
              {blog.content}
            </ReactMarkdown>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default BlogPage;
