import React from "react";
import { motion } from "framer-motion";
import { Building, Users, Target, Award, Phone } from "lucide-react";
import about from "@/assets/images/about.jpg";

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.42, 0, 0.58, 1] } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

export function About() {
  return (
    <div className="pt-28 relative w-full min-h-screen font-sans overflow-hidden">
      {/* Hero Section */}
      <div
        className="relative h-[450px] sm:h-[650px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${about})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30"></div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="relative w-full text-center px-6"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white drop-shadow-lg mb-3">
            Welcome to Aerofly Travels
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto">
            Your trusted partner in creating unforgettable travel experiences
            since 2010
          </p>
        </motion.div>
      </div>

      {/* Company Overview */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-16 px-6"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div variants={fadeUp} className="order-2 md:order-1">
            <h2 className="text-3xl font-bold mb-6 text-blue-600">Our Story</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Founded in{" "}
              <span className="font-semibold text-blue-600">2010</span>, Aerofly
              Travels has grown from a small local agency to a leading name in
              the travel industry. With a strong focus on{" "}
              <span className="font-semibold">
                integrity, safety, and customer-first service
              </span>
              , we’ve been helping thousands of travelers explore the world with
              confidence.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Over the years, our dedication to excellence has earned us
              recognition and the trust of clients worldwide. Today, we continue
              to innovate, expand, and deliver exceptional travel experiences
              while keeping our values at the core.
            </p>
          </motion.div>
          <motion.div
            variants={fadeUp}
            className="order-1 md:order-2 relative group"
          >
            <img
              src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=2070&q=80"
              alt="Our Office"
              className="w-full h-80 sm:h-96 object-cover rounded-xl shadow-xl transform group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-black/10 rounded-xl opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white font-semibold text-xl">
              ✈️ Explore the World with Us
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="bg-blue-600 py-12 text-white"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {[
            { num: "15+", label: "Years Experience" },
            { num: "50K+", label: "Happy Customers" },
            { num: "200+", label: "Destinations" },
            { num: "100+", label: "Partners" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="hover:scale-110 transition-transform duration-300"
            >
              <h3 className="text-3xl font-bold">{stat.num}</h3>
              <p>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Values */}
      <div className="py-16 bg-gray-50 px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                icon: (
                  <Building className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                ),
                title: "Integrity",
                desc: "We conduct our business with the highest standards of ethics.",
              },
              {
                icon: (
                  <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                ),
                title: "Customer Focus",
                desc: "Your satisfaction and safety are our top priorities.",
              },
              {
                icon: (
                  <Target className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                ),
                title: "Innovation",
                desc: "We continuously evolve to provide the best travel solutions.",
              },
              {
                icon: (
                  <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                ),
                title: "Excellence",
                desc: "We strive for excellence in every service we provide.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-2xl transition hover:-translate-y-2"
              >
                {value.icon}
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Team Section */}
      <div className="py-16 px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Leadership Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[
              {
                name: "John Smith",
                role: "CEO & Founder",
                image:
                  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80",
              },
              {
                name: "Sarah Johnson",
                role: "Operations Director",
                image:
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
              },
              {
                name: "Michael Chen",
                role: "Head of Customer Experience",
                image:
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
              },
            ].map((member, i) => (
              <motion.div
                key={member.name}
                variants={fadeUp}
                className="text-center bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition hover:-translate-y-2"
              >
                <div className="relative w-40 h-40 mx-auto mb-4 overflow-hidden rounded-full shadow-md">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transform hover:scale-110 transition duration-500"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-gray-500">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* CTA */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 text-center"
      >
        <h2 className="text-3xl font-bold mb-4">
          Ready to Plan Your Next Adventure?
        </h2>
        <p className="mb-6">
          Let Aerofly Travels take care of the details while you focus on
          creating memories.
        </p>
        <button className="bg-white text-blue-700 px-6 py-3 rounded-full font-semibold shadow-md hover:bg-gray-100 transition flex items-center mx-auto">
          <Phone className="h-5 w-5 mr-2" />
          Contact Us Today
        </button>
      </motion.div>
    </div>
  );
}
