'use client';

import { Factory } from "lucide-react";
import Group from "./elementGroup";
import { useState } from "react";

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`h-screen flex flex-col ${
        isOpen ? "w-64" : "w-20"
      } text-white p-4 transition-all duration-300`}
    >
      <div
        className={`h-20 flex items-center w-full mb-6 ${
          isOpen ? "justify-between" : "justify-center"
        }`}
      >
        {isOpen && (
          <div className="flex items-center gap-3">
            <div className="bg-cyan-500/20 border border-cyan-500/40 p-3 rounded-2xl">
              <Factory size={22} className="text-cyan-400" />
            </div>

            <div className="flex flex-col justify-center">
              <p className="font-bold">Grid Sentinel</p>
              <p className="text-sm text-cyan-300">Incident Manager</p>
            </div>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl"
        >
          {isOpen ? "X" : "☰"}
        </button>
      </div>

      <div className="flex-1">
        <Group isOpen={isOpen} />
      </div>
    </div>
  );
}
