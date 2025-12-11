import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'

const NavBar = () => {
  const logoRef = useRef(null)
  const innerBracketsRef = useRef(null)

  const handleLogoHover = () => {
    // Create a timeline for the animation
    const tl = gsap.timeline()

    // Rotate and scale the outer brackets
    tl.to(logoRef.current, {
      rotation: 360,
      scale: 1.2,
      duration: 0.6,
      ease: 'back.out'
    }, 0)

    // Rotate inner brackets in opposite direction
    tl.to(innerBracketsRef.current, {
      rotation: -360,
      duration: 0.6,
      ease: 'back.out'
    }, 0)

    // Fade in the college name
    tl.to(
      logoRef.current.querySelector('.college-name'),
      {
        opacity: 1,
        duration: 0.4,
        ease: 'power2.out'
      },
      0.3
    )
  }

  const handleLogoHoverOut = () => {
    const tl = gsap.timeline()

    tl.to(logoRef.current, {
      rotation: 0,
      scale: 1,
      duration: 0.6,
      ease: 'back.out'
    }, 0)

    tl.to(innerBracketsRef.current, {
      rotation: 0,
      duration: 0.6,
      ease: 'back.out'
    }, 0)

    tl.to(
      logoRef.current.querySelector('.college-name'),
      {
        opacity: 0,
        duration: 0.3,
        ease: 'power2.out'
      },
      0
    )
  }

  return (
    <>
      {/* Rainbow Google Colors Top Bar */}
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
            {/* GDG Logo */}
            <div
              ref={logoRef}
              onMouseEnter={handleLogoHover}
              onMouseLeave={handleLogoHoverOut}
              className="cursor-pointer relative"
            >
              <div className="flex items-center justify-center relative h-16 w-16">
                {/* Outer Brackets */}
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-500 via-red-500 to-yellow-500">
                  &lt;
                </div>

                {/* Inner Content */}
                <div
                  ref={innerBracketsRef}
                  className="flex flex-col items-center justify-center mx-1"
                >
                  {/* GDG Letters */}
                  <div className="flex text-xs font-bold tracking-widest">
                    <span className="text-blue-500">G</span>
                    <span className="text-red-500">D</span>
                    <span className="text-yellow-500">G</span>
                  </div>

                  {/* Decorative Dots */}
                  <div className="flex gap-0.5 mt-0.5">
                    <div className="w-1 h-1 rounded-full bg-blue-500"></div>
                    <div className="w-1 h-1 rounded-full bg-red-500"></div>
                    <div className="w-1 h-1 rounded-full bg-yellow-500"></div>
                    <div className="w-1 h-1 rounded-full bg-green-500"></div>
                  </div>
                </div>

                {/* Right Bracket */}
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-yellow-500 to-green-500">
                  &gt;
                </div>

                {/* College Name - Hidden by default */}
                <div className="college-name absolute top-full mt-2 whitespace-nowrap text-white text-xs font-semibold opacity-0 bg-black/50 px-3 py-1 rounded-lg backdrop-blur">
                  UMIT College
                </div>
              </div>
            </div>

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

            {/* Mobile Menu Button */}
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
  )
}

export default NavBar
