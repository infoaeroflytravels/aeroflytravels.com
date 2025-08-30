import React from "react";
import { Calendar, User } from "lucide-react";
import { Link } from "react-router-dom";
import blog from "../assets/images/blog.jpg"; // Adjust if needed

export function Blog() {
  const posts = [
    {
      id: 1,
      title: "10 Must-Visit Destinations in 2025",
      excerpt: "Discover the top travel destinations that should be on your bucket list this year...",
      image: "https://images.unsplash.com/photo-1488085061387-422e29b40080?ixlib=rb-4.0.3&auto=format&fit=crop&w=2020&q=80",
      author: "Sarah Johnson",
      date: "March 15, 2025",
      category: "Travel Tips",
    },
    {
      id: 2,
      title: "Complete Guide to Schengen Visa Application",
      excerpt: "Everything you need to know about applying for a Schengen visa...",
      image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2020&q=80",
      author: "Michael Chen",
      date: "March 12, 2025",
      category: "Visa Guide",
    },
    {
      id: 3,
      title: "Ultimate Guide to Travel Insurance for 2025",
      excerpt: "🛡️ Ultimate Guide to Travel Insurance for 2025",
      image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2020&q=80",
      author: "Michael Chen",
      date: "March 12, 2025",
      category: "Travel Tips",
    },
    {
      id: 3,
      title: "Ultimate Guide to Travel Insurance for 2025",
      excerpt: "🛡️ Ultimate Guide to Travel Insurance for 2025",
      image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2020&q=80",
      author: "Michael Chen",
      date: "March 12, 2025",
      category: "Travel Tips",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div 
        className="relative h-[260px] sm:h-[320px] md:h-[500px] bg-cover bg-center flex items-center justify-center text-center"
        style={{ backgroundImage: `url(${blog})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative px-4 max-w-3xl">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white leading-tight">
            Travel Blog
          </h1>
          <p className="text-sm sm:text-lg md:text-xl text-white mt-3">
            Your trusted partner in creating unforgettable travel experiences
          </p>
        </div>
      </div>

      {/* Blog Posts */}
      <div className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xl shadow hover:shadow-lg transition-shadow duration-300 flex flex-col overflow-hidden"
              >
                <div className="relative h-48 sm:h-56 md:h-64">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3 px-2 py-1 text-xs sm:text-sm rounded-full bg-blue-500 text-white shadow">
                    {post.category}
                  </div>
                </div>
                <div className="flex-1 p-4 sm:p-6 flex flex-col">
                  <h2 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900 line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-sm sm:text-base line-clamp-3 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-gray-500 text-xs sm:text-sm mt-4 gap-4">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span className="text-blue-600">{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span className="text-blue-600">{post.date}</span>
                    </div>
                  </div>
                  <Link
                    to={`/blog/${post.id}`}
                    className="mt-4 inline-block text-blue-600 text-sm font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-white py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mb-6">
            Get the latest travel tips and updates delivered straight to your inbox.
          </p>
          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-white text-sm sm:text-base transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
