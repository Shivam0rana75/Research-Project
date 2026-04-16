import IncidentBody from "@/components/dashboard/incident/IncidentBody";
import IncidentHeader from "@/components/dashboard/incident/IncidentHeader";

export default async function IncidentDetailsPage({ params }) {
  const resolvedParams = await params; // 🔥 FIX
  const { slug } = resolvedParams;

  console.log("SLUG:", slug);

  const res = await fetch(`http://localhost:3000/api/incidents/${slug}`, {
    cache: "no-store",
  });

  console.log("API STATUS:", res.status);

  if (!res.ok) {
    return (
      <div className="text-white font-bold flex justify-center">
        Incident not found
      </div>
    );
  }

  const incident = await res.json();
  console.log("API DATA:", incident);

  return (
    <div>
      <div className="bg-bgMain">
        <IncidentHeader incident={incident} />
      </div>

      <IncidentBody incident={incident} />
    </div>
  );
}