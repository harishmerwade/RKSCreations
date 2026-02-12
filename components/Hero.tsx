
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles, Globe, ShieldCheck } from 'lucide-react';
import { ViewType } from '../App';

const slides = [
  {
    url: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=1600',
    title: 'The Soul of Fashion',
    category: 'High-Definition Labels',
    description: 'Precision-engineered woven labels that bridge the gap between material excellence and brand identity.',
    accent: 'blue',
    id: '01'
  },
  {
    url: 'https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?auto=format&fit=crop&q=80&w=1600',
    title: 'Tactile Elegance',
    category: 'Premium Hang Tags',
    description: 'Bespoke cards with deep embossing and localized spot UV textures for an unforgettable brand touch.',
    accent: 'slate',
    id: '02'
  },
  {
    url: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=1600',
    title: 'Bespoke Identity',
    category: 'Material Innovation',
    description: 'Luxury patches in leather and PU designed for high-performance durability and world-class aesthetics.',
    accent: 'indigo',
    id: '03'
  }
];

interface HeroProps {
  setView: (view: ViewType) => void;
}

const Hero: React.FC<HeroProps> = ({ setView }) => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (!isHovered) {
      const timer = setInterval(nextSlide, 7000);
      return () => clearInterval(timer);
    }
  }, [nextSlide, isHovered]);

  const slideVariants: Variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      rotateY: direction > 0 ? 30 : -30,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      zIndex: 1,
      x: 0,
      rotateY: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring' as const, stiffness: 200, damping: 30 },
        opacity: { duration: 0.5 },
      }
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      rotateY: direction < 0 ? 30 : -30,
      opacity: 0,
      scale: 1.1,
      transition: { duration: 0.5 }
    }),
  };

  return (
    <section className="relative h-[1000px] w-full bg-white overflow-hidden flex items-center selection:bg-blue-100 selection:text-blue-900 pt-16">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[160px] pointer-events-none ${
            index === 0 ? 'bg-blue-600' : index === 1 ? 'bg-slate-900' : 'bg-indigo-600'
          }`}
        />
      </AnimatePresence>

      <div className="relative z-10 w-full px-24 flex items-center justify-between gap-16">
        <div className="w-[45%]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 60 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-5 mb-8">
                <span className="text-[11px] font-[900] text-blue-600 uppercase tracking-[0.6em]">
                  {slides[index].category}
                </span>
                <div className="flex-1 h-[1px] bg-slate-100" />
                <span className="text-[12px] font-black text-slate-300 tracking-tighter">PHASE {slides[index].id}</span>
              </div>

              <h1 className="text-[115px] font-[950] text-slate-900 leading-[0.82] tracking-tighter mb-10">
                {slides[index].title.split(' ')[0]} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  {slides[index].title.split(' ').slice(1).join(' ')}
                </span>
              </h1>

              <p className="text-2xl text-slate-400 font-medium max-w-lg leading-relaxed mb-16 pl-12 border-l-2 border-slate-100 italic">
                "{slides[index].description}"
              </p>

              <div className="flex items-center gap-10">
                <motion.button
                  onClick={() => setView('contact')}
                  whileHover={{ scale: 1.05, y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  className="group bg-slate-900 text-white px-16 py-7 rounded-[24px] font-[900] text-xl shadow-[0_40px_80px_-20px_rgba(0,0,0,0.3)] flex items-center gap-6 transition-all"
                >
                  Start Collaboration
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center group-hover:bg-white group-hover:text-blue-600 transition-all duration-300">
                    <ArrowRight size={22} />
                  </div>
                </motion.button>
                
                <div className="flex items-center gap-5">
                   <div className="w-px h-12 bg-slate-100" />
                   <div className="flex flex-col">
                      <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest mb-1">Export Standard</span>
                      <span className="text-sm font-black text-slate-900">CERTIFIED QUALITY</span>
                   </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div 
          className="w-[55%] h-[800px] relative flex items-center justify-center perspective-1000"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={index}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute w-[640px] h-[780px] transform-style-3d cursor-pointer"
            >
              <div className="relative w-full h-full group">
                <div className="absolute -inset-12 bg-slate-50 rounded-[80px] -rotate-3 transition-transform duration-700 group-hover:rotate-0 group-hover:-inset-10" />
                <div className="w-full h-full rounded-[70px] overflow-hidden border-[20px] border-white shadow-[0_90px_180px_-40px_rgba(0,0,0,0.18)] relative z-10 transition-all duration-1000 group-hover:scale-[1.03]">
                  <motion.img 
                    src={slides[index].url} 
                    alt={slides[index].title}
                    className="w-full h-full object-cover transition-transform duration-[6000ms] group-hover:scale-110"
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                  />
                  <div className="absolute top-12 left-12 z-20">
                    <div className="backdrop-blur-xl bg-white/10 border border-white/20 p-6 rounded-[35px] shadow-2xl">
                      <div className="flex items-center gap-3 mb-1">
                        <Sparkles size={14} className="text-blue-400" />
                        <span className="text-[10px] font-black text-white uppercase tracking-[0.4em]">Premium QC</span>
                      </div>
                      <h4 className="text-white font-[900] text-lg uppercase tracking-tight">RKS AUTHENTIC</h4>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute bottom-4 right-16 flex gap-6 z-50">
            <button onClick={prevSlide} className="w-20 h-20 rounded-[30px] bg-white shadow-2xl text-slate-900 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all duration-500 group border border-slate-50">
              <ChevronLeft size={30} className="group-hover:-translate-x-1 transition-transform" />
            </button>
            <button onClick={nextSlide} className="w-20 h-20 rounded-[30px] bg-white shadow-2xl text-slate-900 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all duration-500 group border border-slate-50">
              <ChevronRight size={30} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
