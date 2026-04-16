"use client";

import { useEffect, useState } from "react";
import { getUser } from "@/lib/session";
import Card from "./Card";

import {
  AlertTriangle,
  Factory,
  Shield,
  Clock
} from "lucide-react";

export default function Cgroup() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        const user = getUser();

        if (!user) {
          console.error("No user found");
          setLoading(false);
          return;
        }

        const res = await fetch("/api/dashboard/metrics", {
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

    fetchMetrics();
  }, []);

  if (loading) {
    return <p className="text-gray-400 p-6">Loading...</p>;
  }

  if (!data) {
    return <p className="text-gray-400 p-6">No data available</p>;
  }

  return (
    <div className="flex justify-center gap-8 mt-6">

      <Card
        title="Active Incidents"
        value={data.activeIncidents}
        icon={<AlertTriangle className="text-red-500" />}
        percentage={12}
      />

      <Card
        title="Critical OT Alerts"
        value={data.criticalOT}
        icon={<Factory className="text-yellow-500" />}
        percentage={8}
      />

      <Card
        title="IT Security Events"
        value={data.itEvents}
        icon={<Shield className="text-blue-500" />}
        percentage={5}
      />

      <Card
        title="Mean Time to Resolution"
        value={`${data.mttr}h`}
        icon={<Clock className="text-green-500" />}
        percentage={15}
      />

    </div>
  );
}