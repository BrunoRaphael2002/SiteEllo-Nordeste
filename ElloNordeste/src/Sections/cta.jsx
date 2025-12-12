// src/components/CTA.jsx
import React from "react";
import { motion } from "framer-motion";

export default function CTA() {
      const whatsappNumber = "5583991316577";

  const message = encodeURIComponent(
    "Olá! Vim do site e gostaria de agendar minha visita"
  );

  const handleClick = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };
  return (
    <section
      className="relative py-20 bg-gradient-to-r from-blue-600 to-blue-900 text-white text-center"
      style={{ backgroundSize: "100% 100%", backgroundPosition: "center" }}
    >
      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-6"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4">
          Pronto para Transformar Sua Gestão?
        </h2>
        <p className="text-lg mb-8">
          Descubra como a Ello Nordeste pode melhorar significativamente a
          administração do seu condomínio.
        </p>

        <div className="flex justify-center gap-6">
          <a
            onClick={handleClick}
            className="bg-white text-blue-600 hover:bg-gray-100 text-lg py-4 px-8 rounded-full font-semibold transition duration-300"
          >
            Venha nos visitar →
          </a>
      
        </div>
      </motion.div>
    </section>
  );
}
