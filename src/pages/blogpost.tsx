import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { posts } from "../\\pages/blogData"; // Import posts from separate file

const BlogPost = () => {
  const { id } = useParams();
  const post = posts.find((p) => p.id === Number(id));

  if (!post) {
    return <h1 className="text-center text-2xl font-bold mt-10">Post Not Found</h1>;
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      {/* Blog Title */}
      <h1 className="text-3xl font-bold text-center">{post.title}</h1>
      <p className="text-gray-600 text-center mt-2">By {post.author} | {post.date}</p>

      {/* Blog Image */}
      {post.image && (
        <div className="mt-4">
          <img src={post.image} alt={post.title} className="w-full rounded-lg shadow-md" />
        </div>
      )}

      {/* Blog Content */}
      <div className="prose prose-lg mt-6">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {post.content}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default BlogPost;
