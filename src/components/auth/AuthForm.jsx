"use client";

import { useState } from "react";
import { Mail, Lock, User, Factory } from "lucide-react";

export default function AuthForm({ type = "org" }) {
  const [mode, setMode] = useState("login");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    gigId: "",
    adminId: "",
    adminPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    const endpoint =
      mode === "login"
        ? "/api/auth/login"
        : "/api/auth/register";

    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...formData,
        type,
        gigCode: formData.gigId,
      }),
    });

    const data = await res.json();

    if (res.ok) {
      if (mode === "login") {
        localStorage.setItem("user", JSON.stringify(data.user));
        window.location.href = "/dashboard";
      } else {
        if (data.gigCode) {
          alert(`Your Organization Code: ${data.gigCode}`);
        }
        window.location.href = "/dashboard";
      }
    } else {
      alert(data.error);
    }
  };

  return (
    <div className="min-h-screen bg-[#080b11] flex items-center justify-center">
      <div className="bg-[#161b22] border border-white/10 rounded-2xl p-8 w-[420px]">

        {/* HEADER */}
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-cyan-500/20 border border-cyan-500/30 p-3 rounded-xl">
            <Factory className="text-cyan-400" size={20} />
          </div>
          <div>
            <h1 className="text-white font-semibold text-lg">
              OT/IT Sentinel
            </h1>
            <p className="text-gray-400 text-sm">
              Incident Management System
            </p>
          </div>
        </div>

        {/* TOGGLE */}
        <div className="flex bg-[#0f172a] rounded-xl p-1 mb-6">
          <button
            onClick={() => setMode("login")}
            className={`flex-1 py-2 rounded-lg text-sm ${
              mode === "login"
                ? "bg-cyan-500 text-white"
                : "text-gray-400"
            }`}
          >
            Login
          </button>

          <button
            onClick={() => setMode("register")}
            className={`flex-1 py-2 rounded-lg text-sm ${
              mode === "register"
                ? "bg-cyan-500 text-white"
                : "text-gray-400"
            }`}
          >
            Register
          </button>
        </div>

        {/* TITLE */}
        <h2 className="text-white text-xl font-semibold mb-1">
          {type === "org" ? "Organization" : "Employee"}{" "}
          {mode === "login" ? "Login" : "Register"}
        </h2>

        <p className="text-gray-400 text-sm mb-6">
          {mode === "login"
            ? "Access your dashboard"
            : "Create your account"}
        </p>

        {/* FORM */}
        <div className="flex flex-col gap-4">

          {/* NAME */}
          {mode === "register" && (
            <div className="flex items-center bg-[#0f172a] border border-white/10 rounded-lg px-3 py-2">
              <User className="text-gray-400 mr-2" size={18} />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="bg-transparent outline-none text-white w-full text-sm"
              />
            </div>
          )}

          {/* EMAIL */}
          <div className="flex items-center bg-[#0f172a] border border-white/10 rounded-lg px-3 py-2">
            <Mail className="text-gray-400 mr-2" size={18} />
            <input
              type="email"
              name="email"
              placeholder={
                type === "org"
                  ? "admin@company.com"
                  : "user@company.com"
              }
              value={formData.email}
              onChange={handleChange}
              className="bg-transparent outline-none text-white w-full text-sm"
            />
          </div>

          {/* 🔥 GIG CODE (LOGIN + USER REGISTER ONLY) */}
          {(mode === "login" || (type === "user" && mode === "register")) && (
            <div className="flex items-center bg-[#0f172a] border border-white/10 rounded-lg px-3 py-2">
              <input
                type="text"
                name="gigId"
                placeholder="Organization Code"
                value={formData.gigId}
                onChange={handleChange}
                className="bg-transparent outline-none text-white w-full text-sm"
              />
            </div>
          )}

          {/* PASSWORD */}
          <div className="flex items-center bg-[#0f172a] border border-white/10 rounded-lg px-3 py-2">
            <Lock className="text-gray-400 mr-2" size={18} />
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              className="bg-transparent outline-none text-white w-full text-sm"
            />
          </div>

          {/* ADMIN VERIFY (USER REGISTER ONLY) */}
          {type === "user" && mode === "register" && (
            <>
              <input
                type="text"
                name="adminId"
                placeholder="Admin Email"
                value={formData.adminId}
                onChange={handleChange}
                className="bg-[#0f172a] border border-white/10 rounded-lg px-3 py-2 text-white text-sm"
              />

              <input
                type="password"
                name="adminPassword"
                placeholder="Admin Password"
                value={formData.adminPassword}
                onChange={handleChange}
                className="bg-[#0f172a] border border-white/10 rounded-lg px-3 py-2 text-white text-sm"
              />
            </>
          )}

          {/* FORGOT */}
          {mode === "login" && (
            <p className="text-right text-sm text-cyan-400 cursor-pointer">
              Forgot password?
            </p>
          )}

          {/* BUTTON */}
          <button
            onClick={handleSubmit}
            className="bg-cyan-500 hover:bg-cyan-600 transition text-white py-3 rounded-lg mt-2"
          >
            {mode === "login"
              ? "Login to Dashboard"
              : "Register"}
          </button>
        </div>

        {/* FOOTER */}
        <p className="text-gray-400 text-sm mt-6 text-center">
          {mode === "login" ? (
            <button onClick={() => setMode("register")}>
              Don't have an account?{" "}
              <span className="text-cyan-400 hover:underline">
                Register
              </span>
            </button>
          ) : (
            <button onClick={() => setMode("login")}>
              Already have an account?{" "}
              <span className="text-cyan-400 hover:underline">
                Login
              </span>
            </button>
          )}
        </p>

      </div>
    </div>
  );
}