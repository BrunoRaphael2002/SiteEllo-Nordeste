// src/components/CaseStudiesSection.jsx
import React, { useRef, useState, useEffect } from "react";
import { PlayCircle, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import Video from "../assets/video.mp4";
import img1 from "../assets/4.jpg";

export default function CaseStudiesSection() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handlePlay = (e) => {
    if (e) e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section className="relative w-full bg-[#1c1c2b] overflow-hidden font-sans">
      {/* Vídeo de fundo */}
      <div
        className="relative w-full h-[400px] lg:h-[600px] overflow-hidden cursor-pointer"
        onClick={handlePlay}
      >
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
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
      </div>

      {/* Botão de play */}
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <button
            onClick={(e) => handlePlay(e)}
            className="flex items-center justify-center w-20 h-20 rounded-full border-4 border-white hover:bg-white/20 transition-all duration-300"
          >
            <PlayCircle className="w-12 h-12 text-white" />
          </button>
        </div>
      )}

      {/* Conteúdo */}
      <div className="relative z-10 py-16 px-4 md:px-10 text-center text-white">
        <div className="max-w-6xl mx-auto">
          {/* Subtítulo */}
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-3 h-3 bg-[#ef476f] rounded-full"></div>
            <span className="uppercase tracking-widest text-sm font-medium">Case studies</span>
          </div>

          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-12 text-white/90"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Showcasing
          </motion.h2>

          {/* Grid dos cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Financial Restructuring for Manufacturing Firm",
                tag: "FINANCIAL SERVICES",
                image: img1,
              },
              {
                title: "Operational Efficiency Enhancement for Retail Chain",
                tag: "FINANCIAL SERVICES",
                image: img1,
              },
              {
                title: "Marketing Digital Transformation Journey",
                tag: "STRATEGY CONSULTING",
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

          {/* Paginação fake */}
          <div className="mt-10 flex justify-center space-x-2">
            {[0, 1, 2].map((_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full ${
                  i === 0 ? "bg-[#ef476f]" : "bg-white/30"
                }`}
              />
            ))}
          </div>

          {/* Botão CTA corrigido */}
          <div className="mt-10">
            <button className="flex items-center gap-2 border border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-[#1c1c2b] transition-all">
              View All Work
              <ArrowUpRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
