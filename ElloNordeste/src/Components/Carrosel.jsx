import { ArrowRight } from "lucide-react";
import img1 from "../assets/1.jpg";
import { HashLink } from "react-router-hash-link";

export default function HeroSection() {
  const whatsappNumber = "5583991316577";

  const message = encodeURIComponent(
    "Olá bom dia, gostaria de solicitar uma proposta."
  );

  const handleClick = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <section id="hero" className="relative w-full min-h-[100vh] flex items-center justify-center text-white">
      {/* Imagem de fundo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${img1})` }}
      />

      {/* Gradiente azul escuro */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#000000]/90 via-[#0a1b4d]/80 to-[#0a1b4d]/95" />

      {/* Conteúdo */}
      <div className="relative text-center px-6 max-w-4xl mx-auto mt-24">

        {/* BADGE */}
        <div className="inline-flex items-center px-4 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm mb-6 border border-white/20">
          <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
          Desde 1987
        </div>

        {/* TÍTULO */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          Administrando{" "}
          <span className="text-[#7da7ff]">com</span>{" "}
          <span className="text-[#d95446]">domínio</span>
        </h1>

        {/* SUBTÍTULO */}
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10">
          Gestão profissional, transparente e humanizada de condomínios
          em João Pessoa e Recife
        </p>

        {/* BOTÕES */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">

          {/* Botão vermelho */}
          <button
            onClick={handleClick}
            className="px-6 py-3 rounded-lg font-semibold bg-[#d95446] hover:bg-[#c24338] transition-all text-white shadow-md"
          >
            Solicitar Proposta
          </button>

          {/* Botão azul claro */}
          <HashLink
            smooth
            to="#servicos"
            className="px-6 py-3 rounded-lg font-semibold bg-white/10 border border-white/20 hover:bg-white/20 transition-all text-white shadow-md"
          >
            Conhecer Serviços
          </HashLink>
        </div>

        {/* NÚMEROS */}
        <div className="grid grid-cols-3 max-w-md mx-auto text-center gap-4">
          <div>
            <p className="text-3xl font-bold">150+</p>
            <p className="text-sm opacity-70">Condomínios Atendidos</p>
          </div>

          <div>
            <p className="text-3xl font-bold">37+</p>
            <p className="text-sm opacity-70">Anos de Experiência</p>
          </div>

          <div>
            <p className="text-3xl font-bold">2</p>
            <p className="text-sm opacity-70">Cidades</p>
          </div>
        </div>

      </div>
    </section>
  );
}
