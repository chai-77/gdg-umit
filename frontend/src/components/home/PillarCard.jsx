import React from 'react';

const colorMap = {
  blue: { text: "text-gdg-blue", border: "border-gdg-blue", bg: "bg-gdg-blue" },
  green: { text: "text-gdg-green", border: "border-gdg-green", bg: "bg-gdg-green" },
  red: { text: "text-gdg-red", border: "border-gdg-red", bg: "bg-gdg-red" },
  yellow: { text: "text-gdg-yellow", border: "border-gdg-yellow", bg: "bg-gdg-yellow" },
};

const PillarCard = ({ title, description, color }) => {
  const colors = colorMap[color];

  return (
    <div className="relative h-full">
      <div
        className={`
          h-full
          border-l-4 ${colors.border}
          bg-white/5 
          px-7 py-8 md:px-8 md:py-10
          transition-colors duration-300
          hover:bg-white/10
        `}
      >
        <h3 className={`text-2xl md:text-3xl font-black tracking-tight ${colors.text} mb-3`}>
          {title}
        </h3>

        <p className="text-white/60 text-sm md:text-base lg:text-lg font-light leading-relaxed">
          {description}
        </p>

        {/* Static accent line */}
        {/* <div className={`mt-6 h-1 w-full ${colors.bg} opacity-60`} /> */}
      </div>
    </div>
  );
};

export default PillarCard;
