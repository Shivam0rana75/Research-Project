"use client";

import { assets, incidents, departments } from "@/data/data";
import Card from "@/components/dashboard/Card";
import TableContainer from "@/components/table/TableContainer";
import { Server } from "lucide-react";


const getAssetIncidentCount = (assetId) => {
  return Object.values(incidents).filter((inc) => {
    const ot = inc.affectedAssets?.OTEquipment || [];
    const it = inc.affectedAssets?.ITServices || [];

    return [...ot, ...it].some((a) => a.name === assetId);
  }).length;
};

const getLastIncidentTime = () => {
  return "2 min ago"; 
};

const mapImpact = (criticality) => {
  if (criticality === "CRITICAL") return "CRITICAL";
  if (criticality === "WARNING") return "HIGH";
  return "LOW";
};

const getDepartment = (asset) => {
  if (asset.domain === "OT") return "Process Control";
  return "IT Security";
};

const assetRows = Object.values(assets).map((asset) => ({
  id: asset.id,
  assetId: asset.id,
  name: asset.name,
  type: asset.type,
  location: asset.location,
  department: getDepartment(asset),
  impact: mapImpact(asset.criticality),
  incidents: getAssetIncidentCount(asset.id),
  lastIncident: getLastIncidentTime(),
}));



const totalAssets = assetRows.length;

const criticalAssets = assetRows.filter(
  (a) => a.impact === "CRITICAL"
).length;

const assetsWithAlerts = assetRows.filter(
  (a) => a.incidents > 0
).length;

const healthyAssets = totalAssets - assetsWithAlerts;


const columns = [
  {
    header: "Status",
    accessor: "impact",
    type: "statusDot",
  },
  { header: "Asset ID", accessor: "assetId" },
  {
    header: "Asset Name",
    accessor: "name",
    render: (row) => (
      <div>
        <p className="text-white font-semibold">{row.name}</p>
        <p className="text-xs text-gray-500">{row.type}</p>
      </div>
    ),
  },
  { header: "Location", accessor: "location" },
  { header: "Department", accessor: "department" },
  {
    header: "Impact Level",
    accessor: "impact",
    type: "severity",
  },
  {
    header: "Incidents",
    accessor: "incidents",
  },
  {
    header: "Last Incident",
    accessor: "lastIncident",
  },
];


export default function AssetsPage() {
  return (
    <div className="min-h-screen bg-[#080b11] p-8">
      
      
      <h1 className="text-2xl font-semibold text-slate-100 mb-1">
        Affected Assets
      </h1>
      <p className="text-sm text-slate-500 mb-8">
        OT equipment and IT systems monitoring
      </p>

      
      <div className="flex justify-between mb-8">
        <Card title="Total Assets" value={totalAssets} icon={<Server className="text-blue-500" />} />
        <Card title="Critical Assets" value={criticalAssets} icon={<Server className="text-red-500" />} />
        <Card title="Assets with Alerts" value={assetsWithAlerts} icon={<Server className="text-yellow-500" />} />
        <Card title="Healthy Assets" value={healthyAssets} icon={<Server className="text-green-500" />} />
      </div>

      
      <TableContainer
        title="Asset Inventory"
        columns={columns}
        data={assetRows}
      />
    </div>
  );
}