import IncidentDescription from "./IncidentDescription";
import Affected from "./Affected";
import IncidentTimeline from "./IncidentTimeline";
export default function IncidentBody({ incident }) {
    
  return (
    <div className="flex justify-between ">

            <div className="flex flex-col ml-7 w-8/12">
                <IncidentDescription Description={incident.description} />
                <Affected Affected={incident.affectedAssets} />

                <IncidentTimeline timeline={incident.timeline} />
            </div>

            <div className="flex flex-col ml-7 w-4/12">
                
            </div>



            


    </div>
  )
}