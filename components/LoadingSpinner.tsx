import React from 'react';
import { FaServer as Server, FaBrain as Brain, FaMicrochip as Cpu, FaCode as Code } from 'react-icons/fa6';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-blue-900">
      {/* Loading Content */}
      <div className="text-center">
        {/* Tech Icons - Simplified */}
        <div className="flex justify-center items-center space-x-6 mb-8">
          {[Server, Brain, Cpu, Code].map((Icon, index) => (
            <div
              key={index}
              className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl p-2 animate-bounce"
              style={{ 
                animationDelay: `${index * 0.2}s`,
                animationDuration: '1s'
              }}
            >
              <Icon className="w-full h-full text-white" />
            </div>
          ))}
        </div>
        
        {/* Central Logo */}
        <div className="mb-8">
          <div className="w-20 h-20 mx-auto bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl p-4 animate-pulse">
            <Server className="w-full h-full text-white" />
          </div>
        </div>

        {/* Loading Text */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
            DevOps Pro
          </h1>
          
          <h2 className="text-lg text-gray-600 dark:text-gray-300">
            Loading Portfolio...
          </h2>
          
          {/* Tech Stack Labels - Simplified */}
          <div className="flex justify-center gap-3">
            {['DevOps', 'MLOps', 'AI/ML', 'Quantum'].map((tech, index) => (
              <span
                key={tech}
                className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 0.2 + 0.5}s`, animationFillMode: 'forwards' }}
              >
                {tech}
              </span>
            ))}
          </div>
          
          {/* Progress Dots */}
          <div className="flex justify-center space-x-2 mt-6">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-2 h-2 bg-primary-500 rounded-full animate-bounce"
                style={{ animationDelay: `${i * 0.2}s` }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;