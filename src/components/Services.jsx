import React, { useState } from "react";
import {
  ChevronDown,
  Plus,
  Minus,
  ArrowRight,
  Flower,
  Cross,
  Globe,
  FileText,
  User,
} from "lucide-react";

const getIcon = (title) => {
  if (title.includes("Cremação")) return <User size={24} />;
  if (title.includes("Florista")) return <Flower size={24} />;
  if (title.includes("Internacionais")) return <Globe size={24} />;
  if (title.includes("Documentação")) return <FileText size={24} />;
  return <Cross size={24} />;
};

const Services = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const services = [
    {
      title: "Funerais para Jazigos",
      desc: "Realização de cerimónias fúnebres com dignidade para deposição em jazigo de família ou municipal.",
    },
    {
      title: "Funerais para Sepultura",
      desc: "Organização completa para inumação em terra, respeitando todas as tradições e garantindo serenidade.",
    },
    {
      title: "Funerais com Cremação",
      desc: "Serviço completo de cremação, dispondo de uma vasta gama de urnas e tratamento de todo o processo.",
    },
    {
      title: "Funerais Internacionais",
      desc: "Especialistas em repatriamento. Tratamos de toda a burocracia consular e logística de transporte.",
    },
    {
      title: "Exumações",
      desc: "Acompanhamento técnico e legal em processos de exumação, com o máximo respeito e profissionalismo.",
    },
    {
      title: "Trasladações",
      desc: "Transporte de restos mortais entre cemitérios ou distritos, assegurando o cumprimento das normas legais.",
    },
    {
      title: "Tanatopraxia",
      desc: "Técnicas avançadas de conservação transitória para garantir a preservação digna durante o velório.",
    },
    {
      title: "Tanatoestética",
      desc: "Cuidados estéticos de preparação (maquilhagem e vestuário) para uma imagem de paz.",
    },
    {
      title: "Serviço de Florista",
      desc: "Criação própria de coroas, palmas e arranjos florais personalizados com flores frescas.",
    },
    {
      title: "Tratamento de Documentação",
      desc: "Apoio administrativo total: subsídio de funeral, pensões de sobrevivência e segurança social.",
    },
    {
      title: "Anúncios de Necrologia",
      desc: "Gestão e publicação de avisos fúnebres e agradecimentos em jornais ou plataformas digitais.",
    },
  ];

  const faqs = [
    {
      q: "O que é necessário fazer quando ocorre o óbito?",
      a: "Contacte-nos de imediato. A nossa equipa irá ao seu encontro e guiará todo o processo.",
    },
    {
      q: "Qual o custo de um funeral?",
      a: "Os custos variam consoante as opções. Temos soluções dignas para diferentes orçamentos.",
    },
    {
      q: "Tratam do reembolso da Segurança Social?",
      a: "Sim. Ajudamos a preencher e entregar todos os requerimentos necessários.",
    },
  ];

  const visibleServices = showAll ? services : services.slice(0, 3);

  const handleToggle = () => {
    if (showAll) {
      setShowAll(false);
      document
        .getElementById("servicos")
        .scrollIntoView({ behavior: "smooth" });
    } else {
      setShowAll(true);
    }
  };

  return (
    <section
      id="servicos"
      className="py-12 md:py-20 px-4 bg-zinc-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block p-2 px-4 rounded-full bg-orange-50 text-primary text-xs font-bold tracking-widest uppercase mb-4">
            O que fazemos
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-zinc-900">
            Os Nossos Serviços
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-6 rounded-full opacity-60"></div>
        </div>

        {/* Grid de Serviços */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {visibleServices.map((s, i) => (
            <div
              key={i}
              className={`
                group relative p-8 rounded-2xl 
                bg-gradient-to-br from-white to-orange-50/40
                border border-primary/10 hover:border-primary/40
                shadow-sm hover:shadow-xl hover:shadow-primary/5
                transition-all duration-500 ease-out
                hover:-translate-y-2 overflow-hidden
                animate-fade-in-up
              `}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* DETALHE DOURADO PERMANENTE (Canto Superior) */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full transition-all duration-500 group-hover:scale-110 group-hover:from-primary/20"></div>

              {/* Ícone com fundo colorido sempre visível */}
              <div className="relative z-10 w-14 h-14 rounded-xl bg-orange-100/50 text-primary flex items-center justify-center mb-6 border border-primary/10 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-md group-hover:rotate-3">
                {getIcon(s.title)}
              </div>

              <h3 className="relative z-10 font-serif text-2xl font-bold mb-3 text-zinc-800 group-hover:text-primary transition-colors">
                {s.title}
              </h3>

              <p className="relative z-10 text-zinc-600 leading-relaxed text-sm mb-6">
                {s.desc}
              </p>

              {/* Borda inferior dourada que cresce */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary/10 via-primary/40 to-primary/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out"></div>
            </div>
          ))}
        </div>

        {/* Botão Ver Todos */}
        <div className="text-center mb-24 animate-fade-in-up delay-300">
          <button
            onClick={handleToggle}
            className="group relative inline-flex items-center gap-3 bg-white text-zinc-800 px-8 py-3 rounded-full font-bold transition-all duration-300 border border-zinc-200 hover:border-primary/50 shadow-lg hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
            <span className="relative z-10 uppercase tracking-wide text-sm flex items-center gap-2">
              {showAll ? (
                <>
                  Ver Menos <Minus size={18} className="text-primary" />
                </>
              ) : (
                <>
                  Ver Todos os Serviços{" "}
                  <Plus size={18} className="text-primary" />
                </>
              )}
            </span>
          </button>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto animate-fade-in-up delay-300">
          <h2 className="font-serif text-3xl mb-8 text-center text-zinc-800">
            Perguntas Frequentes
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl border transition-all duration-300 ${
                  openFaq === index
                    ? "border-primary shadow-lg shadow-primary/5"
                    : "border-zinc-200/60 shadow-sm hover:border-primary/30"
                }`}
              >
                <button
                  className="w-full flex justify-between items-center text-left p-6 font-bold text-zinc-700 hover:text-primary focus:outline-none transition-colors"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  {faq.q}
                  <div
                    className={`p-2 rounded-full transition-colors duration-300 ${
                      openFaq === index
                        ? "bg-primary text-white"
                        : "bg-orange-50 text-primary"
                    }`}
                  >
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 ${
                        openFaq === index ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openFaq === index
                      ? "max-h-40 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-zinc-500 leading-relaxed px-6 pb-6 pt-0">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
