import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const MemberCard = () => {
  return (
    <div className="w-[220px] h-[300px]  border-4 border-[#202124] shadow-lg  transition transform hover:scale-105 duration-300 flex flex-col">
      
      {/* Image area */}
      <div className="flex-1 bg-[#D2E3FC] flex items-center justify-center border-b-4 border-[#202124]">
        <span className="text-[#202124] font-bold text-sm tracking-wide">Image</span>
      </div>

      {/* Info area */}
      <div className="p-3 flex flex-col gap-2 bg-[#FEEFC3] flex-none">
        <h2 className="font-[Londrina Shadow] text-2xl text-[#FBBC04]">John Doe</h2>
        <p className="font-bold text-[#174EA6] text-sm">Lead Developer</p>
        
        {/* Socials */}
        <div className="flex gap-3 mt-2">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="w-6 h-6 text-[#174EA6] hover:text-[#0D652D] transition" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaGithub className="w-6 h-6 text-[#202124] hover:text-[#A50E0E] transition" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
