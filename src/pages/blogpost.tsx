import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { posts } from "../pages/blogData"; // fixed import path

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const post = posts.find((p) => p.id === Number(id));

  // Update document title and meta description dynamically
  useEffect(() => {
    if (post) {
      document.title = `${post.title} | My Travel Blog`;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute("content", post.excerpt || post.title);
      }
    }
  }, [post]);

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto text-center py-20">
        <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
        <Link to="/blog" className="text-blue-500 hover:underline">
          ← Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      {/* Blog Title */}
      <h1 className="text-4xl font-bold text-center text-gray-900 leading-snug">
        {post.title}
      </h1>
      <p className="text-gray-600 text-center mt-3">
        By <span className="text-blue-600 font-medium">{post.author}</span> | {post.date}
      </p>

      {/* Blog Image */}
      {post.image && (
        <div className="mt-6">
          <img
            src={post.image}
            alt={post.title}
            className="w-full rounded-xl shadow-lg object-cover"
          />
        </div>
      )}

      {/* Blog Content */}
      <div className="prose prose-lg mt-8 max-w-none text-gray-800">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {post.content}
        </ReactMarkdown>
      </div>

      {/* Tags if available */}
      {post.tags && post.tags.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-2">
          {post.tags.map((tag, idx) => (
            <span
              key={idx}
              className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}

      {/* Back link */}
      <div className="mt-10 text-center">
        <Link
          to="/blog"
          className="inline-block text-blue-500 font-medium hover:underline"
        >
          ← Back to Blog
        </Link>
      </div>
    </div>
  );
};

export default BlogPost;
