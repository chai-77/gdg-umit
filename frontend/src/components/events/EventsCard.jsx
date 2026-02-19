import React from "react";

export default function EventsCard({ title, date, type, summary, link, images = [], onReadMore }) {
  // color coding by type
  const typeColors = {
    upcoming: "bg-gdg-green/20 text-gdg-green border-gdg-green",
    past: "bg-gdg-red/20 text-gdg-red border-gdg-red",
  };

  return (
    <div className="group flex flex-col border border-white/10 bg-black/40 backdrop-blur overflow-hidden transition-all duration-300 hover:border-gdg-red hover:bg-black/60">
      
      {/* IMAGE CLICKABLE */}
      {images[0] ? (
        <a href={link} target="_blank" rel="noopener noreferrer" className="block relative overflow-hidden">
          <img
            src={images[0]}
            alt={title}
            className="w-full h-56 object-cover group-hover:scale-105 transition duration-300"
          />
          {/* <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300" /> */}
        </a>
      ) : (
        <div className="w-full h-56 flex items-center justify-center bg-gradient-to-br from-white/5 to-white/10 text-white/40 text-lg font-light">
          No Image
        </div>
      )}

      {/* CONTENT */}
      <div className="p-4 sm:p-6 md:p-8 flex flex-col gap-3 sm:gap-4 flex-1">
        {/* Type Badge */}
        <div className={`inline-block w-fit px-4 py-2 rounded border text-sm font-bold uppercase tracking-widest ${typeColors[type] || "text-white/70"}`}>
          {type === "upcoming" ? "Coming Soon" : "Past Event"}
        </div>

        <h3 className="font-mono font-black text-xl sm:text-2xl md:text-3xl leading-tight text-white">
          {title}
        </h3>

        <p className="text-base md:text-lg text-white/70 font-light">
          {date}
        </p>

        {/* SUMMARY - truncated */}
        <p className="text-white/60 text-sm sm:text-base md:text-lg leading-relaxed font-light flex-1 line-clamp-2">
          {summary}
        </p>

        {/* ACTION */}
        <div className="flex items-center gap-3 pt-4">
          <button
            onClick={onReadMore}
            className="text-sm md:text-base text-gdg-red font-mono font-bold uppercase tracking-wide hover:text-gdg-yellow transition"
          >
            Read more
          </button>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto text-sm md:text-base px-4 py-2 border border-gdg-red text-gdg-red hover:bg-gdg-red hover:text-black transition font-mono font-bold"
            >
              Learn More
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
