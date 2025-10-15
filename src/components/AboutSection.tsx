"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeInLeft, fadeInRight, fadeInUp, useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function AboutSection() {
  const { ref, controls } = useScrollAnimation();
  return (
    <section className="py-28 bg-gray-50" data-section="sobre" ref={ref}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            className="space-y-6"
            animate={controls}
            initial="hidden"
            variants={fadeInLeft}
          >
            <motion.div variants={fadeInUp}>
              <motion.h2
                className="text-sm font-semibold text-amber-600 uppercase tracking-wide mb-2"
                variants={fadeInUp}
              >
                Sobre a CALE
              </motion.h2>
              <motion.h3
                className="text-4xl font-bold text-gray-900 mb-6"
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
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mt-8"
              variants={fadeInUp}
            >
              <h4 className="text-xl font-semibold text-gray-900 mb-5">
                A percepção de um arquiteto revela:
              </h4>
              <ul className="space-y-4">
                <motion.li className="flex items-start space-x-3" variants={fadeInUp}>
                  <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>Clareza e direção</strong> para o seu projeto
                  </span>
                </motion.li>
                <motion.li className="flex items-start space-x-3" variants={fadeInUp}>
                  <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>Praticidade e apoio técnico</strong> para cada decisão
                  </span>
                </motion.li>
                <motion.li className="flex items-start space-x-3" variants={fadeInUp}>
                  <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0" />
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
            className="relative flex flex-col justify-center"
            animate={controls}
            initial="hidden"
            variants={fadeInRight}
          >
            <motion.div className="relative overflow-hidden rounded-2xl shadow-xl mb-6">
              <Image
                src="/images/imgi_20_IMG_4989_JPG.jpg"
                alt="Ana Carolina Cruz - Arquiteta CALE"
                width={600}
                height={700}
                className="object-cover w-full h-[500px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </motion.div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-6">
              <motion.div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                <p className="text-3xl font-bold text-amber-600 mb-2">5+</p>
                <p className="text-sm text-gray-600">Anos de experiência</p>
              </motion.div>
              <motion.div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                <p className="text-3xl font-bold text-amber-600 mb-2">50+</p>
                <p className="text-sm text-gray-600">Projetos realizados</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
