import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import BIMatrixLogo from "../assets/Logo/BIMatrix-Logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItemClasses = ({ isActive }) =>
    `relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${isActive
      ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.3)]"
      : "text-slate-300 hover:text-white hover:bg-white/5 hover:border-white/10 border border-transparent"
    }`;

  const mobileItemClasses = ({ isActive }) =>
    `block px-4 py-3 rounded-xl text-lg font-medium transition-all duration-300 ${isActive
      ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30"
      : "text-slate-300 hover:bg-white/5 hover:text-white"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-[#081830]/80 backdrop-blur-xl border-b border-white/5 shadow-2xl">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* ✅ LOGO */}
        <Link to="/" className="flex items-center gap-4 group">
          <div className="bg-gradient-to-br from-white/10 to-white/5 p-2 rounded-xl ring-1 ring-white/10 group-hover:ring-cyan-500/50 transition-all duration-500">
            <img
              src={BIMatrixLogo}
              className="h-10 w-auto object-contain drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]"
              alt="BIMatrix Logo"
            />
          </div>
          <span className="hidden sm:block text-xl font-bold tracking-wide text-white">
            <span className="text-cyan-400">BIM</span>atrix
          </span>
        </Link>

        {/* ✅ DESKTOP NAV - Unified Button Style */}
        <nav className="hidden md:flex items-center gap-3">
          {["Home", "Services", "Projects", "About"].map((item) => (
            <NavLink
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className={navItemClasses}
            >
              {item}
            </NavLink>
          ))}

          {/* Contact Button */}
          <NavLink
            to="/contact"
            className="ml-2 px-6 py-2 rounded-full text-sm font-bold tracking-wide transition-all duration-300 border bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-cyan-400 border-cyan-500/30 hover:bg-cyan-500 hover:text-[#081830] hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]"
          >
            Contact
          </NavLink>
        </nav>

        {/* ✅ MOBILE MENU TOGGLE */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-cyan-400 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* ✅ MOBILE MENU DROPDOWN */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="bg-[#0a1f40] border-t border-white/10 px-6 py-6 space-y-2 shadow-inner">
          {["Home", "Services", "Projects", "About", "Contact"].map((item) => (
            <NavLink
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className={mobileItemClasses}
            >
              {item}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
}
