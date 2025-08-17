import "./FlipCard.css";

interface FlipCardProps {
  title: string;
  description: string;
  frontImage: string;
  backImage: string;
  link?: string; // ✅ new prop for redirection
  tripDetails?: string; // Optional prop for trip details link
  sendQuery?: string; // Optional prop for sending query link
}

export function FlipCard({
  title,
  description,
  frontImage,
  backImage,
  tripDetails,
  sendQuery,
  link, // ✅ destructure the new prop
}: FlipCardProps) {
  const Wrapper = link ? "a" : "div";

  return (
    <div className="flex flex-col items-center">
      {/* Card */}
      <Wrapper
        {...(link
          ? { href: link, target: "_blank", rel: "noopener noreferrer" }
          : {})}
        className="card cursor-pointer block"
      >
        <div className="content">
          {/* Back side */}
          <div className="back">
            <img src={backImage} alt={`${title} back`} className="card-image" />
          </div>

          {/* Front side */}
          <div className="front">
            <img
              src={frontImage}
              alt={`${title} front`}
              className="card-image"
            />
            <div className="glass">
              <small className="badge">Upcoming</small>
              <div className="description">
                <div className="title">
                  <strong>{title}</strong>
                </div>
                <p className="card-footer">{description}</p>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>

      {/* Button below card */}
{link && (
  <div className="flex space-x-3 mt-3">
    <a
      href={tripDetails}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
    >
     Trip Details
    </a>
    <a
      href={sendQuery}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block px-4 py-2 rounded-md transition text-white hover:bg-[#000000ff]"
  style={{ backgroundColor: "#0fb0c5ff" }}
    >
      Send Query
    </a>
  </div>
)}

    </div>
  );
}
