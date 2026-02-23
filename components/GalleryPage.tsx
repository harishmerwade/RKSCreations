
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// Fix: Added 'Sparkles' to the lucide-react import list
import { ArrowLeft, Maximize2, X, Download, MessageSquare, ChevronRight, Image as ImageIcon, Sparkles } from 'lucide-react';

interface GalleryItem {
  id: string;
  category: string;
  title: string;
  image: string;
  aspect: 'portrait' | 'landscape' | 'square';
}

const CATEGORIES = [
  'All Collections',
  'Hang Tags / Paper Tags',
  'Woven Labels',
  'Printed Labels',
  'PU Label',
  'Packaging',
  'Adhesive Labels',
  'Badges & Patches',
  'Belly Band & Inserts'
];

const GALLERY_DATA: GalleryItem[] = [
  // Hang Tags
  { id: 'ht1', category: 'Hang Tags / Paper Tags', title: 'Deep Embossed Ivory Tag', image: 'https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?auto=format&fit=crop&q=80&w=800', aspect: 'portrait' },
  { id: 'ht2', category: 'Hang Tags / Paper Tags', title: 'Gold Foil Stamped Kraft', image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800', aspect: 'square' },
  { id: 'ht3', category: 'Hang Tags / Paper Tags', title: 'Velvet Laminated Luxury', image: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=800', aspect: 'landscape' },
  
  // Woven Labels
  { id: 'wl1', category: 'Woven Labels', title: 'High Definition Damask', image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=800', aspect: 'landscape' },
  { id: 'wl2', category: 'Woven Labels', title: 'Soft Edge Satin Identity', image: 'https://images.unsplash.com/photo-1589939705384-5185138a04ad?auto=format&fit=crop&q=80&w=800', aspect: 'portrait' },
  
  // Printed Labels
  { id: 'pl1', category: 'Printed Labels', title: 'Multi-color Rotary Print', image: 'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&q=80&w=800', aspect: 'square' },
  { id: 'pl2', category: 'Printed Labels', title: 'Eco-Cotton Care Label', image: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&q=80&w=800', aspect: 'landscape' },

  // PU Labels
  { id: 'pu1', category: 'PU Label', title: 'Heat Debossed Vegan PU', image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800', aspect: 'portrait' },
  { id: 'pu2', category: 'PU Label', title: 'Vintage Distressed Leather', image: 'https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80&w=800', aspect: 'square' },

  // Packaging
  { id: 'pk1', category: 'Packaging', title: 'Magnetic Rigid Garment Box', image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=800', aspect: 'landscape' },
  { id: 'pk2', category: 'Packaging', title: 'Luxury Laminated Carry Bag', image: 'https://images.unsplash.com/photo-1586075010633-244519635c17?auto=format&fit=crop&q=80&w=800', aspect: 'portrait' },

  // Adhesive
  { id: 'ad1', category: 'Adhesive Labels', title: 'Holographic Security Seal', image: 'https://images.unsplash.com/photo-1603513335134-86d4d42065ec?auto=format&fit=crop&q=80&w=800', aspect: 'square' },
  
  // Badges
  { id: 'bp1', category: 'Badges & Patches', title: '3D High-Density Embroidery', image: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&q=80&w=800', aspect: 'portrait' },
  
  // Belly Bands
  { id: 'bb1', category: 'Belly Band & Inserts', title: 'Translucent Vellum Wrap', image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800', aspect: 'landscape' },
];

const GalleryPage: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [selectedCategory, setSelectedCategory] = useState('All Collections');
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const filteredItems = selectedCategory === 'All Collections' 
    ? GALLERY_DATA 
    : GALLERY_DATA.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white pb-40 selection:bg-blue-100 selection:text-blue-900">
      
      {/* Header & Category Bar */}
      <section className="pt-40 px-24">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div className="max-w-2xl">
              <motion.button
                onClick={onBack}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-2 text-blue-600 font-black uppercase tracking-[0.3em] text-[10px] mb-8 group"
              >
                <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform" /> Back to Brand
              </motion.button>
              <h1 className="text-[100px] font-[950] text-slate-900 leading-[0.85] tracking-tighter">
                Creative <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  Archives.
                </span>
              </h1>
            </div>
            <p className="max-w-xs text-slate-400 font-bold text-lg text-right leading-relaxed italic border-r-4 border-slate-100 pr-8 pb-4">
              "Visualizing the intersection of luxury materials and high-precision engineering."
            </p>
          </div>

          {/* Categorization System */}
          <div className="flex flex-wrap gap-4 mb-20">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-8 py-4 rounded-full text-[10px] font-[900] uppercase tracking-widest transition-all duration-500 border ${
                  selectedCategory === cat 
                    ? 'bg-slate-900 text-white border-slate-900 shadow-xl shadow-slate-200' 
                    : 'bg-white text-slate-400 border-slate-100 hover:border-blue-400 hover:text-blue-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="px-24">
        <div className="max-w-[1440px] mx-auto">
          <motion.div 
            layout
            className="columns-1 md:columns-2 lg:columns-3 gap-12 space-y-12"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  onClick={() => setLightboxItem(item)}
                  className="group relative bg-slate-50 rounded-[45px] overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-700"
                >
                  <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/40 transition-colors duration-700 z-10" />
                  
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-auto object-cover transition-transform duration-[4000ms] group-hover:scale-110" 
                  />

                  {/* Hover Overlay UI */}
                  <div className="absolute inset-0 p-10 flex flex-col justify-end z-20 opacity-0 group-hover:opacity-100 translate-y-8 group-hover:translate-y-0 transition-all duration-500">
                    <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.4em] mb-3">
                      {item.category}
                    </span>
                    <h3 className="text-2xl font-black text-white tracking-tight mb-6">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-white rounded-2xl flex items-center justify-center text-slate-900">
                        <Maximize2 size={18} />
                      </div>
                      <span className="text-white text-[9px] font-black uppercase tracking-widest">Enlarge View</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Empty State */}
      {filteredItems.length === 0 && (
        <div className="py-40 text-center">
           <ImageIcon className="mx-auto text-slate-100 mb-8" size={100} strokeWidth={0.5} />
           <p className="text-slate-400 font-bold text-xl uppercase tracking-widest">New Collections Loading...</p>
        </div>
      )}

      {/* Cinematic Lightbox Modal */}
      <AnimatePresence>
        {lightboxItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-24 bg-white/95 backdrop-blur-3xl"
          >
            <motion.button
              onClick={() => setLightboxItem(null)}
              className="absolute top-12 right-12 w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center text-slate-900 hover:bg-slate-900 hover:text-white transition-all z-[210]"
            >
              <X size={28} />
            </motion.button>

            <div className="max-w-[1440px] w-full grid grid-cols-2 gap-24 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                className="relative aspect-square bg-slate-50 rounded-[80px] overflow-hidden shadow-2xl border-[20px] border-white"
              >
                 <img src={lightboxItem.image} alt={lightboxItem.title} className="w-full h-full object-cover" />
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-12"
              >
                 <div>
                    <div className="flex items-center gap-5 mb-8">
                       <Sparkles size={20} className="text-blue-600" />
                       <span className="text-blue-600 font-[900] tracking-[0.5em] uppercase text-[11px]">Archival Quality Masterpiece</span>
                    </div>
                    <h2 className="text-7xl font-[950] text-slate-900 tracking-tighter leading-none mb-8">
                      {lightboxItem.title}
                    </h2>
                    <p className="text-[11px] font-black text-slate-300 uppercase tracking-[0.6em] mb-12 block">
                      Category — {lightboxItem.category}
                    </p>
                    <p className="text-2xl text-slate-400 font-medium leading-relaxed max-w-lg">
                      Every piece in our creative archive undergoes a rigorous multi-stage quality control process to ensure world-class consistency.
                    </p>
                 </div>

                 <div className="flex items-center gap-8 pt-6">
                    <motion.button
                      whileHover={{ scale: 1.05, y: -4 }}
                      className="bg-slate-900 text-white px-16 py-7 rounded-[30px] font-black uppercase tracking-[0.3em] text-sm shadow-2xl flex items-center gap-6"
                    >
                      Inquire Product <MessageSquare size={18} />
                    </motion.button>
                    <button className="flex items-center gap-3 text-slate-400 font-black uppercase tracking-[0.3em] text-[10px] hover:text-blue-600 transition-colors">
                      <Download size={16} /> Save Reference
                    </button>
                 </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Global CTA Footer */}
      <section className="mt-60 px-24">
         <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           className="bg-blue-600 rounded-[80px] p-24 text-center relative overflow-hidden group shadow-2xl"
         >
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
            
            <div className="relative z-10">
              <span className="text-blue-100 font-black tracking-[0.5em] uppercase text-[10px] mb-8 block">Custom Collaboration</span>
              <h2 className="text-7xl font-[950] text-white tracking-tighter mb-12">
                Have a Vision? <br />
                We Build It.
              </h2>
              <p className="text-2xl text-blue-50 font-medium max-w-3xl mx-auto mb-16 leading-relaxed">
                If you don't see exactly what you're looking for in our archives, our designers can create a bespoke solution from scratch.
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

export default GalleryPage;
