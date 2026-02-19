import React from "react";
import MemberCard from "./MemberCard";

const MemberDiv = ({ members = [] }) => {
    if (!members.length) return null;

    return (
        <div className="member-flex-container">
            {members.map((member, index) => (
                <MemberCard
                    key={member._id || index}
                    {...member}
                    index={index}
                />
            ))}
        </div>
    );
};

export default MemberDiv;