import React from "react";

const MediumCard = ({ title, author, date, link, image }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-[#1a1a1a] border border-slate-700 overflow-hidden flex flex-col transition-all duration-300 hover:border-green-400 hover:-translate-y-1"
    >
      {/* Thumbnail */}
      <div className="h-64 w-full overflow-hidden relative">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1 justify-between">
        <div>
          <h3 className="text-white font-extrabold text-xl group-hover:text-green-400 transition-colors">
            {title}
          </h3>

          <p className="text-gray-400 text-sm mt-2">
            <span className="font-semibold text-green-400">Author:</span> {author}
          </p>
          <p className="text-gray-400 text-sm mt-1">
            <span className="font-semibold text-green-400">Published:</span> {date}
          </p>
        </div>

        {/* Bottom Accent Bar  */}
        <div className="mt-5 h-[1px] w-full bg-green-400"></div>
      </div>
    </a>
  );
};

export default MediumCard;
