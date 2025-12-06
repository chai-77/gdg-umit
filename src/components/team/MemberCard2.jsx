import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const MemberCard = ({ name, role, img, linkedin, github }) => {
    return (
        <div className="member-card bg-black/40 backdrop-blur-md border-2 border-white/20 
                        text-white rounded-2xl px-6 py-6 flex flex-col items-center 
                        shadow-lg w-56 hover:scale-105 transition-all duration-300">

            {/* Avatar */}
            <img
                src={img}
                alt={name}
                className="w-28 h-28 object-cover rounded-full border-4 border-white/30 shadow-md"
            />

            {/* Name */}
            <h2 className="mt-4 text-2xl font-bold text-center">{name}</h2>

            {/* Role */}
            <p className="text-sm text-gray-300 text-center">{role}</p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-4">
                {linkedin && (
                    <a
                        href={linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-500 text-2xl transition"
                    >
                        <FaLinkedin />
                    </a>
                )}
                {github && (
                    <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-white text-2xl transition"
                    >
                        <FaGithub />
                    </a>
                )}
            </div>
        </div>
    );
};

export default MemberCard;
