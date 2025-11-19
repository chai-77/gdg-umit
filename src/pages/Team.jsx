import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

const Team = () => {
    gsap.registerPlugin(ScrollToPlugin);

     const [selected, setSelected] = useState('Leads');


const getButtonClasses = (name, selected) => {

    const baseClasses = 'px-8 py-2 rounded-xl font-black transition-all duration-300 ease-in-out border-4';

    const selectedClasses = 'bg-black text-[#0F71F2] border-[#0F71F2] shadow-[5px_5px_0_0_#0F71F2]'; 
    
    const unselectedClasses = 'bg-black text-white border-white shadow-[5px_5px_0_0_white] hover:shadow-[7px_7px_0_0_white]';

    if (name === selected) {
        return `${baseClasses} ${selectedClasses}`;
    } else {
        return `${baseClasses} ${unselectedClasses}`;
    }
};
    const row1Ref = useRef(null);
    const row2Ref = useRef(null);
    const row3Ref = useRef(null);
    const row4Ref = useRef(null);
    const row5Ref = useRef(null);
    const row6Ref = useRef(null);

    const handleMouseEnter = (rowRef) => {
        gsap.to(rowRef.current, {
            height: "20vw",
            duration: 0.3,
            ease: "power2.out",
            onComplete: () => {
                gsap.to(window, {
                    duration: 0.5,
                    scrollTo: { y: rowRef.current, offsetY: 20 },
                    ease: "power2.out",
                });
            }
        });

    };

    const handleMouseLeave = (rowRef) => {
        gsap.to(rowRef.current, {
            height: "5.5vw",
            duration: 0.3,
            ease: "power2.out",
        });
    };

    return (
        <div id='team-container' className='team-container min-h-screen pb-5  w-full bg-black/95'>
            <div className="all-rows w-1/2 px-30  pt-5 h-full flex flex-col gap-2">
                {/* Buttons Row */}
                <div className="flex font2 text-3xl pb-5 gap-4 justify-center items-center mb-4">
                    <button className={getButtonClasses('Leads', selected)} onClick={() => setSelected('Leads')}>
                        Leads
                    </button>
                    <button className={getButtonClasses('Workforce', selected)} onClick={() => setSelected('Workforce')}>
                        Workforce
                    </button>
                </div>

                <div
                    ref={row1Ref}
                    className="row all-rows-row flex justify-center w-full bg-[#4285F4] py-4"
                    style={{ height: "5.5vw" }}
                    onMouseEnter={() => handleMouseEnter(row1Ref)}
                    onMouseLeave={() => handleMouseLeave(row1Ref)}
                >
                    <h1 className='team-text'>{selected}</h1>
                </div>
                <div
                    ref={row2Ref}
                    className="row all-rows-row flex justify-center w-full bg-[#EA4335] py-4"
                    style={{ height: "5.5vw" }}
                    onMouseEnter={() => handleMouseEnter(row2Ref)}
                    onMouseLeave={() => handleMouseLeave(row2Ref)}
                >
                    <h1 className='team-text'>Technical Team</h1>
                </div>
                <div
                    ref={row3Ref}
                    className="row all-rows-row flex justify-center w-full bg-[#FBBC04] py-4"
                    style={{ height: "5.5vw" }}
                    onMouseEnter={() => handleMouseEnter(row3Ref)}
                    onMouseLeave={() => handleMouseLeave(row3Ref)}
                >
                    <h1 className='team-text'>PR and Marketing</h1>
                </div>
                <div
                    ref={row4Ref}
                    className="row all-rows-row flex justify-center w-full bg-[#4285F4] py-4"
                    style={{ height: "5.5vw" }}
                    onMouseEnter={() => handleMouseEnter(row4Ref)}
                    onMouseLeave={() => handleMouseLeave(row4Ref)}
                >
                    <h1 className='team-text'>Outreach</h1>
                </div>
                <div
                    ref={row5Ref}
                    className="row all-rows-row flex justify-center w-full bg-[#34A853] py-4"
                    style={{ height: "5.5vw" }}
                    onMouseEnter={() => handleMouseEnter(row5Ref)}
                    onMouseLeave={() => handleMouseLeave(row5Ref)}
                >
                    <h1 className='team-text'>Content</h1>
                </div>
                <div
                    ref={row6Ref}
                    className="row all-rows-row flex justify-center w-full bg-[#EA4335] py-4"
                    style={{ height: "5.5vw" }}
                    onMouseEnter={() => handleMouseEnter(row6Ref)}
                    onMouseLeave={() => handleMouseLeave(row6Ref)}
                >
                    <h1 className='team-text'>UI/UX</h1>
                </div>
            </div>
        </div>
    );
};

export default Team;
