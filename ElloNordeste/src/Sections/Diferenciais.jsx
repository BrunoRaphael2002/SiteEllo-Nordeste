import { useState } from "react";
import { motion } from "framer-motion";
import img1 from "../assets/4.jpg";
import img2 from "../assets/4.jpg";
import img3 from "../assets/4.jpg";
import img4 from "../assets/4.jpg";

const diferenciais = [
  {
    id: 1,
    titulo: "Transparência Total",
    descricao:
      "Acompanhamento completo de despesas e receitas em tempo real. Tudo acessível para moradores e síndicos a qualquer momento.",
    imagem: img1,
  },
  {
    id: 2,
    titulo: "Atendimento Personalizado",
    descricao:
      "Equipe dedicada para atender síndicos e moradores com agilidade. Suporte humano e direto com atendimento em horário comercial.",
    imagem: img2,
  },
  {
    id: 3,
    titulo: "Tecnologia de Ponta",
    descricao:
      "Sistema moderno para acessar boletos, atas e comunicados com facilidade, segurança e acessibilidade para todos os moradores.",
    imagem: img3,
  },
  {
    id: 4,
    titulo: "Gestão Eficiente",
    descricao:
      "Redução de custos com foco na valorização do patrimônio, controle orçamentário e organização financeira do condomínio.",
    imagem: img4,
  },
];

export default function DiferenciaisSection() {
  const [ativo, setAtivo] = useState(null);

  return (
    <section
      id="diferenciais"
      className="w-full bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white "
    >
      {/* Título da sessão */}
      <div className="text-center py-12">
        <h2 className="text-4xl font-bold mb-2">Diferenciais</h2>
        <p className="text-lg text-gray-300">
          Conheça o que torna nossa gestão única e eficiente
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 w-full">
        {diferenciais.map((item, index) => {
          const isActive = ativo === item.id;

          return (
            <motion.div
              key={item.id}
              className="relative group w-full aspect-[4/5] cursor-pointer overflow-hidden border border-white/10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setAtivo(isActive ? null : item.id)}
            >
              {/* Imagem de fundo */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.imagem})` }}
              />

              {/* Overlay escuro para contraste ao passar o mouse */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300" />

              {/* Gradiente por cima do texto */}
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0f172a] via-[#1e293b]/80 to-transparent z-10 pointer-events-none transition-opacity duration-500" />

              {/* Conteúdo */}
              <div className="absolute bottom-0 left-0 z-20 w-full h-full flex flex-col justify-end text-white pointer-events-none">
                <div
                  className={`
                    relative px-4 pb-6 transition-transform duration-500 transform
                    ${isActive ? "translate-y-0" : "translate-y-[40%] group-hover:translate-y-0"}
                    pointer-events-auto
                  `}
                >
                  <h3 className="text-xl md:text-2xl font-bold mb-2 relative z-20">
                    {String(index + 1).padStart(2, "0")}. {item.titulo}
                  </h3>
                  <p className="text-sm md:text-base leading-snug mb-3 relative z-20">
                    {item.descricao}
                  </p>
                  <button
                    className="text-sm md:text-base font-semibold text-blue-300 hover:underline relative z-20"
                    onClick={(e) => {
                      e.stopPropagation();
                      setAtivo(isActive ? null : item.id);
                    }}
                  >
                    {isActive ? "Fechar" : "Saiba mais"}
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
