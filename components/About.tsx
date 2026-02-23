
import React, { useRef, useState, useEffect } from 'react';
import { motion, useTransform, useSpring, useMotionValue, AnimatePresence } from 'framer-motion';
import { 
  Factory, 
  Users, 
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
  Sparkles,
  MessageSquare
} from 'lucide-react';
import { ViewType } from '../App';

// --- Helper Components ---

const StatCounter = ({ value, label, icon: Icon, suffix = "+" }: { value: number, label: string, icon: any, suffix?: string }) => {
  const [count, setCount] = useState(0);
  const [hasAppeared, setHasAppeared] = useState(false);

  useEffect(() => {
    if (!hasAppeared) return;
    let start = 0;
    const end = value;
    const duration = 2000;
    const incrementTime = duration / end;

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value, hasAppeared]);

  return (
    <motion.div 
      onViewportEnter={() => setHasAppeared(true)}
      whileHover={{ y: -10, scale: 1.02 }}
      className="bg-white p-10 rounded-[45px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] border border-slate-50 flex flex-col items-center text-center group transition-all duration-500"
    >
      <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-[28px] flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-sm">
        <Icon size={32} strokeWidth={1.5} />
      </div>
      <div className="flex items-baseline gap-1">
        <span className="text-6xl font-[950] text-slate-900 tracking-tighter">{count}</span>
        <span className="text-3xl font-black text-blue-600">{suffix}</span>
      </div>
      <p className="mt-4 text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">{label}</p>
    </motion.div>
  );
};

const TiltCard: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`relative ${className}`}
    >
      {children}
    </motion.div>
  );
};

interface AboutProps {
  setView: (view: ViewType) => void;
}

