import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logoo from "@/assets/img/LOGO12.png";
import aero from "@/assets/img/aero.png";

export function Navbar() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navTextColor = "#00e0fd";

  return (
    <header>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 shadow-md "bg-[#d9ff00d9]" : "bg-grey"
        }`}
      >
        <div className="max-w-full mx-auto px-6 sm:px-8">
          <div className="flex justify-between h-20 sm:h-24 items-center">
            {/* ✅ Logo */}
            <Link to="/" className="flex items-center space-x-3 sm:space-x-6">
              <img
                src={logoo}
                alt="Aerofly Logo"
                className="h-14 sm:h-20 w-auto object-contain"
              />
              <img
                src={aero}
                alt="Aerofly Text Logo"
                className="h-14 sm:h-20 w-auto object-contain"
              />
            </Link>

            {/* ✅ Desktop Nav */}
            <ul className="hidden md:flex space-x-6 lg:space-x-10">
              <li>
                <Link
                  to="/"
                  className="px-4 py-2 font-semibold transition-colors"
                  style={{ color: navTextColor }}
                >
                  Home
                </Link>
              </li>

              {/* ✅ Services Dropdown (desktop) */}
              <li
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
                onClick={() => setIsServicesOpen(false)}
              >
                <button
                  className="px-4 py-0 font-semibold transition-colors"
                  style={{ color: navTextColor }}
                >
                  Services
                </button>

                {isServicesOpen && (
  <div
    className="absolute left-0 mt-2 bg-white/10 backdrop-blur-md border border-white/20 
               rounded-xl shadow-xl z-[600] animate-fadeSlide p-2 flex flex-col space-y-2"
  >
    <Link
      to="/flights"
      className="flex items-center px-3 py-2 text-white hover:bg-white/20 rounded-lg transition"
    >
      <span className="mr-2">✈</span> Flights
    </Link>
    <Link
      to="/packages"
      className="flex items-center px-3 py-2 text-white hover:bg-white/20 rounded-lg transition"
    >
      <span className="mr-2">🌍</span> Tours
    </Link>
    <Link
      to="/visas"
      className="flex items-center px-3 py-2 text-white hover:bg-white/20 rounded-lg transition"
    >
      <span className="mr-2">🛂</span> Visa
    </Link>
    <Link
      to="/Other-Services"
      className="flex items-center px-3 py-2 text-white hover:bg-white/20 rounded-lg transition"
    >
      <span className="mr-2">🛡</span> Insurance
    </Link>
  </div>
)}

              </li>

              <li>
                <Link
                  to="/about"
                  className="px-4 py-2 font-semibold transition-colors"
                  style={{ color: navTextColor }}
                >
                  About
                </Link>
              </li>
              <li> 
                <Link
                  to= "/gallery/"
                  className="px-4 py-2 font-semibold transition-colors"
                  style={{ color: navTextColor }}
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="px-4 py-2 font-semibold transition-colors"
                  style={{ color: navTextColor }}
                >
                  Contact
                </Link>
              </li>
            </ul>

            {/* ✅ Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-gray-300 hover:text-white focus:outline-none"
                aria-label="Toggle Menu"
              >
                {isMobileMenuOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* ✅ Mobile Dropdown Menu with animation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            isMobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-black/90 backdrop-blur-md text-white px-6 py-4 space-y-3">
            <Link
              to="/"
              className="block hover:text-cyan-400"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>

            {/* ✅ Mobile Services (expandable) */}
            <div>
              <button
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className="w-full text-left flex justify-between items-center hover:text-cyan-400"
              >
                <span>Services</span>
                <span>{isMobileServicesOpen ? "▲" : "▼"}</span>
              </button>

              <div
                className={`pl-4 mt-2 space-y-2 overflow-hidden transition-all duration-500 ${
                  isMobileServicesOpen
                    ? "max-h-60 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <Link
                  to="/flights"
                  className="block hover:text-cyan-400"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsMobileServicesOpen(false);
                  }}
                >
                  ✈ Flights
                </Link>
                <Link
                  to="/packages"
                  className="block hover:text-cyan-400"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsMobileServicesOpen(false);
                  }}
                >
                  🌍 Tours
                </Link>
                <Link
                  to="/visas"
                  className="block hover:text-cyan-400"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsMobileServicesOpen(false);
                  }}
                >
                  🛂 Visa
                </Link>
                <Link
                  to="/Other-Services"
                  className="block hover:text-cyan-400"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsMobileServicesOpen(false);
                  }}
                >
                  🛡 Insurance
                </Link>
              </div>
            </div>

            <Link
              to="/about"
              className="block hover:text-cyan-400"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block hover:text-cyan-400"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>

        {/* ✅ Animations */}
        <style>
          {`
            @keyframes fadeSlide {
              0% { opacity: 0; transform: translateY(-10px); }
              100% { opacity: 1; transform: translateY(0); }
            }
            .animate-fadeSlide {
              animation: fadeSlide 0.3s ease-out;
            }
          `}
        </style>
      </nav>
    </header>
  );
}
