"use client";
import React, { useEffect, useState } from "react";
import Insurancepic1 from "@/assets/images/insurence1.jpg";
import Insurancepic2 from "@/assets/images/insurence2.jpg";
import Insurancepic3 from "@/assets/images/insurence3.jpg";
import Insurancepic4 from "@/assets/images/insurence4.jpg";

export default function HeroB({
  primary = "#002C5F",
  accent = "#CFA449",
}: { primary?: string; accent?: string }) {
  
  // ---- IMAGE SLIDER ----
  const images = [
    Insurancepic1,
    Insurancepic2,
    Insurancepic3,
    Insurancepic4,
    
    
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="relative overflow-hidden"
      style={{ background: primary }}
      aria-label="Hero B - Aerofly Travels"
    >
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-8 items-center">
        
        {/* Left Section */}
        <div className="text-white z-10">
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
            Travel Confidently with{" "}
            <span className="text-[var(--accent)]">Aerofly Travels</span>
          </h1>

          <p className="mt-4 text-white/90 max-w-xl">
            Premium travel insurance for families, students and corporates —
            global coverage, fast approvals and 24/7 support. Choose your
            destination and get an instant quote.
          </p>

          <div className="mt-6 flex gap-3 flex-wrap">
            <a
              href="#countries"
              className="inline-flex items-center gap-2 bg-white text-[var(--primary)] font-semibold px-5 py-3 rounded-full shadow hover:scale-[1.02] transition"
              style={{ color: primary }}
            >
              Explore Countries
            </a>

            <button className="inline-flex items-center gap-2 bg-transparent text-white border border-white/30 px-4 py-3 rounded-full">
              Learn More
            </button>
          </div>

          <div className="mt-6 flex flex-wrap gap-3 text-sm text-white/90">
            <div className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full" style={{ background: accent }} />
              180+ countries covered
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full" style={{ background: accent }} />
              24/7 support
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full" style={{ background: accent }} />
              Instant WhatsApp quotes
            </div>
          </div>
        </div>

        {/* Right Section: IMAGE SLIDER */}
        <div className="relative">
          <div
            className="rounded-3xl overflow-hidden shadow-2xl relative"
            style={{ boxShadow: "0 20px 50px rgba(0,0,0,0.35)" }}
          >
            <div className="relative w-full h-64 md:h-96 overflow-hidden">
              
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt="Travel slide"
                  className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
                    index === current ? "opacity-100" : "opacity-0"
                  }`}
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src =
                      "https://images.unsplash.com/photo-1532375810709-2c2f0a5f6ee5?auto=format&fit=crop&w=1400&q=60";
                  }}
                />
              ))}
            </div>

            <div className="p-5 bg-gradient-to-t from-black/40 to-transparent text-white absolute bottom-0 left-0 w-full">
              <p className="text-sm">Global reach • Local presence</p>
              <p className="text-lg font-semibold mt-2">
                Compare plans for any destination
              </p>
            </div>
          </div>
        </div>

      </div>

      <style>{`
        :root {
          --primary: ${primary};
          --accent: ${accent};
        }
      `}</style>
    </section>
  );
}
