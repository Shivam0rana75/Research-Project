import IncidentDescription from "./IncidentDescription";
import Affected from "./Affected";
import IncidentTimeline from "./IncidentTimeline";
import DeliveryStatus from "./DeliveryStatus";
import NotifiedDept from "./NotifiedDept";
export default function IncidentBody({ incident }) {
    console.log(incident)
  return (
    <div className="flex justify-between ">

            <div className="flex flex-col ml-7 w-8/12">
                <IncidentDescription Description={incident.description} />
                <Affected Affected={incident.affectedAssets} />

                <IncidentTimeline timeline={incident.timeline} />
            </div>

            <div className="flex flex-col ml-7 w-4/12">
                  <DeliveryStatus incidentId={incident.incidentId} />

                  <div className="bg-bgCard flex flex-col justify-center mt-5 rounded-3xl">
                    <p className="text-white text-xl font-semibold mt-3 p-6">
                      Departments Notified
                    </p>
                    <NotifiedDept dept={incident.notifiedDepartments} />


                    

                  </div>
            </div>



            


    </div>
  )
}