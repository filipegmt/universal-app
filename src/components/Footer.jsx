import React from "react";
import { Facebook, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-16 pb-8 text-sm border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-12 mb-12">
        {/* Coluna 1 */}
        <div className="md:col-span-1 space-y-4">
          <span className="font-serif text-2xl font-bold tracking-tighter block">
            Funerária Universal<span className="text-primary">.</span>
          </span>
          <p className="text-zinc-400">
            Honrar memórias, celebrar vidas e apoiar famílias com dignidade e
            respeito.
          </p>

          <div className="flex gap-4 pt-2">
            <a
              href="https://www.facebook.com/p/Funeraria-universal-100057293866359/?locale=pt_PT"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition flex items-center gap-2"
              aria-label="Visitar Facebook"
            >
              <Facebook size={24} />
              <span className="text-xs font-medium">Siga-nos no Facebook</span>
            </a>
          </div>
        </div>

        <div className="md:col-span-1"></div>

        {/* Coluna 2 e 3 */}
        <div className="md:col-span-2 grid grid-cols-2 gap-8">
          <div>
            <h4 className="font-bold text-lg mb-4 text-primary">Navegação</h4>
            <ul className="space-y-3 text-zinc-400">
              <li>
                <a href="#sobre" className="hover:text-white transition">
                  Quem Somos
                </a>
              </li>
              <li>
                <a href="#galeria" className="hover:text-white transition">
                  Galeria e Instalações
                </a>
              </li>
              <li>
                <a href="#testemunhos" className="hover:text-white transition">
                  Testemunhos
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-white transition">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#contactos" className="hover:text-white transition">
                  Contactos
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4 text-primary">Contactos</h4>
            <ul className="space-y-3 text-zinc-400">
              <li className="flex items-center gap-2">
                <Phone size={16} className="flex-shrink-0 text-primary" />
                <span>+351 936 254 506</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="flex-shrink-0 text-primary" />
                <span>212 227 713</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="flex-shrink-0 text-primary mt-1" />
                <span className="break-all">funerariauniversal@gmail.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="flex-shrink-0 text-primary mt-1" />
                <span>Seixal, Portugal</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 border-t border-zinc-800 pt-8 text-zinc-500 text-xs text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
        <p>©2025 Funerária Universal. Todos os direitos reservados.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white">
            Termos e Condições
          </a>
          <a href="#" className="hover:text-white">
            Política de Privacidade
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
