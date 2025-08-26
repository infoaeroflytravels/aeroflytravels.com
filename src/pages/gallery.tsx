

import { useState } from "react";
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
  const images = [ thailand, thailand, thailand, manali2, jibhi2, chopta2, kantal2, yulla2, auli2, kedarnath2, thailand, thailand,thailand, thailand, ]; // Replace with actual image URLs

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImage(images[index]);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    setCurrentIndex(null);
  };

  const prevImage = () => {
    if (currentIndex !== null && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setSelectedImage(images[currentIndex - 1]);
    }
  };

  const nextImage = () => {
    if (currentIndex !== null && currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedImage(images[currentIndex + 1]);
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
      
      {/* Gallery Section */}
      <div className="relative w-full max-h-screen">
      <div className="max-w-5xl mx-10 py-10 md:py-16 px-4">
        <div className="columns-4 sm:columns-5 gap-4 space-y-4">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Gallery Image ${index}`}
              className="w-full h-auto rounded-lg cursor-pointer shadow-md transition-transform transform hover:scale-105"
              onClick={() => openLightbox(index)}
            />
          ))}
        </div>
      </div>

      {/* Lightbox (Modal) */}
      {selectedImage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50 p-4">
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 bg-white text-black px-3 py-1 rounded-full text-lg font-bold"
            onClick={closeLightbox}
          >
            ✕
          </button>

          {/* Previous Image Button */}
          {currentIndex !== null && currentIndex > 0 && (
            <button
              className="absolute left-4 md:left-10 bg-white text-black px-3 py-2 rounded-full text-lg font-bold"
              onClick={prevImage}
            >
              ←
            </button>
          )}

          {/* Image Display */}
          <img
            src={selectedImage}
            alt="Selected"
            className="max-w-full max-h-[80vh] rounded-lg"
          />

          {/* Next Image Button */}
          {currentIndex !== null && currentIndex < images.length - 1 && (
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

    </div>
  );
};
export default Gallery;

