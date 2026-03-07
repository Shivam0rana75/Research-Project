export default function Card({ title, value, icon, percentage }) {
  return (
    <div className="bg-[#161b22] border border-gray-800 rounded-2xl mt-5 ml-7 mr-7 p-6 w-74 h-55 flex flex-col justify-between shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">

      
      <div className="flex justify-between items-start">
        
       
        <div className="p-3 rounded-xl 
                        bg-red-500/10 
                        border border-red-500/30">
          {icon}
        </div>

       
        <div className="bg-red-500/10 
                        border border-red-500/30
                        text-red-500
                        rounded-md 
                        px-3 py-1">
          <p className="text-xs font-semibold">
            ↑ {percentage}%
          </p>
        </div>
      </div>

   
      <div>
        <h2 className="text-4xl font-bold text-white mb-2">
          {value}
        </h2>

        <p className="text-gray-300 font-medium">
          {title}
        </p>

        <p className="text-gray-500 text-sm mt-1">
          Last 24 hours
        </p>
      </div>

    </div>
  );
}
