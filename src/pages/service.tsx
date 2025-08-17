import { useParams } from "react-router-dom";

const ServiceDetails: React.FC = () => {
  const { title } = useParams<{ title: string }>();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-3xl bg-white p-6 sm:p-8 rounded-lg shadow-md text-center">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4">
          {title ? title : "Service Details"}
        </h1>
        <p className="text-gray-600 text-sm sm:text-base">
          {title
            ? `More details about ${title}. Here, you can provide in-depth information about this service.`
            : "No service title provided. Please select a service."}
        </p>
      </div>
    </div>
  );
};

export default ServiceDetails;
