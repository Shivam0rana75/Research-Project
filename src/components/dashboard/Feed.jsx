import FeedCard from "./FeedCard";
import Link from "next/link";
import {incidents} from '@/data/data';
export default function Feed(){
    
    return (
        <div className="bg-bgCard flex flex-col items-center justify-center mt-5 ml-7 mr-7 w-[60%] rounded-2xl p-6 ">

            <div className="flex justify-between items center mt-3 w-full">
                
                <div className="flex flex-col items-center justify-center">
                    <p className="text-white text-lg font-semibold">
                        Live Incident Feed
                    </p>
                    <p className="text-gray-400 text-sm">
                        Real-time updates
                    </p>
                </div>

                <button className="bg-[#1EB3ED] p-3 rounded-2xl text-sm text-zinc-50 font-medium cursor-pointer hover:bg-[#189FD0] hover:scale-[1.02] transition duration-200">
                    View All
                </button>
                
            </div>

            {Object.values(incidents).map((incident)=> (
              <Link 
                key={incident.incidentId}
                href={`/dashboard/${incident.incidentId}`}
                className="w-full"
              >
                <FeedCard incident={incident} />
              </Link> 
            ))}

            

        </div>
    )
}