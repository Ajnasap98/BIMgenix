import React from 'react';
import { Link } from 'react-router-dom';
import HeroImg from '../assets/High Rise Building -01.png';

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center text-center overflow-hidden px-4">

      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={HeroImg}
          alt="Futuristic Building Construction"
          className="w-full h-full object-cover animate-pan-up opacity-80"
        />
        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#081830] via-[#081830]/60 to-transparent"></div>
        {/* Scanning Line Effect */}
        <div className="absolute inset-0 bg-cyan-500/10 animate-scan-line pointer-events-none"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center animate-fade-in-up max-w-5xl mx-auto">
        {/* Animated Badge */}
        <div className="mb-6 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-sm font-medium tracking-wide shadow-[0_0_15px_rgba(6,182,212,0.3)] animate-pulse">
          🚀 Transforming Construction with BIM Technology
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white mb-8 leading-tight drop-shadow-2xl">
          <span className="block mb-2">Engineering the Future</span>
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 filter drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]">
            of Construction
          </span>
        </h1>

        <p className="max-w-3xl mx-auto text-lg md:text-2xl text-slate-200 mb-12 leading-relaxed font-light">
          We leverage <span className="font-semibold text-cyan-400">Building Information Modeling</span> to deliver smarter, faster, and more sustainable projects from concept to reality.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
          <Link
            to="/services"
            className="group relative px-8 py-4 font-bold text-lg rounded-full overflow-hidden transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(6,182,212,0.6)]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 group-hover:scale-105 transition-transform duration-300"></div>
            <span className="relative text-[#081830] group-hover:text-white transition-colors duration-300 flex items-center gap-2">
              Discover Our Services
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </span>
          </Link>

          <Link
            to="/projects"
            className="group relative px-8 py-4 font-bold text-lg rounded-full overflow-hidden transition-all duration-300 transform hover:-translate-y-1 border border-cyan-400/50 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(6,182,212,0.4)]"
          >
            <div className="absolute inset-0 bg-cyan-950/40 backdrop-blur-md group-hover:bg-cyan-900/60 transition-colors duration-300"></div>
            <span className="relative text-cyan-300 group-hover:text-cyan-200 transition-colors duration-300 flex items-center gap-2">
              View Projects
              <svg className="w-5 h-5 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            </span>
          </Link>
        </div>
      </div>

      <style>{`
        @keyframes pan-up {
          0% { transform: scale(1.1) translateY(5%); }
          100% { transform: scale(1.1) translateY(-5%); }
        }
        .animate-pan-up {
          animation: pan-up 20s ease-in-out infinite alternate;
        }

        @keyframes scan-line {
          0% { clip-path: inset(0 0 100% 0); }
          50% { clip-path: inset(0 0 0 0); }
          100% { clip-path: inset(100% 0 0 0); }
        }
        /* .animate-scan-line {
           animation: scan-line 4s ease-in-out infinite;
           background: linear-gradient(to bottom, transparent, rgba(6, 182, 212, 0.2), transparent);
        } */

        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
      `}</style>
    </div>
  );
};

export default Hero;

