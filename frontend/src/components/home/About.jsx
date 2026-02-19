import React from 'react';
import PillarCard from './PillarCard';

const pillars = [
  {
    title: "Learn",
    description: "Access cutting-edge workshops, study jams, and hands-on sessions from the global GDG community.",
    color: "blue",
  },
  {
    title: "Connect",
    description: "Join 100+ countries with 1 million developers passionate about technology and growth.",
    color: "green",
  },
  {
    title: "Build",
    description: "Create real-world solutions through hackathons, projects, and open-source collaboration.",
    color: "red",
  },
  {
    title: "Grow",
    description: "Develop leadership skills, speak at events, and advance your career with a supportive community.",
    color: "yellow",
  },
];





export default function About() {
  return (
    <section
      id="about"
      className="relative border-t-2 border-gdg-black-light isolate overflow-hidden bg-black py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 font-mono text-white">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-4 uppercase italic">
            Google Developer Groups
          </h2>

          <p className="max-w-3xl text-base md:text-xl text-white/50 font-light">
            A global community powering tech innovation worldwide.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {pillars.map((pillar, idx) => (
            <PillarCard
              key={idx}
              {...pillar}
            />
          ))}
        </div>
      </div>
    </section>
  );
}