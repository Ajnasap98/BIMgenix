import React from 'react';

const ServiceCard = ({ icon, title, desc }) => {
  return (
    <div className="relative p-px rounded-xl bg-gradient-to-br from-cyan-400/50 to-blue-500/30 group h-full">
      <div className="relative bg-slate-900/80 backdrop-blur-sm rounded-lg p-8 text-left h-full flex flex-col items-start transition-all duration-300 group-hover:bg-slate-800/80">
        {icon}
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-slate-400 text-base">{desc}</p>
      </div>
    </div>
  );
};

export default ServiceCard;

