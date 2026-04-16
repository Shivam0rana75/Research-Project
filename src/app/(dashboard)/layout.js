"use client";

import Sidebar from "@/components/SideBar";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/navigation";
export default function DashboardLayout({ children }) {
  const router = useRouter();

  

  return (
    
        <div className="flex h-screen bg-bgMain overflow-hidden">
      
          <div className="bg-bgSidebar shrink-0">
            <Sidebar />
          </div>

          <div className="flex-1 flex flex-col min-w-0 bg-bgMain">
            
            <Navbar />

            <main className="flex-1 overflow-y-auto">
              {children}
            </main>

          </div>

        </div>

    
   
  );
}