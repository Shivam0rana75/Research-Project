"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

export default function MonthlyTrendChart({ data }) {
  const grouped = {};

  data.forEach((row) => {
    if (!grouped[row.month]) {
      grouped[row.month] = {
        month: row.month,
        critical: 0,
        high: 0,
        medium: 0,
        low: 0,
      };
    }

    const sev = row.severity.toLowerCase();
    grouped[row.month][sev] += parseInt(row.count);
  });

  const chartData = Object.values(grouped);

  return (
    <div className="bg-[#161b22] border border-gray-800 rounded-2xl p-6">
      <h2 className="text-white font-semibold text-lg mb-1">
        Monthly Incident Trends
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid stroke="#1f2937" strokeDasharray="3 3" />
          <XAxis dataKey="month" stroke="#9ca3af" />
          <YAxis stroke="#9ca3af" />
          <Tooltip />

          <Bar dataKey="critical" stackId="a" fill="#ef4444" />
          <Bar dataKey="high" stackId="a" fill="#f59e0b" />
          <Bar dataKey="medium" stackId="a" fill="#38bdf8" />
          <Bar dataKey="low" stackId="a" fill="#22c55e" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}