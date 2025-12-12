import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import MemberCard from '../components/team/MemberCard';
import MemberDiv from '../components/team/MemberDiv';
import TeamDeco from '../components/team/TeamDeco';
import data from '../../public/team/data';

const Team = () => {
    gsap.registerPlugin(ScrollToPlugin);

    const [selected, setSelected] = useState('Leads');

    // const getButtonClasses = (name, selected) => {
    //     const baseClasses = 'px-8 py-2  font-black transition-all duration-300 ease-in-out border-4';
    //     const selectedClasses = 'bg-black text-[#0F71F2] border-[#0F71F2] shadow-[5px_5px_0_0_#0F71F2]';
    //     const unselectedClasses = 'bg-[#121212] text-white border-[#121212] hover:shadow-[7px_7px_0_0_black]';

    //     return name === selected
    //         ? `${baseClasses} ${selectedClasses}`
    //         : `${baseClasses} ${unselectedClasses}`;
    // };

    const rowRefs = Array.from({ length: 7 }, () => useRef(null));

    const rows = [
        { title: "Leads", color: "#4285F4", ref: rowRefs[0], key: "Leads" },
        { title: "Operations", color: "#34A853", ref: rowRefs[1], key: "Operations" },
        { title: "Technical Team", color: "#EA4335", ref: rowRefs[2], key: "Technical" },
        { title: "PR and Marketing", color: "#FBBC04", ref: rowRefs[3], key: "PR" },
        { title: "Outreach", color: "#4285F4", ref: rowRefs[4], key: "Outreach" },
        { title: "Content", color: "#34A853", ref: rowRefs[5], key: "Content" },
        { title: "UI/UX", color: "#EA4335", ref: rowRefs[6], key: "UI" },
    ];

    const handleMouseEnter = (rowRef) => {
        gsap.to(rowRef.current, {
            height: "25vw",
            duration: 0.4,
            ease: "power2.out",
            onComplete: () => {
                gsap.to(window, {
                    duration: 0.5,
                    // scrollTo: { y: rowRef.current, offsetY: 5 },
                    ease: "expo.out" 
                });
            }
        });
    };

    const handleMouseLeave = (rowRef) => {
        gsap.to(rowRef.current, {
            height: "5.5vw",
            duration: 0.4,
            ease: "expo.out" 
        });
    };

    // Helper to get members for row 0 based on selection
    const getMembersForRow0 = () => {
        if (selected === "Leads") return data.Leads.Leads;
        if (selected === "Workforce") return [];
        return [];
    };

    return (
        <div id='team-container' className='team-container min-h-screen pb-5 w-full flex h-full items-center'>
            <div className="all-rows w-[65vw] px-30 pt-5 h-full flex flex-col gap-2">

                {/* Buttons Row */}
                {/* <div className="flex font2 text-3xl pb-5 gap-4 justify-center items-center mb-4">
                    <button
                        className={getButtonClasses('Leads', selected)}
                        onClick={() => setSelected('Leads')}>
                        Leads
                    </button>
                    <button
                        className={getButtonClasses('Workforce', selected)}
                        onClick={() => setSelected('Workforce')}>
                        Workforce
                    </button>
                </div> */}

                {rows.map((row, index) => (
                    <div
                        key={index}
                        ref={row.ref}
                        className="row all-rows-row group flex flex-col justify-center items-center text-center w-full py-4"
                        style={{ height: "5.5vw", backgroundColor: row.color }}
                        onMouseEnter={() => handleMouseEnter(row.ref)}
                        onMouseLeave={() => handleMouseLeave(row.ref)}
                    >
                        {/* Row Title */}
                        <div className="text-div w-full">
                            <h1 className="team-text">
                                {index === 0 ? (selected === "Leads" ? "Leads" : "Workforce") : row.title}
                            </h1>
                        </div>

                        {/* MEMBER CONTENT */}
                        <div className="member-div  w-full h-full hidden group-hover:flex justify-center items-center">

                            {/* Row 0 → Leads / Workforce switching */}
                            {index === 0 && <MemberDiv members={getMembersForRow0()} />}

                            {/* Other rows → show based on row.key */}
                            {index !== 0 && data[selected][row.key] && (
                                <div className="flex gap-4 flex-wrap justify-center w-full">
                                    {data[selected][row.key].map((member, i) => (
                                        <MemberCard key={i} {...member} />
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                ))}

            </div>

            <div className="team-deco sticky top-0 h-screen w-[25vw] flex items-center justify-center">
               <TeamDeco selected={selected} setSelected={setSelected} />
            </div>
        </div>
    );
};

export default Team;
