import React from "react";

const ToggleButtons = ({ selected, setSelected }) => {
  const getButtonClasses = (name) => {
    const base =
      "px-8 py-2 font-black text-2xl rounded-lg transition-all duration-200 border-4";

    const selectedClasses =
      "bg-black text-[#FBBC04] border-[#FBBC04] shadow-[3px_3px_0_0_#FBBC04]";

    const unselectedClasses =
      "bg-black text-white border-[#2a2a2a] hover:border-[#FBBC04] hover:text-[#FBBC04] hover:shadow-[3px_3px_0_0_#FBBC04] hover:-translate-y-1";

    return name === selected ? `${base} ${selectedClasses}` : `${base} ${unselectedClasses}`;
  };

  return (
    <div className="flex font2 text-3xl pb-5 gap-6 justify-center items-center mb-4">
      <button
        className={getButtonClasses("Leads")}
        onClick={() => setSelected("Leads")}
      >
        Leads
      </button>

      <button
        className={getButtonClasses("Workforce")}
        onClick={() => setSelected("Workforce")}
      >
        Workforce
      </button>
    </div>
  );
};

export default ToggleButtons;
