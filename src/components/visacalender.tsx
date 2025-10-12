import React from "react";

const VisaTimelineCalendar: React.FC = () => {
  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  // Example dates for October 2025
  const monthDates = Array.from({ length: 31 }, (_, i) => i + 1);
  const today = 12; // Example: today is 12 Oct
  const visaArrival = 15; // Example: visa arrival on 15 Oct

  const isToday = (date: number) => date === today;
  const isVisaArrival = (date: number) => date === visaArrival;

  return (
    <div className="flex flex-col">
      <div className="relative pl-6">
        <div className="absolute left-5.5 top-0 w-9.5 h-5/2 rounded-bl-2xl border-l border-b border-gray-200  px-15"></div>

        <div
          className="relative z-[2] rounded-2xl bg-white p-4 shadow-lg lg:mx-0 border border-primary/40 pt-6"
          data-testid="clp-standard"
        >
          <p className="absolute left-4 top-0 -translate-y-1/2 rounded-full bg-[#EFF0FF] px-5 py-1.5 text-sm font-bold text-primary">
            in 3 days
          </p>

          <div style={{ height: 500, width: 657 }}>
            {/* Header with Icon */}
            <div className="flex items-center gap-2">
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
                    {daysOfWeek.map((day) => (
                      <div key={day} className="w-10 group relative my-0.5">
                        <div className="flex h-full w-full items-center justify-center">{day}</div>
                      </div>
                    ))}
                  </div>
                  <hr className="opacity-50" />

                  {/* Dates Grid */}
                  <div className="mx-auto mt-1 grid w-full grid-cols-7 gap-1 rounded-md text-sm">
                    {monthDates.map((date) => (
                      <div key={date} className="relative">
                        <div
                          className={`flex h-10 items-center justify-center group relative my-0.5 rounded border ${
                            isToday(date)
                              ? "border-[#EEE0C1] bg-[#FFF7E9]"
                              : isVisaArrival(date)
                              ? "border-primary bg-primary text-white"
                              : "border-transparent"
                          }`}
                        >
                          <div className="flex h-full w-full items-center justify-center">{date}</div>

                          {isToday(date) && (
                            <div className="absolute -top-2.5 z-10 flex h-5 items-center rounded-full bg-white px-1.5 text-xs font-medium text-primary shadow-lg left-1.5">
                              <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                              <span className="pl-0.5">TODAY</span>
                            </div>
                          )}

                          {isVisaArrival(date) && (
                            <div className="absolute -top-2.5 z-10 flex h-5 items-center rounded-full bg-white px-1.5 text-xs font-medium text-primary shadow-lg left-1.5">
                              <svg
                                fill="none"
                                height="12"
                                viewBox="0 0 12 12"
                                width="12"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M4.29688 6.30412L5.21354 7.22078L7.27604 5.15828M4.37055 1.84082L2.974 2.4615C2.45744 2.69108 2.19915 2.80587 2.00976 2.98733C1.84235 3.14772 1.71435 3.34469 1.63577 3.56281C1.54688 3.80957 1.54688 4.09221 1.54688 4.6575L1.54688 6.88095C1.54688 7.50791 1.54688 7.82139 1.63329 8.10594C1.70979 8.35784 1.83521 8.5922 2.00238 8.79558C2.1912 9.02532 2.45203 9.19921 2.97369 9.54698L4.33886 10.4571C4.82062 10.7783 5.06151 10.9389 5.32186 11.0012C5.55195 11.0564 5.7918 11.0564 6.02189 11.0012C6.28225 10.9389 6.52313 10.7783 7.00489 10.4571L8.37006 9.54698C8.89172 9.19921 9.15255 9.02532 9.34138 8.79558C9.50854 8.5922 9.63396 8.35784 9.71046 8.10594C9.79688 7.82139 9.79688 7.50791 9.79688 6.88095L9.79688 4.6575C9.79688 4.09221 9.79688 3.80957 9.70798 3.56281C9.62941 3.34469 9.5014 3.14772 9.33399 2.98733C9.1446 2.80587 8.88632 2.69108 8.36975 2.4615L6.9732 1.84081C6.49399 1.62783 6.25439 1.52134 6.00533 1.47929C5.78459 1.44201 5.55916 1.44201 5.33842 1.47929C5.08936 1.52134 4.84976 1.62783 4.37055 1.84082Z"
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="1.2"
                                ></path>
                              </svg>
                              <span className="whitespace-nowrap pl-0.5">VISA ARRIVAL</span>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

                {/* Sidebar info */}
                <div className="w-full bg-gray-50 p-5 pt-2 lg:w-2/5">
                  <p className="border-b border-dashed py-4 text-gray-600">GOOD TO KNOW</p>

                  {/* Aerofly Info */}
                  <div className="mt-4 flex flex-row">
                    <span>
                      <svg
                        fill="none"
                        height="32"
                        viewBox="0 0 32 32"
                        width="32"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="16" cy="16" fill="#F3F8FF" r="15.5" stroke="#D2E0F7" />
                        <path
                          d="M14.7526 19.2143L13.4127 20.121C11.7924 21.2174 10.9823 21.7656 10.3097 21.7287C9.72388 21.6966 9.1817 21.4088 8.82675 20.9416C8.41927 20.4053 8.41927 19.4271 8.41927 17.4708L8.41927 14.5292C8.41927 12.5729 8.41927 11.5947 8.82675 11.0583C9.1817 10.5912 9.72388 10.3034 10.3097 10.2713C10.9823 10.2344 11.7924 10.7826 13.4127 11.879L14.7526 12.7857M21.9195 13.3498L19.746 11.879C18.1257 10.7826 17.3156 10.2344 16.6431 10.2713C16.0572 10.3034 15.515 10.5912 15.1601 11.0583C14.7526 11.5947 14.7526 12.5729 14.7526 14.5292L14.7526 17.4708C14.7526 19.4271 14.7526 20.4053 15.1601 20.9417C15.515 21.4088 16.0572 21.6966 16.6431 21.7287C17.3156 21.7656 18.1257 21.2174 19.746 20.121L21.9195 18.6502C23.2314 17.7624 23.8874 17.3185 24.1168 16.761C24.3174 16.2735 24.3174 15.7265 24.1168 15.239C23.8874 14.6815 23.2315 14.2376 21.9195 13.3498Z"
                          stroke="#85A5D7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                        />
                      </svg>
                    </span>
                    <div className="pl-2 pt-0.5 text-sm">
                      <p className="font-medium">
                        Aerofly on your Visa <span>!</span>
                      </p>
                      <p className="mt-0.5 text-xs text-gray-700">
                        Aerofly works with the authorities to get your visa on time!
                      </p>
                    </div>
                  </div>

                  {/* Public Holidays */}
                  <div className="mt-4 flex flex-row">
                    <span>
                      <svg
                        fill="none"
                        height="32"
                        viewBox="0 0 32 32"
                        width="32"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="16" cy="16" fill="#FDF3F2" r="15.5" stroke="#F6D1CE" />
                        <path
                          d="M11.333 10.6666V17.9999M11.333 10.6666V9.33325M11.333 10.6666L12.2127 10.4467C13.3569 10.1606 14.5678 10.3408 15.5792 10.9476V10.9476C16.6923 11.6155 18.0418 11.7637 19.2734 11.3531L21.333 10.6666V17.9999L19.2734 18.6865C18.0418 19.097 16.6923 18.9489 15.5792 18.2809V18.2809C14.5678 17.6741 13.3569 17.494 12.2127 17.78L11.333 17.9999M11.333 22.6666V17.9999"
                          stroke="#D11000"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeOpacity={0.5}
                          strokeWidth="1.5"
                        />
                      </svg>
                    </span>
                    <div className="pl-2 pt-0.5 text-sm">
                      <p className="font-medium">Public Holidays</p>
                      <p className="mt-0.5 text-xs text-gray-700">
                        We take into account public holidays observed in the country you are
                        traveling to.
                      </p>
                    </div>
                  </div>

                  {/* Weekends */}
                  <div className="mt-4 flex flex-row">
                    <span>
                      <svg
                        fill="none"
                        height="32"
                        viewBox="0 0 32 32"
                        width="32"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="16" cy="16" fill="#FFF7E9" r="15.5" stroke="#EEE0C1" />
                        <path
                          d="M21.333 16V15.3333C21.333 14.0934 21.333 13.4734 21.1967 12.9647C20.8268 11.5844 19.7487 10.5062 18.3683 10.1363C17.8596 10 17.2396 10 15.9997 10V10C14.7597 10 14.1397 10 13.6311 10.1363C12.2507 10.5062 11.1725 11.5844 10.8026 12.9647C10.6663 13.4734 10.6663 14.0934 10.6663 15.3333V16M9.33301 18V22M22.6663 18V22M18.6663 16V16C18.6663 15.38 18.6663 15.07 18.5982 14.8157C18.4133 14.1255 17.8742 13.5864 17.184 13.4015C16.9296 13.3333 16.6197 13.3333 15.9997 13.3333V13.3333C15.3797 13.3333 15.0697 13.3333 14.8154 13.4015C14.1252 13.5864 13.5861 14.1255 13.4012 14.8157C13.333 15.07 13.333 15.38 13.333 16V16M22.6663 20.6667V19.2C22.6663 18.0799 22.6663 17.5198 22.4484 17.092C22.2566 16.7157 21.9506 16.4097 21.5743 16.218C21.1465 16 20.5864 16 19.4663 16H12.533C11.4129 16 10.8529 16 10.425 16.218C10.0487 16.4097 9.74274 16.7157 9.55099 17.092C9.33301 17.5198 9.33301 18.0799 9.33301 19.2V20.6667H22.6663Z"
                          stroke="#A87D18"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeOpacity={0.7}
                          strokeWidth="1.5"
                        />
                      </svg>
                    </span>
                    <div className="pl-2 pt-0.5 text-sm">
                      <p className="font-medium">Weekends</p>
                      <p className="mt-0.5 text-xs text-gray-700">
                        Embassies are shut on Saturday & Sunday. Your visa cannot be
                        processed then.
                      </p>
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
