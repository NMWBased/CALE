"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary-50 to-accent-warm/20"
      data-section="inicio"
    >
      {/* Background Image Grid */}
      <div className="absolute inset-0 z-0">
        <div className="grid grid-cols-2 lg:grid-cols-3 h-full opacity-20">
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.3, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.1 }}
          >
            <Image
              src="/images/imgi_18_006 Casa Área Externa_edited.png"
              alt="Casa Externa"
              fill
              className="object-cover"
            />
          </motion.div>
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.3, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.3 }}
          >
            <Image
              src="/images/imgi_15_QUARTO 2_edited.png"
              alt="Quarto"
              fill
              className="object-cover"
            />
          </motion.div>
          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.3, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            <Image
              src="/images/imgi_16_BANHEIRO 1_edited.png"
              alt="Banheiro"
              fill
              className="object-cover"
            />
          </motion.div>
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.3, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.7 }}
          >
            <Image src="/images/imgi_17_4 (1).png" alt="Sala" fill className="object-cover" />
          </motion.div>
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.3, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.9 }}
          >
            <Image
              src="/images/imgi_19_009 Casa Área Externa_edited_edited.png"
              alt="Área Externa"
              fill
              className="object-cover"
            />
          </motion.div>
          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.3, scale: 1 }}
            transition={{ duration: 1.5, delay: 1.1 }}
          >
            <Image
              src="/images/imgi_20_IMG_4989_JPG.jpg"
              alt="Ana Carolina"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/95" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen py-20">
          {/* Text Content */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="inline-block px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium"
              variants={textVariants}
            >
              CALE arquitetura
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight"
              variants={textVariants}
            >
              Espaços com{" "}
              <span className="text-transparent bg-gradient-to-r from-primary-600 to-accent-warm bg-clip-text">
                funcionalidade,
              </span>
              <br />
              alma e conforto
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-600 max-w-xl leading-relaxed"
              variants={textVariants}
            >
              Cada projeto é único e pensado com base nos seus gostos, necessidades e interesses.
            </motion.p>

            <motion.div
              className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-primary-200"
              variants={textVariants}
            >
              <p className="text-gray-700 text-lg italic leading-relaxed">
                "A percepção de um arquiteto revela o potencial que um espaço pode ter, com{" "}
                <span className="font-semibold text-primary-700">
                  intenção, harmonia e propósito
                </span>
                ."
              </p>
            </motion.div>

            <motion.div className="flex flex-col sm:flex-row gap-4" variants={buttonVariants}>
              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href="#portfolio"
                  className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300 font-semibold text-lg text-center inline-flex items-center justify-center group"
                >
                  Ver Portfólio
                  <motion.span
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                    whileHover={{ x: 4 }}
                  >
                    →
                  </motion.span>
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href="#contacto"
                  className="border-2 border-primary-600 text-primary-600 bg-white/80 backdrop-blur-sm px-8 py-4 rounded-full hover:bg-primary-600 hover:text-white transition-all duration-300 font-semibold text-lg text-center inline-block"
                >
                  Falar Comigo
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            className="relative lg:block hidden"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.div
              className="relative w-full h-[600px] rounded-3xl overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.02, rotate: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/images/imgi_18_006 Casa Área Externa_edited.png"
                alt="Projeto CALE Arquitetura - Casa Área Externa"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </motion.div>

            {/* Floating Cards */}
            <motion.div
              className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">5+</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">Anos de</p>
                  <p className="text-xs text-gray-600">experiência</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-center">
                <p className="text-2xl font-bold text-primary-600">100%</p>
                <p className="text-xs text-gray-600">Personalizado</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center cursor-pointer"
          whileHover={{ scale: 1.1 }}
          onClick={() => {
            document
              .querySelector('[data-section="sobre"]')
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <motion.div
            className="w-1 h-3 bg-white rounded-full mt-2"
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
