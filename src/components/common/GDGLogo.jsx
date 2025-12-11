import React, { useRef } from "react";
import gsap from "gsap";
import LeftBracket from "../../assets/photos/left-bracket-removebg-preview.png";
import RightBracket from "../../assets/photos/right-bracket-removebg-preview.png";

const GDGLogo = () => {
  const logoRef = useRef(null);
  const innerRef = useRef(null);

  const handleHover = () => {
    const tl = gsap.timeline();
    tl.to(logoRef.current, { rotation: 360, scale: 1.2, duration: 0.6, ease: "back.out" }, 0);
    tl.to(innerRef.current, { rotation: -360, duration: 0.6, ease: "back.out" }, 0);
  };

  const handleHoverOut = () => {
    const tl = gsap.timeline();
    tl.to(logoRef.current, { rotation: 0, scale: 1, duration: 0.6, ease: "back.out" }, 0);
    tl.to(innerRef.current, { rotation: 0, duration: 0.6, ease: "back.out" }, 0);
  };

  return (
    <div
      ref={logoRef}
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverOut}
      className="flex items-center cursor-pointer"
    >
      <img src={LeftBracket} alt="<" className="h-16 w-16" />
      
      <div ref={innerRef} className="flex items-center mx-2 text-xl font-bold">
        <span className="text-blue-500">G</span>
        <span className="text-red-500">D</span>
        <span className="text-yellow-500">G</span>
        <span className="text-green-500 ml-1">UMIT</span>
      </div>
      
      <img src={RightBracket} alt=">" className="h-16 w-16" />
    </div>
  );
};

export default GDGLogo;
