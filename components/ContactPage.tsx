
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  ArrowLeft, 
  Globe,
  Clock,
  Sparkles,
  ShieldCheck
} from 'lucide-react';

const SLIDES = [
  'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1440',
  'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1440',
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1440'
];

const ContactPage: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white pb-40 selection:bg-blue-100">
      
      {/* Cinematic Branding Header */}
      <section className="relative h-[650px] overflow-hidden flex items-center pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={slideIndex}
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img 
              src={SLIDES[slideIndex]} 
              className="w-full h-full object-cover opacity-[0.08]"
              alt="Workspace"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 w-full px-24 max-w-[1440px] mx-auto">
          <motion.button
            onClick={onBack}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 text-blue-600 font-black uppercase tracking-[0.4em] text-[10px] mb-12 hover:translate-x-[-8px] transition-transform group"
          >
            <ArrowLeft size={16} /> Return to Brand Home
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-5xl"
          >
            <div className="flex items-center gap-5 mb-10">
               <span className="w-16 h-[2px] bg-blue-600"></span>
               <span className="text-blue-600 font-[900] tracking-[0.6em] uppercase text-[11px]">Inquiry & Partnership</span>
            </div>
            <h1 className="text-[120px] font-[950] leading-[0.8] tracking-tighter mb-16 text-slate-900">
              Direct <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-800 to-indigo-900">
                Liaison.
              </span>
            </h1>
            <p className="text-3xl text-slate-500 font-medium leading-relaxed italic border-l-4 border-blue-600 pl-10 max-w-2xl">
              "We provide high-precision branding consultation to ensure your vision is realized with world-class quality."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Unified Master Contact Section */}
      <section className="px-24">
        <div className="max-w-[1440px] mx-auto">
          <div className="bg-slate-50 rounded-[80px] border border-slate-100 flex overflow-hidden shadow-2xl shadow-slate-200/40">
            
            {/* Left: Intelligence & Map */}
            <div className="w-[45%] bg-slate-900 p-20 text-white relative">
              <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_0%,_rgba(37,99,235,0.15)_0%,_transparent_70%)] pointer-events-none" />
              
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 mb-8">
                    <Sparkles size={20} className="text-blue-400" />
                    <span className="text-blue-400 font-black tracking-widest text-[10px] uppercase">RKS Global Hub</span>
                  </div>
                  <h2 className="text-5xl font-black mb-10 tracking-tighter leading-none">Reach out to us for any Enquiries</h2>
                  
                  {/* Beautiful Tech-Blue Map Overlay */}
                  <div className="w-full h-80 bg-slate-800 rounded-[50px] overflow-hidden border border-white/5 relative group mb-12 shadow-2xl">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.970868154109!2d77.53327637586562!3d12.973719014830177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d8db374c405%3A0xc3f8e5b4b1049b4d!2sMahaganapathi%20Nagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1709123456789!5m2!1sen!2sin"
                      className="w-full h-full grayscale invert hue-rotate-[190deg] contrast-[1.2] opacity-50 group-hover:opacity-100 transition-opacity duration-1000"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-40" />
                    <div className="absolute bottom-8 left-8 bg-blue-600 px-6 py-3 rounded-2xl flex items-center gap-3 shadow-xl">
                      <MapPin size={16} className="text-white" />
                      <span className="text-[10px] font-black uppercase tracking-widest">VISIT BENGALURU FACILITY</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-10">
                    <div className="flex items-start gap-6">
                      <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-blue-400 border border-white/10">
                        <Phone size={24} />
                      </div>
                      <div>
                        <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Response Hotline</p>
                        <p className="text-xl font-black">+91 90363 33005 / 98444 33135</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-6">
                      <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-blue-400 border border-white/10">
                        <Mail size={24} />
                      </div>
                      <div>
                        <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Email Channel</p>
                        <p className="text-xl font-black">rkscreations10@gmail.com</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-12 border-t border-white/5 flex items-center gap-10">
                   <div className="flex items-center gap-3">
                      <ShieldCheck size={20} className="text-blue-600" />
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">ISO 9001:2015 CERTIFIED OPS</span>
                   </div>
                </div>
              </div>
            </div>

            {/* Right: Master Contact Form */}
            <div className="w-[55%] p-24 bg-white">
              <div className="mb-16">
                 <h3 className="text-5xl font-[950] text-slate-900 tracking-tighter mb-4">Start Your Collaboration</h3>
                 <p className="text-xl text-slate-400 font-medium">Experience the RKS standard of excellence from the first contact.</p>
              </div>

              <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-12">
                  <div className="group space-y-3">
                    <label className="text-[10px] font-black uppercase text-slate-400 tracking-[0.3em] group-focus-within:text-blue-600 transition-colors">Client Name</label>
                    <input type="text" className="w-full bg-transparent border-b-2 border-slate-100 py-4 outline-none focus:border-blue-600 transition-all text-xl font-black text-slate-900 placeholder:text-slate-200" placeholder="Full Name" />
                  </div>
                  <div className="group space-y-3">
                    <label className="text-[10px] font-black uppercase text-slate-400 tracking-[0.3em] group-focus-within:text-blue-600 transition-colors">Contact Number</label>
                    <input type="text" className="w-full bg-transparent border-b-2 border-slate-100 py-4 outline-none focus:border-blue-600 transition-all text-xl font-black text-slate-900 placeholder:text-slate-200" placeholder="+91 ..." />
                  </div>
                </div>

                <div className="group space-y-3">
                  <label className="text-[10px] font-black uppercase text-slate-400 tracking-[0.3em] group-focus-within:text-blue-600 transition-colors">Corporate Email</label>
                  <input type="email" className="w-full bg-transparent border-b-2 border-slate-100 py-4 outline-none focus:border-blue-600 transition-all text-xl font-black text-slate-900 placeholder:text-slate-200" placeholder="your@brand.com" />
                </div>

                <div className="group space-y-3">
                  <label className="text-[10px] font-black uppercase text-slate-400 tracking-[0.3em] group-focus-within:text-blue-600 transition-colors">Project Brief</label>
                  <textarea rows={5} className="w-full bg-transparent border-b-2 border-slate-100 py-4 outline-none focus:border-blue-600 transition-all text-xl font-black text-slate-900 resize-none placeholder:text-slate-200" placeholder="Describe your vision, materials, or quantity..."></textarea>
                </div>

                <div className="pt-8 flex items-center justify-between">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -4 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-blue-600 text-white px-24 py-8 rounded-[35px] font-black uppercase tracking-[0.3em] text-sm shadow-2xl shadow-blue-100 hover:bg-slate-900 transition-all flex items-center gap-8 group"
                  >
                    Send Master Inquiry <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                  
                  <div className="text-right">
                    <div className="flex items-center gap-3 mb-1 justify-end">
                      <Clock size={16} className="text-slate-300" />
                      <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Response Guarantee</span>
                    </div>
                    <span className="text-lg font-black text-slate-900">WITHIN 4 HOURS</span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="mt-40 px-24">
        <div className="max-w-[1440px] mx-auto grid grid-cols-4 gap-12">
           {[
             { label: "Global Export", val: "40+ Countries", icon: Globe },
             { label: "Capacity", val: "10M Units / Mo", icon: Sparkles },
             { label: "Quality", val: "Export Standard", icon: ShieldCheck },
             { label: "Support", val: "24/7 Dedicated", icon: Phone }
           ].map(badge => (
             <div key={badge.label} className="bg-slate-50 p-10 rounded-[45px] border border-slate-100 flex flex-col items-center text-center group hover:bg-white hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-blue-600 mb-6 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <badge.icon size={28} />
                </div>
                <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-2">{badge.label}</span>
                <span className="text-xl font-black text-slate-900">{badge.val}</span>
             </div>
           ))}
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
