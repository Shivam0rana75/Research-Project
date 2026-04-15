export default function StatusBadge({ value }) {
  const status = value?.toUpperCase(); // 🔥 normalize

  const styles = {
    ACTIVE: "bg-red-500/10 text-red-500 border border-red-500/30",
    INVESTIGATING: "bg-yellow-500/10 text-yellow-500 border border-yellow-500/30",
    RESOLVED: "bg-green-500/10 text-green-500 border border-green-500/30",
    ACKNOWLEDGED: "bg-blue-500/10 text-blue-500 border border-blue-500/30",
    OPEN : "bg-red-500/10 text-red-500 border border-red-500/30",
  };

  return (
    <span
      className={`px-3 py-1 text-xs rounded-md font-semibold ${
        styles[status] || "text-white bg-gray-700"
      }`}
    >
      {status || "UNKNOWN"}
    </span>
  );
}