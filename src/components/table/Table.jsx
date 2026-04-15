import TableRow from "./TableRow";

export default function Table({ columns, data, onRowClick }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-white/[0.06]">
            {columns.map((col) => (
              <th
                key={col.accessor}
                className="px-4 py-3 text-left text-[10px] font-bold text-slate-500 tracking-widest uppercase"
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="px-4 py-10 text-center text-sm text-slate-500">
                No alerts found
              </td>
            </tr>
          ) : (
            data.map((row) => (
              <TableRow
                key={row.incidentId}
                row={row}
                columns={columns}
                onClick={onRowClick}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
