import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import contact from "@/assets/images/contact.jpg"; // Adjust the path as necessary

export function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    // Check if all required fields are filled
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      setStatus("Please fill in all required fields.");
      return;
    }

    try {
      const response = await fetch("https://serverr-lac.vercel.app/api/contact", {
        method: "POST", // Ensure the method is POST
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("Message sent successfully!");
        // Clear the form fields after submission
        setFormData({ firstName: "", lastName: "", email: "", subject: "", message: "" });
      } else {
        setStatus(`Failed to send message. Error: ${data.error || 'Unknown error'}`);
      }
    } catch (error) {
      setStatus("Error sending message. Check your network and try again.");
    }
  };

  return (
    <div className="relative w-full min-h-screen">
      {/* Hero Section */}
      <div
        className="relative h-[300px] md:h-[500px] bg-cover bg-center"
        style={{ backgroundImage: `url(${contact})` }}
      >
        
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative flex items-center justify-center text-center px-4 min-h-[300px] md:min-h-[500px]">
          <div>
            <h1 className="text-2xl md:text-4xl font-bold text-white mb-3 capitalize">Contact Us</h1>
            <p className="text-lg md:text-xl text-white">We're here to help with all your travel needs</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 text-center lg:text-left">
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>

              <div className="space-y-6">
                <div className="flex items-center lg:items-start">
                  <Phone className="h-6 w-6 text-[#2a9df4] mr-3" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-gray-600">+91 8586980421</p>
                    <p className="text-gray-600">+91 98997 53663</p>
                  </div>
                </div>

                <div className="flex items-center lg:items-start">
                  <Mail className="h-6 w-6 text-[#2a9df4] mr-3" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-600">info@aeroflytravel.com</p>
                    <p className="text-gray-600">aerofly.del@outlook.com</p>
                  </div>
                </div>

                <div className="flex items-center lg:items-start">
                  <MapPin className="h-6 w-6 text-[#2a9df4] mr-3" />
                  <div>
                    <h3 className="font-semibold">Address</h3>
                    <p className="text-gray-600">Delhi, India</p>
                  </div>
                </div>

                <div className="flex items-center lg:items-start">
                  <Clock className="h-6 w-6 text-[#2a9df4] mr-3" />
                  <div>
                    <h3 className="font-semibold">Business Hours</h3>
                    <p className="text-gray-600">
                      Mon - Fri: 9:00 AM - 6:00 PM
                      <br />
                      Sat: 10:00 AM - 4:00 PM
                      <br />
                      Sun: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#2a9df4] text-white py-3 px-6 rounded-md text-lg hover:bg-[#1e87d6] transition"
                >
                  Send Message
                </button>
              </form>

              {/* Status Message */}
              {status && <p className="mt-4 text-center text-gray-700">{status}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
