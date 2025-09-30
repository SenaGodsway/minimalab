import BlogCard from "./BlogCard";
import { Blog } from "./types";

const mockBlogs: Blog[] = [
  {
    id: 1,
    slug: "what-is-mcp-server",
    title: "What is MCP Server?",
    excerpt: "An introduction to MCP Servers and their role in modern cloud infrastructure. Discover how they work and why they are important.",
    imageUrl: "https://images.unsplash.com/photo-1522252234503-e356532cafd5?q=80&w=2070&auto=format&fit=crop",
    author: "Jane Doe",
    date: "October 26, 2023",
    content: "<p>Detailed content about MCP servers...</p>"
  },
  {
    id: 2,
    slug: "what-is-back-propagation",
    title: "What is Backpropagation?",
    excerpt: "A deep dive into the backpropagation algorithm, the cornerstone of training neural networks. Understand the math and intuition behind it.",
    imageUrl: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop",
    author: "John Smith",
    date: "October 22, 2023",
    content: "<p>Detailed content about backpropagation...</p>"
  },
  {
    id: 3,
    slug: "will-ai-take-your-job",
    title: "Will AI Take Your Job?",
    excerpt: "An analysis of the impact of AI on the job market. We explore which jobs are at risk and which new opportunities will emerge.",
    imageUrl: "https://images.unsplash.com/photo-1677756119517-756a188d2d94?q=80&w=2070&auto=format&fit=crop",
    author: "Emily White",
    date: "October 18, 2023",
    content: "<p>Detailed content about AI and jobs...</p>"
  },
  {
    id: 4,
    slug: "how-to-automate-your-workflow",
    title: "How to Automate Your Workflow",
    excerpt: "Practical tips and tools to automate repetitive tasks in your daily workflow, boosting productivity and freeing up your time.",
    imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop",
    author: "Chris Green",
    date: "October 15, 2023",
    content: "<p>Detailed content about workflow automation...</p>"
  }
];

export const getBlogBySlug = (slug: string) => {
  return mockBlogs.find(blog => blog.slug === slug);
}

const BlogList = () => {
  return (
    <div className="mx-auto w-11/12 py-12 md:w-10/12 lg:w-7/12">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        {mockBlogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
