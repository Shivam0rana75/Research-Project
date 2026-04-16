"use client";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#ef4444", "#f59e0b", "#38bdf8", "#a855f7"];

export default function IncidentPieChart({ data }) {
  const chartData = data.map((d) => ({
    name: d.domain,
    value: parseInt(d.count),
  }));

  return (
    <div className="bg-[#161b22] border border-gray-800 rounded-2xl p-6 flex justify-center items-center">

      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie data={chartData} dataKey="value" outerRadius={100}>
            {chartData.map((_, index) => (
              <Cell key={index} fill={COLORS[index]} />
            ))}
          </Pie>

          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}