export default function SeverityBadge({ value }) {
  let styles =
    "px-3 py-1 rounded-md text-xs font-semibold flex items-center gap-1 w-fit";

  if (value === "CRITICAL") {
    styles += " bg-red-500/10 text-red-500 border border-red-500/30";
  } else if (value === "WARNING" || value === "HIGH") {
    styles += " bg-yellow-500/10 text-yellow-500 border border-yellow-500/30";
  } else if (value === "MEDIUM") {
    styles += " bg-blue-500/10 text-blue-500 border border-blue-500/30";
  } else {
    styles += " bg-green-500/10 text-green-500 border border-green-500/30";
  }

  return (
    <span className={styles}>
      <span className="w-2 h-2 rounded-full bg-current"></span>
      {value}
    </span>
  );
}