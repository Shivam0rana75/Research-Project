import { User } from "lucide-react";

export default function NotifiedDept({ dept }) {
  
  const formatDept = (name) => {
    return name
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (str) => str.toUpperCase());
  };

  return (
    <div className="space-y-4">
      {dept.map((dep) => (
        <div
          key={dep}
          className="flex items-center gap-3 bg-[#1E293B] px-5 py-4 rounded-xl"
        >
          <User size={18} className="text-gray-400" />
          
          <p className="text-white text-sm font-medium">
            {formatDept(dep)}
          </p>
        </div>
      ))}
    </div>
  );
}