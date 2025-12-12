import React from "react";
import { Link } from "react-router-dom";
import GDGLogo from "./GDGLogo"; 

const NavBar = () => {
  return (
    <>
      {/* Rainbow bar */}
      <div className="flex h-1">
        <div className="flex-1 bg-blue-500"></div>
        <div className="flex-1 bg-red-500"></div>
        <div className="flex-1 bg-yellow-500"></div>
        <div className="flex-1 bg-green-500"></div>
      </div>

      {/* Navbar */}
      <nav className="bg-[#121212] shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">

            {/* GDG LOGO */}
            <GDGLogo />

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className="text-white hover:text-blue-400 transition-colors duration-300 font-medium relative group"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-blue-400 to-blue-600 group-hover:w-full transition-all duration-300"></span>
              </Link>

              <Link
                to="/events"
                className="text-white hover:text-red-400 transition-colors duration-300 font-medium relative group"
              >
                Events
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-red-400 to-red-600 group-hover:w-full transition-all duration-300"></span>
              </Link>

              <Link
                to="/team"
                className="text-white hover:text-yellow-400 transition-colors duration-300 font-medium relative group"
              >
                Team
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-yellow-400 to-yellow-600 group-hover:w-full transition-all duration-300"></span>
              </Link>

              <Link
                to="/medium"
                className="text-white hover:text-green-400 transition-colors duration-300 font-medium relative group"
              >
                Medium
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-green-400 to-green-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </div>

            {/* Mobile Menu */}
            <div className="md:hidden">
              <button className="text-white hover:text-blue-400 transition-colors">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>

          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
