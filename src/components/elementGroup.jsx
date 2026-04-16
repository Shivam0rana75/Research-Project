"use client";

import Element from "./sbElements";
import { getUser } from "@/lib/session";

import {
  LayoutDashboard,
  AlertTriangle,
  Shield,
  Network,
  Server,
  ShieldAlert,
  Building2,
  BarChart3,
  Factory,
} from "lucide-react";

export default function Group({ isOpen }) {
  const user = getUser();
  const role = user?.role;

  const isAdminOrManager =
    role === "admin" || role === "manager";

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

      {isAdminOrManager && (
        <>
          <Element
            title="Create Department"
            icon={Network}
            href="/create-department"
            isOpen={isOpen}
          />

          <Element
            title="Create Assets"
            icon={Server}
            href="/create-assets"
            isOpen={isOpen}
          />
        </>
      )}

      <Element
        title="Create Incident"
        icon={ShieldAlert}
        href="/create-incident"
        isOpen={isOpen}
      />

    </div>
  );
}