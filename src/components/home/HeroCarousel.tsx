'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { AnimatePresence, motion } from 'framer-motion';

const slides = [
  '/images/carousel/slide-1.webp',
  '/images/carousel/slide-2.webp',
  '/images/carousel/slide-3.webp',
  '/images/carousel/slide-4.webp',
];

export default function HeroCarousel() {
  const t = useTranslations('home');
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="relative h-[85vh] min-h-[640px] overflow-hidden bg-on-surface">
      {/* Background slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="absolute inset-0"
        >
          <Image
            src={slides[currentSlide]}
            alt=""
            fill
            className="object-cover"
            priority={currentSlide === 0}
            sizes="100vw"
          />
        </motion.div>
      </AnimatePresence>

      {/* Editorial Gradient Scrim */}
      <div className="absolute inset-0 bg-gradient-to-t from-on-surface via-on-surface/60 to-on-surface/30" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="max-w-5xl px-6 text-center text-white">
          <span className="inline-block mb-4 text-xs font-semibold uppercase tracking-widest text-primary-fixed-dim bg-primary-container/80 px-4 py-1.5 rounded-full">
            {t('hero.subtitle')}
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            {t('hero.title')}
          </h1>
          <p className="mt-6 mx-auto max-w-3xl text-base sm:text-lg font-normal leading-relaxed text-white/85">
            {t('hero.description')}
          </p>
        </div>
      </div>

      {/* Editorial slide indicators */}
      <div className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
              index === currentSlide
                ? 'w-8 bg-white'
                : 'w-2.5 bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
