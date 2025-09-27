import { Shield, Star, Clock, Award, Quote } from "lucide-react";
import IATA from "@/assets/logo/iata.svg";
import ADTOI from "@/assets/logo/ADTOI.svg";
import TAAI from "@/assets/logo/taai.svg";
import USgovLogo from "@/assets/logo/USgov.png";
import ItlayGov from "@/assets/logo/itlay.png";
import iato from "@/assets/logo/iato.svg";
import tafi from "@/assets/logo/tafi.svg";
import OTOAI from "@/assets/logo/otoai.svg";
import IncredibleIndia from "@/assets/logo/Incredible-India-300x70.png";
import MinistryofTourism from "@/assets/logo/mti.svg";
import ISO from "@/assets/logo/iso.svg";
import german from "@/assets/logo/iso.svg";
import saudia from "@/assets/logo/saudia.png";
import Thai from "@/assets/logo/thai.png";
import singapore from "@/assets/logo/singapore.png";
import united from "@/assets/logo/united.png";
import af from "@/assets/logo/af.png";
import jw from "@/assets/logo/jw.png";
import itc from "@/assets/logo/itc.svg";
import { FlipCard } from "./FlipCard";

import manali from "@/assets/trips/manali.jpg";
import manali2 from "@/assets/trips/manali 2.png";
import jibhi1 from "@/assets/trips/jibhi1.jpg";
import jibhi2 from "@/assets/trips/jibhi2.png";
import chopta1 from "@/assets/trips/chopta1.jpg";
import chopta2 from "@/assets/trips/chopta2.png";
import kantal1 from "@/assets/trips/kantal1.png";
import kantal2 from "@/assets/trips/kantal2.png";
import yulla1 from "@/assets/trips/yulla1.avif";
import yulla2 from "@/assets/trips/yulla2.png";
import kedarnath1 from "@/assets/trips/kedarnath1.jpg";
import kedarnath2 from "@/assets/trips/kedarnath2.png";
import auli1 from "@/assets/trips/auli1.jpg";
import auli2 from "@/assets/trips/auli2.png";
import rishikesh1 from "@/assets/trips/rishikesh1.png";
import rishikesh2 from "@/assets/trips/rishikesh2.avif";
import kantalimg  from "@/assets/images/kantal trek.jpg";
import kashmir from "@/assets/images/kashmir tour.jpg";
import business from "@/assets/images/business.webp";
import honeymoon from "@/assets/images/honemoon.jpg";
import ajeet from "@/assets/images/ajeet.gif";
import shilpi from "@/assets/images/shilpi.jpg";







/**
 * TrustSection component displays a section with partner logos,
 * key services, and customer testimonials, optimized for mobile responsiveness.
 */
