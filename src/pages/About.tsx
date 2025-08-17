import React from 'react';
import { Building, Users, Target, Award } from 'lucide-react';
import about from "../assets/images/about.jpg";

export function About() {
  return (
    <div className="relative w-full min-h-screen">
      {/* Hero Section */}
      <div 
        className="relative h-[400px] sm:h-[500px] bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${about})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative w-full text-center px-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">Welcome to Aerofly Travels</h1>
          <p className="text-lg sm:text-xl text-white">Your trusted partner in creating unforgettable travel experiences since 2010</p>
        </div>
      </div>

      {/* Company Overview */}
      <div className="py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-600 mb-3">
              Founded in 2010, Aerofly Travels has grown from a small local agency to a leading name in the travel industry...
            </p>
            <p className="text-gray-600 mb-3">
              Our commitment to excellence and customer satisfaction has earned us numerous industry accolades...
            </p>
            <p className="text-gray-600">
              Today, we continue to innovate and expand our services, keeping our core values at heart.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <img
              src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="Our Office"
              className="w-full h-72 sm:h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="py-12 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <Building className="h-12 w-12 text-blue-600 mx-auto mb-4" />, title: 'Integrity', desc: 'We conduct our business with the highest standards of ethics.' },
              { icon: <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />, title: 'Customer Focus', desc: 'Your satisfaction and safety are our top priorities.' },
              { icon: <Target className="h-12 w-12 text-blue-600 mx-auto mb-4" />, title: 'Innovation', desc: 'We continuously evolve to provide the best travel solutions.' },
              { icon: <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />, title: 'Excellence', desc: 'We strive for excellence in every service we provide.' },
            ].map((value, index) => (
              <div key={index} className="text-center">
                {value.icon}
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">Our Leadership Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                name: 'John Smith',
                role: 'CEO & Founder',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
              },
              {
                name: 'Sarah Johnson',
                role: 'Operations Director',
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
              },
              {
                name: 'Michael Chen',
                role: 'Head of Customer Experience',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
              },
            ].map((member) => (
              <div key={member.name} className="text-center">
                <div className="relative w-40 h-40 mx-auto mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
