import { useState, useEffect } from "react";

import imgMain from "../assets/frente.png";
import img2 from "../assets/recepcao01.png";
import img3 from "../assets/recepcao02.jpeg";
import img4 from "../assets/recepcao03.jpeg";

export default function AboutSection() {
  const images = [imgMain, img2, img3, img4];
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openImage = (index) => {
    setSelectedIndex(index);
  };

  const closeImage = () => {
    setSelectedIndex(null);
  };

  const nextImage = (e) => {
    e?.stopPropagation();
    setSelectedIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e) => {
    e?.stopPropagation();
    setSelectedIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  // Teclado + travar scroll
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") closeImage();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    if (selectedIndex !== null) {
      window.addEventListener("keydown", handleKey);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "auto";
    };
  }, [selectedIndex]);

  return (
    <section className="py-24 bg-[#f9fafb]" id="sobre">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">

        {/* --- TEXTO ORIGINAL (INALTERADO) --- */}
        <div>
          <span className="text-sm font-medium text-blue-700">
            Sobre Nós
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Sobre a Nossa <br /> Administradora
          </h2>

          <p className="text-gray-600 mb-6">
            Atuando no mercado desde o ano de 1987, nossa empresa tem se
            especializado em oferecer aos clientes uma cesta de serviços que se
            encaixe dentro das necessidades que sua administração exige.
          </p>

          <p className="text-gray-600 mb-10">
            Administrar condomínios, ratear despesas, minimizar custos e
            maximizar serviços são atividades essenciais que, quando bem
            geridas, trazem tranquilidade e bem-estar a todos os envolvidos.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full border-2 border-blue-700 flex items-center justify-center">
                <span className="text-blue-700 text-lg">✓</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  Atendimento Personalizado
                </h4>
                <p className="text-gray-600 text-sm">
                  Atendimento humanizado com foco em síndicos e moradores,
                  promovendo soluções rápidas e eficazes.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full border-2 border-blue-700 flex items-center justify-center">
                <span className="text-blue-700 text-lg">✓</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  Gestão Transparente
                </h4>
                <p className="text-gray-600 text-sm">
                  Priorizamos a transparência em todos os processos, com
                  relatórios claros e acompanhamento em tempo real.
                </p>
              </div>
            </div>
          </div>

          <a
            href="#contato"
            className="mt-10 inline-block bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-full font-semibold transition-all"
          >
            Solicite uma Proposta →
          </a>
        </div>

        {/* --- IMAGENS --- */}
        <div>
          <div className="rounded-3xl overflow-hidden shadow-xl cursor-pointer">
            <img
              src={imgMain}
              alt=""
              className="w-full object-cover hover:scale-105 transition duration-500"
              onClick={() => openImage(0)}
            />
          </div>

          <div className="grid grid-cols-3 gap-3 mt-4">
            {[img2, img3, img4].map((img, index) => (
              <img
                key={index}
                src={img}
                alt=""
                className="rounded-xl object-cover h-28 w-full cursor-pointer hover:opacity-80 transition"
                onClick={() => openImage(index + 1)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* --- MODAL COM SETAS --- */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={closeImage}
        >
          <div
            className="relative max-w-5xl w-full px-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botão fechar */}
            <button
              className="absolute top-4 right-6 text-white text-4xl font-bold"
              onClick={closeImage}
            >
              ×
            </button>

            {/* Seta esquerda */}
            <button
              className="absolute left-0 top-1/2 -translate-y-1/2 text-white text-5xl px-4"
              onClick={prevImage}
            >
              ‹
            </button>

            {/* Seta direita */}
            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 text-white text-5xl px-4"
              onClick={nextImage}
            >
              ›
            </button>

            {/* Imagem */}
            <img
              src={images[selectedIndex]}
              alt=""
              className="rounded-2xl max-h-[85vh] w-full object-contain shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}
