import React, { useEffect, useState } from "react";
import Calendarr from "@/components/visacalender";

const VisaTimeline: React.FC = () => {
  const [openCard, setOpenCard] = useState<number | null>(null); // default open/selected
  const [visaDate, setVisaDate] = useState<string>("");
  const [daysLeft, setDaysLeft] = useState<number>(0);

  // Function to calculate +3 days
  const calculateVisaDetails = () => {
    const today = new Date();
    const visaArrivalDate = new Date(today);
    visaArrivalDate.setDate(today.getDate() + 3);

    const diffTime = visaArrivalDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    const formattedDate = visaArrivalDate.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "long",
    });

    setVisaDate(formattedDate);
    setDaysLeft(diffDays);
  };

  useEffect(() => {
    calculateVisaDetails();
    const interval = setInterval(calculateVisaDetails, 60000); // refresh every minute
    return () => clearInterval(interval);
  }, []);

  // handlers
  const handleToggle = (cardId: number) => {
    setOpenCard(openCard === cardId ? null : cardId);
  };

  const handleHoverIn = (cardId: number) => {
    setOpenCard(cardId);
  };

  const handleHoverOut = () => {
    setOpenCard(null);
  };

  return (
    <div className=" bg-white   p-6 rounded-2xl  shadow-xl border">
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

      {/* Vertical line */}
      <div className="-mt-2 ml-2.5 h-12 border-l border-gray-200"></div>

      {/* ====== CARD SECTION ====== */}
      <div className="flex flex-col gap-6">
        <VisaCard
          id={15}
          date={visaDate}
          daysLeft={daysLeft.toString()}
          isOpen={openCard === 15}
          onToggle={() => handleToggle(15)}
          onHoverIn={() => handleHoverIn(15)}
          onHoverOut={handleHoverOut}
        >
          <Calendarr />
        </VisaCard>
      </div>
    </div>
  );
};

/* ============ REUSABLE CARD COMPONENT ============ */
interface VisaCardProps {
  id: number;
  date: string;
  daysLeft: string;
  isOpen: boolean;
  onToggle: () => void;
  onHoverIn: () => void;
  onHoverOut: () => void;
  children?: React.ReactNode;
}

const VisaCard: React.FC<VisaCardProps> = ({
  date,
  daysLeft,
  isOpen,
  onToggle,
  onHoverIn,
  onHoverOut,
  children,
}) => (
  <div
    className="relative pl-6"
    onMouseEnter={onHoverIn}
    onMouseLeave={onHoverOut}
  >
    {/* Connector line */}
    <div className="absolute left-2.5 top-0 h-1/2 w-3.5 rounded-bl-2xl border-l border-b border-gray-200"></div>

    <div className="relative z-[2] rounded-2xl border border-primary/40 p-5 pl-4 pt-6 shadow-xl transition-all duration-300 hover:shadow-2xl">
      <p className="absolute left-4 top-0 -translate-y-1/2 rounded-full bg-[#EFF0FF] px-3 py-1.5 text-sm font-bold text-primary">
        in {daysLeft} days
      </p>

      <div style={{ height: 60 }}>
        <div className="flex items-center gap-2">
          {/* ✅ Circle indicator */}
          <div className="relative flex items-center justify-center">
            {isOpen && (
              <span className="absolute h-7 w-7 rounded-full bg-primary/30 animate-ping" />
            )}
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-primary"
            >
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
              <circle cx="12" cy="12" r="5" fill="currentColor" />
            </svg>
          </div>

          {/* ✅ Date only (no time) */}
          <p className="font-semibold md:text-lg">{date}</p>
        </div>

        {/* ===== View Timeline Button ===== */}
        <div className="relative w-full">
          <button
            onClick={onToggle}
            className="flex items-center gap-1 text-sm font-bold text-primary mt-3"
          >
            <span>View Timeline</span>
            <span
              className="text-primary transition-transform"
              style={{
                transform: isOpen ? "rotate(0deg)" : "rotate(180deg)",
              }}
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

          {/* Calendar shows on hover or toggle */}
          {isOpen && (
            <div className="mt-4 animate-fadeIn">
              {children}
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
);

export default VisaTimeline;
