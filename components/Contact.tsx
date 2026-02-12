
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, Clock, ShieldCheck, Globe } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 px-24 bg-white overflow-hidden selection:bg-blue-100">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center gap-5 mb-8"
          >
             <span className="w-16 h-[2px] bg-blue-600"></span>
             <span className="text-blue-600 font-[900] tracking-[0.6em] uppercase text-[11px]">Direct Engagement</span>
             <span className="w-16 h-[2px] bg-blue-600"></span>
          </motion.div>
          <h2 className="text-8xl font-[950] text-slate-900 leading-none tracking-tighter mb-8">
            Let's Build Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-900">Brand Identity.</span>
          </h2>
        </div>

        {/* Unified Contact Vessel */}
        <div className="bg-slate-50 rounded-[80px] border border-slate-100 flex overflow-hidden shadow-2xl shadow-slate-200/50">
          
          {/* Left: Brand Metadata & Map */}
          <div className="w-[45%] bg-slate-900 p-20 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_0%,_rgba(37,99,235,0.15)_0%,_transparent_70%)] pointer-events-none" />
            
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-4xl font-black mb-8 tracking-tight">Bengaluru Headquarters</h3>
                <p className="text-xl text-slate-400 font-medium leading-relaxed mb-12">
                  Visit our precision facility to witness the intersection of branding technology and craftsmanship.
                </p>

                {/* Styled Map Interface */}
                <div className="w-full h-64 bg-slate-800 rounded-[40px] overflow-hidden border border-white/5 relative group mb-12">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.970868154109!2d77.53327637586562!3d12.973719014830177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d8db374c405%3A0xc3f8e5b4b1049b4d!2sMahaganapathi%20Nagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1709123456789!5m2!1sen!2sin"
                    className="w-full h-full grayscale invert hue-rotate-[190deg] contrast-[1.2] opacity-60 group-hover:opacity-100 transition-opacity duration-700"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 pointer-events-none border-[12px] border-slate-900/50 rounded-[40px]" />
                  <div className="absolute bottom-6 left-6 bg-blue-600 px-4 py-2 rounded-full flex items-center gap-2">
                    <MapPin size={12} className="text-white" />
                    <span className="text-[9px] font-black uppercase tracking-widest">RKS PRECISION HUB</span>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-blue-400 border border-white/10 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Direct Line</p>
                      <p className="text-lg font-black">+91 90363 33005</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-blue-400 border border-white/10 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Inquiry Mail</p>
                      <p className="text-lg font-black">rkscreations10@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-10 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Global Logistics Active</span>
                </div>
                <Globe size={20} className="text-slate-800" />
              </div>
            </div>
          </div>

          {/* Right: Unified Inquiry Form */}
          <div className="w-[55%] p-20 bg-white">
            <div className="mb-12">
               <h3 className="text-4xl font-[950] text-slate-900 tracking-tighter mb-4">Master Inquiry Form</h3>
               <p className="text-lg text-slate-400 font-medium">Please provide your details for a technical consultation.</p>
            </div>

            <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-10">
                <div className="group space-y-2">
                  <label className="text-[10px] font-black uppercase text-slate-400 tracking-[0.3em] group-focus-within:text-blue-600 transition-colors">Client Name</label>
                  <input type="text" className="w-full bg-transparent border-b-2 border-slate-100 py-3 outline-none focus:border-blue-600 transition-all text-lg font-black text-slate-900 placeholder:text-slate-200" placeholder="e.g. John Smith" />
                </div>
                <div className="group space-y-2">
                  <label className="text-[10px] font-black uppercase text-slate-400 tracking-[0.3em] group-focus-within:text-blue-600 transition-colors">Contact Number</label>
                  <input type="text" className="w-full bg-transparent border-b-2 border-slate-100 py-3 outline-none focus:border-blue-600 transition-all text-lg font-black text-slate-900 placeholder:text-slate-200" placeholder="+91 ..." />
                </div>
              </div>

              <div className="group space-y-2">
                <label className="text-[10px] font-black uppercase text-slate-400 tracking-[0.3em] group-focus-within:text-blue-600 transition-colors">Email Address</label>
                <input type="email" className="w-full bg-transparent border-b-2 border-slate-100 py-3 outline-none focus:border-blue-600 transition-all text-lg font-black text-slate-900 placeholder:text-slate-200" placeholder="brand@company.com" />
              </div>

              <div className="group space-y-2">
                <label className="text-[10px] font-black uppercase text-slate-400 tracking-[0.3em] group-focus-within:text-blue-600 transition-colors">Detailed Requirements</label>
                <textarea rows={4} className="w-full bg-transparent border-b-2 border-slate-100 py-3 outline-none focus:border-blue-600 transition-all text-lg font-black text-slate-900 resize-none placeholder:text-slate-200" placeholder="Discuss material, quantity, or design needs..."></textarea>
              </div>

              <div className="pt-8 flex items-center justify-between">
                <motion.button
                  whileHover={{ scale: 1.05, y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-blue-600 text-white px-16 py-7 rounded-[28px] font-black uppercase tracking-[0.3em] text-xs shadow-2xl shadow-blue-200 flex items-center gap-6 group hover:bg-slate-900 transition-colors"
                >
                  Initiate Submission <Send size={18} />
                </motion.button>
                
                <div className="flex flex-col items-end">
                  <div className="flex items-center gap-3 mb-1">
                    <Clock size={14} className="text-slate-300" />
                    <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Avg Response</span>
                  </div>
                  <span className="text-sm font-black text-slate-900">4 HOURS</span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
