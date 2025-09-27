import React from "react";
import { Calendar, Users, MapPin, Star } from "lucide-react";
import tour from "../assets/images/tour.jpg";

// Images
import thailand from "../assets/img/thailand.jpg";
import baku from "../assets/img/baku.jpg";
import mexico from "../assets/img/mexico.jpg";
import bali from "../assets/img/bali.jpg";
import vegas from "../assets/img/lasvegas.jpg";
import vietnam from "../assets/img/vietnam.jpg";
import srilanka from "../assets/img/srilanka.jpg";
import ctt from "../assets/trips/chopta1.jpg";
import msk from "../assets/trips/manali.jpg";
import jtv from "../assets/trips/jibhi1.jpg";
import vrinda from "@/assets/trips/vrindavan.jpg";
import taj from "../assets/trips/tajmahal.jpg";
import ship from "../assets/trips/cruise.jpg";
import manali from "../assets/trips/manali.jpg";
import kantal1 from "../assets/trips/kantal1.png";
import kantal2 from "../assets/trips/kantal2.png";
import yulla1 from "../assets/trips/yulla1.avif";
import yulla2 from "../assets/trips/yulla2.png";
import kedarnath1 from "../assets/trips/kedarnath1.jpg";
import kedarnath2 from "../assets/trips/kedarnath2.png";
import auli1 from "../assets/trips/auli1.jpg";
import auli2 from "../assets/trips/auli2.png";
import rishikesh1 from "../assets/trips/rishikesh1.png";
import rishikesh2 from "../assets/trips/rishikesh2.avif";
import kantalimg  from "../assets/images/kantal trek.jpg";
import kashmir from "../assets/images/kashmir tour.jpg";
import business from "../assets/images/business.webp";
import maldives from "../assets/images/business.webp";




