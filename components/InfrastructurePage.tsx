
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Settings, 
  Cpu, 
  Layers, 
  Zap, 
  ChevronRight, 
  ArrowLeft,
  Activity,
  BarChart3,
  Waves,
  Scissors,
  Printer,
  Maximize2,
  Sparkles
} from 'lucide-react';

interface Machine {
  id: string;
  name: string;
  desc: string;
  image: string;
  specs: { label: string; value: string }[];
  icon: any;
}

const MACHINES: Machine[] = [
  {
    id: 'lamination',
    name: 'Lamination Machine',
    desc: 'Thermal precision finishing system for high-gloss and soft-touch velvet laminations.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200',
    icon: Layers,
    specs: [
      { label: 'Speed', value: '45m/min' },
      { label: 'Pressure', value: '120kg/cm²' },
      { label: 'Temperature', value: '110°C' }
    ]
  },
  {
    id: 'foiling',
    name: 'Foiling Machine',
    desc: 'Precision hot-stamping technology for luxury metallic foil application on premium cardstock.',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1200',
    icon: Zap,
    specs: [
      { label: 'Force', value: '60 Tons' },
      { label: 'Format', value: '520x720mm' },
      { label: 'Accuracy', value: '0.01mm' }
    ]
  },
  {
    id: 'auto-foiling',
    name: 'Fully Automated Foiling Machine',
    desc: 'Robotic high-speed foil integration with automated feeding and registration for mass production.',
    image: 'https://images.unsplash.com/photo-1617333565851-f404981d39b8?auto=format&fit=crop&q=80&w=1200',
    icon: Cpu,
    specs: [
      { label: 'Cycle', value: '2500 sheets/hr' },
      { label: 'Sensors', value: 'Optic-HD' },
      { label: 'Power', value: '15kW' }
    ]
  },
  {
    id: 'punching',
    name: 'Punching Machine',
    desc: 'Heavy-duty hydraulic die-cutting system for intricate hangtag shapes and structural packaging.',
    image: 'https://images.unsplash.com/photo-1565610222536-ef125c59da2e?auto=format&fit=crop&q=80&w=1200',
    icon: Scissors,
    specs: [
      { label: 'Pressure', value: '150 Tons' },
      { label: 'Stroke', value: '80mm' },
      { label: 'Tooling', value: 'CNC-Bespoke' }
    ]
  },
  {
    id: 'rotary',
    name: 'Rotary Label Printing Machine',
    desc: 'Multi-color high-speed textile printing for care labels and neck tapes with ink-curing technology.',
    image: 'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&q=80&w=1200',
    icon: Printer,
    specs: [
      { label: 'Colors', value: '8 Stations' },
      { label: 'Web Width', value: '320mm' },
      { label: 'Curing', value: 'UV/IR Dual' }
    ]
  },
  {
    id: 'cutting',
    name: 'Paper Cutting Machine',
    desc: 'Computerized guillotine with air-cushioned table for micron-accurate stock preparation.',
    image: 'https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80&w=1200',
    icon: Maximize2,
    specs: [
      { label: 'Length', value: '1150mm' },
      { label: 'Precision', value: '±0.05mm' },
      { label: 'Control', value: 'PLC-Touch' }
    ]
  },
  {
    id: 'woven',
    name: 'Woven Label Machine',
    desc: 'Advanced high-density looms for intricate brand identity weaving with soft-edge ultrasonic cutting.',
    image: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&q=80&w=1200',
    icon: Waves,
    specs: [
      { label: 'Loom', value: 'Rapier-HD' },
      { label: 'Picks', value: '120/cm' },
      { label: 'Width', value: '200mm Max' }
    ]
  }
];

