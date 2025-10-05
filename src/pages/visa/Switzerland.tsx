import React, { useState, useEffect } from "react";
import { Calendar } from "lucide-react";
import switzerland from "@/assets/visa/video/TH.webm";
import thaiimg from "@/assets/visa/img/th.png";
import iata from "@/assets/visa/logo/iatalogo.avif";
import tg from "@/assets/visa/logo/tglogo.svg";
import tggov from "@/assets/visa/logo/tggov.png";
import sheild from "@/assets/visa/logo/atlys-protect.png";

import GovernmentFeePopover from "@/components/govtfee";
import AeroFeePopover from "@/components/aerofee";


import Calendarr from "react-calendar";
import "react-calendar/dist/Calendar.css";

const switzerlandVisaPage: React.FC = () => {
  const [selectedProfile, setSelectedProfile] = useState("Employed");

  const [country, setCountry] = useState<string>("Your Country");




  // 🎲 Generate random number only from [5, 8, 10, 15, 20, 30]
  const [randomMinutes] = useState<number>(() => {
    const options = [5, 8, 10, 15, 20, 30];
    return options[Math.floor(Math.random() * options.length)];
  });
  const [selectedDate, setSelectedDate] = useState(randomMinutes === 5 ? "5 Minutes" : randomMinutes === 8 ? "8 Minutes" : randomMinutes === 10 ? "10 Minutes" : randomMinutes === 15 ? "15 Minutes" : randomMinutes === 20 ? "20 Minutes" : "30 Minutes");

  // 🌍 Fetch user location
  useEffect(() => {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 5000);

    fetch("https://ipapi.co/json/", { signal: controller.signal })
      .then((res) => res.json())
      .then((data) => {
        if (data && data.country_name) {
          setCountry(data.country_name);
        }
      })
      .catch(() => setCountry("Your Country"));

    return () => clearTimeout(timeout);
  }, []);

  // Profiles & required documents
  const profiles = ["Employed", "Self-Employed", "Student", "Retired"];
  const requiredDocs: { [key: string]: string[] } = {
    Employed: ["Passport", "Employment Letter", "Bank Statement"],
    "Self-Employed": ["Passport", "Business Registration", "Bank Statement"],
    Student: ["Passport", "Student ID", "Bank Statement"],
    Retired: ["Passport", "Pension Statement", "Bank Statement"],
  };



  // Expandable existing application
  const [hasExistingApplication] = useState(true);
  const [expanded, setExpanded] = useState(hasExistingApplication);

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="pt-24">
        {/* Hero Section with video */}
        <section className="relative max-w-7xl mx-auto rounded-2xl overflow-hidden shadow-lg">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster={thaiimg}
            className="w-full h-[600px] object-cover"
          >
            <source src={switzerland} type="video/webm" />
            <img src={thaiimg} alt="switzerland" className="w-full h-[750px] object-cover" />
          </video>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center p-6">
            <h1 className="text-5xl font-bold text-white mb-4">
              switzerland Digital Arrival Card (TDAC)
            </h1>

            {/* ✅ Guarantee Pill with random minutes */}
            <div className="mx-auto flex w-max items-center justify-center gap-2 rounded-full backdrop-blur-md border border-white/20 bg-white/10 px-8 py-2.5">
              <img
                alt="shield"
                loading="lazy"
                width="28"
                height="28"
                src="https://media.atlys.com/b2c/clp/Assets/shield-icon.svg"
                className="text-green-400"
              />
              <span className="text-white text-md font-medium">100% Money-Back Guarantee</span>
              <span className="flex flex-row items-center text-white text-md">
                TDAC in {randomMinutes} minutes
              </span>
            </div>

            {/* Expandable Check Required Documents block */}
            <div className="relative w-full max-w-xs mt-4">
              <div className="rounded-xl border transition-all duration-300 border-none p-0 bg-transparent">

                <button
                  test-id="clp-start-application"
                  className="relative cursor-pointer rounded-xl border font-medium shadow-md transition-colors duration-300 border-primary bg-primary text-white w-full mt-3"
                  onClick={() => setExpanded(!expanded)}
                >
                  <div className="mx-1 my-2">
                    <span className="text-center">Check Required Documents</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 mt-4 px-2">
          {/* Left Column */}
          <div className="md:col-span-2 space-y-6">

            {/* Badge */}
            <div className="flex w-full flex-row items-center bg-white-100 gap-4 rounded-lg border p-4 md:gap-3">
              {/* Rating with leaves */}
              <div className="flex flex-row items-center  bg-white-100 justify-center">
                <img
                  alt="leaves"
                  loading="lazy"
                  width={35}
                  height={50}
                  className="-mr-2.5 translate-y-1.5"
                  src="https://media.atlys.com/b2c/clp/Assets/leaves.svg"
                />
                <p className="text-2xl font-semibold">4.7</p>
                <img
                  alt="leaves"
                  loading="lazy"
                  width={35}
                  height={50}
                  className="-ml-2.5 translate-y-1.5 scale-x-[-1]"
                  src="https://media.atlys.com/b2c/clp/Assets/leaves.svg"
                />
              </div>

              {/* Text info */}
              <div>
                <p className="text-lg font-bold  bg-white-100 md:text-small md:font-medium">
                  Loved and Trusted by 1.25L Indians
                </p>

                <div className="mt-1 flex flex-row flex-wrap text-[10px] md:text-xs items-center gap-1">
                  <span>Rated 5 stars by</span>
                  <img
                    alt="crown"
                    loading="lazy"
                    width={16}
                    height={16}
                    src="https://media.atlys.com/b2c/clp/Assets/crown.svg"
                  />
                  <p className="italic">moms,</p>

                  <img
                    alt="heart"
                    loading="lazy"
                    width={14}
                    height={13}
                    src="https://media.atlys.com/b2c/clp/Assets/heart.svg"
                  />
                  <p className="italic">newlyweds, and</p>

                  <img
                    alt="clock"
                    loading="lazy"
                    width={14}
                    height={14}
                    src="https://media.atlys.com/b2c/clp/Assets/clock.svg"
                  />
                  <p className="italic">last-minute planners</p>
                </div>
              </div>
            </div>

            {/* Visa Info */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-bold underline mb-4">switzerland Visa Information</h2>
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
              <h3 className="text-lg font-bold underline mb-4">Get a Guaranteed Visa on</h3>
              <div className="border rounded-xl p-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-indigo-600" />
                  <p className="font-medium">{selectedDate}</p>
                </div>
                <button className="bg-indigo-600 text-white text-sm px-4 py-1 rounded-lg">
                  Selected
                </button>
              </div>
              <a href="#" className="text-sm text-blue-600 underline mt-2 inline-block">
                View Timeline
              </a>
            </div>

            {/* Documents */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-bold underline mb-4">
                What Documents Do You Need to Submit?
              </h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {profiles.map((profile) => (
                  <button
                    key={profile}
                    onClick={() => setSelectedProfile(profile)}
                    className={`px-4 py-2 rounded-lg border text-sm ${selectedProfile === profile
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
              <h3 className="text-lg font-bold underline mb-4">switzerland Visa Requirements</h3>
              <div className="flex items-center gap-3 border rounded-lg p-3 bg-gray-50">
                <span>📘</span>
                <p className="font-medium">Passport</p>
              </div>
            </div>

            {/* Partners */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-bold underline mb-6">Partners We Work With</h3>

              <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-6 justify-items-center">
                {[iata, tg, tggov].map((logo, index) => (
                  <div
                    key={index}
                    className="border rounded-xl p-6 flex items-center justify-center bg-white shadow-sm hover:shadow-md transition-all duration-200"
                  >
                    <img
                      src={logo}
                      alt={`Partner ${index + 1}`}
                      className="h-14 md:h-20 object-contain"
                    />
                  </div>
                ))}
              
            


          </div>
      </div>

      {/* Visa Process */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-lg font-bold underline mb-4">How switzerland Visa Process Works</h3>
        <div className="space-y-4">
          <div className="border-l-4 border-indigo-600 pl-4">
            <p className="font-semibold text-indigo-600">Step 1: Apply with Aerofly</p>
            <p className="text-sm text-gray-600">
              Submit your documents on Aerofly — only pay government fee.
            </p>
          </div>
          <div className="border-l-4 border-indigo-600 pl-4">
            <p className="font-semibold text-indigo-600">Step 2: Processing</p>
            <p className="text-sm text-gray-600">
              Aerofly reviews and submits your application to UAE immigration.
            </p>
          </div>
          <div className="border-l-4 border-indigo-600 pl-4">
            <p className="font-semibold text-indigo-600">Step 3: Visa Delivered</p>
            <p className="text-sm text-gray-600">
              Receive your visa on time. If delayed, no Aero fee. If rejected, 100% refund.
            </p>
          </div>
        </div>
      </div>
    </div>

          {/* Right Column - Price */ }
  <div>
    <div className="bg-white rounded-xl shadow-md p-4">


      {/* Guarantee */}
      <div className="bg-indigo-600 text-white text-center rounded-lg py-2 mb-4">
        Visa guaranteed on <br />
        <span className="font-semibold">{selectedDate} </span>
      </div>

      {/* Price Breakdown */}
      <h3 className="text-lg font-semibold mb-3">Price Breakdown</h3>
      <ul className="space-y-3 text-large text-gray-700 mb-5">
        <li className="flex justify-between">
          <div className="flex items-center gap-2">
            <svg
              fill="none"
              height="20"
              viewBox="0 0 24 24"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 11C22 10.0707 22 9.60603 21.9231 9.21964C21.6075 7.63288 20.3671 6.39249 18.7804 6.07686C18.394 6 17.9293 6 17 6H2V15.6C2 17.8402 2 18.9603 2.43597 19.816C2.81947 20.5686 3.43139 21.1805 4.18404 21.564C5.03968 22 6.15979 22 8.4 22H17C17.9293 22 18.394 22 18.7804 21.9231C20.3671 21.6075 21.6075 20.3671 21.9231 18.7804C22 18.394 22 17.9293 22 17V17H21C19.3431 17 18 15.6569 18 14C18 12.3431 19.3431 11 21 11H22V11Z"
                fill="#222731ff"
                opacity="0.12"
              ></path>
              <path
                d="M2 4V17.2C2 18.8802 2 19.7202 2.32698 20.362C2.6146 20.9265 3.07354 21.3854 3.63803 21.673C4.27976 22 5.11984 22 6.8 22H17.2C18.8802 22 19.7202 22 20.362 21.673C20.9265 21.3854 21.3854 20.9265 21.673 20.362C22 19.7202 22 18.8802 22 17.2V10.8C22 9.11984 22 8.27976 21.673 7.63803C21.3854 7.07354 20.9265 6.6146 20.362 6.32698C19.7202 6 18.8802 6 17.2 6H12M22 11H21.5C19.8431 11 18.5 12.3431 18.5 14V14C18.5 15.6569 19.8431 17 21.5 17H22M17 6L15.92 4.56C15.216 3.62134 14.864 3.15201 14.4179 2.8135C14.0228 2.5137 13.5754 2.28999 13.0985 2.15378C12.56 2 11.9733 2 10.8 2H4C2.89543 2 2 2.89543 2 4V4C2 5.10457 2.89543 6 4 6H17Z"
                stroke="#12244dff"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
              ></path>
            </svg>
            <GovernmentFeePopover />

          </div>
          <span className="font-bold text-lg">₹1 × 1</span>
        </li>
        <li className="flex justify-between items-center">
          {/* Left: Icon + Text */}
          <div className="flex items-center gap-2">
            <svg
              fill="none"
              height="20"
              viewBox="0 0 24 24"
              width="20"
            >
              <path
                d="M3 8.11937C3 6.99026 3 6.42571 3.17756 5.93283C3.33451 5.49715 3.59019 5.10373 3.92457 4.78336C4.30286 4.42093 4.81875 4.19164 5.85055 3.73307L9.40073 2.15522C10.3579 1.72982 10.8365 1.51711 11.334 1.43311C11.7749 1.35865 12.2251 1.35865 12.666 1.43311C13.1635 1.51711 13.6421 1.72982 14.5993 2.15522L18.1495 3.73307C19.1812 4.19164 19.6971 4.42093 20.0754 4.78336C20.4098 5.10373 20.6655 5.49715 20.8224 5.93283C21 6.42571 21 6.99026 21 8.11937V13.5748C21 14.8271 21 15.4532 20.8274 16.0216C20.6746 16.5247 20.4241 16.9928 20.0902 17.3991C19.713 17.858 19.192 18.2053 18.1501 18.8999L14.6626 21.2249C13.7003 21.8664 13.2192 22.1872 12.6991 22.3118C12.2395 22.422 11.7605 22.422 11.3009 22.3118C10.7808 22.1872 10.2997 21.8664 9.33744 21.2249L5.84992 18.8999C4.80796 18.2053 4.28697 17.858 3.90982 17.3991C3.57592 16.9928 3.32541 16.5247 3.1726 16.0216C3 15.4532 3 14.8271 3 13.5748V8.11937Z"
                fill="rgba(80, 87, 234,0.1)"
                opacity="1"
                stroke="currentColor"
                strokeWidth="1.5"
              ></path>
              <path
                d="M9.215 12.052l1.822 1.805 3.748-3.714"
                stroke="currentColor"
                strokeDasharray="100"
                strokeDashoffset="0"
                strokeLinecap="round"
                strokeWidth="1.5"
              ></path>
            </svg>

            <AeroFeePopover />
          </div>

          {/* Right: Numbers */}
          <span>
            <span className=" text-black-900 font-bold">₹99</span>{"  "}
            <span className="text-green-600 font-semibold text-lg ">₹0 for now</span>
          </span>
        </li>
      </ul>

      {/* Note */}
      <div className="relative z-[2] mt-1 rounded-lg bg-[#F4F4FE] px-1 py-1.5 text-center text-sm tracking text-blue-800">
        <p className="shimmer font-small text-bold">
          <span>No advance payment. </span>
          <span>Pay only when you get your </span>
          <span>TDAC</span>
        </p>
      </div>

      {/* Total */}
      <h4 className="font-semibold text-gray-900 mb-4 flex justify-between">
        <span className=" text-lg-black-900 font-bold">Total Amount</span>
        <span className=" text-lg-black-900 font-bold">₹1</span>
      </h4>

      {/* Button */}
      <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 rounded-lg">
        Start Application
      </button>

      {/* AeroflyProtect */}
      <div className="shadow-4xl mt-4 rounded-lg border border-gray-200 bg-white py-4 shadow-md px-3 flex items-start">
        <img
          loading="lazy"
          width="30"
          height="34"
          className="flex-shrink-0"
          src={sheild}
        />
        <div className="w-full ml-2">
          <p className="text-md font-semibold text-black">AeroProtect</p>
          <p className="text-xs text-[#455060]">
            If Visa Delayed — <span className="font-medium text-[#19212B]">No Aero Fee</span>
          </p>
          <p className="text-xs text-[#455060]">
            If Rejected — <span className="font-medium text-[#19212B]">100% Refund</span>
          </p>
        </div>
        <p className="text-bg font-bold text-[#189D85] ml-8 self-UPPER">Free</p>
      </div>
    </div>




    {/* Separation between cards */}
    <div className=" bg-white rounded-xl shadow-md p-6 mt-6">
      <h2 className="text-lg font-semibold lg:text-2xl">
        <span>Why Aerofly?</span>
      </h2>
      <div className="mt-2 w-5 border-b-2 border-primary transition-all duration-500"></div>
    </div>
    <div className=" ">
      <div className="my-auto max-w-4xl">
        <div className="flex flex-col gap-1">
          {/* Item 1 */}
          <div className="border-b bg-white px-0 py-3 first:pt-0 last:border-none last:pb-0 bg-white rounded-xl shadow-md p-6 mt-6">
            <div className="flex items-start">
              <div className="rounded-lg bg-white-100 p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="28"
                  fill="none"
                  stroke="#0535d3ff"
                  strokeWidth="2.20"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M23 4v6h-7"></path>
                  <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>
                </svg>
              </div>
              <div className="ml-6">
                <h3 className="mb-2 text-sm font-bold text-gray-800">
                  Skip the Long Immigration Lines
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  Glide through immigration with a pre-approved TDAC with Atlys
                </p>
              </div>
            </div>
          </div>


          {/* Item 2 */}
          <div className="border-b bg-white px-0 py-4 first:pt-0 last:border-none last:pb-0 bg-white rounded-xl shadow-md p-6 mt-6">
            <div className="flex items-start">
              <div className="rounded-lg bg-white-100 p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="#0535d3ff"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <div className="ml-5">
                <h3 className="mb-2 text-sm font-bold text-gray-800">Hassle-Free Application</h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  We handle the paperwork and complexity — so you don’t have to
                </p>
              </div>
            </div>
          </div>

          {/* Item 3 */}
          <div className="border-b bg-white px-0 py-4 first:pt-0 last:border-none last:pb-0 bg-white rounded-xl shadow-md p-6 mt-6">
            <div className="flex items-start">
              <div className="rounded-lg bg-white-100 p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="#0535d3ff"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <div className="ml-5">
                <h3 className="mb-2 text-sm font-bold text-gray-800">Always On Time</h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  Guaranteed delivery before your travel date
                </p>
              </div>
            </div>
          </div>

          {/* Item 4 */}
          <div className="border-b bg-white px-0 py-4 first:pt-0 last:border-none last:pb-0  bg-white rounded-xl shadow-md p-6 mt-6" >
            <div className="flex items-start">
              <div className="rounded-lg bg-white-100 p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="28"
                  height="50"
                  fill="none"
                  stroke="#0535d3ff"
                  strokeWidth="2.54"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <div className="ml-5">
                <h3 className="mb-2 text-sm font-bold text-gray-800">Risk-Free Guarantee</h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  Delayed? No Aero fee. Rejected? Full refund
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
        </section >
      </div >
    </div >
  );
};

export default switzerlandVisaPage;

