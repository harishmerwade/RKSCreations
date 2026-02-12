
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';

interface ProductCardProps {
  id: string;
  title: string;
  desc: string;
  image: string;
  tag: string;
  onSelect: (id: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, title, desc, image, tag, onSelect }) => {
  return (
    <motion.div
      onClick={() => onSelect(id)}
      whileHover={{ y: -20 }}
      transition={{ type: 'spring', stiffness: 200 }}
      className="group relative aspect-[4/5] bg-white rounded-[50px] overflow-hidden shadow-xl border border-slate-50 cursor-pointer"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/10 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-90"></div>
      <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
      
      <div className="absolute inset-0 p-12 z-20 flex flex-col justify-end">
        <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.4em] mb-4 flex items-center gap-2">
           <Sparkles size={12} /> {tag}
        </span>
        <h3 className="text-3xl font-black text-white mb-4 leading-tight">{title}</h3>
        <p className="text-base text-white/60 font-medium opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-8 group-hover:translate-y-0 leading-relaxed">
          {desc}
        </p>
        <div className="mt-8 flex items-center gap-4">
           <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-slate-900 group-hover:bg-blue-600 group-hover:text-white transition-all">
             <ArrowUpRight size={24} />
           </div>
           <span className="text-white text-xs font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Request Detail View</span>
        </div>
      </div>
      
      {/* Gloss effect */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
    </motion.div>
  );
};

interface ProductsProps {
  setView: (view: 'home' | 'products') => void;
  onSelect: (id: string) => void;
}

const Products: React.FC<ProductsProps> = ({ setView, onSelect }) => {
  const products = [
    { 
      id: 'hangtags',
      title: 'Luxury Hang Tags', 
      desc: 'Heavyweight cards with premium foil, embossing, and spot-UV finishes.', 
      tag: 'Print Craft',
      image: 'https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?auto=format&fit=crop&q=80&w=800' 
    },
    { 
      id: 'woven',
      title: 'HD Woven Labels', 
      desc: 'High-definition weaving for extreme detail and soft touch identity.', 
      tag: 'Textile',
      image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=800' 
    },
    { 
      id: 'pu-labels',
      title: 'PU & Synthetic Leather', 
      desc: 'Custom debossed patches for denim and premium outer-wear brands.', 
      tag: 'Material',
      image: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=800' 
    }
  ];

  return (
    <section id="products" className="py-32 px-20 bg-white">
      <div className="flex justify-between items-end mb-24">
        <div className="max-w-xl">
          <span className="text-blue-600 font-black tracking-[0.4em] uppercase text-xs block mb-6">Our Portfolio</span>
          <h2 className="text-6xl font-[900] text-slate-900 tracking-tighter leading-tight">Masterpieces <br /> of Brand Craft.</h2>
        </div>
        <motion.button 
          onClick={() => setView('products')}
          whileHover={{ x: 10 }}
          className="text-slate-400 font-black uppercase tracking-[0.3em] text-[10px] flex items-center gap-4 hover:text-blue-600 transition-colors"
        >
          View Complete Catalog <ArrowUpRight size={18} />
        </motion.button>
      </div>

      <div className="grid grid-cols-3 gap-12">
        {products.map((p, i) => (
          <ProductCard 
            key={i} 
            id={p.id}
            title={p.title}
            desc={p.desc}
            image={p.image}
            tag={p.tag}
            onSelect={onSelect} 
          />
        ))}
      </div>
    </section>
  );
};

export default Products;
