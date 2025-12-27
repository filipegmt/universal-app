import React from "react";
import edificio from "../assets/edificio.jpg";
import escritorio from "../assets/escritorio.jpg";
import carrinha from "../assets/carrinha.jpg";

const Gallery = () => {
  const images = [
    {
      url: edificio,
      caption: "Edifício",
    },
    {
      url: escritorio,
      caption: "Estabelecimento",
    },
    {
      url: carrinha,
      caption: "Veículos Funerários",
    },
  ];

  return (
    <section
      id="galeria"
      className="py-12 md:py-20 bg-white border-b border-zinc-100"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-widest uppercase text-xs mb-2 block">
            A Nossa Estrutura
          </span>
          <h2 className="font-serif text-4xl md:text-5xl mb-6 text-zinc-900">
            Dignidade em cada detalhe
          </h2>
          <p className="text-zinc-600 max-w-2xl mx-auto">
            Dispomos de uma frota moderna e instalações preparadas para
            proporcionar todo o conforto e serenidade que a sua família merece
            neste momento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {images.map((img, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl aspect-[4/5] md:aspect-square shadow-md"
            >
              {/* Imagem com efeito de zoom suave */}
              <img
                src={img.url}
                alt={img.caption}
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
              />

              {/* Overlay Escuro no Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>

              {/* Texto */}
              <div className="absolute bottom-0 left-0 p-6 text-white translate-y-2 group-hover:translate-y-0 transition duration-300">
                <p className="font-serif text-xl font-bold">{img.caption}</p>
                <div className="w-10 h-1 bg-primary mt-2 opacity-0 group-hover:opacity-100 transition duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
