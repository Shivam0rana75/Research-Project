import { AlertTriangle } from "lucide-react";
import { Factory } from "lucide-react";
import { Building2 } from "lucide-react";
import { Shield } from "lucide-react";
import Card from "@/components/dashboard/Card";
export default function CGroup(){
    return (
        <div className="flex flex-row items-center justify-between">
            <Card title="Active Incidents" value="23" percentage={3} icon={<AlertTriangle size={35} className="text-red-500" />} />
            <Card title="Critical OT Alerts" value="7" icon={<Factory size={24} className="text-blue-500" />} />
            <Card title="IT Security Events" value="16" icon={<Building2 size={24} className="text-green-500" />} />
            <Card title="Mean time to resolution" value="2.4" icon={<Shield size={24} className="text-yellow-500" />} />

        </div>
    )
}