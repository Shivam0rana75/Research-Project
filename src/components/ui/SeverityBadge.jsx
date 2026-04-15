const styles = {
  Critical: "bg-red-500/15 text-red-400 border border-red-500/30",
  High:     "bg-orange-500/15 text-orange-400 border border-orange-500/30",
  Medium:   "bg-yellow-500/15 text-yellow-400 border border-yellow-500/30",
  Low:      "bg-blue-500/15 text-blue-400 border border-blue-500/30",
};

export default function SeverityBadge({ value }) {
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-bold tracking-widest uppercase ${styles[value] ?? "bg-slate-700 text-slate-300"}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-current" />
      {value}
    </span>
  );
}
