"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

interface Slide {
  id: number;
  image: string;
  title: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaAction?: string; // Changed from ctaHref to ctaAction
}

const SLIDES: Slide[] = [
  {
    id: 1,
    image: "/images/imgi_18_006 Casa Área Externa_edited.png",
    title: "Arquitetura que vive com você",
    subtitle: "Projetos pensados para acolher, inspirar e durar.",
    ctaLabel: "Ver Projetos",
    ctaAction: "portfolio",
  },
  {
    id: 2,
    image: "/images/imgi_15_QUARTO 2_edited.png",
    title: "Interiores com identidade",
    subtitle: "Cada espaço traduz a sua forma de viver.",
    ctaLabel: "Contactar",
    ctaAction: "contacto",
  },
  {
    id: 3,
    image: "/images/imgi_19_009 Casa Área Externa_edited_edited.png",
    title: "Funcionalidade e harmonia",
    subtitle: "Equilíbrio entre estética, conforto e propósito.",
    ctaLabel: "Sobre mim",
    ctaAction: "sobre",
  },
];

const AUTO_DELAY = 6500; // ms

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const { scrollToSection } = useSmoothScroll();

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setIndex((i) => (i + 1) % SLIDES.length), AUTO_DELAY);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  // Removed goTo (dots navigation) since dots are not shown

  return (
    <section
      data-section="inicio"
      className="relative h-[100vh] min-h-[750px] w-full overflow-hidden bg-black"
    >
      {/* Slides */}
      <div className="absolute inset-0">
        <AnimatePresence initial={false} mode="wait">
          {SLIDES.map((slide, i) =>
            i === index ? (
              <motion.div
                key={slide.id}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 1.1, ease: "easeInOut" }}
              >
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority
                  className="object-cover"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/0" />
              </motion.div>
            ) : null
          )}
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl text-white select-none">
            <motion.h1
              key={SLIDES[index].title}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-6xl font-semibold tracking-tight mb-6"
            >
              {SLIDES[index].title}
            </motion.h1>
            {SLIDES[index].subtitle && (
              <motion.p
                key={SLIDES[index].subtitle}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
                className="text-lg md:text-2xl text-gray-200 mb-8 leading-relaxed"
              >
                {SLIDES[index].subtitle}
              </motion.p>
            )}
            {SLIDES[index].ctaLabel && SLIDES[index].ctaAction && (
              <AnimatePresence mode="wait">
                <motion.button
                  key={SLIDES[index].ctaLabel + SLIDES[index].ctaAction}
                  type="button"
                  onClick={() => {
                    const action = SLIDES[index].ctaAction;
                    if (action) scrollToSection(action);
                  }}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 25 }}
                  transition={{ duration: 1.1, ease: "easeInOut" }}
                  className="inline-flex items-center px-6 py-3 rounded-full bg-white/90 text-gray-900 font-medium text-sm md:text-base hover:bg-white transition-colors shadow-sm cursor-pointer"
                >
                  {SLIDES[index].ctaLabel}
                </motion.button>
              </AnimatePresence>
            )}
          </div>
        </div>
      </div>

  {/* Dots removed as requested */}
    </section>
  );
}
