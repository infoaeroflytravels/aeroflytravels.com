// src/components/InsuranceHero.tsx
"use client";

import React from "react";

const InsuranceHero: React.FC = () => {
  return (
    <section
      className="z-0 flex items-center bg-gradient-to-r from-[rgba(0,0,0,0)] to-[rgba(0,0,0,0.09)] bg-[#2687FC]"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgb(128, 98, 70) 10%, rgba(0, 0, 0, 0) 75%), url('/assets/images/insure/intro.png')",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        opacity: 1,
      }}
    >
      <div className="container relative mx-auto py-12 pb-14">
        <div>
          <h1 className="text-[28px] font-medium leading-9 tracking-[-0.56px] text-white text-shadow-custom-1 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              fill="currentColor"
              viewBox="0 0 256 256"
              className="me-2 inline-block text-white"
            >
              <path d="M180,216a12,12,0,0,1-12,12H24a12,12,0,1,1,0-24H168A12,12,0,0,1,180,216ZM251.79,89.88a12,12,0,0,1-5.64,8.1L98.75,186l-.13.07a43.74,43.74,0,0,1-52.2-5.94l-.19-.18-36-35.25A20,20,0,0,1,15.78,112l2.94-1.44a12,12,0,0,1,9.12-.59l26.5,8.94,14.15-8.56L50.42,92.78a20,20,0,0,1,5.7-33.05l.48-.2,7.15-2.7a12,12,0,0,1,8.4,0L124.29,76l49.93-29.8a43.8,43.8,0,0,1,56.43,10,1.84,1.84,0,0,1,.17.22L249.46,80.3A11.94,11.94,0,0,1,251.79,89.88Z" />
            </svg>
            StampMyVisa Insure
          </h1>

          <p className="text-lg font-normal leading-7 text-gray-200">
            Insure your travellers’ journeys with{" "}
            <span className="text-white">StampMyVisa</span>
          </p>

          <div className="relative mt-6 w-fit">
            <div className="flex items-center gap-2 rounded-full bg-white p-1 ps-2.5">
              {/* Destination input */}
              <div className="relative flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                  className="text-[#FF4100] opacity-50"
                >
                  <path d="M128,16a88.1,88.1,0,0,0-88,88c0,75.3,80,132.17,83.41,134.55a8,8,0,0,0,9.18,0C136,236.17,216,179.3,216,104A88.1,88.1,0,0,0,128,16Zm0,56a32,32,0,1,1-32,32A32,32,0,0,1,128,72Z" />
                </svg>
                <input
                  placeholder="Where to?"
                  className="w-44 flex-1 bg-transparent outline-none"
                />
              </div>

              {/* Date inputs */}
              <div className="relative flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                  className="text-gray-500"
                >
                  <path d="M208,28H188V24a12,12,0,0,0-24,0v4H92V24a12,12,0,0,0-24,0v4H48A20,20,0,0,0,28,48V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V48A20,20,0,0,0,208,28ZM68,52a12,12,0,0,0,24,0h72a12,12,0,0,0,24,0h16V76H52V52ZM52,204V100H204V204Z" />
                </svg>

                <input
                  placeholder="Travel start Date"
                  className="w-28 bg-transparent outline-none text-gray-600"
                  type="date"
                />
                <span className="text-gray-400">-</span>
                <input
                  placeholder="End Date"
                  className="w-28 bg-transparent outline-none text-gray-600"
                  type="date"
                />
              </div>

              {/* Button */}
              <button
                disabled
                className="relative me-1 flex items-center justify-center gap-1.5 overflow-hidden rounded-[38px] border-t border-white/30 bg-[#ff4100] py-1 pl-3 pr-2.5 text-white disabled:cursor-not-allowed disabled:opacity-80 shadow-[rgba(17,24,39,0.11)_0px_2px_4px,rgba(17,24,39,0.12)_0px_1px_1px,rgba(173,44,0,1)_0px_0px_0px_1px]"
              >
                <p className="text-[13px] font-medium">View plans</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                  className="text-white"
                >
                  <path d="M232.49,215.51,185,168a92.12,92.12,0,1,0-17,17l47.53,47.54a12,12,0,0,0,17-17ZM44,112a68,68,0,1,1,68,68A68.07,68.07,0,0,1,44,112Z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsuranceHero;
