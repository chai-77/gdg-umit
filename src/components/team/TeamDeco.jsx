import React, { useRef } from "react";
import gsap from "gsap";

const googleColors = ["#4285F4", "#EA4335", "#FBBC04", "#34A853"];

const TeamDeco = () => {
    const containerRef = useRef(null);

    const handleEnter = () => {
        gsap.to(containerRef.current, {
            scale: 1.12,
            duration: 0.4,
            ease: "elastic.out(1, 0.45)"
        });
    };

    const handleLeave = () => {
        const tl = gsap.timeline();

        tl.to(containerRef.current, {
            scale: 0.92,
            duration: 0.15,
            ease: "power2.in"
        }).to(containerRef.current, {
            scale: 1,
            duration: 0.3,
            ease: "bounce.out"
        });
    };

    return (
        <div
            ref={containerRef}
            className="flex flex-col justify-center items-start h-full w-full select-none cursor-pointer"
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
        >
            {["MEET", "THE", "TEAM"].map((word, idx) => (
                <h1
                    key={idx}
                    className="px-3 py-1 text-white font-black tracking-wide"
                    style={{
                        fontSize: "7vw",
                        lineHeight: "0.85",
                        fontStretch: "expanded",  
                        borderLeft: `10px solid ${googleColors[idx % googleColors.length]}`,
                    }}
                >
                    {word}
                </h1>
            ))}
        </div>
    );
};

export default TeamDeco;
