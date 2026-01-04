import React from "react";
import { Star, Quote, ChevronRight } from "lucide-react";

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
    {
      name: "João Miguel",
      date: "11/2024",
      text: "Um serviço impecável num momento de muita dor. Agradeço a sensibilidade com que trataram todo o processo burocrático, libertando-nos desse peso.",
    },
  ];

  const googleReviewLink =
    "https://www.google.com/search?hl=pt-PT&sxsrf=AE3TifMnYjdqnpLf_kmJ6uap7u0Fx9BmYg:1767542760960&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E202kIJ1PUF4KgxTxFTcX5XjhF-ug_QUmDPvnnQ2KW_ymWwHbk0wXvYtjEA5HsYq_vzFwNfjvMcdtqTMiKrfrZn8LtquYKvNyKsrzkyDnM2cgqVCvQ%3D%3D&q=Funer%C3%A1ria+Universal+Cr%C3%ADticas";

  return (
    <section
      id="testemunhos"
      className="py-12 md:py-24 bg-gradient-to-b from-white to-zinc-50 border-b border-zinc-200 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <div className="inline-block p-2 px-4 rounded-full bg-orange-50 text-primary text-xs font-bold tracking-widest uppercase mb-4">
            A Confiança das Famílias
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-zinc-900 mb-6">
            Testemunhos
          </h2>
          <div className="flex justify-center gap-1 text-primary mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                fill="currentColor"
                size={24}
                className="drop-shadow-sm"
              />
            ))}
          </div>
        </div>

        {/* CONTAINER DE SCROLL HORIZONTAL */}
        <div className="relative">
          {/* Efeito de fade nas laterais para indicar scroll */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none md:hidden"></div>
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none md:hidden"></div>

          <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-12 px-4 scrollbar-hide pt-4">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="
                  flex-shrink-0 w-[85vw] md:w-[400px] snap-center
                  bg-white p-8 rounded-2xl shadow-md border-t-4 border-primary
                  hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 
                  transition-all duration-500 ease-out
                  flex flex-col relative group overflow-hidden
                "
              >
                {/* Aspas Decorativas Gigantes */}
                <div className="absolute -top-4 -right-4 text-zinc-100 group-hover:text-primary/10 transition-colors duration-500 transform group-hover:scale-110 group-hover:rotate-12">
                  <Quote size={120} className="fill-current" />
                </div>

                <div className="relative z-10">
                  <div className="mb-4 text-primary">
                    <Quote
                      size={24}
                      className="fill-current transform rotate-180"
                    />
                  </div>
                  <p className="text-zinc-600 italic leading-relaxed mb-6 min-h-[120px]">
                    "{item.text}"
                  </p>
                </div>

                <div className="mt-auto flex items-center gap-4 border-t border-zinc-100 pt-6 relative z-10">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-primary font-serif font-bold">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-serif font-bold text-zinc-900 group-hover:text-primary transition-colors">
                      {item.name}
                    </p>
                    <p className="text-xs text-zinc-400 font-medium">
                      {item.date}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            <a
              href={googleReviewLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 w-[85vw] md:w-[300px] snap-center flex flex-col items-center justify-center bg-white rounded-2xl border-2 border-dashed border-primary/30 p-8 text-center hover:bg-orange-50 transition cursor-pointer group"
            >
              <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center shadow-sm mb-4 group-hover:scale-110 transition-transform text-primary group-hover:bg-white">
                <Star size={24} fill="currentColor" />
              </div>
              <p className="text-zinc-700 font-medium mb-2">
                A sua opinião conta
              </p>
              <span className="text-primary text-sm font-bold underline decoration-primary/30 underline-offset-4">
                Deixe o seu testemunho no Google
              </span>
            </a>
          </div>

          {/* Dica visual de scroll (apenas mobile/tablet) */}
          <div className="flex justify-center items-center gap-2 text-primary/60 text-xs mt-[-1rem] md:hidden animate-pulse font-medium">
            <span>Deslize</span>
            <ChevronRight size={14} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
