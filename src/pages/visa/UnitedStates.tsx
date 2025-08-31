import { FC } from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const UnitedStatesVisa: FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-12 rounded-b-3xl">
        <h1 className="text-3xl font-bold mb-2">United States Visa</h1>
        <p className="text-lg">Apply in ~17 minutes</p>
        <button className="mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl shadow-md">
          Check Required Documents
        </button>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 p-6">
        {/* Left Column */}
        <div className="col-span-2 space-y-8">
          {/* Visa Info */}
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-xl font-semibold mb-4">Visa Information</h2>
            <ul className="grid grid-cols-2 gap-4">
              <li><strong>Type:</strong> Single Entry</li>
              <li><strong>Length of Stay:</strong> 30 days</li>
              <li><strong>Validity:</strong> 60 days</li>
              <li><strong>Process:</strong> Fastest Application</li>
            </ul>
          </div>

          {/* What is Visa */}
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-xl font-semibold mb-4">What is the United States Visa?</h2>
            <p className="text-gray-700">
              The United States Visa is an official travel document required for most visitors
              to enter the USA. It allows travelers to legally enter and stay in the country
              for tourism, business, or transit purposes.
            </p>
          </div>

          {/* Why Choose Us */}
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-xl font-semibold mb-4">Why Aerofly?</h2>
            <ul className="space-y-3 text-gray-700">
              <li>✅ Skip long immigration lines</li>
              <li>✅ Hassle-free application</li>
              <li>✅ Guaranteed delivery before travel</li>
              <li>✅ 100% refund guarantee</li>
            </ul>
          </div>

          {/* FAQ */}
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible>
              <AccordionItem value="q1">
                <AccordionTrigger>General Information</AccordionTrigger>
                <AccordionContent>
                  A visa is mandatory for travelers entering the United States unless exempt by nationality.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q2">
                <AccordionTrigger>Eligibility & Requirements</AccordionTrigger>
                <AccordionContent>
                  Passport valid for 6 months, return ticket, etc.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Reviews */}
          <div className="bg-white p-6 rounded-2xl shadow-md text-center">
            <h2 className="text-xl font-semibold mb-2">Reviews</h2>
            <p className="text-4xl font-bold text-yellow-500">4.7★</p>
            <p className="text-gray-600">Loved by thousands of travelers</p>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-lg font-semibold mb-4">Price Breakdown</h2>
            <ul className="space-y-2 text-gray-700">
              <li>Government Fee: <strong>₹1</strong></li>
              <li>Service Fee: <strong>₹99</strong></li>
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

export default UnitedStatesVisa;
