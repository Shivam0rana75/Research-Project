"use client";

import { useEffect, useState } from "react";
import { getUser } from "@/lib/session";
import TableContainer from "@/components/table/TableContainer";
import Card from "@/components/dashboard/Card.jsx";
import { Factory } from "lucide-react";

const columns = [
  { header: "Alert ID", accessor: "incidentId" },
  { header: "Severity", accessor: "severity", type: "severity" },
  { header: "System", accessor: "system" },
  { header: "Alert Type", accessor: "type" },
  { header: "Description", accessor: "description" },
  { header: "Timestamp", accessor: "time" },
  { header: "Status", accessor: "status", type: "status" },
];

export default function ITAlertsPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const user = getUser();

      const res = await fetch("/api/incidents/it-alerts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          orgId: user.organizationId,
        }),
      });

      const result = await res.json();

      const formatted = result.map((row, index) => ({
        id: `${row.incident_id}-${index}`,
        incidentId: row.incident_id,
        severity: row.level,
        system: row.asset_name,
        type: row.asset_type,
        description: row.description,
        time: new Date(row.created_at).toLocaleString(),
        status: row.status,
      }));

      setData(formatted);
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-[#080b11] p-8">
      <h1 className="text-2xl font-semibold text-slate-100 mb-1">
        IT Security Alerts
      </h1>
      <p className="text-sm text-slate-500 mb-8">
        Information Technology security events and threats
      </p>

      
      <div className="flex justify-between mb-8">
        <Card title="Critical Alerts" value={data.length} icon={<Factory size={24} className="text-red-500" />} />
        <Card title="High Priority" value={data.length} icon={<Factory size={24} className="text-yellow-500" />} />
        <Card title="Investigating" value={data.length} icon={<Factory size={24} className="text-blue-500" />} />
        <Card title="Resolved Today" value={data.length} icon={<Factory size={24} className="text-green-500" />} />
      </div>

      <TableContainer
        title="All IT Security Alerts"
        columns={columns}
        data={data}
        onRowClick={(row) => {
          window.location.href = `/dashboard/${row.incidentId}`;
        }}
      />
    </div>
  );
}