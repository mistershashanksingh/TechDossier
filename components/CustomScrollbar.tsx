'use client';

import React, { useState, useEffect } from 'react';
import { FaChevronUp as ChevronUp } from 'react-icons/fa6';

const CustomScrollbar: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      
      setScrollProgress(scrollPercent);
      setIsVisible(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* Scroll Progress Indicator */}
      <div className="fixed top-16 left-0 right-0 z-40 h-1">
        <div className="relative w-full h-full">
          {/* Background track */}
          <div className="absolute inset-0 bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm border-b border-white/10 dark:border-gray-700/10"></div>
          
          {/* Progress bar */}
          <div 
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-600 via-sky-500 to-sky-400 transition-all duration-300 ease-out"
            style={{ width: `${scrollProgress}%` }}
          >
            {/* Glowing effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/50 via-sky-400/50 to-sky-500/50 blur-sm"></div>
          </div>
          
          {/* Animated dots */}
          <div className="absolute top-1/2 transform -translate-y-1/2 flex space-x-1 ml-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={`w-1 h-1 rounded-full transition-all duration-300 ${
                  scrollProgress > (i + 1) * 25 
                    ? 'bg-white shadow-neon scale-125' 
                    : 'bg-white/40 scale-100'
                }`}
                style={{
                  animationDelay: `${i * 0.1}s`,
                  animation: scrollProgress > (i + 1) * 25 ? 'pulse 2s infinite' : 'none'
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-full border border-white/20 dark:border-gray-700/20 text-primary-600 dark:text-primary-400 hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-sky-400 hover:scale-110 transition-all duration-300 shadow-glass dark:shadow-glass-dark hover:shadow-neon group ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        title="Scroll to top"
      >
        <ChevronUp size={24} className="group-hover:animate-bounce" />
        
        {/* Ripple effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600/20 to-sky-600/20 scale-0 group-hover:scale-150 transition-transform duration-500 opacity-0 group-hover:opacity-100"></div>
      </button>

      {/* Mobile Bottom Progress */}
      <div className="fixed bottom-0 left-0 right-0 z-40 h-1 lg:hidden">
        <div className="relative w-full h-full">
          {/* Background track */}
          <div className="absolute inset-0 bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm border-t border-white/10 dark:border-gray-700/10"></div>
          
          {/* Progress bar */}
          <div 
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-600 via-sky-500 to-sky-400 transition-all duration-300 ease-out"
            style={{ width: `${scrollProgress}%` }}
          >
            {/* Glowing effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/50 via-sky-400/50 to-sky-500/50 blur-sm"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomScrollbar;