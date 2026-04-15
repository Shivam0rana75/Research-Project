"use client";
import { incidents } from "@/data/data.js"; // your existing data file
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

const getAlertRows = (incidents, domain) => {
  return Object.values(incidents)
    .filter((inc) => inc.domain === domain)
    .flatMap((inc) => {
      const otAssets = inc.affectedAssets?.OTEquipment || [];
      const itAssets = inc.affectedAssets?.ITServices || [];

      const assets = domain === "OT" ? otAssets : itAssets;

      return assets.map((asset, index) => ({
        id: `${inc.incidentId}-${index}`,
        incidentId: inc.incidentId,
        severity: asset.level,
        system: asset.name,
        type: asset.type,
        description: inc.description,
        time: inc.time,
        status: inc.status,
      }));
    });
};
const itAlerts = getAlertRows(incidents, "IT");



export default function ITAlertsPage() {
  return (
    <div className="min-h-screen bg-[#080b11] p-8">
      <h1 className="text-2xl font-semibold text-slate-100 mb-1">IT Security Alerts</h1>
      <p className="text-sm text-slate-500 mb-8">Information Technology security events and threats</p>

      <div className="flex justify-between mb-8">
        <Card title="Critical Alerts" value ="5" icon={<Factory size={24} className="text-red-500" />} />
        <Card title="High Priority" value ="5" icon={<Factory size={24} className="text-yellow-500" />} />
        <Card title="Investigating" value ="5" icon={<Factory size={24} className="text-blue-500" />} />
        <Card title="Resolved Today" value ="5" icon={<Factory size={24} className="text-green-500" />} />
      </div>

      <TableContainer
        title="All IT Security Alerts"
        columns={columns}
        data={itAlerts}
        onRowClick={(row) => console.log("Selected:", row)}
      />
    </div>
  );
}
