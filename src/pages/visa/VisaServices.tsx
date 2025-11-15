import React, { useEffect, useState } from "react";
import { Globe, FileCheck, Clock, DollarSign, Search } from "lucide-react";
import visa from "@/assets/images/visa.jpg";
import ae from "@/assets/trips/AE.webp";
import tr from "@/assets/visa/GR.png";
import sg from "@/assets/visa/HK.webp";
import de from "@/assets/visa/HK.webp";
import hk from "@/assets/visa/HK.webp";
import sa from "@/assets/visa/JP.png";
import qa from "@/assets/visa/JP.png";
import th from "@/assets/visa/assets/TH/Thailand.avif";
import ch from "@/assets/visa/switzerland.webp";
import us from "@/assets/visa/US.webp";
import uk from "@/assets/visa/GB.webp";
import ca from "@/assets/visa/CA.png";
import au from "@/assets/visa/AU.png";
import fr from "@/assets/visa/FR.webp";
import it from "@/assets/visa/IT.png";
import om from "@/assets/visa/OM.webp";
import jp from "@/assets/visa/JP.png";
import kr from "@/assets/visa/KR.png";
import my from "@/assets/visa/MY.webp";
import nl from "@/assets/visa/EG.webp";
import za from "@/assets/visa/ES.png";
import vn from "@/assets/visa/VN.webp";



