import { useState } from 'react';
import { faqs } from '../data';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>('f1'); // Default open first item as customary

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-10 md:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-8">

        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16">
          <span className="text-xs md:text-sm font-extrabold text-brand-green uppercase tracking-widest block mb-2 font-mono">
            — PERGUNTAS FREQUENTES
          </span>
          <h2 className="text-2xl xs:text-3xl md:text-4xl lg:text-5xl font-black text-brand-navy tracking-tight font-display leading-tight">
            Tirando suas{' '}
            <span className="text-brand-green relative inline-block">
              dúvidas
              <span className="absolute left-0 bottom-1 w-full h-1 bg-brand-green/20 rounded-full"></span>
            </span>
          </h2>
        </div>

        {/* FAQ Accordions */}
        <div className="space-y-3 md:space-y-4">
          {faqs.map((item, idx) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                id={`faq-item-${idx}`}
                className="border border-slate-100 rounded-2xl bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Accordion Trigger Header */}
                <button
                  onClick={() => toggle(item.id)}
                  className="w-full text-left px-4 py-4 md:px-6 md:py-6 flex justify-between items-center gap-4 hover:bg-slate-50/50 transition-colors"
                >
                  <span className="font-bold text-xs xs:text-sm md:text-base text-slate-800 tracking-tight">
                    {item.question}
                  </span>
                  <div className={`w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${isOpen ? 'bg-brand-green-light text-brand-green' : 'bg-slate-50 text-slate-400'}`}>
                    {isOpen ? <Minus className="w-3.5 h-3.5 md:w-4 md:h-4" /> : <Plus className="w-3.5 h-3.5 md:w-4 md:h-4" />}
                  </div>
                </button>

                {/* Accordion Content Panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-4 pb-4 md:px-6 md:pb-6 text-xs md:text-sm text-slate-500 leading-relaxed border-t border-slate-50 pt-3 md:pt-4 bg-slate-50/30">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
