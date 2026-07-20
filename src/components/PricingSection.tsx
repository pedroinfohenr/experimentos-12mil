import { ShieldCheck, Check, Sparkles, ArrowRight } from 'lucide-react';
import { plans } from '../data';
import { PricingPlan } from '../types';
import { motion } from 'motion/react';

interface PricingSectionProps {
  onSelectPlan: (plan: PricingPlan) => void;
}

export default function PricingSection({ onSelectPlan }: PricingSectionProps) {
  // Now there is only ONE plan displayed on the landing page (the 19,90 plan, which is our basic/essential plan)
  const singlePlan = plans.find((p) => p.id === 'essencial') || plans[0];

  return (
    <section id="planos" className="py-10 md:py-20 bg-white relative overflow-hidden grid-pattern">
      
      {/* Decorative colored blobs */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-amber-100/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16 space-y-3">
          <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-black text-slate-950 tracking-tight font-display leading-tight">
            Tudo o que você precisa para <span className="text-[#039D1F]">transformar suas aulas.</span>
          </h2>
          <p className="text-base sm:text-lg md:text-2xl font-extrabold text-slate-700 max-w-2xl mx-auto leading-relaxed">
            Mais de <span className="text-[#039D1F]">365 experimentos prontos</span> com acesso imediato. Garanta sua oferta exclusiva hoje:
          </p>
        </div>

        {/* Single Centered High-Converting Pricing Card */}
        <div className="max-w-xl mx-auto">
          <motion.div
            id={`plan-card-${singlePlan.id}`}
            initial={{ opacity: 0, scale: 0.98, y: 15 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            animate={{ 
              scale: [1, 1.02, 1],
              boxShadow: [
                "0 15px 30px -10px rgba(3, 157, 31, 0.2), 0 0 0 2px rgba(3, 157, 31, 0.08)",
                "0 20px 40px -5px rgba(3, 157, 31, 0.35), 0 0 15px 4px rgba(3, 157, 31, 0.18)",
                "0 15px 30px -10px rgba(3, 157, 31, 0.2), 0 0 0 2px rgba(3, 157, 31, 0.08)"
              ]
            }}
            transition={{ 
              scale: { repeat: Infinity, duration: 3.5, ease: "easeInOut" },
              boxShadow: { repeat: Infinity, duration: 3.5, ease: "easeInOut" }
            }}
            viewport={{ once: true }}
            className="rounded-[32px] p-6 md:p-10 flex flex-col justify-between relative bg-white text-slate-800 border-[3.5px] border-[#039D1F] shadow-2xl z-25 overflow-hidden"
          >
            {/* Decorative diagonal shine effect */}
            <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-[#039D1F]/5 opacity-40 animate-pulse pointer-events-none" style={{ animationDuration: '4s' }}></div>
            
            {/* Visual "fricotes" (decorative elements) */}
            <div className="absolute top-4 left-4 text-[#039D1F]/15 pointer-events-none">
              <Sparkles className="w-8 h-8 animate-pulse" />
            </div>
            <div className="absolute bottom-6 right-6 text-emerald-500/10 pointer-events-none">
              <Sparkles className="w-12 h-12 animate-bounce" style={{ animationDuration: '5s' }} />
            </div>

            {/* High-Converting Banner */}
            <div className="absolute -top-1 right-0 bg-[#039D1F] text-white text-[11px] font-black tracking-widest uppercase px-5 py-2 rounded-bl-2xl shadow-md flex items-center gap-1.5 select-none z-10">
              <Sparkles className="w-3.5 h-3.5 fill-white animate-spin" style={{ animationDuration: '6s' }} />
              <span>🔥 OFERTA EXCLUSIVA</span>
            </div>

            {/* Card Title & Desc */}
            <div className="space-y-6 relative z-10">
              <div className="space-y-2 text-center md:text-left pt-2">
                <div className="flex flex-wrap items-center gap-2 justify-center md:justify-start">
                  <h3 className="text-3xl font-black text-slate-900 tracking-tight font-display">
                    {singlePlan.name}
                  </h3>
                </div>
                <p className="text-sm text-slate-500 font-bold leading-relaxed">
                  {singlePlan.description}
                </p>
              </div>

              {/* Pricing Info block (Clean, massive, single line!) */}
              <div className="border-y border-emerald-500/10 py-6 text-center md:text-left space-y-2 relative bg-emerald-50/40 px-5 rounded-2xl">
                <span className="text-xs text-slate-400 line-through block font-medium">
                  de R$ {singlePlan.originalPrice.toFixed(2).replace('.', ',')}
                </span>
                
                <div className="flex items-baseline justify-center md:justify-start gap-1.5 text-[#039D1F] whitespace-nowrap">
                  <span className="text-xs font-black uppercase tracking-wider text-[#039D1F]/85 mr-1">Por apenas</span>
                  <span className="text-4xl xs:text-5xl sm:text-6xl font-black font-display tracking-tight text-[#039D1F]">R$ 19,90</span>
                  <span className="text-xs font-bold text-slate-500 ml-1.5">à vista</span>
                </div>

                {/* Savings tag (Static, no bounce!) */}
                <div className="mt-2 flex justify-center md:justify-start">
                  <span className="bg-amber-100 text-amber-800 border border-amber-200 text-[11px] font-black px-3.5 py-1.5 rounded-full uppercase tracking-wider flex items-center gap-1 shadow-xs">
                    🎁 VOCÊ ECONOMIZA R$ 77,10 HOJE!
                  </span>
                </div>
              </div>

              {/* Features List divided by Categories with Bonus Golden/Yellow Box */}
              <div className="space-y-4">
                {/* Normal/Standard Features */}
                <div className="space-y-2">
                  <ul className="space-y-2.5 text-left">
                    {singlePlan.features
                      .filter((feat) => !feat.text.startsWith('🎁'))
                      .map((feat, fIdx) => (
                        <li
                          key={fIdx}
                          className="text-xs md:text-sm flex items-start gap-2.5 text-slate-700 font-bold"
                        >
                          <div className="w-5.5 h-5.5 rounded-full bg-emerald-500/10 text-[#039D1F] flex items-center justify-center shrink-0 shadow-xs">
                            <Check className="w-3.5 h-3.5 stroke-[3.5]" />
                          </div>
                          <span className="leading-tight">{feat.text}</span>
                        </li>
                      ))}
                  </ul>
                </div>

                {/* Bonus Features inside a custom Golden Box */}
                {singlePlan.features.some((feat) => feat.text.startsWith('🎁')) && (
                  <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 md:p-5 space-y-3 shadow-xs">
                    <p className="text-[11px] font-black uppercase tracking-wider text-amber-800 flex items-center gap-1.5 select-none font-mono">
                      🎁 BÔNUS EXCLUSIVOS JÁ INCLUSOS:
                    </p>
                    <ul className="space-y-2 text-left">
                      {singlePlan.features
                        .filter((feat) => feat.text.startsWith('🎁'))
                        .map((feat, fIdx) => {
                          const displayText = feat.text.replace('🎁', '').trim();
                          return (
                            <li
                              key={fIdx}
                              className="text-xs md:text-sm flex items-start gap-2 text-amber-950 font-extrabold"
                            >
                              <span className="text-[#039D1F] font-black text-sm shrink-0">✓</span>
                              <span className="leading-tight">{displayText}</span>
                            </li>
                          );
                        })}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Action CTA Trigger (Vibrant Green Button!) with security guarantee underneath */}
            <div className="pt-8 mt-6 relative z-10 text-center">
              <button
                onClick={() => onSelectPlan(singlePlan)}
                className="w-full py-5 bg-[#039D1F] hover:bg-[#028018] text-white rounded-2xl font-black text-sm sm:text-base tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer shadow-2xl shadow-[#039D1F]/20 border border-[#039D1F] transform hover:-translate-y-1 active:scale-95 font-display animate-pulse"
                style={{ animationDuration: '3s' }}
              >
                <span>{singlePlan.buttonText}</span>
                <ArrowRight className="w-5 h-5 stroke-[2.5]" />
              </button>

              {/* Moved payment security guarantee directly here */}
              <p className="text-[11px] text-slate-500 font-extrabold mt-3.5 flex items-center justify-center gap-1">
                <ShieldCheck className="w-4 h-4 text-[#039D1F]" />
                Pagamento 100% seguro • 7 dias de garantia incondicional
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
