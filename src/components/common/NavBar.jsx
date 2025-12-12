import React from "react";
import { Link } from "react-router-dom";
import GDGLogo from "./GDGLogo";

const NavBar = () => {
  return (
    <div className="flex items-center justify-center flex-col w-full">

      {/* GDG Color Lines */}
      <div className="flex h-[4px] w-2xl">
        <div className="flex-1 bg-[#4285F4]"></div>
        <div className="flex-1 bg-[#EA4335]"></div>
        <div className="flex-1 bg-[#FBBC04]"></div>
        <div className="flex-1 bg-[#34A853]"></div>
      </div>

      {/* MAIN NAVBAR */}
      <nav className="nav-bar w-2xl bg-[#202124] h-[5em] shadow-[0_5px_15px_rgba(0,0,0,0.3)] 
                     rounded-b-xl px-6 flex items-center justify-between">

        {/* Logo */}
        <GDGLogo />

        {/* Links */}
        <div className="hidden md:flex items-center space-x-8 text-lg font-semibold">

          <NavItem to="/" text="Home" color="#4285F4" />
          <NavItem to="/events" text="Events" color="#EA4335" />
          <NavItem to="/team" text="Team" color="#FBBC04" />
          <NavItem to="/medium" text="Medium" color="#34A853" />

        </div>

        {/* Mobile menu button */}
        <div className="md:hidden text-white">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>

      </nav>
    </div>
  );
};

const NavItem = ({ to, text, color }) => {
  return (
    <Link
      to={to}
      className="relative text-white transition group"
    >
      {text}
      <span
        className="absolute left-0 -bottom-1 h-[3px] w-0 group-hover:w-full 
                   transition-all duration-300"
        style={{ backgroundColor: color }}
      ></span>
    </Link>
  );
};

export default NavBar;
