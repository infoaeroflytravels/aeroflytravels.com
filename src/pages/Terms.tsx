import React from 'react';
import { FileText, Shield, AlertCircle, HelpCircle } from 'lucide-react';
import tour from '../assets/images/tour.jpg';

export function Terms() {
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
            <h1 className="text-4xl font-bold text-white mb-4">Terms & Conditions </h1>
            <p className="text-xl text-white">
            Please read these terms carefully before using our services.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-6">
          {/* Quick Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            {[
              { icon: FileText, title: 'Booking Terms', desc: 'Understanding our booking and cancellation policies' },
              { icon: Shield, title: 'Privacy & Security', desc: 'How we protect your personal information' },
              { icon: AlertCircle, title: 'Liability', desc: 'Understanding our liability limitations' },
              { icon: HelpCircle, title: 'Support', desc: 'How to get help when you need it' },
            ].map(({ icon: Icon, title, desc }, index) => (
              <div key={index} className="bg-white p-5 rounded-lg shadow-md flex items-center space-x-4">
                <Icon className="h-8 w-8 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="text-gray-600 text-sm">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Detailed Terms */}
          <div className="bg-white rounded-lg shadow-md p-6 sm:p-8">
            {[
              { title: '1. Acceptance of Terms', content: "By accessing and using Aerofly Travels' services, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access our services." },
              {
                title: '2. Booking and Payments',
                sections: [
                  { subtitle: '2.1 Reservations', text: 'All reservations are subject to availability and confirmation. A booking is not confirmed until you receive a written confirmation from us.' },
                  { subtitle: '2.2 Payment Terms', text: 'Full payment is required at the time of booking unless otherwise specified. All prices are in the currency specified and include applicable taxes.' },
                  { subtitle: '2.3 Cancellation Policy', text: 'Cancellation policies vary by service type and provider. Specific cancellation terms will be provided at the time of booking.' },
                ],
              },
              {
                title: '3. Visa and Travel Documents',
                list: ['Valid passport with required validity period', 'Necessary visas and permits', 'Travel insurance documentation', 'Vaccination certificates where required'],
              },
              {
                title: '4. Liability',
                list: ['Actions or omissions of service providers', 'Force majeure events', 'Personal injury or property damage', 'Lost or delayed baggage'],
              },
              {
                title: '5. Changes and Modifications',
                content: 'Aerofly Travels may update or modify these terms and conditions at any time. Changes will be effective immediately upon posting to our website.',
                list: ['Prices and availability are subject to change without notice.', 'Modifications to bookings may be subject to fees and availability.', 'Cancellation policies vary depending on the service and may incur cancellation charges.', 'Refunds, if applicable, will be processed according to our refund policy.'],
              },
              { title: '6. Intellectual Property', content: 'All content on our website, including text, graphics, logos, and software, is the property of Aerofly Travels and is protected by copyright laws.' },
              {
                title: '7. Services',
                list: ['Aerofly Travels provides a wide range of travel services, including meet and assist, attestation and legalisation, onsite support, Indian E-Visa processing, etc.', 'Sightseeing tours, international tour packages, air tickets, hotels, cruise, train tickets, and travel insurance are also offered.'],
              },
              {
                title: '8. Customer Responsibilities',
                list: ['Customers must provide accurate information during booking.', 'Customers must adhere to the rules of airlines, hotels, and service providers.'],
              },
              {
                title: '9. Disputes',
                list: ['Any disputes or complaints should promptly be reported to Aerofly Travels for resolution.', 'Disputes not resolved amicably shall be subject to legal jurisdiction.'],
              },
              {
                title: '10. Changes to Terms',
                list: ['Aerofly Travels reserves the right to amend these terms at any time.', 'Customers should review the terms periodically for updates.'],
              },
              {
                title: '11. Contact Information',
                content: 'For questions about these terms, please contact us at:',
                contact: { email: 'legal@aeroflytravel.com', phone: '+91 8586980421', address: 'Delhi, India' },
              },
            ].map(({ title, content, sections, list, contact }, index) => (
              <section key={index} className="mb-6">
                <h2 className="text-xl sm:text-2xl font-bold mb-3">{title}</h2>
                {content && <p className="text-gray-600">{content}</p>}
                {sections && sections.map(({ subtitle, text }, i) => (
                  <div key={i} className="mt-3">
                    <h3 className="text-lg font-semibold">{subtitle}</h3>
                    <p className="text-gray-600">{text}</p>
                  </div>
                ))}
                {list && (
                  <ul className="list-disc list-inside text-gray-600 space-y-2 mt-2">
                    {list.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
                {contact && (
                  <div className="bg-gray-50 p-4 rounded-md mt-3">
                    <p className="text-gray-600">Email: {contact.email}</p>
                    <p className="text-gray-600">Phone: {contact.phone}</p>
                    <p className="text-gray-600">Address: {contact.address}</p>
                  </div>
                )}
              </section>
            ))}
          </div>

          {/* Last Updated */}
          <div className="mt-8 text-center text-gray-500">
            <p>Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
