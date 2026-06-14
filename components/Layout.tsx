import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import CustomScrollbar from './CustomScrollbar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background Gradients */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-cyan-50 to-blue-100 dark:from-[#050a14] dark:via-[#07171f] dark:to-[#050a14] animate-gradient-xy"></div>
        <div className="absolute inset-0 bg-mesh-gradient opacity-30 dark:opacity-25 animate-gradient-x"></div>

        {/* Floating Orbs (multiply on light, screen-glow on dark) */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400/20 to-blue-600/20 dark:from-cyan-500/25 dark:to-blue-500/25 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-to-r from-teal-400/20 to-cyan-600/20 dark:from-teal-500/25 dark:to-cyan-500/25 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-sky-500/20 dark:from-blue-500/25 dark:to-sky-500/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>

        {/* Tech Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px] dark:bg-[linear-gradient(rgba(148,163,184,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.05)_1px,transparent_1px)]"></div>
      </div>
      
      <div className="relative z-10">
        <Navbar />
        
        <main className="relative">
          {children}
        </main>
        
        <Footer />
      </div>
      
      <CustomScrollbar />
    </div>
  );
};

export default Layout;