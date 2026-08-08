import { useState, useEffect } from 'react';
import HeaderBanner from './components/HeaderBanner';
import HeroSection from './components/HeroSection';
import StatsBar from './components/StatsBar';
import MaterialPreview from './components/MaterialPreview';
import BonusesSection from './components/BonusesSection';
import PricingSection from './components/PricingSection';
import GuaranteeSection from './components/GuaranteeSection';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
import UpsellModal from './components/UpsellModal';

export default function App() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [unlockedEmail, setUnlockedEmail] = useState<string | null>(null);
  const [isUpsellOpen, setIsUpsellOpen] = useState(false);

  // Load unlocked state from localStorage on startup
  useEffect(() => {
    try {
      const savedUnlock = localStorage.getItem('ciencias_premium_unlocked');
      const savedEmail = localStorage.getItem('ciencias_premium_email');
      if (savedUnlock === 'true') {
        setIsUnlocked(true);
        if (savedEmail) {
          setUnlockedEmail(savedEmail);
        }
      }
    } catch (e) {
      // safe fallback
    }
  }, []);

  const handlePurchaseSuccess = (email: string) => {
    setIsUnlocked(true);
    setUnlockedEmail(email);
    try {
      localStorage.setItem('ciencias_premium_unlocked', 'true');
      localStorage.setItem('ciencias_premium_email', email);
    } catch (e) {
      // safe fallback
    }
    // Automatically smooth scroll to the library area
    setTimeout(() => {
      const element = document.getElementById('biblioteca-professor');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 500);
  };

  const redirectToCheckout = (url: string) => {
    window.location.href = url;
  };

  const scrollToPricing = () => {
    const element = document.getElementById('planos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToLibrary = () => {
    const element = document.getElementById('biblioteca-professor');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col relative text-slate-800">
      
      {/* 1. Promotional Green Header Announcement Banner */}
      <HeaderBanner />

      {/* 3. Hero Section matching Image 1 */}
      <HeroSection 
        onCtaClick={scrollToPricing} 
        onExploreLibraryClick={scrollToLibrary}
        isUnlocked={isUnlocked}
      />

      {/* 7. Preview of material/experiments brought to top right after Hero */}
      <MaterialPreview onCtaClick={scrollToPricing} />

      {/* 4. Social proof stats row matching Image 2 */}
      <StatsBar onCtaClick={scrollToPricing} />

      {/* 8. 5 Book-cover styled premium bonuses matching Image 5 */}
      <BonusesSection />

      {/* 11. Verified testimonials block matching Image 7 */}
      <TestimonialsSection onCtaClick={scrollToPricing} />

      {/* 9. Pricing comparative layouts matching Image 6 */}
      <PricingSection onSelectPlan={(plan) => {
        if (plan.id === 'essencial') {
          setIsUpsellOpen(true);
        } else {
          redirectToCheckout('https://pay.wiapy.com/EDyYNMDTLkm');
        }
      }} />

      {/* Upsell Cross-sell modal when Básico is clicked */}
      <UpsellModal
        isOpen={isUpsellOpen}
        onClose={() => setIsUpsellOpen(false)}
        onAcceptUpsell={() => {
          setIsUpsellOpen(false);
          redirectToCheckout('https://pay.wiapy.com/ZiPOwLgRTB');
        }}
        onDeclineUpsell={() => {
          setIsUpsellOpen(false);
          redirectToCheckout('https://pay.wiapy.com/YeaKBenvRQS');
        }}
      />

      {/* 7-Day Money-Back Guarantee Section */}
      <GuaranteeSection />

      {/* 12. Accordion FAQ checklist matching Image 8 */}
      <FAQSection />

    </div>
  );
}
