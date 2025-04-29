import React from "react";
import {
  Phone,
  Users,
  Wallet,
  FileText,
  DollarSign,
  Settings,
  ArrowUpRight,
} from "lucide-react";

import lateralImage from "../assets/4.jpg";

const services = [
  {
    title: "Atendimento",
    Icon: Phone,
    number: "01",
    description:
      "Atendimento ao síndico e condôminos presencial, por e‑mail e telefone; auxílio em pendências e problemas emergenciais.",
  },
  {
    title: "Gestão de Pessoal",
    Icon: Users,
    number: "02",
    description:
      "Confecção de folha de pagamento, emissão de contra‑cheque e depósito em conta dos colaboradores.",
  },
  {
    title: "Cobrança",
    Icon: Wallet,
    number: "03",
    description:
      "Controle de inadimplência com sistema eficaz e ações de cobrança para manter as finanças em dia.",
  },
  {
    title: "Serviços Contábeis",
    Icon: FileText,
    number: "04",
    description:
      "Organização de documentos contábeis, emissão de balancetes e prestação de contas transparentes.",
  },
  {
    title: "Assessoria Financeira",
    Icon: DollarSign,
    number: "05",
    description:
      "Assessoria financeira e administrativa com sistema dinâmico para acompanhamento diário de receitas e despesas.",
  },
  {
    title: "Administração Geral",
    Icon: Settings,
    number: "06",
    description:
      "Administração de todas as rotinas condominiais, incluindo assembleias, contratos de manutenção e gestão de documentos.",
  },
  {
    title: "Portal do Condômino",
    Icon: ArrowUpRight,
    number: "07",
    description:
      "Acesso online para emissão de segunda via de boletos e consulta de histórico de cobranças.",
  },
];

export default function ServicosSection() {
  return (
    <section className="relative py-20 px-6 lg:px-20 bg-white overflow-hidden">
      {/* Fundo de bolinhas */}
      <div className="absolute inset-0 bg-[radial-gradient(#dce7fc_1px,transparent_1px)] bg-[size:16px_16px] z-0 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
        {/* Imagem lateral */}
        <div className="order-1 lg:order-none h-full hidden lg:block">
          <div className="relative h-full rounded-xl overflow-hidden shadow-lg">
            <img
              src={lateralImage}
              alt="Equipe de trabalho"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>

        {/* Texto + Cards */}
        <div className="order-2 lg:order-none flex flex-col justify-center">
          <p className="text-sm text-blue-600 font-medium mb-2">Nossos serviços</p>
          <h2 className="text-4xl font-light leading-tight mb-4">
            As <span className="font-semibold">melhores soluções</span> <br />
            em <span className="font-semibold">um só lugar</span>
          </h2>
          <p className="text-gray-500 mb-8 max-w-lg">
            Atuamos com foco na gestão profissional e transparente de condomínios,
            oferecendo um portfólio completo de soluções.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative bg-white p-6 rounded-lg border border-blue-100 hover:border-blue-300 shadow transition-all duration-300 hover:shadow-lg"
              >
                <service.Icon className="text-blue-600 w-6 h-6 mb-4" />
                <h3 className="font-medium text-lg mb-2">{service.title}</h3>
                <p className="text-sm text-gray-500 mb-4">
                  {service.description}
                </p>
                <a
                  href="#"
                  className="text-sm font-medium text-blue-600 flex items-center gap-1"
                >
                  Ver mais <span className="text-xs">→</span>
                </a>
                <span className="absolute bottom-4 right-4 text-5xl text-gray-100 font-bold select-none">
                  {service.number}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
