import React from "react";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Antónia Santos",
      date: "02/2023",
      text: "Quero agradecer à Funerária Universal pelo profissionalismo que teve perante o funeral do meu pai, que mesmo numa altura extremamente difícil para mim foram atenciosos comigo e profissionais. Certamente que será uma funerária de referência.",
    },
    {
      name: "Carlos Ferreira",
      date: "01/2023",
      text: "O funeral dos meus pais foi sempre algo que me preocupou e foi isso que me levou à Funerária Universal. Todos os funcionários foram extremamente profissionais, acessíveis e atenciosos comigo. Muito obrigado a toda a equipa de excelentes profissionais.",
    },
    {
      name: "Ana Paula Silva",
      date: "03/2022",
      text: "Venho agradecer o serviço de excelência. Infelizmente já recorri a este tipo de serviço, mas conforta-me saber que posso contar com vocês, pois ajudam-me nos momentos mais complicados. Obrigada!",
    },
  ];

  return (
    <section
      id="testemunhos"
      className="py-12 md:py-20 bg-zinc-50 border-b border-zinc-200"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Cabeçalho da Secção */}
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-widest uppercase text-xs mb-2 block">
            A Confiança das Famílias
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-zinc-900 mb-6">
            Testemunhos
          </h2>
          <div className="flex justify-center gap-1 text-primary mb-4">
            <Star fill="currentColor" size={24} />
            <Star fill="currentColor" size={24} />
            <Star fill="currentColor" size={24} />
            <Star fill="currentColor" size={24} />
            <Star fill="currentColor" size={24} />
          </div>
          <p className="text-zinc-600 max-w-2xl mx-auto">
            A nossa maior recompensa é o reconhecimento das famílias que
            apoiamos nos momentos mais difíceis.
          </p>
        </div>

        {/* Grelha de Testemunhos */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              // MUDANÇAS AQUI:
              // 1. animate-fade-in-up: Para aparecer suavemente
              // 2. hover:-translate-y-1: Para subir um bocadinho ao passar o rato
              // 3. border-white/10: A borda fica mais subtil no fundo escuro
              // 4. hover:border-primary: A borda fica dourada ao passar o rato
              className="bg-dark p-8 rounded-2xl shadow-sm border border-white/10 hover:border-primary hover:-translate-y-1 hover:shadow-xl transition duration-300 flex flex-col h-full animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Ícone de Citação */}
              <div className="mb-6 text-primary/20">
                <Quote size={48} className="fill-current" />
              </div>

              {/* Texto */}
              <p className="text-zinc-400 italic leading-relaxed mb-6 flex-grow">
                "{item.text}"
              </p>

              {/* Autor e Data */}
              <div className="mt-auto border-t border-white/10 pt-4">
                <p className="font-serif font-bold text-zinc-300">
                  {item.name}
                </p>
                <p className="text-xs text-zinc-500 mt-1">{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
