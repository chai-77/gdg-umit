import React, { useRef } from "react";
import gsap from "gsap";
import ToggleButtons from "./ToggleButtons";

const words = ["MEET", "THE", "TEAM"];
const colors = [
    "border-gdg-blue",
    "border-gdg-red",
    "border-gdg-yellow",
];

const TeamDeco = ({ selected, setSelected }) => {
    const ref = useRef(null);

    return (
        <div
            ref={ref}
            className="flex flex-col items-center gap-6 select-none"
            onMouseEnter={() =>
                gsap.to(ref.current, { scale: 1.03, duration: 0.25 })
            }
            onMouseLeave={() =>
                gsap.to(ref.current, { scale: 1, duration: 0.25 })
            }
        >
            {/* Toggle */}
            <ToggleButtons selected={selected} setSelected={setSelected} />

            {/* Decorative text - HIDDEN ON MOBILE/TABLET, SHOWN ON LG (1024px+) */}
            <div className="meet-team hidden lg:flex flex-col gap-3">
                {words.map((word, i) => (
                    <h1
                        key={i}
                        className={`
              text-[10vw] md:text-[6vw]
              font-black font-mono
              uppercase italic tracking-tight
              pl-6 border-l-8 ${colors[i]}
              text-white/90
            `}
                    >
                        {word}
                    </h1>
                ))}
            </div>
        </div>
    );
};

export default TeamDeco;