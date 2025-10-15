"use client";

import { Mail, MessageCircle, Phone } from "lucide-react";
import { useId } from "react";
import { motion } from "framer-motion";
import { fadeInUp, useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function ContactSection() {
  const nameId = useId();
  const emailId = useId();
  const phoneId = useId();
  const projectId = useId();
  const messageId = useId();
  const { ref, controls } = useScrollAnimation();
  
  return (
    <section className="py-20 bg-white" data-section="contacto" ref={ref}>
      <div className="container mx-auto px-6 lg:px-8">
        {/* Primeira Fase: Fale Comigo - Formulário Centralizado */}
        <motion.div 
          className="text-center mb-16"
          animate={controls}
          initial="hidden"
          variants={fadeInUp}
        >
          <h2 className="text-sm font-semibold text-amber-600 uppercase tracking-wide mb-2">
            Contacto
          </h2>
          <h3 className="text-4xl font-bold text-gray-900 mb-8 lg:mb-10">
            Fale comigo sobre o seu projeto e peça um orçamento
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Analiso o que pretende, explico-lhe como funciona e envio uma proposta clara.
          </p>
        </motion.div>

        {/* Formulário Centralizado */}
        <motion.div 
          className="max-w-3xl mx-auto mb-20"
          animate={controls}
          initial="hidden"
          variants={fadeInUp}
        >
          <div className="bg-gray-50 p-8 lg:p-10 rounded-2xl shadow-lg">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor={nameId} className="block text-sm font-semibold text-gray-900 mb-2">
                    Nome *
                  </label>
                  <input
                    type="text"
                    id={nameId}
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-colors bg-white"
                    placeholder="O seu nome"
                  />
                </div>

                <div>
                  <label htmlFor={emailId} className="block text-sm font-semibold text-gray-900 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id={emailId}
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-colors bg-white"
                    placeholder="o.seu.email@exemplo.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor={phoneId} className="block text-sm font-semibold text-gray-900 mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id={phoneId}
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent outline-none transition-colors bg-white"
                    placeholder="+351 123 456 789"
                  />
                </div>

                <div>
                  <label
                    htmlFor={projectId}
                    className="block text-sm font-semibold text-gray-900 mb-2"
                  >
                    Tipo de Projeto
                  </label>
                  <select
                    id={projectId}
                    name="project"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-colors bg-white"
                  >
                    <option value="">Selecione o tipo de projeto</option>
                    <option value="arquitetura">Projeto de Arquitetura</option>
                    <option value="reabilitacao">Projeto de Reabilitação</option>
                    <option value="execucao">Projeto de Execução</option>
                    <option value="interiores">Projeto de Interiores</option>
                    <option value="consultoria">Consultoria</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor={messageId}
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  Mensagem *
                </label>
                <textarea
                  id={messageId}
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-colors resize-vertical bg-white"
                  placeholder="Conte-me sobre o seu projeto..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-amber-600 text-white px-8 py-4 rounded-lg hover:bg-amber-700 transition-all duration-300 font-semibold text-lg transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </motion.div>

        {/* Segunda Fase: Como me pode contactar - Layout Horizontal */}
        <motion.div 
          className="border-t border-gray-200 pt-16"
          animate={controls}
          initial="hidden"
          variants={fadeInUp}
        >
          <h4 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Como me pode contactar
          </h4>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {/* Email */}
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Mail className="text-amber-600" size={28} />
              </div>
              <h5 className="font-semibold text-gray-900 mb-2 text-lg">Email</h5>
              <a
                href="mailto:geral@cale-arquitetura.com"
                className="text-gray-600 hover:text-amber-600 transition-colors block"
              >
                geral@cale-arquitetura.com
              </a>
            </div>

            {/* Telefone */}
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Phone className="text-amber-600" size={28} />
              </div>
              <h5 className="font-semibold text-gray-900 mb-2 text-lg">Telefone</h5>
              <a
                href="tel:+351963870706"
                className="text-gray-600 hover:text-amber-600 transition-colors block"
              >
                +351 963 870 706
              </a>
            </div>

            {/* WhatsApp */}
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="text-amber-600" size={28} />
              </div>
              <h5 className="font-semibold text-gray-900 mb-2 text-lg">WhatsApp</h5>
              <a
                href="https://wa.me/351963870706?text=Olá,%20estou%20interessado(a)%20num%20projecto%20de%20arquitectura.%20Como%20podemos%20começar%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 hover:text-amber-700 transition-colors font-medium inline-block"
              >
                Enviar mensagem
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
