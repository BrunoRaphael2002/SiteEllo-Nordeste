import { useState } from "react";
import { motion } from "framer-motion";
import img1 from "../assets/4.jpg";
import img2 from "../assets/4.jpg";
import img3 from "../assets/4.jpg";
import img4 from "../assets/CEO.webp";

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
    titulo: "CEO da empresa e advogado",
    descricao:
      "Inaldo Dantas é um advogado brasileiro especializado em direito condominial desde 1987. Atuou como presidente do Secovi-PB por quatro mandatos consecutivos e é editor e fundador da Revista Condomínio. Além disso, é colunista em diversos veículos de comunicação e autor de livros sobre gestão condominial. Organiza a FESÍNDICO, feira de condomínios do Nordeste, e ministra cursos e palestras na área.​",
    imagem: img4,
  },
];

export default function DiferenciaisSection() {
  const [ativo, setAtivo] = useState(null);

  return (
    <section
      id="diferenciais"
      className="w-full  h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white"
    >
      {/* Título da sessão */}
      <div className="text-center py-12">
        <h2 className="text-4xl font-bold mb-2">Diferenciais</h2>
        <p className="text-lg text-gray-300">
          Conheça o que torna nossa gestão única e eficiente
        </p>
      </div>

      {/* Cards ocupando toda a altura da tela */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 w-full h-[calc(100vh-8rem)] gap-0 ">
        {diferenciais.map((item, index) => {
          const isActive = ativo === item.id;

          return (
            <motion.div
              key={item.id}
              className="relative group w-full h-full cursor-pointer overflow-hidden border border-white/10"
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

              {/* Overlay escuro com efeito hover */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300" />

              {/* Conteúdo */}
              <div className="absolute bottom-0 left-0 z-20 w-full h-full flex flex-col justify-end text-white pointer-events-none">
                <div
                  className={`relative px-4 pb-6 transition-all duration-500 overflow-hidden pointer-events-auto
                    ${isActive ? "max-h-[calc(100%-6rem)]" : "max-h-28 group-hover:max-h-[calc(100%-6rem)]"}
                  `}
                >
                  <h3 className="text-xl md:text-2xl font-bold mb-2">
                    {String(index + 1).padStart(2, "0")}. {item.titulo}
                  </h3>

                  <p
                    className={`text-sm md:text-base leading-snug mb-3 overflow-hidden transition-all duration-300
                      ${isActive ? "" : "line-clamp-2 group-hover:line-clamp-none"}
                    `}
                  >
                    {item.descricao}
                  </p>

                  <a
                    href={`/diferenciais/${item.id}`}
                    className="inline-block mt-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm md:text-base font-semibold rounded"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Saiba mais
                  </a>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
