import React, { useState } from "react";

// Consistent color mapping for borders and text
const colorMap = {
  "text-gdg-blue": { text: "text-gdg-blue", border: "border-gdg-blue" },
  "text-gdg-red": { text: "text-gdg-red", border: "border-gdg-red" },
  "text-gdg-yellow": { text: "text-gdg-yellow", border: "border-gdg-yellow" },
  "text-gdg-green": { text: "text-gdg-green", border: "border-gdg-green" },
};

const FaqItem = ({ question, answer, colorClass }) => {
  const [open, setOpen] = useState(false);
  const colors = colorMap[colorClass];

  return (
    <div
      className={`
        group border-l-4 bg-white/5 
        p-6 md:p-7 transition-colors duration-300 cursor-pointer
        ${open ? colors.border : 'border-white/10'}
        hover:bg-white/10
      `}
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between gap-4">
        {/* Slightly smaller question text for a cleaner look */}
        <h3 className={`text-lg md:text-xl font-bold tracking-tight ${colorClass}`}>
          {question}
        </h3>
        <span className={`text-xl font-light transition-transform duration-300 ${
          open ? 'rotate-180' : ''
        } ${colorClass}`}>
          {open ? '−' : '+'}
        </span>
      </div>

      <div className={`
        grid transition-[grid-template-rows,opacity] duration-300 ease-in-out
        ${open ? 'grid-rows-[1fr] opacity-100 mt-3' : 'grid-rows-[0fr] opacity-0'}
      `}>
        <div className="overflow-hidden">
          <p className="text-white/50 text-sm md:text-base font-light leading-relaxed max-w-7xl">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default function FAQ() {
  const faqData = [
    {
      question: "Who can join?",
      answer: "GDG UMIT is open to 2nd and 3rd year UMIT students interested in technology, regardless of your background or experience level.",
      colorClass: "text-gdg-blue",
    },
    {
      question: "Need coding skills?",
      answer: "Not at all. We welcome beginners, intermediate learners, and experienced developers. Everyone learns together.",
      colorClass: "text-gdg-red",
    },
    {
      question: "What happens here?",
      answer: "Workshops, study jams, hackathons, tech talks, and collaborative projects. Always hands-on, always learning.",
      colorClass: "text-gdg-yellow",
    },
    {
      question: "How to stay connected?",
      answer: "Follow our socials, join our WhatsApp/Discord channels, and attend our events. We'll keep you in the loop.",
      colorClass: "text-gdg-green",
    },
  ];

  return (
    <section id="faq" className=" border-t-2 border-gdg-black-light py-24 md:py-32 relative overflow-hidden">
      {/* Increased to max-w-7xl to make the section wider */}
      <div className="max-w-7xl mx-auto px-6 font-mono text-white">

        {/* Header */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-4 uppercase italic">
            Questions?
          </h2>
          <p className="max-w-2xl text-base md:text-xl text-white/50 font-light">
            We've got answers.
          </p>
        </div>

        {/* FAQ List */}
        <div className="flex flex-col gap-6 md:gap-8">
          {faqData.map((item, i) => (
            <FaqItem key={i} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}