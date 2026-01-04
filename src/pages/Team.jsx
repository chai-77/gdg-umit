import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import MemberCard from '../components/team/MemberCard';
import MemberDiv from '../components/team/MemberDiv';
import TeamDeco from '../components/team/TeamDeco';
import data from '../../public/team/data';

const Team = () => {
  const [selected, setSelected] = useState('Leads');
  const rowRefs = Array.from({ length: 7 }, () => useRef(null));
  const collapsedHeights = useRef(new Map());

  const rows = [
    { title: "Leads", color: "#4285F4", ref: rowRefs[0], key: "Leads" },
    { title: "Operations", color: "#34A853", ref: rowRefs[1], key: "Operations" },
    { title: "Technical Team", color: "#EA4335", ref: rowRefs[2], key: "Technical" },
    { title: "PR and Marketing", color: "#FBBC04", ref: rowRefs[3], key: "PR" },
    { title: "Outreach", color: "#4285F4", ref: rowRefs[4], key: "Outreach" },
    { title: "Content", color: "#34A853", ref: rowRefs[5], key: "Content" },
    { title: "UI/UX", color: "#EA4335", ref: rowRefs[6], key: "UI" },
  ];

  // Cache collapsed heights ONCE
  useEffect(() => {
    if (window.innerWidth < 640) return;

    rowRefs.forEach(ref => {
      if (!ref.current) return;
      const title = ref.current.querySelector('.text-div');
      const h = title.offsetHeight + 32;
      collapsedHeights.current.set(ref.current, h);
      gsap.set(ref.current, { height: h });
    });
  }, []);

  const expandRow = (ref) => {
    if (window.innerWidth < 640) return;

    const el = ref.current;
    gsap.killTweensOf(el);

    const currentHeight = el.offsetHeight;
    gsap.set(el, { height: "auto" });
    const targetHeight = el.scrollHeight;

    gsap.fromTo(
      el,
      { height: currentHeight },
      {
        height: targetHeight,
        duration: 0.45,
        ease: "power3.out",
        overwrite: true
      }
    );
  };

  const collapseRow = (ref) => {
    if (window.innerWidth < 640) return;

    const el = ref.current;
    gsap.killTweensOf(el);

    const targetHeight = collapsedHeights.current.get(el);

    gsap.to(el, {
      height: targetHeight,
      duration: 0.35,
      ease: "power3.inOut",
      overwrite: true
    });
  };

  const getMembersForRow0 = () => {
    if (selected === "Leads") return data.Leads.Leads;
    return [];
  };

  return (
    <div className="team-container">
      <div className="all-rows">
        {rows.map((row, index) => (
          <div
            key={index}
            ref={row.ref}
            className="all-rows-row"
            style={{ backgroundColor: row.color }}
            onMouseEnter={() => expandRow(row.ref)}
            onMouseLeave={() => collapseRow(row.ref)}
          >
            <div className="text-div">
              <h1 className="team-text">
                {index === 0 ? "Leads" : row.title}
              </h1>
            </div>

            <div className="member-div">
              {index === 0 && <MemberDiv members={getMembersForRow0()} />}
              {index !== 0 && data[selected][row.key] && (
                <div className="members-container">
                  {data[selected][row.key].map((m, i) => (
                    <MemberCard key={i} {...m} />
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="team-deco-wrapper">
        <TeamDeco selected={selected} setSelected={setSelected} />
      </div>
    </div>
  );
};

export default Team;
