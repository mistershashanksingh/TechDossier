import React from 'react';
import Link from 'next/link';
import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaXTwitter,
  FaHeart as Heart,
  FaMicrochip as Cpu
} from 'react-icons/fa6';
import { 
  VscAzureDevops as Devops,
  VscVr as Robot,
  VscChip as Technology,
  VscTasklist as Tasks
 } from 'react-icons/vsc';
 import { 
  LiaAtomSolid as Atom,
  LiaLinode as Training,
  LiaInfinitySolid as Infinity,
  LiaDocker as Docker,
 } from 'react-icons/lia';

const Footer: React.FC = () => {
  return (
    <footer className="relative mt-20 glass-card backdrop-blur-xl border-t border-white/20 dark:border-gray-800/20 shadow-glass dark:shadow-glass-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative">
                <Infinity className="w-8 h-8 text-primary-600" />
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur-lg opacity-20"></div>
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 bg-clip-text text-transparent">
                Tech Dossier
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-md leading-relaxed mb-6">
              Passionate about DevOps, MLOps, AI/ML, and Quantum ML. Building the future of automated, intelligent systems with cutting-edge technologies.
            </p>
            
            {/* Tech Icons */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 px-3 py-2 bg-gradient-to-r from-blue-100/50 to-cyan-100/50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg backdrop-blur-sm border border-blue-200/30 dark:border-blue-700/30">
                <Devops size={16} className="text-blue-600 dark:text-blue-400" />
                <span className="text-xs font-medium text-blue-700 dark:text-blue-300">DevOps</span>
              </div>
              <div className="flex items-center space-x-2 px-3 py-2 bg-gradient-to-r from-cyan-100/50 to-sky-100/50 dark:from-cyan-900/20 dark:to-sky-900/20 rounded-lg backdrop-blur-sm border border-cyan-200/30 dark:border-cyan-700/30">
                <Training size={16} className="text-cyan-600 dark:text-cyan-400" />
                <span className="text-xs font-medium text-cyan-700 dark:text-cyan-300">AI/ML</span>
              </div>
              <div className="flex items-center space-x-2 px-3 py-2 bg-gradient-to-r from-green-100/50 to-teal-100/50 dark:from-green-900/20 dark:to-teal-900/20 rounded-lg backdrop-blur-sm border border-green-200/30 dark:border-green-700/30">
                <Cpu size={16} className="text-green-600 dark:text-green-400" />
                <span className="text-xs font-medium text-green-700 dark:text-green-300">Quantum</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['About', 'Skills', 'Projects', 'Contact'].map((link) => (
                <Link
                  key={link}
                  href={`/${link.toLowerCase()}`}
                  className="group block text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 hover:translate-x-2 transform hover:scale-105 relative overflow-hidden"
                >
                  <span className="relative z-10">{link}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-100/50 to-blue-100/50 dark:from-cyan-900/20 dark:to-blue-900/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 rounded"></div>
                </Link>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Connect</h4>
            <div className="flex space-x-3">
              {/* GitHub */}
              <a
                href="#"
                className="group p-3 rounded-xl glass-card text-gray-600 dark:text-gray-400 hover:bg-black/10 dark:hover:bg-white/10 hover:text-black dark:hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(0,0,0,0.3)] dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
              >
                <FaGithub size={18} className="group-hover:rotate-12 transition-transform duration-300" />
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                className="group p-3 rounded-xl glass-card text-gray-600 dark:text-gray-400 hover:bg-blue-600/20 hover:text-blue-600 dark:hover:bg-blue-400/20 dark:hover:text-blue-300 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] dark:hover:shadow-[0_0_20px_rgba(96,165,250,0.6)]"
              >
                <FaLinkedinIn size={18} className="group-hover:rotate-12 transition-transform duration-300" />
              </a>

              {/* Email */}
              <a
                href="#"
                className="group p-3 rounded-xl glass-card text-gray-600 dark:text-gray-400 hover:bg-red-600/20 hover:text-red-600 dark:hover:bg-red-400/20 dark:hover:text-red-300 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(220,38,38,0.4)] dark:hover:shadow-[0_0_20px_rgba(248,113,113,0.6)]"
              >
                <FaEnvelope size={18} className="group-hover:rotate-12 transition-transform duration-300" />
              </a>

              {/* X (formerly Twitter) */}
              <a
                href="#"
                className="group p-3 rounded-xl glass-card text-gray-600 dark:text-gray-400 hover:bg-black/10 dark:hover:bg-white/10 hover:text-black dark:hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(0,0,0,0.3)] dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
              >
                <FaXTwitter size={18} className="group-hover:rotate-12 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200/50 dark:border-gray-700/50">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-400 flex items-center">
              Made with <Heart size={16} className="mx-1 text-red-500 animate-pulse" /> using React & Tailwind CSS
            </p>
            <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
              © 2026 DevOps Pro. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;