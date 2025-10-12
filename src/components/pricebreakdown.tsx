import React from "react";
import VisaBanner from "@/components/visabanner";
import AeroProtect from "@/components/aeroprotect";

const PriceBreakdown: React.FC = () => {
  return (
    <div className="relative w-full space-y-6">
      <VisaBanner />
        
      <div className="pt-16 relative flex h-full w-full flex-col place-items-center justify-center gap-8 rounded-2xl border bg-white border-t">
        <div className="relative z-[2] w-full select-none px-2">
          <div className="transition w-full rounded-xl">
            <div className="flex cursor-pointer flex-row items-center gap-2 px-2">
              <p className="mb-0 font-semibold">Price Breakdown</p>
            </div>

            <div className="w-full rounded-xl bg-white">
              <div className="w-full px-3">
                {/* Government Fee Row */}
                <div className="flex flex-row items-center py-1.5">
                  <span>
                    <svg
                      fill="none"
                      height="20"
                      viewBox="0 0 24 24"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22 11C22 10.0707 22 9.60603 21.9231 9.21964C21.6075 7.63288 20.3671 6.39249 18.7804 6.07686C18.394 6 17.9293 6 17 6H2V15.6C2 17.8402 2 18.9603 2.43597 19.816C2.81947 20.5686 3.43139 21.1805 4.18404 21.564C5.03968 22 6.15979 22 8.4 22H17C17.9293 22 18.394 22 18.7804 21.9231C20.3671 21.6075 21.6075 20.3671 21.9231 18.7804C22 18.394 22 17.9293 22 17V17H21C19.3431 17 18 15.6569 18 14C18 12.3431 19.3431 11 21 11H22V11Z"
                        fill="#2F384C"
                        opacity="0.12"
                      />
                      <path
                        d="M2 4V17.2C2 18.8802 2 19.7202 2.32698 20.362C2.6146 20.9265 3.07354 21.3854 3.63803 21.673C4.27976 22 5.11984 22 6.8 22H17.2C18.8802 22 19.7202 22 20.362 21.673C20.9265 21.3854 21.3854 20.9265 21.673 20.362C22 19.7202 22 18.8802 22 17.2V10.8C22 9.11984 22 8.27976 21.673 7.63803C21.3854 7.07354 20.9265 6.6146 20.362 6.32698C19.7202 6 18.8802 6 17.2 6H12M22 11H21.5C19.8431 11 18.5 12.3431 18.5 14V14C18.5 15.6569 19.8431 17 21.5 17H22M17 6L15.92 4.56C15.216 3.62134 14.864 3.15201 14.4179 2.8135C14.0228 2.5137 13.5754 2.28999 13.0985 2.15378C12.56 2 11.9733 2 10.8 2H4C2.89543 2 2 2.89543 2 4V4C2 5.10457 2.89543 6 4 6H17Z"
                        stroke="#2F384C"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </span>

                  <div className="relative px-2">
                    <button className="outline-none underline" type="button">
                      Government fee
                    </button>
                  </div>

                  <span className="flex flex-1" />
                  <span className="font-semibold">
                    ₹6,750<span className="font-normal"> × 1</span>
                  </span>
                </div>

                {/* Aero Fee Row */}
                <div className="flex flex-row items-center py-1.5">
                  <span className="text-primary">
                    <svg
                      fill="none"
                      height="20"
                      viewBox="0 0 24 24"
                      width="20"
                    >
                      <style>
                        {`@keyframes check {from{stroke-dashoffset: 100;}to{stroke-dashoffset: 0;}}`}
                      </style>
                      <path
                        d="M3 8.11937C3 6.99026 3 6.42571 3.17756 5.93283C3.33451 5.49715 3.59019 5.10373 3.92457 4.78336C4.30286 4.42093 4.81875 4.19164 5.85055 3.73307L9.40073 2.15522C10.3579 1.72982 10.8365 1.51711 11.334 1.43311C11.7749 1.35865 12.2251 1.35865 12.666 1.43311C13.1635 1.51711 13.6421 1.72982 14.5993 2.15522L18.1495 3.73307C19.1812 4.19164 19.6971 4.42093 20.0754 4.78336C20.4098 5.10373 20.6655 5.49715 20.8224 5.93283C21 6.42571 21 6.99026 21 8.11937V13.5748C21 14.8271 21 15.4532 20.8274 16.0216C20.6746 16.5247 20.4241 16.9928 20.0902 17.3991C19.713 17.858 19.192 18.2053 18.1501 18.8999L14.6626 21.2249C13.7003 21.8664 13.2192 22.1872 12.6991 22.3118C12.2395 22.422 11.7605 22.422 11.3009 22.3118C10.7808 22.1872 10.2997 21.8664 9.33744 21.2249L5.84992 18.8999C4.80796 18.2053 4.28697 17.858 3.90982 17.3991C3.57592 16.9928 3.32541 16.5247 3.1726 16.0216C3 15.4532 3 14.8271 3 13.5748V8.11937Z"
                        fill="rgba(80, 87, 234,0.1)"
                        opacity="1"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M9.215 12.052l1.822 1.805 3.748-3.714"
                        stroke="currentColor"
                        strokeDasharray="100"
                        strokeDashoffset="0"
                        strokeLinecap="round"
                        strokeWidth="1.5"
                        style={{
                          animation:
                            "1.5s cubic-bezier(0.99, -0.1, 0.01, 1.02) 0s 1 normal none running check",
                        }}
                      />
                    </svg>
                  </span>

                  <div className="relative px-2">
                    <button className="outline-none underline" type="button">
                      Aero Fees
                    </button>
                  </div>

                  <span className="flex flex-1" />

                  <div className="relative whitespace-nowrap">
                    <p>₹1,000</p>
                    <div className="absolute left-1/2 top-8 -ml-2 h-4 w-4 rotate-45 rounded-[2px] bg-[#F4F4FE]" />
                  </div>

                  <span className="whitespace-nowrap pl-2 font-semibold">
                    ₹0 <span>for now</span>
                  </span>
                </div>

                {/* Note */}
                <div className="relative z-[1] mt-2 rounded-lg bg-[#F4F4FE] px-1 py-1.5 text-center text-sm tracking-tight text-primary">
                  <p className="shimmer font-medium">
                    <span>No advance payment. </span>
                    <span>Pay only when you get your </span>
                    <span>visa</span>
                  </p>
                </div>
              </div>

              {/* Total */}
              <div className="relative mt-3 flex w-full flex-row items-center gap-2 px-3">
                <p className="flex-1 text-lg font-semibold text-black">
                  Total Amount
                </p>
                <div className="relative flex flex-col items-end">
                  <p className="clp-visa-total-cost text-lg font-bold text-black">
                    ₹6,750
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom section */}
          <div className="mt-2 w-full px-4 pb-6">
            <div className="relative w-full">
              <div className="rounded-xl border transition-all duration-300 border-transparent p-0 bg-white">
                <div className="flex flex-col overflow-hidden transition-[height] duration-300 h-0 gap-3">
                  <p className="text-center font-medium text-gray-900 text-sm">
                    We found an existing application
                  </p>
                  <button className="w-full rounded-xl border border-[#0060CA] bg-[#0060CA] font-medium text-white shadow-md py-2 text-sm">
                    Resume Application
                  </button>
                </div>
                <button className="relative w-full cursor-pointer rounded-xl border font-medium shadow-md transition-colors duration-300 border-primary bg-primary text-white">
                  <div className="mx-1 my-2">
                    <span>Start Application</span>
                  </div>
                </button>
              </div>
            </div>         
          </div>
        </div>
      </div>
      <AeroProtect />
    </div>
  );
};

export default PriceBreakdown;
