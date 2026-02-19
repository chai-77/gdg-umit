import React from "react";

const ToggleButtons = ({ selected, setSelected }) => {
    // Using 'w-full' and 'max-w' to keep buttons contained
    const base =
        "flex-1 py-3 px-2 text-sm md:text-lg font-black uppercase tracking-wide rounded-lg border-2 transition-all duration-200 whitespace-nowrap text-center";

    const active =
        "bg-black text-gdg-yellow border-gdg-yellow shadow-[4px_4px_0_0_#FBBC04]";

    const inactive =
        "bg-black text-white/70 border-white/20 hover:text-gdg-yellow hover:border-gdg-yellow hover:shadow-[4px_4px_0_0_#FBBC04]";

    return (
        <div className="flex gap-4 justify-center items-center mb-8 w-full max-w-[400px]">
            <button
                onClick={() => setSelected("Leads")}
                className={`${base} ${selected === "Leads" ? active : inactive}`}
            >
                Leads
            </button>

            <button
                onClick={() => setSelected("Workforce")}
                className={`${base} ${selected === "Workforce" ? active : inactive}`}
            >
                Workforce
            </button>
        </div>
    );
};

export default ToggleButtons;
