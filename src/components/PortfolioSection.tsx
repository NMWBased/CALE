"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useMemo, useState } from "react";
import { X } from "lucide-react";
import { fadeInUp, useScrollAnimation } from "@/hooks/useScrollAnimation";

interface ProjectItem {
  title: string;
  image: string;
  category?: string;
}

export default function PortfolioSection() {
  const [selectedImage, setSelectedImage] = useState<ProjectItem | null>(null);
  const { ref, controls } = useScrollAnimation();

  const projects: ProjectItem[] = useMemo(
    () => [
      { title: "Área Externa", image: "/images/imgi_18_006 Casa Área Externa_edited.png" },
      { title: "Quarto", image: "/images/imgi_15_QUARTO 2_edited.png" },
      { title: "Banheiro", image: "/images/imgi_16_BANHEIRO 1_edited.png" },
      { title: "Sala", image: "/images/imgi_17_4 (1).png" },
      { title: "Área Externa 2", image: "/images/imgi_19_009 Casa Área Externa_edited_edited.png" },
      { title: "Projeto", image: "/images/imgi_1_6b2f54_8fc2a1086e024f9497780930e0a10365~mv2.png" },
    ],
    []
  );

  const openModal = (project: ProjectItem) => {
    setSelectedImage(project);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <section data-section="portfolio" className="py-16 bg-white" ref={ref}>
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div 
            className="max-w-3xl mx-auto mb-12 text-center"
            animate={controls}
            initial="hidden"
            variants={fadeInUp}
          >
            <h2 className="text-sm font-semibold tracking-wide text-amber-600 uppercase mb-3">
              Portfólio
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Projetos Selecionados
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Uma amostra visual de diferentes tipologias e ambientes desenvolvidos com foco em
              funcionalidade, estética e conforto.
            </p>
          </motion.div>
          <div
            className="grid gap-6"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gridTemplateRows: "repeat(3, 200px)",
              gridTemplateAreas: `
                'img1 img1 img2 img3'
                'img4 img5 img5 img3'
                'img4 img6 img6 img3'
              `,
            }}
          >
            {[0,1,2,3,4,5].map((idx) => (
              <motion.button
                key={projects[idx].title}
                onClick={() => openModal(projects[idx])}
                type="button"
                className="group relative overflow-hidden rounded-xl bg-gray-100 shadow-sm transition-shadow duration-300 cursor-pointer"
                style={{ gridArea: `img${idx+1}`, willChange: "transform" }}
                initial={{ scale: 1, boxShadow: "0 2px 8px #0001", opacity: 1 }}
                animate={{ scale: 1, boxShadow: "0 2px 8px #0001", opacity: 1 }}
                whileHover={{ scale: 1.025, boxShadow: "0 8px 24px #0002", opacity: 0.96 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <Image src={projects[idx].image} alt={projects[idx].title} fill className="object-cover" loading="lazy" />
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Modal de Imagem Ampliada */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={closeModal}
          onKeyDown={(e) => {
            if (e.key === "Escape") closeModal();
          }}
          role="dialog"
          aria-modal="true"
          aria-label="Imagem ampliada"
          tabIndex={-1}
        >
          <button
            type="button"
            onClick={closeModal}
            className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-10"
            aria-label="Fechar"
          >
            <X size={24} />
          </button>
          <button
            type="button"
            className="relative max-w-6xl w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
            aria-label="Imagem do projeto"
          >
            <div className="relative w-full h-full max-h-[90vh]">
              <Image
                src={selectedImage.image}
                alt={selectedImage.title}
                fill
                className="object-contain"
                sizes="90vw"
                priority
              />
            </div>
          </button>
        </div>
      )}
    </>
  );
}
