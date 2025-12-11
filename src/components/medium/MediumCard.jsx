import React from "react";

const MediumCard = ({ title, author, date, link, image }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-[#1a1a1a] rounded-xl overflow-hidden border border-slate-700 hover:border-green-400 transition-all duration-300 hover:-translate-y-1"
    >
      {/* Thumbnail */}
      <div className="h-48 w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-white font-semibold text-lg group-hover:text-green-400 transition-colors">
          {title}
        </h3>

        <p className="text-gray-400 text-sm mt-2">
          {author} • {date}
        </p>
      </div>
    </a>
  );
};

export default MediumCard;
