



import React from 'react';

const ProjectCard = ({ image, title, location, category }) => {
  return (
    <div className="relative bg-[#0b1d36] rounded-xl overflow-hidden group border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_25px_rgba(6,182,212,0.25)] hover:-translate-y-2 h-full flex flex-col">
      <div className="overflow-hidden relative h-56">
        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-cyan-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none" />
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      <div className="p-6 flex-1 flex flex-col relative z-20">
        <p className="text-xs font-bold tracking-widest text-cyan-400 mb-2 uppercase">{category}</p>
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-200 transition-colors">{title}</h3>
        <p className="text-slate-400 text-sm mt-auto flex items-center gap-1">
          <span className="text-cyan-500/70">📍</span> {location}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;


