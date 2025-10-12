import React from "react";

const AeroProtect: React.FC = () => {
  return (
    <div className="shadow-4xl mt-4 rounded-lg border border-gray-200 bg-white py-4 shadow-md">
      <div className="flex items-start px-3">
        <img
          alt="Aero-protect"
          loading="lazy"
          width={30}
          height={34}
          decoding="async"
          className="flex-shrink-0"
          src="https://media.atlys.com/b2c/clp/atlys-care/atlys-protect?updatedAt=1738055609978"
          style={{ color: "transparent" }}
        />

        <div className="w-full px-3">
          <p className="text-md font-semibold text-black">AeroProtect</p>
          <div className="flex flex-col gap-1 pt-1.5">
            <p className="text-xs text-[#455060]">
              If Visa Delayed —{" "}
              <span className="font-medium text-[#19212B]">No Aero Fee</span>
            </p>
            <div className="flex items-center gap-1.5">
              <p className="text-xs text-[#455060]">
                If Rejected —{" "}
                <span className="font-medium text-[#19212B]">
                  100% Refund
                </span>
              </p>
            </div>
          </div>
        </div>

        <p className="text-sm font-semibold text-[#189D85]">Free</p>
      </div>
    </div>
  );
};

export default AeroProtect;
