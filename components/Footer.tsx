
import React from 'react';

interface FooterProps {
  setView: (view: 'home' | 'products' | 'about' | 'infrastructure' | 'clients' | 'contact') => void;
}

const Footer: React.FC<FooterProps> = ({ setView }) => {
  return (
    <footer className="bg-white border-t border-slate-100 px-16 py-12">
      <div className="flex justify-between items-start mb-12">
        <div className="max-w-xs">
          <div 
            onClick={() => { setView('home'); window.scrollTo(0, 0); }}
            className="flex items-center gap-2 mb-6 cursor-pointer"
          >
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold text-lg">R</div>
            <h2 className="text-lg font-black text-slate-900">RKS CREATIONS</h2>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            Leading manufacturer and exporter of premium labels, hang tags, and branded packaging solutions based in Bengaluru, India.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-20">
          <div>
            <h4 className="font-black text-slate-900 mb-6 uppercase tracking-widest text-xs">Solutions</h4>
            <ul className="space-y-4 text-sm text-slate-500 font-medium">
              <li onClick={() => setView('products')} className="hover:text-blue-600 cursor-pointer transition-colors">Woven Labels</li>
              <li onClick={() => setView('products')} className="hover:text-blue-600 cursor-pointer transition-colors">Hang Tags</li>
              <li onClick={() => setView('products')} className="hover:text-blue-600 cursor-pointer transition-colors">Packaging Boxes</li>
              <li onClick={() => setView('products')} className="hover:text-blue-600 cursor-pointer transition-colors">PU & Leather</li>
            </ul>
          </div>
          <div>
            <h4 className="font-black text-slate-900 mb-6 uppercase tracking-widest text-xs">Company</h4>
            <ul className="space-y-4 text-sm text-slate-500 font-medium">
              <li onClick={() => setView('about')} className="hover:text-blue-600 cursor-pointer transition-colors">About Us</li>
              <li onClick={() => setView('infrastructure')} className="hover:text-blue-600 cursor-pointer transition-colors">Infrastructure</li>
              <li onClick={() => setView('clients')} className="hover:text-blue-600 cursor-pointer transition-colors">Our Clients</li>
            </ul>
          </div>
          <div>
            <h4 className="font-black text-slate-900 mb-6 uppercase tracking-widest text-xs">Contact</h4>
            <ul className="space-y-4 text-sm text-slate-500 font-medium">
              <li>Bengaluru, KA</li>
              <li>+91 90363 33005</li>
              <li onClick={() => setView('contact')} className="hover:text-blue-600 cursor-pointer transition-colors">Get a Quote</li>
              <li onClick={() => setView('contact')} className="hover:text-blue-600 cursor-pointer transition-colors">Support</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="pt-8 border-t border-slate-100 flex justify-between items-center text-xs font-bold text-slate-400 uppercase tracking-widest">
        <p>© 2024 RKS Creations. All Rights Reserved.</p>
        <div className="flex gap-10">
          <span className="hover:text-blue-600 cursor-pointer">Privacy Policy</span>
          <span className="hover:text-blue-600 cursor-pointer">Terms of Service</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
