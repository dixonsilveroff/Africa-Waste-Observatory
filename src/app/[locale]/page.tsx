import type { Metadata } from 'next';
import HeroCarousel from '@/components/home/HeroCarousel';
import WasteChallenge from '@/components/home/WasteChallenge';
import OurSolution from '@/components/home/OurSolution';
import CoreObjectives from '@/components/home/CoreObjectives';
import WhatWeDeliver from '@/components/home/WhatWeDeliver';
import ExploreObservatory from '@/components/home/ExploreObservatory';
import FeaturedInsights from '@/components/home/FeaturedInsights';
import ImpactGoals from '@/components/home/ImpactGoals';

export const metadata: Metadata = {
  title:
    'Africa Waste Observatory - Tracking, Managing, and Transforming Waste Across Africa',
  description:
    "Africa's leading waste intelligence platform providing data-driven insights for sustainable waste management across the continent.",
};

export default function HomePage() {
  return (
    <>
      <HeroCarousel />
      <WasteChallenge />
      <OurSolution />
      <CoreObjectives />
      <WhatWeDeliver />
      <ExploreObservatory />
      <FeaturedInsights />
      <ImpactGoals />
    </>
  );
}
