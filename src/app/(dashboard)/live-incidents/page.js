"use client";

import { useEffect, useState } from "react";
import { getUser } from "@/lib/session";
import TableContainer from "@/components/table/TableContainer";

const mapStatus = (status) => {
  if (status === "Open") return "ACTIVE";
  if (status === "Investigating") return "INVESTIGATING";
  if (status === "Resolved") return "RESOLVED";
  if (status === "Acknowledged") return "ACKNOWLEDGED";
  return "ACTIVE";
};

const isLive = (status) =>
  status === "ACTIVE" || status === "INVESTIGATING";

const columns = [
  { header: "Incident ID", accessor: "incidentId", type: "id" },
  { header: "Severity", accessor: "severity", type: "severity" },
  { header: "Domain", accessor: "domain" },
  { header: "Title", accessor: "title" },
  { header: "Location", accessor: "location" },
  { header: "Time", accessor: "time" },
  { header: "Status", accessor: "status", type: "status" },
];

export default function LiveIncidentsPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const user = getUser();

      const res = await fetch("/api/incidents/live", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          orgId: user.organizationId,
        }),
      });

      const result = await res.json();

     
      const formatted = result
        .map((inc) => ({
          id: inc.id,
          incidentId: inc.id,
          severity: inc.severity.toUpperCase(),
          domain: inc.domain,
          title: inc.title,
          location: inc.location,
          time: new Date(inc.created_at).toLocaleString(),
          status: mapStatus(inc.status),
        }))
        .filter((inc) => isLive(inc.status));

      setData(formatted);
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-[#080b11] p-8">

      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-white">
            Live Incidents
          </h1>
          <p className="text-gray-500">
            Real-time incident monitoring
          </p>
        </div>
      </div>

      <TableContainer
        title="Live Incidents"
        columns={columns}
        data={data}
        onRowClick={(row) => {
          window.location.href = `/dashboard/${row.incidentId}`;
        }}
      />

    </div>
  );
}