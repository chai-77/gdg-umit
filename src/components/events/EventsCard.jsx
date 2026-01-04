import React, { useState, useEffect } from "react";

const EventsCard = ({ title, date, type, summary, link, images = [] }) => {
    const [currentImage, setCurrentImage] = useState(0);
    const [expanded, setExpanded] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);

    const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length);
    const prevImage = () =>
        setCurrentImage((prev) => (prev - 1 + images.length) % images.length);

    // Detect screen size
    useEffect(() => {
        const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
        handleResize(); // initial check
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="events-card max-w-4xl mx-auto mb-8">
            {/* Image Section */}
            {images.length > 0 ? (
                <div className="card-image">
                    <img
                        src={images[currentImage]}
                        alt={`${title} - ${currentImage + 1}`}
                    />
                    {images.length > 1 && (
                        <>
                            <button onClick={prevImage} className="arrow-btn arrow-left">
                                ◀
                            </button>
                            <button onClick={nextImage} className="arrow-btn arrow-right">
                                ▶
                            </button>
                        </>
                    )}
                </div>
            ) : (
                <div className="card-image flex items-center justify-center bg-red-800 text-white text-lg">
                    No Image
                </div>
            )}

            {/* Content Section */}
            <div className="card-content">
                <h3 className="card-title">{title}</h3>
                <p className="card-info">
                    <span className="font-semibold text-red-500">Date:</span> {date}
                </p>
                <p className="card-info">
                    <span className="font-semibold text-red-500">Type:</span> {type}
                </p>

                <p className={`event-summary ${!expanded && !isDesktop ? "truncated" : ""}`}>
                    {summary}
                </p>

            
                {!isDesktop && (
                    <button
                        className="learn-more"
                        onClick={() => setExpanded(!expanded)}
                    >
                        {expanded ? "Show less" : "Learn more"}
                    </button>
                )}

                <div className="card-accent"></div>
            </div>
        </div>
    );
};

export default EventsCard;
