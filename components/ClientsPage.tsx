
import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Quote, 
  Award, 
  ShieldCheck, 
  Globe, 
  Trophy, 
  Star,
  ChevronRight,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

const LOGOS = [
  { name: 'Zara', url: 'https://logo.clearbit.com/zara.com' },
  { name: 'H&M', url: 'https://logo.clearbit.com/hm.com' },
  { name: 'Gucci', url: 'https://logo.clearbit.com/gucci.com' },
  { name: 'Adidas', url: 'https://logo.clearbit.com/adidas.com' },
  { name: 'Nike', url: 'https://logo.clearbit.com/nike.com' },
  { name: 'Prada', url: 'https://logo.clearbit.com/prada.com' },
  { name: 'Levis', url: 'https://logo.clearbit.com/levi.com' },
  { name: 'Puma', url: 'https://logo.clearbit.com/puma.com' },
  { name: 'Tommy Hilfiger', url: 'https://logo.clearbit.com/tommy.com' },
  { name: 'Calvin Klein', url: 'https://logo.clearbit.com/calvinklein.com' },
  { name: 'Lacoste', url: 'https://logo.clearbit.com/lacoste.com' },
  { name: 'Louis Vuitton', url: 'https://logo.clearbit.com/louisvuitton.com' },
  { name: 'Ralph Lauren', url: 'https://logo.clearbit.com/ralphlauren.com' },
  { name: 'Chanel', url: 'https://logo.clearbit.com/chanel.com' },
  { name: 'Burberry', url: 'https://logo.clearbit.com/burberry.com' },
  { name: 'Versace', url: 'https://logo.clearbit.com/versace.com' }
];

const REVIEWS = [
  {
    name: "Marco Rossi",
    position: "Supply Chain Director",
    brand: "Global Fashion Group",
    text: "RKS Creations has redefined our expectation for label quality. Their attention to HD weaving and rapid sampling has made them our primary partner for international distribution.",
    avatar: "https://i.pravatar.cc/150?u=marco"
  },
  {
    name: "Ananya Sharma",
    position: "Creative Lead",
    brand: "Premium Apparel Brand",
    text: "The tactile elegance of their hang tags adds significant value to our luxury garment lines. They don't just print; they understand the soul of a brand.",
    avatar: "https://i.pravatar.cc/150?u=ananya"
  },
  {
    name: "David Chen",
    position: "Procurement Head",
    brand: "Sports International",
    text: "Logistics reliability is where RKS truly shines. Their 99% on-time delivery rate is unmatched in the industry, even with complex global exports.",
    avatar: "https://i.pravatar.cc/150?u=david"
  }
];

const AWARDS = [
  {
    title: "ISO 9001:2015",
    desc: "Quality Management Systems Certification for global standards in production and distribution.",
    icon: ShieldCheck
  },
  {
    title: "GRS Certified",
    desc: "Global Recycled Standard acknowledgment for our commitment to sustainable fiber sourcing.",
    icon: Globe
  },
  {
    title: "OEKO-TEX Standard 100",
    desc: "Confidence in textiles – rigorous testing for harmful substances in every label produced.",
    icon: Award
  },
  {
    title: "Best Supplier 2023",
    desc: "Voted top packaging partner by the South Asian Textile Authority for innovation and scale.",
    icon: Trophy
  }
];

