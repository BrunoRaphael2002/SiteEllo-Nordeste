// src/components/MetricsSection.jsx
import React from "react";
import { motion } from "framer-motion";

const metrics = [
  {
    title: "Condomínios atendidos",
    description:
      "Nos tornamos referência em administração condominial eficiente.",
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
    <section className="relative bg-[#1F1F2B] text-white py-24 overflow-hidden font-sans">
      {/* Fundo pontilhado */}
      <div
        className="absolute inset-0 
                   bg-[radial-gradient(circle,rgba(255,255,255,0.05)_1px,transparent_1px)] 
                   bg-[length:20px_20px] 
                   opacity-40 
                   pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Título */}
        <motion.h2
          className="text-3xl md:text-5xl font-semibold mb-16 text-white/90 text-center"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Confiança construída com resultados
        </motion.h2>

        {/* Grid em “escada” */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m, i) => (
            <motion.div
              key={i}
              className={`
                px-6 
                ${i > 0 ? "border-l border-white/10" : ""} 
                ${i === 1 ? "mt-8" : i === 2 ? "mt-16" : i === 3 ? "mt-24" : ""}
              `}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              <h3 className="text-base font-semibold mb-2">{m.title}</h3>
              <p className="text-sm text-white/60 mb-4">{m.description}</p>
              <span className="text-5xl md:text-6xl font-bold">{m.value}</span>
            </motion.div>
          ))}
        </div>

        {/* Botão CTA */}
        <div className="flex justify-center mt-16">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 border border-white rounded-full px-6 py-3 text-sm font-medium hover:bg-white hover:text-[#1F1F2B] transition-all duration-300"
          >
            Conheça nossa história
          </motion.button>
        </div>
      </div>
    </section>
  );
}
