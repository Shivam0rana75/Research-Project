import Element from "./sbElements";

import {
  LayoutDashboard,
  AlertTriangle,
  Shield,
  Server,
  Building2,
  BarChart3,
  Factory,
} from "lucide-react";

export default function Group({ isOpen }) {
  return (
    <div className="flex flex-col gap-2">

      <Element
        title="Dashboard"
        icon={LayoutDashboard}
        href="/dashboard"
        isOpen={isOpen}
      />

      <Element
        title="Live-Incidents"
        icon={AlertTriangle}
        href="/live-incidents"
        isOpen={isOpen}
      />

      <Element
        title="OT Alerts"
        icon={Factory}
        href="/ot-alerts"
        isOpen={isOpen}
      />

      <Element
        title="IT Alerts"
        icon={Shield}
        href="/it-alerts"
        isOpen={isOpen}
      />

      <Element
        title="Affected Assets"
        icon={Server}
        href="/affected-assets"
        isOpen={isOpen}
      />

      <Element
        title="Departments"
        icon={Building2}
        href="/departments"
        isOpen={isOpen}
      />

      <Element
        title="Reports & Analytics"
        icon={BarChart3}
        href="/Reports_&_Analytics"
        isOpen={isOpen}
      />

    </div>
  );
}