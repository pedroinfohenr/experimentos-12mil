import { ShieldCheck, Check, Sparkles, ArrowRight, X, Crown, MessageCircle, Mail, Zap, Gift } from 'lucide-react';
import { plans } from '../data';
import { PricingPlan } from '../types';
import { motion } from 'motion/react';

interface PricingSectionProps {
  onSelectPlan: (plan: PricingPlan) => void;
}

export default function PricingSection({ onSelectPlan }: PricingSectionProps) {
  const basicPlan = plans.find((p) => p.id === 'essencial') || plans[0];
  const completePlan = plans.find((p) => p.id === 'premium') || plans[1];

  // Complete items stack in exact requested order
  const completeFeatures = [
    '365 Experimentos Práticos de Ciências - 6º ao 9º ano e Ensino Médio (Valor R$ 97,00)',
    'Experimentos com Materiais Simples e Acessíveis',
    'Guia Passo a Passo Pronto para Aplicar em Sala de Aula',
    'Conteúdo Organizado por Temas e Séries',
    '🎁 BÔNUS 1: Coleção com 30 Planos de Aula Prontos - BNCC (Valor R$ 37,00)',
    '🎁 BÔNUS 2: 50 Atividades Prontas para Imprimir - Word & PDF (Valor R$ 47,00)',
    '🎁 BÔNUS 3: Pacote Completo com 100 Avaliações de Ciências com Gabarito (Valor R$ 47,00)',
    '🎁 BÔNUS 4: Guia do Professor & Planejamento Anual BNCC Mapeado (Valor R$ 55,00)',
    '🎁 BÔNUS 5: Coletânea de Experimentos de Física e Biologia (Valor R$ 49,00)',
    'Envio Imediato Direto no seu E-mail e no seu WhatsApp',
    'Acesso Vitalício sem Mensalidades ou Taxas Extras',
    'Garantia Incondicional de 7 Dias'
  ];

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
            Receba acesso imediato e comece a dar <span className="text-[#039D1F]">aulas mais práticas, dinâmicas e envolventes</span> já na próxima aula.
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
                  ⚡ <span className="text-amber-900 underline">80% dos professores</span> escolhem o plano ao lado.
                </p>
              </div>

              <p className="text-[10px] text-slate-500 font-extrabold text-center flex items-center justify-center gap-1">
                <Mail className="w-3 h-3 text-slate-400 shrink-0" />
                Envio pelo WhatsApp e E-mail • 7 dias de garantia
              </p>
            </div>
          </motion.div>

          {/* CARD 2: PLANO COMPLETO (R$27) - HIGHLIGHTED BEST OPTION WITH MASSIVE VALUE STACK */}
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
                  Acesso total ao acervo completo de Ciências + 100 Avaliações + 30 Planos de Aula + TODOS os 5 bônus inclusos!
                </p>
              </div>

              {/* Pricing Box - Huge Explosion Price Display */}
              <div className="border-y-2 border-emerald-500/20 py-5 sm:py-6 mb-6 space-y-2 bg-emerald-50/70 px-4 sm:px-6 rounded-2xl shadow-inner">
                <div className="flex items-center justify-between flex-wrap gap-1">
                  <span className="text-xs sm:text-sm text-slate-500 line-through font-bold">
                    de R$ 332,00
                  </span>
                  <span className="text-[10px] sm:text-xs font-black bg-rose-500 text-white px-2.5 py-1 rounded-md uppercase tracking-wider">
                    -92% DESCONTO HOJE
                  </span>
                </div>
                
                <div className="flex items-baseline gap-2 text-[#039D1F] flex-wrap sm:flex-nowrap pt-1">
                  <span className="text-xs sm:text-sm font-black uppercase text-[#039D1F]">Por apenas</span>
                  <span className="text-5xl xs:text-6xl sm:text-7xl font-black font-display text-[#039D1F] tracking-tight">R$ 27,00</span>
                  <span className="text-xs sm:text-sm font-black text-slate-700">à vista (pagamento único)</span>
                </div>

                <div className="mt-2.5 flex">
                  <span className="bg-amber-300 text-amber-950 border border-amber-400 text-[10px] xs:text-xs font-black px-3.5 py-1.5 rounded-full uppercase tracking-wider flex items-center gap-1.5 shadow-xs leading-tight">
                    <Gift className="w-4 h-4 text-amber-950 shrink-0" />
                    VOCÊ ECONOMIZA R$ 305,00 COMPRANDO AGORA!
                  </span>
                </div>
              </div>

              {/* Complete Features List (Same clean style as basic plan, no individual boxed cards) */}
              <div className="space-y-3 mb-6">
                <p className="text-xs font-black uppercase tracking-wider text-slate-900 flex items-center gap-1.5 border-b border-slate-200 pb-2">
                  <Sparkles className="w-4 h-4 text-[#039D1F]" />
                  TUDO O QUE ESTÁ INCLUSO NO PLANO COMPLETO:
                </p>

                <ul className="space-y-2.5 sm:space-y-3">
                  {completeFeatures.map((feat, idx) => (
                    <li key={idx} className="text-xs sm:text-sm flex items-start gap-2.5 text-slate-800 font-extrabold">
                      <div className="w-5 h-5 rounded-full bg-[#039D1F] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                        <Check className="w-3.5 h-3.5 stroke-[3.5]" />
                      </div>
                      <span className="leading-snug">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Action CTA Button & Delivery Info */}
            <div className="pt-2">
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
                className="w-full py-5 bg-[#039D1F] hover:bg-[#028018] text-white rounded-2xl font-black text-sm sm:text-base tracking-wider uppercase transition-colors duration-200 flex items-center justify-center gap-2.5 cursor-pointer border-2 border-emerald-400 font-display opacity-100 shadow-xl"
              >
                <span>{completePlan.buttonText}</span>
                <ArrowRight className="w-5 h-5 stroke-[2.5]" />
              </motion.button>

              <div className="mt-3.5 space-y-2 text-center">
                <div className="inline-flex items-center justify-center gap-2 bg-emerald-100/90 border border-emerald-300 text-[#026814] font-black text-xs sm:text-sm px-4 py-2.5 rounded-full shadow-2xs w-full">
                  <MessageCircle className="w-4 h-4 text-[#039D1F] fill-[#039D1F]/20 shrink-0" />
                  <Mail className="w-4 h-4 text-[#039D1F] shrink-0" />
                  <span>Envio Imediato Direto no seu E-mail e WhatsApp</span>
                </div>

                <p className="text-[11px] text-slate-500 font-extrabold flex items-center justify-center gap-1 pt-0.5">
                  <ShieldCheck className="w-4 h-4 text-[#039D1F]" />
                  Pagamento 100% seguro • Acesso vitalício imediato • Garantia 7 dias
                </p>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

