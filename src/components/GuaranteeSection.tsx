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

        {/* 100% Transparent Vector Guarantee Seal */}
        <motion.div
          initial={{ opacity: 0, rotate: -4, scale: 0.9 }}
          whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="w-44 h-44 sm:w-52 sm:h-52 md:w-60 md:h-60 mb-2 filter drop-shadow-[0_10px_20px_rgba(217,119,6,0.3)] flex items-center justify-center relative select-none"
        >
          <svg className="w-full h-full" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FDE047" />
                <stop offset="30%" stopColor="#F59E0B" />
                <stop offset="70%" stopColor="#D97706" />
                <stop offset="100%" stopColor="#B45309" />
              </linearGradient>

              <linearGradient id="emeraldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#059669" />
                <stop offset="50%" stopColor="#039D1F" />
                <stop offset="100%" stopColor="#024D0F" />
              </linearGradient>

              <linearGradient id="ribbonGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#B45309" />
                <stop offset="20%" stopColor="#F59E0B" />
                <stop offset="50%" stopColor="#FDE047" />
                <stop offset="80%" stopColor="#F59E0B" />
                <stop offset="100%" stopColor="#B45309" />
              </linearGradient>
            </defs>

            {/* Outer Scalloped Sunburst Golden Ring */}
            <g>
              {Array.from({ length: 24 }).map((_, i) => (
                <circle
                  key={i}
                  cx={110 + 82 * Math.cos((i * 15 * Math.PI) / 180)}
                  cy={110 + 82 * Math.sin((i * 15 * Math.PI) / 180)}
                  r="12"
                  fill="url(#goldGrad)"
                />
              ))}
            </g>

            {/* Main Outer Gold Circle */}
            <circle cx="110" cy="110" r="82" fill="url(#goldGrad)" />
            <circle cx="110" cy="110" r="76" fill="#FFFFFF" />
            <circle cx="110" cy="110" r="72" fill="url(#goldGrad)" />
            
            {/* Deep Emerald Inner Circle */}
            <circle cx="110" cy="110" r="66" fill="url(#emeraldGrad)" stroke="#FDE047" strokeWidth="2" strokeDasharray="4 2" />

            {/* Circular Arc Text - GARANTIA INCONDICIONAL */}
            <path id="arcTextPath" d="M 49 110 A 61 61 0 0 1 171 110" fill="none" />
            <text fill="#FEF08A" fontSize="9.5" fontWeight="900" letterSpacing="1.6" textAnchor="middle">
              <textPath href="#arcTextPath" startOffset="50%">
                GARANTIA INCONDICIONAL
              </textPath>
            </text>

            {/* Large 7 Number */}
            <text 
              x="110" 
              y="108" 
              fill="url(#goldGrad)" 
              fontSize="52" 
              fontWeight="900" 
              textAnchor="middle" 
              fontFamily="system-ui, -apple-system, sans-serif"
              style={{ filter: 'drop-shadow(0px 3px 2px rgba(0,0,0,0.4))' }}
            >
              7
            </text>

            {/* DIAS Text */}
            <text 
              x="110" 
              y="128" 
              fill="#FFFFFF" 
              fontSize="16" 
              fontWeight="900" 
              letterSpacing="3" 
              textAnchor="middle"
              fontFamily="system-ui, -apple-system, sans-serif"
            >
              DIAS
            </text>

            {/* 5 Golden Stars */}
            <g fill="#FDE047" transform="translate(110, 142)">
              {[-26, -13, 0, 13, 26].map((x, i) => (
                <polygon
                  key={i}
                  transform={`translate(${x}, 0) scale(0.65)`}
                  points="0,-7 2.1,-2.1 7.3,-1.4 3.6,2.3 4.5,7.4 0,5 -4.5,7.4 -3.6,2.3 -7.3,-1.4 -2.1,-2.1"
                />
              ))}
            </g>

            {/* Premium Gold Banner Ribbon at bottom */}
            <g>
              {/* Ribbon Tails */}
              <path d="M 30 168 L 10 182 L 30 192 L 48 178 Z" fill="#92400E" />
              <path d="M 190 168 L 210 182 L 190 192 L 172 178 Z" fill="#92400E" />

              {/* Main Banner Bar */}
              <rect x="22" y="162" width="176" height="26" rx="4" fill="url(#ribbonGrad)" stroke="#78350F" strokeWidth="1" />
              <rect x="26" y="164" width="168" height="22" rx="2" fill="none" stroke="#FFFFFF" strokeWidth="1" opacity="0.6" />

              <text 
                x="110" 
                y="179" 
                fill="#451A03" 
                fontSize="9" 
                fontWeight="900" 
                letterSpacing="1.2" 
                textAnchor="middle" 
                fontFamily="system-ui, -apple-system, sans-serif"
              >
                100% SATISFAÇÃO OU REEMBOLSO
              </text>
            </g>
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


