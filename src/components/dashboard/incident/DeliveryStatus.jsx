import MailStatus from "./MailStatus";
import { departments } from "@/data/data";

export default function DeliveryStatus({ dept }) {

  return (
    <div className="bg-bgCard rounded-3xl w-full mt-5 p-6">
      <p className="text-white text-xl font-semibold ml-1">
        Alert Delivery Status
      </p>

      {dept.map((depKey) => {
        const department = departments[depKey];

        if (!department) return null;

        return (
          <div key={depKey}>
            
            
            <MailStatus email={department.defaultEmail} />

            
            {department.members.map((member) => (
              <MailStatus key={member.id} email={member.email} />
            ))}

          </div>
        );
      })}
    </div>
  );
}