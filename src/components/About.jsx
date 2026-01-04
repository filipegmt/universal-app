import React from "react";
import caixao from "../assets/caixao.jpeg";

const About = () => {
  return (
    <section id="sobre" className="py-12 md:py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block p-2 px-4 rounded-full bg-orange-50 text-primary text-xs font-bold tracking-widest uppercase mb-4">
              Sobre Nós
            </div>
            <h2 className="font-serif text-5xl mb-6">
              Uma história de confiança e respeito.
            </h2>
            <div className="space-y-6 text-zinc-600 text-lg leading-relaxed">
              <p>
                A <strong>Funerária Universal</strong> nasceu com a missão de
                trazer humanidade a um setor muitas vezes frio e impessoal.
              </p>
              <p>
                Entendemos que não estamos apenas a tratar de um serviço
                logístico, mas a lidar com a memória de uma vida e com a dor de
                uma família. Por isso, a nossa postura é pautada pela discrição,
                pela empatia e pelo profissionalismo absoluto.
              </p>
              <p>
                Disponíveis 24 horas por dia, 365 dias por ano, somos o ombro
                amigo e o parceiro eficiente nos momentos mais delicados.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-primary/10 rounded-3xl transform rotate-3"></div>
            <img
              src={caixao}
              alt="Equipa Universal"
              className="relative rounded-3xl shadow-xl w-full object-cover h-[500px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
