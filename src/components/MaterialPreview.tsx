import { ArrowRight, ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';

// Import user-uploaded experiment card images
import imgAcidosRepolho from '../assets/images/acidos_01_repolho.png';
import imgCardAlimentos from '../assets/images/card_alimentos_5.png';
import imgCardAlimentosExtra from '../assets/images/card_alimentos_5-1.png';
import imgCardBiodiversidade from '../assets/images/card_biodiversidade_3.png';
import imgCardCozinha from '../assets/images/card_cozinha_2.png';
import imgCardTermica from '../assets/images/card_termica_7.png';
import imgCardTransformacao from '../assets/images/card_transformacao_2.png';
import imgCondensacao from '../assets/images/condensacao_card_1.png';
import imgDensidade from '../assets/images/densidade_card_2.png';
import imgInerciaOrbita from '../assets/images/MovimentoPlanetas_Card_5_InerciaOrbita.png';
import imgReacoesFermento from '../assets/images/reacoes_03_fermento.png';
import imgCapacidadePulmonar from '../assets/images/Respiracao_Card_2_CapacidadePulmonar.png';
import imgEquilibrioOuvido from '../assets/images/Sentidos_Card_8_EquilibrioOuvido.png';

interface MaterialPreviewProps {
  onCtaClick?: () => void;
}

export default function MaterialPreview({ onCtaClick }: MaterialPreviewProps) {
  // First set of materials (Row 1 - Carousel Scrolling Left)
  const row1Materials = [
    { title: "Ácidos e Bases com Repolho Roxo", image: imgAcidosRepolho },
    { title: "Nutrientes nos Alimentos", image: imgCardAlimentos },
    { title: "Biodiversidade e Teia Alimentar", image: imgCardBiodiversidade },
    { title: "Química e Ciência na Cozinha", image: imgCardCozinha },
    { title: "Isolamento e Energia Térmica", image: imgCardTermica },
    { title: "Transformações da Matéria", image: imgCardTransformacao },
    { title: "Condensação e Ciclo da Água", image: imgCondensacao },
  ];

  // Second set of materials (Row 2 - Carousel Scrolling Right)
  const row2Materials = [
    { title: "Densidade dos Materiais", image: imgDensidade },
    { title: "Reações com Fermento Biológico", image: imgReacoesFermento },
    { title: "Órbitas e Gravidade Terrestre", image: imgInerciaOrbita },
    { title: "Medindo a Capacidade Pulmonar", image: imgCapacidadePulmonar },
    { title: "Ouvido Interno e o Equilíbrio", image: imgEquilibrioOuvido },
    { title: "Propriedades dos Alimentos", image: imgCardAlimentosExtra },
    { title: "Torre de Densidade dos Líquidos", image: imgDensidade },
  ];

  // Quadruplicating to ensure seamless infinite looping with smaller cards
  const duplicatedRow1 = [...row1Materials, ...row1Materials, ...row1Materials, ...row1Materials];
  const duplicatedRow2 = [...row2Materials, ...row2Materials, ...row2Materials, ...row2Materials];

  return (
    <section id="demonstracao" className="py-10 md:py-20 bg-slate-50 border-b border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 md:mb-10 px-4 sm:px-8">
          <h2 className="text-2xl xs:text-3xl sm:text-5xl md:text-6xl font-black text-slate-950 tracking-tight font-display leading-tight">
            Conheça <span className="text-[#039D1F]">seu material:</span>
          </h2>
        </div>

        {/* Centerpiece Container with Infinite Auto-scrolling Dual Marquee */}
        <div className="flex flex-col items-center justify-center relative select-none">
          
          {/* Main Carrossel Container */}
          <div className="relative w-full overflow-hidden py-2 space-y-4 md:space-y-6">
            
            {/* Soft faded edges overlay to make the carousel transition beautifully on the margins */}
            <div className="absolute left-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-l from-slate-50 via-slate-50/80 to-transparent z-10 pointer-events-none"></div>

            {/* ROW 1: Scrolling Left (faster speed: 22s) */}
            <div className="w-full overflow-hidden">
              <motion.div
                className="flex gap-3 md:gap-5 w-max"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  ease: "linear",
                  duration: 22,
                  repeat: Infinity,
                }}
              >
                {duplicatedRow1.map((material, idx) => (
                  <div
                    key={`row1-${idx}`}
                    className="w-[160px] xs:w-[190px] sm:w-[220px] md:w-[270px] aspect-[3/4] flex-shrink-0 bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-slate-100 hover:shadow-[0_20px_50px_rgba(3,157,31,0.15)] transition-all duration-300 transform hover:-translate-y-1.5 hover:border-[#07b407]/30"
                  >
                    <img
                      src={material.image}
                      alt={material.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </motion.div>
            </div>

            {/* ROW 2: Scrolling Right (faster speed: 25s) */}
            <div className="w-full overflow-hidden">
              <motion.div
                className="flex gap-3 md:gap-5 w-max"
                animate={{ x: ["-50%", "0%"] }}
                transition={{
                  ease: "linear",
                  duration: 25,
                  repeat: Infinity,
                }}
              >
                {duplicatedRow2.map((material, idx) => (
                  <div
                    key={`row2-${idx}`}
                    className="w-[160px] xs:w-[190px] sm:w-[220px] md:w-[270px] aspect-[3/4] flex-shrink-0 bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-slate-100 hover:shadow-[0_20px_50px_rgba(3,157,31,0.15)] transition-all duration-300 transform hover:-translate-y-1.5 hover:border-[#07b407]/30"
                  >
                    <img
                      src={material.image}
                      alt={material.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </motion.div>
            </div>

          </div>

          {/* High-Converting CTA Button: BAIXAR TUDO AGORA */}
          <div className="mt-8 md:mt-12 flex justify-center w-full px-6">
            <motion.button
              onClick={onCtaClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-10 py-5 bg-[#039D1F] hover:bg-[#028018] text-white rounded-2xl font-black text-sm sm:text-lg uppercase tracking-wider shadow-xl shadow-[#039D1F]/20 flex items-center justify-center gap-2.5 cursor-pointer transition-all duration-300 font-display border border-[#039D1F]"
            >
              QUERO MEUS EXPERIMENTOS
              <ArrowRight className="w-5 h-5 shrink-0 text-white" />
            </motion.button>
          </div>

          {/* Bullets: cards dinamicos, facil impressao, as crianças amam!!! */}
          <div className="mt-8 md:mt-10 mx-2 sm:mx-6 flex flex-row flex-nowrap justify-center items-center gap-2 xs:gap-3 sm:gap-6 md:gap-8 bg-white px-3 xs:px-6 md:px-10 py-3.5 md:py-5 rounded-2xl border border-slate-100 shadow-md z-10 relative max-w-full overflow-x-auto no-scrollbar">
            <span className="flex items-center gap-1.5 xs:gap-2 md:gap-2.5 text-slate-800 font-extrabold text-[11px] xs:text-xs sm:text-base md:text-lg tracking-tight whitespace-nowrap">
              <span className="w-4 h-4 xs:w-5 xs:h-5 md:w-6 md:h-6 rounded-full bg-emerald-500/15 flex items-center justify-center text-[#039D1F] font-black text-[10px] xs:text-xs md:text-sm shrink-0">✓</span>
              Cards dinâmicos
            </span>
            <span className="text-slate-300 font-bold text-xs">|</span>
            <span className="flex items-center gap-1.5 xs:gap-2 md:gap-2.5 text-slate-800 font-extrabold text-[11px] xs:text-xs sm:text-base md:text-lg tracking-tight whitespace-nowrap">
              <span className="w-4 h-4 xs:w-5 xs:h-5 md:w-6 md:h-6 rounded-full bg-emerald-500/15 flex items-center justify-center text-[#039D1F] font-black text-[10px] xs:text-xs md:text-sm shrink-0">✓</span>
              Fácil impressão
            </span>
            <span className="text-slate-300 font-bold text-xs">|</span>
            <span className="flex items-center gap-1.5 xs:gap-2 md:gap-2.5 text-slate-800 font-extrabold text-[11px] xs:text-xs sm:text-base md:text-lg tracking-tight whitespace-nowrap">
              <span className="w-4 h-4 xs:w-5 xs:h-5 md:w-6 md:h-6 rounded-full bg-emerald-500/15 flex items-center justify-center text-[#039D1F] font-black text-[10px] xs:text-xs md:text-sm shrink-0">✓</span>
              As crianças amam!
            </span>
          </div>

          {/* Hook lead-in to Social Proof */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onClick={() => {
              const el = document.getElementById('stats-section');
              if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            className="mt-5 md:mt-7 flex flex-col items-center justify-center text-center cursor-pointer group px-4 z-10 py-2 rounded-xl hover:bg-slate-100/60 transition-all duration-200"
          >
            <p className="text-xs sm:text-sm font-extrabold text-slate-700 group-hover:text-[#039D1F] transition-colors tracking-tight">
              Olha o que esse professor falou do material! 😡
            </p>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
              className="mt-1 flex flex-col items-center -space-y-2 text-[#039D1F]"
            >
              <ChevronDown className="w-5 h-5 stroke-[3]" />
              <ChevronDown className="w-4 h-4 stroke-[3] opacity-60" />
            </motion.div>
          </motion.div>

        </div>

      </div>

    </section>
  );
}