const About: React.FC<AboutProps> = ({ setView }) => {
  const whatsappNumber = '919036333005';
  const whatsappText = encodeURIComponent('Hello RKS Creations, I would like to discuss my branding and packaging requirement.');
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappText}`;
  const offerings = [
    "Hang Tags", "Paper Tags", "Printer Labels", "Packaging", 
    "Badges & Patches", "Woven Labels", "PU Labels", "Adhesive Labels", "Belly Band & Inserts"
  ];

  return (
    <section id="about" className="py-24 bg-white overflow-hidden selection:bg-blue-100 selection:text-blue-900">
      <div className="max-w-[1440px] mx-auto px-24">
        
        {/* --- Floating Offerings Ticker --- */}
        <div className="relative w-full py-12 mb-32 border-y border-slate-50 bg-slate-50/30 overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-white to-transparent z-10" />
          <motion.div 
            animate={{ x: [0, -2000] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="flex gap-24 whitespace-nowrap items-center px-10"
          >
            {[...offerings, ...offerings, ...offerings].map((item, i) => (
              <div key={i} className="flex items-center gap-8 group">
                <span className="text-sm font-black text-slate-300 tracking-[0.4em] uppercase transition-colors group-hover:text-blue-600 cursor-default">
                  {item}
                </span>
                <Sparkles size={14} className="text-blue-100" />
              </div>
            ))}
          </motion.div>
        </div>

        {/* --- Main Story & High-Impact Stats --- */}
        <div className="grid grid-cols-2 gap-32 items-center mb-40">
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <h3 className="text-5xl font-[950] text-slate-900 leading-tight">
                Our Expertise is Built on <br />
                <span className="text-blue-600">Precision and Care.</span>
              </h3>
              <div className="space-y-6 text-xl text-slate-500 font-medium leading-relaxed">
                <p>
                  With years of expertise in the industry, <strong className="text-slate-900">RKS Company</strong> provides end-to-end solutions that help businesses stand out in a crowded market.
                </p>
                <p>
                  Every label and tag we produce is a testament to our dedication to quality. We collaborate closely with our clients to ensure the final product aligns perfectly with their vision and brand values.
                </p>
              </div>
              <motion.button 
                onClick={() => setView('contact')}
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-4 bg-slate-900 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs group transition-all hover:bg-blue-600 shadow-xl"
              >
                Discuss Your Project <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </motion.button>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <StatCounter value={40} label="Employees" icon={Users} />
            <StatCounter value={12} label="Years of Experience" icon={Factory} />
            <StatCounter value={100} label="Global Clients" icon={Globe} />
            <StatCounter value={20} label="Industry Awards" icon={Award} />
          </div>
        </div>

        {/* --- Why Choose RKS? (The Advantage) --- */}
        <div className="mb-40">
          <div className="flex justify-between items-end mb-20">
            <div>
              <span
                className="font-black tracking-[0.4em] uppercase text-sm mb-4 block mobile-lg-text"
                style={{ color: 'rgb(37, 99, 235)' }}
              >
                Our Promise
              </span>
              <h3 className="text-6xl font-[950] text-slate-900 tracking-tighter">Why RKS Company?</h3>
            </div>
            <p className="max-w-md text-slate-400 font-semibold leading-relaxed text-right">
              We offer premium quality, custom designs, and eco-friendly options to enhance your brand’s identity.
            </p>
          </div>

          <div className="grid grid-cols-4 gap-8">
            {[
              { title: "End-to-End Solutions", icon: Zap, desc: "From design consultation to production, we handle every step with professionalism and care." },
              { title: "Attention to Detail", icon: Scissors, desc: "Every product we create is a testament to our dedication to quality and precision." },
              { title: "Customer-Centric", icon: Smile, desc: "We collaborate closely with our clients to ensure the final product aligns perfectly with their vision." },
              { title: "Innovation & Sustainability", icon: Leaf, desc: "Our focus on eco-friendly materials and innovative designs sets us apart in the industry." }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-slate-50 p-10 rounded-[45px] border border-slate-100 transition-all duration-500 hover:bg-white hover:shadow-2xl group"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-blue-600 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                  <feature.icon size={28} />
                </div>
                <h4 className="text-xl font-black text-slate-900 mb-4">{feature.title}</h4>
                <p className="text-sm text-slate-500 font-semibold leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- Mission & Vision: Foundation Pillars --- */}
        <div className="grid grid-cols-2 gap-12 h-[650px] mb-40">
          <TiltCard className="h-full">
            <div className="h-full bg-slate-900 rounded-[70px] p-20 flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 blur-[100px] rounded-full -mr-48 -mt-48 transition-all group-hover:bg-blue-600/40" />
              
              <div className="relative z-10">
                <div className="w-20 h-20 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl flex items-center justify-center text-blue-400 mb-10">
                   <Target size={40} />
                </div>
                <h4 className="text-5xl font-black text-white mb-8 tracking-tighter">Mission</h4>
                <p className="text-2xl text-slate-400 font-medium leading-relaxed">
                  Our mission is to <span className="text-white">empower businesses</span> with innovative branding and packaging solutions that build trust and foster loyalty. By leveraging cutting-edge technology, creative designs, and eco-friendly practices, we aim to exceed client expectations.
                </p>
              </div>
              <div className="relative z-10 flex items-center gap-4 text-white/40 text-xs font-black uppercase tracking-[0.4em]">
                 Strategic Purpose <ChevronRight size={14} />
              </div>
            </div>
          </TiltCard>

          <TiltCard className="h-full">
            <div className="h-full bg-blue-600 rounded-[70px] p-20 flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 blur-[100px] rounded-full -ml-48 -mb-48" />

              <div className="relative z-10">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl flex items-center justify-center text-white mb-10">
                   <Eye size={40} />
                </div>
                <h4 className="text-5xl font-black text-white mb-8 tracking-tighter">Vision</h4>
                <p className="text-2xl text-blue-50 font-medium leading-relaxed">
                  To become a <span className="text-white">global leader</span> in branding and packaging by delivering innovative solutions that inspire confidence and enhance product value. We believe every label and every package tells a story.
                </p>
              </div>
              <div className="relative z-10 flex items-center gap-4 text-white/40 text-xs font-black uppercase tracking-[0.4em]">
                 Future Trajectory <ChevronRight size={14} />
              </div>
            </div>
          </TiltCard>
        </div>

        {/* --- Custom Contact CTA --- */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-slate-50 rounded-[60px] p-32 md:p-24 text-center border border-slate-100 relative overflow-hidden group"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-blue-600 to-transparent" />
          <h4 className="text-7xl md:text-5xl font-[950] text-slate-900 mb-8 leading-tight tracking-tighter">
            Contact us today for <br />
            <span className="text-blue-600">Creative and customizing solutions.</span>
          </h4>
          <p className="max-w-2xl mx-auto text-3xl md:text-xl text-slate-500 font-medium mb-12">
            Reach out to us for premium labels, tags, and packaging solutions that elevate your brand. We're here to help you bring your vision to life.
          </p>
          <div className="flex items-center justify-center gap-8">
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#1faa59] via-[#25D366] to-[#128C7E] text-white px-14 py-7 md:px-12 md:py-6 rounded-2xl font-black uppercase tracking-widest text-sm md:text-xs shadow-2xl shadow-emerald-200 hover:brightness-95 transition-all flex items-center gap-4"
            >
              Get In Touch <MessageSquare size={18} />
            </a>
            <div className="flex flex-col items-start text-left">
              <span className="text-xs md:text-[10px] font-black text-slate-300 uppercase tracking-widest">Enquiry Hotline</span>
              <span className="text-2xl md:text-lg font-black text-slate-900">+91 90363 33005</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
