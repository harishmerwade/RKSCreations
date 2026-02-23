
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence, useSpring, useMotionValue, useTransform } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { ViewType } from '../App';

interface Product {
  id: string;
  title: string;
  description: string;
  cta: string;
  color: string;
  bgGradient: string;
}

const PRODUCTS: Product[] = [
  {
    id: 'hangtag',
    title: 'Luxury Hang Tag',
    description: 'Elevate your brand identity with our high-density matte hang tags, featuring hand-finished strings and metallic foil accents.',
    cta: 'Explore Details',
    color: '#D4AF37', // Gold
    bgGradient: 'radial-gradient(circle at 50% 50%, #1a1a1a 0%, #000000 100%)'
  },
  {
    id: 'label',
    title: 'Premium Fabric Label',
    description: 'Experience the finest weave density. Our high-definition woven labels bring tactile elegance and durability to every garment.',
    cta: 'View Texture',
    color: '#E2E8F0', // Silver/White
    bgGradient: 'radial-gradient(circle at 50% 50%, #1e293b 0%, #0f172a 100%)'
  },
  {
    id: 'box',
    title: 'Rigid Packaging Box',
    description: 'Unbox excellence with our premium rigid boxes. Featuring magnetic closures, custom inserts, and sophisticated paper grain textures.',
    cta: 'See Interior',
    color: '#3B82F6', // Blue
    bgGradient: 'radial-gradient(circle at 50% 50%, #0f172a 0%, #020617 100%)'
  }
];

interface HeroProps {
  setView: (view: ViewType) => void;
}

const Hero: React.FC<HeroProps> = ({ setView }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoSliding, setIsAutoSliding] = useState(true);
  const autoSlideRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoSlide = useCallback(() => {
    if (autoSlideRef.current) clearInterval(autoSlideRef.current);
    autoSlideRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % PRODUCTS.length);
    }, 10000);
  }, []);

  useEffect(() => {
    if (isAutoSliding) {
      startAutoSlide();
    }
    return () => {
      if (autoSlideRef.current) clearInterval(autoSlideRef.current);
    };
  }, [isAutoSliding, startAutoSlide]);

  const handleManualSelect = (index: number) => {
    setActiveIndex(index);
    setIsAutoSliding(false);
    // Resume auto-slide after 20 seconds of inactivity
    setTimeout(() => setIsAutoSliding(true), 20000);
  };

  const activeProduct = PRODUCTS[activeIndex];

  // Mouse Parallax Effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set((clientX / innerWidth) - 0.5);
    mouseY.set((clientY / innerHeight) - 0.5);
  };

  const parallaxX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-20, 20]), { stiffness: 100, damping: 30 });
  const parallaxY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-20, 20]), { stiffness: 100, damping: 30 });

  return (
    <section 
      className="relative hero-section min-h-[134vh] w-full bg-black overflow-hidden flex flex-col selection:bg-white/20 selection:text-white"
      onMouseMove={handleMouseMove}
    >
      {/* Dynamic Background */}
      <motion.div 
        animate={{ background: activeProduct.bgGradient }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute inset-0 z-0"
      />

      {/* Studio Lighting Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.05)_0%,transparent_70%)]" />
        <motion.div 
          style={{ x: parallaxX, y: parallaxY }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.02] blur-[120px] rounded-full" 
        />
      </div>

      <div className="relative z-10 w-full flex-grow flex items-center pt-24">
        {/* LEFT SIDE - Product Stage (60%) */}
        <div className="w-[60%] h-full relative flex items-center justify-center">
          <AnimatePresence mode="wait" custom={activeIndex}>
            <motion.div
              key={activeProduct.id}
              initial={
                activeProduct.id === 'hangtag' ? { x: '-100%', opacity: 0 } :
                activeProduct.id === 'label' ? { x: '100%', opacity: 0 } :
                activeProduct.id === 'box' ? { y: '100%', opacity: 0 } :
                { x: '-100%', y: '-100%', opacity: 0 }
              }
              animate={{ x: 0, y: 0, opacity: 1 }}
              exit={
                activeProduct.id === 'hangtag' ? { x: '100%', opacity: 0 } :
                activeProduct.id === 'label' ? { x: '-100%', opacity: 0 } :
                activeProduct.id === 'box' ? { y: '-100%', opacity: 0 } :
                { x: '100%', y: '100%', opacity: 0 }
              }
              transition={{ 
                duration: 1.2, 
                ease: [0.22, 1, 0.36, 1]
              }}
              className="relative w-full h-full flex items-center justify-center"
            >
              {/* Product Visualizations */}
              <div className="relative w-[500px] h-[500px] flex items-center justify-center">
                {activeProduct.id === 'hangtag' && <HangTagVisual />}
                {activeProduct.id === 'label' && <FabricLabelVisual />}
                {activeProduct.id === 'box' && <PackagingBoxVisual />}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Product Selector Dots */}
          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-4">
            {PRODUCTS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => handleManualSelect(idx)}
                className="relative w-12 h-1 group"
              >
                <div className={`absolute inset-0 bg-white/20 transition-colors ${activeIndex === idx ? 'bg-white/40' : 'group-hover:bg-white/30'}`} />
                {activeIndex === idx && (
                  <motion.div 
                    layoutId="progress"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 10, ease: "linear" }}
                    className="absolute inset-0 bg-white origin-left"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE - Typography Section (40%) */}
        <div className="w-[40%] h-full flex flex-col justify-center px-16 py-24 bg-black/10 backdrop-blur-[2px] border-l border-white/5">
          <div className="mb-12">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xs font-bold tracking-[0.4em] text-white/40 uppercase"
            >
              RKS Premium Collection
            </motion.span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeProduct.id}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="space-y-8"
            >
              <h1 className="text-7xl font-bold text-white leading-tight tracking-tight">
                {activeProduct.title.split(' ').map((word, i) => (
                  <span key={i} className="block">{word}</span>
                ))}
              </h1>
              
              <p className="text-xl text-white/60 leading-relaxed max-w-md font-light">
                {activeProduct.description}
              </p>

              <div className="pt-8">
                <motion.button
                  whileHover={{ x: 10 }}
                  onClick={() => setView('products')}
                  className="group flex items-center gap-4 text-white font-bold text-sm uppercase tracking-widest"
                >
                  <span className="relative">
                    {activeProduct.cta}
                    <motion.div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300" />
                  </span>
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                    <ChevronRight size={18} />
                  </div>
                </motion.button>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-24 flex items-center gap-8">
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-white/20 uppercase tracking-widest mb-1">Established</span>
              <span className="text-xs font-medium text-white/60">© 2024 RKS</span>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-white/20 uppercase tracking-widest mb-1">Precision</span>
              <span className="text-xs font-medium text-white/60">Every Detail</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- PRODUCT VISUAL COMPONENTS ---

