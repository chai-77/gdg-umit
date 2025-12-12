import React, { useRef } from "react";
import gsap from "gsap";
import LeftBracket from "../../assets/photos/left-bracket-removebg-preview.png";
import RightBracket from "../../assets/photos/right-bracket-removebg-preview.png";

const GDGLogo = () => {
  const container = useRef(null);
  const left = useRef(null);
  const right = useRef(null);
  const textRef = useRef(null);

  const colors = ["#4285F4", "#EA4335", "#FBBC04", "#34A853"];

  const handleEnter = () => {
    const tl = gsap.timeline({
      defaults: { ease: "back.out(1.7)", duration: 0.6 }
    });

    tl.to(container.current, { scale: 1.1, rotate: 3 }, 0)
      .to(left.current, { rotate: -360, duration: 0.8 }, 0)
      .to(right.current, { rotate: 360, duration: 0.8 }, 0)
      .to(
        textRef.current.children,
        {
          color: (i) => colors[i],
          stagger: 0.05
        },
        0
      );
  };

  const handleLeave = () => {
    const tl = gsap.timeline({
      defaults: { ease: "power3.out", duration: 0.5 }
    });

    tl.to(container.current, { scale: 1, rotate: 0 }, 0)
      .to(left.current, { rotate: 0 }, 0)
      .to(right.current, { rotate: 0 }, 0)
      .to(
        textRef.current.children,
        { color: "#ffffff", stagger: 0.04 },
        0
      );
  };

  return (
    <div
      ref={container}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="flex items-center cursor-pointer select-none"
    >
      <img ref={left} src={LeftBracket} alt="<" className="h-10 w-10" />

      <div ref={textRef} className="flex items-center mx-2 text-2xl font-bold tracking-tight">
        <span className="text-white">G</span>
        <span className="text-white">D</span>
        <span className="text-white">G</span>
        <span className="text-white ml-1">UMIT</span>
      </div>

      <img ref={right} src={RightBracket} alt=">" className="h-10 w-10" />
    </div>
  );
};

export default GDGLogo;
