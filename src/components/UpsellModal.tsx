import { motion, AnimatePresence } from 'motion/react';
import { Gift, X, Check, ShieldCheck } from 'lucide-react';

interface UpsellModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAcceptUpsell: () => void; // accept Complete at 27,00
  onDeclineUpsell: () => void; // decline and keep basic/essential at 19,90
}

export default function UpsellModal({ isOpen, onClose, onAcceptUpsell, onDeclineUpsell }: UpsellModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div id="upsell-modal" className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Dark overlay backdrop with blur */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/70 backdrop-blur-xs"
        />

        {/* Modal Panel - constrained height so it never overflows screen height */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: 'spring', damping: 25, stiffness: 350 }}
          className="relative bg-white text-slate-800 w-full max-w-md rounded-[32px] overflow-hidden shadow-2xl border border-slate-100 z-10 max-h-[calc(100vh-2.5rem)] md:max-h-[calc(100vh-5rem)] flex flex-col"
        >
          {/* Header Bar: Rich green background with gift icon (Sticky head) */}
          <div className="bg-gradient-to-r from-[#0bae04] to-[#038f09] px-6 py-5 text-white text-center relative shrink-0">
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white/80 hover:text-white hover:bg-white/10 p-1.5 rounded-full transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Gift icon within a round badge */}
            <div className="mx-auto w-10 h-10 rounded-xl bg-white/15 backdrop-blur-xs flex items-center justify-center shadow-inner mb-2">
              <Gift className="w-5 h-5 text-white animate-pulse" />
            </div>

            <h3 className="text-lg md:text-xl font-black tracking-tight leading-tight flex flex-col items-center justify-center">
              <span>🎁 ESPERE!</span>
              <span className="font-extrabold text-white text-xs md:text-sm mt-0.5">Sua compra está quase pronta...</span>
            </h3>
          </div>

          {/* Modal Body (Scrollable region with gutters) */}
          <div className="p-5 md:p-6 space-y-5 overflow-y-auto flex-1">
            
            {/* Section 2: Green Anchor Box (What they get on Upgrade) */}
            <div className="bg-emerald-50/90 border-2 border-emerald-400 rounded-2xl p-4.5 space-y-3 shadow-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-12 h-12 bg-emerald-200/20 rounded-full blur-lg pointer-events-none" />
              
              <p className="text-[11px] font-black text-emerald-800 uppercase tracking-widest text-center font-mono">
                👑 MUDANDO PARA O PLANO COMPLETO VOCÊ LEVA:
              </p>
              
              <ul className="space-y-2 text-xs text-emerald-950 font-extrabold">
                <li className="flex items-start gap-2">
                  <span className="w-4.5 h-4.5 rounded-full bg-emerald-500 text-white font-black shrink-0 flex items-center justify-center text-[10px]">✓</span>
                  <span className="leading-snug">100 Avaliações Prontas de Ciências (com Gabarito Oficial)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-4.5 h-4.5 rounded-full bg-emerald-500 text-white font-black shrink-0 flex items-center justify-center text-[10px]">✓</span>
                  <span className="leading-snug">Guia Completo de Planejamento de Ciências Prático</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-4.5 h-4.5 rounded-full bg-emerald-500 text-white font-black shrink-0 flex items-center justify-center text-[10px]">✓</span>
                  <span className="leading-snug">Atualizações Vitalícias Gratuitas de todos os materiais</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-4.5 h-4.5 rounded-full bg-emerald-500 text-white font-black shrink-0 flex items-center justify-center text-[10px]">✓</span>
                  <span className="leading-snug">Suporte VIP Prioritário 24/7 de nossa equipe pedagógica</span>
                </li>
              </ul>

              <div className="pt-2 border-t border-emerald-200 text-center space-y-1">
                <p className="text-xs font-bold text-slate-700">
                  Adicione apenas <span className="text-[#038f09] font-black text-sm">R$ 7,10</span> (menos que um cafezinho)
                </p>
                <div className="flex items-center justify-center gap-2 flex-wrap justify-center">
                  <span className="text-xl font-black text-slate-900 tracking-tight font-display">👑 COMPLETO POR APENAS:</span>
                  <div className="bg-[#039D1F] text-white text-[11px] font-black px-3 py-1 rounded-full shadow-sm whitespace-nowrap">
                    SÓ R$ 27,00
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Action Buttons */}
            <div className="space-y-3 pt-1">
              <button
                onClick={onAcceptUpsell}
                className="w-full py-4 bg-[#039D1F] hover:bg-[#028018] text-white rounded-2xl font-black text-xs md:text-sm tracking-wider uppercase shadow-xl shadow-emerald-500/25 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0 transition-all flex flex-col items-center justify-center gap-1 border border-emerald-600 animate-pulse"
                style={{ animationDuration: '2.5s' }}
              >
                <span className="leading-tight text-sm">QUERO O PACOTE COMPLETO!</span>
                <span className="text-[10px] opacity-90 font-bold tracking-normal whitespace-nowrap">Apenas R$ 27,00 (Pagamento Único)</span>
              </button>
              
              <button
                onClick={onDeclineUpsell}
                className="w-full py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-950 font-black rounded-2xl text-xs tracking-wider uppercase transition-all cursor-pointer text-center block border border-slate-300 shadow-sm"
              >
                Não, obrigado. Prefiro o pacote de R$ 19,90
              </button>
            </div>

            <p className="text-[10px] text-slate-400 font-bold text-center flex items-center justify-center gap-1 select-none pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              Sua garantia de 7 dias também cobre o Pacote Completo!
            </p>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
