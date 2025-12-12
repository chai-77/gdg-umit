import React, { useState } from 'react';

// Reusable component for a single FAQ item
const FaqItem = ({ question, answer, color }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-700 py-4">
            <button
                className="flex justify-between items-center w-full text-left focus:outline-none group"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span 
                    className="text-lg font-semibold text-white transition-colors group-hover:text-blue-500"
                >
                    {question}
                </span>
                {/* Plus/Minus indicator */}
                <span 
                    className={`text-2xl font-bold transition-transform duration-300 ${
                        isOpen ? 'rotate-0 text-blue-500' : 'text-white'
                    }`}
                >
                    {isOpen ? '—' : '+'}
                </span>
            </button>
            
            {isOpen && (
                <div className="mt-3 pr-8">
                    <p className="text-gray-400 text-base leading-relaxed">
                        {answer}
                    </p>
                </div>
            )}
        </div>
    );
};

const FAQ = () => {
    const gdgColors = {
        blue: "#4285F4",
        red: "#EA4335",
        yellow: "#FBBC04",
        green: "#34A853",
    };
    
    const faqData = [
        {
            question: "Do I need to be a coding expert to join?",
            answer: "Absolutely not! GDG UMIT welcomes everyone, from absolute beginners looking to start their tech journey to experienced developers seeking to contribute and mentor. We have content tailored for all skill levels.",
        },
        {
            question: "What kind of events does GDG UMIT organize?",
            answer: "We organize a variety of events including hands-on coding workshops, study jams, tech talks by industry professionals, hackathons, and our annual flagship conference, DevFest.",
        },
        {
            question: "Is there a membership fee to join?",
            answer: "No, membership and participation in most GDG UMIT events are completely free! We are a community-driven group supported by Google Developers.",
        },
        {
            question: "What Google technologies do you focus on?",
            answer: "Our events cover a wide range, including Flutter, Android development, Google Cloud Platform (GCP), AI/Machine Learning (Gemini, TensorFlow), and Web technologies (Angular, Firebase).",
        },
    ];

    return (
        <section id="faq" className="bg-[#121212] py-20 md:py-32">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-3">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-xl text-gray-400">
                        Quick answers to help you get started with our community.
                    </p>
                </div>
                
                {/* FAQ List */}
                <div className="space-y-4">
                    {faqData.map((item, index) => (
                        <FaqItem 
                            key={index}
                            question={item.question}
                            answer={item.answer}
                            color={gdgColors.blue} // Blue accent
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
