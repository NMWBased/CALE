"use client";

import { motion } from "framer-motion";
import { Building, FileText, Home, MessageCircle, Palette } from "lucide-react";
import { fadeInUp, staggerContainer, useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function ServicesSection() {
  const { ref, controls } = useScrollAnimation();
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
  };

  return (
    <section className="py-20 bg-white" data-section="servicos" ref={ref}>
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
            Serviços
          </motion.h2>
          <motion.h3 className="text-4xl font-bold text-gray-900 mb-8 lg:mb-10" variants={fadeInUp}>
            O que posso fazer por si
          </motion.h3>
          <motion.p className="text-xl text-gray-600 max-w-3xl mx-auto" variants={fadeInUp}>
            Cada projeto é único e pensado com base nos seus gostos, necessidades e interesses.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12"
          animate={controls}
          initial="hidden"
          variants={staggerContainer}
        >
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.title}
                className="group p-8 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-gray-200 cursor-pointer"
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300, damping: 20 },
                }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div className="mb-8 lg:mb-10">
                  <motion.div
                    className="w-16 h-16 bg-amber-100 rounded-xl flex items-center justify-center group-hover:bg-primary-600 transition-all duration-300"
                    whileHover={{
                      rotate: 360,
                      scale: 1.1,
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <IconComponent
                      size={32}
                      className="text-primary-600 group-hover:text-white transition-colors duration-300"
                    />
                  </motion.div>
                </motion.div>

                <motion.h4
                  className="text-xl font-semibold text-gray-900 mb-6 lg:mb-8 group-hover:text-gray-900"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  {service.title}
                </motion.h4>

                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          animate={controls}
          initial="hidden"
          variants={fadeInUp}
        >
          <motion.div
            className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {/* Background Animation */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-amber-700 to-primary-600"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />

            <div className="relative z-10">
              <motion.h4
                className="text-2xl font-bold mb-6 lg:mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Pronto para começar?
              </motion.h4>
              <motion.p
                className="text-xl text-amber-100 mb-8 lg:mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Fale comigo sobre o seu projeto. Analiso o que pretende, explico-lhe como funciona e
                envio uma proposta clara.
              </motion.p>
              <motion.button
                type="button"
                className="bg-white text-primary-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Pedir Orçamento
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
