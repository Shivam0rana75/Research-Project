"use client";

import { useEffect, useState } from "react";
import { getUser } from "@/lib/session";
import Card from "@/components/dashboard/Card";
import MTTRLineChart from "@/components/dashboard/MTTRLineChart";
import MonthlyTrendChart from "@/components/dashboard/MonthlyTrendChart";
import IncidentPieChart from "@/components/dashboard/IncidentPieChart";

export default function ReportsPage() {
  const [metrics, setMetrics] = useState({
    total: 0,
    resolutionRate: 0,
    avgResponseTime: 0,
    compliance: 0,
  });

  const [analytics, setAnalytics] = useState({
    monthly: [],
    pie: [],
    mttr: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      const user = getUser();

      
      const res1 = await fetch("/api/reports/metrics", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          orgId: user.organizationId,
        }),
      });

      const metricsData = await res1.json();
      setMetrics(metricsData);

      
      const res2 = await fetch("/api/reports/analytics", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          orgId: user.organizationId,
        }),
      });

      const analyticsData = await res2.json();
      setAnalytics(analyticsData);
    };

    fetchData();
  }, []);

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
        <Card title="Total Incidents" value={metrics.total} />
        <Card title="Resolution Rate" value={`${metrics.resolutionRate}%`} />
        <Card title="Avg Response Time" value={`${metrics.avgResponseTime}h`} />
        <Card title="Compliance Score" value={`${metrics.compliance}%`} />
      </div>

      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <MonthlyTrendChart data={analytics.monthly} />
        <IncidentPieChart data={analytics.pie} />
      </div>

      <div className="grid grid-cols-1 w-[50%] gap-6 mb-8">
        <MTTRLineChart data={analytics.mttr} />
      </div>

    </div>
  );
}