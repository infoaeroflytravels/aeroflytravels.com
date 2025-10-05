import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Info } from "lucide-react";

function GovernmentFeePopover() {
  return (
    <Popover className="relative">
      <Popover.Button className="flex items-center gap-1  text-black-900 font-semibold  underline focus:outline-none">
        Government Fee
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
              </div>
            </div>

            <p className="px-1 font-semibold">Government Fee</p>
            <p className="mt-2 px-1 text-sm text-gray-700">
              Fee charged by the embassy to process your visa. This includes all
              taxes and is directly paid to the government.
            </p>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}

export default GovernmentFeePopover;
