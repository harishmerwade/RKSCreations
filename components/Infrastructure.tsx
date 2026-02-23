
import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Cpu, Truck, Layout } from 'lucide-react';

const Infrastructure: React.FC = () => {
  const steps = [
    { title: 'Concept', icon: <Layout />, desc: 'Creative design & digital sampling.' },
    { title: 'Design', icon: <Settings />, desc: 'Technical specifications & material selection.' },
    { title: 'Manufacturing', icon: <Cpu />, desc: 'High-speed automated production lines.' },
    { title: 'Delivery', icon: <Truck />, desc: 'Rigorous QC & worldwide export shipping.' },
  ];

  return (
    <section id="infrastructure" className="py-24 px-16 bg-slate-900 text-white overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/5 -skew-x-12 transform origin-top-right"></div>
      
      <div className="relative z-10 flex gap-20 items-center">
        <div className="w-1/2">
          <span className="text-blue-400 font-black tracking-widest uppercase text-sm block mb-4">Infrastructure</span>
          <h2 className="text-5xl font-black mb-8 leading-tight">Advanced Factory <br /> Precision Engineering</h2>
          <p className="text-slate-400 text-lg mb-12 leading-relaxed max-w-lg">
            Our Bengaluru facility spans over 10,000 sq.ft, housing specialized machinery for offset printing, high-definition weaving, and automated die-cutting.
          </p>

          <div className="space-y-10">
            {steps.map((step, i) => (
              <motion.div 
                key={step.title}
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-6 group"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  {step.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">{step.title}</h4>
                  <p className="text-slate-500 text-sm">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="w-1/2 relative">
          <motion.div 
            animate={{ rotateZ: [0, 5, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="w-full aspect-square bg-slate-800 rounded-[60px] relative overflow-hidden shadow-2xl border border-white/10 flex items-center justify-center"
          >
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30"></div>
             
             {/* Abstract Machine UI */}
             <div className="relative z-10 w-4/5 h-4/5 border-4 border-blue-500/30 rounded-3xl p-8 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                   <div className="space-y-2">
                      <div className="w-32 h-2 bg-blue-600/40 rounded"></div>
                      <div className="w-20 h-2 bg-blue-600/20 rounded"></div>
                   </div>
                   <div className="w-12 h-12 rounded-full border-2 border-blue-500/30 flex items-center justify-center animate-spin-slow">
                      <Settings size={20} className="text-blue-400" />
                   </div>
                </div>
                
                <div className="h-32 flex items-end gap-2">
                   {[40, 70, 45, 90, 60, 80, 50, 85].map((h, i) => (
                     <motion.div 
                       key={i}
                       animate={{ height: [`${h}%`, `${h-20}%`, `${h}%`] }}
                       transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
                       className="flex-1 bg-gradient-to-t from-blue-600 to-blue-400 rounded-t"
                     />
                   ))}
                </div>

                <div className="grid grid-cols-3 gap-4">
                   <div className="h-16 bg-slate-700 rounded-xl border border-white/5 flex flex-col items-center justify-center">
                      <span className="text-[10px] text-slate-500 font-bold uppercase">Speed</span>
                      <span className="text-xl font-black text-blue-400">1200/m</span>
                   </div>
                   <div className="h-16 bg-slate-700 rounded-xl border border-white/5 flex flex-col items-center justify-center">
                      <span className="text-[10px] text-slate-500 font-bold uppercase">Load</span>
                      <span className="text-xl font-black text-blue-400">98.4%</span>
                   </div>
                   <div className="h-16 bg-blue-600 rounded-xl flex flex-col items-center justify-center">
                      <span className="text-[10px] text-white/50 font-bold uppercase">Status</span>
                      <span className="text-xl font-black">ACTIVE</span>
                   </div>
                </div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Infrastructure;
