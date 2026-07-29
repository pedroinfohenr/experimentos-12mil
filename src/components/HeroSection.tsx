import { ArrowRight, Star } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroSectionProps {
  onCtaClick: () => void;
  onExploreLibraryClick: () => void;
  isUnlocked: boolean;
}

export default function HeroSection({ onCtaClick, onExploreLibraryClick, isUnlocked }: HeroSectionProps) {
  return (
    <section 
      id="hero" 
      className="relative flex flex-col items-center justify-center pt-8 md:pt-14 pb-12 md:pb-20 overflow-hidden bg-white"
    >
      {/* Floating abstract decorative background elements with science green smoke and experiment effects */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Dynamic rising green experiment smoke / large glowing bubbles */}
        {[...Array(12)].map((_, i) => {
          const size = Math.random() * 60 + 35; // 35px to 95px
          const delay = Math.random() * 8;
          const duration = Math.random() * 14 + 12;
          const left = Math.random() * 100;
          return (
            <motion.div
              key={`smoke-${i}`}
              className="absolute rounded-full bg-brand-green/5"
              style={{
                left: `${left}%`,
                width: size,
                height: size,
                bottom: '-12%',
                filter: 'blur(16px)',
                boxShadow: '0 0 24px rgba(3, 157, 31, 0.15)',
              }}
              animate={{
                y: ['0vh', '-115vh'],
                x: [0, Math.sin(i) * 50, 0],
                scale: [0.7, 1.3, 0.4],
                opacity: [0, 0.45, 0.3, 0],
              }}
              transition={{
                duration: duration,
                repeat: Infinity,
                delay: delay,
                ease: "easeInOut",
              }}
            />
          );
        })}

        {/* Small crisp rising experiment bubbles */}
        {[...Array(16)].map((_, i) => {
          const size = Math.random() * 7 + 4; // 4px to 11px
          const delay = Math.random() * 6;
          const duration = Math.random() * 9 + 7;
          const left = Math.random() * 100;
          return (
            <motion.div
              key={`bubble-${i}`}
              className="absolute rounded-full border border-brand-green/20 bg-emerald-50/10"
              style={{
                left: `${left}%`,
                width: size,
                height: size,
                bottom: '-5%',
              }}
              animate={{
                y: ['0vh', '-105vh'],
                x: [0, Math.sin(i) * 25, Math.cos(i) * 25],
                opacity: [0, 0.7, 0],
              }}
              transition={{
                duration: duration,
                repeat: Infinity,
                delay: delay,
                ease: "linear",
              }}
            />
          );
        })}

        {/* Left Side Science Elements (Original + Enhanced) */}
        <motion.div 
          className="absolute left-[4%] top-[14%] w-12 h-12 select-none"
          animate={{ y: [0, -15, 0], rotate: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full text-brand-green/20">
            <path d="M9 3h6M10 3v5c0 .5-.2 1-.6 1.4L5.4 15.6c-.6.6-.9 1.4-.9 2.2C4.5 19.4 5.6 20 7 20h10c1.4 0 2.5-.6 2.5-2.2 0-.8-.3-1.6-.9-2.2l-4-6.2c-.4-.4-.6-.9-.6-1.4V3" />
          </svg>
        </motion.div>

        {/* Bacteria Left */}
        <motion.div 
          className="absolute left-[8%] top-[28%] w-12 h-12 select-none"
          animate={{ y: [0, 15, 0], x: [0, 5, 0], rotate: [0, 360] }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full text-[#039D1F]/22">
            <rect x="5" y="8" width="14" height="8" rx="4" />
            <circle cx="9" cy="12" r="1.5" fill="currentColor" className="text-[#039D1F]/5" />
            <circle cx="13" cy="11" r="1" fill="currentColor" className="text-[#039D1F]/5" />
            <circle cx="15" cy="13" r="1.2" fill="currentColor" className="text-[#039D1F]/5" />
            <path d="M4 11h1M4 13h1M19 11h1M19 13h1M9 7v1M12 7v1M15 7v1M9 16v1M12 16v1M15 16v1" strokeLinecap="round" />
          </svg>
        </motion.div>

        {/* Microscope / Flask Left */}
        <motion.div 
          className="absolute left-[3%] top-[45%] w-11 h-11 select-none hidden md:block"
          animate={{ y: [0, -10, 0], rotate: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full text-brand-green/22">
            <path d="M6 3h12M10 3v12M14 3v6" />
            <circle cx="12" cy="15" r="4" />
            <path d="M12 11v8" />
          </svg>
        </motion.div>

        <motion.div 
          className="absolute left-[10%] top-[62%] w-10 h-10 select-none"
          animate={{ y: [0, 12, 0], rotate: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 8.5, ease: "easeInOut", delay: 1 }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full text-brand-green/18">
            <ellipse cx="12" cy="12" rx="3" ry="9" transform="rotate(45 12 12)" />
            <ellipse cx="12" cy="12" rx="3" ry="9" transform="rotate(-45 12 12)" />
            <circle cx="12" cy="12" r="2" fill="currentColor" className="text-brand-green/5" />
          </svg>
        </motion.div>

        {/* DNA Helix Left */}
        <motion.div 
          className="absolute left-[12%] top-[78%] w-10 h-10 select-none hidden sm:block"
          animate={{ y: [0, 10, 0], rotate: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full text-brand-green/22">
            <path d="M4.5 10.5C7.8 14 11.2 14 14.5 10.5s6.7-3.5 10 0" />
            <path d="M4.5 13.5C7.8 10 11.2 10 14.5 13.5s6.7 3.5 10 0" />
            <line x1="6" y1="12" x2="6" y2="15" strokeDasharray="1 1" />
            <line x1="10" y1="11" x2="10" y2="14" strokeDasharray="1 1" />
            <line x1="14" y1="11" x2="14" y2="14" strokeDasharray="1 1" />
            <line x1="18" y1="12" x2="18" y2="15" strokeDasharray="1 1" />
          </svg>
        </motion.div>

        {/* Biologia: Leaf Element Left */}
        <motion.div 
          className="absolute left-[16%] top-[45%] w-9 h-9 select-none hidden md:block"
          animate={{ y: [0, 8, 0], rotate: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full text-brand-green/20">
            <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 21 3c-1 4.5-1.5 6-3.1 11.8A7 7 0 0 1 11 20z" />
            <path d="M9 22l3-3M13.5 14.5l2.5-2.5" />
          </svg>
        </motion.div>

        {/* Magnifying Glass Left */}
        <motion.div 
          className="absolute left-[5%] top-[55%] w-10 h-10 select-none"
          animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 9, ease: "easeInOut" }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full text-brand-green/18">
            <circle cx="11" cy="11" r="6" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
            <line x1="11" y1="8" x2="11" y2="14" />
            <line x1="8" y1="11" x2="14" y2="11" />
          </svg>
        </motion.div>

        {/* Test Tube Left */}
        <motion.div 
          className="absolute left-[2%] top-[34%] w-9 h-9 select-none"
          animate={{ y: [0, -8, 0], rotate: [0, -12, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 0.5 }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full text-brand-green/22">
            <path d="M10 2h4M19 17V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v12a5 5 0 0 0 10 0z" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </motion.div>

        {/* Right Side Science Elements (Original + Enhanced) */}
        <motion.div 
          className="absolute right-[12%] top-[12%] w-12 h-12 select-none"
          animate={{ y: [0, -15, 0], rotate: [0, 360] }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full text-brand-green/22">
            <circle cx="12" cy="12" r="3" />
            <ellipse cx="12" cy="12" rx="9" ry="3" transform="rotate(30 12 12)" />
            <ellipse cx="12" cy="12" rx="9" ry="3" transform="rotate(150 12 12)" />
          </svg>
        </motion.div>

        <motion.div 
          className="absolute right-[5%] top-[24%] w-14 h-14 select-none"
          animate={{ y: [0, 18, 0], rotate: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 9, ease: "easeInOut", delay: 0.5 }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full text-brand-green/18">
            <circle cx="12" cy="5" r="3" />
            <circle cx="5" cy="12" r="3" />
            <circle cx="19" cy="12" r="3" />
            <circle cx="12" cy="19" r="3" />
            <line x1="12" y1="8" x2="12" y2="16" />
            <line x1="8" y1="12" x2="16" y2="12" />
          </svg>
        </motion.div>

        {/* Magnet Element Right (Física) */}
        <motion.div 
          className="absolute right-[15%] top-[34%] w-10 h-10 select-none hidden md:block"
          animate={{ y: [0, -10, 0], rotate: [0, 18, 0] }}
          transition={{ repeat: Infinity, duration: 7.5, ease: "easeInOut" }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full text-brand-green/20">
            <path d="M18 11V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v6a6 6 0 0 0 12 0z" />
            <path d="M6 11V5h3v6a3 3 0 0 0 6 0V5h3v6a6 6 0 0 1-12 0z" />
          </svg>
        </motion.div>

        {/* Bacteria Right */}
        <motion.div 
          className="absolute right-[7%] top-[45%] w-11 h-11 select-none"
          animate={{ y: [0, -12, 0], x: [0, -6, 0], rotate: [360, 0] }}
          transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full text-brand-green/20">
            <rect x="6" y="9" width="12" height="6" rx="3" />
            <circle cx="10" cy="12" r="0.8" fill="currentColor" />
            <circle cx="14" cy="11" r="1" fill="currentColor" />
            <path d="M5 11h1M5 13h1M18 11h1M18 13h1M10 8v1M14 8v1M10 15v1M14 15v1" strokeLinecap="round" />
          </svg>
        </motion.div>

        {/* Telescope Right */}
        <motion.div 
          className="absolute right-[3%] top-[58%] w-10 h-10 select-none"
          animate={{ y: [0, 10, 0], rotate: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut", delay: 0.3 }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full text-brand-green/18">
            <path d="m10.02 11.23 3.12 3.12" />
            <path d="M12 18v4M9 22h6" />
            <path d="M5.41 12.35 12 5.76a2 2 0 0 1 2.83 0l3.41 3.41a2 2 0 0 1 0 2.83l-6.59 6.59" />
          </svg>
        </motion.div>

        <motion.div 
          className="absolute right-[9%] top-[72%] w-11 h-11 select-none"
          animate={{ y: [0, -12, 0], rotate: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 6.5, ease: "easeInOut", delay: 1.5 }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full text-brand-green/22">
            <path d="M4.5 10.5C7.8 14 11.2 14 14.5 10.5s6.7-3.5 10 0" />
            <path d="M4.5 13.5C7.8 10 11.2 10 14.5 13.5s6.7 3.5 10 0" />
          </svg>
        </motion.div>

        {/* Spark Particles (Subtle Glowing Accents) */}
        <motion.div 
          className="absolute left-[30%] top-[25%] w-5 h-5 select-none opacity-20"
          animate={{ scale: [0.6, 1.2, 0.6], opacity: [0.15, 0.4, 0.15] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full text-brand-green/30">
            <path d="M12 2v20M2 12h20" />
          </svg>
        </motion.div>
        <motion.div 
          className="absolute right-[28%] top-[72%] w-6 h-6 select-none opacity-20"
          animate={{ scale: [1, 0.5, 1], opacity: [0.12, 0.35, 0.12] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full text-brand-green/30">
            <path d="M12 2v20M2 12h20" />
          </svg>
        </motion.div>
        
        {/* Additional Floating Sparks to make it super immersive */}
        <motion.div 
          className="absolute left-[22%] top-[15%] w-4 h-4 select-none opacity-15"
          animate={{ scale: [0.5, 1.3, 0.5], opacity: [0.1, 0.3, 0.1] }}
          transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full text-brand-green/30">
            <path d="M12 2v20M2 12h20" />
          </svg>
        </motion.div>
        <motion.div 
          className="absolute right-[20%] top-[48%] w-5 h-5 select-none opacity-15"
          animate={{ scale: [1.2, 0.6, 1.2], opacity: [0.12, 0.35, 0.12] }}
          transition={{ repeat: Infinity, duration: 3.8, ease: "easeInOut", delay: 1.2 }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full text-[#039D1F]/30">
            <path d="M12 2v20M2 12h20" />
          </svg>
        </motion.div>
        <motion.div 
          className="absolute left-[15%] top-[60%] w-5 h-5 select-none opacity-15"
          animate={{ scale: [0.7, 1.4, 0.7], opacity: [0.08, 0.28, 0.08] }}
          transition={{ repeat: Infinity, duration: 4.2, ease: "easeInOut", delay: 0.8 }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full text-brand-green/30">
            <path d="M12 2v20M2 12h20" />
          </svg>
        </motion.div>
      </div>

      <div className="max-w-5xl mx-auto px-4 xs:px-6 md:px-12 text-center space-y-4 xs:space-y-5 md:space-y-7 z-10 flex flex-col items-center">
        
        {/* 1. Headline with specific brand coloring matching the requested palette */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-3xl sm:max-w-4xl lg:max-w-5xl mx-auto px-0.5"
        >
          <h1 className="text-2xl xs:text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight font-display leading-[1.12] drop-shadow-xs text-slate-950">
            Dê <span className="text-[#039D1F] font-black">Aulas de Ciências</span> Onde Seus Alunos <span className="text-[#039D1F] font-black">Aprendem se Divertindo</span> e Prestam Atenção do Início ao Fim.
          </h1>
        </motion.div>

        {/* 2. Subtitle matching Screenshot */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="max-w-3xl lg:max-w-4xl mx-auto text-xs xs:text-sm sm:text-base md:text-xl lg:text-2xl text-slate-800 font-bold leading-relaxed px-1"
        >
          Com <span className="text-[#039D1F] font-black">mais de 365 experimentos práticos</span> do 6º ao 9º ano e Ensino Médio, você transforma alunos desinteressados em participantes ativos, usando <span className="text-[#039D1F] font-black">materiais simples</span> que você encontra na sua casa ou escola.
        </motion.p>

        {/* 3. Small video pointer text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[10px] sm:text-sm font-bold text-slate-700 flex items-center gap-1 bg-amber-50 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full border border-amber-100"
        >
          <span>👇 Assista o vídeo abaixo</span>
        </motion.div>

        {/* 4. Beautifully scaled VSL Player - Increased by 40% with phone frame removed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="relative w-full max-w-[240px] xs:max-w-[270px] sm:max-w-[310px] md:max-w-[360px] aspect-[9/17.5] rounded-2xl md:rounded-3xl shadow-2xl border border-slate-200 bg-black overflow-hidden"
        >
          <div 
            className="w-full h-full"
            dangerouslySetInnerHTML={{
              __html: `<wistia-player media-id="u1cm2sej87" aspect="0.514" style="display: block; width: 100%; height: 100%;"></wistia-player>`
            }}
          />
        </motion.div>

        {/* 5. Green CTA Button - Enlarged and animated with high visibility glowing pulse */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="pt-2 w-full max-w-[280px] xs:max-w-[320px] sm:max-w-[380px] md:max-w-[440px]"
        >
          <motion.button
            onClick={onCtaClick}
            animate={{ 
              scale: [1, 1.05, 1],
              boxShadow: [
                "0 4px 14px rgba(5, 180, 27, 0.25)", 
                "0 12px 28px rgba(5, 180, 27, 0.5)", 
                "0 4px 14px rgba(5, 180, 27, 0.25)"
              ]
            }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="w-full py-4 md:py-5 bg-[#05b41b] hover:bg-[#049e18] text-white rounded-2xl md:rounded-[20px] font-black text-xs xs:text-sm sm:text-base md:text-lg tracking-wide uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer active:scale-95 font-display relative overflow-hidden"
          >
            {/* Elegant glare effect that sweeps across the button */}
            <motion.span 
              className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-[-25deg] filter blur-md"
              animate={{ x: ['-100%', '300%'] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut", repeatDelay: 1 }}
            />
            QUERO ACESSAR AGORA
            <ArrowRight className="w-5 h-5 md:w-6 h-6 shrink-0" />
          </motion.button>
          
          <span className="text-[10px] md:text-xs text-slate-400 font-semibold mt-3 block">
            ✓ Acesso imediato • Pagamento Único • Garantia de 7 dias
          </span>
        </motion.div>

        {/* 6. Unboxed Proof Badge under CTA (Stars and Frase) */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-col items-center gap-1.5 mt-2 select-none"
        >
          <div className="flex gap-1 text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <p className="text-slate-600 text-xs sm:text-sm md:text-base font-bold max-w-lg leading-relaxed">
            Junte-se a mais de <strong className="text-brand-green font-extrabold">+1.200 professores</strong> de Ciências que já transformaram suas aulas!
          </p>
        </motion.div>

      </div>
    </section>
  );
}
