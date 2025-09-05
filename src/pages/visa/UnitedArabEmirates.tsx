import { FC, useState } from "react";
import { ShieldCheck, Clock } from "lucide-react";

const UAEVisa: FC = () => {
  const [activeDate, setActiveDate] = useState("10 Sep");

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative w-full max-w-5xl mx-auto">
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1504274066651-8d31a536b11a"
          alt="Dubai Palm Jumeirah"
          className="w-full rounded-3xl shadow-lg object-cover h-[480px]"
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-6">
          <h1 className="text-4xl font-bold drop-shadow-lg">
            Dubai Visa for Indians
          </h1>
          <div className="mt-3 flex items-center justify-center gap-2 bg-black/60 px-4 py-2 rounded-full text-sm font-medium shadow-md">
            <Clock className="w-4 h-4" />
            Visa guaranteed on{" "}
            <span className="font-semibold">10 Sep 2025 at 04:17 AM</span>
          </div>
          <button className="mt-6 px-8 py-3 bg-blue-600 hover:bg-blue-700 transition text-white font-semibold rounded-xl shadow-lg">
            Check Required Documents
          </button>
        </div>
      </div>

      {/* Date Tabs */}
      <div className="max-w-6xl mx-auto mt-6 flex justify-center gap-3">
        {["10 Sep", "8 Sep"].map((date) => (
          <button
            key={date}
            onClick={() => setActiveDate(date)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition ${
              activeDate === date
                ? "bg-blue-600 text-white shadow-md"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {date}
          </button>
        ))}
      </div>

      {/* Info + Price Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 p-6 mt-6">
        {/* Left Content */}
        <div className="col-span-2 space-y-6">
          {/* Government Auth Notice */}
          <div className="flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-3 rounded-xl text-sm font-medium shadow-sm">
            <ShieldCheck className="w-4 h-4" />
            Authorized by the Government of Dubai
          </div>

          {/* Trust Rating */}
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <p className="text-gray-700">
              <span className="text-2xl font-bold">4.7 ★</span> Loved and
              Trusted by{" "}
              <span className="font-semibold">1.25L+ Indians</span>
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Rated 5 stars by moms, newlyweds, and last-minute planners.
            </p>
          </div>
        </div>

        {/* Price Breakdown */}
        <div className="bg-white p-6 rounded-2xl shadow-md space-y-4">
          <h2 className="text-lg font-semibold">Price Breakdown</h2>
          <ul className="space-y-2 text-gray-700">
            <li>
              Government Fee: <strong>₹6,250</strong>
            </li>
            <li>
              Service Fee: <strong>₹500</strong>
            </li>
            <li className="font-bold text-lg">Total: ₹6,750</li>
          </ul>
          <button className="mt-4 w-full py-3 bg-blue-600 hover:bg-blue-700 transition text-white font-semibold rounded-xl shadow-lg">
            Start Application
          </button>
        </div>
      </div>
    </div>
  );
};

export default UAEVisa;
