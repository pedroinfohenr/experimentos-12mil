import { ShieldCheck, Check, Sparkles, ArrowRight, X, Crown } from 'lucide-react';
import { plans } from '../data';
import { PricingPlan } from '../types';
import { motion } from 'motion/react';

interface PricingSectionProps {
  onSelectPlan: (plan: PricingPlan) => void;
}

export default function PricingSection({ onSelectPlan }: PricingSectionProps) {
  const basicPlan = plans.find((p) => p.id === 'essencial') || plans[0];
  const completePlan = plans.find((p) => p.id === 'premium') || plans[1];

  return (
    <section id="planos" className="py-10 md:py-20 bg-slate-50 relative overflow-hidden grid-pattern">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-emerald-100/30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-amber-100/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16 space-y-3">
          <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-black text-slate-950 tracking-tight font-display leading-tight">
            Escolha o plano ideal para a sua <span className="text-[#039D1F]">rotina escolar</span>
          </h2>
          <p className="text-base sm:text-lg md:text-2xl font-extrabold text-slate-700 max-w-2xl mx-auto leading-relaxed">
            Economize tempo e garanta <span className="text-[#039D1F]">aulas práticas prontas para aplicar</span> com acesso imediato.
          </p>
        </div>

        {/* Two Offer Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* CARD 1: PLANO BÁSICO (R$10) - Reduced Content & Subdued Styling */}
          <motion.div
            id={`plan-card-${basicPlan.id}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-4 rounded-[24px] p-5 sm:p-6 flex flex-col justify-between bg-slate-50/80 text-slate-800 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden"
          >
            <div>
              {/* Badge */}
              <div className="inline-block bg-slate-200/70 text-slate-600 border border-slate-300/60 text-[9px] font-black tracking-widest uppercase px-2.5 py-1 rounded-full mb-3">
                ⚠️ {basicPlan.badge || 'CONTEÚDO REDUZIDO'}
              </div>

              {/* Title & Desc */}
              <div className="space-y-1.5 mb-5">
                <h3 className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight font-display">
                  {basicPlan.name}
                </h3>
                <p className="text-xs text-slate-500 font-bold leading-relaxed">
                  {basicPlan.description}
                </p>
              </div>

              {/* Price */}
              <div className="border-y border-slate-200/60 py-4 mb-5 space-y-0.5">
                <span className="text-[11px] text-slate-400 line-through font-medium block">
                  de R$ {basicPlan.originalPrice.toFixed(2).replace('.', ',')}
                </span>
                <div className="flex items-baseline gap-1 whitespace-nowrap">
                  <span className="text-[11px] font-black uppercase text-slate-500">Por apenas</span>
                  <span className="text-3xl sm:text-4xl font-black font-display text-slate-900">R$ 10,00</span>
                  <span className="text-[10px] font-bold text-slate-500">à vista</span>
                </div>
              </div>

              {/* Features list */}
              <ul className="space-y-2.5 mb-6">
                {basicPlan.features.map((feat, idx) => (
                  <li key={idx} className="text-xs flex items-start gap-2 font-bold">
                    {feat.included ? (
                      <div className="w-4 h-4 rounded-full bg-emerald-100 text-[#039D1F] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                    ) : (
                      <div className="w-4 h-4 rounded-full bg-rose-100 text-rose-500 flex items-center justify-center shrink-0 mt-0.5">
                        <X className="w-3 h-3 stroke-[3]" />
                      </div>
                    )}
                    <span className={feat.included ? 'text-slate-700' : 'text-slate-400 line-through'}>
                      {feat.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button & 80% professors notice */}
            <div className="space-y-3">
              <button
                onClick={() => onSelectPlan(basicPlan)}
                className="w-full py-3.5 bg-slate-200/80 hover:bg-slate-300 text-slate-700 rounded-xl font-black text-xs tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer border border-slate-300 font-display"
              >
                <span>{basicPlan.buttonText}</span>
                <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </button>

              <div className="bg-amber-50/90 border border-amber-200/80 rounded-xl p-2.5 text-center shadow-2xs">
                <p className="text-[10px] font-black text-amber-900 leading-tight">
                  ⚡ <span className="text-amber-900 underline">80% dos professores</span> escolhem o Plano Completo.
                </p>
              </div>

              <p className="text-[10px] text-slate-400 font-extrabold text-center flex items-center justify-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
                Acesso básico • 7 dias de garantia
              </p>
            </div>
          </motion.div>

          {/* CARD 2: PLANO COMPLETO (R$27) - HIGHLIGHTED BEST OPTION */}
          <motion.div
            id={`plan-card-${completePlan.id}`}
            initial={{ opacity: 0, scale: 0.98, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            animate={{ 
              boxShadow: [
                "0 20px 40px -10px rgba(3, 157, 31, 0.25), 0 0 0 3px rgba(3, 157, 31, 0.3)",
                "0 25px 50px -5px rgba(3, 157, 31, 0.45), 0 0 20px 6px rgba(3, 157, 31, 0.4)",
                "0 20px 40px -10px rgba(3, 157, 31, 0.25), 0 0 0 3px rgba(3, 157, 31, 0.3)"
              ]
            }}
            transition={{ 
              boxShadow: { repeat: Infinity, duration: 3.5, ease: "easeInOut" },
              duration: 0.4
            }}
            viewport={{ once: true }}
            className="lg:col-span-8 rounded-[28px] sm:rounded-[32px] p-5 sm:p-8 md:p-10 flex flex-col justify-between relative bg-white text-slate-800 border-[3.5px] border-[#039D1F] shadow-2xl z-20 overflow-hidden transform lg:-translate-y-2"
          >
            {/* Top Recommended Banner */}
            <div className="absolute top-0 right-0 left-0 bg-gradient-to-r from-[#039D1F] via-[#04bd26] to-[#039D1F] text-white text-[10px] xs:text-xs sm:text-sm font-black tracking-wider uppercase px-4 py-2.5 shadow-md flex items-center justify-center gap-1.5 select-none z-10 border-b border-emerald-400/40">
              <Crown className="w-3.5 h-3.5 sm:w-5 sm:h-5 fill-amber-300 text-amber-300 animate-bounce shrink-0" />
              <span className="drop-shadow-xs font-display">MAIS ESCOLHIDO</span>
              <Sparkles className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-amber-300 shrink-0" />
            </div>

            <div className="pt-9 sm:pt-10">
              {/* Card Title & Desc */}
              <div className="space-y-1.5 mb-5">
                <h3 className="text-2xl xs:text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-display">
                  {completePlan.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-bold leading-relaxed">
                  {completePlan.description}
                </p>
              </div>

              {/* Pricing Box */}
              <div className="border-y border-emerald-500/15 py-4 sm:py-6 mb-5 space-y-2 bg-emerald-50/50 px-3.5 sm:px-5 rounded-2xl">
                <span className="text-[11px] sm:text-xs text-slate-400 line-through font-medium block">
                  de R$ {completePlan.originalPrice.toFixed(2).replace('.', ',')}
                </span>
                
                <div className="flex items-baseline gap-1.5 text-[#039D1F] flex-wrap sm:flex-nowrap">
                  <span className="text-[11px] sm:text-xs font-black uppercase text-[#039D1F]">Por apenas</span>
                  <span className="text-3xl xs:text-4xl sm:text-6xl font-black font-display text-[#039D1F]">R$ 27,00</span>
                  <span className="text-[11px] sm:text-xs font-bold text-slate-500">à vista</span>
                </div>

                <div className="mt-2 flex">
                  <span className="bg-amber-100 text-amber-900 border border-amber-200 text-[10px] xs:text-[11px] font-black px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full uppercase tracking-wider flex items-center gap-1 shadow-xs leading-tight">
                    🎁 VOCÊ ECONOMIZA R$ 227,00 HOJE!
                  </span>
                </div>
              </div>

              {/* Main Features */}
              <div className="space-y-4 mb-8">
                <p className="text-xs font-black uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-[#039D1F]" />
                  TUDO O QUE ESTÁ INCLUSO NO PLANO COMPLETO:
                </p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {completePlan.features.map((feat, idx) => (
                    <li key={idx} className="text-xs sm:text-sm flex items-start gap-2 text-slate-800 font-bold">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/15 text-[#039D1F] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 stroke-[3.5]" />
                      </div>
                      <span className="leading-snug">{feat.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Action CTA Button - Pulsing border / glow without fading opacity */}
            <div>
              <motion.button
                onClick={() => onSelectPlan(completePlan)}
                animate={{
                  boxShadow: [
                    "0 0 0 0px rgba(3, 157, 31, 0.7), 0 10px 25px -5px rgba(3, 157, 31, 0.4)",
                    "0 0 0 8px rgba(3, 157, 31, 0), 0 15px 35px 0px rgba(3, 157, 31, 0.6)",
                    "0 0 0 0px rgba(3, 157, 31, 0.7), 0 10px 25px -5px rgba(3, 157, 31, 0.4)"
                  ],
                  scale: [1, 1.015, 1]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2.2,
                  ease: "easeInOut"
                }}
                className="w-full py-5 bg-[#039D1F] hover:bg-[#028018] text-white rounded-2xl font-black text-sm sm:text-base tracking-wider uppercase transition-colors duration-200 flex items-center justify-center gap-2.5 cursor-pointer border-2 border-emerald-400 font-display opacity-100"
              >
                <span>{completePlan.buttonText}</span>
                <ArrowRight className="w-5 h-5 stroke-[2.5]" />
              </motion.button>

              <p className="text-[11px] text-slate-500 font-extrabold mt-3.5 text-center flex items-center justify-center gap-1">
                <ShieldCheck className="w-4 h-4 text-[#039D1F]" />
                Pagamento 100% seguro • Acesso vitalício imediato
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
