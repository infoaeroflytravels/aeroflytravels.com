import React, { useEffect } from "react";
import { Globe, FileCheck, Clock, DollarSign } from "lucide-react";
import visa from "../assets/images/visa.jpg";
import ae from "../assets/trips/AE.webp";

import th from "../assets/visa/Thailand.avif";
import ch from "../assets/visa/switzerland.webp";
import us from "../assets/visa/US.webp"; 
import uk from "../assets/visa/GB.webp";
import ca from "../assets/visa/CA.png"; 
import au from "../assets/visa/AU.png";
import fr from "../assets/visa/FR.webp";
import gr from "../assets/visa/GR.png";
import it from "../assets/visa/IT.png";
import om from "../assets/visa/OM.webp";
import jp from "../assets/visa/JP.png";
import HK from "../assets/visa/HK.webp";
import kr from "../assets/visa/KR.png";
import my from "../assets/visa/MY.webp";


export function VisaServices() {
  const countries = [
    { name: "United States", flag: "🇺🇸" },
    { name: "United Kingdom", flag: "🇬🇧" },
    { name: "Schengen", flag: "🇪🇺" },
    { name: "Canada", flag: "🇨🇦" },
    { name: "Australia", flag: "🇦🇺" },
    { name: "Dubai", flag: "🇦🇪" },
    { name: "India", flag: "🇮🇳" },
  ];

  const formLink =
    "https://docs.google.com/forms/d/e/1FAIpQLSf0gSEES4nN5JH-9IY-kuynlJhU10qJzvteYx5t0tIPnD8CzQ/viewform";

  useEffect(() => {
    // ✅ Init Single-country VisaHQ Widget
    if (!(window as any).VHQVisaRequiredWidget) {
      (window as any).VHQVisaRequiredWidget = [];
      (window as any).VHQVisaRequiredWidget.push([
        "init",
        {
          containerId: "vhq-visa-required-widget",
          language: "en",
        },
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
        {
          containerId: "retail-visa-multigroup-requirements-widget",
          lang: "en",
          domain: "https://www.visahq.in",
        },
      ]);

      const script2 = document.createElement("script");
      script2.src =
        "https://www.visahq.com/scripts/retail-visa-multigroup-requirements-widget/1.1.3/loader-bundle.js";
      script2.async = true;
      script2.id = "vhq-multi-widget-script";
      document.body.appendChild(script2);

      script2.onload = () => {
        setTimeout(() => {
          const widget2 = document.getElementById(
            "retail-visa-multigroup-requirements-widget"
          );
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

      {/* Features */}
      <div className="w-full min-h-screen">
      <div className="py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            {
              icon: Globe,
              title: "Global Coverage",
              text: "Visa services for over 100 countries",
            },
            {
              icon: FileCheck,
              title: "Expert Guidance",
              text: "Complete documentation support",
            },
            {
              icon: Clock,
              title: "Fast Processing",
              text: "Quick turnaround time",
            },
            {
              icon: DollarSign,
              title: "Competitive Rates",
              text: "Best prices guaranteed",
            },
          ].map(({ icon: Icon, title, text }, index) => (
            <div
              key={index}
              className="text-center p-4 sm:p-6 bg-white rounded-lg shadow-md"
            >
              <Icon className="h-10 w-10 text-blue-600 mx-auto mb-2" />
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="text-gray-600 text-sm sm:text-base">{text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Destinations */}
<div className="w-full min-h-screen bg-gray-100 flex flex-col items-center justify-center">
  <div
    className="max-w-full max-w-7xl border border-gray-300 rounded-4xl py-5 px-2 sm:px-4 md:px-8 lg:px-16 mx-auto"
    style={{ backgroundColor: "#e4ebebff" }}
  >
    <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">
      Popular Destinations
    </h2>

    <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-5 gap-6">
        {[
          {
        title: "United Arab Emirates",
        image: ae,
        visaCount: "53K",
        date: "27 Aug, 07:21 AM",
        link: "#",
          },
          {
        title: "Thailand",
        image: th,
        visaCount: "32K",
        date: "23 Aug, 02:05 PM",
        link: "#",
          },
          {
        title: "Switzerland",
        image: ch,
        visaCount: "30K",
        date: "22 Sep, 12:00 AM",
        link: "#",
          },
          {
        title: "United States",
        image: us,
        visaCount: "28K",
        date: "10 Sep, 11:00 AM",
        link: "#",
          },
          {
        title: "United Kingdom",
        image: uk,
        visaCount: "25K",
        date: "15 Sep, 03:45 PM",
        link: "#",
          },
          {
        title: "Canada",
        image: ca,
        visaCount: "20K",
        date: "12 Sep, 09:30 AM",
        link: "#",
          },
          {
        title: "Australia",
        image: au,
        visaCount: "18K",
        date: "20 Sep, 10:15 AM",
        link: "#",
          },
          {
        title: "japan",
        image:  jp,
        visaCount: "15K",
        date: "12 Sep, 09:30 AM",
        lnk: "#",
          },
          {
        title: "France",
        image: fr,
        visaCount: "22K",
        date: "18 Sep, 02:30 PM",
        link: "#",
          },
          {
        title: "Germany",
        image: gr,
        visaCount: "19K",
        date: "14 Sep, 01:15 PM",
        link: "#",
          },
          {
        title: "Italy",
        image: it,
        visaCount: "17K",
        date: "16 Sep, 11:45 AM",
        link: "#",
          },
          {
        title: "oman",
        image: om,
        visaCount: "16K",
        date: "19 Sep, 04:20 PM",
        link: "#",
          },
          {
        title: "Hong Kong",
        image: HK,
        visaCount: "14K",
        date: "17 Sep, 10:30 AM",
        link: "#",
          },
          {
        title: "South Korea",
        image: kr,
        visaCount: "13K",
        date: "21 Sep, 03:00 PM",
        link: "#",
          },
          {
        title: "Malaysia",
        image: my,
        visaCount: "12K",
        date: "25 Sep, 05:45 PM",
        link: "#",
          }
        ].map((trip, index) => (
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
                    className="w-full h-64 object-cover"
                  />
            <span className="absolute bottom-3 left-3 bg-purple-600 text-white text-sm font-medium px-3 py-1 rounded-full shadow">
              {trip.visaCount}+ Visas on Time
            </span>
          </div>
          {/* Content */}
                <div className="p-4">
                  <h3 className="text-base font-semibold text-gray-800 mb-2">
                    {trip.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Get on <span className="text-blue-600 font-medium">{trip.date}</span>
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

            

      {/* Application Process */}
      <div className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">
            Visa Application Process
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {["Submit Documents", "Processing", "Receive Visa"].map(
              (step, index) => (
                <div key={index} className="text-center">
                  <div className="bg-blue-100 rounded-full h-12 w-12 flex items-center justify-center mx-auto mb-3">
                    <span className="text-lg font-bold text-blue-600">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold">{step}</h3>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* ✅ Single-country Widget */}
      <div className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">
            Check Visa Requirements
          </h2>
          <div
            id="vhq-visa-required-widget"
            className="w-full min-h-[400px] border rounded-lg shadow-md"
          ></div>
        </div>
      </div>

      {/* ✅ Multi-country Widget */}
      <div className="py-12 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">
            Multi-country Visa Requirements
          </h2>
          <div
            id="retail-visa-multigroup-requirements-widget"
            className="w-full min-h-[400px] border rounded-lg shadow-md"
          ></div>
        </div>
      </div>
    </div>
    </div>
  );
}
