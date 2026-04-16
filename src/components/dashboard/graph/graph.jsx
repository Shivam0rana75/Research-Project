"use client";

import { useEffect, useState } from "react";
import { getUser } from "@/lib/session";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function TrendChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const user = getUser();

      const res = await fetch("/api/dashboard/trend", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          orgId: user.organizationId,
        }),
      });

      const result = await res.json();

      const timeSlots = [
        "00:00",
        "04:00",
        "08:00",
        "12:00",
        "16:00",
        "20:00",
        "23:59",
      ];

      const map = {};
      result.forEach((item) => {
        map[item.time] = {
          OT: Number(item.ot),
          IT: Number(item.it),
        };
      });

      const formatted = timeSlots.map((time) => ({
        time,
        OT: map[time]?.OT || 0,
        IT: map[time]?.IT || 0,
      }));

      setData(formatted);
    };

    fetchData();
  }, []);

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
            <div className="w-3 h-3 rounded-full bg-sky-400"></div>
            <span className="font-bold">OT</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-purple-500"></div>
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

            <CartesianGrid strokeDasharray="4 4" stroke="#1f2937" opacity={0.4} />
            <XAxis dataKey="time" stroke="#64748b" tickLine={false} axisLine={false} />
            <YAxis stroke="#64748b" tickLine={false} axisLine={false} />
            <Tooltip />

            <Area type="monotone" dataKey="OT" stroke="#22c1ff" fill="url(#otGradient)" strokeWidth={2} />
            <Area type="monotone" dataKey="IT" stroke="#a855f7" fill="url(#itGradient)" strokeWidth={2} />

          </AreaChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}