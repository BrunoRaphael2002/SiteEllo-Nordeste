import {
  Bell,
  FileText,
  ClipboardList,
  CreditCard,
  ShieldCheck,
  Wallet,
  BarChart3,
  Receipt,
  Landmark,
  Shield
} from "lucide-react";

import appImage from "../assets/superlogicaapp.png";
import iosImage from "../assets/ios.png";
import Gplay from "../assets/Gplay.png";

export default function AppSection() {
  return (
    <section className="w-full bg-gradient-to-br from-white via-white to-white py-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-start gap-16">

        {/* --- LADO ESQUERDO --- */}
        <div className="w-full md:w-1/2">

          {/* Badge */}
          <span className="px-4 py-1 bg-[#e7c6c6] text-[#7a3b3b] rounded-full text-sm font-medium">
            Portal do Condomínio
          </span>

          {/* Título */}
          <h2 className="text-4xl font-bold text-gray-900 mt-4 leading-tight">
            Gestão do Seu Condomínio<br />na Palma da Mão
          </h2>

          {/* Texto */}
          <p className="text-gray-600 mt-4 leading-relaxed">
            Aplicativo completo com segunda via de boletos, comunicados,
            documentos e muito mais. Acesso 24/7 de qualquer lugar.
          </p>

          {/* ===== SOLUÇÕES ===== */}
          <h3 className="text-2xl font-bold text-gray-900 mt-16 mb-6">
            Soluções disponíveis na plataforma
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

            <Card
              icon={BarChart3}
              title="Extratos e Relatórios"
              text="Baixe relatórios mensais da sua unidade"
            />

            <Card
              icon={FileText}
              title="Documentos"
              text="Todos os seus documentos em um único lugar"
            />

            <Card
              icon={Receipt}
              title="Segunda Via de Boletos pelo App"
              text="Acesse seus boletos digitalmente a qualquer hora"
            />

            <Card
              icon={Bell}
              title="Comunicados"
              text="Receba notificações em tempo real do condomínio"
            />

            <Card
              icon={ShieldCheck}
              title="Inadimplência Zero"
              text="Garantia mensal da receita para o condomínio. Tecnologia e riscos de crédito ficam por nossa conta."
            />

            <Card
              icon={Landmark}
              title="Conta Digital para Condomínios"
              text="Automatize a conciliação bancária e ganhe até 6x mais eficiência na sua operação."
            />

            <Card
              icon={CreditCard}
              title="Recebimento por Cartão de Crédito"
              text="A taxa condominial cobrada direto no cartão elimina atrasos por esquecimento."
            />

            <Card
              icon={FileText}
              title="Boleto"
              text="Conciliação bancária automática, economia nas taxas de emissão e mais agilidade na gestão."
            />

            <Card
              icon={Shield}
              title="Seguro Condominial"
              text="Automatize cotações, contratações e lançamentos das despesas de seguros obrigatórios."
            />

            <Card
              icon={Wallet}
              title="Crédito para Condomínios"
              text="Solução rápida para problemas urgentes, com ótimas taxas e solidez financeira."
            />

            <Card
              icon={ClipboardList}
              title="Paybox"
              text="Centralize todos os arquivos de pagamento dos seus condomínios de forma rápida e eficiente."
              full
            />

          </div>

          {/* Botões */}
          <div className="flex flex-wrap gap-4 mt-12">
            <a
              href="https://apps.apple.com/br/app/condom%C3%ADnio-%C3%A1rea-do-cond%C3%B4mino/id1160849001"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={iosImage}
                alt="App Store"
                className="h-12 hover:scale-105 transition cursor-pointer"
              />
            </a>

            <a
              href="https://play.google.com/store/apps/details?id=com.condor.superlogica"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Gplay}
                alt="Google Play"
                className="h-12 hover:scale-105 transition cursor-pointer"
              />
            </a>
          </div>
        </div>

        {/* --- IMAGEM (DESKTOP) --- */}
        <div className="hidden md:flex md:w-1/2 relative">
          <div className="flex items-center justify-center w-full py-20">
            <img
              src={appImage}
              alt="App"
              className="h-auto w-auto rounded-2xl shadow-2xl object-contain"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

/* ===== CARD PADRÃO ===== */
const Card = ({ icon: Icon, title, text, full }) => (
  <div className={`border rounded-xl p-5 ${full ? "sm:col-span-2" : ""}`}>
    <Icon className="text-red-600 w-6 h-6 mb-2" />
    <h4 className="font-semibold text-gray-900">{title}</h4>
    <p className="text-gray-600 text-sm">{text}</p>
  </div>
);
