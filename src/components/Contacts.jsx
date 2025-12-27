import React from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

const Contacts = () => {
  return (
    <section id="contactos" className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl mb-6 text-zinc-900">
            Contacte-nos
          </h2>
          <p className="text-zinc-600 max-w-2xl mx-auto text-lg">
            Estamos disponíveis 24 horas por dia, todos os dias do ano.
            <br />
            Não hesite em ligar, seja para uma urgência ou para um pedido de
            informação.
          </p>
        </div>

        {/* 3 CARTÕES DE DESTAQUE */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Telefone */}
          <div className="bg-dark p-8 rounded-3xl shadow-sm border border-zinc-100 text-center hover:-translate-y-1 transition duration-300">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-6">
              <Phone size={32} />
            </div>
            <h3 className="font-serif text-2xl text-white font-bold mb-2">
              Ligue-nos (24h)
            </h3>
            <p className="text-zinc-400 mb-4 text-sm">
              Apoio permanente e imediato
            </p>
            <a
              href="tel:+351936254506"
              className="text-2xl font-bold text-white hover:text-primary transition block"
            >
              936 254 506
            </a>
            <a
              href="tel:212227713"
              className="text-2xl font-bold text-white hover:text-primary transition block"
            >
              212 227 713
            </a>
            <span className="text-xs text-zinc-400">
              Chamada rede móvel nacional
            </span>
          </div>

          {/* Email */}
          <div className="bg-dark p-8 rounded-3xl shadow-sm border border-zinc-100 text-center hover:-translate-y-1 transition duration-300">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-6">
              <Mail size={32} />
            </div>
            <h3 className="font-serif text-2xl text-white font-bold mb-2">
              Email
            </h3>
            <p className="text-zinc-400 mb-4 text-sm">
              Para orçamentos ou dúvidas
            </p>
            <a
              href="mailto:funerariauniversal@gmail.com"
              className="text-lg font-bold text-white hover:text-primary transition block break-words"
            >
              funerariauniversal@gmail.com
            </a>
          </div>

          {/* Morada */}
          <div className="bg-dark p-8 rounded-3xl shadow-sm border border-zinc-100 text-center hover:-translate-y-1 transition duration-300">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-6">
              <MapPin size={32} />
            </div>
            <h3 className="font-serif text-2xl text-white font-bold mb-2">
              Sede
            </h3>
            <p className="text-zinc-400 mb-4 text-sm">
              Visite-nos presencialmente
            </p>
            <p className="text-lg font-bold text-white">
              Av. da Républica Nª93
              <br />
              Arrentela, Seixal
            </p>
          </div>
        </div>

        {/* MAPA LARGO */}
        <div className="bg-dark p-4 rounded-3xl shadow-lg">
          <div className="rounded-2xl overflow-hidden h-[450px] bg-zinc-200 relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3116.643326759756!2d-9.1044445!3d38.6341667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd193bd1da65e6d1%3A0x500ebbde49036d0!2sAv.%20da%20Rep%C3%BAblica%2093%2C%202840-741%20Arrentela!5e0!3m2!1spt-PT!2spt!4v1703080000000!5m2!1spt-PT!2spt"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Mapa da Agência"
              className="transition duration-500"
            ></iframe>

            {/* Aviso Flutuante */}
            <div className="absolute bottom-6 left-6 bg-white py-3 px-6 rounded-full shadow-lg flex items-center gap-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="font-bold text-sm text-zinc-800">
                Aberto Agora
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
