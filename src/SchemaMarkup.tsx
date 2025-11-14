import React from "react";

const SchemaMarkup = () => {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Rudraksh Sharma",
        jobTitle: "Founder & CEO",
        affiliation: {
          "@type": "Organization",
          name: "Aerofly Travels"
        },
        url: "https://aeroflytravels.github.io/en-IN",
        sameAs: [
          "https://linkedin.com/in/rudrakshsharma",
          "https://instagram.com/aeroflyytravels",
          "https://facebook.com/aeroflytravels"
        ]
      })
    }} />
  );
};

export default SchemaMarkup;
