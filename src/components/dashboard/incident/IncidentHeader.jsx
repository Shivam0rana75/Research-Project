export default function IncidentHeader({ incident }) {
  return (
    <div className="w-full border-b border-[#1f2937]">
      <div className="px-8 py-6 flex justify-between items-center text-white">

        <div>
          <div className="flex items-center gap-3 mb-4">

            <span className="flex items-center gap-2 px-3 py-1 text-sm font-semibold rounded-full bg-red-500/20 text-red-400 border border-red-500/30">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              {incident.severity.toUpperCase()}
            </span>

            <span className="px-3 py-1 text-sm font-semibold rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/30">
              {incident.domain}
            </span>

            <span className="text-gray-400 text-sm tracking-wide">
              {incident.incidentId}
            </span>

          </div>

          <h1 className="text-3xl font-semibold mb-2">
            {incident.title}
          </h1>

          <p className="text-gray-400 text-sm">
            {incident.location} • {incident.time}
          </p>
        </div>

        <div className="flex items-center gap-4">

          <button className="px-5 py-2 rounded-xl bg-[#1f2937] text-white border border-[#374151] hover:bg-[#273549] transition">
            Acknowledge
          </button>

          <button className="px-5 py-2 rounded-xl text-yellow-400 border border-yellow-500/40 bg-yellow-500/10 hover:bg-yellow-500/20 transition">
            Escalate
          </button>

          <button className="px-5 py-2 rounded-xl text-green-400 border border-green-500/40 bg-green-500/10 hover:bg-green-500/20 transition">
            Resolve
          </button>

        </div>

      </div>
    </div>
  );
}