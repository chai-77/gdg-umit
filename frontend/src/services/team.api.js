const API_BASE = import.meta.env.VITE_API_URL;

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
