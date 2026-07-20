import { motion } from 'motion/react';
import whatsappTestimonial1 from '../assets/images/IMG_9820.PNG';
import whatsappTestimonial2 from '../assets/images/IMG_9822.PNG';
import imageProvaSocial from '../assets/images/prova social.png';

export default function TestimonialsSection() {
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

  // Repeat the images several times to create a perfectly seamless marquee effect
  const duplicatedProofs = [...proofImages, ...proofImages, ...proofImages, ...proofImages];

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

      <div className="w-full relative z-10 flex flex-col items-center">
        
        {/* Simple & Clean Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14 px-6">
          <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight font-display leading-tight">
            Quem adquiriu, aplicou e recomenda:
          </h2>
        </div>

        {/* Carousel Container with Infinite Auto-scrolling marquee */}
        <div className="relative w-full overflow-hidden py-2 select-none">
          
          {/* Faded edges overlay for smooth gradient transit at borders */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#0bae04] via-[#0bae04]/80 to-transparent z-15 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#0bae04] via-[#0bae04]/80 to-transparent z-15 pointer-events-none"></div>

          {/* Marquee horizontal track */}
          <div className="w-full overflow-hidden">
            <motion.div
              className="flex gap-4 md:gap-6 w-max"
              animate={{ x: ["0%", "-25%"] }}
              transition={{
                ease: "linear",
                duration: 25,
                repeat: Infinity,
              }}
            >
              {duplicatedProofs.map((item, idx) => (
                <div
                  key={idx}
                  className="w-[240px] xs:w-[270px] sm:w-[300px] md:w-[330px] flex-shrink-0 bg-white rounded-[24px] p-2 md:p-3 shadow-xl border border-white/20 transform hover:scale-[1.02] transition-transform duration-300"
                >
                  <img
                    src={item.img}
                    alt={item.alt}
                    className="w-full h-auto rounded-[18px] select-none pointer-events-none shadow-sm"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
