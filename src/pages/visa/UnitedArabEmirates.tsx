import { FC } from "react";

const UAEVisa: FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-12 rounded-b-3xl">
        <h1 className="text-3xl font-bold mb-2">United Arab Emirates Visa</h1>
        <p className="text-lg">UAE eVisa in ~17 minutes</p>
        <button className="mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl shadow-md">
          Check Required Documents
        </button>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 p-6">
        <div className="col-span-2 space-y-8">
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-xl font-semibold mb-4">What is UAE Visa?</h2>
            <p className="text-gray-700">
              The UAE eVisa is a mandatory digital document for travelers visiting the Emirates.
              It ensures hassle-free entry and replaces traditional paper forms.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-lg font-semibold mb-4">Price Breakdown</h2>
            <ul className="space-y-2 text-gray-700">
              <li>Government Fee: <strong>₹10</strong></li>
              <li>Service Fee: <strong>₹90</strong></li>
              <li className="font-bold text-lg">Total: ₹100</li>
            </ul>
            <button className="mt-4 w-full py-3 bg-blue-600 text-white font-semibold rounded-xl">
              Start Application
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UAEVisa;
