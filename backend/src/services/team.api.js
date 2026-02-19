const API_BASE = "http://localhost:3000"; 

export const fetchLeads = async () => {
  const res = await fetch(`${API_BASE}/team/leads`);
  const data = await res.json();
  return data.team;
};

export const fetchWorkforce = async () => {
  const res = await fetch(`${API_BASE}/team/workforce`);
  const data = await res.json();
  return data.team;
};
