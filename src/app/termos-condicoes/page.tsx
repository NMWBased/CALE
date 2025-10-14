import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Termos e Condições | CALE Arquitetura",
  description: "Termos e condições de utilização do website da CALE Arquitetura.",
};

export default function TermosCondicoes() {
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
              className="inline-flex items-center space-x-3 mb-8 hover:opacity-80 transition-opacity"
            >
              <Image
                src="/images/imgi_14_CAROL_CALE-03.png"
                alt="CALE Arquitetura"
                width={48}
                height={48}
                className="w-12 h-12 object-contain drop-shadow-md"
              />
              <div>
                <h1 className="text-xl font-bold text-primary-800">CALE</h1>
                <p className="text-xs text-primary-600 -mt-1">arquitetura</p>
              </div>
            </Link>
            <h1 className="text-5xl font-bold text-primary-900 mb-4">Termos e Condições</h1>
            <p className="text-xl text-primary-700">Última atualização: 25 de julho de 2025</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 lg:p-12">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Bem-vindo ao website da CALE arquitetura. O presente documento define os Termos e
              Condições aplicáveis ao acesso e utilização do website{" "}
              <a
                href="https://www.cale-arquitetura.com"
                className="text-primary-600 hover:text-primary-700 transition-colors"
              >
                www.cale-arquitetura.com
              </a>
              , propriedade da CALE arquitetura (adiante designada por "CALE").
            </p>

            <p className="text-gray-700 mb-12 leading-relaxed">
              Ao navegar neste website, o utilizador declara que compreende, aceita e se compromete
              a cumprir os presentes Termos. Caso não concorde com alguma das disposições, deverá
              abster-se de aceder ou utilizar este website.
            </p>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-primary-900 mb-6 border-b border-primary-200 pb-3">
                1. Objeto e Âmbito de Aplicação
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Os presentes Termos regulam o acesso, navegação e utilização do website da CALE,
                incluindo todas as funcionalidades, conteúdos informativos e formulários interativos
                nele disponibilizados.
              </p>
              <p className="text-gray-700 leading-relaxed">
                A CALE reserva-se o direito de modificar, suspender ou encerrar o site ou parte dos
                seus serviços a qualquer momento, sem aviso prévio.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-primary-900 mb-6 border-b border-primary-200 pb-3">
                2. Alterações aos Termos
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                A CALE pode atualizar ou alterar estes Termos e Condições a qualquer momento, sendo
                as novas versões publicadas diretamente no website. É da responsabilidade do
                utilizador verificar regularmente esta página.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                A continuação da navegação no site após a publicação de alterações será considerada
                como aceitação dos novos termos. Caso não concorde, o utilizador deverá cessar a
                utilização do website.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Para esclarecimentos, poderá contactar-nos através de:{" "}
                <a
                  href="mailto:geral@cale-arquitetura.com"
                  className="text-primary-600 hover:text-primary-700 transition-colors"
                >
                  geral@cale-arquitetura.com
                </a>
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-primary-900 mb-6 border-b border-primary-200 pb-3">
                3. Propriedade Intelectual
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Todo o conteúdo presente neste website (textos, imagens, gráficos, logótipos,
                projetos, vídeos, documentos ou outros materiais) é propriedade da CALE, exceto
                quando indicado o contrário.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">É estritamente proibido:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 pl-4">
                <li>
                  Reproduzir, copiar, distribuir, modificar ou publicar qualquer conteúdo sem
                  autorização prévia e escrita da CALE;
                </li>
                <li>Utilizar conteúdos para fins comerciais ou promocionais sem consentimento;</li>
                <li>
                  Usar elementos do website de forma a violar direitos de autor ou propriedade
                  intelectual.
                </li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-primary-900 mb-6 border-b border-primary-200 pb-3">
                4. Utilização Aceitável do Website
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                O utilizador compromete-se a fazer uma utilização responsável e lícita do website,
                abstendo-se de:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 pl-4">
                <li>Praticar atos que violem direitos da CALE ou de terceiros;</li>
                <li>
                  Introduzir software malicioso, vírus ou qualquer código que possa comprometer a
                  segurança do website;
                </li>
                <li>Usar identidades falsas ou fornecer dados incorretos;</li>
                <li>Tentar aceder a áreas restritas ou manipular o conteúdo do site.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                A CALE reserva-se o direito de restringir o acesso a utilizadores que violem estes
                termos.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-primary-900 mb-6 border-b border-primary-200 pb-3">
                5. Exclusão de Responsabilidade
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Embora a CALE procure garantir a exatidão e atualização dos conteúdos, não garante
                que a informação disponível esteja sempre completa ou isenta de erros.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                A CALE não se responsabiliza por:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 pl-4">
                <li>
                  Danos causados por interrupções, falhas técnicas, vírus ou outros problemas
                  informáticos;
                </li>
                <li>Utilização indevida ou abusiva do website por parte de terceiros;</li>
                <li>Conteúdos ou serviços externos acessíveis através de links no website.</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-primary-900 mb-6 border-b border-primary-200 pb-3">
                6. Política de Privacidade
              </h2>
              <p className="text-gray-700 leading-relaxed">
                A recolha e tratamento de dados pessoais estão definidos na nossa Política de
                Privacidade, que pode ser consultada{" "}
                <Link
                  href="/politica-privacidade"
                  className="text-primary-600 hover:text-primary-700 transition-colors underline"
                >
                  aqui
                </Link>
                . A utilização do website implica a aceitação das práticas aí descritas.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-primary-900 mb-6 border-b border-primary-200 pb-3">
                7. Ligações a Sites Externos
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Este website pode conter hiperligações para websites de terceiros. Estes links são
                fornecidos apenas para conveniência do utilizador.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">A CALE não se responsabiliza:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 pl-4">
                <li>Pelo conteúdo ou políticas de privacidade desses websites;</li>
                <li>Pela veracidade ou qualidade da informação aí disponibilizada;</li>
                <li>Por qualquer dano resultante do uso desses sites externos.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Recomenda-se a leitura atenta dos termos e condições dos websites de destino.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-primary-900 mb-6 border-b border-primary-200 pb-3">
                8. Violação dos Termos
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Qualquer tentativa de violação destes Termos e Condições poderá resultar em
                suspensão do acesso ao website e, quando aplicável, em responsabilidade civil ou
                criminal.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-primary-900 mb-6 border-b border-primary-200 pb-3">
                9. Legislação Aplicável e Foro Competente
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Este website é regido pela legislação portuguesa. Em caso de litígio, as partes
                aceitam como competente o foro dos tribunais portugueses.
              </p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="text-center">
              <Link
                href="/"
                className="inline-flex items-center px-8 py-3 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-colors font-medium"
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
