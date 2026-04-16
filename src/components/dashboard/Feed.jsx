"use client";

import { useEffect, useState } from "react";
import { getUser } from "@/lib/session";
import FeedCard from "./FeedCard";
import Link from "next/link";

export default function Feed() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchIncidents = async () => {
      try {
        const user = getUser();

        if (!user) {
          console.error("No user found");
          setLoading(false);
          return;
        }

        const res = await fetch("/api/incidents", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            orgId: user.organizationId,
          }),
        });

        const result = await res.json();

        setData(result);
        setLoading(false);

      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };

    fetchIncidents();
  }, []);

  return (
    <div className="bg-bgCard flex flex-col mt-5 ml-7 mr-7 w-[60%] rounded-2xl p-6">

      <div className="flex justify-between items-center mt-3 w-full">
        <div>
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

      
      {loading && (
        <p className="text-gray-400 mt-6">Loading...</p>
      )}

      
      {!loading && data.length === 0 && (
        <p className="text-gray-400 mt-6">
          No incidents found
        </p>
      )}

    
      {!loading && data.map((incident) => (
        <Link
          key={incident.id}
          href={`/dashboard/${incident.id}`}
          className="w-full"
        >
          <FeedCard
            incident={{
              incidentId: incident.id,
              title: incident.title,
              description: incident.description,
              severity: incident.severity,
              status: incident.status,
              time: new Date(incident.created_at).toLocaleString(),
              domain: incident.domain || "IT", 
            }}
          />
        </Link>
      ))}

    </div>
  );
}