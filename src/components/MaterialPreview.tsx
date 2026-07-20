import { ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

// Import images as ES modules so Vite compiles and resolves them correctly
import imagePressao from '../assets/images/pressao_card_1.png';
import imageSentidos from '../assets/images/sentidos_card_5_termocepcao.png';
import imagePoluicao from '../assets/images/poluicao_card_1.png';
import imageCirculatorio from '../assets/images/circulatorio_card_1_bombacoracao.png';
import imageCardAr from '../assets/images/card_ar_6.png';

interface MaterialPreviewProps {
  onCtaClick?: () => void;
}

export default function MaterialPreview({ onCtaClick }: MaterialPreviewProps) {
  const premiumMaterials = [
    {
      title: "A Água que não Cai",
      description: "Experimento lúdico de pressão atmosférica que desafia a gravidade e fascina os alunos.",
      image: imagePressao
    },
    {
      title: "Água Confusa (Termocepção)",
      description: "Investigação prática sobre percepção térmica relativa e como nossos sentidos funcionam.",
      image: imageSentidos
    },
    {
      title: "Chuva Ácida na Prática",
      description: "Atividade demonstrativa mostrando o efeito do vinagre (ácido) no giz escolar.",
      image: imagePoluicao
    },
    {
      title: "Bomba Cardíaca Caseira",
      description: "Construção de modelo prático para entender o bombeamento muscular do coração.",
      image: imageCirculatorio
    },
    {
      title: "A Fonte na Garrafa!",
      description: "Experimento de pressão do ar demonstrando como forças empurram a água para fora.",
      image: imageCardAr
    }
  ];

  // Triplicating to ensure seamless infinite looping on wider screens
  const duplicatedMaterials = [...premiumMaterials, ...premiumMaterials, ...premiumMaterials];

  return (
    <section id="demonstracao" className="py-10 md:py-20 bg-slate-50 border-b border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14 px-8 space-y-3">
          <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-black text-slate-950 tracking-tight font-display leading-tight">
            Veja uma <span className="text-[#039D1F]">Prévia Real</span> do que vai receber
          </h2>
          <p className="text-base sm:text-lg md:text-2xl font-extrabold text-slate-700 max-w-2xl mx-auto leading-relaxed">
            Abra os <span className="text-[#039D1F]">arquivos prontos</span>, imprima e <span className="text-[#039D1F]">aplique em minutos</span>. Nossos roteiros e recursos são <span className="text-[#039D1F]">totalmente ilustrados</span> e 100% alinhados à BNCC.
          </p>
        </div>

        {/* Centerpiece Container with Infinite Auto-scrolling Carousel */}
        <div className="flex flex-col items-center justify-center relative select-none">
          
          {/* Main Carrossel Container */}
          <div className="relative w-full overflow-hidden py-4 md:py-6">
            
            {/* Soft faded edges overlay to make the carousel transition beautifully on the margins */}
            <div className="absolute left-0 top-0 bottom-0 w-12 md:w-20 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-12 md:w-20 bg-gradient-to-l from-slate-50 via-slate-50/80 to-transparent z-10 pointer-events-none"></div>

            {/* Seamless Infinite Marquee Track */}
            <div className="w-full overflow-hidden">
              <motion.div
                className="flex gap-4 md:gap-6 w-max"
                animate={{ x: ["0%", "-33.333%"] }}
                transition={{
                  ease: "linear",
                  duration: 35,
                  repeat: Infinity,
                }}
              >
                {duplicatedMaterials.map((material, idx) => (
                  <div
                    key={idx}
                    className="w-[230px] xs:w-[260px] md:w-[380px] aspect-[3/4] flex-shrink-0 bg-white rounded-3xl overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.08)] border border-slate-100 hover:shadow-[0_20px_50px_rgba(3,157,31,0.15)] transition-all duration-300 transform hover:-translate-y-1.5 hover:border-[#07b407]/30"
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
          <div className="mt-10 md:mt-14 flex justify-center w-full px-6">
            <motion.button
              onClick={onCtaClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-10 py-5 bg-[#039D1F] hover:bg-[#028018] text-white rounded-2xl font-black text-sm sm:text-lg uppercase tracking-wider shadow-xl shadow-[#039D1F]/20 flex items-center justify-center gap-2.5 cursor-pointer transition-all duration-300 font-display border border-[#039D1F]"
            >
              BAIXAR TUDO AGORA
              <ArrowRight className="w-5 h-5 shrink-0 text-white" />
            </motion.button>
          </div>

          {/* Bullets: cards dinamicos, facil impressao, as crianças amam!!! */}
          <div className="mt-8 md:mt-12 mx-4 md:mx-6 flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 items-center bg-white px-6 md:px-10 py-4 md:py-5 rounded-2xl border border-slate-100 shadow-md z-10 relative">
            <span className="flex items-center gap-2 md:gap-2.5 text-slate-800 font-extrabold text-sm md:text-lg tracking-tight">
              <span className="w-6 h-6 rounded-full bg-emerald-500/15 flex items-center justify-center text-[#039D1F] font-black text-sm shrink-0">✓</span>
              Cards dinâmicos
            </span>
            <span className="text-slate-200 hidden sm:inline">|</span>
            <span className="flex items-center gap-2 md:gap-2.5 text-slate-800 font-extrabold text-sm md:text-lg tracking-tight">
              <span className="w-6 h-6 rounded-full bg-emerald-500/15 flex items-center justify-center text-[#039D1F] font-black text-sm shrink-0">✓</span>
              Fácil impressão
            </span>
            <span className="text-slate-200 hidden sm:inline">|</span>
            <span className="flex items-center gap-2 md:gap-2.5 text-slate-800 font-extrabold text-sm md:text-lg tracking-tight">
              <span className="w-6 h-6 rounded-full bg-emerald-500/15 flex items-center justify-center text-[#039D1F] font-black text-sm shrink-0">✓</span>
              As crianças amam!!!
            </span>
          </div>

        </div>

      </div>

    </section>
  );
}
