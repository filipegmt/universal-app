import React from "react";
import { Star } from "lucide-react";
import funerariaUniversal from "../assets/funeraria-universal.jpg";

const Hero = () => {
  return (
    <>
      <section
        id="inicio"
        className="pt-32 pb-8 px-4 md:px-8 max-w-7xl mx-auto min-h-[85vh] flex items-center"
      >
        <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-16 w-full">
          <div className="md:w-1/2 space-y-6 md:space-y-8 animate-fade-in-up">
            <h1 className="font-serif text-4xl md:text-7xl text-zinc-900 leading-[1.1]">
              Respire.
              <br />
              <span className="text-primary italic">Estamos consigo.</span>
            </h1>

            <p className="text-zinc-600 text-base md:text-lg leading-relaxed max-w-lg">
              Nos momentos em que as palavras faltam, a{" "}
              <strong>Funerária Universal</strong> cuida de tudo. Apoio total,
              dignidade e respeito em cada detalhe da despedida.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              {/* Botão corrigido para <a> */}
              <a
                href="tel:+351936254506"
                className="bg-primary hover:bg-[#c29263] text-white px-8 py-4 rounded-full font-medium transition flex items-center justify-center gap-2 shadow-lg shadow-orange-100"
              >
                Falar Connosco <span>→</span>
              </a>
            </div>

            <div className="flex items-center gap-2 text-sm text-zinc-500">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Linha de apoio disponível 24H
            </div>
          </div>

          <div className="md:w-1/2 relative w-full">
            <img
              src={funerariaUniversal}
              alt="Paz e Conforto"
              className="w-full h-64 md:h-[600px] object-cover object-[50%_75%] md:object-bottom rounded-[2rem] shadow-2xl transition duration-1000"
            />
          </div>
        </div>
      </section>

      <section className="bg-secondary py-10 md:py-15 border-b border-zinc-200">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="font-serif text-2xl md:text-3xl italic mb-6 leading-relaxed">
            "A Funerária Universal dedica-se à satisfação dos clientes tendo
            como excelência o serviço fúnebre."
          </h2>
        </div>
      </section>
    </>
  );
};

export default Hero;
