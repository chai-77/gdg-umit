import React from "react";
import { Link } from "react-router-dom";
import eventsData from "../../../public/events/events";

const Upcoming = () => {
    const gdgColors = {
        blue: "#4285F4",
        red: "#EA4335",
        yellow: "#FBBC04",
        green: "#34A853",
    };

    const upcomingEvents = eventsData.filter(e => e.type === "upcoming");

    const upcomingDetails = [
        {
            id: 1,
            title: "5 Days of Code Challenge",
            date: "Dec 26 – Dec 30, 2025",
            time: "5 Days",
            registrationLink: "https://www.linkedin.com/posts/gdsc-umit_gdgumit-5daysofcode-codingchallenge-activity-7404046105786744832-7JH2",
            location: "Online",
            tags: ["Coding", "Challenge", "Beginner Friendly"],
            color: gdgColors.blue, 
        },
    ];

    const mergedUpcoming = upcomingEvents.map(event => {
        const extra = upcomingDetails.find(d => d.title === event.title);
        return { ...event, ...extra, color: event.color || extra?.color || gdgColors.yellow };
    });

    const EventCard = ({ event }) => {
        const primaryColor = gdgColors.blue; 

        return (
            <div className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-6 transition duration-300 hover:shadow-2xl hover:border-gray-700">
                <div className="flex items-center mb-4">
                    <h3 className="text-2xl font-bold text-white">{event.title}</h3>
                </div>

                <p className="text-gray-400 mb-2 flex items-center">
                    <span className="mr-2" style={{ color: gdgColors.blue }}>Date: </span>
                    {event.date}
                </p>

                {event.time && (
                    <p className="text-gray-400 mb-2">
                        <span style={{ color: gdgColors.blue }}>Duration: </span> {event.time}
                    </p>
                )}

                {event.location && (
                    <p className="text-gray-400 mb-4">
                        <span style={{ color: gdgColors.blue }}>Location: </span> {event.location}
                    </p>
                )}

                {event.images && (
                    <div className="mb-6">
                        <img
                            src={event.images[0]}
                            alt={event.title}
                            className="rounded-lg w-full object-cover"
                        />
                    </div>
                )}

                <div className="flex flex-wrap gap-3 mb-8">
                    {event.tags?.map(tag => (
                        <span
                            key={tag}
                            className="text-xs font-bold px-3 py-1 rounded-md text-white border-2 select-none"
                            style={{
                                borderColor: primaryColor,
                                backgroundColor: '#1a1a1a',
                                color: primaryColor,
                                boxShadow: `2px 2px 0 0 ${primaryColor}70`,
                            }}
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Yellow Hero-style Register Button */}
                <a
                    href={event.registrationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-3 w-60 text-lg font-bold rounded-lg text-white bg-black border-4 border-[#4285F4] shadow-[4px_4px_0_0_#4285F4] transition-all duration-200 transform hover:shadow-none hover:translate-x-1 hover:translate-y-1"
                >
                    Register Now
                    <span className="ml-3 inline-block transition-transform duration-300">→</span>
                </a>
            </div>
        );
    };

    return (
        <section className="bg-[#121212] py-20 mt-20">
            <div className="max-w-5xl mx-auto px-6">
                <header className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-3">Upcoming Events</h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Stay ahead and join our next major event.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-12 place-items-center">
                    {mergedUpcoming.map(event => (
                        <div className="w-full max-w-2xl" key={event.title}>
                            <EventCard event={event} />
                        </div>
                    ))}
                </div>

                {/* Yellow Hero-style View All Events Button */}
                <div className="text-center mt-16">
                    <Link
                        to="/events"
                        className="inline-flex items-center justify-center px-8 py-3 w-60 text-lg font-bold rounded-lg text-white bg-black border-4 border-[#EA4335] shadow-[4px_4px_0_0_#EA4335] transition-all duration-200 transform hover:shadow-none hover:translate-x-1 hover:translate-y-1"
                    >
                        View All Events
                        <span className="ml-3 inline-block transition-transform duration-300">→</span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Upcoming;
