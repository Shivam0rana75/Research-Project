import Element from "./sbElements";
import { LayoutDashboard } from "lucide-react";
import { AlertTriangle } from "lucide-react";
import { Shield } from "lucide-react";
import { Server } from "lucide-react";
import { Building2 } from "lucide-react";
import { Bell } from "lucide-react";
import { BarChart3 } from "lucide-react";
import { FileText } from "lucide-react";
import { Settings } from "lucide-react";
import { Factory } from "lucide-react";
export default function Group({isOpen}){
    return (
        <div>
                    <Element title={isOpen ? "Dashboard" : ''} icon={LayoutDashboard} />
                    <Element title={isOpen ? "Alerts" : ''} icon={AlertTriangle} />
                    <Element title={isOpen ? "OT Alerts" : ''} icon={Factory} />
                    <Element title={isOpen ? "IT Alerts" : ''} icon={Shield} />
                    <Element title={isOpen ? "Affected Assets" : ''} icon={Server} />
                    <Element title={isOpen ? "Departments" : ''} icon={Building2} />
                    <Element title={isOpen ? "Alert Rules" : ''} icon={Bell} />
                    <Element title={isOpen ? "Reports & Analytics" : ''} icon={BarChart3} />
                    <Element title={isOpen ? "Audit Logs" : ''} icon={FileText} />
                    <Element title={isOpen ? "Settings" : ''} icon={Settings} />
        </div>
    )
} 