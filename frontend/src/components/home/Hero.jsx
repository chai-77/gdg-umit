import { useEffect, useRef } from "react";
import gsap from "gsap";

const asciiArt = [
    { text: " ███████╗ ██████╗  ██████╗      ██║   ██║███╗   ███╗██╗████████╗", color: "text-gdg-blue" },
    { text: " ██╔════╝ ██╔══██╗██╔════╝      ██║   ██║████╗ ████║██║╚══██╔══╝", color: "text-gdg-red" },
    { text: " ██║  ███╗██║  ██║██║  ███╗     ██║   ██║██╔████╔██║██║   ██║   ", color: "text-gdg-yellow" },
    { text: " ██║   ██║██║  ██║██║   ██║     ██║   ██║██║╚██╔╝██║██║   ██║   ", color: "text-gdg-green" },
    { text: " ╚██████╔╝██████╔╝╚██████╔╝     ╚██████╔╝██║ ╚═╝ ██║██║   ██║   ", color: "text-gdg-blue" },
    { text: "  ╚═════╝ ╚═════╝  ╚═════╝       ╚═════╝ ╚═╝     ╚═╝╚═╝   ╚═╝   ", color: "text-gdg-red" },
];

export default function HeroSection() {
    const heroRef = useRef(null);
    const artRef = useRef(null);
    const linesRef = useRef([]);
    const tlRef = useRef(null); // Reference to store the timeline

    useEffect(() => {
        const ctx = gsap.context(() => {
            const lines = linesRef.current;

            const triggerGlitch = () => {
                // Only run if the timeline isn't already playing
                if (tlRef.current && tlRef.current.isActive()) return;

                tlRef.current = gsap.timeline();

                tlRef.current
                    .to(lines, {
                        x: () => gsap.utils.random(-7, 7),
                        y: () => gsap.utils.random(-5, 5),
                        skewX: () => gsap.utils.random(-14, 14),
                        scaleY: () => gsap.utils.random(0.95, 1.05),
                        scaleX: () => gsap.utils.random(0.98, 1.02),
                        filter: `hue-rotate(${gsap.utils.random(90, 180)}deg) saturate(220%) brightness(1.25) contrast(1.1)`,
                        duration: 0.14,
                        stagger: 0.03,
                        ease: "power2.out",
                    })
                    .to(lines, {
                        x: 0,
                        y: 0,
                        skewX: 0,
                        scaleY: 1,
                        scaleX: 1,
                        filter: "none",
                        duration: 0.28,
                        ease: "power4.out",
                    });
            };

            const artContainer = artRef.current;
            artContainer.addEventListener("mouseenter", triggerGlitch);

            // Cleanup listener inside the context
            return () => artContainer.removeEventListener("mouseenter", triggerGlitch);
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={heroRef}
            className="hero-section relative isolate overflow-hidden max-w-screen mx-auto flex flex-col items-center justify-center px-6 pt-28 z-0"
        >
            <div
                ref={artRef}
                className="hero-art isolate flex flex-col items-center select-none cursor-pointer"
            >
                {asciiArt.map((line, i) => (
                    <pre
                        key={i}
                        ref={(el) => (linesRef.current[i] = el)}
                        className={`
              ascii-line
              font-mono font-black tracking-tighter leading-[1.2]
              text-[3vw] md:text-[3vw] lg:text-[2.2vw]
             
              ${line.color}
              drop-shadow-[0_0_12px_currentColor]
            `}
                    >
                        {line.text}
                    </pre>
                ))}
            </div>

            <div className="mt-8 sm:mt-12 md:mt-14 text-center px-4">
                <h1 className="text-white/90 font-mono text-sm sm:text-md md:text-base lg:text-lg xl:text-xl tracking-[0.4em] sm:tracking-[0.6em] uppercase">
                    Google Developer Groups
                    <span className="mx-1 sm:mx-2 text-white/20">|</span>
                    UMIT
                </h1>
            </div>
        </div>
    );
}