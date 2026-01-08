import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "../Components/ProjectCard";
import FABImg from "../assets/FAB-Abudhabi.png";
import AldarImg from "../assets/Aldar Logistics Park.png";
import EnocImg from "../assets/Enoc Filling Station.png";
import MHImg from "../assets/Maudsley M.H Hospital.png";
import RWImg from "../assets/Rail Workshop-France.png";
import ADNOCImg from "../assets/ADNOC.png";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Projects() {
  return (
    <main className="relative py-24 bg-[#081830] min-h-screen text-white overflow-hidden">

      {/* Background Decor */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(6,182,212,0.3)]"
          >
            Our Masterpieces
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-gray-300 text-lg mt-6 max-w-3xl mx-auto leading-relaxed"
          >
            BIMgenix has successfully delivered BIM solutions across a wide range
            of sectors — from healthcare and commercial towers to transport
            infrastructure and residential complexes.
          </motion.p>
        </div>

        {/* Project Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}><ProjectCard image={FABImg} title="First Abu Dhabi Bank" location="Abu Dhabi, UAE" category="Commercial Building" /></motion.div>
          <motion.div variants={itemVariants}><ProjectCard image={EnocImg} title="ENOC Fuel Station" location="Abu Dhabi, UAE" category="Fuel Station" /></motion.div>
          <motion.div variants={itemVariants}><ProjectCard image={AldarImg} title="Aldar Logistics Park" location="Riyadh, KSA" category="Warehouse" /></motion.div>
          <motion.div variants={itemVariants}><ProjectCard image={MHImg} title="Maudsley Mental Hospital" location="Abu Dhabi, UAE" category="Healthcare" /></motion.div>
          <motion.div variants={itemVariants}><ProjectCard image={RWImg} title="Railway Workshop" location="France" category="Industrial" /></motion.div>
          <motion.div variants={itemVariants}><ProjectCard image={ADNOCImg} title="ADNOC Substation" location="UAE" category="Substation" /></motion.div>
        </motion.div>
      </div>
    </main>
  );
}
