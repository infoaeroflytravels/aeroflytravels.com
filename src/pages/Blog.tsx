import React from "react";
import { Calendar, User } from "lucide-react";
import { Link } from "react-router-dom"; // Import Link at the top
import blog from "../assets/images/blog.jpg"; // Adjust the path as necessary

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
  ];

  return (
    <div className="relative w-full min-h-screen">
      {/* Hero Section */}
      <div 
        className="relative h-[300px] md:h-[500px] bg-cover bg-center flex items-center justify-center text-center"
        style={{ backgroundImage: `url(${blog})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative px-4">
          <h1 className="text-2xl md:text-4xl font-bold text-white">Travel Blog</h1>
          <p className="text-md md:text-xl text-white mt-2">
            Your trusted partner in creating unforgettable travel experiences
          </p>
        </div>
      </div>

      {/* Blog Posts */}
      <div className="py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-40 sm:h-48 relative">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                  <div className="absolute top-3 right-3 px-2 py-1 text-xs sm:text-sm rounded-full bg-blue-500 text-white">
                    {post.category}
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <h2 className="text-lg sm:text-xl font-semibold mb-2">{post.title}</h2>
                  <p className="text-gray-600 text-sm sm:text-base">{post.excerpt}</p>
                  <div className="flex items-center text-gray-500 text-xs sm:text-sm mt-3">
                    <User className="h-4 w-4 mr-1" />
                    <span className="text-blue-500">{post.author}</span>
                    <Calendar className="h-4 w-4 ml-4 mr-1" />
                    <span className="text-blue-500">{post.date}</span>
                  </div>
                  <Link to={`/blog/${post.id}`} className="block mt-4 text-blue-500 text-sm font-medium">
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-gray-100 py-10 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-gray-600 text-sm sm:text-base mb-6">
            Get the latest travel tips and updates delivered to your inbox.
          </p>
          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="px-6 py-2 rounded-md text-white text-sm sm:text-base"
              style={{ backgroundColor: "#2a9df4" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#2386d9")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#2a9df4")}
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
