import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import whatsappTestimonial1 from '../assets/images/IMG_9820.PNG';
import whatsappTestimonial2 from '../assets/images/IMG_9822.PNG';
import imageProvaSocial from '../assets/images/prova social.png';
import whatsappTestimonial3 from '../assets/images/WhatsApp Image 2026-08-20 at 20.58.56.jpeg';

interface TestimonialsSectionProps {
  onCtaClick?: () => void;
}

export default function TestimonialsSection({ onCtaClick }: TestimonialsSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const proofImages = [
    {
      img: whatsappTestimonial3,
      alt: "Depoimento WhatsApp Professora de Ciências"
    },
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
      className="py-14 md:py-24 bg-white border-y border-slate-100 relative overflow-hidden flex flex-col items-center justify-center"
    >
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center">
        
        {/* Header exact match with screenshot & green palette */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12 px-2 space-y-4">
          <p className="text-base sm:text-lg md:text-xl italic font-medium text-slate-500 max-w-2xl mx-auto leading-relaxed tracking-tight">
            Mas não acredite só na gente — veja os resultados de quem já usa em sala de aula:
          </p>
          
          <h2 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-black text-[#039D1F] tracking-tight font-display leading-none">
            O que dizem nossos clientes
          </h2>

          {/* Subtitle inside clean rounded box */}
          <div className="inline-block bg-slate-50/90 border border-slate-200/90 rounded-2xl md:rounded-3xl px-6 sm:px-10 py-4 sm:py-5 shadow-xs mt-3">
            <p className="text-sm sm:text-base md:text-lg font-black text-slate-800 leading-snug">
              Prints Reais de Depoimentos e Entregas do material.
            </p>
            <p className="text-sm sm:text-base md:text-lg font-bold text-slate-700 leading-snug mt-1">
              Nosso Suporte sempre à sua disposição! 💙
            </p>
          </div>
        </div>

        {/* Testimonial Viewer */}
        <div className="relative w-full max-w-xl md:max-w-2xl lg:max-w-3xl flex flex-col items-center mt-4 sm:mt-8 md:mt-12">
          
          {/* Direct Image Container with Navigation Arrows */}
          <div className="relative w-full flex items-center justify-center min-h-[350px] sm:min-h-[480px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="w-full flex justify-center"
              >
                <img
                  src={proofImages[currentIndex].img}
                  alt={proofImages[currentIndex].alt}
                  className="w-full max-h-[650px] object-contain select-none"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrow - Left */}
            <button
              onClick={handlePrev}
              aria-label="Anterior"
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-14 sm:h-14 bg-white/95 hover:bg-white text-slate-900 rounded-full flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all duration-200 border border-slate-200 cursor-pointer z-20"
            >
              <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 stroke-[3] text-slate-800" />
            </button>

            {/* Navigation Arrow - Right */}
            <button
              onClick={handleNext}
              aria-label="Próximo"
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-14 sm:h-14 bg-white/95 hover:bg-white text-slate-900 rounded-full flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all duration-200 border border-slate-200 cursor-pointer z-20"
            >
              <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 stroke-[3] text-slate-800" />
            </button>
          </div>

          {/* Dots Indicator for image navigation */}
          <div className="flex items-center gap-2 mt-6">
            {proofImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  currentIndex === idx 
                    ? 'w-7 h-2.5 bg-[#039D1F]' 
                    : 'w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Ver depoimento ${idx + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