export function TrustSection() {
  const partners = [
    { name: "IATA", logo: IATA },
    { name: "ADTOI", logo: ADTOI },
    { name: "TAAI", logo: TAAI },
    { name: "US Gov", logo: USgovLogo },
    { name: "Italy Gov", logo: ItlayGov },
    { name: "IATO", logo: iato },
    { name: "TAFI", logo: tafi },
    { name: "OTOAI", logo: OTOAI },
    { name: "Incredible India", logo: IncredibleIndia },
    { name: "Ministry of Tourism", logo: MinistryofTourism },
    { name: "ISO", logo: ISO },
    { name: "German Gov", logo: german },
    { name: "saudia", logo: saudia },
    { name: "Thai", logo: Thai },
    { name: "eu", logo: "https://europa.eu/youreurope/citizens/images/logos/youreurope-logo.svg" },
    { name: "singapore", logo: singapore },
    { name: "united", logo: united },
    { name: "af", logo: af },
    { name: "jw", logo: jw },
    { name: "itc", logo: itc },
  ];

  const testimonials: any[] = [{
      id: 1,
      name: "Rajesh Kumar",
      role: "Group Tour Organizer",
      image: business,
      content:
      "Organizing group tours has never been easier. Aerofly's team handles everything professionally, from bookings to last-minute changes. Outstanding service!",
      rating: 5,
    },
    {
      id: 2,
      name: "Priya Patel",
      role: "Honeymoon Tour",
      image:honeymoon,
      content:
      "Our honeymoon was perfect thanks to Aerofly Travels. They crafted a romantic itinerary with amazing experiences. Every detail was taken care of!",
      rating: 4,
    },
    {
      id: 3,
      name: "Vikram Malhotra",
      role: "Kantal Tour",
      image: kantalimg,
      content:
      "Kantal was a dream come true! The trip was well-organized, and the scenic beauty was breathtaking. Aerofly's team was always available to assist us. Highly recommend!",
      rating: 4,
    },
    {
      id: 4, 
      name: "Rahul Shamra",
      role: "Kashmir Tour",
      image: kashmir, 
      content:
       "An unforgettable journey through Spiti! Aerofly handled everything perfectly - from permits to accommodations. The Key Monastery visit and stargazing at Kibber were highlights. Highly recommend for adventure seekers!",
      rating: 3,
    },
    {
      id: 5,
      name: "Ajeet kumbal",
      role: "Yulla Kanda Tour",
      image: ajeet,
      content:
       "Yulla Kanda was a breathtaking experience! The trek was well-planned, and the views were stunning. Aerofly's team was knowledgeable and supportive throughout the journey. A must-do for nature lovers!",
      rating: 5,
    },
    {
      id: 6,
      name: "Shilpi Awasti",
      role: "Sissu Tour",
      image: shilpi,
      content:
       "Our Sissu adventure with Aerofly was just out of this world! The whole trip was planned to the T, and we didn't have to worry about a thing. The views of the snow-covered mountains were mesmerizing and the small homestay gave such cozy vibes. The team was friendly and always ready to help. Sissu has a piece of my heart now!",
      rating: 4,
    },/* ... same testimonials array ... */];

  return (
    <div className="container mx-auto bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Key Services Section */}
        <div className="col-span-full">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12">
            {[
              { icon: Shield, title: "Secure Booking", desc: "100% secure payment" },
              { icon: Star, title: "Best Price", desc: "Guaranteed low rates" },
              { icon: Clock, title: "24/7 Support", desc: "Round the clock assistance" },
              { icon: Award, title: "Trusted Agency", desc: "Years of experience" },
            ].map((service, idx) => (
              <div key={idx} className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
                <service.icon className="h-10 w-10 text-blue-600" />
                <h3 className="mt-2 text-lg font-medium">{service.title}</h3>
                <p className="text-sm text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Authorizing Partners Section */}
        <div className="col-span-full bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-bold mb-6 text-center">Authorizing Partners</h2>
          <div className="relative overflow-hidden w-full">
            <div className="flex w-max animate-scroll">
              {partners.concat(partners).map((partner, index) => (
                <div
                  key={index}
                  className={`flex-none mx-4 flex items-center justify-center ${
                    partner.name === "Thai" ? "w-54 h-28" : "w-28 h-16"
                  }`}
                >
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="h-full object-contain brightness-110 contrast-110" 
                    loading="lazy" 
                    decoding="async" 
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FlipCard Section */}
<div className="col-span-full bg-white rounded-lg shadow-sm p-6">
  <h2 className="text-2xl font-bold text-center mb-6">Upcoming Trips</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
    
    <FlipCard 
      title="Manali Sissu Kasol" 
      backImage={manali2}
      description="Book flights to destinations worldwide" 
      frontImage={manali}
      link="/nppm/manali-sissu-kasol"
      tripDetails="https://drive.google.com/file/d/1SMebRpb2kONSNSuQl_a1PW_23eRUX3v4/view?usp=sharing"
      sendQuery="/nppm/flights"
      
    />

    <FlipCard 
      title="Jibhi & Tirthan Valley" 
      backImage={jibhi2}
      description="Book flights to destinations worldwide" 
      frontImage={jibhi1} 
      link="/nppm/jibhi-tirthan-valley"
      tripDetails="https://drive.google.com/file/d/1eXL1AWhT_eZ9w0dNl88PJnk8H8-4rMks/view?usp=sharing"
      sendQuery="/nppm/flights"
    />

    <FlipCard 
      title="Chopta - Tungnath Trek" 
      backImage={chopta2}
      description="Book flights to destinations worldwide" 
      frontImage={chopta1} 
      link="/nppm/chopta-tungnath-trek"
      tripDetails="https://drive.google.com/file/d/1cZqr1RopGvANW-aLkr4o2AG2cayWJhRK/view?usp=sharing"
      sendQuery="/nppm/flights"
    />

    <FlipCard 
      title="Kanatal - Tehri Lake Package" 
      backImage={kantal2}
      description="Book flights to destinations worldwide" 
      frontImage={kantal1} 
      link="/nppm/kanatal-tehri-lake-package"
    />
     <FlipCard 
      title="Yulla Kanda Trek" 
      backImage={yulla2}
      description="Book flights to destinations worldwide" 
      frontImage={yulla1} 
      link="/nppm/yulla-kanda-trek"
    />
     <FlipCard 
      title="Kedarnath Yatra" 
      backImage={kedarnath2}
      description="Book flights to destinations worldwide" 
      frontImage={kedarnath1} 
      link="/nppm/kedarnath-yatra"
    />
     <FlipCard 
      title="Auli & Joshimath" 
      backImage={auli2}
      description="Book flights to destinations worldwide" 
      frontImage={auli1} 
      link="/nppm/auli-joshimath"
    />
     <FlipCard 
      title="Rishikesh Rafting Trip" 
      backImage={rishikesh2}
      description="Book flights to destinations worldwide" 
      frontImage={rishikesh1} 
      link="/nppm/rishikesh-rafting-trip"
    />

  </div>
</div>


        {/* Testimonials Section */}
        <div className="col-span-full bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-bold mb-6 text-center">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-x-auto">
            {testimonials.slice(0,6).map((testimonial) => (
              <div key={testimonial.id} className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex items-center space-x-4 mb-4">
                  <img src={testimonial.image} alt={testimonial.name} className="w-14 h-14 rounded-full object-cover" />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <Quote className="h-6 w-6 text-blue-600 mb-4" />
                <p className="text-gray-600 italic">{testimonial.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
      `}</style>
    </div>
  );
}
