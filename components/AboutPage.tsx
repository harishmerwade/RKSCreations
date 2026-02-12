
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, 
  Factory, 
  Globe, 
  Award, 
  Target, 
  Eye, 
  Zap, 
  ShieldCheck, 
  Scissors, 
  Leaf, 
  Smile, 
  ArrowRight, 
  ChevronRight, 
  MessageSquare,
  Sparkles,
  Phone,
  MapPin,
  Mail
} from 'lucide-react';
import { ViewType } from '../App';

const ABOUT_SLIDES = [
  'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&q=80&w=1600',
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1600',
  'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=1600',
  'https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?auto=format&fit=crop&q=80&w=1600',
  'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=1600'
];

const CinematicSlideshow = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % ABOUT_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-full bg-slate-50 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.15, filter: 'blur(10px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          exit={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          <img 
            src={ABOUT_SLIDES[index]} 
            className="w-full h-full object-cover"
            alt={`Slide ${index}`}
          />
        </motion.div>
      </AnimatePresence>
      
      {/* Subtle Bottom Progress Dots */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 z-20">
        {ABOUT_SLIDES.map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/30 overflow-hidden">
            <motion.div 
              className="w-full h-full bg-blue-500"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: index === i ? 1 : 0 }}
              transition={{ duration: index === i ? 5 : 0.3, ease: "linear" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const AnimatedIcon = ({ icon: Icon, isHovered }: { icon: any, isHovered: boolean }) => (
  <motion.div
    animate={isHovered ? { 
      scale: [1, 1.2, 1],
      rotate: [0, 10, -10, 0]
    } : {}}
    transition={{ duration: 0.6, repeat: isHovered ? Infinity : 0 }}
    className={isHovered ? "text-white" : "text-blue-600"}
  >
    <Icon size={32} strokeWidth={1.5} />
  </motion.div>
);

const StatCard = ({ value, label, icon: Icon, delay }: { value: string, label: string, icon: any, delay: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      whileHover={{ y: -15, scale: 1.02 }}
      className="bg-white p-12 rounded-[50px] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.06)] border border-slate-50 flex flex-col items-center text-center group transition-all duration-500"
    >
      <div className="w-24 h-24 bg-blue-50 text-blue-600 rounded-[30px] flex items-center justify-center mb-10 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-sm relative overflow-hidden">
        <Icon size={40} strokeWidth={1.5} className="relative z-10" />
        <motion.div 
          className="absolute inset-0 bg-white/20"
          initial={{ x: '-100%' }}
          whileHover={{ x: '100%' }}
          transition={{ duration: 0.5 }}
        />
      </div>
      <div className="flex items-baseline gap-1">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-7xl font-[950] text-slate-900 tracking-tighter"
        >
          {value}
        </motion.span>
      </div>
      <p className="mt-4 text-[11px] font-[900] text-slate-400 uppercase tracking-[0.4em]">{label}</p>
    </motion.div>
  );
};

const AboutPage: React.FC<{ onBack: () => void; setView: (view: ViewType) => void }> = ({ onBack, setView }) => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const offerings = [
    "Hang Tags", "Paper Tags", "Printer Labels", "Packaging", 
    "Badges & Patches", "Woven Labels", "PU Labels", "Adhesive Labels", "Belly Band & Inserts"
  ];

  return (
    <div className="min-h-screen bg-white pb-32 selection:bg-blue-100 selection:text-blue-900">
      
      {/* Split Hero Section: Photos on Left, Content on Right */}
      <section className="relative pt-48 pb-40 px-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/5 blur-[120px] rounded-full -mr-40 -mt-40 pointer-events-none" />
        
        <div className="max-w-[1440px] mx-auto grid grid-cols-2 gap-24 items-center relative z-10">
          
          {/* Left: Creative Slideshow with no overlays */}
          <motion.div 
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            className="h-[800px] rounded-[80px] overflow-hidden shadow-[0_60px_100px_-20px_rgba(0,0,0,0.15)] border-[16px] border-white"
          >
            <CinematicSlideshow />
          </motion.div>

          {/* Right: Brand Content */}
          <div className="flex flex-col items-start">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-5 mb-10"
            >
              <span className="w-16 h-[2px] bg-blue-600"></span>
              <span className="text-blue-600 font-[900] tracking-[0.6em] uppercase text-[11px]">The RKS Story</span>
            </motion.div>
            
            <h1 className="text-[110px] font-[950] text-slate-900 leading-[0.8] tracking-tighter mb-16 text-left">
              Where Creativity <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-900">
                Meets Quality.
              </span>
            </h1>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-12"
            >
              <p className="text-4xl text-slate-900 font-bold leading-[1.1] tracking-tight">
                Welcome to RKS Company, where craftsmanship meets innovation in branding and packaging solutions.
              </p>
              <div className="h-px w-32 bg-slate-100" />
              <p className="text-2xl text-slate-400 font-medium leading-relaxed italic max-w-xl">
                "At RKS, we understand the importance of small details in making a big impression. Our labels and tags communicate your brand's story effectively."
              </p>
              
              <motion.button
                onClick={() => setView('contact')}
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.98 }}
                className="bg-slate-900 text-white px-12 py-6 rounded-[24px] font-[900] text-sm uppercase tracking-[0.3em] shadow-2xl flex items-center gap-6 group hover:bg-blue-600 transition-all mt-8"
              >
                Discuss Project <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Offerings Ribbon */}
      <div className="relative w-full py-16 mb-40 border-y border-slate-50 bg-slate-50/50 overflow-hidden">
        <motion.div 
          animate={{ x: [0, -2800] }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="flex gap-32 whitespace-nowrap items-center px-10"
        >
          {[...offerings, ...offerings, ...offerings].map((item, i) => (
            <div key={i} className="flex items-center gap-10 group cursor-default">
              <span className="text-[11px] font-black text-slate-300 tracking-[0.5em] uppercase transition-colors group-hover:text-blue-600">
                {item}
              </span>
              <Sparkles size={16} className="text-blue-100 group-hover:text-blue-300 transition-colors" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Stats Section */}
      <section className="px-24 mb-60">
        <div className="max-w-[1440px] mx-auto grid grid-cols-4 gap-10">
          <StatCard value="40+" label="Dedicated Employees" icon={Users} delay={0.1} />
          <StatCard value="12+" label="Years of Expertise" icon={Factory} delay={0.2} />
          <StatCard value="100+" label="Global Active Clients" icon={Globe} delay={0.3} />
          <StatCard value="20+" label="Industry Excellence Awards" icon={Award} delay={0.4} />
        </div>
      </section>

      {/* Why Choose RKS */}
      <section className="px-24 mb-60">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex justify-between items-end mb-24">
            <div className="max-w-2xl">
              <span className="text-blue-600 font-[900] tracking-[0.6em] uppercase text-[11px] mb-6 block">Our Advantage</span>
              <h2 className="text-8xl font-[950] text-slate-900 tracking-tighter leading-none mb-8">
                Why RKS Company?
              </h2>
              <p className="text-2xl text-slate-400 font-medium leading-relaxed max-w-xl">
                Choose RKS Company for exceptional labels, tags, and packaging solutions. We offer premium quality, custom designs, and eco-friendly options.
              </p>
            </div>
            <div className="w-px h-32 bg-slate-100 hidden lg:block" />
          </div>

          <div className="grid grid-cols-4 gap-10">
            {[
              { id: 'end', title: "End-to-End Solutions", icon: Zap, desc: "From design consultation to production, we handle every step with professionalism and care." },
              { id: 'detail', title: "Attention to Detail", icon: Scissors, desc: "Every product we create is a testament to our dedication to quality and precision." },
              { id: 'centric', title: "Customer-Centric", icon: Smile, desc: "We collaborate closely with our clients to ensure the final product aligns perfectly with their vision." },
              { id: 'innovation', title: "Innovation & Eco", icon: Leaf, desc: "Our focus on eco-friendly materials and innovative designs sets us apart in the global industry." }
            ].map((feature, i) => (
              <motion.div 
                key={feature.id}
                onMouseEnter={() => setHoveredCard(feature.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="bg-slate-50 p-12 rounded-[60px] border border-slate-100 transition-all duration-700 hover:bg-white hover:shadow-2xl group cursor-default relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-bl-[100px] opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-20 h-20 bg-white rounded-[25px] flex items-center justify-center mb-10 group-hover:bg-blue-600 transition-all duration-500 shadow-sm relative z-10">
                  <AnimatedIcon icon={feature.icon} isHovered={hoveredCard === feature.id} />
                </div>
                <h4 className="text-2xl font-black text-slate-900 mb-6 tracking-tight relative z-10 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h4>
                <p className="text-sm text-slate-500 font-semibold leading-relaxed relative z-10">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="px-24 mb-60">
        <div className="max-w-[1440px] mx-auto grid grid-cols-2 gap-12">
          
          {/* Mission Card */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="group h-[800px] bg-slate-900 rounded-[80px] p-24 flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full -mr-40 -mt-40 transition-all group-hover:bg-blue-600/20" />
            
            <div className="relative z-10">
              <div className="w-24 h-24 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[30px] flex items-center justify-center text-blue-400 mb-12 shadow-2xl">
                 <Target size={48} strokeWidth={1} />
              </div>
              <h4 className="text-7xl font-[950] text-white mb-12 tracking-tighter">Mission</h4>
              <p className="text-3xl text-slate-400 font-medium leading-[1.35] tracking-tight">
                Our mission is to <span className="text-white">empower businesses</span> with innovative branding and packaging solutions that build trust and foster loyalty. By leveraging <span className="text-blue-400">cutting-edge technology</span>, creative designs, and eco-friendly practices, we aim to exceed client expectations.
              </p>
            </div>
            
            <div className="relative z-10 flex items-center gap-5">
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-blue-400 transition-colors">
                <ArrowRight size={20} className="text-slate-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
              </div>
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.5em]">STRATEGIC PURPOSE</span>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="group h-[800px] bg-blue-600 rounded-[80px] p-24 flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/10 blur-[120px] rounded-full -ml-40 -mb-40" />
            
            <div className="relative z-10">
              <div className="w-24 h-24 bg-white/10 backdrop-blur-3xl border border-white/20 rounded-[30px] flex items-center justify-center text-white mb-12 shadow-2xl">
                 <Eye size={48} strokeWidth={1} />
              </div>
              <h4 className="text-7xl font-[950] text-white mb-12 tracking-tighter">Vision</h4>
              <p className="text-3xl text-blue-50 font-medium leading-[1.35] tracking-tight">
                To become a <span className="text-white">global leader</span> in branding and packaging by delivering solutions that inspire confidence and enhance product value. We believe every label tells a story.
              </p>
            </div>

            <div className="relative z-10 flex items-center gap-5">
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                <ArrowRight size={20} className="text-blue-100" />
              </div>
              <span className="text-[10px] font-black text-blue-100 uppercase tracking-[0.5em]">FUTURE TRAJECTORY</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section Overlay */}
      <section id="contact-about" className="px-24">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-slate-50 rounded-[80px] p-24 border border-slate-100 relative overflow-hidden"
        >
          <div className="grid grid-cols-2 gap-24 items-center relative z-10">
            <div>
               <span className="text-blue-600 font-[900] tracking-[0.6em] uppercase text-[11px] mb-8 block">Start a Collaboration</span>
               <h2 className="text-[72px] font-[950] text-slate-900 leading-[0.85] tracking-tighter mb-12">
                 Creative and <br />
                 <span className="text-blue-600">Customizing Solutions.</span>
               </h2>
               <p className="text-2xl text-slate-500 font-medium mb-16 leading-relaxed">
                 Reach out to us for premium labels, tags, and packaging solutions that elevate your brand. We're here to help you bring your vision to life.
               </p>
               
               <div className="flex items-center gap-12">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -4 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setView('contact')}
                    className="bg-slate-900 text-white px-16 py-7 rounded-[28px] font-[950] text-lg uppercase tracking-[0.2em] shadow-2xl flex items-center gap-6 group hover:bg-blue-600 transition-colors"
                  >
                    Get In Touch
                    <MessageSquare size={22} className="group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                  <div className="flex flex-col">
                    <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest mb-1">Response Guarantee</span>
                    <span className="text-lg font-black text-slate-900">UNDER 24 HOURS</span>
                  </div>
               </div>
            </div>

            <div className="space-y-12">
               <div className="flex items-start gap-8">
                  <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center text-blue-600 shadow-sm">
                    <Phone size={28} />
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Phone Support</p>
                    <p className="text-xl font-black">+91 90363 33005 / 98444 33135</p>
                  </div>
               </div>
               
               <div className="flex items-start gap-8">
                  <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center text-blue-600 shadow-sm">
                    <MapPin size={28} />
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Global HQ</p>
                    <p className="text-xl font-black text-slate-900 max-w-sm">
                      157/B, 9th Cross, 7th Main Rd, 6th Phase, Mahaganapathi Nagar, Bengaluru, KA 560044.
                    </p>
                  </div>
               </div>

               <div className="flex items-start gap-8">
                  <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center text-blue-600 shadow-sm">
                    <Mail size={28} />
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Email Inquiry</p>
                    <p className="text-xl font-black">rkscreations10@gmail.com</p>
                  </div>
               </div>
            </div>
          </div>
          
          <div className="absolute top-0 right-0 w-[400px] h-full bg-blue-600/5 -skew-x-12 translate-x-1/2 pointer-events-none" />
        </motion.div>
      </section>

      {/* Floating Exit Button */}
      <motion.button
        onClick={onBack}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-12 right-12 w-20 h-20 bg-white shadow-2xl rounded-full flex items-center justify-center text-slate-900 z-50 border border-slate-100 group"
      >
        <ChevronRight size={32} className="group-hover:rotate-180 transition-transform" />
      </motion.button>
    </div>
  );
};

export default AboutPage;
