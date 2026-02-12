
import React from 'react';
import { motion } from 'framer-motion';

const CLIENT_LOGOS = [
  { name: 'Zara', url: 'https://logo.clearbit.com/zara.com' },
  { name: 'H&M', url: 'https://logo.clearbit.com/hm.com' },
  { name: 'Adidas', url: 'https://logo.clearbit.com/adidas.com' },
  { name: 'Nike', url: 'https://logo.clearbit.com/nike.com' },
  { name: 'Prada', url: 'https://logo.clearbit.com/prada.com' },
  { name: 'Gucci', url: 'https://logo.clearbit.com/gucci.com' },
  { name: 'Levis', url: 'https://logo.clearbit.com/levi.com' },
  { name: 'Puma', url: 'https://logo.clearbit.com/puma.com' },
  { name: 'Louis Vuitton', url: 'https://logo.clearbit.com/louisvuitton.com' },
  { name: 'Tommy Hilfiger', url: 'https://logo.clearbit.com/tommy.com' },
  { name: 'Calvin Klein', url: 'https://logo.clearbit.com/calvinklein.com' },
  { name: 'Lacoste', url: 'https://logo.clearbit.com/lacoste.com' }
];

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
            <div key={i} className="flex items-center gap-12 group grayscale hover:grayscale-0 transition-all duration-500">
              <div className="w-40 h-20 flex items-center justify-center">
                <img 
                  src={client.url} 
                  alt={client.name} 
                  className="max-w-full max-h-full object-contain opacity-30 group-hover:opacity-100 transition-opacity duration-500"
                  onError={(e) => {
                    // Fallback for broken logos
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
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
