import React from "react";
import { Briefcase, GraduationCap, Heart, Clock } from "lucide-react";

export function Careers() {
  const openings = [
    {
      title: "Travel Consultant",
      department: "Sales",
      location: "New York",
      type: "Full-time",
      experience: "2-3 years",
    },
    {
      title: "Visa Processing Specialist",
      department: "Operations",
      location: "London",
      type: "Full-time",
      experience: "3-5 years",
    },
    {
      title: "Digital Marketing Manager",
      department: "Marketing",
      location: "Remote",
      type: "Full-time",
      experience: "4-6 years",
    },
  ];

  const benefits = [
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: "Career Growth",
      description: "Clear career progression paths and regular training opportunities",
    },
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "Learning & Development",
      description: "Access to industry certifications and skill development programs",
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Health Benefits",
      description: "Comprehensive health insurance for you and your family",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Work-Life Balance",
      description: "Flexible working hours and remote work options",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div
        className="relative h-72 sm:h-96 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2021&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">Join Our Team</h1>
            <p className="text-lg sm:text-xl text-white">Build your career with us</p>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">Why Work With Us?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="p-6 bg-white rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="text-blue-600 mb-3">{benefit.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Current Openings */}
      <div className="py-12 bg-white px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">Current Openings</h2>
        <div className="space-y-6">
          {openings.map((job) => (
            <div key={job.title} className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold mb-1">{job.title}</h3>
                  <p className="text-sm text-gray-600">Department: {job.department}</p>
                  <p className="text-sm text-gray-600">Location: {job.location}</p>
                  <p className="text-sm text-gray-600">Type: {job.type}</p>
                  <p className="text-sm text-gray-600">Experience: {job.experience}</p>
                </div>
                <button className="mt-4 sm:mt-0 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-sm">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Application Form */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">Apply Now</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                <input type="text" className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                <input type="text" className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input type="email" className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Position</label>
              <select className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500">
                <option value="">Select a position</option>
                {openings.map((job) => (
                  <option key={job.title} value={job.title}>
                    {job.title}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Cover Letter</label>
              <textarea rows={4} className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Resume/CV</label>
              <input type="file" className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500" />
            </div>

            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
