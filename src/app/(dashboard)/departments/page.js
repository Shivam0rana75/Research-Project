"use client";

import { useEffect, useState } from "react";
import { getUser } from "@/lib/session";
import Card from "@/components/dashboard/Card";
import DepartmentBarChart from "@/components/dashboard/DepartmentBarChart";
import { Building2, AlertTriangle, TrendingUp } from "lucide-react";
import TableContainer from "@/components/table/TableContainer";

const deptColumns = [
  { header: "Department", accessor: "name" },
  { header: "Active Incidents", accessor: "active" },
  { header: "Risk Level", accessor: "risk", type: "status" },
];

export default function DepartmentsPage() {
  const [data, setData] = useState([]);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const user = getUser();

      const res = await fetch("/api/departments/overview", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          orgId: user.organizationId,
        }),
      });

      const result = await res.json();

  
      const tableData = result.map((d) => {
        let risk = "LOW";
        if (d.incident_count >= 5) risk = "CRITICAL";
        else if (d.incident_count >= 3) risk = "HIGH";
        else if (d.incident_count >= 2) risk = "MEDIUM";

        return {
          id: d.id,
          name: d.name,
          active: parseInt(d.incident_count),
          risk,
        };
      });

   
      const chart = result.map((d) => ({
        id: d.id,
        name: d.name,
        incidents: parseInt(d.incident_count),
      }));

      setData(tableData);
      setChartData(chart);
    };

    fetchData();
  }, []);

  
  const totalDepartments = data.length;
  const criticalRisk = data.filter((d) => d.risk === "CRITICAL").length;
  const highRisk = data.filter((d) => d.risk === "HIGH").length;

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
          value="--"
          icon={<TrendingUp className="text-green-500" />}
        />
      </div>

     
      <div className="flex justify-center">
        <div className="w-[50%]">
          <DepartmentBarChart data={chartData} />
        </div>
      </div>

      
      <div className="mt-10">
        <TableContainer
          title="Department Overview"
          columns={deptColumns}
          data={data}
        />
      </div>
    </div>
  );
}