import React from "react";

const metrics = [
  {
    title: "Condomínios atendidos",
    description: "Nos tornamos referência em administração condominial eficiente.",
    value: "278+",
  },
  {
    title: "Colaboradores qualificados",
    description: "Equipe especializada pronta para atender todas as demandas.",
    value: "426+",
  },
  {
    title: "Prêmios e reconhecimentos",
    description: "Excelência reconhecida no setor de administração.",
    value: "25+",
  },
  {
    title: "Índice de satisfação",
    description: "Aprovação dos nossos clientes e síndicos parceiros.",
    value: "99%",
  },
];

export default function MetricsSection() {
  return (
    <section className="bg-[#1F1F2B] text-white py-20 relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16">
          Confiança construída com resultados
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className={`px-6 py-8 bg-[#2C2C3A] rounded-2xl shadow-md transition-all duration-300 hover:scale-[1.03]
                ${index === 1 ? "mt-8" : index === 2 ? "mt-16" : index === 3 ? "mt-24" : ""}
              `}
            >
              <h3 className="text-lg font-semibold mb-2">{metric.title}</h3>
              <p className="text-sm text-white/70 mb-4">{metric.description}</p>
              <span className="text-4xl font-bold text-white">{metric.value}</span>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <button className="border border-white rounded-full px-6 py-2 text-sm font-medium hover:bg-white hover:text-[#1F1F2B] transition-all duration-300">
            Conheça nossa história
          </button>
        </div>
      </div>
    </section>
  );
}
