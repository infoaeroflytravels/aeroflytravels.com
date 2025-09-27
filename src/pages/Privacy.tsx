import React from 'react';
import tour from "@/assets/images/tour.jpg";

export function Privacy() {
  return (
    <div className="relative w-full min-h-screen">
      {/* Hero Section */}
      <div
        className="relative h-[600px] bg-cover bg-center"
        style={{ backgroundImage: `url(${tour})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative min-h-[600px] w-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
            <p className="text-xl text-white">
              Your privacy is important to us. Please read our policy carefully.
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-12 px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6 sm:p-8">
          <section className="mb-6">
            <h2 className="text-2xl font-bold mb-3">Introduction</h2>
            <p className="text-gray-600">
              At Aerofly Travels, we take your privacy seriously. This Privacy Policy explains how we collect, use, 
              disclose, and safeguard your information. By accessing or using our services, you agree to these terms.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-bold mb-3">Information We Collect</h2>
            <h3 className="text-lg font-semibold mb-2">Personal Information</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Name and contact information</li>
              <li>Passport details</li>
              <li>Travel preferences and history</li>
              <li>Payment information</li>
              <li>Communication preferences</li>
            </ul>

            <h3 className="text-lg font-semibold mt-4 mb-2">Technical Information</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>IP address</li>
              <li>Browser type</li>
              <li>Device information</li>
              <li>Cookies and usage data</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-bold mb-3">How We Use Your Information</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>To process your travel bookings and reservations</li>
              <li>To communicate with you about your bookings</li>
              <li>To send marketing communications (with your consent)</li>
              <li>To improve our services and website</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-bold mb-3">Information Sharing</h2>
            <p className="text-gray-600">
              We may share your information with:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Airlines and travel providers to fulfill your bookings</li>
              <li>Payment processors for secure transactions</li>
              <li>Legal authorities when required by law</li>
              <li>Service providers assisting in our operations</li>
              <li>Other third parties with your consent</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-bold mb-3">Data Security</h2>
            <p className="text-gray-600">
              We implement appropriate security measures, including:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1 mt-2">
              <li>SSL encryption for secure transactions</li>
              <li>Firewalls and intrusion detection systems</li>
              <li>Regular security audits</li>
            </ul>
            <p className="text-gray-600 mt-2">
              However, no method of transmission over the Internet is 100% secure. While we take precautions, we cannot 
              guarantee absolute security.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-bold mb-3">Your Rights</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Withdraw consent for marketing communications</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-bold mb-3">Contact Us</h2>
            <p className="text-gray-600">
              If you have any questions, reach out to us at:
            </p>
            <div className="bg-gray-50 p-4 rounded-md mt-3">
              <p className="text-gray-600">Email: privacy@aeroflytravel.com</p>
              <p className="text-gray-600">Phone: +91 8586980421</p>
              <p className="text-gray-600">Address: Delhi, India</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">Updates to This Policy</h2>
            <p className="text-gray-600">
              We may update this Privacy Policy from time to time. The latest version will always be accessible on our website.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
