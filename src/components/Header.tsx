"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Home, User, Hammer, Image as ImageIcon, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollToSection } = useSmoothScroll();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
  { href: "inicio", label: "Início", icon: Home },
  { href: "sobre", label: "Sobre", icon: User },
  { href: "servicos", label: "Serviços", icon: Hammer },
  { href: "portfolio", label: "Portfólio", icon: ImageIcon },
  { href: "contacto", label: "Contacto", icon: Mail },
  ];

  const handleNavClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    e.stopPropagation();
    setIsMenuOpen(false);
    setTimeout(() => {
      scrollToSection(sectionId);
    }, 300);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow" : "bg-white/70 backdrop-blur"
      }`}
    >
  <nav className="container mx-auto px-4 py-0">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div>
            <Link href="/" className="flex items-center space-x-3 group">
              <Image
                src="/images/imgi_14_CAROL_CALE-03.png"
                alt="CALE Arquitetura"
                width={112}
                height={112}
                className="w-24 h-24 md:w-28 md:h-28 object-contain transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                type="button"
                onClick={(e) => handleNavClick(e, item.href)}
                className="relative px-4 py-2 text-lg font-semibold text-gray-700 hover:text-amber-700 transition-colors duration-500 cursor-pointer group"
              >
                {item.label}
                <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-amber-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-in-out origin-left"></span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 text-gray-700 hover:text-primary-600 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Abrir menu"
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden mt-4 pb-4 border-t border-gray-200 overflow-hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="flex flex-col space-y-3 pt-4 px-2"
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.1,
                    },
                  },
                }}
                initial="hidden"
                animate="visible"
              >
                {navItems.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.button
                      key={item.href}
                      type="button"
                      onClick={(e) => handleNavClick(e, item.href)}
                      variants={{
                        hidden: { opacity: 0, x: -10 },
                        visible: { opacity: 1, x: 0 },
                      }}
                      className="text-gray-700 hover:text-primary-600 transition-colors duration-200 font-medium py-2 w-full text-left flex items-center gap-3"
                    >
                      <IconComponent size={20} className="text-amber-600 flex-shrink-0" />
                      <span className="flex-1">{item.label}</span>
                    </motion.button>
                  );
                })}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
