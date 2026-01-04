import React from "react";

const About = () => {
    const gdgColors = {
        blue: "#4285F4",
        red: "#EA4335",
        yellow: "#FBBC04",
        green: "#34A853",
    };

    const pillars = [
        {
            title: "Learn",
            description: "Hands-on workshops, codelabs, and study jams on Google tech.",
            color: gdgColors.blue,
        },
        {
            title: "Connect",
            description: "Network with local developers, industry experts, and mentors.",
            color: gdgColors.green,
        },
        {
            title: "Build",
            description: "Create real-world projects and participate in hackathons.",
            color: gdgColors.red,
        },
        {
            title: "Grow",
            description: "Opportunities for leadership, speaking, and professional growth.",
            color: gdgColors.yellow,
        },
    ];

    return (
        <section id="about" className="about-section bg-[#1a1a1a] py-24 md:py-36">
            <div className="about-inner max-w-8xl mx-auto px-8 sm:px-12 lg:px-16 text-center">

                {/* Header */}
                <div className="about-header mb-20">
                    <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6">
                        What is{" "}
                        <span>
                            <span style={{ color: gdgColors.blue }}>G</span>
                            <span style={{ color: gdgColors.red }}>D</span>
                            <span style={{ color: gdgColors.yellow }}>G</span>{" "}
                         
                        </span>?
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto">
                        A community of developers exploring Google technologies through workshops, projects, and events.
                    </p>
                </div>

                {/* Main Content: center the group but keep cards left-aligned */}
                <div className="about-grid-wrapper flex justify-center">
                    <div className="about-grid grid grid-cols-2 gap-8">
                        {pillars.map((pillar, index) => (
                            <div 
                                key={index} 
                                className="p-8 rounded-lg border border-gray-700 hover:border-white transition duration-300 text-left"
                                style={{ borderLeft: `6px solid ${pillar.color}` }}
                            >
                                <h4 className="text-2xl font-bold mb-3 text-white">{pillar.title}</h4>
                                <p className="text-gray-400 text-base">{pillar.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
