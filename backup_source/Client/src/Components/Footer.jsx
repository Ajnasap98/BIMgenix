import React from 'react';

const SocialIcon = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">
    {children}
  </a>
);

const Footer = () => {
  return (
    <footer id="contact" className="bg-[#081830]/80 border-t border-cyan-400/20">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          <div className="md:col-span-2">
            <p className="mt-4 text-slate-400 text-base max-w-sm">
              Engineering the future of construction with innovative BIM solutions.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-cyan-300 tracking-wider uppercase">Quick Links</h3>
            <ul className="mt-4 space-y-3">
              <li><a href="#services" className="text-base text-slate-400 hover:text-white">Services</a></li>
              <li><a href="#projects" className="text-base text-slate-400 hover:text-white">Projects</a></li>
              <li><a href="#about" className="text-base text-slate-400 hover:text-white">About Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-cyan-300 tracking-wider uppercase">Connect</h3>
            <div className="mt-4 flex space-x-5">
              <SocialIcon href="#">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
              </SocialIcon>
              <SocialIcon href="#">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
              </SocialIcon>
              <SocialIcon href="#">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995.017-2.277-1.387-2.277-1.405 0-1.622 1.096-1.622 2.206v4.248H8.014V8.588h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.666zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.282 8.905H4.056V8.588h2.564v7.75z" clipRule="evenodd" /></svg>
              </SocialIcon>
            </div>
          </div>

        </div>
        <div className="mt-12 border-t border-slate-700 pt-8">
          <p className="text-base text-slate-500 text-center">&copy; {new Date().getFullYear()} BIMatrix. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


