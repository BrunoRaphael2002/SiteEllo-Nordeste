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
      "Equipe dedicada para atender síndicos e moradores com agilidade. Suporte humano e direto, com acompanhamento personalizado e comunicação eficiente.",
    imagem: img2,
  },
  {
    id: 3,
    titulo: "Tecnologia de Ponta",
    descricao:
      "Sistema moderno para acessar boletos, atas, reservas e comunicados com facilidade, segurança e rapidez através de múltiplos dispositivos.",
    imagem: img3,
  },
  {
    id: 4,
    titulo: "Gestão Eficiente",
    descricao:
      "Redução de custos, otimização de recursos e valorização do patrimônio com relatórios detalhados e controle total do que acontece no condomínio.",
    imagem: img4,
  },
];

export default function DiferenciaisSection() {
  const [ativo, setAtivo] = useState(null);

  return (
    <section id="diferenciais" className="w-full bg-black">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 w-full h-[80vh]">
        {diferenciais.map((item, index) => {
          const isActive = ativo === item.id;

          return (
            <motion.div
              key={item.id}
              className="relative group w-full h-full cursor-pointer overflow-hidden border border-gray-800"
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

              {/* Gradiente inferior */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />

              {/* Conteúdo do card */}
              <div className="absolute bottom-0 left-0 z-20 w-full h-full flex flex-col justify-end p-5 text-white pointer-events-none">
                <div
                  className={`
                    transition-transform duration-500 transform
                    ${isActive ? "translate-y-0" : "translate-y-[40%] group-hover:translate-y-0"}
                    pointer-events-auto
                  `}
                >
                  <h3 className="text-xl md:text-2xl font-bold mb-2">
                    {String(index + 1).padStart(2, "0")}. {item.titulo}
                  </h3>
                  <p className="text-sm md:text-base leading-snug mb-3">
                    {item.descricao}
                  </p>
                  <button
                    className="text-sm md:text-base font-semibold text-blue-300 hover:underline"
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
