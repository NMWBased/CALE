"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { fadeInUp, staggerContainer, useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function PortfolioSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { ref, controls } = useScrollAnimation();

  const projects = [
    {
      title: "Casa Área Externa",
      category: "Arquitetura Residencial",
      image: "/images/imgi_18_006 Casa Área Externa_edited.png",
      description:
        "Projeto completo de área externa com integração entre espaços internos e externos.",
    },
    {
      title: "Quarto Moderno",
      category: "Design de Interiores",
      image: "/images/imgi_15_QUARTO 2_edited.png",
      description: "Design de quarto com foco na funcionalidade e conforto.",
    },
    {
      title: "Banheiro Elegante",
      category: "Design de Interiores",
      image: "/images/imgi_16_BANHEIRO 1_edited.png",
      description: "Banheiro moderno com materiais de qualidade e design atemporal.",
    },
    {
      title: "Área de Lazer",
      category: "Arquitetura Residencial",
      image: "/images/imgi_19_009 Casa Área Externa_edited_edited.png",
      description: "Espaço de lazer integrado com paisagismo e funcionalidade.",
    },
    {
      title: "Sala de Estar",
      category: "Design de Interiores",
      image: "/images/imgi_17_4 (1).png",
      description: "Ambiente acolhedor com mobiliário personalizado e iluminação natural.",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <>
      <section className="py-20 bg-gray-50" data-section="portfolio" ref={ref}>
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            animate={controls}
            initial="hidden"
            variants={fadeInUp}
          >
            <motion.h2
              className="text-sm font-semibold text-primary-600 uppercase tracking-wide mb-2"
              variants={fadeInUp}
            >
              Portfólio
            </motion.h2>
            <motion.h3
              className="text-4xl font-bold text-gray-900 mb-8 lg:mb-10"
              variants={fadeInUp}
            >
              Projetos Realizados
            </motion.h3>
            <motion.p className="text-xl text-gray-600 max-w-3xl mx-auto" variants={fadeInUp}>
              Cada projeto conta uma história única de transformação, combinando funcionalidade,
              beleza e conforto.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12"
            animate={controls}
            initial="hidden"
            variants={staggerContainer}
          >
            {projects.map((project) => (
              <motion.button
                type="button"
                key={project.title}
                className="group cursor-pointer w-full text-left"
                onClick={() => setSelectedImage(project.image)}
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  transition: { type: "spring", stiffness: 300, damping: 20 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <motion.div
                      className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    />
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ scale: 0.8 }}
                      whileHover={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    >
                      <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
                        <svg
                          className="w-6 h-6 text-primary-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <title>Ver projeto</title>
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                      </div>
                    </motion.div>
                  </div>

                  <motion.div
                    className="p-6"
                    whileHover={{ backgroundColor: "rgba(249, 250, 251, 1)" }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.span
                      className="text-sm font-medium text-primary-600 mb-2 block"
                      whileHover={{ scale: 1.05, originX: 0 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    >
                      {project.category}
                    </motion.span>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
                  </motion.div>
                </div>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Modal for Image View */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-4xl max-h-[90vh] w-full h-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Projeto em destaque"
                fill
                className="object-contain"
              />
              <motion.button
                type="button"
                className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
                onClick={() => setSelectedImage(null)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                ✕
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
