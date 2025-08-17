import React from 'react';
import { Car, Hotel, Umbrella, Plane, Train, Shield, ArchiveRestore, User, Handshake, HeartHandshake, Scale } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import service from '../assets/images/as.jpg'; // Adjust the path as necessary

export function OtherServices() {
  const navigate = useNavigate();
  const services = [
    { icon: <Car className="h-10 w-10 md:h-12 md:w-12" />, title: "Car Rentals", description: "Explore destinations at your own pace with our wide range of car rental options.", features: ["Wide range of vehicles", "Competitive rates", "24/7 roadside assistance", "Flexible pickup and drop-off"] },
    { icon: <Hotel className="h-10 w-10 md:h-12 md:w-12" />, title: "Hotel Bookings", description: "Find the perfect accommodation for your stay, from luxury hotels to cozy apartments.", features: ["Best price guarantee", "Worldwide coverage", "Instant confirmation", "Free cancellation options"] },
    { icon: <Umbrella className="h-10 w-10 md:h-12 md:w-12" />, title: "Travel Insurance", description: "Protect your journey with comprehensive travel insurance coverage.", features: ["Medical coverage", "Trip cancellation protection", "Lost baggage compensation", "24/7 emergency assistance"] },
    { icon: <Plane className="h-10 w-10 md:h-12 md:w-12" />, title: "Airport Transfers", description: "Reliable and comfortable airport transfer services worldwide.", features: ["Meet & greet service", "Professional drivers", "Flight tracking", "Door-to-door service"] },
    { icon: <Train className="h-10 w-10 md:h-12 md:w-12" />, title: "Rail Bookings", description: "Book train tickets for scenic rail journeys across the globe.", features: ["International rail networks", "Scenic routes", "First-class options", "Rail passes available"] },
    { icon: <Shield className="h-10 w-10 md:h-12 md:w-12" />, title: "Travel Assistance", description: "24/7 support for all your travel needs and emergencies.", features: ["Emergency support", "Travel documentation help", "Local assistance", "Concierge services"] },
    { icon: <ArchiveRestore className="h-10 w-10 md:h-12 md:w-12" />, title: "Visa Facilitation", description: "Expert guidance and support for all your visa application needs.", features: ["Application Assistance", "Document Verification", "Appointment Scheduling", "Tracking & Updates", "Personalized Support"] },
    { icon: <User className="h-10 w-10 md:h-12 md:w-12" />, title: "Online Visa Forms", description: "Simplified and seamless online visa application process.", features: ["User-Friendly Forms", "Guided Assistance", "Secure Document Upload", "Instant Status Updates", "24/7 Support"] },
    { icon: <Handshake className="h-10 w-10 md:h-12 md:w-12" />, title: "Meeting and Assistance", description: "Seamless coordination and personalized support for your travel needs.", features: ["Airport Meet & Assist", "Fast-Track Immigration", "Baggage Handling", "Lounge Access"] },
    { icon: <Scale className="h-10 w-10 md:h-12 md:w-12" />, title: "Attestation and Legalisation", description: "Our visa experts specialize in the systematic attestation and legalisation of various documents.", features: ["Document Attestation", "Apostille Services", "Notary Certification", "Embassy & MOFA Attestation"] },
    { icon: <HeartHandshake className="h-10 w-10 md:h-12 md:w-12" />, title: "Onsite Support & Implant", description: "Experience the pinnacle of visa facilitation with our Onsite Support & Implant service.", features: ["Onsite Visa Assistance", "Corporate Implant Services", "Document Collection & Submission", "Real-Time Updates", "Tailored Solutions"] },
    { icon: <User className="h-10 w-10 md:h-12 md:w-12" />, title: "Indian E-Visa", description: "Our expert team streamlines travel to India with expert facilitation of Indian E-Visas.", features: ["Easy Online Application", "Multiple Visa Categories", "Local assistance", "Fast Processing"] }
  ];

  return (
    <div className="relative w-full min-h-screen">
      {/* Hero Section */}
      <div 
        className="relative h-[400px] md:h-[600px] bg-cover bg-center"
        style={{ backgroundImage: `url(${service})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative min-h-[400px] md:min-h-[600px] w-full flex items-center justify-center text-center px-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">Additional Services</h1>
            <p className="text-lg md:text-xl text-white">Comprehensive travel solutions to enhance your journey</p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-5 md:p-6 hover:shadow-lg transition-shadow">
              <div className="mb-3 text-blue-500 flex items-center">
                {service.icon}
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm md:text-base mb-4">{service.description}</p>
              <ul className="space-y-1 text-sm">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="https://api.whatsapp.com/send?phone=91858698042&text=Hello%20I%20am%20interested%20in%20your%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 w-full block text-center text-white py-2 rounded-md text-sm md:text-base transition-colors bg-blue-500 hover:bg-blue-700"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white py-12 md:py-16 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Need Help Planning Your Trip?</h2>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto mb-6">
            Our travel experts are here to assist you in creating the perfect travel experience with our comprehensive services.
          </p>
          <button 
            className="text-white px-6 py-2 md:px-8 md:py-3 rounded-md bg-blue-500 hover:bg-blue-700 transition-colors text-sm md:text-base"
            onClick={() => navigate('/contact')}
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}
//             <li>Service providers (e.g., airlines, hotels)</li>