import React from 'react';
import { FaLinkedin } from 'react-icons/fa';

const MemberCard = ({ name, position, linkedin, photo }) => {
  return (
    <div className='w-[250px] md:w-[200px] lg:w-[220px] border-2 cursor-pointer bg-black/20 border-white rounded-[5px] mx-2 text-center flex flex-col justify-center items-center'>
      <div className="circle w-[10em] h-[10em] rounded-full bg-white mt-1 overflow-hidden">
        {photo ? (
          <img src={photo} alt={name} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full bg-gray-300 flex items-center justify-center text-black">
            {name[0]} {/* First letter as placeholder */}
          </div>
        )}
      </div>

      <div className="info mt-2">
        <div className="name-div font-bold text-xl">{name}</div>
        <div className="position-div font-semibold flex items-center justify-center gap-2 mt-1">
          <h2>{position}</h2>
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#0d1925d2] transition-colors duration-200"
            >
              <FaLinkedin size={22} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
