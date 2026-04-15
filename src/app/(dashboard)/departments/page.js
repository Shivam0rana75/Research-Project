"use client";

import Card from "@/components/dashboard/Card";
import DepartmentBarChart from "@/components/dashboard/DepartmentBarChart";
import { incidents, departments } from "@/data/data";
import { Building2, AlertTriangle, Activity, TrendingUp } from "lucide-react";
import TableContainer from "@/components/table/TableContainer";

const getDepartmentTableData = () => {
  return Object.keys(departments).map((deptKey) => {
    const dept = departments[deptKey];

    // incidents count
    const relatedIncidents = Object.values(incidents).filter((inc) =>
      inc.notifiedDepartments.includes(deptKey)
    );

    const incidentCount = relatedIncidents.length;

    // risk level logic
    let risk = "LOW";
    if (incidentCount >= 5) risk = "CRITICAL";
    else if (incidentCount >= 3) risk = "HIGH";
    else if (incidentCount >= 2) risk = "MEDIUM";

    return {
      id: dept.id,
      name: dept.name,
      head: dept.members?.[1]?.name || "N/A", // manager
      personnel: dept.members?.length || 0,
      assets: Math.floor(Math.random() * 200) + 50, // dummy for now
      active: incidentCount,
      alerts: incidentCount * 3, // dummy multiplier
      response: `${Math.floor(Math.random() * 15) + 5} min`,
      risk,
    };
  });
};

const departmentTableData = getDepartmentTableData();

const deptColumns = [
  { header: "Department", accessor: "name" },
  { header: "Department Head", accessor: "head" },
  { header: "Personnel", accessor: "personnel" },
  { header: "Assets", accessor: "assets" },
  { header: "Active Incidents", accessor: "active" },
  { header: "Alerts Today", accessor: "alerts" },
  { header: "Avg Response", accessor: "response" },
  { header: "Risk Level", accessor: "risk", type: "status" },
];

const getIncidentsByDepartment = () => {
  const counts = {};

  Object.values(incidents).forEach((inc) => {
    inc.notifiedDepartments.forEach((dept) => {
      if (!counts[dept]) counts[dept] = 0;
      counts[dept]++;
    });
  });

  return Object.keys(counts).map((dept) => ({
    id: dept,
    name: departments[dept]?.name || dept,
    incidents: counts[dept],
  }));
};

const deptData = getIncidentsByDepartment().sort(
  (a, b) => b.incidents - a.incidents
);



const totalDepartments = Object.keys(departments).length;

const criticalRisk = deptData.filter((d) => d.incidents >= 3).length;

const highRisk = deptData.filter(
  (d) => d.incidents > 1 && d.incidents < 3
).length;

const avgResponseTime = "11.5"; 



export default function DepartmentsPage() {
  return (
    <div className="min-h-screen bg-[#080b11] p-8">
      
      
      <h1 className="text-2xl font-semibold text-white mb-1">
        Departments
      </h1>
      <p className="text-gray-500 mb-8">
        Department incident statistics and risk assessment
      </p>

      
      <div className="flex justify-between">
        <Card
          title="Total Departments"
          value={totalDepartments}
          icon={<Building2 className="text-blue-500" />}
        />

        <Card
          title="Critical Risk"
          value={criticalRisk}
          icon={<AlertTriangle className="text-red-500" />}
        />

        <Card
          title="High Risk"
          value={highRisk}
          icon={<AlertTriangle className="text-yellow-500" />}
        />

        <Card
          title="Avg Response Time"
          value={`${avgResponseTime} min`}
          icon={<TrendingUp className="text-green-500" />}
        />
      </div>
      <div className="flex justify-center">
          <div className="w-[50%] h-[55%] ">
              <DepartmentBarChart data={deptData} />
          </div>
      </div>
      <div className="mt-10">
        <TableContainer
          title="Department Overview"
          columns={deptColumns}
          data={departmentTableData}
        />
      </div>
      
    </div>
  );
}