import {
  Bell,
  FileText,
  ClipboardList,
  BarChart3
} from "lucide-react";

import appImage from "../assets/4.jpg";
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

          {/* Recursos do App */}
          <div className="grid grid-cols-2 gap-6 mt-10">

            <div>
              <Bell className="text-red-600 w-6 h-6 mb-2" />
              <h4 className="font-semibold text-gray-900">Comunicados</h4>
              <p className="text-gray-600 text-sm">
                Receba notificações em tempo real do condomínio
              </p>
            </div>

            <div>
              <ClipboardList className="text-red-600 w-6 h-6 mb-2" />
              <h4 className="font-semibold text-gray-900">
                Segunda Via de Boletos
              </h4>
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
              <BarChart3 className="text-red-600 w-6 h-6 mb-2" />
              <h4 className="font-semibold text-gray-900">
                Extratos e Relatórios
              </h4>
              <p className="text-gray-600 text-sm">
                Baixe relatórios mensais da sua unidade
              </p>
            </div>

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
        <div className="hidden md:flex md:w-1/2 justify-center">
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
