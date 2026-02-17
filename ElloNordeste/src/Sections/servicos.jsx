import React from "react";
import {
  Users,
  FileText,
  BarChart3,
  PhoneCall,
  DollarSign,
  Settings,
  Wallet,
  ArrowUpRight,
} from "lucide-react";

import lateralImage from "../assets/recepcionista.png";

const items = [
  {
    title: "Atendimento Humanizado",
    Icon: PhoneCall,
    description:
      "Suporte ao síndico e condôminos presencial, por e-mail e telefone, com respostas ágeis para pendências e emergências.",
  },
  {
    title: "Gestão de Pessoal",
    Icon: Users,
    description:
      "Confecção de folha de pagamento, emissão de contra-cheque e depósito em conta dos colaboradores.",
  },
  {
    title: "Cobrança Eficiente",
    Icon: Wallet,
    description:
      "Controle de inadimplência com sistema eficaz e ações de cobrança para manter as finanças em dia.",
  },
  {
    title: "Transparência Total",
    Icon: BarChart3,
    description:
      "Relatórios diários de receitas e despesas, garantindo máxima visibilidade financeira.",
  },
  {
    title: "Serviços Contábeis",
    Icon: FileText,
    description:
      "Organização documental, emissão de balancetes e prestação de contas totalmente transparente.",
  },
  {
    title: "Assessoria Financeira",
    Icon: DollarSign,
    description:
      "Acompanhamento diário de receitas e despesas com tecnologia moderna e informações em tempo real.",
  },
  {
    title: "Administração Geral",
    Icon: Settings,
    description:
      "Gestão completa das rotinas condominiais, assembleias, contratos e documentos.",
  },
  {
    title: "Portal do Condômino",
    Icon: ArrowUpRight,
    description:
      "Acesso online para boletos, histórico de pagamentos e documentos importantes.",
  },
  {
    title: "Experiência Comprovada",
    Icon: Users,
    description:
      "Desde 1987 administrando mais de 150 condomínios nas regiões de João Pessoa e Recife.",
  },
];

export default function SolucoesDiferenciaisSection() {
  return (
    <section className="relative py-20 px-6 lg:px-20 bg-white overflow-hidden" id="servicos">
      {/* Fundo de bolinhas */}
      <div className="absolute inset-0 bg-[radial-gradient(#dce7fc_1px,transparent_1px)] bg-[size:16px_16px] z-0 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Imagem lateral */}
        <div className="hidden lg:block h-full">
          <div className="relative rounded-xl overflow-hidden shadow-lg h-full">
            <img
              src={lateralImage}
              alt="Equipe de administração"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Texto + Cards */}
        <div className="flex flex-col justify-center">
          <p className="text-sm text-blue-600 font-medium mb-2">
            Soluções e Diferenciais
          </p>

          <h2 className="text-4xl font-light leading-tight mb-4">
            Tudo que seu condomínio precisa,
            <br />
            em <span className="font-semibold">um único lugar</span>
          </h2>

          <p className="text-gray-500 mb-8 max-w-lg">
            Gestão profissional, transparente e completa, com foco em resultados e
            tranquilidade para síndicos e condôminos.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {items.map((item, index) => (
              <div
                key={index}
                className="relative bg-white p-6 rounded-lg border border-blue-100 hover:border-blue-300 shadow transition-all duration-300 hover:shadow-lg"
              >
                <item.Icon className="text-blue-600 w-6 h-6 mb-4" />
                <h3 className="font-medium text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>
            ))}
          </div>

       
        </div>
      </div>
    </section>
  );
}
