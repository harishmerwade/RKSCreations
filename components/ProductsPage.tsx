
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  Sparkles, 
  MoveRight, 
  Layers, 
  Ruler, 
  Palette, 
  ShoppingCart, 
  CheckCircle2, 
  Layout, 
  Printer, 
  ShieldCheck, 
  CreditCard, 
  Leaf, 
  Clock,
  ExternalLink,
  MessageSquare
} from 'lucide-react';

// --- Animated Icon Components for "Premium Features" ---

const AnimatedFeatureIcon = ({ type, isHovered }: { type: string, isHovered: boolean }) => {
  const iconBaseClass = "transition-colors duration-500 " + (isHovered ? "text-white" : "text-blue-600");
  
  switch (type) {
    case 'customizable':
      return (
        <div className="relative">
          <motion.div
            animate={isHovered ? { rotate: [0, 90, 0], scale: [1, 1.2, 1] } : {}}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <Layout className={iconBaseClass} size={32} />
          </motion.div>
          {isHovered && (
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="absolute -top-1 -right-1 w-2 h-2 bg-blue-400 rounded-full"
            />
          )}
        </div>
      );
    case 'high-res':
      return (
        <div className="relative overflow-hidden">
          <Printer className={iconBaseClass} size={32} />
          <motion.div
            className="absolute top-0 left-0 w-full h-[2px] bg-blue-400"
            animate={{ top: ['0%', '100%', '0%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
        </div>
      );
    case 'durable':
      return (
        <motion.div
          animate={isHovered ? { scale: [1, 1.1, 1] } : {}}
          transition={{ duration: 0.8, repeat: Infinity }}
        >
          <ShieldCheck className={iconBaseClass} size={32} />
        </motion.div>
      );
    case 'cost':
      return (
        <div className="relative">
          <CreditCard className={iconBaseClass} size={32} />
          {isHovered && (
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent w-full h-full"
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          )}
        </div>
      );
    case 'eco':
      return (
        <motion.div
          animate={isHovered ? { rotate: [0, 15, -15, 0] } : {}}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Leaf className={iconBaseClass} size={32} />
        </motion.div>
      );
    case 'turnaround':
      return (
        <div className="relative">
          <Clock className={iconBaseClass} size={32} />
          <motion.div
            className="absolute top-1/2 left-1/2 w-[1px] h-3 bg-current origin-bottom"
            style={{ x: '-50%', y: '-100%' }}
            animate={isHovered ? { rotate: 360 } : {}}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
        </div>
      );
    default:
      return <Sparkles className={iconBaseClass} size={32} />;
  }
};

interface ProductFeature {
  id: string;
  title: string;
  description: string;
  type: string;
}

interface Product {
  id: string;
  title: string;
  tagline?: string;
  secondaryTagline?: string;
  mainImage: string;
  gallery: string[];
  description: string;
  richDescription?: string;
  materials: string[];
  finishing: string[];
  customization: string[];
  applications: string[];
  features?: ProductFeature[];
}

const PRODUCTS: Product[] = [
  {
    id: 'hangtags',
    title: 'Hangtags / Paper Tags',
    tagline: 'Elevate Your Brand with Premium Hangtags and Paper Tags',
    secondaryTagline: 'Crafted for Elegance, Designed to Impress',
    mainImage: 'https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=600'
    ],
    description: 'Our premium hangtags are engineered to define luxury. Using heavyweight FSC-certified papers, we create tactile experiences that bridge the gap between garments and brand stories.',
    richDescription: 'At RKS Creations, we specialize in creating high-quality paper tags that blend functionality with aesthetic appeal. From chic retail tags to durable tags for industrial use, our designs enhance your brand’s identity while providing essential product information. Made with premium materials and attention to detail, our paper tags cater to various industries, including fashion, accessories, and home goods. Elevate your products with paper tags that leave a lasting impression on your customers.',
    materials: ['High-GSM Ivory Board', 'Textured Kraft Paper', 'Eco-friendly GRS Recycled Paper', 'Vellum Translucents'],
    finishing: ['Gold & Silver Foil Stamping', 'Deep Embossing/Debossing', 'High-Gloss Spot UV', 'Soft-touch Velvet Lamination'],
    customization: ['Custom Die-cutting', 'Eyelet Reinforcement', 'Bespoke Strings & Seals', 'Variable Data Printing'],
    applications: ['Luxury Apparel', 'Premium Footwear', 'High-end Accessories', 'Designer Boutique Packaging'],
    features: [
      { id: 'feat1', type: 'customizable', title: 'Customizable Designs', description: 'Tailor your paper tags to reflect your brand’s unique identity with bespoke shapes, sizes, and finishes.' },
      { id: 'feat2', type: 'high-res', title: 'High-Resolution Printing', description: 'Experience sharp, vibrant prints that bring your designs to life and make your tags stand out.' },
      { id: 'feat3', type: 'durable', title: 'Durable Materials', description: 'Crafted from top-quality paper, our tags are designed to withstand wear and tear, ensuring longevity.' },
      { id: 'feat4', type: 'cost', title: 'Cost-Effective', description: 'Get premium paper tags at competitive prices without compromising on quality.' },
      { id: 'feat5', type: 'eco', title: 'Eco-Friendly Options', description: 'Choose from sustainable materials and processes to align with your brand\'s commitment to the environment.' },
      { id: 'feat6', type: 'turnaround', title: 'Quick Turnaround', description: 'We value your time! Enjoy fast production and on-time delivery for all your orders.' }
    ]
  },
  {
    id: 'woven',
    title: 'Woven Labels',
    tagline: 'Woven Labels That Showcase Quality and Detail',
    secondaryTagline: 'Precision Woven, Perfectly Crafted',
    mainImage: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1589939705384-5185138a04ad?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600'
    ],
    description: 'High-definition woven labels crafted with Swiss-precision. We specialize in damask, satin, and taffeta weaves that maintain sharpness and skin-soft comfort even after 100+ washes.',
    richDescription: 'RKS Creations specializes in high-quality woven labels that combine exceptional durability with intricate detailing. Ideal for apparel, accessories, and home goods, our woven labels offer a premium look and feel, ensuring your brand’s logo and information are displayed with clarity and elegance. Made from superior threads, they are designed to last, withstanding multiple washes and everyday wear.',
    materials: ['Fine Damask Thread', 'Premium Satin Silk', 'Recycled Polyester Yarn', 'Organic Cotton Fibers'],
    finishing: ['Ultrasonic Soft Edge Cut', 'Heat-seal Backing', 'Pressure-sensitive Adhesive', 'Starch-stiffened Finish'],
    customization: ['Center Fold / End Fold', 'Loop Fold', 'Mitre Fold', 'Laser-cut Complex Shapes'],
    applications: ['Outerwear Branding', 'Main Identity Labels', 'Size & Composition Tabs', 'Designer Collectibles'],
    features: [
      { id: 'wfeat1', type: 'customizable', title: 'Customizable Designs', description: 'Tailored to reflect your brand’s unique identity and messaging.' },
      { id: 'wfeat2', type: 'high-res', title: 'High-Resolution Printing', description: 'Sharp, clear, and vibrant graphics for a professional finish.' },
      { id: 'wfeat3', type: 'durable', title: 'Durable Materials', description: 'Resistant to fading, moisture, and wear, ensuring long-lasting performance.' },
      { id: 'wfeat4', type: 'cost', title: 'Cost-Effective', description: 'Affordable pricing without sacrificing the quality or precision of your labels.' },
      { id: 'wfeat5', type: 'eco', title: 'Eco-Friendly Options', description: 'Sustainable materials and eco-friendly printing for conscious brands.' },
      { id: 'wfeat6', type: 'turnaround', title: 'Quick Turnaround', description: 'Efficient production times to meet your deadlines without compromising quality.' }
    ]
  },
  {
    id: 'printed',
    title: 'Printed Labels',
    tagline: 'High-Quality Printed Labels for Every Need',
    secondaryTagline: 'Precision, Durability, and Customization for Your Brand',
    mainImage: 'https://images.unsplash.com/photo-1589939705384-5185138a04ad?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=600'
    ],
    description: 'Exceptional clarity for care instructions and branding. Our rotary and screen printing technology ensures wash-fastness and vibrant color reproduction on all materials.',
    richDescription: 'We specialize in premium printed labels for various industries, crafted with precision for exceptional clarity, vibrant colors, and durability. We offer cotton, decorative, embroidered, and custom die-cut labels in diverse shapes, adding beauty and boosting brand value. At RKS, every print is a fusion of technology and art, designed to endure and inspire.',
    materials: ['Premium Polyester Satin', 'Natural Cotton Twill', 'Nylon Taffeta', 'Sustainable Tyvek®'],
    finishing: ['Double-Sided Printing', 'Neon & Metallic Inks', 'Cold-cut Precision Edges', 'Bio-enzyme Wash Treatment'],
    customization: ['Bespoke Die-cut Shapes', 'Variable Data Printing', 'Thermal Transfer Compatibility', 'Multi-color Screen Prints'],
    applications: ['Brand Neck Tapes', 'Care & Content Instruction', 'Side Seam Identification', 'Children\'s Apparel Labels'],
    features: [
      { id: 'pfeat1', type: 'customizable', title: 'Customizable Designs', description: 'Tailored to reflect your brand’s unique identity and messaging.' },
      { id: 'pfeat2', type: 'high-res', title: 'High-Resolution Printing', description: 'Sharp, clear, and vibrant graphics for a professional finish.' },
      { id: 'pfeat3', type: 'durable', title: 'Durable Materials', description: 'Resistant to fading, moisture, and wear, ensuring long-lasting performance.' },
      { id: 'pfeat4', type: 'cost', title: 'Cost-Effective', description: 'Affordable pricing without sacrificing the quality or precision of your labels.' },
      { id: 'pfeat5', type: 'eco', title: 'Eco-Friendly Options', description: 'Sustainable materials and eco-friendly printing for conscious brands.' },
      { id: 'pfeat6', type: 'turnaround', title: 'Quick Turnaround', description: 'Efficient production times to meet your deadlines without compromising quality.' }
    ]
  },
  {
    id: 'pu-labels',
    title: 'PU & Synthetic Labels',
    tagline: 'PU Labels That Define Durability and Style',
    secondaryTagline: 'Where Functionality Meets Fashion',
    mainImage: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1589939705384-5185138a04ad?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600'
    ],
    description: 'The rugged alternative for premium outerwear. Our custom-engineered PU and synthetic leathers provide the look of heritage material with modern durability.',
    richDescription: 'RKS Creations offers premium PU labels that combine durability with a sophisticated look, perfect for elevating your brand\'s image. Whether for apparel, accessories, or home textiles, our PU labels are crafted with precision to deliver a smooth finish and long-lasting performance. Resistant to wear and tear, these labels are ideal for showcasing your logo or product details with clarity and style. Choose RKS Creations for PU labels that stand the test of time while adding a touch of elegance to your products.',
    materials: ['Vegan PU Leather', 'Synthetic Microfiber', 'Suede-touch Polymers', 'Recycled Leather Scraps'],
    finishing: ['Deep Heat Debossing', 'Color-matched Infill', 'Distressed Vintage Look', 'Laser-etched Details'],
    customization: ['Stitch-ready Channels', 'Adhesive Backing', 'Perforated Patterns', 'Multi-layer Construction'],
    applications: ['Denim Back-patches', 'Luxury Handbags', 'Industrial Apparel', 'Footwear Accents'],
    features: [
      { id: 'pufeat1', type: 'customizable', title: 'Customizable Designs', description: 'Create PU labels that perfectly represent your brand with tailored shapes, sizes, and finishes.' },
      { id: 'pufeat2', type: 'high-res', title: 'High-Resolution Printing', description: 'Enjoy crisp and detailed designs that make your logo or text stand out beautifully.' },
      { id: 'pufeat3', type: 'durable', title: 'Durable Materials', description: 'Our PU labels are made to last, offering excellent resistance to wear, washing, and fading.' },
      { id: 'pufeat4', type: 'cost', title: 'Cost-Effective', description: 'Get exceptional quality PU labels at prices that fit your budget.' },
      { id: 'pufeat5', type: 'eco', title: 'Eco-Friendly Options', description: 'Opt for sustainable PU materials to align with your brand’s environmental goals.' },
      { id: 'pufeat6', type: 'turnaround', title: 'Quick Turnaround', description: 'Fast production and reliable delivery ensure you meet your timelines with ease.' }
    ]
  },
  {
    id: 'packaging',
    title: 'Packaging & Garment Box',
    tagline: 'Packaging Solutions That Elevate Your Brand',
    secondaryTagline: 'Innovative, Protective, and Stunningly Designed',
    mainImage: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600'
    ],
    description: 'Transform the point of delivery into a ritual. Our rigid boxes and custom bags are designed for high structural integrity and world-class aesthetics.',
    richDescription: 'At RKS Creations, we provide innovative and reliable packaging solutions that not only protect your products but also enhance your brand’s presentation. Whether it’s for retail, e-commerce, or industrial products, our packaging is designed to stand out with custom prints, premium materials, and practical functionality. We understand the importance of both visual appeal and durability, ensuring your products arrive safely and make a lasting impression.',
    materials: ['Rigid Grey Board', 'Art Paper Overlays', 'Sustainable Corrugated Fiber', 'Silk & Ribbon Details'],
    finishing: ['Magnetic Closures', 'Gold/Silver Edge Foil', 'Internal Velvet Flocking', 'Matte/Gloss Finish'],
    customization: ['Bespoke Structural Design', 'Custom Molded Inserts', 'Branded Tissue Paper', 'Wax Seal Accents'],
    applications: ['Luxury Gifting', 'Corporate Onboarding', 'Boutique Retail', 'E-commerce Masterboxes'],
    features: [
      { id: 'packfeat1', type: 'customizable', title: 'Customizable Designs', description: 'Tailored to reflect your brand’s unique identity and messaging.' },
      { id: 'packfeat2', type: 'high-res', title: 'High-Resolution Printing', description: 'Sharp, clear, and vibrant graphics for a professional finish.' },
      { id: 'packfeat3', type: 'durable', title: 'Durable Materials', description: 'Resistant to fading, moisture, and wear, ensuring long-lasting performance.' },
      { id: 'packfeat4', type: 'cost', title: 'Cost-Effective', description: 'Affordable pricing without sacrificing the quality or precision of your labels.' },
      { id: 'packfeat5', type: 'eco', title: 'Eco-Friendly Options', description: 'Sustainable materials and eco-friendly printing for conscious brands.' },
      { id: 'packfeat6', type: 'turnaround', title: 'Quick Turnaround', description: 'Efficient production times to meet your deadlines without compromising quality.' }
    ]
  },
  {
    id: 'adhesive',
    title: 'Adhesive Labels',
    tagline: 'Adhesive Labels That Stick with Style',
    secondaryTagline: 'Reliable, Versatile, and Effortlessly Effective',
    mainImage: 'https://images.unsplash.com/photo-1603513335134-86d4d42065ec?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1589939705384-5185138a04ad?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=600'
    ],
    description: 'Precision-cut branding that sticks. From barcodes to premium holographic seals, our adhesives are tested for extreme temperature and surface durability.',
    richDescription: 'RKS Creations offers premium self-adhesive labels designed for convenience, versatility, and long-lasting adhesion. Whether for packaging, retail, or product labeling, our self-adhesive labels ensure a secure fit on various surfaces, providing a clean and professional look. With high-quality materials and vibrant prints, they make your brand’s information easy to read and visually appealing. Perfect for businesses that value efficiency, our self-adhesive labels offer quick application without compromising on quality.',
    materials: ['Thermal Chrome Paper', 'Transparent PE/BOPP', 'Holographic Anti-counterfeit Foil', 'Silver/Gold Polyester'],
    finishing: ['Water-resistant Varnish', 'UV-protection Coating', 'Easy-peel Adhesive', 'Industrial-strength Glue'],
    customization: ['Circular & Square Die-cuts', 'Roll or Sheet Format', 'Security Tamper-evident Cuts', 'Branded Backing Paper'],
    applications: ['Inventory Control', 'Security Seals', 'Promotional Branding', 'Product Specification Tabs'],
    features: [
      { id: 'adhfeat1', type: 'customizable', title: 'Customizable Designs', description: 'Tailored to reflect your brand’s unique identity and messaging.' },
      { id: 'adhfeat2', type: 'high-res', title: 'High-Resolution Printing', description: 'Sharp, clear, and vibrant graphics for a professional finish.' },
      { id: 'adhfeat3', type: 'durable', title: 'Durable Materials', description: 'Resistant to fading, moisture, and wear, ensuring long-lasting performance.' },
      { id: 'adhfeat4', type: 'cost', title: 'Cost-Effective', description: 'Affordable pricing without sacrificing the quality or precision of your labels.' },
      { id: 'adhfeat5', type: 'eco', title: 'Eco-Friendly Options', description: 'Sustainable materials and eco-friendly printing for conscious brands.' },
      { id: 'adhfeat6', type: 'turnaround', title: 'Quick Turnaround', description: 'Efficient production times to meet your deadlines without compromising quality.' }
    ]
  },
  {
    id: 'badges',
    title: 'Badges & Patches',
    tagline: 'Badges & Patches That Embody Craftsmanship and Style',
    secondaryTagline: 'Expertly Designed, Perfectly Made',
    mainImage: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600'
    ],
    description: 'Three-dimensional identity for your garments. We create high-density embroidery, PVC, and silicone patches that command attention.',
    richDescription: 'RKS Creations specializes in premium badges and patches that blend exceptional durability with intricate craftsmanship. Ideal for uniforms, apparel, bags, and accessories, our badges and patches provide a professional and stylish touch to represent your brand or organization. Made from high-quality materials, they are designed to last, resisting wear and tear while maintaining their vibrant colors and detailed designs.',
    materials: ['Silicon/Rubber Polymers', 'Embroidered Textile Bases', '3D Soft PVC', 'Felt & Chenille'],
    finishing: ['Merrowed Edges', 'Velcro Backing', 'Iron-on Adhesive', 'Magnetic Attachments'],
    customization: ['Multi-color Layering', 'Glow-in-the-dark Pigments', 'Photographic Print Hybrid', 'Reflective Finish'],
    applications: ['Streetwear Graphics', 'Military & Uniform Badges', 'Sports Team Identity', 'Limited Edition Caps'],
    features: [
      { id: 'badgefeat1', type: 'customizable', title: 'Customizable Designs', description: 'Create badges and patches tailored to your unique style, with endless options for colors, shapes, and sizes.' },
      { id: 'badgefeat2', type: 'high-res', title: 'High-Resolution Printing', description: 'Experience crisp, vibrant designs with our state-of-the-art printing technology for unmatched clarity.' },
      { id: 'badgefeat3', type: 'durable', title: 'Durable Materials', description: 'Crafted with premium materials to ensure long-lasting wear and tear resistance.' },
      { id: 'badgefeat4', type: 'cost', title: 'Cost-Effective', description: 'Get exceptional quality without exceeding your budget, perfect for businesses of all sizes.' },
      { id: 'badgefeat5', type: 'eco', title: 'Eco-Friendly Options', description: 'Choose sustainable materials and processes that are kind to the planet.' },
      { id: 'badgefeat6', type: 'turnaround', title: 'Quick Turnaround', description: 'Enjoy fast production and delivery to meet tight deadlines without compromising quality.' }
    ]
  },
  {
    id: 'belly-bands',
    title: 'Belly Band & Inserts',
    tagline: 'Belly Bands & Inserts That Elevate Presentation',
    secondaryTagline: 'Meticulously Designed, Perfectly Finished',
    mainImage: 'https://images.unsplash.com/photo-1586075010633-244519635c17?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600'
    ],
    description: 'The elegant finish for packaged garments. Our belly bands and story cards provide essential space for brand narratives and product specifications.',
    richDescription: 'RKS Creations specializes in premium belly bands and inserts that combine exceptional durability with refined detailing. Ideal for packaging apparel, accessories, and gift items, our belly bands and inserts offer a sophisticated and professional look, ensuring your brand’s identity and messaging stand out. Made from high-quality materials, they are designed to endure handling while maintaining their shape and elegance, adding value to your products.',
    materials: ['Linen Textured Paper', 'Recycled Cardstock', 'Semi-transparent Vellum', 'Synthetic Silk Ribbon'],
    finishing: ['Spot UV Accents', 'Custom Creasing', 'Die-cut Windows', 'Eco-friendly Vegetable Inks'],
    customization: ['Variable Widths', 'Adhesive Tape Integration', 'QR Code Printing', 'Hand-calligraphy Options'],
    applications: ['Shirt & Linen Packaging', 'Box Wrap Branding', 'Product Information Leaflets', 'Subscription Box Inserts'],
    features: [
      { id: 'bellyfeat1', type: 'customizable', title: 'Customizable Designs', description: 'Tailor belly bands and inserts to match your brand with endless design possibilities, including sizes, colors, and finishes.' },
      { id: 'bellyfeat2', type: 'high-res', title: 'High-Resolution Printing', description: 'Showcase sharp, vibrant designs and text with our advanced printing techniques for a premium look.' },
      { id: 'bellyfeat3', type: 'durable', title: 'Durable Materials', description: 'Crafted with sturdy materials to maintain their form and appeal during handling and storage.' },
      { id: 'bellyfeat4', type: 'cost', title: 'Cost-Effective', description: 'Achieve high-quality packaging solutions without exceeding your budget.' },
      { id: 'bellyfeat5', type: 'eco', title: 'Eco-Friendly Options', description: 'Opt for sustainable materials to create packaging that’s stylish and environmentally responsible.' },
      { id: 'bellyfeat6', type: 'turnaround', title: 'Quick Turnaround', description: 'Benefit from fast production and delivery timelines to meet your business needs efficiently.' }
    ]
  }
];

