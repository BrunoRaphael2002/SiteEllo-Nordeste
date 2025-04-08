// src/components/ServicosSection.jsx
import {
  CreditCard,
  FileText,
  BarChart3,
  TrendingUp,
  NotebookText,
  LineChart,
  ArrowUpRight,
} from "lucide-react";

import lateralImage from "../assets/4.jpg";

const services = [
  { title: "Private Equity", Icon: CreditCard, number: "01" },
  { title: "Tax Declaration", Icon: FileText, number: "02" },
  { title: "Advanced Analytics", Icon: BarChart3, number: "03" },
  { title: "Customer Strategy & Marketing", Icon: TrendingUp, number: "04" },
  { title: "Corporate Finance", Icon: NotebookText, number: "05" },
  { title: "Market Forecasting", Icon: LineChart, number: "06" },
];

export default function ServicosSection() {
  return (
    <section className="relative py-20 px-6 lg:px-20 bg-white overflow-hidden">
      {/* Fundo de bolinhas (radial gradient) */}
      <div className="absolute inset-0 bg-[radial-gradient(#fcdcdc_1px,transparent_1px)] bg-[size:16px_16px] z-0 pointer-events-none" />

      {/* Conteúdo principal */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Texto + Cards */}
        <div>
          <p className="text-sm text-red-600 font-medium mb-2">Nossos serviços</p>
          <h2 className="text-4xl font-light leading-tight mb-4">
            As <span className="font-semibold">melhores soluções</span> <br />
            em <span className="font-semibold">um só lugar</span>
          </h2>
          <p className="text-gray-500 mb-8 max-w-lg">
            Atuamos com foco na gestão profissional e transparente de condomínios, oferecendo um portfólio completo de soluções.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative bg-white p-6 rounded-lg shadow hover:shadow-md transition"
              >
                <service.Icon className="text-red-600 w-6 h-6 mb-4" />
                <h3 className="font-medium text-lg mb-2">{service.title}</h3>
                <p className="text-sm text-gray-500 mb-4">
                  Soluções pensadas para atender às necessidades únicas de cada condomínio.
                </p>
                <a href="#" className="text-sm font-medium text-red-600 flex items-center gap-1">
                  Ver mais <span className="text-xs">→</span>
                </a>
                <span className="absolute bottom-4 right-4 text-5xl text-gray-100 font-bold select-none">
                  {service.number}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Imagem lateral com botão */}
        <div className="relative">
          <img
            src={lateralImage}
            alt="Equipe de trabalho"
            className="rounded-xl w-full h-full object-cover"
          />
          <div className="absolute bottom-0 right-0 bg-red-600 text-white p-6 rounded-tl-2xl w-60 flex flex-col justify-between h-36">
            <ArrowUpRight className="text-white mb-4" />
            <span className="font-medium text-lg leading-tight">
              Conheça todas as soluções
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
