import React from 'react';

interface TourPackageProps {
  title: string;
  description: string;
  pricing: string;
}

const VrindavanOneDayTourPage: React.FC = () => {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-[400px] flex items-center justify-center" style={{ backgroundImage: "url('/path-to-your-agra-image.jpg')" }}>
        <div className="bg-black bg-opacity-50 text-center text-white py-24 px-4">
          <h1 className="text-4xl font-bold">Agra One Day Tour Package</h1>
          <p className="mt-4 text-lg">Discover the iconic Taj Mahal and other attractions in Agra in a day</p>
        </div>
      </section>

      {/* About the Tour */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">About the Tour</h2>
          <p className="text-lg">
            Experience the rich cultural heritage of Agra in just one day. From the majestic Taj Mahal, one of the Seven Wonders of the World, to the historical Agra Fort, this tour lets you explore the best of the city.
          </p>
        </div>
      </section>

      {/* Tour Itinerary */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold mb-6 text-center">Tour Itinerary</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <h3 className="text-xl font-bold">Morning</h3>
              <p className="mt-4 text-gray-700">
                - Pickup from hotel or designated location <br />
                - Visit the iconic Taj Mahal, explore the history and architecture <br />
                - Visit the Mehtab Bagh for stunning views of the Taj Mahal across the Yamuna River
              </p>
            </div>
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <h3 className="text-xl font-bold">Afternoon</h3>
              <p className="mt-4 text-gray-700">
                - Visit the Agra Fort, the former residence of Mughal emperors <br />
                - Explore the local markets and enjoy some shopping <br />
                - Lunch at a local restaurant serving traditional Mughlai cuisine
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Inclusions */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Inclusions</h2>
          <ul className="list-disc text-lg text-left mx-auto max-w-3xl">
            <li>Round trip transportation (Private car or bus)</li>
            <li>Entrance fees to Taj Mahal, Agra Fort, and other attractions</li>
            <li>English-speaking guide</li>
            <li>Lunch at a local restaurant</li>
            <li>Complimentary water bottles</li>
          </ul>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-12 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Pricing</h2>
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <p className="text-lg font-bold mb-2">Per Person:</p>
            <p className="text-2xl text-blue-600">₹2,500</p>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Book Your Tour</h2>
          <a href="/book-now" className="bg-blue-600 text-white px-6 py-3 rounded-lg text-xl font-semibold hover:bg-blue-700 transition duration-300">
            Book Now
          </a>
        </div>
      </section>
    </div>
  );
}

export default VrindavanOneDayTourPage;
