"use client";

import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import { Building, FileText, Home, MessageCircle, Palette } from "lucide-react";
import { fadeInUp, useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState } from "react";

export default function ServicesSection() {
  const { ref, controls } = useScrollAnimation();
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);

  const services = [
    {
      icon: Building,
      title: "Projetos de Arquitetura",
      description:
        "Projeto completo, pensado desde o início e à sua medida - com funcionalidade, beleza, conforto e tudo o que precisa para aproveitar bem o espaço.",
    },
    {
      icon: Home,
      title: "Projetos de Reabilitação",
      description:
        "Projeto de transformação de espaços em ambientes renovados com coerência, respeitando o existente.",
    },
    {
      icon: FileText,
      title: "Projetos de Execução",
      description: "Projeto técnico detalhado que serve de base à obra.",
    },
    {
      icon: Palette,
      title: "Projetos de Interiores",
      description:
        "Planeamento de ambientes internos com foco na funcionalidade, conforto e estética.",
    },
    {
      icon: MessageCircle,
      title: "Consultorias",
      description:
        "Análise técnica e criativa de plantas, propostas ou ideias. Ideal para quem precisa de orientação pontual.",
    },
  ];

  // Duplicar os cards para criar efeito infinito (apenas mobile)
  const duplicatedServices = [...services, ...services, ...services];

  // Animação contínua apenas para mobile
  useAnimationFrame(() => {
    if (!isHovered) {
      const currentX = x.get();
      const newX = currentX - 0.5;
      
      if (newX <= -1540) {
        x.set(newX + 1540);
      } else {
        x.set(newX);
      }
    }
  });

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <section className="py-12 bg-white overflow-hidden" data-section="servicos" ref={ref}>
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          animate={controls}
          initial="hidden"
          variants={fadeInUp}
        >
          <motion.h2
            className="text-sm font-semibold text-amber-600 uppercase tracking-wide mb-2"
            variants={fadeInUp}
          >
            Serviços
          </motion.h2>
          <motion.h3 className="text-4xl font-bold text-gray-900 mb-8 lg:mb-10" variants={fadeInUp}>
            O que posso fazer por si
          </motion.h3>
          <motion.p className="text-xl text-gray-600 max-w-3xl mx-auto" variants={fadeInUp}>
            Cada projeto é único e pensado com base nos seus gostos, necessidades e interesses.
          </motion.p>
        </motion.div>

        {/* Desktop: Grid estático */}
        <div className="hidden lg:grid lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={`${service.title}-${index}`}
                className="group p-6 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-primary-200 cursor-pointer flex flex-col"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                whileHover={{ scale: 1.03, boxShadow: "0 12px 40px #0002", opacity: 0.98, transition: { duration: 0.5, ease: "easeInOut" } }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="mb-6">
                  <div className="w-14 h-14 bg-amber-50 rounded-xl flex items-center justify-center group-hover:bg-amber-600 transition-all duration-300">
                    <IconComponent
                      size={28}
                      className="text-amber-600 group-hover:text-white transition-colors duration-300"
                    />
                  </div>
                </div>

                <h4 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-amber-600 transition-colors">
                  {service.title}
                </h4>

                <p className="text-gray-600 text-base leading-relaxed flex-grow">{service.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile: Carrossel em loop */}
        <section 
          className="lg:hidden relative cursor-grab active:cursor-grabbing"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          aria-label="Carrossel de serviços"
        >
          <motion.div
            className="flex gap-4"
            style={{ x }}
          >
            {duplicatedServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={`${service.title}-${index}`}
                  className="group min-w-[180px] max-w-[180px] h-[270px] p-3 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-primary-200 cursor-pointer flex-shrink-0 flex flex-col"
                  whileHover={{ scale: 1.02, boxShadow: "0 8px 24px #0002", opacity: 0.98, transition: { duration: 0.4, ease: "easeInOut" } }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="mb-4">
                    <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center group-hover:bg-amber-600 transition-all duration-300">
                      <IconComponent
                        size={22}
                        className="text-amber-600 group-hover:text-white transition-colors duration-300"
                      />
                    </div>
                  </div>

                  <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
                    {service.title}
                  </h4>

                  <p className="text-gray-600 text-sm leading-relaxed flex-grow">{service.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </section>
      </div>
    </section>
  );
}
