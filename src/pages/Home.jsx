import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-[#121212] min-h-screen text-white">

      {/* ===== HERO ===== */}
      <section className="pt-28 pb-20 px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold font1 leading-tight">
          GDG UMIT
        </h1>

        <p className="mt-5 text-gray-300 max-w-2xl mx-auto text-lg">
          A student-led developer community fostering innovation, collaboration, 
          and learning through Google technologies.
        </p>

        <div className="mt-10 flex justify-center gap-6">
          <Link
            to="/events"
            className="px-6 py-3 text-lg font-medium rounded-lg bg-gradient-to-r from-blue-500 to-green-500 hover:opacity-90 transition"
          >
            View Events
          </Link>

          <Link
            to="/team"
            className="px-6 py-3 text-lg font-medium rounded-lg border border-gray-500 hover:bg-white/10 transition"
          >
            Our Team
          </Link>
        </div>
      </section>

      {/* ===== RECENT EVENTS ===== */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold font1 text-center mb-12">
          Recent Highlights
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

          {/* Event 1 */}
          <div className="bg-[#1A1A1A] p-5 rounded-xl border border-slate-700 hover:-translate-y-2 transition-transform duration-300">
            <h3 className="text-xl font-semibold text-blue-400 mb-2">
              HackX 3.0
            </h3>
            <p className="text-gray-300 text-sm mb-3">
              A 24-hour hackathon in collaboration with NMIMS, bringing developers together to build real-world solutions.
            </p>
            <Link to="/events" className="text-blue-400 hover:underline text-sm">
              View Event →
            </Link>
          </div>

          {/* Event 2 */}
          <div className="bg-[#1A1A1A] p-5 rounded-xl border border-slate-700 hover:-translate-y-2 transition-transform duration-300">
            <h3 className="text-xl font-semibold text-red-400 mb-2">
              Gen AI Study Jams
            </h3>
            <p className="text-gray-300 text-sm mb-3">
              A hands-on learning series exploring Google's Gen AI tools and Gemini API.
            </p>
            <Link to="/events" className="text-red-400 hover:underline text-sm">
              View Event →
            </Link>
          </div>

          {/* Event 3 */}
          <div className="bg-[#1A1A1A] p-5 rounded-xl border border-slate-700 hover:-translate-y-2 transition-transform duration-300">
            <h3 className="text-xl font-semibold text-green-400 mb-2">
              Byte Blitz
            </h3>
            <p className="text-gray-300 text-sm mb-3">
              A competitive coding sprint designed to sharpen problem-solving and algorithmic thinking.
            </p>
            <Link to="/events" className="text-green-400 hover:underline text-sm">
              View Event →
            </Link>
          </div>

        </div>
      </section>

      {/* ===== ABOUT COMMUNITY ===== */}
      <section className="py-20 px-8 bg-[#161616]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <img
            src="https://images.unsplash.com/photo-1556761175-129418cb2dfe"
            className="rounded-xl shadow-lg"
            alt="community"
          />

          <div>
            <h2 className="text-3xl font-bold font1 mb-3">Our Community</h2>
            <p className="text-gray-300 leading-relaxed">
              GDG UMIT is a vibrant community of students passionate about learning, 
              building, and sharing ideas. We aim to uplift fellow developers through
              events, study jams, and hands-on sessions.
            </p>

            <Link
              to="/medium"
              className="inline-block mt-6 px-6 py-3 text-sm rounded-lg bg-white/10 border border-gray-600 hover:bg-white/20 transition"
            >
              Read Our Stories →
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Home;
