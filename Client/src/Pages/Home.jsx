import React from "react";
import { Link } from "react-router-dom";
import Hero from "../Components/Hero";
import ServiceCard from "../Components/ServiceCard";
import ProjectCard from "../Components/ProjectCard";
import Footer from "../Components/Footer";

// Import sample images/icons just for the preview
import enocImg from "../assets/Enoc Filling Station.png";
import FABImg from "../assets/FAB-Abudhabi.png";
import AldarImg from "../assets/Aldar Logistics Park.png";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden font-sans bg-gradient-to-b from-[#06162a] via-[#0a1f40] to-[#0e2b5c] text-white">

      {/* ================= MAIN CONTENT ================= */}
      <main className="relative z-10 transition-opacity duration-700 opacity-100">
        {/* ================= HERO ================= */}
        <section className="pt-0">
          <Hero />
        </section>

        {/* ================= SERVICES PREVIEW ================= */}
        <section className="py-24 px-4 bg-[#081f3f]/70 backdrop-blur-md relative overflow-hidden">
          {/* Decorative background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="max-w-7xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-cyan-400">Expertise</span>
            </h2>

            <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed mb-16">
              Empowering construction with high-precision BIM deliverables.
              We turn complex designs into buildable reality.
            </p>

            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              <ServiceCard
                title="BIM Modeling"
                desc="LOD 200–500 detailed models, parametric families and federated coordination."
              />
              <ServiceCard
                title="Clash Detection"
                desc="Advanced multidisciplinary clash detection in Revit & Navisworks."
              />
              <ServiceCard
                title="4D Scheduling"
                desc="Construction sequencing linked to real project timelines."
              />
              <ServiceCard
                title="Quantity Takeoff"
                desc="Highly accurate BOQs directly extracted from BIM data."
              />
            </div>

            <div className="mt-16">
              <Link to="/services">
                <button className="px-10 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold tracking-wide hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] hover:-translate-y-1 transition-all duration-300">
                  Explore All Services
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* ================= PROJECTS PREVIEW ================= */}
        <section className="py-24 px-4 bg-[#06172f]/80 backdrop-blur-md relative">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="max-w-7xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Featured <span className="text-blue-400">Projects</span>
            </h2>

            <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed mb-16">
              Delivering excellence across the Middle East and beyond.
              See how we bring iconic structures to life.
            </p>

            <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
              <ProjectCard
                image={FABImg}
                title="First Abu Dhabi Bank"
                location="Abu Dhabi, UAE"
                category="Commercial"
              />

              <ProjectCard
                image={enocImg}
                title="ENOC Fuel Station"
                location="Abu Dhabi, UAE"
                category="Retail"
              />

              <ProjectCard
                image={AldarImg}
                title="Aldar Logistics Park"
                location="Riyadh, KSA"
                category="Industrial"
              />
            </div>

            <div className="mt-16">
              <Link to="/projects">
                <button className="px-10 py-4 rounded-full border-2 border-cyan-400/50 text-cyan-300 font-bold tracking-wide hover:bg-cyan-400 hover:text-[#06162a] hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:-translate-y-1 transition-all duration-300">
                  View Portfolio
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* ================= Call to Action ================= */}
        <section className="py-24 px-6 text-center bg-gradient-to-t from-[#050f1e] to-[#081f3f]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Optimize Your Construction Workflow?</h2>
            <p className="text-gray-400 text-lg mb-10">
              Connect with our team to discuss your project requirements and receive a customized BIM execution plan.
            </p>
            <Link to="/contact">
              <button className="group relative px-12 py-5 rounded-full bg-cyan-950/30 backdrop-blur-sm border border-cyan-500/30 text-cyan-400 font-bold text-lg tracking-wide hover:bg-cyan-900/50 hover:border-cyan-400 hover:text-cyan-200 hover:shadow-[0_0_40px_rgba(6,182,212,0.4)] hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                <span className="relative z-10">Get a Quote</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent -translate-x-[200%] group-hover:translate-x-[200%] transition-transform duration-700 ease-in-out" />
              </button>
            </Link>
          </div>
        </section>

        {/* <Footer /> */}
      </main>
    </div>
  );
}
