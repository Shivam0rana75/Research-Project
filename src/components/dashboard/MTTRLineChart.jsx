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

const data = [
  { week: "Week 1", value: 3.2 },
  { week: "Week 2", value: 2.8 },
  { week: "Week 3", value: 2.5 },
  { week: "Week 4", value: 2.1 },
  { week: "Week 5", value: 2.4 },
  { week: "Week 6", value: 2.0 },
];

export default function MTTRLineChart() {
  return (
    <div className="bg-[#161b22] border border-gray-800 rounded-2xl p-6">
      <h2 className="text-white font-semibold text-lg mb-1">
        Mean Time to Resolution
      </h2>
      <p className="text-gray-500 text-sm mb-6">
        6-week trend analysis
      </p>

      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid stroke="#1f2937" strokeDasharray="3 3" />

          <XAxis dataKey="week" stroke="#9ca3af" />
          <YAxis stroke="#9ca3af" />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="value"
            stroke="#22c55e"
            strokeWidth={3}
            dot={{ r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}