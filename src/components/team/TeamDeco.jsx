import React, { useState,useRef } from "react";
import ToggleButtons from "./ToggleButtons";
import gsap from "gsap";

const googleColors = ["#4285F4", "#EA4335", "#FBBC04", "#34A853"];

const TeamDeco = ({ selected, setSelected }) => {
  const ref = useRef(null);
 
  return (
    <div
      ref={ref}
      className="team-deco"
      onMouseEnter={() => gsap.to(ref.current, { scale: 1.1, duration: 0.3 })}
      onMouseLeave={() => gsap.to(ref.current, { scale: 1, duration: 0.3 })}
    >

      <ToggleButtons selected={selected} setSelected={setSelected} />
      {["MEET", "THE", "TEAM"].map((word, i) => (
        <h1
          key={i}
          className="team-deco-title"
          style={{
            fontSize: "6vw",
            borderLeft: `10px solid ${googleColors[i]}`
          }}
        >
          {word}
        </h1>
      ))}
    </div>
  );
};

export default TeamDeco;
