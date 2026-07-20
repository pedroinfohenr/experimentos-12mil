export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface Testimonial {
  id: string;
  stars: number;
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

export interface BonusItem {
  id: string;
  title: string;
  description: string;
  originalPrice: number;
  currentPrice: number;
  badge: string;
  imageAlt: string;
  illustrationType: 'evaluation' | 'guide' | 'plans' | 'planning' | 'experiments';
}

export interface ProblemCard {
  id: string;
  iconName: 'Clock' | 'Frown' | 'AlertTriangle';
  title: string;
  description: string;
}

export interface SolutionCard {
  id: string;
  iconName: 'Sparkles' | 'Map' | 'Users' | 'BookOpen' | 'Download' | 'RefreshCw';
  title: string;
  description: string;
}

export interface PlanFeature {
  text: string;
  included: boolean;
}

export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  description: string;
  originalPrice: number;
  promoPrice: number;
  cents: string;
  features: PlanFeature[];
  buttonText: string;
  isPopular: boolean;
}

export interface InteractiveMaterial {
  id: string;
  title: string;
  category: string;
  description: string;
  ageGroup: string;
  bnccCode: string;
  previewType: 'cell' | 'foodchain' | 'solarsystem' | 'volcano';
}
