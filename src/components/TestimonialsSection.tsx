import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import whatsappTestimonial1 from '../assets/images/IMG_9820.PNG';
import whatsappTestimonial2 from '../assets/images/IMG_9822.PNG';
import imageProvaSocial from '../assets/images/prova social.png';

interface TestimonialsSectionProps {
  onCtaClick?: () => void;
}

export default function TestimonialsSection({ onCtaClick }: TestimonialsSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const proofImages = [
    {
      img: whatsappTestimonial1,
      alt: "Depoimento WhatsApp Amanda"
    },
    {
      img: whatsappTestimonial2,
      alt: "Depoimento WhatsApp Ricardo"
    },
    {
      img: imageProvaSocial,
      alt: "Depoimento WhatsApp Mauro"
    }
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? proofImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === proofImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <section 
      id="depoimentos" 
      className="py-12 md:py-20 bg-[#0bae04] border-y border-[#1e7c02] relative overflow-hidden flex flex-col items-center justify-center"
    >
      {/* Background aesthetic details */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-emerald-300 rounded-full blur-3xl" />
      </div>

      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center">
        
        {/* Simple & Clean Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12 px-2 space-y-3">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight font-display leading-tight">
            Veja a Experiência de Quem Já Aplicou em Sala de Aula
          </h2>
          <p className="text-lg xs:text-xl sm:text-2xl font-bold text-amber-300 tracking-wide">
            ⭐ ⭐ ⭐ ⭐ ⭐ (4,9/5)
          </p>
        </div>

        {/* Large Testimonial Viewer with Navigation Controls */}
        <div className="relative w-full max-w-xl md:max-w-2xl lg:max-w-3xl flex flex-col items-center">
          
          {/* Main Large Card Container */}
          <div className="relative w-full bg-white rounded-3xl p-3 sm:p-5 md:p-6 shadow-2xl border-4 border-white/90 overflow-hidden flex items-center justify-center min-h-[350px] sm:min-h-[480px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.2 }}
                className="w-full flex justify-center"
              >
                <img
                  src={proofImages[currentIndex].img}
                  alt={proofImages[currentIndex].alt}
                  className="w-full max-h-[650px] object-contain rounded-2xl shadow-md select-none"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrow - Left */}
            <button
              onClick={handlePrev}
              aria-label="Anterior"
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-14 sm:h-14 bg-white/95 hover:bg-white text-slate-900 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-200 border border-slate-200 cursor-pointer z-20"
            >
              <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 stroke-[3] text-emerald-800" />
            </button>

            {/* Navigation Arrow - Right */}
            <button
              onClick={handleNext}
              aria-label="Próximo"
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-14 sm:h-14 bg-white/95 hover:bg-white text-slate-900 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-200 border border-slate-200 cursor-pointer z-20"
            >
              <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 stroke-[3] text-emerald-800" />
            </button>
          </div>

          {/* Controls below: Indicator Dots & Counter */}
          <div className="flex items-center gap-3 mt-6">
            <button
              onClick={handlePrev}
              className="px-4 py-2 bg-emerald-900/30 hover:bg-emerald-900/50 text-white rounded-full font-bold text-xs sm:text-sm flex items-center gap-1 transition-all border border-white/20 cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Anterior</span>
            </button>

            <div className="flex items-center gap-2 px-3.5 py-2 bg-black/20 rounded-full border border-white/10">
              {proofImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`transition-all duration-300 rounded-full cursor-pointer ${
                    currentIndex === idx 
                      ? 'w-7 h-2.5 bg-amber-300' 
                      : 'w-2.5 h-2.5 bg-white/50 hover:bg-white/80'
                  }`}
                  aria-label={`Ver depoimento ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="px-4 py-2 bg-emerald-900/30 hover:bg-emerald-900/50 text-white rounded-full font-bold text-xs sm:text-sm flex items-center gap-1 transition-all border border-white/20 cursor-pointer"
            >
              <span>Próximo</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <span className="text-white/90 font-extrabold text-xs sm:text-sm mt-2">
            Depoimento {currentIndex + 1} de {proofImages.length} (Clique nas setas para navegar)
          </span>

        </div>

        {/* Green / High Contrast CTA Button */}
        <div className="mt-8 md:mt-12 flex justify-center w-full px-6">
          <motion.button
            onClick={onCtaClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto px-10 py-5 bg-white text-[#039D1F] hover:bg-slate-50 rounded-2xl font-black text-sm sm:text-lg uppercase tracking-wider shadow-2xl shadow-black/20 flex items-center justify-center gap-2.5 cursor-pointer transition-all duration-300 font-display border border-white"
          >
            Quero Receber Meu Material Agora →
          </motion.button>
        </div>

      </div>
    </section>
  );
}
