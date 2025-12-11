import React from "react";

const EventCard = ({ title, date, description, image }) => {
  return (
    <div className="bg-[#1A1A1A] rounded-xl shadow-md p-5 transition-transform hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10 duration-300 border border-slate-700 w-full max-w-md">

      {/* Event Image */}
      <div className="w-full h-44 rounded-lg overflow-hidden mb-4">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      <h2 className="text-xl font-bold text-white">{title}</h2>
      <p className="text-sm text-gray-400 mt-1">{date}</p>

      <p className="text-gray-300 mt-3 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default EventCard;
