
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Scissors, Smile, Clock, MessageSquare } from 'lucide-react';
import { ViewType } from '../App';

interface WhyChooseProps {
  setView: (view: ViewType) => void;
}

const WhyChoose: React.FC<WhyChooseProps> = ({ setView }) => {
  const reasons = [
    { title: 'Best Quality', icon: <ShieldCheck size={32} />, desc: 'We use high-grade materials that meet international export standards.' },
    { title: 'Customization', icon: <Scissors size={32} />, desc: 'End-to-end bespoke designs tailored to your unique brand identity.' },
    { title: 'Expertise', icon: <Zap size={32} />, desc: '12+ years of specialist knowledge in labels and garment packaging.' },
    { title: 'Availability', icon: <Smile size={32} />, desc: 'Wide range of materials and finishes always in stock for urgent needs.' },
    { title: 'Fast Delivery', icon: <Clock size={32} />, desc: 'Optimized logistics ensure your branding reaches you on time, every time.' },
  ];

  return (
    <section className="py-24 px-16 bg-white overflow-hidden selection:bg-blue-100">
      
      {/* Exclusive Product Range Showcase & Video Section */}
      <div className="max-w-[1440px] mx-auto mb-40">
        <div className="flex items-center justify-between mb-16 px-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4 mb-6"
            >
              <span className="w-12 h-[2px] bg-blue-600"></span>
              <span className="text-blue-600 font-[900] tracking-[0.5em] uppercase text-[10px]">Brand Experience</span>
            </motion.div>
            <h2 className="text-7xl font-[950] text-slate-900 leading-[0.9] tracking-tighter mb-8">
              Experience our exclusive <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-900">
                range of Products line.
              </span>
            </h2>
          </div>
          
          <motion.button
            onClick={() => setView('contact')}
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.98 }}
            className="bg-slate-900 text-white px-12 py-6 rounded-[28px] font-black uppercase tracking-[0.3em] text-[11px] shadow-2xl flex items-center gap-5 group hover:bg-blue-600 transition-all"
          >
            Contact Us <MessageSquare size={18} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        {/* Cinematic Video Container - Professional No-Gap Fit */}
        <div className="relative">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="relative w-full aspect-video rounded-[60px] overflow-hidden bg-slate-50 shadow-[0_60px_100px_-20px_rgba(0,0,0,0.1)]"
          >
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover"
            >
              <source src="https://cloud-1de12d.becdn.net/customfile/51d4fb2aae1e3d9a3e578199dc33f25d8c1373ebb9b62945f17fdf33f6077740/Woven-label-and-tag---R-K-S-LABELS-1080p-h264-.mp4" type="video/mp4" />
            </video>
          </motion.div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <span className="w-10 h-[1px] bg-blue-200"></span>
            <span className="text-blue-600 font-black tracking-[0.5em] uppercase text-[10px]">Excellence in Every Detail</span>
            <span className="w-10 h-[1px] bg-blue-200"></span>
          </motion.div>
          <h2 className="text-6xl font-[950] text-slate-900 tracking-tighter">Why RKS?</h2>
        </div>

        <div className="grid grid-cols-5 gap-8 px-8">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -15, scale: 1.02 }}
              className="p-10 bg-slate-50 rounded-[45px] border border-slate-100 flex flex-col items-center text-center group transition-all duration-500 hover:bg-white hover:shadow-2xl"
            >
              <div className="w-20 h-20 bg-white rounded-[28px] shadow-lg flex items-center justify-center text-blue-600 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                {reason.icon}
              </div>
              <h4 className="text-xl font-black text-slate-900 mb-4 tracking-tight">{reason.title}</h4>
              <p className="text-slate-500 text-sm font-semibold leading-relaxed">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
