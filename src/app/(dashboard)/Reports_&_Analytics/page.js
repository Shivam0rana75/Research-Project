"use client";

import Card from "@/components/dashboard/Card";
import MTTRLineChart from "@/components/dashboard/MTTRLineChart";
import MonthlyTrendChart from "@/components/dashboard/MonthlyTrendChart";
import IncidentPieChart from "@/components/dashboard/IncidentPieChart";

import { Filter, Calendar, Download } from "lucide-react";


const metrics = {
  totalIncidents: 847,
  resolutionRate: 94.2,
  avgResponseTime: 2.4,
  compliance: 100,
};


export default function ReportsPage() {
  return (
    <div className="min-h-screen bg-[#080b11] p-8">

      
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-semibold text-white">
            Reports & Analytics
          </h1>
          <p className="text-gray-500">
            Executive summaries and compliance reports
          </p>
        </div>
      </div>

      
      <div className="flex justify-between mb-8">
        <Card
          title="Total Incidents"
          value={metrics.totalIncidents}
          
          
        />

        <Card
          title="Resolution Rate"
          value={`${metrics.resolutionRate}%`}
          
          
        />

        <Card
          title="Avg Response Time"
          value={`${metrics.avgResponseTime}h`}
          
          
        />

        <Card
          title="Compliance Score"
          value={`${metrics.compliance}%`}
          
        />
      </div>

     
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <MonthlyTrendChart />
        <IncidentPieChart />
      </div>

      
      <div className="grid grid-cols-1 w-[50%] gap-6 mb-8">
        <MTTRLineChart />
      </div>

      
    </div>
  );
}