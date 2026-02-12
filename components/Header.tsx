
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface HeaderProps {
  setView: (view: 'home' | 'products' | 'about' | 'infrastructure' | 'gallery' | 'clients' | 'contact') => void;
  currentView: 'home' | 'products' | 'about' | 'infrastructure' | 'gallery' | 'clients' | 'contact';
}

const Header: React.FC<HeaderProps> = ({ setView, currentView }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navItems = [
    { label: 'Products', action: () => setView('products') },
    { label: 'About Us', action: () => setView('about') },
    { label: 'Infrastructure', action: () => setView('infrastructure') },
    { label: 'Gallery', action: () => setView('gallery') },
    { label: 'Our Clients', action: () => setView('clients') },
    { label: 'Contact', action: () => setView('contact') }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (item: any) => {
    if (item.action) {
      item.action();
    }
  };

  const isItemActive = (label: string) => {
    if (label === 'Products' && currentView === 'products') return true;
    if (label === 'About Us' && currentView === 'about') return true;
    if (label === 'Infrastructure' && currentView === 'infrastructure') return true;
    if (label === 'Gallery' && currentView === 'gallery') return true;
    if (label === 'Our Clients' && currentView === 'clients') return true;
    if (label === 'Contact' && currentView === 'contact') return true;
    return false;
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 px-24 ${
        isScrolled 
          ? 'py-4 bg-white/70 backdrop-blur-2xl border-b border-slate-100/50 shadow-[0_4px_30px_rgba(0,0,0,0.03)]' 
          : 'py-8 bg-transparent'
      }`}
    >
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        {/* Brand Identity */}
        <div 
          onClick={() => setView('home')}
          className="flex items-center gap-4 group cursor-pointer"
        >
          <div className="relative">
            <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center text-white font-[950] text-2xl shadow-xl transition-all duration-500 group-hover:bg-blue-600 group-hover:rotate-[10deg] group-hover:scale-110">
              R
            </div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-blue-600 rounded-full border-2 border-white" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl font-[950] text-slate-900 leading-none tracking-tighter">RKS CREATIONS</h1>
            <span className="text-[9px] font-black text-blue-600 uppercase tracking-[0.4em]">Global Branding Auth.</span>
          </div>
        </div>

        {/* Professional Navigation */}
        <nav className="flex gap-14">
          {navItems.map((item) => (
            <motion.button
              key={item.label}
              onClick={() => handleNavClick(item)}
              whileHover={{ y: -2 }}
              className={`text-[10px] font-black uppercase tracking-[0.3em] transition-all relative group ${
                isItemActive(item.label) ? 'text-blue-600' : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              <span className="relative z-10">{item.label}</span>
              <motion.span 
                className={`absolute -bottom-2 left-0 h-[2px] bg-blue-600 transition-all duration-300 ${
                  isItemActive(item.label) ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </motion.button>
          ))}
        </nav>

        <div className="flex items-center gap-10">
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
