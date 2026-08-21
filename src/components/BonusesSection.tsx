import { motion } from 'motion/react';
import { Gift } from 'lucide-react';

export default function BonusesSection() {
  const bonuses = [
    {
      id: 'b1',
      number: 'BÔNUS 1',
      badge: 'SALVE SEUS DOMINGOS',
      title: 'Coleção com 30 Planos de Aula Prontos (BNCC)',
      tagline: '30 Aulas Prontas Passo a Passo',
      originalPrice: 'R$ 37,00',
      illustration: (
        <svg className="w-16 h-16 sm:w-20 sm:h-20" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Blackboard / Lesson backdrop */}
          <rect x="20" y="22" width="80" height="58" rx="8" fill="#1E293B" stroke="#475569" strokeWidth="2.5" />
          <rect x="25" y="27" width="70" height="48" rx="4" fill="#064E3B" />
          
          {/* chalk text lines */}
          <rect x="34" y="36" width="30" height="3" rx="1.5" fill="#A7F3D0" />
          <rect x="34" y="44" width="48" height="2.5" rx="1.25" fill="#FFFFFF" opacity="0.8" />
          <rect x="34" y="51" width="40" height="2.5" rx="1.25" fill="#FFFFFF" opacity="0.8" />
          
          {/* Chalk drawing of atom */}
          <circle cx="82" cy="42" r="6" stroke="#FBBF24" strokeWidth="1.5" strokeDasharray="2 2" />
          <circle cx="82" cy="42" r="2" fill="#FBBF24" />

          {/* Wooden Easel stand */}
          <path d="M40 80L32 102" stroke="#94A3B8" strokeWidth="3" strokeLinecap="round" />
          <path d="M80 80L88 102" stroke="#94A3B8" strokeWidth="3" strokeLinecap="round" />
          <path d="M60 80V105" stroke="#64748B" strokeWidth="3" strokeLinecap="round" />
          <rect x="14" y="78" width="92" height="4" rx="2" fill="#F59E0B" />
          <rect x="38" y="74" width="8" height="3" rx="1" fill="#FFFFFF" />
        </svg>
      )
    },
    {
      id: 'b2',
      number: 'BÔNUS 2',
      badge: 'FORMATO PRONTO',
      title: '50 Atividades Prontas para Imprimir (Word & PDF)',
      tagline: 'Economize Dezenas de Horas de Formatação',
      originalPrice: 'R$ 47,00',
      illustration: (
        <svg className="w-16 h-16 sm:w-20 sm:h-20" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Stacked printable sheets in back */}
          <rect x="34" y="16" width="60" height="80" rx="6" fill="#F1F5F9" stroke="#CBD5E1" strokeWidth="2" transform="rotate(-6 64 56)" />
          <rect x="32" y="18" width="60" height="80" rx="6" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="2" transform="rotate(-2 62 58)" />
          {/* Primary front paper */}
          <g>
            <rect x="26" y="22" width="68" height="84" rx="6" fill="#FFFFFF" stroke="#10B981" strokeWidth="2.5" />
            
            {/* Header / Badge on sheet */}
            <rect x="36" y="32" width="22" height="8" rx="2" fill="#D1FAE5" />
            <rect x="40" y="35" width="14" height="2" rx="1" fill="#10B981" />
            
            {/* Circle drawing / Science graphic on page */}
            <circle cx="74" cy="54" r="10" fill="#ECFDF5" stroke="#34D399" strokeWidth="1.5" />
            <path d="M71 54L73 56L77 52" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

            {/* Simulated text lines */}
            <rect x="36" y="50" width="26" height="3" rx="1.5" fill="#E2E8F0" />
            <rect x="36" y="58" width="48" height="3" rx="1.5" fill="#E2E8F0" />
            <rect x="36" y="66" width="48" height="3" rx="1.5" fill="#E2E8F0" />
            <rect x="36" y="74" width="34" height="3" rx="1.5" fill="#E2E8F0" />

            {/* Print symbol badge */}
            <rect x="36" y="84" width="48" height="12" rx="4" fill="#10B981" />
            <rect x="44" y="88" width="32" height="4" rx="2" fill="#FFFFFF" />
          </g>
        </svg>
      )
    },
    {
      id: 'b3',
      number: 'BÔNUS 3',
      badge: 'SEM MADRUGADAS ACORDADO',
      title: 'Pacote Completo com 100 Avaliações de Ciências',
      tagline: '100 Provas com Gabarito Oficial Incluso',
      originalPrice: 'R$ 47,00',
      illustration: (
        <svg className="w-16 h-16 sm:w-20 sm:h-20" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Exam document */}
          <rect x="25" y="16" width="70" height="90" rx="8" fill="#FFFFFF" stroke="#3B82F6" strokeWidth="2.5" />
          
          {/* Exam Header */}
          <rect x="36" y="28" width="48" height="5" rx="2.5" fill="#3B82F6" />
          <rect x="36" y="37" width="24" height="3" rx="1.5" fill="#93C5FD" />
          
          {/* "Nota 10" badge on top-right */}
          <circle cx="80" cy="38" r="12" fill="#FEF2F2" stroke="#EF4444" strokeWidth="1.5" />
          <text x="80" y="42" fill="#EF4444" fontSize="11" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">10</text>

          {/* Test Questions & Options */}
          <rect x="36" y="50" width="35" height="3" rx="1.5" fill="#E2E8F0" />
          <circle cx="39" cy="62" r="3" fill="#3B82F6" />
          <rect x="47" y="61" width="30" height="2" fill="#94A3B8" />
          
          <circle cx="39" cy="70" r="3" stroke="#94A3B8" strokeWidth="1" />
          <rect x="47" y="69" width="22" height="2" fill="#CBD5E1" />

          {/* Question 2 */}
          <rect x="36" y="80" width="40" height="3" rx="1.5" fill="#E2E8F0" />
          <circle cx="39" cy="91" r="3" stroke="#94A3B8" strokeWidth="1" />
          <rect x="47" y="90" width="26" height="2" fill="#CBD5E1" />
        </svg>
      )
    },
    {
      id: 'b4',
      number: 'BÔNUS 4',
      badge: 'ZERO ESTRESSE BNCC',
      title: 'Guia do Professor & Planejamento Anual BNCC',
      tagline: 'Planejamento Mapeado de Todas as Competências',
      originalPrice: 'R$ 55,00',
      illustration: (
        <svg className="w-16 h-16 sm:w-20 sm:h-20" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(5, 0)">
            <rect x="28" y="20" width="62" height="80" rx="8" fill="#047857" opacity="0.1" />
            <rect x="24" y="16" width="62" height="80" rx="8" fill="#10B981" stroke="#047857" strokeWidth="2.5" />
            
            <rect x="36" y="32" width="38" height="44" rx="4" fill="#FFFFFF" />
            
            <rect x="42" y="40" width="26" height="4" rx="2" fill="#34D399" />
            <rect x="42" y="50" width="22" height="3" rx="1.5" fill="#E2E8F0" />
            <rect x="42" y="57" width="24" height="3" rx="1.5" fill="#E2E8F0" />
            <rect x="42" y="64" width="16" height="3" rx="1.5" fill="#E2E8F0" />

            <circle cx="64" cy="65" r="4" stroke="#10B981" strokeWidth="1" />

            <g transform="translate(18, 16)">
              {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
                <path
                  key={i}
                  d={`M0 ${10 + i * 9} C3 ${10 + i * 9} 7 ${8 + i * 9} 7 ${10 + i * 9} C7 ${12 + i * 9} 3 ${12 + i * 9} 0 ${12 + i * 9}`}
                  fill="none"
                  stroke="#94A3B8"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              ))}
            </g>
          </g>

          <g transform="translate(94, 46) rotate(35)">
            <rect x="0" y="0" width="6" height="38" rx="1" fill="#FBBF24" />
            <polygon points="0,0 3,-6 6,0" fill="#FDBA74" />
            <polygon points="2,-4 3,-6 4,-4" fill="#1E293B" />
            <rect x="0" y="34" width="6" height="4" fill="#FDA4AF" />
          </g>
        </svg>
      )
    },
    {
      id: 'b5',
      number: 'BÔNUS 5',
      badge: 'ALUNOS 100% ENGAJADOS',
      title: 'Coletânea de Experimentos de Física e Biologia',
      tagline: 'Experimentos Práticos Incríveis com Materiais Simples',
      originalPrice: 'R$ 49,00',
      illustration: (
        <svg className="w-16 h-16 sm:w-20 sm:h-20" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="25" y="20" width="70" height="80" rx="8" fill="#FFFFFF" stroke="#10B981" strokeWidth="2.5" />
          <circle cx="60" cy="52" r="16" fill="#ECFDF5" stroke="#10B981" strokeWidth="1.5" />
          
          <ellipse cx="60" cy="52" rx="14" ry="5" stroke="#059669" strokeWidth="1" transform="rotate(30 60 52)" />
          <ellipse cx="60" cy="52" rx="14" ry="5" stroke="#059669" strokeWidth="1" transform="rotate(-30 60 52)" />
          <circle cx="60" cy="52" r="3" fill="#10B981" />
          
          <rect x="42" y="78" width="36" height="12" rx="3" fill="#F0FDF4" stroke="#A7F3D0" strokeWidth="1" />
          <path d="M50 84C53 81 57 81 60 84" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M60 84C63 81 67 81 70 84" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      )
    }
  ];

  return (
    <section 
      id="bonuses-section" 
      className="py-16 md:py-24 bg-gradient-to-b from-[#ECFDF5] via-[#F0FDF4] to-white border-y border-[#34D399]/20 relative overflow-hidden"
    >
      {/* Background organic sparkles/glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-40">
        <div className="absolute left-[-10%] top-[20%] w-[350px] h-[350px] rounded-full bg-[#039D1F]/10 filter blur-3xl" />
        <div className="absolute right-[-10%] bottom-[10%] w-[400px] h-[400px] rounded-full bg-emerald-300/10 filter blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Persuasive Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16 space-y-3">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#039D1F]/15 text-[#039D1F] border border-[#039D1F]/25 text-[10px] xs:text-xs sm:text-sm font-black rounded-full uppercase tracking-wider shadow-xs select-none"
          >
            <Gift className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 animate-bounce shrink-0" />
            <span>PRESENTE EXCLUSIVO SÓ HOJE</span>
          </motion.div>
          
          <h2 className="text-2xl xs:text-3xl sm:text-5xl md:text-6xl font-black text-slate-950 tracking-tight font-display leading-[1.12]">
            Adquirindo hoje o Plano Completo, <span className="text-[#039D1F] font-black underline decoration-emerald-500/20 underline-offset-4">você ganha todos os 5 bônus:</span>
          </h2>
          <p className="text-slate-600 font-extrabold text-sm sm:text-lg max-w-2xl mx-auto">
            Todos os bônus somam <span className="text-[#039D1F]">R$ 102,37</span> hoje e estão <span className="text-[#039D1F]">incluídos grátis</span> no pacote completo!
          </p>
        </div>

        {/* Bonuses Vertical Stack with 2D Mockup images */}
        <div className="space-y-4 md:space-y-6">
          {bonuses.map((bonus, idx) => (
            <motion.div
              key={bonus.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              className="bg-white border-2 border-emerald-500/20 rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-6 shadow-md hover:shadow-xl hover:border-emerald-500/40 transition-all duration-300 flex flex-col sm:flex-row items-center sm:items-start md:items-center text-center sm:text-left gap-4 md:gap-6 relative overflow-hidden"
            >
              {/* Corner green BÔNUS pill */}
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4 flex items-center gap-1.5 z-10">
                <span className="px-2.5 py-1 bg-[#039D1F] text-white text-[10px] sm:text-xs font-black rounded-lg tracking-wider uppercase shadow-xs">
                  {bonus.number}
                </span>
              </div>

              {/* Vector Icon/Illustration Thumbnail Box */}
              <div className="w-20 h-20 xs:w-24 xs:h-24 md:w-28 md:h-28 shrink-0 bg-emerald-50/80 border-2 border-emerald-500/20 rounded-2xl flex items-center justify-center p-2.5 relative overflow-hidden shadow-inner shrink-0">
                {bonus.illustration}
              </div>

              {/* Punchy Title & Description */}
              <div className="flex-1 space-y-2 sm:pr-24">
                <div className="inline-block px-2.5 py-0.5 bg-emerald-100/70 text-emerald-900 border border-emerald-200 text-[10px] font-black rounded-md tracking-wider uppercase">
                  {bonus.badge}
                </div>

                <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl font-black text-slate-900 leading-tight font-display">
                  {bonus.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-slate-600 font-bold">
                  <span className="text-[#039D1F] font-black">Inclui:</span> {bonus.tagline}
                </p>

                {/* Free Badge */}
                <div className="pt-2 flex items-center justify-center sm:justify-start gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-emerald-500 text-white font-black text-xs sm:text-sm rounded-full shadow-xs uppercase tracking-wider">
                    🎁 INCLUSO 100% GRÁTIS
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Highlighted Value Banner */}
        <div className="mt-12 md:mt-16">
          <div className="bg-[#039D1F] rounded-3xl p-6 md:p-10 text-center text-white font-sans relative overflow-hidden shadow-2xl shadow-emerald-950/20 border border-white/10">
            {/* Background glowing circle decorator */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/15 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-emerald-300/15 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 space-y-2 sm:space-y-3 max-w-2xl mx-auto text-white">
              <span className="text-base sm:text-lg md:text-xl font-black tracking-wide text-white uppercase block font-display">
                Valor Total dos Bônus
              </span>
              
              <div className="text-2xl sm:text-4xl md:text-5xl font-black text-white/90 line-through decoration-white/80 decoration-3 tracking-tight">
                R$ 102,37
              </div>

              <p className="text-lg sm:text-2xl md:text-3xl font-black tracking-tight text-white leading-tight pt-1">
                Inclusos GRÁTIS no Pacote Completo!
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
