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
      badge: "FORMATO PDF",
      icon: Printer,
      gradient: "from-[#039D1F]/10 to-emerald-50/50"
    }
  ];

  return (
    <section id="indicadores" className="py-10 md:py-16 bg-slate-50 relative overflow-hidden border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Indicators Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {indicators.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.4 }}
                className="bg-white rounded-2xl md:rounded-3xl p-5 md:p-6 border border-emerald-100/90 shadow-md hover:shadow-xl hover:border-[#039D1F]/40 transition-all duration-300 flex flex-col items-center text-center justify-between group relative overflow-hidden"
              >
                {/* Background ambient glow */}
                <div className={`absolute -top-10 -right-10 w-28 h-28 bg-gradient-to-br ${item.gradient} rounded-full blur-xl opacity-60 group-hover:scale-125 transition-transform duration-500 pointer-events-none`} />

                <div className="flex items-center justify-between w-full mb-3">
                  <span className="text-[10px] sm:text-xs font-black text-[#039D1F] bg-emerald-50 px-2.5 py-1 rounded-full uppercase tracking-wider border border-emerald-100">
                    {item.badge}
                  </span>
                  <div className="w-8 h-8 rounded-xl bg-emerald-50 text-[#039D1F] flex items-center justify-center shrink-0">
                    <IconComponent className="w-4 h-4 stroke-[2.5]" />
                  </div>
                </div>

                <div className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 font-display tracking-tight text-[#039D1F] my-2 group-hover:scale-105 transition-transform">
                  {item.value}
                </div>

                <p className="text-xs sm:text-sm font-extrabold text-slate-700 leading-snug mt-1">
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
