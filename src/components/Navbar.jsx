import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logoUniversal from "../assets/logo-universal.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-dark/95 backdrop-blur-md z-50 shadow-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* LOGO */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="flex items-center gap-3 group">
              <img
                src={logoUniversal}
                alt="Logo Universal"
                className="h-20 w-auto object-contain"
              />
              <span className="font-serif text-xl md:text-2xl font-bold tracking-tighter text-white group-hover:text-primary transition">
                Funerária Universal<span className="text-primary">.</span>
              </span>
            </a>
          </div>

          {/* MENU DESKTOP */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8 text-sm font-medium tracking-wide text-zinc-300">
            <a
              href="#sobre"
              className="hover:text-primary transition font-semibold"
            >
              Sobre Nós
            </a>

            <a
              href="#galeria"
              className="hover:text-primary transition font-semibold"
            >
              Galeria
            </a>

            <a
              href="#testemunhos"
              className="hover:text-primary transition font-semibold"
            >
              Testemunhos
            </a>

            <a
              href="#servicos"
              className="hover:text-primary transition font-semibold"
            >
              Serviços
            </a>

            <a
              href="#contactos"
              className="bg-primary text-white px-5 py-2 rounded-full hover:bg-white hover:text-dark transition duration-300 font-bold shadow-lg shadow-primary/20"
            >
              Contactos e Localização
            </a>
          </div>

          {/* BOTÃO MOBILE */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2 hover:text-primary transition"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* MENU MOBILE */}
      {isMenuOpen && (
        <div className="md:hidden bg-dark border-t border-white/10 p-6 flex flex-col space-y-6 text-center text-lg shadow-xl text-white">
          <a
            href="#sobre"
            onClick={() => setIsMenuOpen(false)}
            className="hover:text-primary"
          >
            Sobre Nós
          </a>
          <a
            href="#galeria"
            onClick={() => setIsMenuOpen(false)}
            className="hover:text-primary"
          >
            Galeria
          </a>
          {/* Link NOVO Mobile */}
          <a
            href="#testemunhos"
            onClick={() => setIsMenuOpen(false)}
            className="hover:text-primary"
          >
            Testemunhos
          </a>
          <a
            href="#servicos"
            onClick={() => setIsMenuOpen(false)}
            className="hover:text-primary"
          >
            Serviços
          </a>
          <a
            href="#contactos"
            onClick={() => setIsMenuOpen(false)}
            className="hover:text-primary font-bold text-primary"
          >
            Contactos e Localização
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
