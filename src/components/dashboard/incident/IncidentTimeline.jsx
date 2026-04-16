"use client";

const severityStyles = {
  critical: "bg-red-500/20 text-red-400 border border-red-500/30",
  high: "bg-orange-500/20 text-orange-400 border border-orange-500/30",
  medium: "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30",
  low: "bg-green-500/20 text-green-400 border border-green-500/30",
};

export default function AffectedAssets({ assets }) {
  const safeAssets = Array.isArray(assets) ? assets : [];

  return (
    <div className="bg-bgCard rounded-3xl p-6 mt-6">

      <h2 className="text-white text-xl font-semibold mb-6">
        Affected OT Equipment & IT Services
      </h2>

      {safeAssets.length === 0 && (
        <p className="text-gray-500 text-sm">
          No affected assets found
        </p>
      )}

      <div className="flex flex-col gap-4">

        {safeAssets.map((asset, index) => {
          const severity = asset?.severity?.toLowerCase();

          return (
            <div
              key={index}
              className="bg-[#1f2937]/40 rounded-3xl p-5 flex justify-between items-center hover:bg-[#1f2937]/60 transition"
            >
              
              {/* LEFT */}
              <div>
                <h3 className="text-white font-medium text-lg">
                  {asset?.name || "Unknown Asset"}
                </h3>

                <p className="text-gray-400 text-sm mt-1">
                  {asset?.type || "Unknown Type"}
                </p>
              </div>

              {/* RIGHT (SEVERITY BADGE) */}
              <span
                className={`px-4 py-1 text-xs font-semibold rounded-full ${
                  severityStyles[severity] ||
                  "bg-gray-700 text-gray-300"
                } ${
                  severity === "critical" ? "animate-pulse" : ""
                }`}
              >
                {asset?.severity || "Unknown"}
              </span>

            </div>
          );
        })}

      </div>

    </div>
  );
}