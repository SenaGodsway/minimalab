import { Link } from "react-router-dom";
import { Blog } from "./types";

interface BlogCardProps {
  blog: Blog;
  variant?: "default" | "compact";
}

const BlogCard: React.FC<BlogCardProps> = ({ blog, variant = "default" }) => {
  // Get a short snippet (first 100 chars)
  // Be defensive: Firestore docs may be missing fields even if TS types say otherwise.
  const previewText = String(blog.short_description ?? blog.content ?? "");
  const snippet =
    previewText.slice(0, 100) + (previewText.length > 100 ? "..." : "");

  if (variant === "compact") {
    return (
      <Link
        to={`/blogs/${blog.id}`}
        className="group overflow-hidden rounded-lg border-2 border-slate-200 bg-white px-6 py-6 text-left transition-colors duration-200 hover:border-black"
      >
        {blog.image_url ? (
          <img
            src={blog.image_url}
            alt="Blog"
            className="h-32 w-full rounded-md object-cover"
          />
        ) : (
          <div className="flex h-32 w-full items-center justify-center rounded-md bg-slate-100 text-sm text-gray-400">
            No Image
          </div>
        )}

        <h3 className="mt-4 text-lg font-semibold text-neutral-900 group-hover:text-black">
          {blog.title || "Blog Post"}
        </h3>
        <p className="mt-1 text-xs text-neutral-500">
          {blog.createdAt || "Unknown date"}
        </p>

        <p className="mt-3 overflow-hidden text-sm leading-6 text-neutral-600">
          {snippet}
        </p>
      </Link>
    );
  }

  return (
    <Link
      to={`/blogs/${blog.id}`}
      className="group flex flex-col items-start gap-4 rounded border-2 border-slate-400 p-3 transition-colors duration-200 hover:border-black sm:flex-row sm:items-center sm:gap-8 sm:p-4"
    >
      <div className="w-full flex-shrink-0 overflow-hidden rounded-lg sm:w-auto">
        {blog.image_url ? (
          <img
            src={blog.image_url}
            alt="Blog"
            className="h-44 w-full rounded-lg object-cover transition-transform duration-300 group-hover:scale-105 sm:h-28 sm:w-36"
          />
        ) : (
          <div className="flex h-44 w-full items-center justify-center rounded-lg bg-slate-200 text-gray-400 sm:h-28 sm:w-36">
            No Image
          </div>
        )}
      </div>
      <div className="w-full min-w-0">
        {/* Fix: Use blog.title if available, fallback to "Blog Post" */}
        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-black">
          {blog.title || "Blog Post"}
        </h3>
        {/* Fix: Format createdAt or show fallback */}
        <p className="text-sm text-gray-500">{blog.createdAt || "Unknown date"}</p>
        <div className="prose prose-sm mt-2 break-words text-gray-700">
          {/* <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeHighlight]}
          > */}
            {snippet}
          {/* </ReactMarkdown> */}
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;