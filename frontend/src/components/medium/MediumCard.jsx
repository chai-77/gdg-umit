import React from "react";

const MediumCard = ({ title, author, date, link, image }) => {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block border border-white/10 bg-gdg-black2/50 transition-all duration-300 hover:border-gdg-green flex flex-col h-full"
    >
      {/* IMAGE CONTAINER - Increased height to h-64 or h-72 for better visibility */}
      <div className=" overflow-hidden border-b border-white/10">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center transition-all duration-500 scale-100 group-hover:scale-105"
        />
      </div>

      {/* TEXT CONTENT */}
      <div className="p-6 flex flex-col flex-1">
        <p className="text-gdg-green text-[10px] tracking-widest font-black uppercase mb-2">
          Medium Post
        </p>
        <h3 className="text-white text-xl font-bold mb-4 leading-tight">
          {title}
        </h3>
        
        <div className="mt-auto flex flex-col gap-1">
          <p className="text-white/40 text-xs">
            BY <span className="text-white/80">{author.toUpperCase()}</span>
          </p>
          <p className="text-white/40 text-xs">{formattedDate.toUpperCase()}</p>
        </div>
      </div>

      {/* HOVER ACCENT */}
      {/* <div className="h-1 w-0 bg-gdg-green transition-all duration-500 group-hover:w-full" /> */}
    </a>
  );
};

export default MediumCard;