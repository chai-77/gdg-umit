import React from "react";

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-black border-t border-white/10 py-24">
            <div className="max-w-7xl mx-auto px-6 font-mono text-white">

                {/* Main Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-14 mb-20">

                    {/* Brand */}
                    <div className="space-y-5">
                        <h2 className="text-2xl md:text-3xl font-black tracking-tighter uppercase ">
                            GDG UMIT
                        </h2>
                        <p className="text-white/60 text-base leading-relaxed max-w-sm">
                            Building, learning, and innovating with Google technologies at
                            Usha Mittal Institute of Technology.
                        </p>
                    </div>
                    {/* Resources */}
                    <div className="space-y-5">
                        <h3 className="text-sm font-bold tracking-widest uppercase text-white/70">
                            Resources
                        </h3>
                        <ul className="space-y-3 text-base text-white/60">
                            <li>
                                <a
                                    href="https://gdg.community.dev/gdg-on-campus-usha-mittal-institute-of-technology-mumbai-india/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-white underline decoration-white/20 underline-offset-4 transition-colors"
                                >
                                    Official Community Page
                                </a>
                            </li>
                            <li>gdg@umit.edu</li>
                        </ul>
                    </div>
                    {/* Connect */}
                    <div className="space-y-5">
                        <h3 className="text-sm font-bold tracking-widest uppercase text-white/70">
                            Connect
                        </h3>
                        <ul className="space-y-3 text-base">
                            <li>
                                <a
                                    href="https://www.linkedin.com/company/gdsc-umit/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white/60 hover:text-gdg-blue transition-colors"
                                >
                                    LinkedIn
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://twitter.com/DscUmit"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white/60 hover:text-gdg-red transition-colors"
                                >
                                    Twitter
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.instagram.com/gdg_umit"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white/60 hover:text-gdg-yellow transition-colors"
                                >
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://discord.gg/WxRDeAFxbu"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white/60 hover:text-gdg-green transition-colors"
                                >
                                    Discord
                                </a>
                            </li>
                        </ul>
                    </div>



                </div>

                {/* Bottom */}
                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
                    <p className="text-white/30 text-xs md:text-sm order-2 md:order-1">
                        © {year} GDG UMIT — All rights reserved.
                    </p>
                    <p className="text-white/20 text-[10px] md:text-xs tracking-[0.2em] uppercase order-1 md:order-2">
                        Built by the Technical Workforce
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
