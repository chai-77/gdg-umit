import React from 'react'
import MemberCard from './MemberCard'

const MemberDiv = ({ members }) => {
  return (
    <div className="flex flex-wrap justify-center w-full gap-4">
      {members.map((member, i) => (
        <MemberCard key={i} {...member} />
      ))}
    </div>
  );
};

export default MemberDiv;