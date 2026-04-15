"use client";
import { incidents } from "@/data/data.js"; // your existing data file
import TableContainer from "@/components/table/TableContainer";
import Card from "@/components/dashboard/Card.jsx";
import { Factory } from "lucide-react";

const columns = [
  { header: "Alert ID",    accessor: "incidentId",   type: "id" },
  { header: "Severity",    accessor: "severity",     type: "severity" },
  { header: "Device Name", accessor: "location",     type: "device" },
  { header: "Description", accessor: "description" },
  { header: "Timestamp",   accessor: "time" },
  { header: "Status",      accessor: "status",       type: "status" },
];

const otAlerts = Object.values(incidents).filter((inc) => inc.domain === "OT");

export default function OTAlertsPage() {
  return (
    <div className="min-h-screen bg-[#080b11] p-8">
      <h1 className="text-2xl font-semibold text-slate-100 mb-1">OT System Alerts</h1>
      <p className="text-sm text-slate-500 mb-8">Operational Technology and industrial control system alerts</p>


      <div className="flex justify-between mb-8">
              <Card title="Critical Alerts" value ="5" icon={<Factory size={24} className="text-red-500" />} />
              <Card title="High Priority" value ="5" icon={<Factory size={24} className="text-yellow-500" />} />
              <Card title="Investigating" value ="5" icon={<Factory size={24} className="text-blue-500" />} />
              <Card title="Resolved Today" value ="5" icon={<Factory size={24} className="text-green-500" />} />
      </div>

      <TableContainer
        title="All OT System Alerts"
        columns={columns}
        data={otAlerts}
        onRowClick={(row) => console.log("Selected:", row)}
      />
    </div>
  );
}