const HangTagVisual = () => (
  <motion.div 
    className="relative flex flex-col items-center"
    animate={{ 
      rotate: [0, 2, -2, 1, -1, 0],
      y: [0, 5, 0],
      scale: [1, 1.05, 1]
    }}
    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
  >
    {/* String */}
    <div className="w-0.5 h-32 bg-gradient-to-b from-white/10 to-white/40 mb-[-2px]" />
    
    {/* Tag Body */}
    <div className="relative w-48 h-80 bg-[#1a1a1a] rounded-sm shadow-[0_30px_60px_rgba(0,0,0,0.8)] border border-white/5 overflow-hidden flex flex-col items-center justify-center">
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      
      {/* Eyelet */}
      <div className="absolute top-6 w-4 h-4 rounded-full bg-gradient-to-br from-yellow-600 to-yellow-900 border border-yellow-400/30 shadow-inner" />
      
      {/* Content */}
      <div className="relative z-10 text-center space-y-4">
        <div className="text-white/20 text-[10px] font-bold tracking-[0.5em] uppercase">Premium</div>
        <div className="text-white font-bold text-3xl tracking-tighter">RKS</div>
        <div className="w-8 h-px bg-yellow-500/50 mx-auto" />
        <div className="text-white/40 text-[8px] font-medium uppercase tracking-widest">Luxury Branding</div>
      </div>

      {/* Lighting Pass */}
      <motion.div 
        animate={{ x: ['-200%', '200%'] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12"
      />
    </div>
    
    {/* Shadow */}
    <motion.div 
      animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      className="absolute -bottom-12 w-40 h-6 bg-black/60 blur-xl rounded-full" 
    />
  </motion.div>
);

const FabricLabelVisual = () => (
  <motion.div 
    className="relative"
    animate={{ 
      rotateX: [0, 3, -3, 0],
      rotateY: [0, 8, -8, 0],
      scale: [1, 1.03, 1],
      z: [0, 20, 0]
    }}
    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
    style={{ transformStyle: 'preserve-3d' }}
  >
    {/* Main Label Body */}
    <div className="w-96 h-40 bg-[#f8f8f8] rounded-sm shadow-[0_30px_60px_rgba(0,0,0,0.5)] relative overflow-hidden flex items-center justify-center border border-black/10">
      
      {/* Woven Texture Simulation */}
      <div className="absolute inset-0 opacity-40" style={{ 
        backgroundImage: `
          repeating-linear-gradient(45deg, transparent, transparent 1px, rgba(0,0,0,0.05) 1px, rgba(0,0,0,0.05) 2px),
          repeating-linear-gradient(-45deg, transparent, transparent 1px, rgba(0,0,0,0.05) 1px, rgba(0,0,0,0.05) 2px)
        `,
        backgroundSize: '4px 4px'
      }} />
      
      {/* Subtle Fabric Grain */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />

      {/* Animated Dashed Stitching */}
      <svg
        viewBox="0 0 384 160"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full pointer-events-none"
      >
        <defs>
          <filter id="stitch-shadow">
            <feDropShadow dx="0.5" dy="0.5" stdDeviation="0.2" floodOpacity="0.3" />
          </filter>
        </defs>
        <motion.rect
          x="8" y="8" width="368" height="144"
          fill="none"
          stroke="#333"
          strokeWidth="2"
          strokeDasharray="12 8"
          strokeLinecap="round"
          filter="url(#stitch-shadow)"
          initial={{ strokeDashoffset: 0 }}
          animate={{ strokeDashoffset: -20 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />
      </svg>

      {/* Brand Content with Woven Effect */}
      <div className="relative z-10 flex flex-col items-center">
        <motion.span 
          animate={{ opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="text-slate-900 font-black text-5xl tracking-[0.2em] drop-shadow-sm"
          style={{ fontVariant: 'small-caps' }}
        >
          RKS
        </motion.span>
        {/* Line of Dots (Stitching Effect) */}
        <div className="flex gap-1.5 my-3">
          {[...Array(8)].map((_, i) => (
            <motion.div 
              key={i}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: i * 0.1, duration: 0.5, repeat: Infinity, repeatType: "reverse", repeatDelay: 5 }}
              className="w-1 h-1 rounded-full bg-slate-900/30"
            />
          ))}
        </div>
        <span className="text-slate-500 text-[9px] font-bold uppercase tracking-[0.4em]">High Definition Weave</span>
      </div>

      {/* Realistic Sheen / Light Reflection */}
      <motion.div 
        animate={{ x: ['-100%', '200%'] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-25 pointer-events-none"
      />

      {/* Subtle Fold Shadow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black/5 via-transparent to-white/5 pointer-events-none" />
    </div>

    {/* Contact Shadow */}
    <motion.div 
      animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-80 h-8 bg-black/40 blur-2xl rounded-full" 
    />
  </motion.div>
);

const PackagingBoxVisual = () => (
  <motion.div 
    className="relative w-[440px] h-[275px]"
    style={{ perspective: '2000px', transformStyle: 'preserve-3d' }}
    animate={{ 
      rotateY: [-5, 10, -10, -5],
      rotateX: [15, 10, 15],
      y: [0, -15, 0]
    }}
    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
  >
    {/* 3D Rigid Box Container */}
    <div className="absolute inset-0" style={{ transformStyle: 'preserve-3d' }}>
      
      {/* MAIN BOX BODY (The Base) */}
      <div className="absolute inset-0" style={{ transform: 'translateZ(-50px)', transformStyle: 'preserve-3d' }}>
        {/* Bottom Face */}
        <div className="absolute inset-0 bg-[#020617] border border-white/5 shadow-2xl" style={{ transform: 'translateZ(-100px)' }} />
        
        {/* Back Face */}
        <div className="absolute top-0 left-0 w-full h-[100px] bg-[#0f172a] origin-top border border-white/5" style={{ transform: 'rotateX(-90deg)' }} />
        
        {/* Side Faces */}
        <div className="absolute top-0 left-0 h-full w-[100px] bg-[#0f172a] origin-left border border-white/5" style={{ transform: 'rotateY(-90deg)' }} />
        <div className="absolute top-0 right-0 h-full w-[100px] bg-[#0f172a] origin-right border border-white/5" style={{ transform: 'rotateY(90deg)' }} />
        
        {/* Front Face (Lower part) */}
        <div className="absolute bottom-0 left-0 w-full h-[100px] bg-[#0f172a] origin-bottom border border-white/5" style={{ transform: 'rotateX(90deg)' }} />

        {/* Interior (Velvet Lining) */}
        <div className="absolute inset-[4px] bg-[#020617] shadow-[inset_0_0_40px_rgba(0,0,0,1)] flex items-center justify-center overflow-hidden" style={{ transform: 'translateZ(-98px)' }}>
           <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/felt.png')]" />
           <motion.div 
             animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
             transition={{ duration: 10, repeat: Infinity }}
             className="w-48 h-48 bg-blue-500/10 blur-[80px] rounded-full"
           />
           {/* Luxury Item Placeholder */}
           <div className="w-24 h-24 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl flex items-center justify-center">
              <div className="w-10 h-10 rounded-full border border-white/20 animate-pulse" />
           </div>
        </div>
      </div>

      {/* MAGNETIC LID (Hinged at the top/back) */}
      <motion.div 
        animate={{ 
          rotateX: [0, -115, 0],
          z: 50
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: "easeInOut",
          times: [0, 0.45, 1] 
        }}
        style={{ 
          transformOrigin: 'top', 
          transformStyle: 'preserve-3d',
          top: 0 
        }}
        className="absolute inset-0 z-50"
      >
        {/* Lid Top Face */}
        <div className="absolute inset-0 bg-[#1e293b] border border-white/10 shadow-2xl rounded-sm" style={{ transform: 'translateZ(0px)' }}>
          {/* Premium Paper Texture */}
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]" />
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/50" />
          
          {/* Branding (Centered Silver Foil) */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            {/* Animated Stitching Border */}
            <div className="absolute inset-8 border border-white/5 rounded-sm overflow-hidden">
              <motion.svg 
                viewBox="0 0 100 100" 
                preserveAspectRatio="none"
                className="absolute inset-0 w-full h-full"
              >
                <motion.rect
                  x="2" y="2" width="96" height="96"
                  fill="none"
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="0.5"
                  strokeDasharray="2 2"
                  initial={{ strokeDashoffset: 100 }}
                  animate={{ strokeDashoffset: 0 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
              </motion.svg>
            </div>

            <motion.div 
              animate={{ 
                opacity: [0.8, 1, 0.8],
                textShadow: ['0 0 15px rgba(255,255,255,0.2)', '0 0 30px rgba(255,255,255,0.4)', '0 0 15px rgba(255,255,255,0.2)']
              }}
              transition={{ duration: 5, repeat: Infinity }}
              className="text-white font-black text-6xl tracking-[-0.02em] drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]"
            >
              RKS
            </motion.div>
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-white/40 to-transparent my-5" />
            <div className="text-white/50 text-[10px] font-bold uppercase tracking-[0.5em]">Premium Rigid Box</div>
          </div>
        </div>

        {/* Front Flap (The magnetic part that folds down) */}
        <div className="absolute bottom-0 left-0 w-full h-[50px] bg-[#1e293b] origin-bottom border border-white/10 shadow-lg" style={{ transform: 'rotateX(90deg) translateZ(0px)' }}>
           <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
           {/* Small Ribbon Pull */}
           <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-5 bg-blue-600 rounded-b-sm shadow-md" />
        </div>

        {/* Lid Sides */}
        <div className="absolute top-0 left-0 h-full w-[50px] bg-[#0f172a] origin-left border border-white/10" style={{ transform: 'rotateY(-90deg) translateZ(0px)' }} />
        <div className="absolute top-0 right-0 h-full w-[50px] bg-[#0f172a] origin-right border border-white/10" style={{ transform: 'rotateY(90deg) translateZ(0px)' }} />
      </motion.div>

    </div>

    {/* Enhanced Contact Shadow */}
    <motion.div 
      animate={{ 
        scale: [1, 1.4, 1],
        opacity: [0.3, 0.5, 0.3],
        filter: ['blur(40px)', 'blur(60px)', 'blur(40px)']
      }}
      transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      className="absolute -bottom-48 left-1/2 -translate-x-1/2 w-[560px] h-28 bg-black rounded-full" 
    />
  </motion.div>
);

export default Hero;
