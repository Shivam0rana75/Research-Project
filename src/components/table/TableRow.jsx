import SeverityBadge from "@/components/ui/SeverityBadge";
import StatusBadge from "@/components/ui/StatusBadge";

export default function TableRow({ row, columns, onClick }) {
  return (
    <tr
      onClick={() => onClick?.(row)}
      className="border-b border-white/5 hover:bg-white/[0.03] transition-colors cursor-pointer"
    >
      {columns.map((col) => {
        const value = row[col.accessor];
        return (
          <td key={col.accessor} className="px-4 py-3.5 text-sm">
            {col.type === "severity" ? (
              <SeverityBadge value={value} />
            ) : col.type === "status" ? (
              <StatusBadge value={value} />
            ) : col.type === "id" ? (
              <span className="font-mono text-xs text-slate-400">{value}</span>
            ) : col.type === "device" ? (
              <span className="font-mono text-sm font-semibold text-slate-100">{value}</span>
            ) : (
              <span className="text-slate-300">{value}</span>
            )}
          </td>
        );
      })}
    </tr>
  );
}