const ClientsPage: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-white pb-32 selection:bg-blue-100 selection:text-blue-900">
      
      {/* Cinematic Hero */}
      <section className="relative pt-60 pb-32 px-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/5 blur-[120px] rounded-full -mr-40 -mt-40 pointer-events-none" />
        
        <div className="max-w-[1440px] mx-auto flex flex-col items-center text-center relative z-10">
          <motion.button
            onClick={onBack}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-blue-600 font-black uppercase tracking-[0.3em] text-[10px] mb-12 hover:translate-x-[-8px] transition-transform group"
          >
            <ArrowLeft size={16} /> Back to Brand Home
          </motion.button>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-5 mb-10"
          >
            <span className="w-16 h-[2px] bg-blue-600"></span>
            <span className="text-blue-600 font-[900] tracking-[0.6em] uppercase text-[11px]">The Circle of Trust</span>
            <span className="w-16 h-[2px] bg-blue-600"></span>
          </motion.div>
          
          <h1 className="text-[120px] font-[950] text-slate-900 leading-[0.8] tracking-tighter mb-16">
            Powering Global <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-900">
              Identity.
            </span>
          </h1>

          <p className="text-3xl text-slate-400 font-medium leading-relaxed max-w-4xl mx-auto italic">
            "We are judged by the company we keep. From boutique designers to global retail giants, our clients rely on RKS for branding excellence."
          </p>
        </div>
      </section>

      {/* Structured Logo Grid */}
      <section className="px-24 mb-60">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center gap-8 mb-20">
             <h2 className="text-5xl font-[950] text-slate-900 tracking-tighter">Strategic Partners</h2>
             <div className="flex-1 h-px bg-slate-100" />
          </div>

          <div className="grid grid-cols-4 gap-px bg-slate-100 border border-slate-100 rounded-[60px] overflow-hidden shadow-2xl shadow-slate-200">
            {LOGOS.map((client, i) => (
              <motion.div 
                key={client.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -4, backgroundColor: '#fdfdff' }}
                className="bg-white p-12 flex items-center justify-center group relative overflow-hidden h-48 transition-all duration-500 hover:shadow-[inset_0_0_40px_rgba(37,99,235,0.03)]"
              >
                {/* No overlaying slides or icons as requested */}
                
                <div className="relative z-10 w-full h-full flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-700">
                  <motion.img 
                    src={client.url} 
                    alt={client.name} 
                    whileHover={{ scale: 1.08 }}
                    className="max-w-[70%] max-h-[70%] object-contain opacity-40 group-hover:opacity-100 transition-all duration-500"
                  />
                </div>

                {/* Subtle blue line at the bottom on hover for a creative professional touch */}
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - The Voice of Quality */}
      <section className="px-24 mb-60">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-3 gap-12">
            {REVIEWS.map((review, i) => (
              <motion.div 
                key={review.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-50 p-16 rounded-[70px] border border-slate-100 flex flex-col justify-between relative group hover:bg-white hover:shadow-2xl hover:border-blue-100 transition-all duration-700 h-[600px]"
              >
                <div className="absolute top-12 left-12">
                  <Quote size={80} className="text-blue-600/10 group-hover:text-blue-600/20 transition-colors" />
                </div>
                
                <div className="relative z-10 mt-12">
                  <p className="text-2xl text-slate-700 font-semibold leading-relaxed mb-10 italic">
                    "{review.text}"
                  </p>
                </div>

                <div className="relative z-10 flex items-center gap-6 border-t border-slate-200 pt-10">
                  <div className="w-16 h-16 rounded-3xl overflow-hidden border-4 border-white shadow-lg">
                    <img src={review.avatar} alt={review.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-slate-900 leading-tight">{review.name}</h4>
                    <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest mt-1">
                      {review.position} — {review.brand}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hall of Excellence - Awards & Certs */}
      <section className="px-24 mb-60">
        <div className="max-w-[1440px] mx-auto">
           <div className="bg-slate-900 rounded-[80px] p-24 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
              <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/5 blur-[120px] rounded-full -mr-40 -mt-40" />

              <div className="relative z-10 grid grid-cols-2 gap-24 items-center">
                 <div>
                    <span className="text-blue-400 font-black tracking-[0.5em] uppercase text-[10px] mb-8 block">Hall of Excellence</span>
                    <h2 className="text-7xl font-[950] text-white tracking-tighter mb-12">
                      Certified for <br />
                      <span className="text-blue-600">Global Standard.</span>
                    </h2>
                    <p className="text-2xl text-slate-400 font-medium leading-relaxed mb-16">
                      Our manufacturing facility is audited and certified by international bodies to ensure your branding meets ethical, quality, and safety protocols.
                    </p>
                    <div className="flex gap-10">
                       <motion.button
                         whileHover={{ scale: 1.05 }}
                         className="bg-white text-slate-900 px-12 py-6 rounded-2xl font-black uppercase tracking-widest text-[11px] shadow-2xl flex items-center gap-4"
                       >
                         Download Certs <Sparkles size={16} className="text-blue-600" />
                       </motion.button>
                    </div>
                 </div>

                 <div className="grid grid-cols-2 gap-8">
                    {AWARDS.map((award, i) => (
                      <motion.div 
                        key={award.title}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-white/5 backdrop-blur-3xl border border-white/10 p-10 rounded-[45px] hover:bg-white/10 transition-all group/award"
                      >
                         <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-8 group-hover/award:scale-110 transition-transform">
                            <award.icon size={28} />
                         </div>
                         <h4 className="text-xl font-black text-white mb-4">{award.title}</h4>
                         <p className="text-sm text-slate-500 font-semibold leading-relaxed line-clamp-3">
                            {award.desc}
                         </p>
                      </motion.div>
                    ))}
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Join the Elite Circle CTA */}
      <section className="px-24">
         <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           className="bg-blue-600 rounded-[80px] p-24 text-center relative overflow-hidden group shadow-2xl"
         >
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
            
            <div className="relative z-10">
              <span className="text-blue-100 font-black tracking-[0.5em] uppercase text-[10px] mb-8 block">Exclusive Partnership</span>
              <h2 className="text-7xl font-[950] text-white tracking-tighter mb-12">
                Join the Elite <br />
                Circle of Brands.
              </h2>
              <p className="text-2xl text-blue-50 font-medium max-w-3xl mx-auto mb-16 leading-relaxed">
                Ready to elevate your brand identity with a partner that understands the demands of global retail? Let's start a conversation.
              </p>
              
              <div className="flex items-center justify-center gap-10">
                <motion.button
                  onClick={() => { document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); onBack(); }}
                  whileHover={{ scale: 1.05, y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-white text-blue-600 px-20 py-8 rounded-[30px] font-black uppercase tracking-[0.3em] text-sm shadow-2xl flex items-center gap-6"
                >
                  Start Project <ChevronRight size={20} />
                </motion.button>
              </div>
            </div>
         </motion.div>
      </section>

    </div>
  );
};

export default ClientsPage;
