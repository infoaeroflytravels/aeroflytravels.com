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
import review1 from "../assets/gallery/1.jpg";
import review2 from "../assets/gallery/2.jpg";
import review3 from "../assets/gallery/3.jpg";
import review4 from "../assets/gallery/4.jpg";
import review5 from "../assets/gallery/5.jpg";
import review6 from "../assets/gallery/6.jpg";
import review7 from "../assets/gallery/7.jpg";
import review8 from "../assets/gallery/8.jpg";
import review9 from "../assets/gallery/9.jpg";
import review10 from "../assets/gallery/10.jpg";    
import review11 from "../assets/gallery/11.jpg";
import review12 from "../assets/gallery/12.jpg";
import review13 from "../assets/gallery/13.jpg";
import review14 from "../assets/gallery/14.jpg";
import review15 from "../assets/gallery/15.jpg";
import review16 from "../assets/gallery/16.jpg";
import review17 from "../assets/gallery/17.jpg";
import review18 from "../assets/gallery/18.jpg";
import review19 from "../assets/gallery/19.jpg";
import review20 from "../assets/gallery/20.jpg";
import review21 from "../assets/gallery/21.jpg";
import review22 from "../assets/gallery/22.jpg";
import review23 from "../assets/gallery/23.jpg";
import review24 from "../assets/gallery/24.jpg";
import review25 from "../assets/gallery/25.jpg";
import review26 from "../assets/gallery/26.jpg";
import review27 from "../assets/gallery/27.jpg";
import review28 from "../assets/gallery/28.jpg";
import review29 from "../assets/gallery/29.jpg";
import review30 from "../assets/gallery/30.jpg";
import review31 from "../assets/gallery/31.jpg";
import review32 from "../assets/gallery/32.jpg";
import review33 from "../assets/gallery/33.jpg";
import review34 from "../assets/gallery/34.jpg";
import review35 from "../assets/gallery/35.jpg";
import review36 from "../assets/gallery/36.jpg";
import review37 from "../assets/gallery/37.jpg";
import review38 from "../assets/gallery/38.jpg";
import review39 from "../assets/gallery/39.jpg";
import review40 from "../assets/gallery/40.jpg";

const Gallery = () => {
  const allImages = [
    kantal2, yulla2, review1, review2, review3, review28, review29, review30,
    review4, review5, review6, review7, review8, review9, review10,review11, review12, review13,
    review14, review15,  manali2, jibhi2, chopta2, review16, review17,  review20, review26, review27,
    review21, review22, auli2, kedarnath2,thailand, review23, review18, review19, review24, review25,
    review31, review32, review33, review34, review35, review36, review37, review38, review39, review40,
    // Add more image URLs as needed
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
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative min-h-[400px] w-full flex items-center justify-center">
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
