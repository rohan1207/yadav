import React, { useState } from "react";
import Lightbox from "../components/Lightbox";

const dummyImages = [
  "/dental1.webp",
  "/dental2.webp",
  "/dental3.webp",
  "/dental4.webp",
  "/dental5.webp",
  "/dental6.webp",
  "/dental7.webp",
  "/dental8.webp",
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(null);

  const openLightbox = (index) => setCurrentIndex(index);
  const closeLightbox = () => setCurrentIndex(null);
  const showNext = () =>
    setCurrentIndex((currentIndex + 1) % dummyImages.length);
  const showPrev = () =>
    setCurrentIndex(
      (currentIndex + dummyImages.length - 1) % dummyImages.length
    );

  return (
    <div className="min-h-screen bg-[#f8fafc] py-12 px-4">
      {/* Hero Banner */}
      <div className="relative bg-gradient-to-r from-[#0d3b66] to-[#64c4ed] text-white py-20 px-4 rounded-2xl mb-12 sm:mt-20 mt-5">
        <h1 className="text-4xl sm:text-5xl font-bold text-center">
          Our Moments
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-center text-lg">
          Explore the state-of-the-art facilities, patient experiences, and
          memorable moments at Ujwal Dental Clinic.
        </p>
      </div>
      <h2 className="text-3xl font-bold text-[#0d3b66] text-center mb-8">
        Gallery
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {dummyImages.map((src, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg shadow-lg cursor-pointer"
          >
            <img
              src={src}
              alt={`Gallery ${index + 1}`}
              className="object-cover w-full h-48 transform hover:scale-105 transition-transform duration-300"
              onClick={() => openLightbox(index)}
            />
          </div>
        ))}
      </div>
      {currentIndex !== null && (
        <Lightbox
          images={dummyImages}
          currentIndex={currentIndex}
          onClose={closeLightbox}
          onNext={showNext}
          onPrev={showPrev}
        />
      )}
    </div>
  );
};

export default Gallery;
