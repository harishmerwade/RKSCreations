
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { ViewType } from '../App';

interface TransformationProps {
  setView: (view: ViewType) => void;
}

/**
 * High-End Vector Animation Component
 * Implements the 6-step RKS Masterpiece Journey
 */
const MasterpieceJourney: React.FC = () => {
  const [step, setStep] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev === 6 ? 1 : prev + 1));
    }, 4500); // 4.5 seconds per step for cinematic feel
    return () => clearInterval(timer);
  }, []);

  const stepText = [
    { title: "The Plain Concept", desc: "Starting with raw, high-quality material textures." },
    { title: "Precision Woven Label", desc: "Applying the RKS identity with industrial-grade stitching." },
    { title: "Premium Hang Tag", desc: "Adding tactile brand signatures with physics-accurate attachment." },
    { title: "Luxury Rigid Box", desc: "Securely encased in engineered protective luxury packaging." },
    { title: "Bespoke Carry Bag", desc: "The final retail experience prepared for the boutique floor." },
    { title: "Global Dispatch", desc: "Verified quality ready for worldwide corporate logistics." }
  ];

  return (
    <div className="relative w-full h-[680px] md:h-[600px] flex items-center justify-center overflow-hidden bg-slate-50/50 rounded-[60px] border border-slate-100 shadow-inner">
      {/* SVG Definitions for Textures and Filters */}
      <svg className="absolute w-0 h-0">
        <defs>
          <filter id="fabricTexture">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" result="noise" />
            <feDiffuseLighting in="noise" lightingColor="#fff" surfaceScale="1">
              <feDistantLight azimuth="45" elevation="60" />
            </feDiffuseLighting>
          </filter>
          <filter id="paperTexture">
            <feTurbulence type="turbulence" baseFrequency="0.05" numOctaves="2" result="noise" />
            <feColorMatrix in="noise" type="saturate" values="0" />
            <feBlend in="SourceGraphic" in2="noise" mode="multiply" />
          </filter>
        </defs>
      </svg>

      {/* Main Animation Stage */}
      <div className="relative w-full h-full flex items-center justify-center scale-[1.38] md:scale-110">
        <AnimatePresence mode="wait">
          {step <= 3 && (
            <motion.div
              key="garment-stage"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.8 }}
              className="relative w-[400px] h-[500px]"
            >
              {/* STEP 1: SHIRT BASE */}
              <motion.svg viewBox="0 0 200 240" className="w-full h-full drop-shadow-2xl">
                <motion.path
                  d="M40 40 L60 20 L140 20 L160 40 L190 60 L170 100 L150 90 L150 220 L50 220 L50 90 L30 100 L10 60 Z"
                  fill="#f1f5f9"
                  stroke="#e2e8f0"
                  strokeWidth="0.5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                />
                <rect x="0" y="0" width="100%" height="100%" fill="url(#fabricTexture)" opacity="0.05" pointerEvents="none" />
                
                {/* STEP 2: WOVEN LABEL */}
                {step >= 2 && (
                  <motion.g
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="origin-center"
                  >
                    <rect x="85" y="25" width="30" height="15" rx="1" fill="#1e293b" />
                    <text x="100" y="35" textAnchor="middle" fill="white" fontSize="4" fontWeight="900" style={{ letterSpacing: '0.1em' }}>RKS</text>
                    {/* Stitching Line */}
                    <motion.rect
                      x="86" y="26" width="28" height="13" rx="0.5"
                      fill="none" stroke="white" strokeWidth="0.2" strokeDasharray="1,1"
                      initial={{ strokeDashoffset: 10 }}
                      animate={{ strokeDashoffset: 0 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />
                  </motion.g>
                )}

                {/* STEP 3: HANG TAG */}
                {step >= 3 && (
                  <motion.g
                    initial={{ y: -50, opacity: 0, rotate: -10 }}
                    animate={{ y: 0, opacity: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 100, damping: 10 }}
                  >
                    <line x1="150" y1="40" x2="160" y2="70" stroke="#94a3b8" strokeWidth="0.8" />
                    <rect x="150" y="70" width="25" height="40" rx="2" fill="white" stroke="#e2e8f0" strokeWidth="0.5" />
                    <rect x="152" y="72" width="21" height="36" fill="none" stroke="#3b82f6" strokeWidth="0.2" />
                    <text x="162.5" y="90" textAnchor="middle" fill="#1e293b" fontSize="3" fontWeight="900">RKS</text>
                    <text x="162.5" y="95" textAnchor="middle" fill="#3b82f6" fontSize="2" fontWeight="700">PREMIUM</text>
                  </motion.g>
                )}
              </motion.svg>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div
              key="box-stage"
              initial={{ opacity: 0, scale: 0.8, rotateX: 45 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0 }}
              exit={{ opacity: 0, scale: 1.2 }}
              className="relative w-[500px] h-[400px] flex items-center justify-center"
            >
              <svg viewBox="0 0 200 150" className="w-full h-full drop-shadow-3xl">
                {/* 3D Box Representation */}
                <path d="M40 100 L160 100 L180 60 L60 60 Z" fill="#0f172a" />
                <path d="M40 100 L40 130 L160 130 L160 100" fill="#1e293b" />
                <path d="M160 100 L160 130 L180 90 L180 60" fill="#334155" />
                {/* Logo on Box */}
                <text x="100" y="120" textAnchor="middle" fill="white" fontSize="10" fontWeight="900" style={{ letterSpacing: '0.2em' }}>RKS CREATIONS</text>
                {/* Lid closing animation */}
                <motion.path
                  initial={{ d: "M40 60 L160 60 L180 20 L60 20 Z" }}
                  animate={{ d: "M40 100 L160 100 L180 60 L60 60 Z" }}
                  transition={{ delay: 1, duration: 1.5, ease: "anticipate" }}
                  fill="#1e293b"
                  stroke="#475569"
                  strokeWidth="0.5"
                />
              </svg>
            </motion.div>
          )}

          {step === 5 && (
            <motion.div
              key="bag-stage"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ x: 200, opacity: 0 }}
              className="relative w-[400px] h-[500px]"
            >
              <svg viewBox="0 0 200 240" className="w-full h-full drop-shadow-2xl">
                {/* Bag Body */}
                <path d="M40 60 L160 60 L170 220 L30 220 Z" fill="#ffffff" stroke="#f1f5f9" strokeWidth="1" />
                {/* Bag Handles */}
                <path d="M70 60 Q100 20 130 60" fill="none" stroke="#1e293b" strokeWidth="3" />
                {/* Bag Brand */}
                <rect x="60" y="110" width="80" height="40" rx="4" fill="#1e293b" />
                <text x="100" y="130" textAnchor="middle" fill="white" fontSize="6" fontWeight="900" style={{ letterSpacing: '0.1em' }}>RKS CREATIONS</text>
                <text x="100" y="142" textAnchor="middle" fill="#3b82f6" fontSize="3" fontWeight="700">GLOBAL BRANDING</text>
                {/* Gloss Effect */}
                <path d="M45 65 L80 65 L35 215 L35 215 Z" fill="white" opacity="0.3" />
              </svg>
            </motion.div>
          )}

          {step === 6 && (
            <motion.div
              key="truck-stage"
              initial={{ x: -600 }}
              animate={{ x: 0 }}
              exit={{ x: 800 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-[600px] h-[300px]"
            >
              <svg viewBox="0 0 400 200" className="w-full h-full">
                {/* Truck Body */}
                <rect x="20" y="40" width="280" height="120" rx="10" fill="#0f172a" />
                <rect x="300" y="80" width="80" height="80" rx="10" fill="#1e293b" />
                {/* Windows */}
                <rect x="340" y="90" width="30" height="30" rx="4" fill="#3b82f6" opacity="0.3" />
                {/* Wheels */}
                <circle cx="80" cy="165" r="20" fill="#020617" stroke="#334155" strokeWidth="4" />
                <circle cx="240" cy="165" r="20" fill="#020617" stroke="#334155" strokeWidth="4" />
                <circle cx="340" cy="165" r="20" fill="#020617" stroke="#334155" strokeWidth="4" />
                {/* Truck Branding */}
                <text x="160" y="105" textAnchor="middle" fill="white" fontSize="16" fontWeight="900" style={{ letterSpacing: '0.2em' }}>RKS CREATIONS</text>
                <text x="160" y="125" textAnchor="middle" fill="#3b82f6" fontSize="8" fontWeight="700">LOGISTICS FLEET</text>
                {/* Motion Lines */}
                <motion.line x1="0" y1="185" x2="400" y2="185" stroke="#e2e8f0" strokeWidth="2" strokeDasharray="10,10" animate={{ strokeDashoffset: -100 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} />
              </svg>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Step Indicator Sidebar (Desktop) */}
      <div className="absolute right-12 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-4">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="flex items-center gap-4 justify-end">
            {step === i && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="text-right">
                <p className="text-[30px] font-black text-blue-600 uppercase tracking-widest">{stepText[i-1].title}</p>
              </motion.div>
            )}
            <div className={`w-2 h-2 rounded-full transition-all duration-500 ${step === i ? 'bg-blue-600 h-8' : 'bg-slate-200'}`} />
          </div>
        ))}
      </div>

      {/* Step Indicator (Mobile: below animation) */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-4 md:hidden flex flex-col items-center gap-3">
        <div className="flex items-center gap-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className={`rounded-full transition-all duration-500 ${
                step === i ? 'w-8 h-2 bg-blue-600' : 'w-2 h-2 bg-slate-300'
              }`}
            />
          ))}
        </div>
        <p className="text-base font-black text-blue-600 uppercase tracking-widest text-center">
          {stepText[step - 1].title}
        </p>
      </div>
    </div>
  );
};

const Transformation: React.FC<TransformationProps> = ({ setView }) => {
  const whatsappNumber = '919036333005';
  const whatsappText = encodeURIComponent('Hello RKS Creations, I would like to start my branding journey.');
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappText}`;

  return (
    <section className="py-32 bg-white px-24 overflow-hidden selection:bg-blue-100">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex justify-between items-end mb-20">
          <div className="max-w-4xl">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} className="flex items-center gap-5 mb-6">
               <span className="w-16 h-[2px] bg-blue-600"></span>
               <span className="text-blue-600 font-[900] tracking-[0.6em] uppercase text-[11px] mobile-lg-text">Advanced Manufacturing Journey</span>
            </motion.div>
            <h2 className="text-[105px] font-[950] text-slate-900 leading-[0.85] tracking-tighter">
              Transforming Concepts <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-900">
                into RKS Masterpieces.
              </span>
            </h2>
          </div>
        </div>

        {/* The Animated Brand Journey Component */}
        <MasterpieceJourney />

        <div className="mt-20 flex justify-between items-center bg-slate-900 p-12 rounded-[50px] text-white">
           <div className="flex gap-16">
              <div className="flex flex-col">
                 <span className="text-blue-400 font-black uppercase tracking-widest text-[10px] mb-2">Current Stage</span>
                 <span className="text-2xl font-black">AUTOMATED PRECISION</span>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div className="flex flex-col">
                 <span className="text-blue-400 font-black uppercase tracking-widest text-[10px] mb-2">Quality Control</span>
                 <span className="text-2xl font-black">ISO CERTIFIED</span>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div className="flex flex-col">
                 <span className="text-blue-400 font-black uppercase tracking-widest text-[10px] mb-2">Final Output</span>
                 <span className="text-2xl font-black">EXPORT READY</span>
              </div>
           </div>
           
           <motion.a 
             href={whatsappLink}
             target="_blank"
             rel="noopener noreferrer"
             whileHover={{ scale: 1.05 }}
             className="bg-gradient-to-r from-[#1faa59] via-[#25D366] to-[#128C7E] px-8 py-4 md:px-12 md:py-6 rounded-3xl font-[950] uppercase tracking-widest text-[10px] md:text-[11px] flex items-center gap-3 md:gap-4 group text-white shadow-2xl shadow-emerald-300/30 hover:brightness-95 transition-all"
           >
             Start Your Journey <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
           </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Transformation;
