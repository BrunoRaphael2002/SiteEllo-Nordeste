// src/components/CaseStudiesSection.jsx
import React, { useRef, useState, useEffect } from "react";
import { PlayCircle, X } from "lucide-react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import Video from "../assets/video.mp4";
import img1 from "../assets/4.jpg";

export default function CaseStudiesSection() {
  const modalVideoRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handlePlay = (e) => {
    e.stopPropagation();
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    if (modalVideoRef.current) {
      modalVideoRef.current.pause();
      modalVideoRef.current.currentTime = 0;
    }
  };

  return (
    <section className="relative w-full bg-[#1c1c2b] overflow-hidden font-sans">
      {/* Vídeo de fundo */}
      <div
        className="relative w-full h-[400px] lg:h-[600px] overflow-hidden"
        onClick={handlePlay}
      >
        <video
          className="w-full h-full object-cover pointer-events-none"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={Video} type="video/mp4" />
          Seu navegador não suporta vídeos HTML5.
        </video>

        {/* Gradiente de fundo */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1c1c2b]/90 via-[#1c1c2b]/60 to-transparent pointer-events-none" />

        {/* Botão de play */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <button
            onClick={handlePlay}
            className="flex items-center justify-center w-24 h-24 rounded-full border-4 border-white hover:bg-white/20 transition-all duration-300 bg-black/30 backdrop-blur-md"
          >
            <PlayCircle className="w-14 h-14 text-white" />
          </button>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 py-16 px-4 md:px-10 text-center text-white">
        <div className="max-w-6xl mx-auto">
          {/* Subtítulo */}
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-3 h-3 bg-[#ef476f] rounded-full"></div>
            <span className="uppercase tracking-widest text-sm font-medium">
              Casos de Sucesso
            </span>
          </div>

          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-12 text-white/90"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Resultados que Transformam Condomínios
          </motion.h2>

          {/* Grid dos cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Redução de Inadimplência em 35%",
                tag: "GESTÃO FINANCEIRA",
                image: img1,
              },
              {
                title: "Portal do Condômino Implementado",
                tag: "TECNOLOGIA",
                image: img1,
              },
              {
                title: "Assembleias Virtuais Modernizadas",
                tag: "ASSEMBLEIAS",
                image: img1,
              },
            ].map((card, index) => (
              <motion.div
                key={index}
                data-aos="fade-up"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transform transition duration-300"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-5 text-left">
                  <span className="inline-flex items-center gap-2 bg-[#ef476f] text-white text-xs font-semibold px-3 py-1 rounded-full">
                    <div className="w-2 h-2 bg-white rounded-full" />
                    {card.tag}
                  </span>
                  <h3 className="mt-4 text-gray-800 font-semibold text-lg leading-snug">
                    {card.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal do vídeo */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center px-4">
          <div className="relative w-full max-w-4xl mx-auto">
            {/* Botão de fechar */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 md:top-6 md:right-6 text-white hover:text-red-500 transition z-50"
              aria-label="Fechar vídeo"
            >
              <X size={28} className="md:size-8" />
            </button>

            <video
              ref={modalVideoRef}
              className="w-full rounded-lg mt-10 md:mt-0"
              controls
            >
              <source src={Video} type="video/mp4" />
              Seu navegador não suporta vídeos HTML5.
            </video>
          </div>
        </div>
      )}
    </section>
  );
}
