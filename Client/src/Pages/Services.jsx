import React from "react";
import ServiceCard from "../Components/ServiceCard";
import { BimModelingIcon, ClashDetectionIcon, QuantityTakeoffIcon, SchedulingIcon } from "../Components/Icons";

// Optionally we can import specific icons or just use text if icons aren't available for all.
// For now, I will use a generic placeholder or the ones I know exist if imported.
// Since Icons.jsx was mentioned in Home.jsx, I should try to use them if possible.

export default function Services() {
  return (
    <main className="py-24 bg-gradient-to-b from-[#081830] via-[#0a1f40] to-[#0e2b5c] min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Our Services
          </h1>
          <p className="text-gray-300 text-lg mt-4 max-w-3xl mx-auto leading-relaxed">
            BIMgenix provides a comprehensive range of Building Information Modeling
            services tailored to enhance project efficiency and accuracy across
            design, construction, and operations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            title="3D BIM Modeling"
            desc="Creation of detailed 3D BIM models at LOD 200–500, including parametric families and federated models."
          />
          <ServiceCard
            title="2D Shop Drawings & As-Built"
            desc="Detailed 2D shop drawings extracted from models, including sections, coordination drawings, and builder's work."
          />
          <ServiceCard
            title="Clash Detection & Coordination"
            desc="Identify and resolve conflicts early using Navisworks & Revit for seamless multidisciplinary collaboration."
          />
          <ServiceCard
            title="4D BIM (Scheduling)"
            desc="Integrating time schedules with 3D models to simulate construction sequences and improve planning."
          />
          <ServiceCard
            title="5D BIM (Cost Estimation)"
            desc="Linking quantities and costs with models to produce accurate BOQs and real-time cost estimates."
          />
          <ServiceCard
            title="Quantity Takeoff"
            desc="Automated extraction of material quantities directly from BIM models to save time and reduce errors."
          />
          <ServiceCard
            title="Scan to BIM"
            desc="Transforming laser scan point cloud data into accurate as-built BIM models for renovation and retrofitting."
          />
          <ServiceCard
            title="MEP BIM Services"
            desc="Precise modeling of Mechanical, Electrical, and Plumbing systems with automated coordination checks."
          />
          <ServiceCard
            title="BIM for Facility Management"
            desc="Extending BIM data usage for building operations, asset management, and lifecycle maintenance."
          />
          <ServiceCard
            title="BIM Consultation"
            desc="Expert advisory services to help you implement BIM workflows, standards, and digital transformation."
          />
        </div>
      </div>
    </main>
  );
}
