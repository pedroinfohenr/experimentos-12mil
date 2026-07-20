import { motion } from 'motion/react';
import { X, Check, ArrowRight } from 'lucide-react';

interface ProblemSectionProps {
  onCtaClick?: () => void;
}

export default function ProblemSection({ onCtaClick }: ProblemSectionProps) {
  const transformationRows = [
    {
      from: "Planejamento demorado e estressante",
      to: "Aulas prontas em minutos"
    },
    {
      from: "Alunos desinteressados e desmotivados",
      to: "Experimentos que engajam qualquer turma"
    },
    {
      from: "Material caro e desatualizado",
      to: "365+ experimentos e atividades prontas"
    },
    {
      from: "Domingos perdidos preparando aulas",
      to: "Sua paz de espírito e domingos livres de volta"
    }
  ];

  return (
    <section id="transformation-section" className="relative py-10 md:py-20 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-14 space-y-2.5">
          <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-black text-slate-950 tracking-tight font-display">
            Sua <span className="text-[#009b0a]">Transformação</span>
          </h2>
          <p className="text-base sm:text-lg md:text-2xl font-extrabold text-slate-700 max-w-2xl mx-auto leading-relaxed">
            Veja como sua rotina vai mudar:
          </p>
        </div>

        {/* Transformation Rows Stack */}
        <div className="space-y-4 max-w-3xl mx-auto">
          {transformationRows.map((row, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.4 }}
              className="flex flex-col md:flex-row items-stretch md:items-center justify-between border border-transparent rounded-2xl p-3 md:p-4 bg-[#00b51b] hover:shadow-xs transition-shadow duration-300 gap-3 md:gap-4"
            >
              {/* Left Column (Problem) */}
              <div className="flex-1 flex items-center gap-3 bg-white/10 border border-white/10 rounded-xl p-3 md:py-3 px-4">
                <div className="w-6 h-6 rounded-full bg-rose-500/20 text-rose-200 flex items-center justify-center font-bold text-xs shrink-0 select-none">
                  <X className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-xs md:text-sm font-medium text-white/75 line-through decoration-white/45 decoration-1.5 leading-snug">
                  {row.from}
                </span>
              </div>

              {/* Arrow Indicator */}
              <div className="flex items-center justify-center text-white select-none md:scale-100 shrink-0 transform rotate-90 md:rotate-0">
                <ArrowRight className="w-5 h-5" />
              </div>

              {/* Right Column (Solution) */}
              <div className="flex-1 flex items-center gap-3 bg-[#c1ffdc] border border-transparent rounded-xl p-3 md:py-3 px-4">
                <div className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs shrink-0 select-none">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-xs md:text-sm font-black text-[#000000] leading-snug">
                  {row.to}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
