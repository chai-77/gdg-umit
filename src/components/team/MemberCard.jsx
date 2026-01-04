import React from 'react';
import { FaLinkedin } from 'react-icons/fa';

const MemberCard = ({ name, position, linkedin, photo }) => {
  return (
    <div className='member-card'>
      <div className="member-photo">
        {photo ? (
          <img src={photo} alt={name} className="photo-img" />
        ) : (
          <div className="photo-placeholder">
            {name[0]}
          </div>
        )}
      </div>

      <div className="member-info">
        <div className="member-name">{name}</div>
        <div className="member-position">
          <h2>{position}</h2>
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin-link"
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
