import { motion } from 'motion/react';
import { ShieldCheck } from 'lucide-react';

export default function GuaranteeSection() {
  return (
    <section id="garantia-incondicional" className="py-8 md:py-14 bg-emerald-50/40 border-y border-emerald-100/60 relative overflow-hidden">
      {/* Decorative subtle gradient background blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] bg-amber-100/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        
        {/* 'Compre sem medo' Tag */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-100/80 text-[#039D1F] border border-emerald-200 text-[10px] md:text-xs font-black rounded-full mb-4 uppercase tracking-wider"
        >
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>RISCO ZERO • COMPRE SEM MEDO</span>
        </motion.div>

        {/* Crisp Vector 7-Day Guarantee Seal */}
        <motion.div
          initial={{ opacity: 0, rotate: -6, scale: 0.85 }}
          whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 mb-4 drop-shadow-[0_12px_28px_rgba(217,119,6,0.25)] flex items-center justify-center relative select-none"
        >
          <svg className="w-full h-full" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FBBF24" />
                <stop offset="50%" stopColor="#F59E0B" />
                <stop offset="100%" stopColor="#D97706" />
              </linearGradient>
              <linearGradient id="emeraldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#047857" />
                <stop offset="50%" stopColor="#039D1F" />
                <stop offset="100%" stopColor="#064E3B" />
              </linearGradient>
              <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#B45309" floodOpacity="0.3" />
              </filter>
            </defs>

            {/* Scalloped Gold Outer Badge */}
            <g filter="url(#shadow)">
              <circle cx="100" cy="100" r="92" fill="url(#goldGradient)" />
              <circle cx="100" cy="100" r="84" fill="#FFFFFF" />
              <circle cx="100" cy="100" r="80" fill="url(#goldGradient)" />
              <circle cx="100" cy="100" r="74" fill="url(#emeraldGradient)" />
            </g>

            {/* Inner Ring Gold Accent */}
            <circle cx="100" cy="100" r="72" stroke="#FDE68A" strokeWidth="2" strokeDasharray="3 3" />

            {/* Curved Text Top */}
            <path id="textCurveTop" d="M 38 100 A 62 62 0 0 1 162 100" fill="none" />
            <text fill="#FEF3C7" fontSize="10" fontWeight="900" letterSpacing="1.8" textAnchor="middle">
              <textPath href="#textCurveTop" startOffset="50%">
                GARANTIA INCONDICIONAL
              </textPath>
            </text>

            {/* Large "7" Number */}
            <text x="100" y="98" fill="#FBBF24" fontSize="48" fontWeight="900" textAnchor="middle" fontFamily="sans-serif" filter="drop-shadow(0px 2px 4px rgba(0,0,0,0.4))">
              7
            </text>

            {/* "DIAS" Text */}
            <text x="100" y="118" fill="#FFFFFF" fontSize="15" fontWeight="900" letterSpacing="3" textAnchor="middle" fontFamily="sans-serif">
              DIAS
            </text>

            {/* 5 Golden Stars */}
            <g fill="#FBBF24" transform="translate(100, 132)">
              {[-28, -14, 0, 14, 28].map((x, i) => (
                <path
                  key={i}
                  transform={`translate(${x}, 0) scale(0.65)`}
                  d="M0 -7 L2.1 -2.1 L7.3 -1.4 L3.6 2.3 L4.5 7.4 L0 5 L-4.5 7.4 L-3.6 2.3 L-7.3 -1.4 L-2.1 -2.1 Z"
                />
              ))}
            </g>

            {/* Bottom Ribbon */}
            <path d="M 30 148 L 100 138 L 170 148 L 158 172 L 100 162 L 42 172 Z" fill="#D97706" />
            <path d="M 34 150 L 100 140 L 166 150 L 156 168 L 100 158 L 44 168 Z" fill="#FBBF24" />
            
            <text x="100" y="158" fill="#78350F" fontSize="8.5" fontWeight="900" letterSpacing="1.2" textAnchor="middle" fontFamily="sans-serif">
              SATISFAÇÃO 100% GARANTIDA
            </text>
          </svg>
        </motion.div>

        {/* Copy / Text Content */}
        <div className="max-w-xl space-y-2.5">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight font-display"
          >
            Sua Satisfação ou Seu Dinheiro de Volta.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xs sm:text-sm md:text-base text-slate-600 font-bold leading-relaxed"
          >
            Você tem 7 dias para conhecer o material. Se não ficar satisfeito por qualquer motivo, basta solicitar o reembolso e devolveremos 100% do valor pago.
          </motion.p>
        </div>

      </div>
    </section>
  );
}

