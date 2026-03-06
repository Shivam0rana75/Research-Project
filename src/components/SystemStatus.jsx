import { Wifi } from "lucide-react";

export default function SystemStatus() {
  return (
    <div className="
      flex items-center gap-2
      bg-[#1a1f2e]
      border border-white/10
      px-4 py-2
      rounded-full
      text-sm text-slate-200
    ">
      
      <div className="relative flex items-center justify-center">
        
        
        <span className="absolute inline-flex h-2 w-2 rounded-full bg-green-400 animate-ping opacity-75"></span>
        <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>

      </div>

      <Wifi size={16} className="text-green-400" />

      <span>All Systems Operational</span>
    </div>
  );
}
