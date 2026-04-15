"use client";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Unauthorized Access", value: 35 },
  { name: "Configuration Changes", value: 28 },
  { name: "System Anomalies", value: 22 },
  { name: "Network Events", value: 15 },
];

const COLORS = ["#ef4444", "#f59e0b", "#38bdf8", "#a855f7"];

export default function IncidentPieChart() {
  return (
    <div className="bg-[#161b22] border border-gray-800 rounded-2xl p-6 flex justify-center items-center ">

      <div className="w-1/2">
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={data}
              innerRadius={70}
              outerRadius={100}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={COLORS[index]} />
              ))}
            </Pie>

            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="flex flex-col justify-center gap-4 ml-6">
        {data.map((item, index) => (
          <div key={item.name} className="flex items-center gap-3">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: COLORS[index] }}
            ></div>

            <p className="text-sm text-slate-300">
              {item.name}
            </p>

            <span className="ml-auto text-white font-semibold">
              {item.value}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}