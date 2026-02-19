import React, { useState } from "react";
import EventsCard from "../components/events/EventsCard";
import EventModal from "../components/events/EventModal";
import eventsData from "../../public/events";

export default function Events() {
    const [selectedEvent, setSelectedEvent] = useState(null);

    // Separate events by type
    const upcomingEvents = eventsData.filter(e => e.type === "upcoming");
    const pastEvents = eventsData.filter(e => e.type === "past");

    return (
        <>
            <section className="bg-black py-24 md:py-32 relative overflow-hidden">
                {/* Increased width to 7xl to match rest of site */}
                <div className="max-w-7xl mx-auto px-6 font-mono text-white">

                    {/* HEADER - Consistent with FAQ/About */}
                    <div className="mb-16 md:mb-24">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-4 uppercase italic">
                            Events & Workshops
                        </h2>
                        <p className="max-w-3xl text-base md:text-xl text-white/50 font-light">
                            Join us for hands-on learning experiences, networking opportunities, and community-driven innovation.
                        </p>
                    </div>

                    {/* UPCOMING EVENTS */}
                    {upcomingEvents.length > 0 && (
                        <div className="mb-24">
                            <div className="flex flex-col gap-2 mb-12">
                                <h3 className="text-2xl md:text-3xl font-black text-gdg-green uppercase italic">
                                    Coming Soon
                                </h3>
                                {/* Solid accent line instead of gradient */}
                                <div className="w-20 h-1 bg-gdg-green" />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                                {upcomingEvents.map((event, idx) => (
                                    <EventsCard
                                        key={`upcoming-${idx}`}
                                        {...event}
                                        onReadMore={() => setSelectedEvent(event)}
                                    />
                                ))}
                            </div>
                        </div>
                    )}

                    {/* PAST EVENTS */}
                    {pastEvents.length > 0 && (
                        <div className="mb-12">
                            <div className="flex flex-col gap-2 mb-12">
                                <h3 className="text-2xl md:text-3xl font-black text-gdg-red uppercase italic">
                                    Past Events
                                </h3>

                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                                {pastEvents.map((event, idx) => (
                                    <EventsCard
                                        key={`past-${idx}`}
                                        {...event}
                                        onReadMore={() => setSelectedEvent(event)}
                                    />
                                ))}
                            </div>
                        </div>
                    )}

                    {/* EMPTY STATE - Glassmorphism style */}
                    {eventsData.length === 0 && (
                        <div className="text-center py-20 bg-white/5 border border-white/10 rounded-2xl">
                            <p className="text-lg md:text-xl text-white/50 font-light mb-8 px-4">
                                No events scheduled yet. But we're planning something amazing.
                            </p>
                            <button className="px-8 py-3 border border-gdg-green text-gdg-green text-sm md:text-base font-bold tracking-widest uppercase hover:bg-gdg-green hover:text-black transition-all duration-300">
                                Notify Me
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* Modal */}
            <EventModal
                event={selectedEvent}
                onClose={() => setSelectedEvent(null)}
            />
        </>
    );
}