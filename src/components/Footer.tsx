"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Bottom Bar */}
        <div 
          className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
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
    </footer>
  );
}
