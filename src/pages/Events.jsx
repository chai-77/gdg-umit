import React from "react";
import EventCard from "../components/events/EventCard";

const Events = () => {
  return (
    <div className="min-h-screen pt-24 pb-20 bg-[#121212]">

      <h1 className="text-center text-4xl font-bold font1 text-white mb-12">
        Upcoming & Past Events
      </h1>

      <div className="flex flex-wrap justify-center gap-10 px-6">

        {/* HackX 3.0 */}
        <EventCard
          title="GDG UMIT × NMIMS — HackX 3.0"
          date="Jan 2025"
          description="A collaborative 24-hour hackathon bringing together innovators from two leading campuses, focused on building real-world tech solutions."
          image="https://images.unsplash.com/photo-1518770660439-4636190af475"
        />

        {/* Gen AI Study Jams */}
        <EventCard
          title="GDG Gen AI Study Jams"
          date="March 2025"
          description="A hands-on workshop series introducing participants to Gen AI fundamentals, Gemini APIs, and real-world AI project building."
          image="https://images.unsplash.com/photo-1535223289827-42f1e9919769"
        />

        {/* Byte Blitz */}
        <EventCard
          title="Byte Blitz — Coding Sprint"
          date="2024"
          description="A fast-paced coding sprint designed to challenge and sharpen participants’ problem-solving and algorithmic thinking skills."
          image="https://images.unsplash.com/photo-1518770660439-4636190af475"
        />

      </div>
    </div>
  );
};

export default Events;
