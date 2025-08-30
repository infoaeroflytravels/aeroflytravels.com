import React from 'react';

// Define the props for the tour package
interface TourPackageProps {
  title: string;
  description: string;
  pricing: string;
  itinerary: {
    morning: string;
    afternoon: string;
  };
}

const TourPackage: React.FC<TourPackageProps> = ({ title, description, pricing, itinerary }) => {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[400px] flex items-center justify-center"
        style={{ backgroundImage: "url('/path-to-your-agra-image.jpg')" }}
      >
        <div className="bg-black bg-opacity-50 text-center text-white py-24 px-4">
          <h1 className="text-4xl font-bold">{title}</h1>
          <p className="mt-4 text-lg">{description}</p>
        </div>
      </section>

      {/* Tour Itinerary */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold mb-6 text-center">Tour Itinerary</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <h3 className="text-xl font-bold">Morning</h3>
              <p className="mt-4 text-gray-700">{itinerary.morning}</p>
            </div>
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <h3 className="text-xl font-bold">Afternoon</h3>
              <p className="mt-4 text-gray-700">{itinerary.afternoon}</p>
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
            <p className="text-2xl text-blue-600">{pricing}</p>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Book Your Tour</h2>
          <a
            href="/book-now"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg text-xl font-semibold hover:bg-blue-700 transition duration-300"
          >
            Book Now
          </a>
        </div>
      </section>
    </div>
  );
};

// Data for the Agra One Day Tour
const agraTourData: TourPackageProps = {
  title: "Agra One Day Tour Package",
  description:
    "Explore the Taj Mahal, Agra Fort, and other iconic sites in Agra with our one-day guided tour.",
  pricing: "₹2,500",
  itinerary: {
    morning: `- Pickup from hotel or designated location. 
            - Visit the iconic Taj Mahal and explore its history and architecture. 
            - Visit Mehtab Bagh for stunning views of the Taj Mahal across the Yamuna River.`,
    afternoon: `- Visit Agra Fort, the former residence of Mughal emperors.
            - Explore the local markets and enjoy shopping. 
            - Lunch at a local restaurant serving traditional Mughlai cuisine.`,
  },
};

const AgraTourPage = () => {
  return (
    <div>
      {/* Render the Tour Package with the data */}
      <TourPackage
        title={agraTourData.title}
        description={agraTourData.description}
        pricing={agraTourData.pricing}
        itinerary={agraTourData.itinerary}
      />
    </div>
  );
};

export default AgraTourPage;