export function VisaServices() {
  const [searchTerm, setSearchTerm] = useState("");
  const formLink =
    "https://docs.google.com/forms/d/e/1FAIpQLSf0gSEES4nN5JH-9IY-kuynlJhU10qJzvteYx5t0tIPnD8CzQ/viewform";

  useEffect(() => {
    // ✅ Init Single-country VisaHQ Widget
    if (!(window as any).VHQVisaRequiredWidget) {
      (window as any).VHQVisaRequiredWidget = [];
      (window as any).VHQVisaRequiredWidget.push([
        "init",
        { containerId: "vhq-visa-required-widget", language: "en" },
      ]);

      const script = document.createElement("script");
      script.src =
        "https://www.visahq.com/scripts/visa-required-widget/1.1.3/loader-bundle.js";
      script.async = true;
      script.id = "vhq-widget-script";
      document.body.appendChild(script);

      script.onload = () => {
        setTimeout(() => {
          const widget = document.getElementById("vhq-visa-required-widget");
          if (widget) {
            widget.addEventListener("click", (e) => {
              const target = e.target as HTMLElement;
              const link = target.closest("a") as HTMLAnchorElement | null;
              if (link && link.href) {
                e.preventDefault();
                window.location.href = formLink;
              }
            });
          }
        }, 2000);
      };
    }

    // ✅ Init Multi-country VisaHQ Widget
    if (!(window as any).VHQWidgetMultigroupRequirements) {
      (window as any).VHQWidgetMultigroupRequirements = [];
      (window as any).VHQWidgetMultigroupRequirements.push([
        "init",
        { containerId: "retail-visa-multigroup-requirements-widget", lang: "en", domain: "https://www.visahq.in" },
      ]);

      const script2 = document.createElement("script");
      script2.src =
        "https://www.visahq.com/scripts/retail-visa-multigroup-requirements-widget/1.1.3/loader-bundle.js";
      script2.async = true;
      script2.id = "vhq-multi-widget-script";
      document.body.appendChild(script2);

      script2.onload = () => {
        setTimeout(() => {
          const widget2 = document.getElementById("retail-visa-multigroup-requirements-widget");
          if (widget2) {
            widget2.addEventListener("click", (e) => {
              const target = e.target as HTMLElement;
              const link = target.closest("a") as HTMLAnchorElement | null;
              if (link && link.href) {
                e.preventDefault();
                window.location.href = formLink;
              }
            });
          }
        }, 2000);
      };
    }
  }, []);

  const trips = [
    { title: "United Arab Emirates", image: ae, visaCount: "53K", date: "27 Aug, 07:21 AM", link: "/en-IN/visa/uae-visa" },
    { title: "Thailand", image: th, visaCount: "32K", date: "23 Aug, 02:05 PM", link: "/en-IN/visa/thailand-visa" },
    { title: "Vietnam", image: vn, visaCount: "32K", date: "23 Aug, 02:05 PM", link: "/en-IN/visa/vietnam-visa" },
    { title: "Switzerland", image: ch, visaCount: "30K", date: "22 Sep, 12:00 AM", link: "/en-IN/visa/switzerland-visa" },
    { title: "United States", image: us, visaCount: "28K", date: "10 Sep, 11:00 AM", link: "/en-IN/visa/united-states-visa" },
    { title: "United Kingdom", image: uk, visaCount: "25K", date: "15 Sep, 03:45 PM", link: "/en-IN/visa/united-kingdom-visa" },
    { title: "Canada", image: ca, visaCount: "20K", date: "12 Sep, 09:30 AM", link: "/en-IN/visa/canada-visa" },
    { title: "Australia", image: au, visaCount: "18K", date: "20 Sep, 10:15 AM", link: "/en-IN/visa/australia-visa" },
    { title: "Japan", image: jp, visaCount: "15K", date: "12 Sep, 09:30 AM", link: "/en-IN/visa/japan-visa" },
    { title: "France", image: fr, visaCount: "22K", date: "18 Sep, 02:30 PM", link: "/en-IN/visa/france-visa" },
    { title: "Germany", image: de, visaCount: "19K", date: "14 Sep, 01:15 PM", link: "/en-IN/visa/germany-visa" },
    { title: "Italy", image: it, visaCount: "17K", date: "16 Sep, 11:45 AM", link: "/en-IN/visa/italy-visa" },
    { title: "Oman", image: om, visaCount: "16K", date: "19 Sep, 04:20 PM", link: "/en-IN/visa/oman-visa" },
    { title: "Hong Kong", image: hk, visaCount: "14K", date: "17 Sep, 10:30 AM", link: "/en-IN/visa/hong-kong-visa" },
    { title: "South Korea", image: kr, visaCount: "13K", date: "21 Sep, 03:00 PM", link: "/en-IN/visa/south-korea-visa" },
    { title: "Malaysia", image: my, visaCount: "12K", date: "25 Sep, 05:45 PM", link: "/en-IN/visa/malaysia-visa" },
    { title: "Singapore", image: sg, visaCount: "24K", date: "15 Sep, 08:40 AM", link: "/en-IN/visa/singapore-visa" },
    { title: "Turkey", image: tr, visaCount: "13K", date: "09 Sep, 08:00 PM", link: "/en-IN/visa/turkey-visa" },
    { title: "Saudi Arabia", image: sa, visaCount: "12K", date: "25 Aug, 07:30 PM", link: "/en-IN/visa/saudi-arabia-visa" },
    { title: "Qatar", image: qa, visaCount: "11K", date: "14 Sep, 11:11 AM", link: "/en-IN/visa/qatar-visa" },
    { title: "Netherlands", image: nl, visaCount: "8K", date: "01 Sep, 09:15 AM", link: "/en-IN/visa/netherlands-visa" },
    { title: "South Africa", image: za, visaCount: "7K", date: "17 Sep, 01:30 PM", link: "/en-IN/visa/south-africa-visa" },
  ];

  // ✅ Filter trips by search term
  const filteredTrips = trips.filter((trip) =>
    trip.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full min-h-screen">
      {/* Hero Section */}
      <div
        className="relative h-80 sm:h-[500px] bg-cover bg-center"
        style={{ backgroundImage: `url(${visa})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative h-full flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="text-2xl sm:text-4xl font-bold text-white mb-2 sm:mb-4">
              Visa Services
            </h1>
            <p className="text-sm sm:text-xl text-white">
              Fast, reliable visa processing for major destinations
            </p>
          </div>
        </div>
      </div>

          {/* 🔍 Sticky Search Bar */}
<div className="sticky top-2 z-40 bg-blue-100/80 backdrop-blur-md py-4 shadow-sm">
  <div className="flex justify-center">
    <div
      className={`relative w-full sm:w-[500px] transition-all duration-300 
                  ${searchTerm ? "sm:w-[550px]" : "focus-within:sm:w-[550px]"}`}
    >
      {/* Search Icon */}
      <Search
        className={`absolute left-4 top-1/2 -translate-y-1/2 transition-all duration-200 
          ${searchTerm ? "text-blue-500 scale-110" : "text-gray-400"}`}
        size={22}
      />

      {/* Input */}
      <input
        type="text"
        placeholder="Search for a destination..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 
                   shadow-md text-gray-700 placeholder-gray-400 transition duration-300
                   focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none 
                   hover:shadow-lg hover:border-blue-400 
                   focus:shadow-[0_0_25px_rgba(59,130,246,0.3)]"
      />
    </div>
  </div>
</div>



          {/* Filtered Trips */}
          <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-5 gap-6">
            {filteredTrips.length > 0 ? (
              filteredTrips.map((trip, index) => (
                <a
                  key={index}
                  href={trip.link}
                  className="block bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition overflow-hidden"
                >
                  {/* Image */}
                  <div className="relative">
                    <img
                      src={trip.image}
                      alt={trip.title}
                      className="w-full h-60 object-cover rounded-lg"
                    />
                    <span className="absolute bottom-3 left-3 bg-purple-600 text-white text-sm md:text-base font-medium px-4 py-1.5 rounded-full shadow">
                      {trip.visaCount}+ Visas on Time
                    </span>
                  </div>
                  {/* Content */}
                  <div className="p-5">
                    <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3">
                      {trip.title}
                    </h3>
                    <p className="text-gray-600 text-base md:text-lg">
                      Get on <span className="text-blue-600 font-semibold">{trip.date}</span>
                    </p>
                  </div>
                </a>
              ))
            ) : (
              <p className="col-span-5 text-center text-gray-600">
                No results found.
              </p>
            )}
          </div>
        </div>
  );
}
