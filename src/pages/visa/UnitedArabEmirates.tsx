import React, { useState, useEffect } from "react";
import { CheckCircle, Calendar } from "lucide-react";
import dubai from "../../assets/visa/AE.webm";

const DubaiVisaPage: React.FC = () => {
  const [selectedProfile, setSelectedProfile] = useState("Employed");
  const [selectedDate, setSelectedDate] = useState("10 September");
  const [country, setCountry] = useState<string>("Your Country"); // fallback

  // 🌍 Fetch user location with timeout + fallback
  useEffect(() => {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 5000); // 5s timeout

    fetch("https://ipapi.co/json/", { signal: controller.signal })
      .then((res) => res.json())
      .then((data) => {
        console.log("🌍 Location API response:", data);
        if (data && data.country_name) {
          setCountry(data.country_name);
        } else {
          setCountry("Your Country");
        }
      })
      .catch((err) => {
        console.log("⚠️ Could not fetch location, fallback used.", err);
        setCountry("Your Country");
      });

    return () => clearTimeout(timeout);
  }, []);

  const profiles = ["Employed", "Business Owner", "Student", "Freelancer", "Other"];
  const requiredDocs: Record<string, string[]> = {
    Employed: ["Passport", "Bank Statements", "Photograph", "Return Ticket"],
    "Business Owner": ["Passport", "Business License", "Bank Statements", "Photograph"],
    Student: ["Passport", "School/College ID", "Bank Statements", "Photograph"],
    Freelancer: ["Passport", "Portfolio/Proof of Work", "Bank Statements", "Photograph"],
    Other: ["Passport", "Proof of Funds", "Photograph", "Return Ticket"],
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Page Wrapper with padding for navbar */}
      <div className="pt-24">
  {/* Hero Section with video */}
   <section className="relative max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-lg">
    <video
      autoPlay
      loop
      muted
      playsInline
      poster="https://images.unsplash.com/photo-1504274066651-8d31a536b11a"
      className="w-full h-[550px] object-cover"
    >
      <source src={dubai} type="video/webm" />
      <img
        src="https://images.unsplash.com/photo-1504274066651-8d31a536b11a"
        alt="Dubai"
        className="w-full h-[750px] object-cover"
      />
    </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center p-6">
          {/* Dynamic heading */}
          <h1 className="text-3xl font-bold text-white mb-4">
            Dubai Visa from {country}
          </h1>

          {/* Guarantee Pill */}
          <div className="flex items-center bg-gray-900 text-white text-sm px-4 py-2 rounded-full mb-4">
            <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
            Visa guaranteed on{" "}
            <span className="font-semibold ml-1">6 Oct 2025 at 03:06 PM</span>
          </div>

          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-2 rounded-lg">
            Check Required Documents
          </button>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mt-8 px-4">
        {/* Left Column */}
        <div className="md:col-span-2 space-y-6">
          {/* Badge */}
          <div className="bg-white border rounded-xl p-4 shadow-sm flex items-center space-x-2">
            <span className="text-xl">#1</span>
            <p className="text-sm text-gray-600">
              Rated as Fast Company’s #1 Most Innovative Travel Company in the world
            </p>
          </div>

          {/* Visa Info */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Dubai Visa Information</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div>
                <p className="text-sm text-gray-500">Visa Type</p>
                <p className="font-medium">📱 E-Visa</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Length of Stay</p>
                <p className="font-medium">📅 30 days</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Validity</p>
                <p className="font-medium">✅ 60 days</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Entry</p>
                <p className="font-medium">🔑 Single</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Method</p>
                <p className="font-medium">💻 Paperless</p>
              </div>
            </div>
          </div>

          {/* Guaranteed Visa */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-lg font-semibold mb-4">Get a Guaranteed Visa on</h3>
            <div className="border rounded-xl p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-indigo-600" />
                <p className="font-medium">6 Oct 2025 at 03:06 PM</p>
              </div>
              <button className="bg-indigo-600 text-white text-sm px-4 py-1 rounded-lg">
                Selected
              </button>
            </div>
            <a href="#" className="text-sm text-indigo-600 underline mt-2 inline-block">
              View Timeline
            </a>
          </div>

          {/* Documents */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-lg font-semibold mb-4">
              What Documents Do You Need to Submit?
            </h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {profiles.map((profile) => (
                <button
                  key={profile}
                  onClick={() => setSelectedProfile(profile)}
                  className={`px-4 py-2 rounded-lg border text-sm ${
                    selectedProfile === profile
                      ? "bg-black text-white border-black"
                      : "bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200"
                  }`}
                >
                  {profile}
                </button>
              ))}
            </div>
            <div className="space-y-2">
              {requiredDocs[selectedProfile].map((doc, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 border rounded-lg p-3 bg-gray-50"
                >
                  <span>📄</span>
                  <p className="text-sm font-medium">{doc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Visa Requirements */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-lg font-semibold mb-4">Dubai Visa Requirements</h3>
            <div className="flex items-center gap-3 border rounded-lg p-3 bg-gray-50">
              <span>📘</span>
              <p className="font-medium">Passport</p>
            </div>
          </div>

          {/* Partners */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-lg font-semibold mb-4">Partners We Work With</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="border rounded-lg p-4 flex items-center justify-center bg-white shadow-sm">
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2e/UAE_emblem.svg" alt="UAE" className="h-10" />
              </div>
              <div className="border rounded-lg p-4 flex items-center justify-center bg-white shadow-sm">
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Dubai_gov_logo.svg" alt="Dubai Gov" className="h-10" />
              </div>
              <div className="border rounded-lg p-4 flex items-center justify-center bg-white shadow-sm">
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/IATAlogo.svg" alt="IATA" className="h-10" />
              </div>
              <div className="border rounded-lg p-4 flex items-center justify-center bg-white shadow-sm">
                <img src="https://upload.wikimedia.org/wikipedia/commons/f/f5/Etihad_Airways_Logo.svg" alt="Etihad" className="h-10" />
              </div>
            </div>
          </div>

          {/* Visa Process */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-lg font-semibold mb-4">How Dubai Visa Process Works</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-indigo-600 pl-4">
                <p className="font-semibold text-indigo-600">Step 1: Apply on Atlys</p>
                <p className="text-sm text-gray-600">
                  Submit your documents on Atlys — only pay government fee.
                </p>
              </div>
              <div className="border-l-4 border-indigo-600 pl-4">
                <p className="font-semibold text-indigo-600">Step 2: Processing</p>
                <p className="text-sm text-gray-600">
                  Atlys reviews and submits your application to UAE immigration.
                </p>
              </div>
              <div className="border-l-4 border-indigo-600 pl-4">
                <p className="font-semibold text-indigo-600">Step 3: Visa Delivered</p>
                <p className="text-sm text-gray-600">
                  Receive your visa on time. If delayed, no Atlys fee. If rejected, 100% refund.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Price */}
        <div>
          <div className="bg-white rounded-xl shadow-md p-6 sticky top-4">
            {/* Date Selector */}
            <div className="flex justify-center gap-2 mb-4">
              <button
                onClick={() => setSelectedDate("10 September")}
                className={`flex items-center gap-1 px-4 py-1 rounded-full border text-sm ${
                  selectedDate === "10 September"
                    ? "border-indigo-600 bg-indigo-50 text-indigo-700 font-medium"
                    : "border-gray-300 text-gray-700 hover:bg-gray-100"
                }`}
              >
                <Calendar className="w-4 h-4" /> 10 September
              </button>
              <button
                onClick={() => setSelectedDate("9 September")}
                className={`flex items-center gap-1 px-4 py-1 rounded-full border text-sm ${
                  selectedDate === "9 September"
                    ? "border-indigo-600 bg-indigo-50 text-indigo-700 font-medium"
                    : "border-gray-300 text-gray-700 hover:bg-gray-100"
                }`}
              >
                <Calendar className="w-4 h-4" /> 9 September
              </button>
            </div>

            {/* Guarantee */}
            <div className="bg-indigo-600 text-white text-center rounded-lg py-2 mb-4">
              Visa guaranteed on <br />
              <span className="font-semibold">{selectedDate} 2025 at 09:27 AM</span>
            </div>

            {/* Price Breakdown */}
            <h3 className="text-lg font-semibold mb-3">Price Breakdown</h3>
            <ul className="space-y-2 text-sm text-gray-700 mb-4">
              <li className="flex justify-between">
                <a href="#" className="text-indigo-600 underline">
                  Government fee
                </a>
                <span>₹6,250 × 1</span>
              </li>
              <li className="flex justify-between">
                <a href="#" className="text-indigo-600 underline">
                  Atlys Fees
                </a>
                <span>
                  <span className="line-through text-gray-400">₹1,000</span>{" "}
                  <span className="text-green-600">₹0 for now</span>
                </span>
              </li>
            </ul>

            {/* Note */}
            <p className="text-xs text-indigo-600 mb-4 text-center">
              No advance payment. Pay only when you get your visa
            </p>

            {/* Total */}
            <h4 className="font-semibold text-gray-900 mb-4 flex justify-between">
              <span>Total Amount</span>
              <span>₹6,250</span>
            </h4>

            {/* Button */}
            <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 rounded-lg">
              Start Application
            </button>

            {/* AtlysProtect */}
            <div className="mt-4 border rounded-lg p-3 bg-gray-50 text-sm text-gray-700">
              <p>
                ✅ <strong>AtlysProtect</strong> – Free  
                <br /> If Visa Delayed → No Atlys Fee  
                <br /> If Rejected → 100% Refund
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
  );
};

export default DubaiVisaPage;
