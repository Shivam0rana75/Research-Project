export default function FeedCard({
  severity,
  domain,
  status,
  incidentId,
  title,
  location,
  time,
  assets,
  escalated
}) {

  const severityColors = {
    CRITICAL: "bg-red-500/20 text-red-400",
    HIGH: "bg-orange-500/20 text-orange-400",
    MEDIUM: "bg-yellow-500/20 text-yellow-400",
    LOW: "bg-green-500/20 text-green-400"
  }

  return (
    <div className="group bg-bgCard mt-5 w-full ml-3 mr-3 p-5 rounded-2xl border border-[#1f2937] text-white hover:border-cyan-500 hover:bg-[#0f172a] transition cursor-pointer">

      
      <div className="flex items-center gap-2 mb-3">

        <span className={`flex items-center gap-2 text-xs px-3 py-1 rounded-full font-semibold ${severityColors[severity]}`}>
          <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
          {severity}
        </span>

        <span className="bg-purple-500/20 text-purple-400 text-xs px-3 py-1 rounded-full font-semibold">
          {domain}
        </span>

        <span className="bg-red-500/20 text-red-400 text-xs px-3 py-1 rounded-full font-semibold">
          {status}
        </span>

      </div>

      
      <p className="text-gray-400 text-sm mb-1">
        {incidentId}
      </p>

      
      <h2 className="text-lg font-semibold mb-3 group-hover:text-cyan-400 transition">
        {title}
      </h2>

      
      <div className="flex items-center gap-4 text-gray-400 text-sm mb-4">

        <div className="flex items-center gap-1">
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 10c0 3-4 6-4 6s-4-3-4-6a4 4 0 118 0z"/>
            <circle cx="8" cy="10" r="1"/>
          </svg>
          <span>{location}</span>
        </div>

        <div className="flex items-center gap-1">
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="8" cy="8" r="6"/>
            <path d="M8 4v4l2 2"/>
          </svg>
          <span>{time}</span>
        </div>

      </div>

      <div className="border-t border-[#1f2937] mb-3"></div>

      
      <div className="flex justify-between items-center text-sm">

        <span className="text-gray-400">
          {assets} assets affected
        </span>

        <span className="text-red-400 flex items-center gap-2 font-medium">

          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="4" width="12" height="8" rx="1"/>
            <path d="M2 4l6 4 6-4"/>
          </svg>

          {escalated}

        </span>

      </div>

    </div>
  )
}