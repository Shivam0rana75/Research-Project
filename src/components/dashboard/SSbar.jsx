export default function SystemStatusBar({ name, percent, status }) {

  const colors = {
    healthy: "bg-green-500",
    warning: "bg-orange-500",
    critical: "bg-red-500"
  };

  return (
    <div className="mb-5 ml-5 mr-5 w-9/10 ">

     
      <div className="flex items-center justify-between mb-2">

        <div className="flex items-center gap-2">
          <span className={`w-2.5 h-2.5 rounded-full ${colors[status]}`}></span>

          <p className="text-gray-200 text-sm">
            {name}
          </p>
        </div>

        <p className="text-gray-400 text-sm">
          {percent}%
        </p>

      </div>

      
      <div className="w-full h-2 bg-[#1f2937] rounded-full">

        <div
          className={`h-2 rounded-full transition-all duration-500 ${colors[status]}`}
          style={{ width: `${percent}%` }}
        ></div>

      </div>

    </div>
  );
}