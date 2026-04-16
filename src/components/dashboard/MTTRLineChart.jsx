"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

export default function MTTRLineChart({ data }) {
  const chartData = data.map((d, i) => ({
    week: `Point ${i + 1}`,
    value: parseInt(d.count),
  }));

  return (
    <div className="bg-[#161b22] border border-gray-800 rounded-2xl p-6">
      <h2 className="text-white font-semibold text-lg mb-1">
        Mean Time to Resolution
      </h2>

      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={chartData}>
          <CartesianGrid stroke="#1f2937" strokeDasharray="3 3" />
          <XAxis dataKey="week" stroke="#9ca3af" />
          <YAxis stroke="#9ca3af" />
          <Tooltip />

          <Line
            type="monotone"
            dataKey="value"
            stroke="#22c55e"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}