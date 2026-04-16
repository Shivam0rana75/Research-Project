"use client";

import { useEffect, useState } from "react";
import { getUser } from "@/lib/session";
import { Network } from "lucide-react";

export default function CreateDepartmentPage() {
  const user = getUser();

  const [form, setForm] = useState({
    name: "",
    defaultEmail: "",
    email: "",
  });

  const [assets, setAssets] = useState([]);
  const [users, setUsers] = useState([]);

  const [selectedAssets, setSelectedAssets] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const a = await fetch("/api/assets/list", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ orgId: user.organizationId }),
        });

        const assetsData = await a.json();

        const u = await fetch("/api/users/list", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ orgId: user.organizationId }),
        });

        const usersData = await u.json();

        setAssets(assetsData);
        setUsers(usersData);

      } catch (err) {
        console.error("FETCH ERROR:", err);
      }
    };

    fetchData();
  }, []);

  
  const toggleAsset = (id) => {
    setSelectedAssets((prev) =>
      prev.includes(id)
        ? prev.filter((a) => a !== id)
        : [...prev, id]
    );
  };

  const toggleUser = (id) => {
    setSelectedUsers((prev) =>
      prev.includes(id)
        ? prev.filter((u) => u !== id)
        : [...prev, id]
    );
  };

  const handleSubmit = async () => {
    const res = await fetch("/api/departments/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...form,
        orgId: user.organizationId,
        selectedAssets,
        selectedUsers,
      }),
    });

    if (res.ok) {
      alert("Department Created");
      window.location.reload();
    }
  };

  return (
    <div className="min-h-screen bg-[#080b11] flex justify-center items-center text-white">
      
      <div className="w-[700px] bg-[#0b1220] p-8 rounded-3xl">

      
        <div className="flex justify-center items-center mb-6">
          <Network className="text-blue-400 size-8" />
          <h1 className="text-xl font-semibold mx-2">
            Create Department
          </h1>
        </div>

       
        <input
          placeholder="Department Name"
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
          className="w-full mb-3 p-3 bg-gray-800 rounded-3xl outline-none"
        />

        <input
          placeholder="Default Email"
          onChange={(e) =>
            setForm({ ...form, defaultEmail: e.target.value })
          }
          className="w-full mb-3 p-3 bg-gray-800 rounded-3xl outline-none"
        />

        <input
          placeholder="Additional Email"
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
          className="w-full mb-6 p-3 bg-gray-800 rounded-3xl outline-none"
        />

       
        <h2 className="mb-2 text-lg">Assets</h2>
        <div className="flex flex-wrap gap-2 mb-6">
          {assets.map((a) => (
            <div
              key={a.id}
              onClick={() => toggleAsset(a.id)}
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

        
        <h2 className="mb-2 text-lg">Assign Users</h2>
        <div className="flex flex-wrap gap-2 mb-6">
          {users.map((u) => (
            <div
              key={u.id}
              onClick={() => toggleUser(u.id)}
              className={`px-4 py-2 rounded-3xl cursor-pointer transition ${
                selectedUsers.includes(u.id)
                  ? "bg-green-500 text-white"
                  : "bg-gray-700 hover:bg-gray-600"
              }`}
            >
              {u.name}
            </div>
          ))}
        </div>

        
        <button
          onClick={handleSubmit}
          className="bg-blue-500 px-6 py-2 rounded-3xl hover:bg-blue-600"
        >
          Create Department
        </button>

      </div>
    </div>
  );
}