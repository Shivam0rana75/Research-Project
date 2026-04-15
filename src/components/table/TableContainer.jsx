"use client";
import { Search } from "lucide-react";
import { useState } from "react";
import Table from "./Table";

export default function TableContainer({ title, columns, data, onRowClick }) {
  const [search, setSearch] = useState("");

  const filtered = data.filter((row) =>
    columns.some((col) =>
      String(row[col.accessor] ?? "").toLowerCase().includes(search.toLowerCase())
    )
  );

  return (
    <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl overflow-hidden">
      
      <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.06]">
        <div>
          <span className="text-base font-semibold text-slate-100">{title}</span>
          <span className="ml-2 text-xs text-slate-500">{filtered.length} records</span>
        </div>
        <div className="relative">
          
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
          />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search alerts..."
            className="bg-white/[0.06] border border-white/10 rounded-lg pl-8 pr-3 py-2 text-sm text-slate-200 placeholder-slate-500 outline-none w-56 focus:border-white/20 transition-colors"
          />
        </div>
      </div>

      
      <Table columns={columns} data={filtered} onRowClick={onRowClick} />
    </div>
  );
}
