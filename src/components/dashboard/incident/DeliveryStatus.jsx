"use client";

import { useEffect, useState } from "react";
import MailStatus from "./MailStatus";

export default function DeliveryStatus({ incidentId }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/incidents/${incidentId}/notifications`);
      const result = await res.json();
      setData(result);
    };

    fetchData();
  }, [incidentId]);

  if (!data) return null;

  return (
    <div className="bg-bgCard rounded-3xl w-full mt-5 p-6">
      <p className="text-white text-xl font-semibold ml-1">
        Alert Delivery Status
      </p>

      {Object.entries(data).map(([deptName, dept]) => (
        <div key={deptName}>
          <MailStatus email={dept.defaultEmail} />

          {dept.members.map((email, idx) => (
            <MailStatus key={idx} email={email} />
          ))}
        </div>
      ))}
    </div>
  );
}