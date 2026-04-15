"use client";

import TableContainer from "@/components/table/TableContainer";
import { incidents } from "@/data/data";


const mapStatus = (status) => {
  if (status === "Open") return "ACTIVE";
  if (status === "Investigating") return "INVESTIGATING";
  if (status === "Resolved") return "RESOLVED";
  if (status === "Acknowledged") return "ACKNOWLEDGED";
  return "ACTIVE";
};


const isLive = (status) =>
  status === "ACTIVE" || status === "INVESTIGATING";


const getLiveIncidents = () => {
  return Object.values(incidents)
    .map((inc) => ({
      id: inc.incidentId, 
      incidentId: inc.incidentId,
      severity: inc.severity.toUpperCase(),
      domain: inc.domain,
      title: inc.title,
      location: inc.location,
      time: inc.time,
      status: mapStatus(inc.status),
    }))
    .filter((inc) => isLive(inc.status));
};

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
  const data = getLiveIncidents();

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
        onRowClick={(row) => console.log("Clicked:", row)}
      />
    </div>
  );
}