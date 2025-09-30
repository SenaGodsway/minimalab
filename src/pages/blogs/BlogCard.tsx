import { Link } from "react-router-dom";
import { Blog } from "./types";

interface BlogCardProps {
  blog: Blog;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  return (
    <Link to={`/blogs/${blog.slug}`} className="group flex gap-12 flex-row border-2 p-2 rounded border-slate-400 hover:border-black transition-colors duration-200">
      <div className="overflow-hidden rounded-lg">
        <img
          src={blog.imageUrl}
          alt={blog.title}
          className="h-28 w-36 object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="mt-4">
        
        <h3 className="mt-2 text-xl font-semibold text-gray-800 group-hover:text-black">
          {blog.title}
        </h3>
        <p className="text-sm text-gray-500">{blog.date} &bull; {blog.author}</p>
      </div>
    </Link>
  );
};

export default BlogCard;