import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import LeftBracket from "../../assets/photos/left-bracket-removebg-preview.png";
import RightBracket from "../../assets/photos/right-bracket-removebg-preview.png";

const GDGLogo = () => {
  const container = useRef(null);
  const left = useRef(null);
  const right = useRef(null);
  const textRef = useRef(null);
  const tl = useRef(null);

  const colors = ["#4285F4", "#EA4335", "#FBBC04", "#34A853"];

  useEffect(() => {
    tl.current = gsap.timeline({
      paused: true,
      defaults: { ease: "back.out(1.7)", duration: 0.6 }
    });

    tl.current
      .to(container.current, { scale: 1.1, rotate: 3 }, 0)
      .to(left.current, { rotate: -360, duration: 0.8 }, 0)
      .to(right.current, { rotate: 360, duration: 0.8 }, 0)
      .to(
        textRef.current.children,
        {
          color: (i) => colors[i % colors.length],
          stagger: 0.05
        },
        0
      );

    return () => {
      tl.current?.kill();
    };
  }, []);

  const handleEnter = () => {
    tl.current?.play();
  };

  const handleLeave = () => {
    tl.current?.reverse();
  };

  return (
    <div
      ref={container}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="flex items-center cursor-pointer select-none"
    >
      <img ref={left} src={LeftBracket} alt="<" className="h-10 w-10" />

      <div
        ref={textRef}
        className="flex items-center mx-2 text-2xl font-bold tracking-tight"
      >
        <span>G</span>
        <span>D</span>
        <span>G</span>
        <span className="ml-1">UMIT</span>
      </div>

      <img ref={right} src={RightBracket} alt=">" className="h-10 w-10" />
    </div>
  );
};

export default GDGLogo;
