import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Sparkles, BookOpen, FileCheck, Layers, Printer } from 'lucide-react';

interface HighlightsSectionProps {
  onCtaClick?: () => void;
}

export default function HighlightsSection({ onCtaClick }: HighlightsSectionProps) {
  const indicators = [
    {
      value: "365",
      label: "Experimentos prontos.",
      badge: "ACERVO COMPLETO",
      icon: BookOpen,
      gradient: "from-[#039D1F]/10 to-emerald-50/50"
    },
    {
      value: "+100",
      label: "Avaliações prontas para aplicar.",
      badge: "COM GABARITO",
      icon: FileCheck,
      gradient: "from-[#039D1F]/10 to-emerald-50/50"
    },
    {
      value: "+30",
      label: "Planos de aula completos.",
      badge: "ALINHADOS À BNCC",
      icon: Layers,
      gradient: "from-[#039D1F]/10 to-emerald-50/50"
    },
    {
      value: "100%",
      label: "Pronto para imprimir e aplicar.",
      badge: "FORMATO FLASHCARDS",
      icon: Printer,
      gradient: "from-[#039D1F]/10 to-emerald-50/50"
    }
  ];

  return (
    <section id="indicadores" className="py-8 md:py-16 bg-slate-50 relative overflow-hidden border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-3.5 sm:px-8 relative z-10">
        
        {/* Indicators Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6">
          {indicators.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.4 }}
                className="bg-white rounded-xl sm:rounded-3xl p-3 xs:p-4 sm:p-6 border border-emerald-100/90 shadow-xs sm:shadow-md hover:shadow-xl hover:border-[#039D1F]/40 transition-all duration-300 flex flex-col items-center text-center justify-between group relative overflow-hidden"
              >
                {/* Background ambient glow */}
                <div className={`absolute -top-10 -right-10 w-28 h-28 bg-gradient-to-br ${item.gradient} rounded-full blur-xl opacity-60 group-hover:scale-125 transition-transform duration-500 pointer-events-none`} />

                <div className="flex items-center justify-between w-full gap-1 mb-2 sm:mb-3">
                  <span className="text-[8.5px] xs:text-[10px] sm:text-xs font-black text-[#039D1F] bg-emerald-50 px-1.5 xs:px-2.5 py-0.5 sm:py-1 rounded-full uppercase tracking-tight xs:tracking-wider border border-emerald-100 shrink min-w-0 truncate">
                    {item.badge}
                  </span>
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-emerald-50 text-[#039D1F] flex items-center justify-center shrink-0">
                    <IconComponent className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
                  </div>
                </div>

                <div className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 font-display tracking-tight text-[#039D1F] my-1 sm:my-2 group-hover:scale-105 transition-transform">
                  {item.value}
                </div>

                <p className="text-[11px] xs:text-xs sm:text-sm font-extrabold text-slate-700 leading-snug mt-0.5">
                  {item.label}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
