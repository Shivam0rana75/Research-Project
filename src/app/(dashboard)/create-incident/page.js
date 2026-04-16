"use client";

import { useEffect, useState } from "react";
import { getUser } from "@/lib/session";
import { ShieldAlert } from "lucide-react";

export default function CreateIncidentPage() {
  const user = getUser();

  const [step, setStep] = useState(1);

  const [form, setForm] = useState({
    title: "",
    description: "",
    severity: "",
    domain: "",
    status: "",
    location: "",
  });

  const [assets, setAssets] = useState([]);
  const [departments, setDepartments] = useState([]);

  const [selectedAssets, setSelectedAssets] = useState([]);
  const [selectedDepartments, setSelectedDepartments] = useState([]);

  useEffect(() => {
  const fetchData = async () => {
    try {
      const assetsRes = await fetch("/api/assets/list", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ orgId: user.organizationId }),
      });

      const assetsData = await assetsRes.json();
      console.log("ASSETS:", assetsData);

      const deptRes = await fetch("/api/departments/list", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ orgId: user.organizationId }),
      });

      const deptData = await deptRes.json();
      console.log("DEPARTMENTS:", deptData);

      setAssets(assetsData);
      setDepartments(deptData);

    } catch (err) {
      console.error("FETCH ERROR:", err);
    }
  };

  fetchData();
}, []);

  const toggle = (id, list, setter) => {
    setter(
      list.includes(id)
        ? list.filter((i) => i !== id)
        : [...list, id]
    );
  };

  const handleSubmit = async () => {
    const res = await fetch("/api/incidents/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...form,
        orgId: user.organizationId,
        selectedAssets,
        selectedDepartments,
      }),
    });

    if (res.ok) {
      alert("Incident Created");
      window.location.href = "/dashboard";
    }
  };

  return (
    <div className="min-h-screen bg-[#080b11] flex justify-center items-center text-white">
      
      <div className="w-[800px] bg-[#0b1220] p-8 rounded-3xl">

        <div className="flex justify-center items-center mb-6">
          <ShieldAlert className="text-red-400 size-8" />
          <h1 className="text-xl font-semibold mx-3">
            Create New Incident
          </h1>
        </div>

        {step === 1 && (
          <>
            <input
              placeholder="Title"
              onChange={(e) =>
                setForm({ ...form, title: e.target.value })
              }
              className="w-full mb-3 p-3 bg-gray-800 rounded-3xl outline-none"
            />

            <textarea
              placeholder="Description"
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
              className="w-full mb-3 p-3 bg-gray-800 rounded-3xl outline-none"
            />

            <select
              onChange={(e) =>
                setForm({ ...form, severity: e.target.value })
              }
              className="w-full mb-3 p-3 bg-gray-800 rounded-3xl outline-none"
            >
              <option>Select Severity</option>
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
              <option>Critical</option>
            </select>

            <select
              onChange={(e) =>
                setForm({ ...form, domain: e.target.value })
              }
              className="w-full mb-3 p-3 bg-gray-800 rounded-3xl outline-none"
            >
              <option>Select Domain</option>
              <option>IT</option>
              <option>OT</option>
            </select>

            <select
              onChange={(e) =>
                setForm({ ...form, status: e.target.value })
              }
              className="w-full mb-3 p-3 bg-gray-800 rounded-3xl outline-none"
            >
              <option>Select Status</option>
              <option>Open</option>
              <option>Investigating</option>
            </select>

            <input
              placeholder="Location"
              onChange={(e) =>
                setForm({ ...form, location: e.target.value })
              }
              className="w-full mb-6 p-3 bg-gray-800 rounded-3xl outline-none"
            />

            <button
              onClick={() => setStep(2)}
              className="bg-blue-500 px-5 py-2 rounded-3xl hover:bg-blue-600"
            >
              Next Step
            </button>
          </>
        )}

        
        
            
        {step === 2 && (
        <>
            <h2 className="mb-2 text-lg">Assets</h2>
            <div className="flex flex-wrap gap-2 mb-6">
            {assets.map((a) => (
                <div
                key={a.id}
                onClick={() =>
                    toggle(a.id, selectedAssets, setSelectedAssets)
                }
                className={`px-4 py-2 rounded-3xl cursor-pointer transition ${
                    selectedAssets.includes(a.id)
                    ? "bg-blue-500 text-white"
                    : "bg-gray-700 hover:bg-gray-600"
                }`}
                >
                {a.name}
                </div>
            ))}
            </div>

            <h2 className="mb-2 text-lg">Departments</h2>
            <div className="flex flex-wrap gap-2 mb-6">
            {departments.map((d) => (
                <div
                key={d.id}
                onClick={() =>
                    toggle(d.id, selectedDepartments, setSelectedDepartments)
                }
                className={`px-4 py-2 rounded-3xl cursor-pointer transition ${
                    selectedDepartments.includes(d.id)
                    ? "bg-green-500 text-white"
                    : "bg-gray-700 hover:bg-gray-600"
                }`}
                >
                {d.name}
                </div>
            ))}
            </div>

            <div className="flex gap-3">
            <button
                onClick={() => setStep(1)}
                className="bg-gray-700 px-5 py-2 rounded-3xl hover:bg-gray-600"
            >
                Back
            </button>

            <button
                onClick={handleSubmit}
                className="bg-blue-500 px-5 py-2 rounded-3xl hover:bg-blue-600"
            >
                Submit Incident
            </button>
            </div>
        </>
        )}
      </div>
    </div>
  );
}