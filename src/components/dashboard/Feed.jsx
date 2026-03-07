import FeedCard from "./FeedCard";
import Link from "next/link";
export default function Feed(){
    const incidents = [
  {
    severity: "Critical",
    domain: "Security",
    status: "Open",
    incidentId: "INC-001",
    title: "Unauthorized Access Attempt",
    location: "Process Control",
    time: "2:30 PM",
    assets: 5,
    escalated: "escalated",
  },
  {
    severity: "Critical",
    domain: "Security",
    status: "Open",
    incidentId: "INC-002",
    title: "Unauthorized Access Attempt",
    location: "Process Control",
    time: "2:30 PM",
    assets: 5,
    escalated: "sent",
  },
  {
    severity: "Critical",
    domain: "Security",
    status: "Open",
    incidentId: "INC-003",
    title: "Unauthorized Access Attempt",
    location: "Process Control",
    time: "2:30 PM",
    assets: 5,
    escalated: "not escalated",
  },
  {
    severity: "Critical",
    domain: "Security",
    status: "Open",
    incidentId: "INC-004",
    title: "Unauthorized Access Attempt",
    location: "Process Control",
    time: "2:30 PM",
    assets: 5,
    escalated: "not escalated",
  },
  {
    severity: "Critical",
    domain: "Security",
    status: "Open",
    incidentId: "INC-005",
    title: "Unauthorized Access Attempt",
    location: "Process Control",
    time: "2:30 PM",
    assets: 5,
    escalated: "not escalated",
  },
  {
    severity: "Critical",
    domain: "Security",
    status: "Open",
    incidentId: "INC-006",
    title: "Unauthorized Access Attempt",
    location: "Process Control",
    time: "2:30 PM",
    assets: 5,
    escalated: "not escalated",
  },
  {
    severity: "Critical",
    domain: "Security",
    status: "Open",
    incidentId: "INC-007",
    title: "Unauthorized Access Attempt",
    location: "Process Control",
    time: "2:30 PM",
    assets: 5,
    escalated: "not escalated",
  },
  {
    severity: "Critical",
    domain: "Security",
    status: "Open",
    incidentId: "INC-008",
    title: "Unauthorized Access Attempt",
    location: "Process Control",
    time: "2:30 PM",
    assets: 5,
    escalated: "not escalated",
  },
];
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

            {incidents.map((incident)=>(
                <Link 
                    className="w-full" 
                    href={`/dashboard/${incident.incidentId}`} 
                    key={incident.incidentId}
                >
                <FeedCard 
                    key={incident.incidentId}
                    severity={incident.severity}
                    domain={incident.domain}
                    status={incident.status}
                    incidentId={incident.incidentId}
                    title={incident.title}
                    location={incident.location}
                    time={incident.time}
                    assets={incident.assets}
                    escalated={incident.escalated}
                />
                </Link>
            ))}

            

        </div>
    )
}