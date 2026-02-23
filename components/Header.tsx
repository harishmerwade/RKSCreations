
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface HeaderProps {
  setView: (view: 'home' | 'products' | 'about' | 'infrastructure' | 'clients' | 'contact') => void;
  currentView: 'home' | 'products' | 'about' | 'infrastructure' | 'clients' | 'contact';
}

const Header: React.FC<HeaderProps> = ({ setView, currentView }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navItems = [
    { label: 'Products', action: () => setView('products') },
    { label: 'About Us', action: () => setView('about') },
    { label: 'Infrastructure', action: () => setView('infrastructure') },
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
          : 'py-8 bg-white/6 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        {/* Brand Identity */}
        <div 
          onClick={() => setView('home')}
          className="flex items-center gap-4 group cursor-pointer"
        >
          <div className="relative mobile-brand">
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-[950] text-2xl shadow-xl transition-all duration-500 group-hover:bg-white group-hover:text-black group-hover:rotate-[10deg] group-hover:scale-110 ${
              isScrolled ? 'bg-slate-900 text-white' : 'bg-white text-black'
            } mobile-logo`}>
              R
            </div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-blue-600 rounded-full border-2 border-white" />
          </div>
          <div className="flex flex-col">
            <h1 className={`text-xl font-[950] leading-none tracking-tighter transition-colors mobile-logo-title ${
              (isScrolled || currentView !== 'home') ? 'text-slate-900' : 'text-white'
            }`}>RKS Creations</h1>
            <span className="text-[9px] font-black text-blue-600 uppercase tracking-[0.4em] mobile-logo-sub">Premium Branding</span>
          </div>
        </div>

        {/* Professional Navigation */}
        <nav className="hidden md:flex gap-14">
          {navItems.map((item) => (
            <motion.button
              key={item.label}
              onClick={() => handleNavClick(item)}
              whileHover={{ y: -2 }}
              className={`text-[10px] font-black uppercase tracking-[0.3em] transition-all relative group ${
                isItemActive(item.label) ? 'text-slate-700' : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              <span className="relative z-10">{item.label}</span>
              <motion.span 
                className={`absolute -bottom-2 left-0 h-[2px] bg-slate-700 transition-all duration-300 ${
                  isItemActive(item.label) ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </motion.button>
          ))}
        </nav>

        {/* Mobile condensed nav: hamburger */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((s) => !s)}
            className="p-2 rounded-md bg-white/10 backdrop-blur-sm mobile-hamburger"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 7H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M4 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Mobile menu panel */}
        {mobileOpen && (
          <div className="absolute left-0 right-0 top-full z-50 md:hidden">
            <div className="bg-white/95 backdrop-blur-sm border-t border-slate-100/40 py-4">
              <div className="max-w-[1440px] mx-auto px-6 flex flex-col gap-3">
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => { handleNavClick(item); setMobileOpen(false); }}
                    className="text-slate-900 text-lg font-bold py-3 text-left mobile-menu-item"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
