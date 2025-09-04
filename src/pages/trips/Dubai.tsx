import React, { useState, useEffect, useRef } from "react";
import IMG from "../../assets/trips/VRINDAVAN.jpg";
import agra from "../../assets/trips/tajmahal.jpg";
import {
  CheckCircle,
  XCircle,
  Utensils,
  Bus,
  UserCheck,
  Bed,
  Flame,
  Compass,
} from "lucide-react";

const VrindavanTourPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const scrollRef = useRef<HTMLDivElement>(null);

  const relatedTrips = [
    { title: "Agra Day Trip", image: agra, price: "₹3,000", link: "#" },
    { title: "Himachal Tour", image: "/images/himachal.jpg", price: "₹12,000", link: "#" },
    { title: "Kerala Backwaters", image: "/images/kerala.jpg", price: "₹18,000", link: "#" },
    { title: "Rajasthan Heritage", image: "/images/rajasthan.jpg", price: "₹15,000", link: "#" },
    { title: "Goa Beach Trip", image: "/images/goa.jpg", price: "₹10,000", link: "#" },
    { title: "Char Dham Yatra", image: "/images/chardham.jpg", price: "₹25,000", link: "#" },
  ];

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    let isPaused = false;
    let animationFrame: number;
    const speed = 0.5;

    const step = () => {
      if (!isPaused) {
        container.scrollLeft += speed;
        if (container.scrollLeft >= container.scrollWidth / 2) container.scrollLeft = 0;
      }
      animationFrame = requestAnimationFrame(step);
    };

    animationFrame = requestAnimationFrame(step);

    container.addEventListener("mouseenter", () => (isPaused = true));
    container.addEventListener("mouseleave", () => (isPaused = false));

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="bg-[#fff6e5ff] text-[#3b2f2f]">
      {/* ✅ Hero Section */}
      <section className="relative flex items-center justify-center py-10 px-4">
        <div className="max-w-5xl w-full">
          <div className="relative">
            <img
              src={IMG}
              alt="Vrindavan Tour"
              className="w-full h-[350px] md:h-[450px] object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-black/50 rounded-lg"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
              <h1 className="text-4xl font-bold">Vrindavan One Day Tour</h1>
              <p className="mt-3 text-lg">
                Experience the divine land of Lord Krishna in just one day
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Trip Info Box (like screenshot) */}
      <div className="max-w-7xl mx-auto p-7 border rounded-lg shadow-md bg-white">
        <h2 className="text-xl font-bold mb-4">Vrindavan Tour</h2>

        {/* Info Row */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-center mb-4">
          <div className="p-2 bg-gray-50 rounded-md">
            <p className="text-sm text-gray-600">Trip Duration</p>
            <p className="font-semibold">1 Day</p>
          </div>
          <div className="p-2 bg-gray-50 rounded-md">
            <p className="text-sm text-gray-600">Pickup & Drop</p>
            <p className="font-semibold">Delhi–Delhi</p>
          </div>
          <div className="p-2 bg-gray-50 rounded-md">
            <p className="text-sm text-gray-600">Pickup & Drop</p>
            <p className="font-semibold">Delhi–Delhi</p>
          </div>
          <div className="p-2 bg-gray-50 rounded-md">
            <p className="text-sm text-gray-600">Trip Category</p>
            <p className="font-semibold">Day Trips</p>
          </div>
        </div>

        {/* Icons Row */}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-700 border-t pt-4">
          <div className="flex items-center gap-2">
            <Bed className="w-5 h-5" /> Stay
          </div>
          <div className="flex items-center gap-2">
            <Flame className="w-5 h-5" /> Bonfire
          </div>
          <div className="flex items-center gap-2">
            <Bus className="w-5 h-5" /> Transfers
          </div>
          <div className="flex items-center gap-2">
            <Utensils className="w-5 h-5" /> Meals
          </div>
          <div className="flex items-center gap-2">
            <Compass className="w-5 h-5" /> Explorations
          </div>
        </div>
      </div>

      {/* ✅ Main Grid Section */}
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Side */}
        <div className="lg:col-span-2 space-y-6">
          {/* Tabs Section */}
          <div className="bg-[#fffaf0] border rounded-lg p-6 shadow-md">
            <div className="border-b flex space-x-6 text-sm font-medium overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300">
              {["overview", "itinerary", "batches", "things"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-2 px-3 whitespace-nowrap ${
                    activeTab === tab
                      ? "border-b-2 border-blue-600 text-blue-600 font-semibold"
                      : "hover:text-blue-600"
                  }`}
                >
                  {tab === "things"
                    ? "Things To Pack"
                    : tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="mt-6 max-h-[400px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
              {activeTab === "overview" && (
                <p>
                  Explore the holy land of Vrindavan in a single day. Visit
                  Banke Bihari Temple, ISKCON Temple, Prem Mandir, and more.
                  Includes guided assistance, comfortable travel & darshan.
                </p>
              )}
              {activeTab === "itinerary" && (
                <ul className="list-disc list-inside space-y-2">
                  <li>Morning pickup from Delhi</li>
                  <li>Travel to Vrindavan</li>
                  <li>Visit ISKCON Temple & Banke Bihari Temple</li>
                  <li>Lunch break</li>
                  <li>Evening visit to Prem Mandir</li>
                  <li>Return journey to Delhi</li>
                </ul>
              )}
              {activeTab === "batches" && (
                <p>Upcoming batches: Every Saturday & Sunday.</p>
              )}
              {activeTab === "things" && (
                <ul className="list-disc list-inside space-y-2">
                  <li>Comfortable footwear</li>
                  <li>Water bottle</li>
                  <li>Temple-appropriate clothes</li>
                  <li>Personal medicines</li>
                </ul>
              )}
            </div>
          </div>

          {/* Inclusions */}
          <div className="bg-green-100 border-l-8 border-green-600 rounded-lg p-6 shadow-md hover:shadow-lg transition">
            <h3 className="text-lg font-semibold mb-3 text-green-800 flex items-center gap-2">
              <CheckCircle className="w-5 h-5" /> Inclusions
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Bus className="text-green-700 w-4 h-4 mt-1" />
                <span>Transportation (Delhi–Vrindavan–Delhi)</span>
              </li>
              <li className="flex items-start gap-2">
                <UserCheck className="text-green-700 w-4 h-4 mt-1" />
                <span>Guided temple visits</span>
              </li>
              <li className="flex items-start gap-2">
                <Utensils className="text-green-700 w-4 h-4 mt-1" />
                <span>Lunch included</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-green-700 w-4 h-4 mt-1" />
                <span>All tolls and parking charges</span>
              </li>
            </ul>
          </div>

          {/* Exclusions */}
          <div className="bg-red-100 border-l-8 border-red-600 rounded-lg p-6 shadow-md hover:shadow-lg transition">
            <h3 className="text-lg font-semibold mb-3 text-red-800 flex items-center gap-2">
              <XCircle className="w-5 h-5" /> Exclusions
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <XCircle className="text-red-600 w-4 h-4 mt-1" />
                <span>Personal expenses</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="text-red-600 w-4 h-4 mt-1" />
                <span>Evening snacks/dinner</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="text-red-600 w-4 h-4 mt-1" />
                <span>Anything not mentioned in inclusions</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6 lg:sticky lg:top-24 self-start">
          {/* Pricing Card */}
          <div className="bg-[#fffaf0] border rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-semibold mb-3">Starting Price</h3>
            <p className="text-3xl font-bold">₹2,500</p>
            <p className="text-sm mb-4">Per Person on Group Sharing</p>
            <button className="bg-blue-600 text-white w-full py-3 rounded-lg font-medium hover:bg-blue-700 transition">
              Send Query Here
            </button>
          </div>

          {/* Price Summary */}
          <div className="bg-[#fffaf0] border rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-semibold mb-3">Price Summary</h3>
            <div className="flex justify-between items-center text-sm mb-2">
              <span>Group Occupancy</span>
              <span className="font-medium">₹2,500</span>
            </div>
            <button className="bg-blue-600 text-white w-full py-3 rounded-lg font-medium hover:bg-blue-700 transition mt-4">
              Book Now
            </button>
            <div className="flex justify-between gap-2 mt-4">
              <button className="flex-1 border border-gray-300 py-2 rounded-lg font-medium hover:bg-gray-100">
                WhatsApp
              </button>
              <button className="flex-1 border border-gray-300 py-2 rounded-lg font-medium hover:bg-gray-100">
                Get PDF Itinerary
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Related Trips */}
      <div className="max-w-7xl mx-auto px-4 mt-16">
        <h3 className="text-4xl font-bold mb-6 text-center">Related Trips</h3>
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto pb-4 no-scrollbar"
          style={{ scrollBehavior: "auto", whiteSpace: "nowrap" }}
        >
          {[...relatedTrips, ...relatedTrips].map((trip, index) => (
            <a
              key={index}
              href={trip.link}
              className="flex-shrink-0 w-64 bg-[#fffaf0] rounded-lg shadow-md hover:shadow-lg transition"
            >
              <img
                src={trip.image}
                alt={trip.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4 text-center">
                <h4 className="font-semibold text-lg">{trip.title}</h4>
                <p className="text-sm">{trip.price}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VrindavanTourPage;
