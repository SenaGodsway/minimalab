import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { Blog } from "./types";

interface BlogCardProps {
  blog: Blog;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  // Get a short snippet (first 100 chars)
  const snippet =
    blog.content.slice(0, 100) +
    (blog.content.length > 100 ? "..." : "");
  return (
    <Link
      to={`/blogs/${blog.id}`}
      className="group flex flex-row gap-12 rounded border-2 border-slate-400 p-2 transition-colors duration-200 hover:border-black"
    >
      <div className="overflow-hidden rounded-lg">
        {/* Fix: Only render img if image_url exists, and add alt fallback */}
        {blog.image_url ? (
          <img
            src={blog.image_url}
            alt="Blog"
            className="h-28 w-36 object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="h-28 w-36 bg-slate-200 flex items-center justify-center text-gray-400">
            No Image
          </div>
        )}
      </div>
      <div className="mt-4">
        {/* Fix: Use blog.title if available, fallback to "Blog Post" */}
        <h3 className="mt-2 text-xl font-semibold text-gray-800 group-hover:text-black">
          {blog.title || "Blog Post"}
        </h3>
        {/* Fix: Format createdAt or show fallback */}
        <p className="text-sm text-gray-500">{blog.createdAt || "Unknown date"}</p>
        <div className="prose prose-sm mt-2 text-gray-700">
          <ReactMarkdown>{snippet}</ReactMarkdown>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;