import React from "react";

const ToggleButtons = ({ selected, setSelected }) => {
  const getButtonClasses = (name) => {
    const baseClasses =
      "px-8 py-2 font-black transition-all duration-300 ease-in-out border-4 transform";
    const selectedClasses =
      "bg-[#202124] text-[#FBBC04] border-[#FBBC04] shadow-[1px_1px_0_0_#FBBC04] ";
    const unselectedClasses =
      "bg-[#202124] text-white border-[#202124] hover:shadow-[8px_8px_0_0_black] hover:-translate-y-[10px]";

    return name === selected
      ? `${baseClasses} ${selectedClasses}`
      : `${baseClasses} ${unselectedClasses}`;
  };

  return (
    <div className="flex font2 text-3xl pb-5 gap-4 justify-center items-center mb-4">
      <button className={getButtonClasses("Leads")} onClick={() => setSelected("Leads")}>
        Leads
      </button>

      <button className={getButtonClasses("Workforce")} onClick={() => setSelected("Workforce")}>
        Workforce
      </button>
    </div>
  );
};

export default ToggleButtons;
