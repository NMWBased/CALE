"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

interface Slide {
  id: number;
  video: string;
  title: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaAction?: string; // Changed from ctaHref to ctaAction
}

const SLIDES: Slide[] = [
  {
    id: 1,
    video: "/films/3773486-hd_1920_1080_30fps.mp4",
    title: "Arquitetura que vive com você",
    subtitle: "Projetos pensados para acolher, inspirar e durar.",
    ctaLabel: "Ver Projetos",
    ctaAction: "portfolio",
  },
  {
    id: 2,
    video: "/films/7578541-uhd_3840_2160_30fps.mp4",
    title: "Interiores com identidade",
    subtitle: "Cada espaço traduz a sua forma de viver.",
    ctaLabel: "Contactar",
    ctaAction: "contacto",
  },
  {
    id: 3,
    video: "/films/7578550-uhd_3840_2160_30fps.mp4",
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
                <video
                  src={slide.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="object-cover w-full h-full absolute inset-0"
                />
                <div className="absolute inset-0 bg-black/40" />
              </motion.div>
            ) : null
          )}
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl text-white select-none">
            <AnimatePresence mode="wait">
              <motion.h1
                key={SLIDES[index].title}
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 1.1, ease: "easeInOut" }}
                className="text-4xl md:text-6xl font-semibold tracking-tight mb-6"
              >
                {SLIDES[index].title}
              </motion.h1>
            </AnimatePresence>
            {SLIDES[index].subtitle && (
              <AnimatePresence mode="wait">
                <motion.p
                  key={SLIDES[index].subtitle}
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 1.1, ease: "easeInOut" }}
                  className="text-lg md:text-2xl text-gray-200 mb-8 leading-relaxed"
                >
                  {SLIDES[index].subtitle}
                </motion.p>
              </AnimatePresence>
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
                  className="inline-flex items-center px-6 py-3 rounded-full bg-white/60 text-gray-900 font-medium text-sm md:text-base hover:bg-white transition-colors shadow-sm cursor-pointer"
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
