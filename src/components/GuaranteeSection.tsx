import { motion } from 'motion/react';
import { ShieldCheck } from 'lucide-react';
import seloGarantiaImg from '../assets/images/Design sem nome.png';

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

        {/* 7-Day Guarantee Seal Image */}
        <motion.div
          initial={{ opacity: 0, rotate: -6, scale: 0.85 }}
          whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="w-32 h-32 sm:w-36 sm:h-36 md:w-44 md:h-44 mb-4 drop-shadow-[0_10px_25px_rgba(217,119,6,0.2)] flex items-center justify-center relative select-none"
        >
          <img 
            src={seloGarantiaImg} 
            alt="Selo de Garantia 7 Dias" 
            className="w-full h-full object-contain"
            referrerPolicy="no-referrer"
          />
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

