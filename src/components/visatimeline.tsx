import React, { useState } from "react";
import Calendarr from "@/components/visacalender";

const VisaTimeline: React.FC = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState("15 October");

  return (
    <div className="-mx-2 hidden pr-2 md:-mx-6 md:pl-6 md:pr-10 lg:block">
      
      {/* ====== HEADING ====== */}
      <div className="relative z-[2] flex gap-2">
        <span className="relative ml-[0.5px] flex h-5 w-5 items-center justify-center pt-3">
          <span className="absolute inline-flex h-full w-full rounded-full bg-primary/30"></span>
          <span className="relative inline-flex h-3 w-3 rounded-full bg-primary"></span>
        </span>

        <div>
          <h2 className="text-lg font-semibold lg:text-2xl">
            <span>Get a Guaranteed Visa on</span>
          </h2>
          <div className="mt-2.5 w-12 border border-primary transition-all duration-500"></div>
        </div>
      </div>

      {/* Vertical connector line */}
      <div className="-mt-2 ml-2.5 h-12 border-l border-gray-200"></div>

      {/* ====== CARD SECTION ====== */}
      <div className="flex flex-col">
        <div className="relative pl-6">
          <div className="absolute left-2.5 top-0 h-1/2 w-3.5 rounded-bl-2xl border-l border-b border-gray-200"></div>

          <div className="relative z-[2] rounded-2xl border border-primary/40 p-5 pl-4 pt-6 shadow-xl">
            <p className="absolute left-4 top-0 -translate-y-1/2 rounded-full bg-[#EFF0FF] px-3 py-1.5 text-sm font-bold text-primary">
              in 3 days
            </p>

            {/* Visa Date */}
            <div style={{ height: 60 }}>
              <div className="flex items-center gap-2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 33 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-primary"
                >
                  <circle cx="16" cy="16" r="15" stroke="currentColor" />
                </svg>
                <p className="font-semibold md:text-lg">
                  {selectedDate} at 05:07 PM
                </p>
              </div>

              {/* ===== View Timeline Button ===== */}
              <div className="relative w-full">
                <button
                  onClick={() => setShowCalendar(!showCalendar)}
                  className="flex items-center gap-1 text-sm font-bold text-primary sticky bottom-4 left-0 z-50 px-8 py-2 rounded-lg"
                >
                  <span>View Timeline</span>
                  <span
                    className="text-primary"
                    style={{ transform: "rotate(180deg)" }}
                  >
                    <svg
                      fill="none"
                      height="18"
                      viewBox="0 0 18 16"
                      width="18"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.5234 10L9.27344 6L5.02344 10"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </span>
                </button>

                {/* Calendar appears here when button clicked */}
                {showCalendar && (
                  <div className="mt-4">
                    <Calendarr />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisaTimeline;