const InfrastructurePage: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-white text-slate-900 pb-32 selection:bg-blue-100 selection:text-blue-900">
      
      {/* Cinematic Hero - Updated for Light Theme */}
      <section className="relative h-[850px] overflow-hidden flex items-center px-24">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-10 scale-110 blur-[2px]"
            alt="Factory Background"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white" />
          {/* Ambient Accent Blooom */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-5xl">
          <motion.button
            onClick={onBack}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 text-blue-600 font-black uppercase tracking-[0.4em] text-[10px] mb-12 hover:translate-x-[-8px] transition-transform group"
          >
            <ArrowLeft size={16} /> Back to Brand Home
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-5 mb-10">
               <span className="w-16 h-[2px] bg-blue-600"></span>
               <span className="text-blue-600 font-[900] tracking-[0.6em] uppercase text-[11px]">Manufacturing Excellence</span>
            </div>
            <h1 className="text-[140px] font-[950] leading-[0.8] tracking-tighter mb-16 text-slate-900">
              The RKS <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-800 to-indigo-900">
                Forge.
              </span>
            </h1>
            <p className="text-3xl text-slate-500 font-medium leading-relaxed max-w-3xl italic border-l-4 border-blue-600 pl-10">
              "Inside our 10,000 sq.ft precision facility in Bengaluru, where advanced engineering meets the highest standards of branding artistry."
            </p>
          </motion.div>
        </div>

        {/* Diagnostic Elements - Updated for Light Theme */}
        <div className="absolute right-24 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-12 text-right opacity-80">
          <div className="flex flex-col">
            <span className="text-6xl font-[950] text-slate-900">99.8%</span>
            <span className="text-xs font-[900] text-blue-600 uppercase tracking-widest">Uptime Efficiency</span>
          </div>
          <div className="flex flex-col">
            <span className="text-6xl font-[950] text-slate-900">0.05mm</span>
            <span className="text-xs font-[900] text-blue-600 uppercase tracking-widest">Tolerance Level</span>
          </div>
          <div className="flex flex-col">
            <span className="text-6xl font-[950] text-slate-900">ISO</span>
            <span className="text-xs font-[900] text-blue-600 uppercase tracking-widest">Certified Ops</span>
          </div>
        </div>
      </section>

      {/* Machinery Grid - Updated for Light Theme */}
      <section className="px-24">
        <div className="max-w-[1440px] mx-auto space-y-52">
          {MACHINES.map((machine, idx) => (
            <motion.div 
              key={machine.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex items-center gap-24 ${idx % 2 === 1 ? 'flex-row-reverse' : ''}`}
            >
              {/* Image Stage - Updated Frame */}
              <div className="w-1/2 relative group">
                <div className="absolute -inset-10 bg-blue-600/5 rounded-[80px] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                <div className="relative aspect-[16/10] bg-slate-50 rounded-[60px] overflow-hidden border border-slate-100 shadow-2xl transition-all duration-700 group-hover:shadow-blue-900/10">
                   <img 
                    src={machine.image} 
                    alt={machine.name} 
                    className="w-full h-full object-cover transition-transform duration-[5000ms] group-hover:scale-110" 
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                   
                   {/* Unit Identifier */}
                   <div className="absolute bottom-10 left-10">
                      <span className="text-[10px] font-black text-blue-600 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full border border-blue-100 uppercase tracking-[0.3em]">UNIT ID — RKS/INFRA/0{idx+1}</span>
                   </div>
                </div>
              </div>

              {/* Content Detail - Updated Text Colors */}
              <div className="w-1/2 space-y-10">
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center text-blue-600 border border-slate-100 shadow-sm transition-all group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600">
                    <machine.icon size={36} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-6xl font-[950] tracking-tighter text-slate-900">
                    {machine.name}
                  </h3>
                </div>

                <p className="text-2xl text-slate-500 font-medium leading-relaxed">
                  {machine.desc}
                </p>

                {/* Specs Console - Updated for Light Theme */}
                <div className="grid grid-cols-3 gap-6 pt-6">
                   {machine.specs.map(spec => (
                     <div key={spec.label} className="bg-slate-50 border border-slate-100 p-8 rounded-[35px] flex flex-col items-center text-center group/spec hover:bg-white hover:shadow-xl hover:border-blue-100 transition-all">
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 group-hover/spec:text-blue-600 transition-colors">
                          {spec.label}
                        </span>
                        <span className="text-2xl font-black text-slate-900">
                          {spec.value}
                        </span>
                     </div>
                   ))}
                </div>

                <div className="flex items-center gap-4 pt-10">
                   <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse shadow-[0_0_15px_rgba(34,197,94,0.4)]" />
                   <span className="text-[11px] font-[900] text-slate-400 uppercase tracking-[0.3em]">Operational Readiness Status: <span className="text-slate-900">ACTIVE</span></span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Technical Footer CTA - Consistent with About Page Cards */}
      <section className="mt-60 px-24">
         <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           className="bg-blue-600 rounded-[80px] p-24 text-center relative overflow-hidden group shadow-[0_60px_100px_-30px_rgba(37,99,235,0.4)]"
         >
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
            <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-white/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10">
              <div className="flex justify-center mb-10">
                <div className="w-20 h-20 bg-white/10 backdrop-blur-xl rounded-[25px] flex items-center justify-center text-white border border-white/20">
                   <Sparkles size={36} />
                </div>
              </div>
              <span className="text-blue-100 font-black tracking-[0.5em] uppercase text-[10px] mb-8 block">Infrastructure Standard</span>
              <h2 className="text-7xl font-[950] text-white tracking-tighter mb-12 leading-none">
                Engineered for Global Scale.
              </h2>
              <p className="text-2xl text-blue-50 font-medium max-w-3xl mx-auto mb-16 leading-relaxed">
                Our infrastructure is built to handle volume without compromising the micrometer precision that world-class brands rely on.
              </p>
              
              <div className="flex items-center justify-center gap-12">
                <motion.button
                  onClick={onBack}
                  whileHover={{ scale: 1.05, y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-white text-blue-600 px-20 py-8 rounded-[30px] font-black uppercase tracking-[0.3em] text-sm shadow-2xl flex items-center gap-6"
                >
                  Return to Home <ChevronRight size={20} />
                </motion.button>
                <div className="w-px h-16 bg-white/20" />
                <div className="flex flex-col items-start text-left">
                  <span className="text-[10px] font-black text-blue-100 uppercase tracking-widest mb-1">Production Capacity</span>
                  <span className="text-xl font-black text-white">10M+ UNITS / MO</span>
                </div>
              </div>
            </div>
         </motion.div>
      </section>

    </div>
  );
};

export default InfrastructurePage;
