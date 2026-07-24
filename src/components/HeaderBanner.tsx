export default function HeaderBanner() {
  return (
    <div 
      id="promo-banner" 
      className="bg-[#ff0000] text-[#ffffff] text-xs md:text-sm font-bold py-2.5 px-4 text-center sticky top-0 z-50 shadow-md flex items-center justify-center gap-2 uppercase tracking-wider font-display"
    >
      <span className="inline-block animate-bounce">🔥</span>
      <span>Oferta válida até hoje</span>
    </div>
  );
}
