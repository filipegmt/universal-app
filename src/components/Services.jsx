import React, { useState } from "react";
import { ChevronDown, Plus, Minus } from "lucide-react";

const Services = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const services = [
    // --- OS 3 PRINCIPAIS ---
    {
      title: "Funerais para Jazigos",
      desc: "Realização de cerimónias fúnebres com dignidade para deposição em jazigo de família ou municipal, tratando de toda a logística necessária.",
    },
    {
      title: "Funerais para Sepultura",
      desc: "Organização completa para inumação em terra, respeitando todas as tradições e garantindo um acompanhamento sereno à família.",
    },
    {
      title: "Funerais com Cremação",
      desc: "Serviço completo de cremação, dispondo de uma vasta gama de urnas adequadas e tratamento de todo o processo até à entrega das cinzas.",
    },
    // --- OS RESTANTES ---
    {
      title: "Funerais Internacionais",
      desc: "Especialistas em repatriamento. Tratamos de toda a burocracia consular e logística de transporte aéreo ou terrestre de e para o estrangeiro.",
    },
    {
      title: "Exumações",
      desc: "Acompanhamento técnico e legal em processos de exumação (levantamento das ossadas), com o máximo respeito e profissionalismo.",
    },
    {
      title: "Trasladações",
      desc: "Transporte de restos mortais entre cemitérios, concelhos ou distritos diferentes, assegurando o cumprimento de todas as normas legais.",
    },
    {
      title: "Tanatopraxia",
      desc: "Técnicas avançadas de conservação transitória para garantir a higienização e preservação digna durante o velório.",
    },
    {
      title: "Tanatoestética",
      desc: "Cuidados estéticos de preparação (maquilhagem e vestuário) para que a imagem do ente querido transmita paz na hora da despedida.",
    },
    {
      title: "Serviço de Florista",
      desc: "Criação própria de coroas, palmas, corações e arranjos florais personalizados com flores frescas para homenagens.",
    },
    {
      title: "Tratamento de Documentação",
      desc: "Apoio administrativo total: tratamos do subsídio de funeral, pensões de sobrevivência e reembolsos da Segurança Social e CGA.",
    },
    {
      title: "Anúncios de Necrologia",
      desc: "Gestão e publicação de avisos fúnebres e agradecimentos em jornais nacionais, locais ou plataformas digitais.",
    },
  ];

  const faqs = [
    {
      q: "O que é necessário fazer quando ocorre o óbito?",
      a: "Contacte-nos de imediato. A nossa equipa irá ao seu encontro (hospital, lar ou domicílio) e guiará todo o processo.",
    },
    {
      q: "Qual o custo de um funeral?",
      a: "Os custos variam consoante as opções escolhidas. Temos soluções dignas ajustadas a diferentes orçamentos. Peça um orçamento sem compromisso.",
    },
    {
      q: "Tratam do reembolso da Segurança Social?",
      a: "Sim. Ajudamos a preencher e entregar o requerimento de subsídio de funeral e pensão de sobrevivência.",
    },
  ];

  const visibleServices = showAll ? services : services.slice(0, 3);

  const handleToggle = () => {
    if (showAll) {
      // Se estamos a clicar para FECHAR ("Ver Menos"):
      setShowAll(false);
      // Rola suavemente para o topo da secção
      document
        .getElementById("servicos")
        .scrollIntoView({ behavior: "smooth" });
    } else {
      // Se estamos a ABRIR:
      setShowAll(true);
    }
  };

  return (
    <section id="servicos" className="py-24 px-4 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-5xl mb-16 text-center text-zinc-900">
          Os Nossos Serviços
        </h2>

        {/* Grid de Serviços */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {visibleServices.map((s, i) => (
            <div
              key={i}
              className="bg-dark p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 border-t-4 border-primary group animate-fade-in-up"
            >
              <div className="w-12 h-1 bg-white/20 mb-6 group-hover:bg-primary transition-colors"></div>

              <h3 className="font-serif text-2xl font-bold mb-4 text-white group-hover:text-primary transition-colors">
                {s.title}
              </h3>

              <p className="text-zinc-400 leading-relaxed text-sm">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* BOTÃO VER TODOS / VER MENOS */}
        <div className="text-center mb-24">
          <button
            onClick={handleToggle}
            className="inline-flex items-center gap-2 bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-full font-bold transition duration-300 shadow-sm uppercase tracking-wide text-sm"
          >
            {showAll ? (
              <>
                Ver Menos <Minus size={18} />
              </>
            ) : (
              <>
                Ver Todos os Serviços ({services.length}) <Plus size={18} />
              </>
            )}
          </button>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto bg-dark p-8 md:p-12 rounded-3xl shadow-lg border border-zinc-100">
          <h2 className="font-serif text-3xl mb-8 text-center text-white">
            Perguntas Frequentes
          </h2>
          <div className="space-y-2">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-zinc-100">
                <button
                  className="w-full flex justify-between items-center text-left py-4 font-medium text-zinc-400 hover:text-primary focus:outline-none"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  {faq.q}
                  <ChevronDown
                    className={`transition-transform duration-300 ${
                      openFaq === index
                        ? "rotate-180 text-primary"
                        : "text-zinc-400"
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === index ? "max-h-40 mb-4" : "max-h-0"
                  }`}
                >
                  <p className="text-zinc-500 text-sm leading-relaxed pr-4">
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
