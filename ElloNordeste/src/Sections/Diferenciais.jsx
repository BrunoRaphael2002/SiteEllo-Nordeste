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
      "Equipe dedicada para atender síndicos e moradores com agilidade. Suporte humano e direto.",
    imagem: img2,
  },
  {
    id: 3,
    titulo: "Tecnologia de Ponta",
    descricao:
      "Sistema moderno para acessar boletos, atas e comunicados com facilidade e segurança.",
    imagem: img3,
  },
  {
    id: 4,
    titulo: "Gestão Eficiente",
    descricao:
      "Redução de custos com foco na valorização do patrimônio e organização do condomínio.",
    imagem: img4,
  },
];

export default function DiferenciaisSection() {
  const [ativo, setAtivo] = useState(null);

  return (
    <section id="diferenciais" className="w-screen h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 w-full h-full">
        {diferenciais.map((item, index) => {
          const isActive = ativo === item.id;

          return (
            <motion.div
              key={item.id}
              className="relative group w-full h-full cursor-pointer overflow-hidden"
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

              {/* Overlay escuro */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300" />

              {/* Conteúdo */}
              <div
                className={`absolute bottom-0 left-0 w-full bg-white/90 text-gray-900 p-6 
                  transition-all duration-500 ease-in-out z-20
                  max-h-[7rem] group-hover:max-h-[20rem] ${
                    isActive ? "max-h-[20rem]" : ""
                  } overflow-hidden`}
              >
                <h3 className="text-lg font-semibold">
                  {String(index + 1).padStart(2, "0")}. {item.titulo}
                </h3>

                <p className="text-sm mt-2 leading-snug line-clamp-2">
                  {item.descricao}
                </p>

                {/* Descrição completa e botão */}
                <div
                  className={`transition-opacity duration-500 mt-3 ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <p className="text-sm">{item.descricao}</p>
                  <button className="mt-4 text-sm font-semibold text-blue-600 hover:underline">
                    Saiba mais
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
