import { Link } from "react-router-dom";
import { Blog } from "./types";
import { ArrowUpRight } from "lucide-react";

interface BlogCardProps {
  blog: Blog;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  return (
    <Link to={`/blogs/${blog.slug}`} className="group block">
      <div className="overflow-hidden rounded-lg">
        <img
          src={blog.imageUrl}
          alt={blog.title}
          className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="mt-4">
        <p className="text-sm text-gray-500">{blog.date} &bull; {blog.author}</p>
        <h3 className="mt-2 text-xl font-semibold text-gray-800 group-hover:text-black">
          {blog.title}
        </h3>
        <p className="mt-2 text-gray-600">{blog.excerpt}</p>
        <div className="mt-4 inline-flex items-center font-medium text-black group-hover:underline">
          Read more <ArrowUpRight className="ml-1 h-4 w-4" />
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;