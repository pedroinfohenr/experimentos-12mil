import { motion } from 'motion/react';
import { X, Check, ArrowRight } from 'lucide-react';

interface ProblemSectionProps {
  onCtaClick?: () => void;
}

export default function ProblemSection({ onCtaClick }: ProblemSectionProps) {
  const transformationRows = [
    {
      from: "Perder horas procurando e planejando aulas do zero",
      to: "Economizar tempo com 365 experimentos prontos para aplicar em minutos"
    },
    {
      from: "Procurar novas atividades na internet todos os dias",
      to: "Parar de procurar atividades com material completo de Ciências"
    },
    {
      from: "Alunos desatentos e desinteressados nas teorias",
      to: "Aulas mais práticas com alunos 100% engajados e apaixonados"
    },
    {
      from: "Domingos e noites perdidos preparando conteúdo",
      to: "Material pronto para imprimir e aplicar com tempo livre garantido"
    }
  ];

  return (
    <section id="transformation-section" className="relative py-8 md:py-20 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 md:mb-14 space-y-2">
          <h2 className="text-2xl xs:text-3xl sm:text-5xl md:text-6xl font-black text-slate-950 tracking-tight font-display">
            Sua <span className="text-[#009b0a]">Transformação</span>
          </h2>
          <p className="text-sm xs:text-base sm:text-lg md:text-2xl font-extrabold text-slate-700 max-w-2xl mx-auto leading-relaxed">
            Veja como sua rotina vai mudar:
          </p>
        </div>

        {/* Transformation Rows Stack */}
        <div className="space-y-3 md:space-y-4 max-w-3xl mx-auto">
          {transformationRows.map((row, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.4 }}
              className="flex flex-col md:flex-row items-stretch md:items-center justify-between border border-transparent rounded-2xl p-2.5 xs:p-3 md:p-4 bg-[#00b51b] hover:shadow-xs transition-shadow duration-300 gap-2 xs:gap-3 md:gap-4"
            >
              {/* Left Column (Problem) */}
              <div className="flex-1 flex items-center gap-2.5 xs:gap-3 bg-white/10 border border-white/10 rounded-xl p-2.5 xs:p-3 md:py-3 px-3.5 xs:px-4">
                <div className="w-5 h-5 xs:w-6 xs:h-6 rounded-full bg-rose-500/20 text-rose-200 flex items-center justify-center font-bold text-xs shrink-0 select-none">
                  <X className="w-3 h-3 xs:w-3.5 xs:h-3.5 stroke-[3]" />
                </div>
                <span className="text-[11px] xs:text-xs md:text-sm font-medium text-white/75 line-through decoration-white/45 decoration-1.5 leading-snug">
                  {row.from}
                </span>
              </div>

              {/* Arrow Indicator */}
              <div className="flex items-center justify-center text-white select-none md:scale-100 shrink-0 transform rotate-90 md:rotate-0 py-0.5">
                <ArrowRight className="w-4 h-4 xs:w-5 xs:h-5" />
              </div>

              {/* Right Column (Solution) */}
              <div className="flex-1 flex items-center gap-2.5 xs:gap-3 bg-[#c1ffdc] border border-transparent rounded-xl p-2.5 xs:p-3 md:py-3 px-3.5 xs:px-4">
                <div className="w-5 h-5 xs:w-6 xs:h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs shrink-0 select-none">
                  <Check className="w-3 h-3 xs:w-3.5 xs:h-3.5 stroke-[3]" />
                </div>
                <span className="text-[11px] xs:text-xs md:text-sm font-black text-[#000000] leading-snug">
                  {row.to}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Green CTA Button (ORDEM 5 & 12) */}
        <div className="mt-10 flex justify-center w-full max-w-md mx-auto">
          <motion.button
            onClick={onCtaClick}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-4.5 md:py-5 bg-[#05b41b] hover:bg-[#049e18] text-white rounded-2xl font-black text-xs xs:text-sm sm:text-base md:text-lg tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer shadow-xl shadow-[#05b41b]/25 font-display border border-[#05b41b]"
          >
            QUERO ACESSAR AGORA
            <ArrowRight className="w-5 h-5 shrink-0 text-white" />
          </motion.button>
        </div>

      </div>
    </section>
  );
}
