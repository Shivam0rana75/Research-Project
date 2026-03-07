"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { time: "00:00", OT: 7, IT: 5 },
  { time: "04:00", OT: 4, IT: 4 },
  { time: "08:00", OT: 9, IT: 6 },
  { time: "12:00", OT: 14, IT: 9 },
  { time: "16:00", OT: 11, IT: 7 },
  { time: "20:00", OT: 8, IT: 6 },
  { time: "23:59", OT: 6, IT: 4 },
];

export default function TrendChart() {
  return (
    <div className="w-[660px] h-[420px] ml-7 mt-7 mr-7 bg-bgCard rounded-2xl p-6 flex flex-col">

      
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-white text-lg font-bold">
            Incident Trend Analysis
          </p>
          <p className="text-gray-400 text-sm">Last 24 hours</p>
        </div>

        <div className="flex items-center gap-4 text-sm text-gray-300">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-sky-400 font-bold"></div>
            <span className="font-bold">OT</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-purple-500 "></div>
            <span className="font-bold">IT</span>
          </div>
        </div>
      </div>

      
      <div className="flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>

            
            <defs>
              <linearGradient id="otGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#22c1ff" stopOpacity={0.4}/>
                <stop offset="95%" stopColor="#22c1ff" stopOpacity={0}/>
              </linearGradient>

              <linearGradient id="itGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#a855f7" stopOpacity={0.4}/>
                <stop offset="95%" stopColor="#a855f7" stopOpacity={0}/>
              </linearGradient>
            </defs>

            <CartesianGrid
              strokeDasharray="4 4"
              stroke="#1f2937"
              opacity={0.4}
            />

            <XAxis
              dataKey="time"
              stroke="#64748b"
              tickLine={false}
              axisLine={false}
            />

            <YAxis
              stroke="#64748b"
              tickLine={false}
              axisLine={false}
            />

            <Tooltip />

            <Area
              type="monotone"
              dataKey="OT"
              stroke="#22c1ff"
              fill="url(#otGradient)"
              strokeWidth={2}
            />

            <Area
              type="monotone"
              dataKey="IT"
              stroke="#a855f7"
              fill="url(#itGradient)"
              strokeWidth={2}
            />

          </AreaChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}