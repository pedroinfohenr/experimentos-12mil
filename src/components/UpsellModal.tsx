import { motion, AnimatePresence } from 'motion/react';
import { Gift, X, Check, ShieldCheck, Sparkles, AlertCircle, ArrowRight } from 'lucide-react';
import { buildCheckoutUrl } from '../utils/utm';

interface UpsellModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAcceptUpsell: () => void; // accept Complete at 17,90
  onDeclineUpsell: () => void; // decline and keep basic at 10,00
}

export default function UpsellModal({ isOpen, onClose, onAcceptUpsell, onDeclineUpsell }: UpsellModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div id="upsell-modal" className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4">
        {/* Dark overlay backdrop with blur */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/75 backdrop-blur-xs"
        />

        {/* Modal Panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: 'spring', damping: 25, stiffness: 350 }}
          className="relative bg-white text-slate-800 w-full max-w-lg rounded-[28px] sm:rounded-[32px] overflow-hidden shadow-2xl border border-slate-100 z-10 max-h-[calc(100vh-2rem)] md:max-h-[calc(100vh-4rem)] flex flex-col"
        >
          {/* Header Bar: Vibrant Green & Golden Accents */}
          <div className="bg-gradient-to-r from-[#028018] via-[#039D1F] to-[#028018] px-5 py-4 sm:py-5 text-white text-center relative shrink-0">
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-3.5 right-3.5 text-white/80 hover:text-white hover:bg-white/10 p-1.5 rounded-full transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Top Badge */}
            <div className="inline-flex items-center gap-1.5 bg-amber-400 text-slate-950 text-[10px] sm:text-xs font-black uppercase px-3 py-1 rounded-full shadow-sm mb-2 font-display">
              <Sparkles className="w-3.5 h-3.5 fill-slate-950 text-slate-950" />
              <span>OFERTA EXCLUSIVA DE OPORTUNIDADE</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black tracking-tight leading-tight font-display text-white">
              Sua aula pronta de Ciências sem complicações!
            </h3>
            <p className="text-xs sm:text-sm font-bold text-emerald-100 mt-1">
              Por apenas <span className="text-amber-300 font-black underline decoration-amber-300/40">+R$ 7,90</span> leve o Plano Completo!
            </p>
          </div>

          {/* Modal Body (Scrollable region) */}
          <div className="p-4 sm:p-6 space-y-4 sm:space-y-5 overflow-y-auto flex-1">
            
            {/* Warning callout about missing features */}
            <div className="bg-amber-50 border border-amber-200/90 rounded-2xl p-3.5 flex items-start gap-2.5">
              <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div className="text-xs text-amber-900 font-bold leading-relaxed">
                <span className="font-black text-amber-950">Atenção, Professor(a):</span> No plano de R$ 10,00 você recebe <span className="underline">apenas</span> os experimentos simples. Ficará sem as avaliações prontas, sem os planos de aula BNCC e sem nenhum bônus.
              </div>
            </div>

            {/* Upgrade Value Box */}
            <div className="bg-gradient-to-br from-emerald-50 via-white to-emerald-50/70 border-2 border-[#039D1F] rounded-2xl p-4 sm:p-5 space-y-3.5 shadow-md relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-emerald-100 pb-2.5">
                <span className="text-xs font-black text-[#039D1F] uppercase tracking-wider font-display flex items-center gap-1.5">
                  <Gift className="w-4 h-4 text-[#039D1F]" />
                  NO PLANO COMPLETO VOCÊ RECEBE HOJE:
                </span>
                <span className="bg-[#039D1F] text-white text-[10px] font-black px-2 py-0.5 rounded-full uppercase">
                  TUDO LIBERADO
                </span>
              </div>
              
              <ul className="space-y-2 text-xs text-slate-800 font-bold">
                <li className="flex items-start gap-2">
                  <div className="w-4.5 h-4.5 rounded-full bg-emerald-500 text-white font-black shrink-0 flex items-center justify-center text-[10px] mt-0.5">✓</div>
                  <span className="leading-snug"><strong className="text-slate-900 font-extrabold">365 Experimentos de Ciências Prontos</strong> (fáceis de aplicar)</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-4.5 h-4.5 rounded-full bg-emerald-500 text-white font-black shrink-0 flex items-center justify-center text-[10px] mt-0.5">✓</div>
                  <span className="leading-snug"><strong className="text-slate-900 font-extrabold">+100 Avaliações Prontas</strong> com Gabarito Oficial em PDF</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-4.5 h-4.5 rounded-full bg-emerald-500 text-white font-black shrink-0 flex items-center justify-center text-[10px] mt-0.5">✓</div>
                  <span className="leading-snug"><strong className="text-slate-900 font-extrabold">+30 Planos de Aula Completos</strong> (100% alinhados à BNCC)</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-4.5 h-4.5 rounded-full bg-emerald-500 text-white font-black shrink-0 flex items-center justify-center text-[10px] mt-0.5">✓</div>
                  <span className="leading-snug"><strong className="text-slate-900 font-extrabold">Todos os 5 Bônus Exclusivos VIP</strong> (Física, Biologia e Guia Prático)</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-4.5 h-4.5 rounded-full bg-emerald-500 text-white font-black shrink-0 flex items-center justify-center text-[10px] mt-0.5">✓</div>
                  <span className="leading-snug"><strong className="text-slate-900 font-extrabold">Acesso Vitalício + Atualizações Gratuitas</strong> sem mensalidades</span>
                </li>
              </ul>

              {/* Price comparison inside box */}
              <div className="pt-3 border-t border-emerald-200/80 bg-emerald-100/50 -mx-4 -mb-4 p-3.5 text-center space-y-1">
                <div className="text-xs text-slate-500 line-through font-semibold">
                  De R$ 254,00 por apenas
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-2xl sm:text-3xl font-black text-[#039D1F] font-display">
                    R$ 17,90
                  </span>
                  <span className="bg-amber-300 text-slate-950 text-[10px] font-black px-2 py-0.5 rounded-md uppercase tracking-wider">
                    SÓ HOJE!
                  </span>
                </div>
                <p className="text-[11px] font-black text-emerald-900">
                  (Diferença irrisória de apenas R$ 7,90 para ter O MATERIAL COMPLETO!)
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2.5 pt-1">
              <motion.a
                href={buildCheckoutUrl('https://pay.wiapy.com/ZiPOwLgRTB')}
                onClick={(e) => {
                  e.preventDefault();
                  onAcceptUpsell();
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 px-4 bg-[#039D1F] hover:bg-[#028018] text-white rounded-2xl font-black text-xs sm:text-sm tracking-wider uppercase shadow-xl shadow-emerald-600/30 cursor-pointer transition-all flex items-center justify-center gap-2 border border-emerald-500 font-display text-center"
              >
                <span>SIM! QUERO O PLANO COMPLETO POR R$ 17,90</span>
                <ArrowRight className="w-4 h-4 stroke-[3]" />
              </motion.a>
              
              <a
                href={buildCheckoutUrl('https://pay.wiapy.com/YeaKBenvRQS')}
                onClick={(e) => {
                  e.preventDefault();
                  onDeclineUpsell();
                }}
                className="w-full py-3 px-3 bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 font-bold rounded-xl text-xs tracking-wide uppercase transition-all cursor-pointer text-center block border border-slate-200"
              >
                Não, obrigado. Prefiro o pacote básico de R$ 10,00
              </a>
            </div>

            <p className="text-[10px] text-slate-400 font-extrabold text-center flex items-center justify-center gap-1 select-none pt-0.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#039D1F]" />
              Sua garantia incondicional de 7 dias é mantida para o Plano Completo.
            </p>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

