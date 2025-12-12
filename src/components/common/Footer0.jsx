import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#121212] border-t border-slate-700 mt-16">
      {/* Rainbow Line at Top */}
      <div className="flex h-1">
        <div className="flex-1 bg-blue-500"></div>
        <div className="flex-1 bg-red-500"></div>
        <div className="flex-1 bg-yellow-500"></div>
        <div className="flex-1 bg-green-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-500 via-red-500 to-green-500">
                &lt;GDG/&gt;
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Building communities and empowering developers through Google technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            {/* <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-400 hover:text-red-400 transition-colors text-sm">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                  Team
                </Link>
              </li>
              <li>
                <Link to="/medium" className="text-gray-400 hover:text-green-400 transition-colors text-sm">
                  Medium
                </Link>
              </li>
            </ul> */}
          </div>

          {/* Community */}
          <div>
            <h3 className="text-white font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-red-400 transition-colors text-sm">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm">
                  Discord
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-400">
                <span className="font-medium text-white">Email:</span>
                <br />
                gdg@umit.edu
              </li>
              <li className="text-gray-400">
                <span className="font-medium text-white">Location:</span>
                <br />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=3RPJ+H5Q,+Juhu-Tara+Road,+Sir+Vitthaldas+Vidyavihar,+Santacruz(W),+Mumbai,+Maharashtra+400049"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  3RPJ+H5Q, Juhu-Tara Road, Sir Vitthaldas Vidyavihar, Santacruz(W), Mumbai, Maharashtra 400049
                </a>

              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} GDG UMIT. All rights reserved.
            </p>
            {/* <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm">
                Code of Conduct
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
