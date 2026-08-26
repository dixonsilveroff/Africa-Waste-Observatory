import type { Metadata } from 'next';
import AboutHero from '@/components/about/AboutHero';
import Mission from '@/components/about/Mission';
import Vision from '@/components/about/Vision';
import WhyWeExist from '@/components/about/WhyWeExist';
import AboutObjectives from '@/components/about/AboutObjectives';
import HowAWOWorks from '@/components/about/HowAWOWorks';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn how we advance data-driven waste management, environmental policy reform, and sustainable development across Africa.',
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Mission />
      <Vision />
      <WhyWeExist />
      <AboutObjectives />
      <HowAWOWorks />
    </>
  );
}
