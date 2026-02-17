import { useState, useEffect, useRef } from "react";
import imgMain from "../assets/frente.png";
import img2 from "../assets/recepcao01.png";
import img3 from "../assets/recepcao02.jpeg";
import img4 from "../assets/recepcao03.jpeg"

export default function AboutSection() {
  const images = [imgMain, img2, img3, img4];
  const [selectedIndex, setSelectedIndex] = useState(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const openImage = (index) => setSelectedIndex(index);
  const closeImage = () => setSelectedIndex(null);

  const nextImage = () => {
    setSelectedIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  // Teclado + travar scroll
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeImage();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    if (selectedIndex !== null) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [selectedIndex]);

  // Swipe Mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      nextImage();
    }

    if (touchStartX.current - touchEndX.current < -50) {
      prevImage();
    }
  };

  return (
    <section className="py-24 bg-[#f9fafb]" id="sobre">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">

        {/* TEXTO */}
        <div>
          <span className="text-sm font-medium text-blue-700">
            Sobre Nós
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Sobre a Nossa <br /> Administradora
          </h2>

          <p className="text-gray-600 mb-6">
            Atuando no mercado desde 1987 oferecendo soluções completas
            para gestão condominial com transparência e eficiência.
          </p>

          <a
            href="#contato"
            className="mt-10 inline-block bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-full font-semibold transition-all"
          >
            Solicite uma Proposta →
          </a>
        </div>

        {/* IMAGENS */}
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

      {/* MODAL */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={closeImage}
        >
          <div
            className="relative max-w-6xl w-full px-4 animate-modalZoom"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Botão fechar */}
            <button
              className="absolute top-4 right-6 text-white text-4xl font-bold hover:scale-110 transition"
              onClick={closeImage}
            >
              ×
            </button>

            {/* Indicador */}
            <div className="absolute top-4 left-6 text-white text-sm bg-black/40 px-3 py-1 rounded-full">
              {selectedIndex + 1} / {images.length}
            </div>

            {/* Anterior */}
            <button
              className="absolute left-2 top-1/2 -translate-y-1/2 text-white text-5xl px-4 hover:scale-110 transition"
              onClick={prevImage}
            >
              ‹
            </button>

            {/* Próximo */}
            <button
              className="absolute right-2 top-1/2 -translate-y-1/2 text-white text-5xl px-4 hover:scale-110 transition"
              onClick={nextImage}
            >
              ›
            </button>

            {/* Imagem */}
            <img
              src={images[selectedIndex]}
              alt=""
              className="rounded-2xl max-h-[80vh] w-full object-contain shadow-2xl"
            />

            {/* Miniaturas dentro do modal */}
            <div className="flex justify-center gap-3 mt-6">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt=""
                  onClick={() => openImage(index)}
                  className={`h-16 w-24 object-cover rounded-lg cursor-pointer border-2 transition ${
                    selectedIndex === index
                      ? "border-blue-500"
                      : "border-transparent opacity-70"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Animação */}
      <style>
        {`
          @keyframes modalZoom {
            from {
              opacity: 0;
              transform: scale(0.95);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }

          .animate-modalZoom {
            animation: modalZoom 0.3s ease-out;
          }
        `}
      </style>
    </section>
  );
}
