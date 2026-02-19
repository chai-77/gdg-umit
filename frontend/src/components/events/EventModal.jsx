import React from "react";

export default function EventModal({ event, onClose }) {
  if (!event) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <style>{`
        .modal-content::-webkit-scrollbar {
          width: 10px;
        }
        .modal-content::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.4);
        }
        .modal-content::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #dc2626, #b91c1c);
          border-radius: 5px;
          border: 2px solid rgba(0, 0, 0, 0.6);
        }
        .modal-content::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #ef4444, #dc2626);
          box-shadow: 0 0 10px rgba(220, 38, 38, 0.5);
        }
      `}</style>
      <div 
        className="modal-content bg-black border-2 border-gdg-red rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-8 border-b border-gdg-red/30">
          <div className="flex items-start justify-between gap-4 mb-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight">
              {event.title}
            </h2>
            <button
              onClick={onClose}
              className="flex-shrink-0 text-3xl sm:text-4xl text-white/60 hover:text-white transition leading-none"
            >
              ×
            </button>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-white/70 font-light mb-3">
            {event.date}
          </p>
          <div className={`inline-block px-4 py-2 rounded border text-xs sm:text-sm font-bold uppercase tracking-widest ${
            event.type === "upcoming" 
              ? "bg-gdg-green/20 text-gdg-green border-gdg-green" 
              : "bg-gdg-red/20 text-gdg-red border-gdg-red"
          }`}>
            {event.type === "upcoming" ? "Coming Soon" : "Past Event"}
          </div>
        </div>

        {/* Image */}
        {event.images?.[0] && (
          <div className="border-b border-gdg-red/30">
            <img
              src={event.images[0]}
              alt={event.title}
              className="w-full h-40 sm:h-56 md:h-64 object-cover"
            />
          </div>
        )}

        {/* Content */}
        <div className="p-4 sm:p-8">
          <p className="text-white/80 text-base sm:text-lg md:text-lg leading-relaxed mb-6 sm:mb-8 font-light">
            {event.summary}
          </p>

          {/* Action */}
          {event.link && (
            <a
              href={event.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 sm:px-8 py-2 sm:py-4 border-2 border-gdg-red text-gdg-red text-sm sm:text-lg font-bold uppercase tracking-wide hover:bg-gdg-red hover:text-black transition"
            >
              Learn More
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
