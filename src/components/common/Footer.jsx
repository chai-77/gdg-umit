import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#121212] text-gray-300 pt-16 overflow-hidden">

      {/* ★ GDG Animated Pulse Bar */}
      <div className="absolute top-0 left-0 w-full h-1 flex">
        <div className="flex-1 bg-[#4285F4] animate-pulse"></div>
        <div className="flex-1 bg-[#EA4335] animate-pulse delay-100"></div>
        <div className="flex-1 bg-[#FBBC04] animate-pulse delay-200"></div>
        <div className="flex-1 bg-[#34A853] animate-pulse delay-300"></div>
      </div>

      {/* ★ Glowing Bottom Border */}
      {/* <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r 
                      from-[#4285F4] via-[#EA4335] to-[#34A853] blur-[2px] opacity-70">
      </div> */}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 pb-20">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* BRAND — with <GDG/> bracket style */}
          <div className="group">
            <h1 className="text-3xl font-black text-white flex items-center gap-2">
              <span className="text-[#4285F4] group-hover:-translate-x-1 transition">{"<"}</span>
              <span className="bg-gradient-to-r from-[#4285F4] via-[#EA4335] to-[#34A853] bg-clip-text text-transparent">
                GDG UMIT
              </span>
              <span className="text-[#EA4335] group-hover:translate-x-1 transition">{"/>"}</span>
            </h1>

            <p className="mt-4 text-gray-400 text-sm leading-relaxed">
              A community that builds, learns, and innovates with Google technologies.
            </p>
          </div>

          {/* COMMUNITY */}
          <div>
            <h3 className="text-white font-semibold mb-4 tracking-wide">Community</h3>
            <ul className="space-y-3">
              {[
                { name: "LinkedIn", color: "#4285F4" },
                { name: "Twitter", color: "#EA4335" },
                { name: "Instagram", color: "#FBBC04" },
                { name: "Discord", color: "#34A853" },
              ].map((item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="flex items-center gap-2 group"
                  >
                    <span
                      className="w-2 h-2 rounded-full block transition-all group-hover:scale-125"
                      style={{ background: item.color }}
                    ></span>
                    <span className="text-gray-400 group-hover:text-white transition-all">
                      {item.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* LOCATION */}
          <div>
            <h3 className="text-white font-semibold mb-4 tracking-wide">Location</h3>
            <p className="text-gray-400 text-sm">
              Usha Mittal Institute of Technology  
              <br />
              <a
                href="https://www.google.com/maps?ll=19.086451,72.830496&z=15&t=m&hl=en&gl=IN&mapclient=embed&cid=2318563822040583510"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4285F4] hover:underline"
              >
                View on Google Maps
              </a>
            </p>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-white font-semibold mb-4 tracking-wide">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="text-gray-400">Email:</span>
                <br />
                <span className="text-white font-medium">gdg@umit.edu</span>
              </li>
              <li>
                <span className="text-gray-400">Support:</span>
                <br />
                <span className="text-white font-medium">+91 99999 55555</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="border-t border-slate-700 mt-12 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            © {year} GDG UMIT — Built with ❤ by the Technical Workforce
          </p>
        </div>

      </div>

    </footer>
  );
};

export default Footer;
