// src/pages/PopularDestinations.tsx
import React from "react";

const destinations = [
  {
    title: "United Arab Emirates",
    image: "https://media.atlys.com/image/upload/f_auto,w_800/country_thumbnails/AE",
    visaCount: "53K",
    date: "27 Aug, 07:21 AM",
  },
  {
    title: "Thailand",
    image: "https://media.atlys.com/image/upload/f_auto,w_800/country_thumbnails/TH",
    visaCount: "32K",
    date: "23 Aug, 02:05 PM",
  },
  {
    title: "Switzerland",
    image: "https://media.atlys.com/image/upload/f_auto,w_800/country_thumbnails/CH",
    visaCount: "30K",
    date: "22 Sep, 12:00 AM",
  },
  {
    title: "United States",
    image: "https://media.atlys.com/image/upload/f_auto,w_800/country_thumbnails/US",
    visaCount: "28K",
    date: "10 Sep, 11:00 AM",
  },
  {
    title: "Singapore",
    image: "https://media.atlys.com/image/upload/f_auto,w_800/country_thumbnails/SG",
    visaCount: "24K",
    date: "15 Sep, 08:40 AM",
  },
  {
    title: "United Kingdom",
    image: "https://media.atlys.com/image/upload/f_auto,w_800/country_thumbnails/GB",
    visaCount: "22K",
    date: "11 Sep, 09:00 AM",
  },
  {
    title: "Canada",
    image: "https://media.atlys.com/image/upload/f_auto,w_800/country_thumbnails/CA",
    visaCount: "21K",
    date: "13 Sep, 01:00 PM",
  },
  {
    title: "Australia",
    image: "https://media.atlys.com/image/upload/f_auto,w_800/country_thumbnails/AU",
    visaCount: "19K",
    date: "20 Sep, 06:30 AM",
  },
  {
    title: "Malaysia",
    image: "https://media.atlys.com/image/upload/f_auto,w_800/country_thumbnails/MY",
    visaCount: "18K",
    date: "19 Sep, 03:00 PM",
  },
  {
    title: "Japan",
    image: "https://media.atlys.com/image/upload/f_auto,w_800/country_thumbnails/JP",
    visaCount: "17K",
    date: "05 Sep, 02:15 PM",
  },
  {
    title: "Germany",
    image: "https://media.atlys.com/image/upload/f_auto,w_800/country_thumbnails/DE",
    visaCount: "16K",
    date: "08 Sep, 04:00 PM",
  },
  {
    title: "France",
    image: "https://media.atlys.com/image/upload/f_auto,w_800/country_thumbnails/FR",
    visaCount: "15K",
    date: "12 Sep, 06:00 AM",
  },
  {
    title: "Italy",
    image: "https://media.atlys.com/image/upload/f_auto,w_800/country_thumbnails/IT",
    visaCount: "14K",
    date: "18 Sep, 10:00 AM",
  },
  {
    title: "Turkey",
    image: "https://media.atlys.com/image/upload/f_auto,w_800/country_thumbnails/TR",
    visaCount: "13K",
    date: "09 Sep, 08:00 PM",
  },
  {
    title: "Saudi Arabia",
    image: "https://media.atlys.com/image/upload/f_auto,w_800/country_thumbnails/SA",
    visaCount: "12K",
    date: "25 Aug, 07:30 PM",
  },
  {
    title: "Qatar",
    image: "https://media.atlys.com/image/upload/f_auto,w_800/country_thumbnails/QA",
    visaCount: "11K",
    date: "14 Sep, 11:11 AM",
  },
  {
    title: "Oman",
    image: "https://media.atlys.com/image/upload/f_auto,w_800/country_thumbnails/OM",
    visaCount: "10K",
    date: "07 Sep, 03:45 PM",
  },
  {
    title: "South Korea",
    image: "https://media.atlys.com/image/upload/f_auto,w_800/country_thumbnails/KR",
    visaCount: "9K",
    date: "03 Sep, 05:00 PM",
  },
  {
    title: "Netherlands",
    image: "https://media.atlys.com/image/upload/f_auto,w_800/country_thumbnails/NL",
    visaCount: "8K",
    date: "01 Sep, 09:15 AM",
  },
  {
    title: "South Africa",
    image: "https://media.atlys.com/image/upload/f_auto,w_800/country_thumbnails/ZA",
    visaCount: "7K",
    date: "17 Sep, 01:30 PM",
  },
];

const PopularDestinations: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100 flex flex-col items-center justify-center py-10">
      <div
        className="w-full max-w-7xl border border-gray-300 rounded-xl py-10 px-4 sm:px-6 md:px-10 lg:px-16 mx-auto"
        style={{ backgroundColor: "#eef5f5ff" }}
      >
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">
          Popular Destinations
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((trip, index) => (
            <a
              key={index}
              href="#"
              className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden cursor-pointer aspect-square flex flex-col"
            >
              {/* Image Section */}
              <div className="relative w-full h-2/3">
                <img
                  src={trip.image}
                  alt={trip.title}
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-2 left-2 bg-purple-600 text-white text-xs font-medium px-2 py-1 rounded">
                  {trip.visaCount}+ Visas on Time
                </span>
              </div>

              {/* Content Section */}
              <div className="flex-1 flex flex-col justify-center items-center text-center p-3">
                <h3 className="text-lg font-semibold">{trip.title}</h3>
                <p className="text-sm text-gray-500">
                  Get on{" "}
                  <span className="text-blue-600 font-medium">{trip.date}</span>
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
export default PopularDestinations;
