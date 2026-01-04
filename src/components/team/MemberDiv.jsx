import React from 'react'
import MemberCard from './MemberCard'

const MemberDiv = ({ members }) => {
  return (
    <div className="members-container">
      {members.map((member, i) => (
        <MemberCard key={i} {...member} />
      ))}
    </div>
  );
};

export default MemberDiv;