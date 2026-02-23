
import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Transformation from './components/Transformation';
import About from './components/About';
import Products from './components/Products';
import Clients from './components/Clients';
import WhyChoose from './components/WhyChoose';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProductsPage from './components/ProductsPage';
import AboutPage from './components/AboutPage';
import InfrastructurePage from './components/InfrastructurePage';
import ClientsPage from './components/ClientsPage';
import ContactPage from './components/ContactPage';

/**
 * ResponsiveScaler: Implements the "Strict Responsive Rule"
 * Ensures the layout remains IDENTICAL across all devices.
 * 
 * CRITICAL FIX: Uses offsetHeight instead of getBoundingClientRect 
 * to measure the layout before scaling. This ensures the parent height 
 * matches the visual scaled result perfectly, eliminating blank space 
 * and allowing full scrolling to the footer.
 */
const ResponsiveScaler: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [scale, setScale] = useState(1);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const baseWidth = 1440;

  useEffect(() => {
    const handleResize = () => {
      const currentWidth = window.innerWidth;
      setScale(currentWidth / baseWidth);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    // Use ResizeObserver to detect changes in the 1440px container's height
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        // Use offsetHeight or scrollHeight to get the UN-TRANSFORMED layout height.
        // getBoundingClientRect returns the scaled height, which leads to 
        // incorrect double-scaling of the parent height.
        if (contentRef.current) {
          setContentHeight(contentRef.current.offsetHeight);
        }
      }
    });

    if (contentRef.current) {
      resizeObserver.observe(contentRef.current);
      // Initial measurement
      setContentHeight(contentRef.current.offsetHeight);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      resizeObserver.disconnect();
    };
  }, []);

  // Strict Responsive Rule: 
  // On non-desktop devices (scale < 1), we constrain the parent height 
  // to exactly the scaled content height to remove blank space.
  const parentStyle: React.CSSProperties = {
    width: '100vw',
    minHeight: '100vh',
    // Crop excess space when scaling
    height: scale >= 1 ? 'auto' : `${contentHeight * scale}px`,
    overflowX: 'hidden',
    overflowY: scale >= 1 ? 'visible' : 'hidden', // 'hidden' is robust for document-level cropping
    position: 'relative'
  };

  return (
    <div className="flex flex-col items-center bg-slate-50" style={parentStyle}>
      <div 
        className="origin-top transition-transform duration-100 ease-out"
        style={{ 
          transform: `scale(${scale})`, 
          width: `${baseWidth}px`,
        }}
      >
        {/* The 'BG' (1440px box) */}
        <div 
          ref={contentRef}
          className="w-[1440px] bg-white shadow-2xl relative min-h-screen flex flex-col"
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export const VIEWS = ['home' , 'products' , 'about' , 'infrastructure' , 'clients' , 'contact'] as const;
export type ViewType = typeof VIEWS[number];

const App: React.FC = () => {
  const [view, setView] = useState<ViewType>('home');
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const whatsappNumber = '919036333005';
  const whatsappText = encodeURIComponent('Hello RKS Creations, I would like to know more about your products.');
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappText}`;
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  const handleProductSelect = (id: string) => {
    setSelectedProductId(id);
    setView('products');
  };

  const handleBackToHome = () => {
    setView('home');
    setSelectedProductId(null);
  };

  return (
    <>
      <ResponsiveScaler>
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-blue-600 origin-left z-[110]"
          style={{ scaleX }}
        />
        
        <Header setView={setView} currentView={view} />
        
        <div className="desktop-reduction-wrapper flex-grow">
          <AnimatePresence mode="wait">
            {view === 'home' ? (
              <motion.div
                key="home"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Hero setView={setView} />
                <Products onSelect={handleProductSelect} setView={setView} />
                <Transformation setView={setView} />
                <About setView={setView} />
                <Clients />
                <WhyChoose setView={setView} />
                <Contact />
              </motion.div>
            ) : view === 'products' ? (
              <motion.div
                key="products"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <ProductsPage 
                  initialProductId={selectedProductId} 
                  onBack={handleBackToHome} 
                />
              </motion.div>
            ) : view === 'infrastructure' ? (
              <motion.div
                key="infrastructure"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <InfrastructurePage onBack={handleBackToHome} />
              </motion.div>
            ) : view === 'about' ? (
              <motion.div
                key="about"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <AboutPage onBack={handleBackToHome} setView={setView} />
              </motion.div>
            ) : view === 'clients' ? (
              <motion.div
                key="clients"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <ClientsPage onBack={handleBackToHome} />
              </motion.div>
            ) : (
              <motion.div
                key="contact"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <ContactPage onBack={handleBackToHome} />
              </motion.div>
            )}
          </AnimatePresence>
          
          <Footer setView={setView} />
        </div>
      </ResponsiveScaler>

      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-[220] bg-[#25D366] text-white rounded-full shadow-2xl px-5 py-4 md:px-6 md:py-4 flex items-center gap-3 hover:brightness-95 transition-all"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M20.52 3.48A11.78 11.78 0 0012.06 0C5.54 0 .25 5.29.25 11.81c0 2.08.54 4.11 1.58 5.9L0 24l6.5-1.7a11.8 11.8 0 005.56 1.42h.01c6.52 0 11.81-5.29 11.81-11.81 0-3.15-1.23-6.11-3.36-8.43zm-8.46 18.25h-.01a9.8 9.8 0 01-4.99-1.36l-.36-.21-3.86 1 1.03-3.76-.23-.39a9.8 9.8 0 01-1.5-5.2C2.14 6.45 6.7 1.9 12.06 1.9c2.62 0 5.08 1.02 6.93 2.87a9.73 9.73 0 012.87 6.94c0 5.36-4.56 10.02-9.8 10.02zm5.38-7.36c-.29-.15-1.7-.84-1.96-.94-.26-.09-.45-.14-.65.15-.19.29-.74.94-.91 1.13-.17.19-.34.22-.63.07-.29-.15-1.22-.45-2.32-1.44-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.44.13-.59.13-.13.29-.34.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.65-1.56-.89-2.13-.23-.56-.46-.49-.65-.5h-.55c-.19 0-.51.07-.78.36-.27.29-1.03 1.01-1.03 2.46s1.05 2.85 1.2 3.05c.15.19 2.04 3.11 4.95 4.37.69.3 1.23.48 1.65.61.69.22 1.32.19 1.82.12.56-.08 1.7-.7 1.94-1.38.24-.68.24-1.26.17-1.38-.07-.12-.26-.19-.55-.34z" />
        </svg>
        <span className="hidden sm:inline text-sm md:text-base font-black tracking-wide">WhatsApp</span>
      </a>
    </>
  );
};

export default App;
