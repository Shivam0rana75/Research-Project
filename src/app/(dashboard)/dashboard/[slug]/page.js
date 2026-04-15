import { incidents } from "@/data/data";
import IncidentBody from "@/components/dashboard/incident/IncidentBody";
import IncidentHeader from "@/components/dashboard/incident/IncidentHeader";
export default async function IncidentDetailsPage({ params }) {

  const { slug } = await params;

  const incident = incidents[slug];

  if (!incident) {
    return (
      <div className="text-white font-bold flex justify-center">
        Incident not found
      </div>
    );
  }

  return (
    <div>
        <div className="bg-bgMain ">
            <IncidentHeader incident={incident} />
        </div>

        <IncidentBody incident={incident} />
        

    </div>
    
  );
}