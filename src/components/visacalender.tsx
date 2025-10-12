import React from "react";

const VisaTimelineCalendar: React.FC = () => {
  return (
    <div className="flex flex-col ">
      <div className="relative pl-6">
        <div className="absolute left-2.5 top-0 w-3.5 h-1/2 rounded-bl-2xl border-l border-b border-gray-200"></div>

        <div
          className="relative z-[2] rounded-2xl bg-white p-6 shadow-lg lg:mx-0 border border-primary/40 p-5 pl-4 pt-6 shadow-xl"
          data-testid="clp-standard"
        >
          <p className="absolute left-4 top-0 -translate-y-1/2 rounded-full bg-[#EFF0FF] px-3 py-1.5 text-xs font-medium text-primary">
            in 3 days
          </p>

          <div style={{ height: 657 }}>
            <div className="flex items-center gap-2">
              {/* SVG Icon */}
              <svg
                width="24"
                height="24"
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-primary"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.13909 7.75951C3.90234 8.41669 3.90234 9.16943 3.90234 10.6749L3.90234 20.2756C3.90234 21.5279 3.90234 22.154 4.07494 22.7224C4.22775 23.2255 4.47826 23.6936 4.81216 24.0999C5.18931 24.5587 5.7103 24.9061 6.75226 25.6007L12.4647 29.409C14.0685 30.4782 14.8704 31.0128 15.7372 31.2205C16.5031 31.4041 17.3016 31.4041 18.0675 31.2205C18.9343 31.0128 19.7362 30.4782 21.3399 29.409L27.0524 25.6007C28.0944 24.9061 28.6154 24.5587 28.9925 24.0999C29.3264 23.6936 29.5769 23.2255 29.7297 22.7224C29.9023 22.154 29.9023 21.5279 29.9023 20.2756L29.9023 10.6749C29.9023 9.16943 29.9023 8.41669 29.6656 7.75952C29.4563 7.17862 29.1154 6.65405 28.6696 6.22689C28.1652 5.74365 27.4773 5.43794 26.1016 4.82651L19.5016 1.8932C18.5444 1.46779 18.0659 1.25508 17.5684 1.17108C17.1275 1.09662 16.6772 1.09662 16.2363 1.17108C15.7388 1.25508 15.2602 1.46779 14.3031 1.89319L7.70307 4.82651C6.32735 5.43794 5.63948 5.74365 5.1351 6.22689C4.68926 6.65405 4.34835 7.17862 4.13909 7.75951ZM22.0993 13.696C22.3922 13.4031 22.3922 12.9283 22.0993 12.6354C21.8064 12.3425 21.3316 12.3425 21.0387 12.6354L15.569 18.105L13.4327 15.9687C13.1398 15.6758 12.6649 15.6758 12.372 15.9687C12.0791 16.2616 12.0791 16.7365 12.372 17.0294L15.0387 19.696C15.3316 19.9889 15.8064 19.9889 16.0993 19.696L22.0993 13.696Z"
                  fill="currentColor"
                />
              </svg>
              <p className="font-semibold md:text-lg">15 Oct 2025 at 05:07 PM</p>
            </div>

            {/* Button */}
            <div className="flex flex-col-reverse justify-between pl-8 pr-6 md:flex-row md:pl-8 md:pr-0">
             

              {/* Calendar Section */}
              <div className="mt-5 flex flex-row flex-wrap overflow-hidden rounded-2xl border text-left">
                <div className="w-full p-5 pt-2 lg:w-3/5">
                  <div className="relative flex flex-col border-b border-dashed border-gray-100 py-4">
                    <p className="font-medium">October 2025</p>
                  </div>

                  {/* Calendar Days */}
                  <div className="flex w-full flex-col">
                    {/* Weekdays */}
                    <div className="flex justify-between px-0 py-1.5 text-center text-xs font-medium text-gray-500 md:py-3">
                      {["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map((day)=>(
                        <div key={day} className="w-10 group relative my-0.5">
                          <div className="flex h-full w-full items-center justify-center">{day}</div>
                        </div>
                      ))}
                    </div>
                    <hr className="opacity-50" />
                    
                    {/* Dates grid */}
                    <div className="mx-auto mt-1 grid w-full grid-cols-7 gap-1 rounded-md text-sm">
                      {Array.from({length: 35}, (_, i) => (
                        <div key={i} className="relative">
                          <div className="flex h-10 items-center justify-center text-gray-600 group relative my-0.5">
                            <div className="flex h-full w-full items-center justify-center">{i+1}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Sidebar info */}
                <div className="w-full bg-gray-50 p-5 pt-2 lg:w-2/5">
                  <p className="border-b border-dashed py-4 text-gray-600">GOOD TO KNOW</p>
                  {/* Example info block */}
                  <div className="mt-4 flex flex-row">
                    <span>
                      {/* Example SVG */}
                      <svg
                        fill="none"
                        height="32"
                        viewBox="0 0 32 32"
                        width="32"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="16"
                          cy="16"
                          fill="#F3F8FF"
                          r="15.5"
                          stroke="#D2E0F7"
                        />
                      </svg>
                    </span>
                    <div className="pl-2 pt-0.5 text-sm">
                      <p className="font-medium">Atlys on your Visa!</p>
                      <p className="mt-0.5 text-xs text-gray-700">
                        Atlys works with the authorities to get your visa on time!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisaTimelineCalendar;
