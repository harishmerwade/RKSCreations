
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
import GalleryPage from './components/GalleryPage';
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

export const VIEWS = ['home' , 'products' , 'about' , 'infrastructure' , 'gallery' , 'clients' , 'contact'] as const;
export type ViewType = typeof VIEWS[number];

const App: React.FC = () => {
  const [view, setView] = useState<ViewType>('home');
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  
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
          ) : view === 'gallery' ? (
            <motion.div
              key="gallery"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <GalleryPage onBack={handleBackToHome} />
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
  );
};

export default App;
