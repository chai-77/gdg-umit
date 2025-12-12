import React from "react";
import EventsCard from "../components/events/EventsCard";
import eventsData from "../../public/events/events"; // assuming you saved the previous array in eventsData.js

const Events = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 text-white space-y-10">
      <h2 className="text-4xl font-bold text-center mb-10">GDG UMIT Events</h2>
      <div className="flex flex-col md:flex-row md:flex-wrap md:justify-center gap-10">
        {eventsData.map((event, idx) => (
          <EventsCard key={idx} {...event} />
        ))}
      </div>
    </div>
  );
};

export default Events;
