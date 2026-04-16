"use client";

import { useState } from "react";
import { getUser } from "@/lib/session";
import { Server } from "lucide-react";

export default function CreateAssetPage() {
  const user = getUser();

  const [form, setForm] = useState({
    id: "",
    name: "",
    type: "",
    domain: "",
    location: "",
    criticality: "",
  });

  const handleSubmit = async () => {
    const res = await fetch("/api/assets/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...form,
        orgId: user.organizationId,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.error);
      return;
    }

    alert("Asset Created");
    window.location.href = "/dashboard";
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#080b11] text-white">

      <div className="bg-[#0b1220] p-10 rounded-3xl w-[700px]">

       
        <div className="flex items-center justify-center gap-2 mb-8">
          <Server className="text-blue-400" />
          <h1 className="text-xl font-semibold">Create New Asset</h1>
        </div>

        
        <div className="flex flex-col gap-4">

          <input
            placeholder="Asset ID (e.g. PLC-001)"
            className="bg-[#1f2937] p-4 rounded-3xl outline-none"
            onChange={(e) => setForm({ ...form, id: e.target.value })}
          />

          <input
            placeholder="Asset Name"
            className="bg-[#1f2937] p-4 rounded-3xl outline-none"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <input
            placeholder="Type (PLC, Server, Firewall...)"
            className="bg-[#1f2937] p-4 rounded-3xl outline-none"
            onChange={(e) => setForm({ ...form, type: e.target.value })}
          />

          
          <select
            className="bg-[#1f2937] text-white p-4 rounded-3xl outline-none"
            onChange={(e) => setForm({ ...form, domain: e.target.value })}
          >
            <option value="" className="text-gray-400">Select Domain</option>
            <option value="IT" className="text-white">IT</option>
            <option value="OT" className="text-white">OT</option>
          </select>

          <input
            placeholder="Location"
            className="bg-[#1f2937] p-4 rounded-3xl outline-none"
            onChange={(e) => setForm({ ...form, location: e.target.value })}
          />

          
          <select
            className="bg-[#1f2937] text-white p-4 rounded-3xl outline-none"
            onChange={(e) =>
              setForm({ ...form, criticality: e.target.value })
            }
          >
            <option value="" className="text-gray-400">Select Criticality</option>
            <option value="Low" className="text-white">Low</option>
            <option value="Medium" className="text-white">Medium</option>
            <option value="High" className="text-white">High</option>
            <option value="Critical" className="text-white">Critical</option>
          </select>

        </div>

        <div className="flex justify-end mt-6">
          <button
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-3xl"
          >
            Create Asset
          </button>
        </div>

      </div>
    </div>
  );
}