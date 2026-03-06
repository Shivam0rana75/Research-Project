"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  { department: "Distillation", value: 12 },
  { department: "Cracking", value: 8 },
  { department: "IT Security", value: 15 },
  { department: "SCADA", value: 6 },
  { department: "Network", value: 9 },
];

export default function DepartmentChart() {
  return (
    <div className="w-[660px] h-[420px] ml-5 mt-10 mr-5 bg-bgCard rounded-2xl p-6 flex flex-col">

     
      <div className="mb-4">
        <p className="text-white text-lg font-semibold">
          Incidents by Department
        </p>
        <p className="text-gray-400 text-sm">
          Top 5 affected departments
        </p>
      </div>

      
      <div className="flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            layout="vertical"
            margin={{ left: 30 }}
          >
            <CartesianGrid
              strokeDasharray="4 4"
              stroke="#1f2937"
              opacity={0.4}
            />

            <XAxis
              type="number"
              stroke="#64748b"
              tickLine={false}
              axisLine={false}
            />

            <YAxis
              type="category"
              dataKey="department"
              stroke="#64748b"
              tickLine={false}
              axisLine={false}
            />

            <Bar
              dataKey="value"
              fill="#22c1ff"
              radius={[6, 6, 6, 6]}
              barSize={22}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}