import { useState } from "react";
import { useInView } from "react-intersection-observer";
import thailand from "../assets/img/thailand.jpg";
import galleryBg from "../assets/images/gallary.jpg";
import manali2 from "../assets/trips/manali 2.png";
import jibhi2 from "../assets/trips/jibhi2.png";
import chopta2 from "../assets/trips/chopta2.png";
import kantal2 from "../assets/trips/kantal2.png";
import yulla2 from "../assets/trips/yulla2.png";
import kedarnath2 from "../assets/trips/kedarnath2.png";
import auli2 from "../assets/trips/auli2.png";

const Gallery = () => {
  const allImages = [
    thailand, thailand, thailand,
    manali2, jibhi2, chopta2, kantal2,
    yulla2, auli2, kedarnath2,
    thailand, thailand, thailand, thailand
  ];

  const [visibleCount, setVisibleCount] = useState(8);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const { ref, inView } = useInView({ threshold: 0 });

  // Infinite Scroll
  if (inView && visibleCount < allImages.length) {
    setTimeout(() => setVisibleCount((prev) => prev + 4), 300);
  }

  const openLightbox = (index: number) => {
    setSelectedImage(allImages[index]);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    setCurrentIndex(null);
  };

  const prevImage = () => {
    if (currentIndex !== null && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setSelectedImage(allImages[currentIndex - 1]);
    }
  };

  const nextImage = () => {
    if (currentIndex !== null && currentIndex < allImages.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedImage(allImages[currentIndex + 1]);
    }
  };

  return (
    <div className="relative w-full min-h-screen">
      {/* Hero Section */}
      <div 
        className="relative h-[300px] md:h-[500px] bg-cover bg-center"
        style={{ backgroundImage: `url(${galleryBg})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative min-h-[600px] w-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-3 capitalize">Our Gallery</h1>
            <p className="text-lg md:text-xl text-white">
              Discover the beauty of our moments
            </p>
          </div>
        </div>
      </div>
      
      {/* Masonry Gallery Section */}
<div className="relative w-full bg-white">
  <div className="w-full py-10 md:py-16 px-2 sm:px-4">
    <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-4 space-y-4">
      {allImages.slice(0, visibleCount).map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Gallery Image ${index}`}
          loading="lazy"
          className="w-full mb-4 rounded-lg cursor-pointer shadow-md transition-transform duration-300 hover:scale-105"
          onClick={() => openLightbox(index)}
        />
      ))}
    </div>

    {/* Infinite scroll trigger */}
    {visibleCount < allImages.length && (
      <div ref={ref} className="text-center py-6 text-gray-500">
        Loading more...
      </div>
    )}
  </div>
</div>


      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50 p-4">
          <button
            className="absolute top-4 right-4 bg-white text-black px-3 py-1 rounded-full text-lg font-bold"
            onClick={closeLightbox}
          >
            ✕
          </button>

          {currentIndex !== null && currentIndex > 0 && (
            <button
              className="absolute left-4 md:left-10 bg-white text-black px-3 py-2 rounded-full text-lg font-bold"
              onClick={prevImage}
            >
              ←
            </button>
          )}

          <img
            src={selectedImage}
            alt="Selected"
            className="max-w-full max-h-[80vh] rounded-lg"
          />

          {currentIndex !== null && currentIndex < allImages.length - 1 && (
            <button
              className="absolute right-4 md:right-10 bg-white text-black px-3 py-2 rounded-full text-lg font-bold"
              onClick={nextImage}
            >
              →
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Gallery;
