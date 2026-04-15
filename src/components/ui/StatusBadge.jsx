const styles = {
  Open:          "bg-red-500/15 text-red-400 border border-red-500/30",
  Investigating: "bg-orange-500/15 text-orange-400 border border-orange-500/30",
  Resolved:      "bg-green-500/15 text-green-400 border border-green-500/30",
};

export default function StatusBadge({ value }) {
  return (
    <span className={`px-2.5 py-1 rounded text-[11px] font-bold tracking-widest uppercase ${styles[value] ?? "bg-slate-700 text-slate-300"}`}>
      {value}
    </span>
  );
}
