import React from "react";
import { Star } from "lucide-react";
import heroVid from "../assets/hero-vid.mp4";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative w-full h-screen min-h-[800px] flex flex-col overflow-hidden"
    >
      {/* 1. O VÍDEO DE FUNDO (Fica fixo atrás de tudo) */}
      <video
        src={heroVid}
        type="video/mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* 2. OVERLAY ESCURO (Um pouco mais forte agora: bg-black/60) */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* 3. CONTEÚDO PRINCIPAL (Ocupa a altura toda) */}
      <div className="relative z-20 w-full h-full flex flex-col justify-between pt-32 pb-8 max-w-7xl mx-auto">
        {/* PARTE A: O TEXTO HERO (Centrado verticalmente na parte de cima) */}
        <div className="flex-grow flex flex-col justify-center items-center text-center px-4 space-y-8 animate-fade-in-up">
          <h1 className="font-serif text-5xl md:text-7xl text-white leading-[1.1] drop-shadow-lg">
            Respire.
            <br />
            <span className="text-primary italic">Estamos consigo.</span>
          </h1>

          <p className="text-zinc-100 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto drop-shadow-md">
            Nos momentos em que as palavras faltam, a{" "}
            <strong>Funerária Universal</strong> cuida de tudo. Apoio total,
            dignidade e respeito em cada detalhe da despedida.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
            <a
              href="tel:+351936254506"
              className="bg-primary hover:bg-[#c29263] text-white px-8 py-4 rounded-full font-medium transition flex items-center justify-center gap-2 shadow-lg shadow-black/20"
            >
              Ligar Agora <span>→</span>
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 text-sm text-zinc-300">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Linha de apoio disponível 24H
          </div>
        </div>

        {/* PARTE B: AS REVIEWS (Agora no fundo do ecrã e com texto branco) */}
        <div
          className="mt-8 md:mt-0 text-center px-4 animate-fade-in-up"
          style={{ animationDelay: "200ms" }}
        >
          {/* Linha separadora subtil */}
          <div className="w-24 h-[1px] bg-white/30 mx-auto mb-6"></div>

          <h2 className="font-serif text-xl md:text-2xl italic mb-4 leading-relaxed text-white/90">
            "A Funerária Universal dedica-se à satisfação dos clientes tendo
            como excelência o serviço fúnebre."
          </h2>

          <div className="flex justify-center gap-1 text-primary drop-shadow-sm">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} fill="currentColor" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
