import React from "react";

const CodeBlock = () => {
    // Color roles defined in your request:
    const gdgColors = {
        blue: "#4285F4",   // keywords (import, def)
        red: "#EA4335",    // functions (run, log)
        yellow: "#FBBC04", // strings / values
        green: "#34A853",  // variables (community)
    };

    return (
        // Container size remains medium: w-[500px] h-[280px]
        <div className="w-[500px] h-[280px] bg-[#1a1a1a] rounded-md border border-gray-700 select-none shadow-lg overflow-hidden">
            
            {/* Top Bar */}
            <div className="h-6 bg-[#2c2c2c] flex items-center px-3 gap-2">
                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            </div>

            {/* Code Content */}
            <div className="p-5 font-mono text-sm text-white h-[calc(100%-24px)] overflow-y-auto">
                <span className="text-gray-400"># GDG UMIT - Core Boot Sequence</span>

                {/* Main Logic - Highly Simplified */}
                <div className="mt-2 text-white">
                    <span style={{ color: gdgColors.blue }}>import</span> <span style={{ color: gdgColors.green }}>gdg_core</span>
                </div>

                <div className="text-white">
                    <span style={{ color: gdgColors.green }}>community</span> = <span style={{ color: gdgColors.yellow }}>"UMIT"</span>
                </div>

                <div className="mt-3 text-white">
                    <span style={{ color: gdgColors.red }}>gdg_core.initialize</span>(<span style={{ color: gdgColors.green }}>community</span>)
                </div>

                <div className="text-white">
                    <span style={{ color: gdgColors.red }}>gdg_core.execute_events</span>()
                </div>

                <div className="mt-3 text-white">
                    <span style={{ color: gdgColors.red }}>print</span>(<span style={{ color: gdgColors.yellow }}>"System Ready: Collaboration is live."</span>)
                </div>

                <span className="text-gray-400 mt-2 block"># Build. Grow. Lead.</span>
            </div>
        </div>
    );
};

export default CodeBlock;