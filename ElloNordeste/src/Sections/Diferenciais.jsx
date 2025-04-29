import React from "react";
import {
  Users,
  FileText,
  BarChart3,
  PhoneCall,
  DollarSign,
} from "lucide-react";
import img2 from "../assets/4.jpg";

const blue = "text-blue-700"; // cor azul "gravada"

const diferenciais = [
  {
    icon: <Users size={28} className={blue} />,
    title: "Mais de 30 anos de experiência",
    description:
      "Fundada em 1987, com atuação em João Pessoa e Recife em mais de 150 condomínios.",
  },
  {
    icon: <FileText size={28} className={blue} />,
    title: "Assessoria financeira, contábil e administrativa",
    description:
      "Equipe especializada e sistema de informação dinâmico para suporte completo aos condomínios.",
  },
  {
    icon: <BarChart3 size={28} className={blue} />,
    title: "Transparência e relatórios diários",
    description:
      "Emissão de relatórios diários de receitas e despesas para total visibilidade financeira.",
  },
  {
    icon: <PhoneCall size={28} className={blue} />,
    title: "Atendimento humanizado",
    description:
      "Suporte ao síndico e condôminos presencial, por e-mail e telefone, com respostas ágeis para pendências e emergências.",
  },
  {
    icon: <DollarSign size={28} className={blue} />,
    title: "Minimização de custos",
    description:
      "Estratégias dedicadas para reduzir despesas e otimizar serviços, maximizando o bem‑estar dos moradores.",
  },
];

export default function DiferenciaisSection() {
  return (
    <section
      id="diferenciais"
      className="py-20 bg-white relative overflow-hidden"
    >
      {/* Grid de conteúdo */}
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 items-center gap-16 relative z-10">
        {/* Texto */}
        <div>
          <span className="inline-flex items-center text-sm font-medium mb-2 text-blue-700">
            <span className="w-2 h-2 rounded-full bg-blue-700 mr-2" />
            Nossos Diferenciais
          </span>
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Por que escolher a Ello Nordeste?
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl">
            Somos referência em administração de condomínios, unindo tradição,
            transparência e atendimento personalizado para garantir tranquilidade
            e eficiência na gestão.
          </p>

          <div className="space-y-6">
            {diferenciais.map((item, idx) => (
              <div key={idx} className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Botão */}
          <a
            href="#contato"
            className="mt-8 inline-flex items-center px-6 py-3 bg-blue-700 text-white rounded-full font-semibold hover:bg-blue-800 transition-all duration-300"
          >
            Saiba mais sobre nossos diferenciais →
          </a>
        </div>

        {/* Imagem ilustrativa (esconde no mobile) */}
        <div className="hidden md:block relative">
          <img
            src={img2}
            alt="Administradora de condomínios"
            className="rounded-2xl shadow-xl w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Fundo de bolinhas */}
      <div className="absolute inset-0 bg-[radial-gradient(#eee_1px,transparent_1px)] bg-[size:16px_16px] z-0" />
    </section>
  );
}
