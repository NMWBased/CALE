"use client";

import { Instagram, Mail, MessageCircle, Phone } from "lucide-react";
import { useId } from "react";

export default function ContactSection() {
  const nameId = useId();
  const emailId = useId();
  const phoneId = useId();
  const projectId = useId();
  const messageId = useId();
  return (
    <section className="py-20 bg-white" data-section="contato">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-primary-600 uppercase tracking-wide mb-2">
            Contacto
          </h2>
          <h3 className="text-4xl font-bold text-gray-900 mb-8 lg:mb-10">
            Fale comigo sobre o seu projeto
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Analiso o que pretende, explico-lhe como funciona e envio uma proposta clara.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-10 lg:space-y-12">
            <div>
              <h4 className="text-2xl font-bold text-gray-900 mb-8 lg:mb-10">
                Como me pode contactar
              </h4>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">Email</h5>
                    <a
                      href="mailto:geral@cale-arquitetura.com"
                      className="text-gray-600 hover:text-primary-600 transition-colors"
                    >
                      geral@cale-arquitetura.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">Telefone</h5>
                    <a
                      href="tel:+351963870706"
                      className="text-gray-600 hover:text-primary-600 transition-colors"
                    >
                      +351 963 870 706
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">WhatsApp</h5>
                    <a
                      href="https://wa.me/351963870706?text=Olá,%20estou%20interessado(a)%20num%20projecto%20de%20arquitectura.%20Como%20podemos%20começar%3F"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-primary-600 transition-colors"
                    >
                      Enviar mensagem
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h5 className="font-semibold text-gray-900 mb-6 lg:mb-8">
                Siga-me nas redes sociais
              </h5>
              <div className="flex space-x-4">
                <button
                  type="button"
                  className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-primary-600 hover:text-white transition-colors"
                  title="Instagram (em breve)"
                >
                  <Instagram size={20} />
                </button>
                <a
                  href="https://pt.pinterest.com/calearquitetura/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-primary-600 hover:text-white transition-colors"
                >
                  <span className="text-sm font-bold">P</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-2xl">
            <form className="space-y-6">
              <div>
                <label htmlFor={nameId} className="block text-sm font-semibold text-gray-900 mb-2">
                  Nome *
                </label>
                <input
                  type="text"
                  id={nameId}
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent outline-none transition-colors"
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
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent outline-none transition-colors"
                  placeholder="o.seu.email@exemplo.com"
                />
              </div>

              <div>
                <label htmlFor={phoneId} className="block text-sm font-semibold text-gray-900 mb-2">
                  Telefone
                </label>
                <input
                  type="tel"
                  id={phoneId}
                  name="phone"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent outline-none transition-colors"
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
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent outline-none transition-colors"
                >
                  <option value="">Selecione o tipo de projeto</option>
                  <option value="arquitetura">Projeto de Arquitetura</option>
                  <option value="reabilitacao">Projeto de Reabilitação</option>
                  <option value="execucao">Projeto de Execução</option>
                  <option value="interiores">Projeto de Interiores</option>
                  <option value="consultoria">Consultoria</option>
                </select>
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
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent outline-none transition-colors resize-vertical"
                  placeholder="Conte-me sobre o seu projeto..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary-600 text-white px-8 py-4 rounded-lg hover:bg-primary-700 transition-colors duration-300 font-semibold"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
