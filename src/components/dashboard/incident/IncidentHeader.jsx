"use client";

import { getUser } from "@/lib/session";

async function updateStatus(id, status) {
  const user = getUser();

  const res = await fetch("/api/incidents/update-status", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      incidentId: id,
      newStatus: status,
      role: user.role,
    }),
  });

  const data = await res.json();

  if (!res.ok) {
    alert(data.error);
    return;
  }

  window.location.reload(); 
}

const user = getUser();
const role = user?.role;



export default function IncidentHeader({ incident }) {
  return (
    <div className="w-full border-b border-[#1f2937]">
      <div className="px-8 py-6 flex justify-between items-center text-white">

        <div>
          <div className="flex items-center gap-3 mb-4">

            <span className="flex items-center gap-2 px-3 py-1 text-sm font-semibold rounded-full bg-red-500/20 text-red-400 border border-red-500/30">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              {incident.severity.toUpperCase()}
            </span>

            <span className="px-3 py-1 text-sm font-semibold rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/30">
              {incident.domain}
            </span>

            <span className="text-gray-400 text-sm tracking-wide">
              {incident.incidentId}
            </span>

          </div>

          <h1 className="text-3xl font-semibold mb-2">
            {incident.title}
          </h1>

          <p className="text-gray-400 text-sm">
            {incident.location} • {incident.time}
          </p>
        </div>

        <div className="flex items-center gap-4">

          <button
            disabled={role === "employee"}
            onClick={() => updateStatus(incident.incidentId, "Acknowledged")}
            className={`px-4 py-2 rounded-lg ${
              role === "employee"
                ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                : "bg-gray-800 text-white hover:bg-gray-700"
            }`}
            title={role === "employee" ? "Only managers/admins allowed" : ""}
          >
            Acknowledge
          </button>

          <button
            onClick={() => updateStatus(incident.incidentId, "Escalated")}
            className="px-4 py-2 rounded-lg bg-yellow-500/20 text-yellow-400 hover:bg-yellow-500/30"
          >
            Escalate
          </button>

          <button
            disabled={role === "employee"}
            onClick={() => updateStatus(incident.incidentId, "Resolved")}
            className={`px-4 py-2 rounded-lg ${
              role === "employee"
                ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                : "bg-green-500/20 text-green-400 hover:bg-green-500/30"
            }`}
            title={role === "employee" ? "Only managers/admins allowed" : ""}
          >
            Resolve
          </button>

        </div>

      </div>
    </div>
  );
}