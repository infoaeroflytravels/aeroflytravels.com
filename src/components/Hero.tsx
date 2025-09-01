import Heroo from "../assets/images/home.jpg";
import "../index.css";
import { useInView } from "react-intersection-observer";

export function Hero() {
  const handleScroll = () => {
    const section = document.getElementById("/packages");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const { ref: heroRef, inView: heroInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <img
        src={Heroo}
        alt="Travel with Aerofly"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content Section */}
      <div
        ref={heroRef}
        className={`relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-10 lg:px-16 transition-all duration-1000 
          ${heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
          <span className="block">Discover the World with</span>
          <span className="block text-[#2a9df4]">Aerofly Travels</span>
        </h1>

        <p className="mt-4 max-w-md sm:max-w-xl md:max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed">
          Your journey begins here. Book flights, apply for visas, and explore our curated tour packages.
        </p>

        {/* Button Section */}
        <div className="mt-6">
          <button
            onClick={handleScroll}
            className="bg-[#2a9df4] text-white px-6 sm:px-8 py-3 rounded-lg text-base sm:text-lg font-medium hover:bg-[#1e87d6] transition-colors shadow-lg"
          >
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
}
