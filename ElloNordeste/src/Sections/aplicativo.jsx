import { Bell, FileText, ClipboardList, TrendingUp } from "lucide-react";
import appImage from "../assets/4.jpg"; // 👉 a imagem do card do app (PNG/JPG)
import iosImage from '../assets/ios.png';
import Gplay from '../assets/Gplay.png';

export default function AppSection() {
  return (
    <section className="w-full bg-gradient-to-br from-[#f8eaea] via-[#f7f3f3] to-[#eedede] py-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">

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

          {/* Grade de Recursos */}
          <div className="grid grid-cols-2 gap-6 mt-10">

            {/* Item */}
            <div>
              <Bell className="text-red-600 w-6 h-6 mb-2" />
              <h4 className="font-semibold text-gray-900">Comunicados</h4>
              <p className="text-gray-600 text-sm">
                Receba notificações em tempo real do condomínio
              </p>
            </div>

            <div>
              <ClipboardList className="text-red-600 w-6 h-6 mb-2" />
              <h4 className="font-semibold text-gray-900">Segunda Via de Boletos</h4>
              <p className="text-gray-600 text-sm">
                Acesse seus boletos digitalmente a qualquer hora
              </p>
            </div>

            <div>
              <FileText className="text-red-600 w-6 h-6 mb-2" />
              <h4 className="font-semibold text-gray-900">Documentos</h4>
              <p className="text-gray-600 text-sm">
                Todos os seus documentos em um único lugar
              </p>
            </div>

            <div>
              <TrendingUp className="text-red-600 w-6 h-6 mb-2" />
              <h4 className="font-semibold text-gray-900">Extratos e Relatórios</h4>
              <p className="text-gray-600 text-sm">
                Baixe relatórios mensais de sua unidade
              </p>
            </div>
          </div>

          {/* Botões */}
          <div className="flex flex-wrap gap-4 mt-10">
            <img
              src={iosImage}
              alt="App Store"
              className="h-12 cursor-pointer hover:scale-105 transition"
            />

            <img
              src={Gplay}
              alt="Google Play"
              className="h-12 cursor-pointer hover:scale-105 transition"
            />
          </div>

        </div>

        {/* --- LADO DIREITO: APENAS A IMAGEM --- */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={appImage}
            alt="App"
            className="w-full max-w-lg drop-shadow-xl"
          />
        </div>

      </div>
    </section>
  );
}
