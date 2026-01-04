import React from "react";
import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";

const Contacts = () => {
  return (
    <section
      id="contactos"
      className="py-12 md:py-24 bg-zinc-50 relative overflow-hidden"
    >
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl mb-6 text-zinc-900">
            Contacte-nos
          </h2>
          <p className="text-zinc-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Estamos disponíveis{" "}
            <span className="text-primary font-bold">24 horas por dia</span>,
            todos os dias do ano.
            <br />
            Não hesite em ligar, estamos aqui para ajudar.
          </p>
        </div>

        {/* 3 CARTÕES DE DESTAQUE */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Telefone */}
          <div className="group bg-white p-10 rounded-3xl shadow-sm hover:shadow-2xl hover:shadow-primary/10 border border-zinc-100 hover:border-primary/50 text-center transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

            <div className="w-20 h-20 bg-orange-50 rounded-2xl flex items-center justify-center text-primary mx-auto mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-inner">
              <Phone size={36} />
            </div>

            <h3 className="font-serif text-2xl text-zinc-800 font-bold mb-2">
              Ligue-nos (24h)
            </h3>
            <p className="text-zinc-500 mb-6 text-sm">
              Apoio permanente e imediato
            </p>

            <div className="space-y-2">
              <a
                href="tel:+351936254506"
                className="block text-2xl font-bold text-zinc-800 hover:text-primary transition-colors duration-300"
              >
                936 254 506
              </a>
              <a
                href="tel:212227713"
                className="block text-2xl font-bold text-zinc-800 hover:text-primary transition-colors duration-300"
              >
                212 227 713
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="group bg-white p-10 rounded-3xl shadow-sm hover:shadow-2xl hover:shadow-primary/10 border border-zinc-100 hover:border-primary/50 text-center transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

            <div className="w-20 h-20 bg-orange-50 rounded-2xl flex items-center justify-center text-primary mx-auto mb-8 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300 shadow-inner">
              <Mail size={36} />
            </div>

            <h3 className="font-serif text-2xl text-zinc-800 font-bold mb-2">
              Email
            </h3>
            <p className="text-zinc-500 mb-6 text-sm">
              Para orçamentos ou dúvidas
            </p>

            <a
              href="mailto:funerariauniversal@gmail.com"
              className="inline-flex items-center gap-2 text-xl font-bold text-zinc-800 hover:text-primary transition-colors duration-300 border-b-2 border-transparent hover:border-primary pb-1"
            >
              funerariauniversal@gmail.com
            </a>
          </div>

          {/* Morada */}
          <div className="group bg-white p-10 rounded-3xl shadow-sm hover:shadow-2xl hover:shadow-primary/10 border border-zinc-100 hover:border-primary/50 text-center transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

            <div className="w-20 h-20 bg-orange-50 rounded-2xl flex items-center justify-center text-primary mx-auto mb-8 group-hover:scale-110 transition-all duration-300 shadow-inner">
              <MapPin size={36} />
            </div>

            <h3 className="font-serif text-2xl text-zinc-800 font-bold mb-2">
              Sede
            </h3>
            <p className="text-zinc-500 mb-6 text-sm">
              Visite-nos presencialmente
            </p>

            <p className="text-lg font-bold text-zinc-900 leading-relaxed">
              Av. da República Nº93
              <br />
              <span className="font-bold text-zinc-900">Arrentela, Seixal</span>
            </p>

            <a
              href="https://www.google.com/maps/place/Funer%C3%A1ria+Universal/@38.6257063,-9.1047507,17z/data=!3m1!4b1!4m6!3m5!1s0xd194a03afec0d0f:0x58ece77286fa2f65!8m2!3d38.6257063!4d-9.1047507!16s%2Fg%2F11fxdxgsrh?hl=pt-PT&entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-xs font-bold text-primary mt-4 uppercase tracking-wider hover:underline"
            >
              Ver no mapa <ExternalLink size={12} />
            </a>
          </div>
        </div>

        <div className="bg-white p-3 rounded-[2rem] shadow-2xl shadow-zinc-200 border border-primary/10 relative animate-fade-in-up delay-300">
          <div className="rounded-[1.5rem] overflow-hidden h-[450px] bg-zinc-200 relative z-10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3117.007596519505!2d-9.1047507!3d38.6257063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd194a03afec0d0f%3A0x58ece77286fa2f65!2sFuner%C3%A1ria%20Universal!5e0!3m2!1spt-PT!2spt!4v1767543840563!5m2!1spt-PT!2spt"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa da Agência"
              className="transition duration-1000"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
