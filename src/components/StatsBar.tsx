import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import imageProvaSocial from '../assets/images/prova social.png';

interface StatsBarProps {
  onCtaClick?: () => void;
}

export default function StatsBar({ onCtaClick }: StatsBarProps) {
  return (
    <section 
      id="stats-section" 
      className="bg-[#039D1F] py-8 md:py-12 relative overflow-hidden border-y border-[#027A17] flex flex-col items-center justify-center"
    >
      <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center">
        
        {/* Engaging Headline for Proof Social */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6 md:mb-8 space-y-2 max-w-lg"
        >
          <span className="inline-block bg-white/20 text-white text-[10px] md:text-xs font-black px-3 py-1 rounded-full uppercase tracking-widest border border-white/15">
            Prometo & Provo! 🤝
          </span>
          <h2 className="text-xl xs:text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight">
            Veja o que o <span className="text-amber-300">Prof. Mauro</span> enviou no nosso WhatsApp:
          </h2>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative w-full max-w-[320px] xs:max-w-[350px] sm:max-w-[380px] md:max-w-[420px] bg-[#0b141a] rounded-[24px] p-2.5 shadow-2xl border border-white/10 overflow-hidden"
        >
          {/* The screenshot uploaded by the user */}
          <img 
            src={imageProvaSocial} 
            alt="Prova Social do WhatsApp" 
            className="w-full h-auto rounded-[18px] shadow-lg select-none pointer-events-none"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Scroll indicator with down arrows */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col items-center gap-1 mt-6 text-white select-none cursor-pointer"
          onClick={onCtaClick}
        >
          <span className="text-[10px] sm:text-xs font-extrabold tracking-widest uppercase text-white/90">
            Veja mais detalhes abaixo
          </span>
          <div className="flex flex-col items-center -space-y-1 mt-1 animate-bounce">
            <ChevronDown className="w-4 h-4 sm:w-5 h-5 text-white" />
            <ChevronDown className="w-4 h-4 sm:w-5 h-5 text-white/60" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
