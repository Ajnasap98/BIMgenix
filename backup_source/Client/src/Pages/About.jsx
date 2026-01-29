import React from "react";
import { MissionIcon, VisionIcon } from "../Components/Icons"; // Ensure these exist or use placeholders

export default function About() {
  return (
    <main className="py-24 bg-gradient-to-b from-[#081830] via-[#0a1f40] to-[#0e2b5c] min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            About BIMatrix
          </h1>
          <p className="text-gray-300 text-lg mt-4 max-w-3xl mx-auto leading-relaxed">
            BIMatrix is a technology-driven company specializing in Building Information
            Modeling (BIM) workflows. We help architects, engineers, and contractors
            deliver smarter, faster, and more sustainable projects.
          </p>
        </div>

        {/* Mission */}
        <section className="mt-16 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="text-cyan-400">🚀</span> Our Mission
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              Our mission is to simplify construction workflows through innovative BIM
              practices. We focus on precision, collaboration, and efficiency —
              ensuring every project is delivered with excellence and sustainability
              in mind.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(6,182,212,0.3)] border border-cyan-500/20">
            <img
              src="/assets/about/mission.webp"
              alt="Our Mission"
              className="w-full h-80 object-cover"
              onError={(e) => e.target.src = 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2089&auto=format&fit=crop'}
            />
          </div>
        </section>

        {/* Vision */}
        <section className="mt-24 grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(59,130,246,0.3)] border border-blue-500/20">
            <img
              src="/assets/about/vision.webp"
              alt="Our Vision"
              className="w-full h-80 object-cover"
              onError={(e) => e.target.src = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop'}
            />
          </div>
          <div className="order-1 md:order-2 space-y-6">
            <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="text-blue-400">👁️</span> Our Vision
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              We envision a future where BIM is at the core of every construction project,
              driving smarter cities and infrastructure. With advanced digital solutions,
              BIMatrix empowers clients to make informed decisions at every stage of the
              project lifecycle.
            </p>
          </div>
        </section>

        {/* Values */}
        <section className="mt-24">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { title: "Innovation", text: "Leveraging cutting-edge BIM tools to enhance workflows and results.", icon: "💡" },
              { title: "Collaboration", text: "Bringing teams together through integrated digital models.", icon: "🤝" },
              { title: "Sustainability", text: "Designing workflows that minimize waste and maximize efficiency.", icon: "🌍" }
            ].map((value, idx) => (
              <div key={idx} className="p-8 bg-slate-900/50 backdrop-blur-md rounded-2xl border border-cyan-500/10 hover:border-cyan-400/50 transition-all duration-300 hover:-translate-y-2 shadow-lg">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="font-bold text-xl text-white mb-3">{value.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {value.text}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
