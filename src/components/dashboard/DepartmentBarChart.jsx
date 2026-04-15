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

export default function DepartmentBarChart({ data }) {
  return (
    <div className="bg-[#161b22] border border-gray-800 rounded-2xl p-6 mt-8">
      <h2 className="text-white text-lg font-semibold mb-1">
        Incidents by Department
      </h2>
      <p className="text-gray-500 text-sm mb-6">
        Last 30 days
      </p>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" />

          <XAxis
            dataKey="name"
            stroke="#9ca3af"
            tick={{ fontSize: 12 }}
          />

          <YAxis stroke="#9ca3af" />

          <Tooltip
            contentStyle={{
              backgroundColor: "#0f172a",
              border: "1px solid #1f2937",
              borderRadius: "10px",
            }}
          />

          <Bar
            dataKey="incidents"
            fill="#38bdf8"
            radius={[6, 6, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}