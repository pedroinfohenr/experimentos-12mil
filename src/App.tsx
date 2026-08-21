import { useState, useEffect } from 'react';
import HeaderBanner from './components/HeaderBanner';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
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

  // Save incoming UTM parameters to localStorage/sessionStorage on startup
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

      // Persist UTM parameters in storage so they are never lost
      const searchParams = new URLSearchParams(window.location.search);
      searchParams.forEach((value, key) => {
        if (value) {
          localStorage.setItem(key, value);
          sessionStorage.setItem(key, value);
        }
      });
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

  const redirectToCheckout = (baseUrl: string) => {
    try {
      const urlObj = new URL(baseUrl);
      
      // 1. Capture current URL params from window.location.search
      const currentSearchParams = new URLSearchParams(window.location.search);
      currentSearchParams.forEach((value, key) => {
        if (value && !urlObj.searchParams.has(key)) {
          urlObj.searchParams.set(key, value);
        }
      });

      // 2. Check storage fallbacks for UTMs and tracking IDs
      const trackingKeys = [
        'utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term',
        'src', 'sck', 'fbclid', 'gclid', 'utmify_id', '_fbp', '_fbc'
      ];
      trackingKeys.forEach((key) => {
        if (!urlObj.searchParams.has(key)) {
          const savedValue = localStorage.getItem(key) || sessionStorage.getItem(key);
          if (savedValue) {
            urlObj.searchParams.set(key, savedValue);
          }
        }
      });

      // 3. Auto-populate 'src' and 'sck' if Wiapy requires them for tracking
      if (!urlObj.searchParams.has('src') && urlObj.searchParams.has('utm_source')) {
        urlObj.searchParams.set('src', urlObj.searchParams.get('utm_source') || '');
      }
      if (!urlObj.searchParams.has('sck') && urlObj.searchParams.has('utm_campaign')) {
        urlObj.searchParams.set('sck', urlObj.searchParams.get('utm_campaign') || '');
      }

      window.location.href = urlObj.toString();
    } catch (e) {
      // Fallback simple append
      const searchParams = window.location.search;
      if (searchParams && searchParams.length > 1) {
        const cleanParams = searchParams.startsWith('?') ? searchParams.substring(1) : searchParams;
        const separator = baseUrl.includes('?') ? '&' : '?';
        window.location.href = `${baseUrl}${separator}${cleanParams}`;
      } else {
        window.location.href = baseUrl;
      }
    }
  };

  const scrollToPricing = () => {
    const element = document.getElementById('planos');
    if (element) {
      const yOffset = -140;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
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

      {/* Seção Sua Transformação (abaixo do Hero) */}
      <ProblemSection onCtaClick={scrollToPricing} />

      {/* 7. Preview of material/experiments */}
      <MaterialPreview onCtaClick={scrollToPricing} />

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
