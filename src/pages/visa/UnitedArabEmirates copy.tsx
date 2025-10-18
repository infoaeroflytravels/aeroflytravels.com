import React, { useState, useEffect } from "react";

import AE from "@/assets/visa/assets/AE/ae.webm";
import alt from "@/assets/visa/assets/AE/alt.webp";
import iata from "@/assets/visa/logo/iatalogo.avif";
import god from "@/assets/visa/assets/AE/god.webp";
import mofa from "@/assets/visa/assets/AE/mofa.webp";
import ey from "@/assets/visa/assets/AE/ethihad.webp";

import Price from "@/components/pricebreakdown";
import Calendarr from "@/components/visacalender";

import Guaranteed from "@/components/visatimeline";
import "react-calendar/dist/Calendar.css";




const DubaiVisaPage: React.FC = () => {
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
            poster={alt}
            className="w-full h-[600px] object-cover"
          >
            <source src={AE} type="video/webm" />
            <img src={alt} alt="AE" className="w-full h-[750px] object-cover" />
          </video>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center p-6">
            <h1 className="text-5xl font-bold text-white mb-4">
              Dubai Visa
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

              <span className="flex flex-row items-center  text-white text-md">
                Visa guaranteed in 2 days {randomMinutes} minutes
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
            <div className="hidden flex-wrap items-center space-x-4 md:flex">
              <div className="flex items-center gap-2 rounded-full py-2 pl-3 pr-5 text-[13px] font-semibold  md:w-fit md:pl-3 md:text-sm bg-primary text-white">
                <svg className="h-7 w-7 md:h-6 md:w-6" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" y="0.5" width="29" height="29" rx="14.5" fill="#FBFBFB"></rect>
                  <rect x="0.5" y="0.5" width="29" height="29" rx="14.5" stroke="#FBFBFB" stroke-linecap="round" stroke-dasharray="4 4"></rect>
                  <path d="M15 23.4636C15 23.4636 21.3709 20.2782 21.3709 15.5V9.1291L15 7.53638L8.62909 9.1291V15.5C8.62909 20.2782 15 23.4636 15 23.4636Z" fill="white" fill-opacity="0.22" stroke="#5057EA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M13.2598 15.0896L14.6631 16.4931L17.6484 13.5078" stroke="#5057EA" stroke-width="2" stroke-linecap="round"></path>
                </svg>Aerofly is authorized by the Government of Dubai</div></div>

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
              <div>
                <h2 className="text-lg font-semibold lg:text-3xl">
                  <span> Dubai Visa Information</span>
                </h2>
                <div className="mt-1.5 w-12 border border-primary transition-all duration-500"></div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                {/* Visa Type */}
                <div className="flex items-start gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#E5EFFF]">
                    <svg
                      width="18"
                      height="25"
                      viewBox="0 0 17 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.228516"
                        y="-0.00390625"
                        width="16.5825"
                        height="24.0098"
                        rx="3.87639"
                        fill="#5057EA"
                      />
                      <path
                        d="M5.32617 2.27539H11.7124"
                        stroke="#E5EFFF"
                        strokeWidth="0.969097"
                        strokeLinecap="round"
                      />
                      <circle cx="8.51911" cy="21.6812" r="0.870673" fill="#E5EFFF" />
                      <rect
                        x="2.45508"
                        y="5.08984"
                        width="12.1293"
                        height="13.8172"
                        rx="1.93819"
                        fill="#E5EFFF"
                      />
                    </svg>
                  </div>

                  <div className="group relative cursor-pointer">
                    <p className="text-sm text-gray-500">Visa Type</p>
                    <p className="mt-0.5 text-base font-semibold text-gray-800 underline">E-Visa</p>


                  </div>
                </div>

                {/* Length of Stay */}
                <div className="flex items-start gap-3">
                  {/* Icon */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#E5F5FF]">
                    <svg
                      width="21"
                      height="22"
                      viewBox="0 0 21 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_37706_1950)">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M7.74196 1.48832C7.74196 1.13018 7.45163 0.839844 7.09349 0.839844C6.73534 0.839844 6.44501 1.13018 6.44501 1.48832V1.75818C5.45464 1.82185 4.74683 1.96203 4.14118 2.27062C3.16503 2.76799 2.3714 3.56163 1.87403 4.53777C1.30859 5.6475 1.30859 7.10022 1.30859 10.0057V11.9944C1.30859 14.8998 1.30859 16.3525 1.87403 17.4623C2.3714 18.4384 3.16503 19.232 4.14118 19.7294C5.25091 20.2948 6.70363 20.2948 9.60906 20.2948H11.4327C14.3381 20.2948 15.7908 20.2948 16.9006 19.7294C17.8767 19.232 18.6703 18.4384 19.1677 17.4623C19.7332 16.3525 19.7332 14.8998 19.7332 11.9944V10.0057C19.7332 7.10022 19.7332 5.6475 19.1677 4.53777C18.6703 3.56163 17.8767 2.76799 16.9006 2.27062C16.2951 1.96212 15.5875 1.82194 14.5976 1.75824V1.48832C14.5976 1.13018 14.3073 0.839844 13.9491 0.839844C13.591 0.839844 13.3007 1.13018 13.3007 1.48832V1.71317C12.7524 1.70519 12.135 1.70519 11.4327 1.70519H9.60906C8.90712 1.70519 8.28997 1.70519 7.74196 1.71316V1.48832ZM5.15891 7.54145C5.15891 7.18331 5.44924 6.89298 5.80738 6.89298H15.2339C15.592 6.89298 15.8824 7.18331 15.8824 7.54145C15.8824 7.8996 15.592 8.18993 15.2339 8.18993H5.80738C5.44924 8.18993 5.15891 7.8996 5.15891 7.54145ZM5.58739 11.4323C5.58739 10.8409 6.06411 10.3515 6.66434 10.3515C7.26456 10.3515 7.74129 10.8409 7.74129 11.4323C7.74129 12.0238 7.26456 12.5131 6.66434 12.5131C6.06411 12.5131 5.58739 12.0238 5.58739 11.4323ZM9.44369 11.4323C9.44369 10.8409 9.92042 10.3515 10.5206 10.3515C11.1209 10.3515 11.5976 10.8409 11.5976 11.4323C11.5976 12.0238 11.1209 12.5131 10.5206 12.5131C9.92042 12.5131 9.44369 12.0238 9.44369 11.4323ZM13.3 11.4323C13.3 10.8409 13.7767 10.3515 14.3769 10.3515C14.9772 10.3515 15.4539 10.8409 15.4539 11.4323C15.4539 12.0238 14.9772 12.5131 14.3769 12.5131C13.7767 12.5131 13.3 12.0238 13.3 11.4323ZM5.58739 14.8909C5.58739 14.2994 6.06411 13.8101 6.66434 13.8101C7.26456 13.8101 7.74129 14.2994 7.74129 14.8909C7.74129 15.4823 7.26456 15.9716 6.66434 15.9716C6.06411 15.9716 5.58739 15.4823 5.58739 14.8909ZM9.44369 14.8909C9.44369 14.2994 9.92042 13.8101 10.5206 13.8101C11.1209 13.8101 11.5976 14.2994 11.5976 14.8909C11.5976 15.4823 11.1209 15.9716 10.5206 15.9716C9.92042 15.9716 9.44369 15.4823 9.44369 14.8909ZM13.3 14.8909C13.3 14.2994 13.7767 13.8101 14.3769 13.8101C14.9772 13.8101 15.4539 14.2994 15.4539 14.8909C15.4539 15.4823 14.9772 15.9716 14.3769 15.9716C13.7767 15.9716 13.3 15.4823 13.3 14.8909Z"
                          fill="#009DFF"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_37706_1950">
                          <rect
                            width="20.5669"
                            height="20.7512"
                            fill="white"
                            transform="translate(0.236328 0.625)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>

                  {/* Info + Tooltip */}
                  <div className="group relative cursor-pointer">
                    <p className="text-sm text-gray-500">Length of Stay</p>
                    <p className="mt-0.5 text-base font-semibold text-gray-800 underline">
                      30 days
                    </p>

                    {/* Tooltip */}
                    <div className="absolute left-0 top-full mt-2 hidden w-60 rounded-xl border bg-white p-4 text-sm text-gray-700 shadow-xl group-hover:flex flex-col group-hover:block z-10">
                      <span className="pb-2 font-medium">
                        Length of Stay: <strong>30 days</strong>
                      </span>
                      <span>
                        The maximum duration that you are allowed to remain in a country after
                        entering with that particular visa.
                      </span>
                    </div>
                  </div>
                </div>


                {/* Validity */}
                <div className="flex items-start gap-3">
                  {/* Icon */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#79caa436]">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_39491_51042)">
                        <path
                          d="M8.37565 1.58012C8.37565 1.22197 8.6634 0.931641 9.01836 0.931641H12.4462C12.8012 0.931641 13.0889 1.22197 13.0889 1.58012C13.0889 1.93826 12.8012 2.22859 12.4462 2.22859H9.01836C8.6634 2.22859 8.37565 1.93826 8.37565 1.58012Z"
                          fill="#12B76A"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M10.7323 3.52555C6.11776 3.52555 2.37695 7.29987 2.37695 11.9557C2.37695 16.6116 6.11776 20.3859 10.7323 20.3859C15.3468 20.3859 19.0876 16.6116 19.0876 11.9557C19.0876 9.86148 18.33 7.94474 17.0774 6.4708L18.4709 5.06488C18.7219 4.81164 18.7219 4.40104 18.4709 4.1478C18.2199 3.89455 17.8129 3.89455 17.5619 4.1478L16.1685 5.55372C14.7077 4.2899 12.8079 3.52555 10.7323 3.52555ZM11.375 9.36183C11.375 9.00369 11.0872 8.71336 10.7323 8.71336C10.3773 8.71336 10.0896 9.00369 10.0896 9.36183V12.8204C10.0896 13.1785 10.3773 13.4689 10.7323 13.4689C11.0872 13.4689 11.375 13.1785 11.375 12.8204V9.36183Z"
                          fill="#12B76A"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_39491_51042">
                          <rect
                            width="20.5669"
                            height="20.7512"
                            fill="white"
                            transform="translate(0.449219 0.714844)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>

                  {/* Info + Tooltip */}
                  <div className="group relative cursor-pointer">
                    <p className="text-sm text-gray-500">Validity</p>
                    <p className="mt-0.5 text-base font-semibold text-gray-800 underline">
                      60 days
                    </p>

                    {/* Tooltip */}
                    <div className="absolute left-0 top-full mt-2 hidden w-60 rounded-xl border bg-white p-4 text-sm text-gray-700 shadow-xl group-hover:flex flex-col group-hover:block z-10">
                      <span className="pb-2 font-medium">
                        Validity Period: <strong>60 days</strong>
                      </span>
                      <span>
                        The number of days your visa is active after the date of issuance. We
                        ensure your visa is valid based on your travel dates.
                      </span>
                    </div>
                  </div>
                </div>


                {/* Entry Info */}
                <div className="relative flex flex-row items-center">
                  <span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#E2E3FB]">
                      <svg
                        width="19"
                        height="24"
                        viewBox="0 0 19 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="1.42191"
                          y="1.37699"
                          width="16.1934"
                          height="21.2441"
                          rx="2.81006"
                          fill="#2B00FF"
                          stroke="#E2E3FB"
                          strokeWidth="1.29695"
                        ></rect>
                        <path
                          d="M13.2852 10.8789V12.8085"
                          stroke="#E2E3FB"
                          strokeWidth="1.29695"
                          strokeLinecap="round"
                        ></path>
                      </svg>
                    </div>
                  </span>

                  <div className="group relative cursor-pointer pl-3">
                    <p className="text-xs md:text-sm text-gray-500">Entry:</p>
                    <p className="mt-0.5 whitespace-nowrap text-sm font-medium underline text-gray-800">
                      Single
                    </p>

                    {/* Tooltip */}
                    <div className="invisible absolute top-full z-10 mt-2 w-60 flex-col rounded-xl border bg-white p-4 shadow-xl group-hover:visible group-hover:flex lg:left-1/2 lg:-translate-x-1/2 right-0">
                      <span className="pb-2 font-medium">Entry: Single</span>
                      <span className="text-sm text-gray-600">
                        You can enter the country only once during the visa's validity period and cannot re-enter using the same visa once you've exited.
                      </span>
                    </div>
                  </div>
                </div>


                {/* Method Info */}
                <div className="relative flex flex-row items-center">
                  <span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#E5EFFE]">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"
                          fill="#5057EA"
                        ></path>
                      </svg>
                    </div>
                  </span>

                  <div className="group relative cursor-pointer pl-3">
                    <p className="text-xs md:text-sm text-gray-500">Method:</p>
                    <p className="mt-0.5 whitespace-nowrap text-sm font-medium underline text-gray-800">
                      Paperless
                    </p>

                    {/* Tooltip */}
                    <div className="invisible absolute top-full z-10 mt-2 w-60 flex-col rounded-xl border bg-white p-4 shadow-xl group-hover:visible group-hover:flex lg:left-1/2 lg:-translate-x-1/2 left-0">
                      <span className="pb-2 font-medium">Method: Paperless</span>
                      <span className="text-sm text-gray-600">
                        Apply and receive your visa fully online. No paperwork needed.
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </div>


            {/* Guaranteed Visa */}

            <Guaranteed />


            {/* Documents */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="space-y-6" id="required-documents">
                {/* ====== Heading ====== */}
                <div>
                  <h2 className="text-lg font-semibold lg:text-2xl">
                    <span>Dubai Visa Requirements</span>
                  </h2>
                  <div className="mt-2.5 w-12 border border-primary transition-all duration-500"></div>
                </div>

                {/* ====== Requirement Items ====== */}
                <div className="flex flex-wrap items-center gap-4">
                  <div
                    data-testid="clp-required-docs"
                    className="flex h-9 items-center gap-2 rounded-[20px] bg-[#F8FAFC] px-3 text-sm font-medium md:h-12 md:gap-3 md:text-base"
                  >
                    <svg
                      className="h-4 w-4 md:h-5 md:w-5"
                      fill="none"
                      height="24"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22 8V7.5V7.5C22 4.46243 19.5376 2 16.5 2V2H16M22 16V16.5V16.5C22 19.5376 19.5376 22 16.5 22V22H16M2 16V16.5V16.5C2 19.5376 4.46243 22 7.5 22V22H8M2 8V7.5V7.5C2 4.46243 4.46243 2 7.5 2V2H8M2 12H22"
                        stroke="#2F384C"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                      />
                    </svg>
                    <span>Passport</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Partners */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-bold underline mb-6">Partners We Work With</h3>

              <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-6 justify-items-center">
                {[iata, god, mofa, ey].map((logo, index) => (
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



            <div className="mb-2">
      <div>
        <h2 className="text-lg font-semibold lg:text-2xl">
          <span>All 7 Emirates with 1 Visa</span>
        </h2>
        <div className="mt-2.5 w-0 border w-12 border-primary transition-all duration-500"></div>
      </div>

      <div className="flex flex-col gap-2 md:gap-4 mt-8">
        <div className="grid grid-cols-12 gap-2 md:gap-4">
          <div
            className="group relative col-span-5 cursor-pointer overflow-hidden rounded-xl transition-shadow duration-300 hover:shadow-lg"
            style={{ height: "min(25vw, 240px)" }}
          >
            <img
              alt="dubai"
              loading="lazy"
              decoding="async"
              data-nimg="fill"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="41.67vw"
              srcSet="https://www.atlys.com/_next/image?url=https%3A%2F%2Fmedia.atlys.com%2Fb2c%2Fclp%2FImages%2FCountry%2520At%2520Glance%2Fdubai.png%3FupdatedAt%3D1736947434479&w=828&q=75"
              src="https://www.atlys.com/_next/image?url=https%3A%2F%2Fmedia.atlys.com%2Fb2c%2Fclp%2FImages%2FCountry%2520At%2520Glance%2Fdubai.png%3FupdatedAt%3D1736947434479&w=828&q=75"
              style={{ position: "absolute", height: "100%", width: "100%", inset: 0, color: "transparent" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
              <h3 className="absolute bottom-4 left-4 text-sm font-semibold text-white sm:text-xl lg:text-2xl">Dubai</h3>
            </div>
          </div>

          <div className="col-span-7 grid grid-cols-2 gap-2 md:gap-4">
            <div
              className="group relative cursor-pointer overflow-hidden rounded-xl transition-shadow duration-300 hover:shadow-lg"
              style={{ height: "min(25vw, 240px)" }}
            >
              <img
                alt="abu-dhabi"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="29.17vw"
                srcSet="https://www.atlys.com/_next/image?url=https%3A%2F%2Fmedia.atlys.com%2Fb2c%2Fclp%2FImages%2FCountry%2520At%2520Glance%2Fabu-dhabi.png%3FupdatedAt%3D1736947437328&w=640&q=75"
                src="https://www.atlys.com/_next/image?url=https%3A%2F%2Fmedia.atlys.com%2Fb2c%2Fclp%2FImages%2FCountry%2520At%2520Glance%2Fabu-dhabi.png%3FupdatedAt%3D1736947437328&w=640&q=75"
                style={{ position: "absolute", height: "100%", width: "100%", inset: 0, color: "transparent" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                <h3 className="absolute bottom-4 left-4 text-xs font-semibold text-white sm:text-lg lg:text-xl">Abu Dhabi</h3>
              </div>
            </div>

            <div
              className="group relative cursor-pointer overflow-hidden rounded-xl transition-shadow duration-300 hover:shadow-lg"
              style={{ height: "min(25vw, 240px)" }}
            >
              <img
                alt="sharjah"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="29.17vw"
                srcSet="https://www.atlys.com/_next/image?url=https%3A%2F%2Fmedia.atlys.com%2Fb2c%2Fclp%2FImages%2FCountry%2520At%2520Glance%2Fsarjhah.png%3FupdatedAt%3D1736947435922&w=640&q=75"
                src="https://www.atlys.com/_next/image?url=https%3A%2F%2Fmedia.atlys.com%2Fb2c%2Fclp%2FImages%2FCountry%2520At%2520Glance%2Fsarjhah.png%3FupdatedAt%3D1736947435922&w=640&q=75"
                style={{ position: "absolute", height: "100%", width: "100%", inset: 0, color: "transparent" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                <h3 className="absolute bottom-4 left-4 text-xs font-semibold text-white sm:text-lg lg:text-xl">Sharjah</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-2 md:gap-4">
          <div className="group relative aspect-[5/7] cursor-pointer overflow-hidden rounded-xl transition-shadow duration-300 hover:shadow-lg">
            <img
              alt="ras-al-khaimah"
              loading="lazy"
              decoding="async"
              data-nimg="fill"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="25vw"
              srcSet="https://www.atlys.com/_next/image?url=https%3A%2F%2Fmedia.atlys.com%2Fb2c%2Fclp%2FImages%2FCountry%2520At%2520Glance%2Fras-al-khaimah.png%3FupdatedAt%3D1736947436577&w=640&q=75"
              src="https://www.atlys.com/_next/image?url=https%3A%2F%2Fmedia.atlys.com%2Fb2c%2Fclp%2FImages%2FCountry%2520At%2520Glance%2Fras-al-khaimah.png%3FupdatedAt%3D1736947436577&w=640&q=75"
              style={{ position: "absolute", height: "100%", width: "100%", inset: 0, color: "transparent" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
              <h3 className="absolute bottom-4 left-4 text-xs font-semibold text-white sm:text-base lg:text-lg">Ras Al Khaimah</h3>
            </div>
          </div>

          <div className="group relative aspect-[5/7] cursor-pointer overflow-hidden rounded-xl transition-shadow duration-300 hover:shadow-lg">
            <img
              alt="fujairah"
              loading="lazy"
              decoding="async"
              data-nimg="fill"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="25vw"
              srcSet="https://www.atlys.com/_next/image?url=https%3A%2F%2Fmedia.atlys.com%2Fb2c%2Fclp%2FImages%2FCountry%2520At%2520Glance%2Ffujairah.png%3FupdatedAt%3D1736947433925&w=640&q=75"
              src="https://www.atlys.com/_next/image?url=https%3A%2F%2Fmedia.atlys.com%2Fb2c%2Fclp%2FImages%2FCountry%2520At%2520Glance%2Ffujairah.png%3FupdatedAt%3D1736947433925&w=640&q=75"
              style={{ position: "absolute", height: "100%", width: "100%", inset: 0, color: "transparent" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
              <h3 className="absolute bottom-4 left-4 text-xs font-semibold text-white sm:text-base lg:text-lg">Fujairah</h3>
            </div>
          </div>

          <div className="group relative aspect-[5/7] cursor-pointer overflow-hidden rounded-xl transition-shadow duration-300 hover:shadow-lg">
            <img
              alt="umm-al-quwain"
              loading="lazy"
              decoding="async"
              data-nimg="fill"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="25vw"
              srcSet="https://www.atlys.com/_next/image?url=https%3A%2F%2Fmedia.atlys.com%2Fb2c%2Fclp%2FImages%2FCountry%2520At%2520Glance%2Fumm-al-quwain.png%3FupdatedAt%3D1736947434268&w=640&q=75"
              src="https://www.atlys.com/_next/image?url=https%3A%2F%2Fmedia.atlys.com%2Fb2c%2Fclp%2FImages%2FCountry%2520At%2520Glance%2Fumm-al-quwain.png%3FupdatedAt%3D1736947434268&w=640&q=75"
              style={{ position: "absolute", height: "100%", width: "100%", inset: 0, color: "transparent" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
              <h3 className="absolute bottom-4 left-4 text-xs font-semibold text-white sm:text-base lg:text-lg">Umm Al Quwain</h3>
            </div>
          </div>

          <div className="group relative aspect-[5/7] cursor-pointer overflow-hidden rounded-xl transition-shadow duration-300 hover:shadow-lg">
            <img
              alt="ajman"
              loading="lazy"
              decoding="async"
              data-nimg="fill"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="25vw"
              srcSet="https://www.atlys.com/_next/image?url=https%3A%2F%2Fmedia.atlys.com%2Fb2c%2Fclp%2FImages%2FCountry%2520At%2520Glance%2Fajman.png%3FupdatedAt%3D1736947435000&w=640&q=75"
              src="https://www.atlys.com/_next/image?url=https%3A%2F%2Fmedia.atlys.com%2Fb2c%2Fclp%2FImages%2FCountry%2520At%2520Glance%2Fajman.png%3FupdatedAt%3D1736947435000&w=640&q=75"
              style={{ position: "absolute", height: "100%", width: "100%", inset: 0, color: "transparent" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
              <h3 className="absolute bottom-4 left-4 text-xs font-semibold text-white sm:text-base lg:text-lg">Ajman</h3>
            </div>
          </div>
        </div>
      </div>
    </div>






            

          </div>
          {/* Right Column - Price */}
          <div className="bg-transparent rounded-xl  p-1">
            <Price />

            <div className="space-y-4 bg-white rounded-xl shadow-md p-6 mt-6">
              <h2 className="text-lg font-semibold lg:text-2xl">
                <span>How Dubai Visa Process Works.</span>
              </h2>
              <div className="mt-2.5 w-12 border border-primary transition-all duration-500"></div>
            

             <div className="relative ml-7 max-w-xl space-y-5">
              {/* Vertical connector */}
              <div className="absolute -left-[26px] bottom-10 top-7 w-0.5 rounded-full bg-gray-200 animate-reveal-timeline-hiw"></div>

              {/* Step 1 */}
              <div className="relative space-y-1 rounded-2xl border px-5 pb-5 pt-3.5">
                <div className="absolute -left-[33px] top-6 flex size-4 items-center justify-center rounded-full border border-primary bg-white">
                  <div className="size-[10px] rounded-full bg-primary"></div>
                </div>
                <p className="bg-gradient-to-r from-primary via-[#53BCFF] to-[#53BCFF] bg-clip-text font-bold text-transparent">
                  Step 1
                </p>
                <div className="flex w-full flex-col gap-1">
                  <p className="text-base font-medium md:text-lg">Apply on Aerofly</p>
                  <p className="text-sm text-gray-500 md:text-base">
                    Submit your documents on Aerofly — only pay government fee.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative space-y-1 rounded-2xl border px-5 pb-5 pt-3.5">
                <div className="absolute -left-[33px] top-6 flex size-4 items-center justify-center rounded-full border border-primary bg-white">
                  <div className="size-[10px] rounded-full bg-primary"></div>
                </div>
                <p className="bg-gradient-to-r from-primary via-[#53BCFF] to-[#53BCFF] bg-clip-text font-bold text-transparent">
                  Step 2
                </p>
                <div className="flex w-full flex-col gap-1">
                  <p className="text-base font-medium md:text-lg">Your Documents Are Verified</p>
                  <p className="text-sm text-gray-500 md:text-base">
                    Aerofly verifies your documents and submits to Immigration.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative space-y-1 rounded-2xl border px-5 pb-5 pt-3.5">
                <div className="absolute -left-[33px] top-6 flex size-4 items-center justify-center rounded-full border border-primary bg-white">
                  <div className="size-[10px] rounded-full bg-primary"></div>
                </div>
                <p className="bg-gradient-to-r from-primary via-[#53BCFF] to-[#53BCFF] bg-clip-text font-bold text-transparent">
                  Step 3
                </p>

                <div className="flex w-full flex-col gap-1">
                  <p className="text-base font-medium md:text-lg">Your Visa Gets Processed</p>
                  <p className="text-sm text-gray-500 md:text-base">
                    We work with Immigration to ensure you get your Visa on time.
                  </p>

                  {/* Subtimeline */}
                  <div className="pt-3">
                    <div className="relative space-y-6 rounded-2xl border p-5">
                      {/* Sub-step 1 */}
                      <div className="relative">
                        <div className="absolute bottom-0 left-0.5 top-5 rounded-t-full border border-primary bg-primary"></div>
                        <p className="flex items-center text-[13px] text-gray-700">
                          <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                          <span className="ml-[18px] text-xs font-medium md:text-[13px] md:font-normal">
                            Application has been sent to the immigration supervisor
                          </span>
                        </p>
                        <p className="ml-6 mt-1 flex items-center gap-2 text-[13px] text-gray-700">
                          <span>8 Jan, 5:45 AM</span>
                          <span className="rounded bg-[#559E6A] px-1.5 text-[8px] font-semibold uppercase text-white">
                            On time
                          </span>
                        </p>
                      </div>

                      {/* Sub-step 2 */}
                      <div className="relative">
                        <div className="absolute -top-6 bottom-11 left-0.5 rounded-b-full border border-primary bg-primary"></div>
                        <p className="flex items-center text-[13px] text-gray-700">
                          <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                          <span className="ml-[18px] text-xs font-medium md:text-[13px] md:font-normal">
                            Application has been sent to internal intelligence
                          </span>
                        </p>
                        <p className="ml-6 mt-1 flex items-center gap-2 text-[13px] text-gray-700">
                          <span>8 Jan, 5:45 AM</span>
                          <span className="rounded bg-[#559E6A] px-1.5 text-[8px] font-semibold uppercase text-white">
                            On time
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative space-y-1 rounded-2xl border px-5 pb-5 pt-3.5">
                <div className="absolute -left-[33px] top-6 flex size-4 items-center justify-center rounded-full border border-primary bg-white">
                  <div className="size-[10px] rounded-full bg-primary"></div>
                </div>
                <p className="bg-gradient-to-r from-primary via-[#53BCFF] to-[#53BCFF] bg-clip-text font-bold text-transparent">
                  Step 4
                </p>

                <div className="flex w-full flex-col gap-1">
                  <p className="pb-2 text-base font-medium md:text-lg">
                    Get Your <span>Visa</span> <span>on</span>
                    <br className="block md:hidden" />
                    {(() => {
                      const date = new Date(); // you can replace this with your visa date
                      const options: Intl.DateTimeFormatOptions = { day: "2-digit", month: "long" }; // "October" instead of "Oct"
                      const formattedDate = date.toLocaleDateString("en-GB", options); // e.g. "21 October"
                      const time = date.toLocaleTimeString("en-US", {
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: true,
                      });
                      return (
                        <span className="bg-gradient-to-r from-primary to-[#53BCFF] bg-clip-text font-bold text-transparent">
                          {`${formattedDate}, ${time}`}
                        </span>
                      );
                    })()}
                  </p>

                  {/* Visa Status Results */}
                  <div className="space-y-[22px] rounded-2xl border p-5 md:space-y-4">
                    <div className="flex flex-col items-start gap-[7px] md:flex-row md:items-center md:justify-between">
                      <p className="flex-1 text-[13px] text-gray-700">
                        Your visa is approved on time
                      </p>
                      <p className="w-full rounded-lg bg-[#60C69726] px-4 py-1.5 text-center text-[13px] font-medium capitalize text-[#12B76A] md:w-52">
                        Pay Aero Fee
                      </p>
                    </div>

                    <div className="flex flex-col items-start gap-[7px] md:flex-row md:items-center md:justify-between">
                      <p className="text-[13px] text-gray-700 md:max-w-60 md:text-balance">
                        Your visa is approved even one second after the promised time
                      </p>
                      <p className="w-full rounded-lg bg-[#FDB0221A] px-4 py-1.5 text-center text-[13px] font-medium capitalize text-[#A87D18] md:w-44">
                        Aero Fee Waived
                      </p>
                    </div>

                    <div className="flex flex-col items-start gap-[7px] md:flex-row md:items-center md:justify-between">
                      <p className="flex-1 text-[13px] text-gray-700">Your visa is rejected</p>
                      <p className="w-full rounded-lg bg-[#D100501A] px-4 py-1.5 text-center text-[13px] font-medium text-[#D11000] md:w-52">
                        Government Fee Refunded
                      </p>
                    </div>
                  </div>
                </div>
              </div>
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
                          Glide through immigration with a pre-approved TDAC with Aerofly
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

export default DubaiVisaPage;

