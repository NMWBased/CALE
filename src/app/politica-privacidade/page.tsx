import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidade | CALE Arquitetura",
  description: "Política de privacidade e cookies do website da CALE Arquitetura.",
};

export default function PoliticaPrivacidade() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Hero */}
      <div className="relative bg-gradient-to-br from-primary-100 to-primary-200 py-20">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/imgi_1_6b2f54_8fc2a1086e024f9497780930e0a10365~mv2.png"
            alt="CALE Arquitetura"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Link
              href="/"
              className="inline-block mb-8 hover:opacity-80 transition-opacity"
            >
              <Image
                src="/images/imgi_14_CAROL_CALE-03.png"
                alt="CALE Arquitetura"
                width={180}
                height={180}
                className="w-44 h-44 object-contain drop-shadow-md mx-auto"
              />
            </Link>
            <h1 className="text-5xl font-bold text-primary-900 mb-4">Política de Privacidade e Cookies</h1>
            <p className="text-xl text-primary-700">Última atualização: 25 de julho de 2025</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 lg:p-12">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-primary-900 mb-6 border-b border-primary-200 pb-3">Política de Privacidade e Cookies</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Esta política descreve como a CALE arquitetura recolhe, utiliza e protege os dados pessoais dos utilizadores do website www.cale-arquitetura.com, bem como o uso de cookies.
            </p>
            <h3 className="text-2xl font-bold text-primary-900 mb-4">1. Recolha de Dados Pessoais</h3>
            <p className="text-gray-700 mb-4">A CALE apenas recolhe dados pessoais fornecidos voluntariamente pelo utilizador, nomeadamente através de formulários de contacto, subscrição de newsletter ou pedidos de informação.</p>
            <h3 className="text-2xl font-bold text-primary-900 mb-4">2. Utilização dos Dados</h3>
            <p className="text-gray-700 mb-4">Os dados recolhidos são utilizados exclusivamente para responder a pedidos, enviar informações relevantes ou melhorar a experiência do utilizador no website.</p>
            <h3 className="text-2xl font-bold text-primary-900 mb-4">3. Partilha de Dados</h3>
            <p className="text-gray-700 mb-4">A CALE não partilha os dados pessoais dos utilizadores com terceiros, exceto quando exigido por lei ou para cumprimento de obrigações legais.</p>
            <h3 className="text-2xl font-bold text-primary-900 mb-4">4. Segurança</h3>
            <p className="text-gray-700 mb-4">A CALE adota medidas técnicas e organizativas adequadas para proteger os dados pessoais contra acesso não autorizado, perda ou destruição.</p>
            <h3 className="text-2xl font-bold text-primary-900 mb-4">5. Direitos dos Titulares</h3>
            <p className="text-gray-700 mb-4">O utilizador pode, a qualquer momento, solicitar o acesso, retificação ou eliminação dos seus dados pessoais, bem como retirar o consentimento para o seu tratamento, através do email <a href="mailto:geral@cale-arquitetura.com" className="text-primary-600 hover:text-primary-700 transition-colors">geral@cale-arquitetura.com</a>.</p>
            <h3 className="text-2xl font-bold text-primary-900 mb-4">6. Cookies</h3>
            <p className="text-gray-700 mb-4">O website utiliza cookies para melhorar a navegação e analisar o tráfego. O utilizador pode configurar o seu navegador para recusar cookies, mas tal poderá afetar o funcionamento do site.</p>
            <h3 className="text-2xl font-bold text-primary-900 mb-4">7. Ligações a Sites Externos</h3>
            <p className="text-gray-700 mb-4">O website pode conter ligações para sites externos. A CALE não se responsabiliza pelas políticas de privacidade desses sites.</p>
            <h3 className="text-2xl font-bold text-primary-900 mb-4">8. Alterações à Política</h3>
            <p className="text-gray-700 mb-4">A CALE reserva-se o direito de alterar esta política a qualquer momento. As alterações serão publicadas nesta página.</p>
            <h3 className="text-2xl font-bold text-primary-900 mb-4">9. Contacto</h3>
            <p className="text-gray-700 mb-4">Para qualquer questão relacionada com a política de privacidade e cookies, contacte-nos através do email <a href="mailto:geral@cale-arquitetura.com" className="text-primary-600 hover:text-primary-700 transition-colors">geral@cale-arquitetura.com</a>.</p>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="text-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center px-8 py-3 bg-amber-600 text-white rounded-full shadow-lg hover:bg-amber-700 transition-all duration-300 font-semibold text-lg tracking-wide focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2"
              >
                Voltar ao Site Principal
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
