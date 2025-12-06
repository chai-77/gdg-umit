import React from 'react'
import MemberCard from './MemberCard'

const MemberDiv = () => {
  return (
    <div className="flex justify-center w-full h-full gap-2">
      <MemberCard />
      <MemberCard />
      <MemberCard />
    </div>
  );
};

export default MemberDiv;