import React, { useState } from "react";
import { Plane, Calendar, Users } from "lucide-react";
import flight from "@/assets/images/tg.jpg";

export function FlightBooking() {
  const [tripType, setTripType] = useState("round");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [departure, setDeparture] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [flights, setFlights] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!from || !to || !departure) {
      alert("Please fill in required fields");
      return;
    }

    setLoading(true);
    try {
      const params = new URLSearchParams({
        engine: "google_flights",
        api_key: "cee19321ee25722bb6f07bc95baadea193bf91d2958be1196bf21c3aaa983b35", // 🔑 Your API Key
        hl: "en",
        gl: "us",
        departure_id: from.toUpperCase(),
        arrival_id: to.toUpperCase(),
        outbound_date: departure,
        ...(tripType === "round" && returnDate
          ? { return_date: returnDate }
          : {}),
        currency: "USD",
      });

      const res = await fetch(`https://serpapi.com/search?${params}`);
      const data = await res.json();

      if (data.best_flights) {
        setFlights(data.best_flights);
      } else {
        setFlights([]);
        alert("No flights found");
      }
    } catch (err) {
      console.error(err);
      alert("Error fetching flights");
    }
    setLoading(false);
  };

  return (
    <div className="relative w-full min-h-screen">
      {/* Hero Section */}
      <div
        className="relative h-[300px] md:h-[500px] bg-cover bg-center"
        style={{ backgroundImage: `url(${flight})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative flex items-center justify-center text-center px-4 min-h-[300px] md:min-h-[500px]">
          <div>
            <h1 className="text-2xl md:text-4xl font-bold text-white mb-3 capitalize">
              Flight Booking
            </h1>
            <p className="text-lg md:text-xl text-white">
              Book your next flight with ease
            </p>
          </div>
        </div>
      </div>

      {/* Search Form */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-2">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 mb-6">
            <button
              className={`w-full sm:w-auto px-4 py-2 rounded-md ${
                tripType === "round"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100"
              }`}
              onClick={() => setTripType("round")}
            >
              Round Trip
            </button>
            <button
              className={`w-full sm:w-auto px-4 py-2 rounded-md ${
                tripType === "oneway"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100"
              }`}
              onClick={() => setTripType("oneway")}
            >
              One Way
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                From (IATA Code e.g. CDG)
              </label>
              <div className="relative">
                <Plane className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                  placeholder="Departure City Code"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                To (IATA Code e.g. JFK)
              </label>
              <div className="relative">
                <Plane className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                  placeholder="Arrival City Code"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Departure
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="date"
                  value={departure}
                  onChange={(e) => setDeparture(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            {tripType === "round" && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Return
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="date"
                    value={returnDate}
                    onChange={(e) => setReturnDate(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            )}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Passengers
              </label>
              <div className="relative">
                <Users className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <select className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>1 Adult</option>
                  <option>2 Adults</option>
                  <option>3 Adults</option>
                  <option>4 Adults</option>
                </select>
              </div>
            </div>
          </div>

          <button
            onClick={handleSearch}
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700"
          >
            {loading ? "Searching..." : "Search Flights"}
          </button>
        </div>
      </div>

      {/* Flight Results */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Flight Results
          </h2>

          {flights.length === 0 ? (
            <p className="text-center text-gray-500">No flights found</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {flights.map((flight, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md"
                >
                  <h3 className="text-lg font-semibold mb-2">
                    {flight.airline?.join(", ") || "Unknown Airline"}
                  </h3>
                  <p className="text-gray-600 mb-1">
                    Duration: {flight.duration}
                  </p>
                  <p className="text-gray-600 mb-1">
                    Price:{" "}
                    <span className="font-bold text-blue-600">
                      {flight.price}
                    </span>
                  </p>
                  <button className="mt-4 w-full bg-gray-100 text-blue-600 py-2 rounded-md hover:bg-gray-200">
                    View Deal
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
