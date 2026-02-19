import React, { useEffect, useState } from "react";

import MemberDiv from "../components/team/MemberDiv";
import TeamDeco from "../components/team/TeamDeco";
import { fetchLeads, fetchWorkforce } from "../../../backend/src/services/team.api";

import "../components/team/team.css";

const ROWS = [
    { title: "Leads", key: "Leads", color: "var(--color-gdg-blue)" },
    { title: "Operations", key: "Operations", color: "var(--color-gdg-green)" },
    { title: "Technical Team", key: "Technical", color: "var(--color-gdg-red)" },
    { title: "PR and Marketing", key: "PR", color: "var(--color-gdg-yellow)" },
    { title: "Outreach", key: "Outreach", color: "var(--color-gdg-blue)" },
    { title: "Content", key: "Content", color: "var(--color-gdg-green)" },
    { title: "UI / UX", key: "UI", color: "var(--color-gdg-red)" }
];

// group API response by department
const groupByDepartment = (members = []) =>
    members.reduce((acc, m) => {
        const dept = m.department || "Other";
        if (!acc[dept]) acc[dept] = [];
        acc[dept].push({ ...m, photo: m.image });
        return acc;
    }, {});

const Team = () => {
    const [selected, setSelected] = useState("Leads");
    const [teamData, setTeamData] = useState({});

    useEffect(() => {
        const loadTeam = async () => {
            const data =
                selected === "Leads"
                    ? await fetchLeads()
                    : await fetchWorkforce();

            setTeamData(groupByDepartment(data));
        };

        loadTeam();
    }, [selected]);

    return (
        <section className="team-container">

           
            <div className="team-deco-wrapper">
                <TeamDeco selected={selected} setSelected={setSelected} />
            </div>

            {/* ALL ROWS */}
            <div className="all-rows">
                {ROWS.map((row) => (
                    <div
                        key={row.key}
                        className="all-rows-row"
                        style={{ backgroundColor: row.color }}
                    >
                        {/* ROW TITLE */}
                        <div className="text-div">
                            <h2 className="team-text">
                                {row.key === "Leads" && selected === "Workforce"
                                    ? "Workforce"
                                    : row.title}
                            </h2>
                        </div>

                        {/* MEMBER DIV */}
                        <div className="member-div">
                            {row.key === "Leads" ? (
                                selected === "Leads" && teamData.Leads?.length ? (
                                    <MemberDiv members={teamData.Leads} />
                                ) : (
                                    <p className="team-empty">
                                        {selected === "Leads"
                                            ? ""
                                            : ""}
                                    </p>
                                )
                            ) : teamData[row.key]?.length ? (
                                <MemberDiv members={teamData[row.key]} />
                            ) : null}
                        </div>
                    </div>
                ))}
            </div>

        </section>
    );
};

export default Team;
