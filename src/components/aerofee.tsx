import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Info } from "lucide-react";

function AeroFeePopover() {
  return (
    <Popover className="relative">
      <Popover.Button className="flex items-center gap-1  text-black-900 font-semibold  underline focus:outline-none">
        Aero Fee
        <Info className="w-4 h-4" />
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute left-0 z-20 mt-2 w-64 rounded-2xl border bg-white p-4 shadow-2xl md:left-auto">
          <div className="flex flex-col items-start">
            <div className="mb-3 rounded-full bg-blue-50 p-2">
              <div className="flex items-center gap-2">
                    <svg
                      fill="none"
                      height="25"
                      viewBox="0 0 24 24"
                      width="25"
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
              </div>
            </div>

            <p className="px-1 font-semibold">Aero Fee</p>
            <p className="mt-2 px-1 text-sm text-gray-700">
               <span>Aero platform and service fee.</span>
               <span> You pay this only when we fulfil our on-time guarantee.</span>
            </p>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}

export default AeroFeePopover;
