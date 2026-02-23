
import React from 'react';
import { motion } from 'framer-motion';

const logoModules = import.meta.glob('../Logos/*.webp', { eager: true, import: 'default' }) as Record<string, string>;
const CLIENT_LOGOS = Object.entries(logoModules)
  .sort((a, b) => {
    const aNum = Number((a[0].match(/(\d+)\.webp$/) || [])[1] || 0);
    const bNum = Number((b[0].match(/(\d+)\.webp$/) || [])[1] || 0);
    return aNum - bNum;
  })
  .map(([_, url], index) => ({
    name: `Client Logo ${index + 1}`,
    url
  }));

const Clients: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 border-y border-slate-100 overflow-hidden">
      <div className="px-16 mb-16 text-center">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-slate-400 font-black uppercase tracking-[0.5em] text-[10px]"
        >
          Trusted by 100+ Global Fashion Houses
        </motion.p>
      </div>

      <div className="flex relative items-center">
        <motion.div
          animate={{ x: [0, -2000] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex gap-24 items-center whitespace-nowrap px-10"
        >
          {[...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS].map((client, i) => (
            <div key={i} className="flex items-center gap-14 group transition-all duration-500">
              <div className="w-64 h-32 flex items-center justify-center">
                <img 
                  src={client.url} 
                  alt={client.name} 
                  className="max-w-full max-h-full object-contain opacity-100 transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="w-2 h-2 rounded-full bg-blue-200"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;
