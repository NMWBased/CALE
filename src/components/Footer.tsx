import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-primary-600 to-primary-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">CALE</h3>
                <p className="text-sm text-gray-400 -mt-1">arquitetura</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Atelier de arquitetura focado em criar espaços com funcionalidade, alma e conforto.
              Cada projeto é único e pensado à sua medida.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-semibold mb-4">Navegação</h4>
            <nav className="space-y-2">
              <Link
                href="#inicio"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Início
              </Link>
              <Link
                href="#sobre"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Sobre
              </Link>
              <Link
                href="#servicos"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Serviços
              </Link>
              <Link
                href="#portfolio"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Portfólio
              </Link>
              <Link
                href="#contato"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Contato
              </Link>
            </nav>
          </div>

          {/* Contact Info & Social Media */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <div className="space-y-2 text-gray-400 mb-6">
              <p>
                <a
                  href="mailto:geral@cale-arquitetura.com"
                  className="hover:text-white transition-colors"
                >
                  geral@cale-arquitetura.com
                </a>
              </p>
              <p>
                <a href="tel:+351963870706" className="hover:text-white transition-colors">
                  +351 963 870 706
                </a>
              </p>
              <p>
                <a
                  href="https://wa.me/351963870706?text=Olá,%20estou%20interessado(a)%20num%20projecto%20de%20arquitectura.%20Como%20podemos%20começar%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp
                </a>
              </p>
            </div>

            <h5 className="font-medium mb-3 text-sm">Siga-nos</h5>
            <div className="flex space-x-3">
              <a
                href="https://www.instagram.com/cale.arquitetura/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <title>Instagram</title>
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://pt.pinterest.com/calearquitetura/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
                aria-label="Pinterest"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <title>Pinterest</title>
                  <path d="M12 0C5.373 0 0 5.372 0 12s5.373 12 12 12c6.628 0 12-5.372 12-12S18.628 0 12 0zm0 19c-.721 0-1.418-.109-2.073-.312.286-.465.713-1.227.87-1.835l.437-1.664c.229.436.895.818 1.604.818 2.111 0 3.633-1.941 3.633-4.354 0-2.312-1.888-4.042-4.181-4.042-2.991 0-4.677 2.054-4.677 4.31 0 1.061.568 2.394 1.482 2.816.149.07.229.039.265-.107l.222-.895c.038-.142.023-.189-.085-.312-.24-.271-.394-.709-.394-1.271 0-1.597 1.159-3.136 3.137-3.136 1.705 0 2.888 1.17 2.888 2.834 0 1.944-.858 3.288-1.958 3.288-.598 0-1.051-.501-.906-1.115.174-.735.511-1.529.511-2.058 0-.475-.254-.872-.781-.872-.619 0-1.117.642-1.117 1.501 0 .549.186.92.186.92s-.638 2.697-.749 3.181c-.221.948-.033 2.108-.017 2.226.009.07.099.087.14.034.058-.075.809-1.001 1.085-1.921l.391-1.519c.219.417.86.786 1.541.786 2.026 0 3.476-1.834 3.476-4.176C16.677 8.083 14.758 6.5 12.309 6.5c-2.98 0-5.309 2.109-5.309 5.245 0 1.448.549 2.734 1.729 3.205.192.077.292.042.337-.118l.18-.696c.058-.228.035-.299-.113-.492C8.611 13.266 8.26 12.46 8.26 11.585c0-2.24 1.692-4.585 4.582-4.585 2.418 0 4.089 1.589 4.089 3.865 0 2.49-1.146 4.196-2.343 4.196-.706 0-1.231-.58-1.065-1.295.2-.855.587-1.778.587-2.394 0-.552-.297-1.012-.913-1.012-.724 0-1.306.748-1.306 1.751 0 .638.217 1.07.217 1.07s-.744 3.16-.873 3.71c-.129.55-.129 1.3-.085 1.768C9.384 18.795 10.632 19 12 19c6.628 0 12-5.372 12-12S18.628 0 12 0z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/calearquitetura"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <title>Facebook</title>
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} CALE Arquitetura. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link
                href="/politica-privacidade"
                className="text-gray-500 hover:text-white transition-colors"
              >
                Política de Privacidade
              </Link>
              <Link
                href="/termos-condicoes"
                className="text-gray-500 hover:text-white transition-colors"
              >
                Termos e Condições
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
