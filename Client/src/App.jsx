import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import BIMgenixLogo from "./assets/Logo/BIMgenix-03.png";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Projects from "./Pages/Projects";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

const App = () => {
  const [loaded, setLoaded] = useState(false);
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // Initial Loader effect
  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#081830] text-slate-200 font-sans selection:bg-cyan-400 selection:text-slate-900 overflow-x-hidden">

      {/* Preloader */}
      {!loaded && (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#081830] transition-opacity duration-700">
          <div className="relative flex flex-col items-center">
            {/* Logo with Glow */}
            <img
              src={BIMgenixLogo}
              alt="BIMgenix Loading"
              className="w-32 md:w-40 animate-pulse drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]"
            />

            {/* Animated Text */}
            <div className="mt-8 overflow-hidden whitespace-nowrap border-r-4 border-cyan-400 animate-typewriter">
              <p className="text-cyan-400 text-lg md:text-xl font-medium tracking-widest font-sans">
                Constructing the future..
              </p>
            </div>
          </div>

          <style>{`
             @keyframes typewriter {
               from { width: 0; }
               to { width: 100%; }
             }
             .animate-typewriter {
               animation: typewriter 2.5s steps(30, end) forwards, blink-caret 0.75s step-end infinite;
               width: 0;
               max-width: fit-content;
               animation-fill-mode: forwards;
             }
             @keyframes blink-caret {
               from, to { border-color: transparent }
               50% { border-color: #22d3ee; }
             }
           `}</style>
        </div>
      )}

      {/* Main Content */}
      <div className={`transition-opacity duration-1000 ${loaded ? "opacity-100" : "opacity-0"}`}>
        <Navbar />

        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default App;

