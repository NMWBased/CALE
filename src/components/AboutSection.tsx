"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeInLeft, fadeInRight, fadeInUp, useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function AboutSection() {
  const { ref, controls } = useScrollAnimation();
  return (
    <section className="py-20 bg-gray-50" data-section="sobre" ref={ref}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            className="space-y-6"
            animate={controls}
            initial="hidden"
            variants={fadeInLeft}
          >
            <motion.div variants={fadeInUp}>
              <motion.h2
                className="text-sm font-semibold text-primary-600 uppercase tracking-wide mb-2"
                variants={fadeInUp}
              >
                Sobre a CALE
              </motion.h2>
              <motion.h3
                className="text-4xl font-bold text-gray-900 mb-8 lg:mb-10"
                variants={fadeInUp}
              >
                Ajudo-o na transformação
              </motion.h3>
            </motion.div>

            <motion.p className="text-lg text-gray-700 leading-relaxed" variants={fadeInUp}>
              O meu nome é <strong>Ana Carolina Cruz</strong>, sou arquiteta há mais de cinco anos e
              adoro a magia de transformar espaços.
            </motion.p>

            <motion.p className="text-lg text-gray-700 leading-relaxed" variants={fadeInUp}>
              Mais do que desenhar, o meu trabalho foca-se em ouvir e traduzir os desejos de quem me
              procura em soluções funcionais e cheias de sentido.
            </motion.p>

            <motion.p className="text-lg text-gray-700 leading-relaxed" variants={fadeInUp}>
              Um bom projeto faz-se com partilha, de opiniões e conhecimentos, e aqui encontrará um
              acompanhamento próximo e transparente.
            </motion.p>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
              variants={fadeInUp}
              whileHover={{
                y: -5,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <h4 className="text-xl font-semibold text-gray-900 mb-6 lg:mb-8">
                A percepção de um arquiteto revela:
              </h4>
              <ul className="space-y-3">
                <motion.li className="flex items-start space-x-3" variants={fadeInUp}>
                  <motion.div
                    className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"
                    whileHover={{ scale: 1.5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  />
                  <span className="text-gray-700">
                    <strong>Clareza e direção</strong> para o seu projeto
                  </span>
                </motion.li>
                <motion.li className="flex items-start space-x-3" variants={fadeInUp}>
                  <motion.div
                    className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"
                    whileHover={{ scale: 1.5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  />
                  <span className="text-gray-700">
                    <strong>Praticidade e apoio técnico</strong> para cada decisão
                  </span>
                </motion.li>
                <motion.li className="flex items-start space-x-3" variants={fadeInUp}>
                  <motion.div
                    className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"
                    whileHover={{ scale: 1.5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  />
                  <span className="text-gray-700">
                    <strong>Autenticidade e harmonia</strong> combinando beleza, funcionalidade e
                    conforto
                  </span>
                </motion.li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="relative"
            animate={controls}
            initial="hidden"
            variants={fadeInRight}
          >
            <div className="space-y-6">
              <motion.div
                className="relative overflow-hidden rounded-2xl shadow-xl"
                whileHover={{
                  scale: 1.01,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/images/imgi_20_IMG_4989_JPG.jpg"
                  alt="Ana Carolina Cruz - Arquiteta CALE"
                  width={600}
                  height={800}
                  className="object-cover w-full h-[600px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </motion.div>

              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  className="bg-white p-4 rounded-xl shadow-md border border-gray-100"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary-600">5+</p>
                    <p className="text-sm text-gray-600">Anos de experiência</p>
                  </div>
                </motion.div>

                <motion.div
                  className="bg-white p-4 rounded-xl shadow-md border border-gray-100"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary-600">50+</p>
                    <p className="text-sm text-gray-600">Projetos realizados</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
