import { useEffect, useState } from 'react';

export default function HeaderBanner() {
  const [formattedDate, setFormattedDate] = useState('(23 de junho terça-feira)');

  useEffect(() => {
    try {
      const today = new Date();
      const dd = today.getDate();
      const months = [
        'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
        'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'
      ];
      const weekDays = [
        'domingo', 'segunda-feira', 'terça-feira', 'quarta-feira',
        'quinta-feira', 'sexta-feira', 'sábado'
      ];
      const monthName = months[today.getMonth()];
      const weekDayName = weekDays[today.getDay()];
      setFormattedDate(`(${dd} de ${monthName} ${weekDayName})`);
    } catch (e) {
      // fallback
    }
  }, []);

  return (
    <div 
      id="promo-banner" 
      className="bg-[#ff0000] text-[#ffffff] text-xs md:text-sm font-bold py-2 px-4 text-center sticky top-0 z-50 shadow-md flex items-center justify-center gap-2 uppercase tracking-wider"
    >
      <span className="inline-block animate-bounce">🔥</span>
      <span>Oferta válida apenas hoje: {formattedDate}</span>
    </div>
  );
}
