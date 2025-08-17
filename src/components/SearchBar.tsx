import React, { useState } from "react";
import { Search } from "lucide-react";

export function SearchBar() {
  const [searchType, setSearchType] = useState("flights");

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
      {/* Search Type Buttons */}
      <div className="flex space-x-2 sm:space-x-4 overflow-x-auto scrollbar-hide pb-2">
        {["flights", "visas", "packages"].map((type) => (
          <button
            key={type}
            className={`px-4 py-2 rounded-md whitespace-nowrap transition-colors duration-300 ${
              searchType === type ? "bg-blue-600 text-white" : "bg-gray-100"
            }`}
            onClick={() => setSearchType(type)}
          >
            {type === "flights" ? "Flights" : type === "visas" ? "Visas" : "Tour Packages"}
          </button>
        ))}
      </div>

      {/* Search Input & Button */}
      <div className="flex flex-col sm:flex-row items-center mt-4 space-y-3 sm:space-y-0 sm:space-x-4">
        <input
          type="text"
          placeholder={`Search for ${searchType}...`}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="w-full sm:w-auto bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 flex items-center justify-center">
          <Search className="w-5 h-5 mr-2" />
          Search
        </button>
      </div>
    </div>
  );
}
        