import React, { useState } from "react";

const EventsCard = ({ title, date, type, summary, link, images = [] }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-[#1a1a1a] border border-slate-700 overflow-hidden transition-all duration-300 hover:border-red-500 hover:-translate-y-1 flex flex-col w-full max-w-4xl mx-auto mb-8"
    >
      {/* Image Section */}
      {images.length > 0 ? (
        <div className="relative w-full aspect-[16/9] overflow-hidden">
          <img
            src={images[currentImage]}
            alt={`${title} - ${currentImage + 1}`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  prevImage();
                }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded"
              >
                ◀
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  nextImage();
                }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded"
              >
                ▶
              </button>
            </>
          )}
        </div>
      ) : (
        <div className="w-full aspect-[16/9] bg-red-800 flex items-center justify-center text-white text-lg">
          No Image
        </div>
      )}

      {/* Content Section */}
      <div className="p-8 flex flex-col flex-1 justify-between">
        <div>
          <h3 className="text-white font-extrabold text-3xl group-hover:text-red-500 transition-colors">
            {title}
          </h3>
          <p className="text-gray-400 text-base mt-2">
            <span className="font-semibold text-red-500">Date:</span> {date}
          </p>
          <p className="text-gray-400 text-base mt-1">
            <span className="font-semibold text-red-500">Type:</span> {type}
          </p>
          <p className="text-gray-300 text-base mt-4">{summary}</p>
        </div>

        {/* Bottom Accent Bar */}
        <div className="mt-6 h-[2px] w-full bg-red-500"></div>
      </div>
    </a>
  );
};

export default EventsCard;
