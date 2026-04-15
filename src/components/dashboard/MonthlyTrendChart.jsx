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

const data = [
  { month: "Aug", critical: 15, high: 30, medium: 45, low: 35 },
  { month: "Sep", critical: 20, high: 40, medium: 50, low: 45 },
  { month: "Oct", critical: 15, high: 35, medium: 48, low: 40 },
  { month: "Nov", critical: 18, high: 31, medium: 55, low: 45 },
  { month: "Dec", critical: 20, high: 38, medium: 52, low: 42 },
  { month: "Jan", critical: 25, high: 45, medium: 60, low: 50 },
  { month: "Feb", critical: 22, high: 42, medium: 58, low: 48 },
];

export default function MonthlyTrendChart() {
  return (
    <div className="bg-[#161b22] border border-gray-800 rounded-2xl p-6">
      <h2 className="text-white font-semibold text-lg mb-1">
        Monthly Incident Trends
      </h2>
      <p className="text-gray-500 text-sm mb-6">
        Last 7 months by severity
      </p>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid stroke="#1f2937" strokeDasharray="3 3" />
          <XAxis dataKey="month" stroke="#9ca3af" />
          <YAxis stroke="#9ca3af" />

          <Tooltip
            content={({ active, payload, label }) => {
              if (!active || !payload) return null;

              return (
                <div className="bg-[#0f172a] border border-gray-700 p-4 rounded-xl shadow-xl">
                  <p className="text-white font-semibold mb-2">{label}</p>

                  {payload.map((entry, i) => (
                    <p key={i} style={{ color: entry.color }}>
                      {entry.name} : {entry.value}
                    </p>
                  ))}
                </div>
              );
            }}
          />

          
          <Bar dataKey="critical" stackId="a" fill="#ef4444" />
          <Bar dataKey="high" stackId="a" fill="#f59e0b" />
          <Bar dataKey="medium" stackId="a" fill="#38bdf8" />
          <Bar dataKey="low" stackId="a" fill="#22c55e" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}