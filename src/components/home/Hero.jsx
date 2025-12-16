import React from "react";
import { Link } from "react-router-dom";
import CodeBlock from "./CodeBlock";

const Hero = () => {
    const gdgColors = {
        blue: "#4285F4",
        red: "#EA4335",
        yellow: "#FBBC04",
        green: "#34A853",
    };

    return (
        <div className=" min-h-[90vh] mx-40 mt-20 flex items-center justify-center border border-[#121212] bg-[#121212] py-20 overflow-hidden">
            
            <div className="max-w-8xl w-full flex justify-between items-center px-4 sm:px-6 lg:px-8">
                
                {/* LEFT DIV */}
                <div className="flex-1 text-left text-white">
                    <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black mb-4 leading-tight">
                        <span className="inline-block">
                            <span style={{ color: gdgColors.blue }}>&lt;</span>
                            <span className="inline-block mx-0.5">
                                <span style={{ color: gdgColors.red }}>G</span>
                                <span style={{ color: gdgColors.yellow }}>D</span>
                                <span style={{ color: gdgColors.green }}>G</span>
                                <span style={{ color: gdgColors.blue }}>U</span>
                                <span style={{ color: gdgColors.red }}>M</span>
                                <span style={{ color: gdgColors.yellow }}>I</span>
                                <span style={{ color: gdgColors.green }}>T</span>
                            </span>
                            <span style={{ color: gdgColors.red }}>/&gt;</span>
                        </span>
                    </h1>

                    <h2 className="text-4xl font-extrabold mb-6" >
                        Think. Build. Scale.
                    </h2>

                    <p className="text-xl text-gray-400 max-w-xl mb-10">
                        Innovating with Google technologies. Join our community of developers,
                        learners, and visionaries.
                    </p>

                    <Link
                        to="/team"
                        className="inline-flex items-center justify-center px-8 py-3 w-60 text-lg font-bold rounded-lg text-white bg-black border-4 border-[#FBBC04] shadow-[4px_4px_0_0_#FBBC04] transition-all duration-200 transform hover:shadow-none hover:translate-x-1 hover:translate-y-1"
                    >
                        Meet The Team
                        <span className="arrow ml-3 inline-block transition-transform duration-300">→</span>
                    </Link>
                </div>

                {/* RIGHT DIV */}
                <div className="flex-1 hidden lg:flex justify-center items-center">
                    <CodeBlock />
                </div>

            </div>

            
        </div>
    );
};

export default Hero;