interface ProductsPageProps {
  onBack: () => void;
  initialProductId: string | null;
}

const ProductsPage: React.FC<ProductsPageProps> = ({ onBack, initialProductId }) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null);

  useEffect(() => {
    if (initialProductId) {
      const product = PRODUCTS.find(p => p.id === initialProductId);
      if (product) {
        setSelectedProduct(product);
      }
    }
  }, [initialProductId]);

  return (
    <div className="min-h-screen bg-white pb-32">
      <AnimatePresence mode="wait">
        {!selectedProduct ? (
          <motion.div
            key="grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pt-40 px-24"
          >
            {/* Header Area */}
            <div className="flex justify-between items-end mb-24">
              <div className="max-w-2xl">
                <motion.button
                  onClick={onBack}
                  className="flex items-center gap-2 text-blue-600 font-black uppercase tracking-[0.3em] text-[10px] mb-8 hover:translate-x-[-8px] transition-transform"
                >
                  <ArrowLeft size={16} /> Back to Home
                </motion.button>
                <h1 className="text-[100px] font-[950] text-slate-900 leading-[0.85] tracking-tighter">
                  Our Products <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                    Portfolio.
                  </span>
                </h1>
              </div>
              <p className="max-w-xs text-slate-400 font-bold text-lg text-right leading-relaxed italic border-r-4 border-slate-100 pr-8 pb-4">
                "Excellence in every fiber. Explore our range of premium branding and packaging solutions."
              </p>
            </div>

            {/* Grid Layout */}
            <div className="grid grid-cols-3 md:grid-cols-4 gap-10">
              {PRODUCTS.map((product, idx) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  whileHover={{ y: -15, transition: { duration: 0.4 } }}
                  onClick={() => {
                    setSelectedProduct(product);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="group cursor-pointer flex flex-col gap-6"
                >
                  <div className="aspect-[14/15] bg-slate-100 rounded-[50px] overflow-hidden relative shadow-lg group-hover:shadow-2xl transition-all duration-500">
                    <img
                      src={product.mainImage}
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-10 left-10 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                      <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-xl">
                        <MoveRight size={20} />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 tracking-tight pl-2">
                    {product.title}
                  </h3>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="detail"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="pt-40 pb-20 max-w-[1440px] mx-auto"
          >
            {/* Navigation Options */}
            <div className="flex items-center justify-between mb-16 px-24">
              <motion.button
                onClick={() => setSelectedProduct(null)}
                className="flex items-center gap-3 text-slate-400 font-black uppercase tracking-[0.4em] text-[10px] group hover:text-blue-600 transition-colors"
              >
                <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform" /> 
                Back to Catalog
              </motion.button>
              
              <motion.button
                onClick={onBack}
                className="text-blue-600 font-black uppercase tracking-[0.4em] text-[10px] hover:underline"
              >
                Exit to Home
              </motion.button>
            </div>

            {/* Product Hero */}
            <div className="grid grid-cols-2 gap-24 items-start mb-32 px-24">
              <div className="space-y-12">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                  <div className="flex items-center gap-4 mb-8">
                    <Sparkles size={20} className="text-blue-600" />
                    <span className="text-blue-600 font-[900] tracking-[0.6em] uppercase text-[11px]">
                      Premium Specification
                    </span>
                  </div>
                  
                  {selectedProduct.tagline ? (
                    <h2 className="text-3xl font-black text-blue-600 tracking-tight mb-4 leading-tight">
                      {selectedProduct.tagline}
                    </h2>
                  ) : null}

                  <h1 className="text-8xl font-[950] text-slate-900 leading-[0.9] tracking-tighter mb-10">
                    {selectedProduct.title}
                  </h1>

                  {selectedProduct.secondaryTagline ? (
                    <p className="text-3xl font-black text-slate-900 mb-8 tracking-tight">
                      {selectedProduct.secondaryTagline}
                    </p>
                  ) : null}

                  <p className="text-2xl text-slate-400 font-medium leading-relaxed italic border-l-4 border-blue-600 pl-8">
                    "{selectedProduct.richDescription || selectedProduct.description}"
                  </p>
                </motion.div>

                <div className="grid grid-cols-2 gap-10">
                   <div className="bg-slate-50 p-8 rounded-[40px] border border-slate-100">
                      <Layers className="text-blue-600 mb-6" size={32} strokeWidth={1.5} />
                      <h4 className="text-xs font-black uppercase text-slate-300 tracking-[0.3em] mb-4">Materials</h4>
                      <ul className="space-y-3">
                        {selectedProduct.materials.map(m => (
                          <li key={m} className="text-sm font-bold text-slate-700 flex items-center gap-3">
                            <CheckCircle2 size={14} className="text-blue-600/50" /> {m}
                          </li>
                        ))}
                      </ul>
                   </div>
                   <div className="bg-slate-50 p-8 rounded-[40px] border border-slate-100">
                      <Palette className="text-blue-600 mb-6" size={32} strokeWidth={1.5} />
                      <h4 className="text-xs font-black uppercase text-slate-300 tracking-[0.3em] mb-4">Finishing</h4>
                      <ul className="space-y-3">
                        {selectedProduct.finishing.map(f => (
                          <li key={f} className="text-sm font-bold text-slate-700 flex items-center gap-3">
                            <CheckCircle2 size={14} className="text-blue-600/50" /> {f}
                          </li>
                        ))}
                      </ul>
                   </div>
                </div>

                <div className="flex items-center gap-8">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -4 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={onBack}
                    className="bg-slate-900 text-white px-16 py-7 rounded-[28px] font-[950] text-lg uppercase tracking-[0.2em] shadow-2xl flex items-center gap-6 group hover:bg-blue-600 transition-colors"
                  >
                    Request Samples
                    <ShoppingCart size={22} className="group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                  <div className="flex flex-col">
                    <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest mb-1">Response Time</span>
                    <span className="text-sm font-black text-slate-900">UNDER 12 HOURS</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="aspect-[4/5] bg-slate-100 rounded-[70px] overflow-hidden shadow-2xl border-[16px] border-white"
                >
                   <img 
                    src={selectedProduct.mainImage} 
                    alt={selectedProduct.title} 
                    className="w-full h-full object-cover"
                   />
                </motion.div>
                {/* Tech Badges */}
                <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-[35px] shadow-2xl border border-slate-100 flex flex-col items-center">
                    <Ruler size={30} className="text-blue-600 mb-2" />
                    <span className="text-[10px] font-black text-slate-900 uppercase tracking-widest">Precision QC</span>
                </div>
              </div>
            </div>

            {/* Unmatched Standards: Premium Features Showcase */}
            {selectedProduct.features && (
              <div className="mt-40 mb-32 px-24">
                <div className="flex flex-col items-center text-center mb-24">
                   <motion.div 
                     initial={{ width: 0 }} 
                     whileInView={{ width: '80px' }} 
                     className="h-[2px] bg-blue-600 mb-6"
                   />
                   <span className="text-blue-600 font-black tracking-[0.4em] uppercase text-[10px] mb-4 block">Unmatched Standards</span>
                   <h2 className="text-[72px] font-[950] text-slate-900 tracking-tighter mb-8 leading-none">
                     Premium Features
                   </h2>
                   <p className="max-w-3xl text-2xl text-slate-400 font-medium leading-relaxed italic">
                     "A Showcase of Quality, Innovation, and Custom Labels."
                   </p>
                </div>
                
                <div className="grid grid-cols-3 gap-12">
                   {selectedProduct.features.map((feature, i) => (
                     <motion.div
                       key={feature.id}
                       initial={{ opacity: 0, y: 30 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       transition={{ delay: i * 0.1 }}
                       onMouseEnter={() => setHoveredFeature(feature.id)}
                       onMouseLeave={() => setHoveredFeature(null)}
                       whileHover={{ y: -15 }}
                       className="p-12 bg-slate-50/50 rounded-[60px] border border-slate-100 group transition-all duration-500 hover:bg-white hover:shadow-2xl hover:border-blue-100 relative overflow-hidden"
                     >
                       <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                       <div className="relative z-10">
                         <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mb-10 shadow-sm group-hover:bg-blue-600 group-hover:shadow-blue-200 group-hover:shadow-xl transition-all duration-500">
                            <AnimatedFeatureIcon type={feature.type} isHovered={hoveredFeature === feature.id} />
                         </div>
                         <h3 className="text-3xl font-black text-slate-900 mb-6 tracking-tight group-hover:text-blue-600 transition-colors">
                           {feature.title}
                         </h3>
                         <p className="text-slate-500 font-semibold leading-relaxed text-lg">
                           {feature.description}
                         </p>
                       </div>
                     </motion.div>
                   ))}
                </div>

                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="mt-24 text-center">
                  <p className="text-slate-900 font-black text-xl mb-10 tracking-tight">
                    Enhance your brand with our {selectedProduct.title}. 
                    <span className="text-blue-600 ml-2">Get started today for customized solutions that stand out!</span>
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onBack}
                    className="inline-flex items-center gap-4 bg-slate-900 text-white px-12 py-6 rounded-2xl font-black uppercase tracking-widest text-xs group transition-all hover:bg-blue-600 shadow-xl"
                  >
                    Contact us <MessageSquare size={18} className="group-hover:translate-x-2 transition-transform" />
                  </motion.button>
                </motion.div>
              </div>
            )}

            {/* Image Gallery */}
            <div className="mb-32 px-24">
              <div className="flex items-center gap-6 mb-16">
                 <h2 className="text-4xl font-black text-slate-900 tracking-tighter">Detailed Gallery</h2>
                 <div className="flex-1 h-px bg-slate-100" />
              </div>
              <div className="grid grid-cols-3 gap-12">
                {selectedProduct.gallery.map((img, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.02, rotate: i % 2 === 0 ? 1 : -1 }}
                    className="aspect-square rounded-[50px] overflow-hidden shadow-xl border-8 border-white group"
                  >
                    <img src={img} alt="Gallery item" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Final Cinematic Footer CTA */}
            <div className="mt-40 mx-24 p-24 bg-slate-900 rounded-[80px] text-center relative overflow-hidden group">
               <motion.div 
                 animate={{ rotate: 360 }}
                 transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                 className="absolute -top-1/2 -left-1/2 w-full h-full border border-white/5 rounded-full pointer-events-none"
               />
               <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,_rgba(37,99,235,0.2)_0%,_transparent_70%)]" />
               <div className="relative z-10">
                 <span className="text-blue-400 font-black tracking-[0.5em] uppercase text-[10px] mb-8 block">Ready to Transform?</span>
                 <h2 className="text-6xl font-[950] text-white tracking-tighter mb-12">
                   Enhance your brand with our <br />
                   {selectedProduct.title}.
                 </h2>
                 <p className="text-xl text-slate-400 font-medium max-w-2xl mx-auto mb-16 leading-relaxed">
                   Get started today for customized solutions that stand out! Our production team is standing by to bring your vision to life with world-class precision.
                 </p>
                 <motion.button
                   onClick={onBack}
                   whileHover={{ scale: 1.05, y: -4 }}
                   whileTap={{ scale: 0.98 }}
                   className="bg-blue-600 text-white px-20 py-8 rounded-[30px] font-black uppercase tracking-[0.3em] text-sm shadow-2xl shadow-blue-900/40 hover:bg-white hover:text-blue-600 transition-all flex items-center gap-6 mx-auto"
                 >
                   Get Started Today <ExternalLink size={20} />
                 </motion.button>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductsPage;
