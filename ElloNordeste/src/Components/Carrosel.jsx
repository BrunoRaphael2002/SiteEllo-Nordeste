import { ArrowRight } from 'lucide-react';
import img1 from '../assets/1.jpg'; // Sua imagem fixa de fundo

export default function HeroSection() {
  return (
    <div className="relative w-full h-[80vh] md:h-screen">
      <div
        className="w-full h-full bg-cover bg-center relative"
        style={{ backgroundImage: `url(${img1})` }}
      >
        {/* Gradiente para melhorar contraste no topo */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/70 to-transparent z-10" />

        {/* Camada escura geral + conteúdo */}
        <div className="w-full h-full bg-black/50 flex items-center">
          <div className="text-white max-w-3xl px-8 md:px-16 pt-20 md:pt-32 relative z-20">
            {/* Slogan atualizado */}
            <h1 className="text-3xl md:text-6xl font-bold leading-tight mb-6">
              Desde 1987 administrando com domínio
            </h1>

            {/* Botões */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#area-do-cliente"
                className="inline-flex items-center justify-center bg-white text-[#1F1F2B] font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition-all duration-300"
              >
                Área do Cliente
              </a>

              <a
                href="#contato"
                className="inline-flex items-center justify-center bg-[#1F3F70] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#18345f] transition-all duration-300"
              >
                Solicitar Proposta
                <ArrowRight size={18} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
