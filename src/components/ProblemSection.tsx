import { motion } from 'motion/react';
import { X, Check, ArrowRight, ArrowDown } from 'lucide-react';

interface ProblemSectionProps {
  onCtaClick?: () => void;
}

export default function ProblemSection({ onCtaClick }: ProblemSectionProps) {
  const comparisonItems = [
    {
      before: "Domingo à noite caçando atividades no Google e Pinterest que nem funcionam na sala",
      after: "365+ experimentos e dinâmicas testadas prontas para imprimir e aplicar em 2 minutos"
    },
    {
      before: "Alunos no celular, conversando e com cara de tédio copiando matéria do quadro",
      after: "Turma 100% focada, participativa e disputando para fazer a atividade prática"
    },
    {
      before: "Tirar dinheiro do próprio bolso porque a escola não tem laboratório nem reagentes",
      after: "Experimentos de baixo custo com materiais simples do dia a dia (copo, água, vinagre)"
    },
    {
      before: "Horas perdidas digitando provas do zero e quebrando a cabeça para alinhar à BNCC",
      after: "30 Planos de Aula completos na BNCC + 100 Avaliações com gabarito em Word editável"
    },
    {
      before: "Chegar em casa exausto(a), levando trabalho para a cama e sem tempo para a família",
      after: "Paz de espírito, aulas de Ciências elogiadas por todos e seus domingos de volta"
    }
  ];

  const featureCards = [
    {
      emoji: "🧪",
      label: "AULAS 100% PRÁTICAS"
    },
    {
      emoji: "⏰",
      label: "DOMINGOS LIVRES"
    },
    {
      emoji: "🎯",
      label: "TURMA ENGAJADA"
    },
    {
      emoji: "📋",
      label: "100% BNCC EDITÁVEL"
    }
  ];

  return (
    <section id="transformacao" className="relative py-12 md:py-20 bg-white overflow-hidden border-b border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14 space-y-2">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight font-display">
            Sua <span className="text-[#039D1F]">Transformação</span>
          </h2>
          <div className="space-y-1 pt-1">
            <p className="text-base sm:text-xl font-bold text-slate-700">
              Reconhece alguma dessas situações na sua rotina?
            </p>
            <p className="text-sm sm:text-base font-medium text-slate-400">
              Veja como a sua vida de professor(a) de Ciências vai mudar:
            </p>
          </div>
        </div>

        {/* Comparison Rows with modeled clean layout */}
        <div className="space-y-3.5 sm:space-y-4 max-w-4xl mx-auto mb-12 sm:mb-16">
          {comparisonItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.07, duration: 0.35 }}
              className="bg-white rounded-2xl md:rounded-3xl border border-slate-200/90 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-md hover:border-emerald-200 transition-all px-4 sm:px-6 py-4 md:py-5"
            >
              <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-3 sm:gap-4 md:gap-6">
                
                {/* Left: Pain Point (Red circle X + Strikethrough text) */}
                <div className="flex items-start sm:items-center gap-3">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-rose-50 border border-rose-100 flex items-center justify-center shrink-0 text-rose-500 mt-0.5 sm:mt-0">
                    <X className="w-4 h-4 sm:w-4.5 sm:h-4.5 stroke-[2.5]" />
                  </div>
                  <span className="text-slate-400 font-medium text-xs sm:text-sm md:text-[15px] line-through decoration-rose-400/80 decoration-1.5 leading-relaxed">
                    {item.before}
                  </span>
                </div>

                {/* Middle: Arrow Right (Desktop) / Arrow Down (Mobile) */}
                <div className="hidden md:flex items-center justify-center text-emerald-500">
                  <ArrowRight className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div className="flex md:hidden items-center justify-center text-emerald-500 py-0.5">
                  <ArrowDown className="w-4 h-4 stroke-[2.5]" />
                </div>

                {/* Right: Transformation (Green circle Check + Bold Text) */}
                <div className="flex items-start sm:items-center gap-3">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0 text-[#039D1F] mt-0.5 sm:mt-0">
                    <Check className="w-4 h-4 sm:w-4.5 sm:h-4.5 stroke-[3]" />
                  </div>
                  <span className="text-slate-900 font-bold text-xs sm:text-sm md:text-[15px] leading-relaxed">
                    {item.after}
                  </span>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* 4 Bottom Highlight Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
          {featureCards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + idx * 0.06, duration: 0.35 }}
              className="bg-emerald-50/50 hover:bg-emerald-50/90 border border-emerald-200/70 rounded-2xl p-4 sm:p-5 flex flex-col items-center justify-center text-center space-y-2 sm:space-y-3 transition-colors shadow-2xs"
            >
              <span className="text-2xl sm:text-3xl filter drop-shadow-xs">
                {card.emoji}
              </span>
              <span className="text-xs sm:text-sm font-black text-slate-800 tracking-wide font-display">
                {card.label}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