export function TourPackages() {
  const categories = [
    "All",
    "Adventure",
    "Luxury",
    "Budget",
    "Honeymoon",
    "Religious",
    "Event",
  ];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const packages = [
    { id: 1, title: "Vrindavan One Day Tour", image: vrinda, duration: "1 Days", destination: "Vrindavan", price: 1999, rating: 4.9, category: "Religious"},
    { id: 2, title: "Maldives Paradise", image: tour, duration: "7 Days", people: "2", destination: "Maldives", price: 3299, rating: 4.9, category: "Luxury" },
    { id: 3, title: "Thailand Explorer", image: thailand, duration: "8 Days", people: "1-3", destination: "Bangkok, Phuket", price: 1499, rating: 4.7, category: "Budget" },
    { id: 4, title: "Baku, Azerbaijan", image: baku, duration: "8 Days", people: "1-3", destination: "Baku", price: 1499, rating: 4.7, category: "Budget" },
    { id: 5, title: "Mexico", image: mexico, duration: "8 Days", people: "1-3", destination: "Mexico City", price: 1799, rating: 4.7, category: "Luxury" },
    { id: 6, title: "Bali", image: bali, duration: "8 Days", people: "1-3", destination: "Bali", price: 1599, rating: 4.7, category: "Honeymoon" },
    { id: 7, title: "Las Vegas", image: vegas, duration: "8 Days", people: "1-3", destination: "Las Vegas", price: 1999, rating: 4.7, category: "Luxury" },
    { id: 8, title: "Vietnam", image: vietnam, duration: "8 Days", people: "1-3", destination: "Hanoi, Ho Chi Minh City", price: 1299, rating: 4.7, category: "Budget" },
    { id: 9, title: "Sri Lanka", image: srilanka, duration: "8 Days", people: "1-3", destination: "Colombo, Kandy", price: 1399, rating: 4.7, category: "Budget" },
    { id: 10, title: "Manali Sissu Kasol", image: msk, duration: "5 Days", people: "17-25",  price: 6100, rating: 4.6, category: "Adventure" },
    { id: 11, title: "Jibhi & Tirthan Valley", image: jtv, duration: "5 Days", people: "17-25",  price: 6100, rating: 4.5, category: "Adventure" },
    { id: 12, title: "Chopta - Tungnath Trek", image: ctt, duration: "5 Days", people: "2-4",  price: 6100, rating: 4.8, category: "Adventure" },
    { id: 13, title: "Yulla Kanda Trek",image: yulla1,duration: "10 Days",people: "2-4",destination: "Paris, Rome, Barcelona",price: 2499,rating: 4.8,category: "luxury",},
    { id: 14, title: "Agra One Day Tour", image: taj, duration: "12 Days", people: "1-5", destination: "Varanasi, Rishikesh", price: 999, rating: 4.6, category: "Religious" },
    { id: 16, title: "Budget Trip to Vietnam", image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80", duration: "10 Days", people: "1-3", destination: "Hanoi, Ho Chi Minh City", price: 899, rating: 4.5, category: "Budget" },
    { id: 17, title: "Luxury Cruise in the Caribbean", image: ship, duration: "14 Days", people: "2-6", destination: "Caribbean Islands", price: 4999, rating: 4.9, category: "Luxury" },
    { id: 18, title: "Kedarnath Yatra", image: kedarnath1 , duration: "10 Days", people: "1-4", destination: "Auckland, Queenstown", price: 2599, rating: 4.8, category: "Adventure" },
    { id: 19, title: "Rishikesh Rafting Trip", image: rishikesh1 ,duration: "12 Days", people: "1-3", destination: "Tokyo, Kyoto", price: 2999, rating: 4.7, category: "Luxury" },
    { id: 20, title: "Honeymoon in Maldives", image: maldives , duration: "7 Days", people: "2", destination: "Maldives", price: 3499, rating: 4.9, category: "Honeymoon" },
    { id: 21, title: "Auli Skiing Adventure", image: auli1 , duration: "8 Days", people: "1-4", destination: "Auli", price: 1999, rating: 4.6, category: "Adventure" },
    { id: 22, title: "Kantal Trek", image: kantal1 , duration: "6 Days", people: "1-4", destination: "Kantal", price: 1599, rating: 4.5, category: "Adventure" },
    { id: 23, title: "Kashmir Valley Tour", image: kashmir , duration: "7 Days", people: "1-3", destination: "Srinagar, Gulmarg", price: 1799, rating: 4.7, category: "Luxury" },
    { id: 24, title: "Business Class Europe Tour", image: business , duration: "10 Days", people: "1-2", destination: "London, Paris, Rome", price: 5999, rating: 4.9, category: "Business" },
    { id: 25, title: "BadriNath Yatra", image: kedarnath2 , duration: "10 Days", people: "1-4", destination: "Auckland, Queenstown", price: 2599, rating: 4.8, category: "Adventure" },
    
    

  ];

  return (
    <div className="relative w-full min-h-screen">
      {/* Hero Section */}
      <div
        className="relative h-[600px] bg-cover bg-center"
        style={{ backgroundImage: `url(${tour})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative min-h-[600px] w-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Tour Packages</h1>
            <p className="text-xl text-white">
              Discover our handpicked holiday packages
            </p>
          </div>
        </div>
      </div>
      

      {/* Category Filter */}
      <div className="py-8 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full transition ${
                  selectedCategory === category
                    ? "bg-[#2a9df4] text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Packages Grid with Flip Cards */}
      <div className="py-16">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {packages
              .filter(
                (pkg) =>
                  selectedCategory === "All" || pkg.category === selectedCategory
              )
              .map((pkg) => (
                <div
                  key={pkg.id}
                  className="group [perspective:1000px] w-full h-[350px]"
                >
                  <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    
                    {/* Front */}
                    <div className="absolute inset-0">
                      <img
                        src={pkg.image}
                        alt={pkg.title}
                        className="w-full h-full object-cover rounded-xl shadow-md"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 rounded-xl flex items-center justify-center">
                        <h3 className="text-2xl font-bold text-white">
                          {pkg.title}
                        </h3>
                      </div>
                    </div>

                    {/* Back */}
                    <div className="absolute inset-0 bg-white rounded-xl shadow-md p-6 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                      <h3 className="text-xl font-semibold mb-2">{pkg.title}</h3>
                      <div className="flex items-center text-gray-600 mb-2">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span className="text-sm">{pkg.duration}</span>
                      </div>
                      <div className="flex items-center text-gray-600 mb-2">
                        <Users className="h-4 w-4 mr-2" />
                        <span className="text-sm">{pkg.people} People</span>
                      </div>
                      <div className="flex items-center text-gray-600 mb-2">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span className="text-sm">{pkg.destination}</span>
                      </div>
                      <div className="flex items-center mb-4">
                        <Star className="h-4 w-4 text-yellow-400 mr-1" />
                        <span className="text-sm">{pkg.rating}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-[#2a9df4]">
                          ${pkg.price}
                        </span>
                        <button className="bg-[#2a9df4] text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
