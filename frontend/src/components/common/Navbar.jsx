import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import GDGLogo from "./GDGLogo";

const Navbar = () => {
  const [open, setOpen] = useState(false); // Mobile menu state
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full bg-gdg-black-dark backdrop-blur-md mb-15">
      {/* Top Accent Bar */}
      <div className="nav-top-line w-full h-1 flex">
        <div className="flex-1 bg-gdg-blue" />
        <div className="flex-1 bg-gdg-red" />
        <div className="flex-1 bg-gdg-yellow" />
        <div className="flex-1 bg-gdg-green" />
      </div>

      {/* Navbar */}
      <div className="w-full bg-gdg-black2/80 border-b border-white/9">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <nav className="flex items-center justify-between h-16">
            {/* Left Side */}
            <div className="flex items-center gap-8">
              <GDGLogo />
            </div>

            {/* Right Side - Desktop */}
            <div className="hidden md:flex items-center gap-6">
              <NavItem to="/" text="Home" color="gdg-blue" isActive={location.pathname === "/"} />
              <NavItem to="/events" text="Events" color="gdg-red" isActive={location.pathname === "/events"} />
              <NavItem to="/team" text="Team" color="gdg-yellow" isActive={location.pathname === "/team"} />
              <NavItem to="/medium" text="Medium" color="gdg-green" isActive={location.pathname === "/medium"} />
            </div>

            {/* Hamburger Button - Mobile Only */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden text-white/80 hover:text-white transition"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </nav>
        </div>

        {/* Mobile Menu Content */}
        <div
          className={`
            nav-menu
            absolute top-full left-0 w-full
            bg-gdg-black-dark backdrop-blur-lg
            border-t border-white/10
            flex flex-col items-center py-8 gap-6
            font-mono text-base font-bold uppercase tracking-widest
            transition-all duration-300
            ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}
            md:hidden
          `}
        >
          <NavItem to="/" text="Home" color="gdg-blue" isActive={location.pathname === "/"} onClick={() => setOpen(false)} />
          <NavItem to="/events" text="Events" color="gdg-red" isActive={location.pathname === "/events"} onClick={() => setOpen(false)} />
          <NavItem to="/team" text="Team" color="gdg-yellow" isActive={location.pathname === "/team"} onClick={() => setOpen(false)} />
          <NavItem to="/medium" text="Medium" color="gdg-green" isActive={location.pathname === "/medium"} onClick={() => setOpen(false)} />
        </div>
      </div>
    </header>
  );
};

/* NavItem Component 
  Kept exactly as it was in your old code to preserve styling/glows
*/
const NavItem = ({ to, text, color, isActive, onClick }) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="
        relative
        text-white/80
        hover:text-white
        transition
        group
        font-mono text-lg font-bold uppercase tracking-widest
      "
    >
      {text}

      {/* Underline */}
      <span
        className={`
          absolute left-0 -bottom-2 h-[2px]
          bg-${color}
          transition-all duration-300
          ${isActive ? "w-full" : "w-0 group-hover:w-full"}
        `}
      />

      {/* Glow */}
      <span
        className={`
          absolute -inset-x-1 -inset-y-2
          bg-${color}/10
          ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}
          blur-lg
          transition
        `}
      />
    </Link>
  );
};

export default Navbar;