// src/components/GaleriaClientesSection.jsx
import React, { useState } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import img1 from "../assets/4.jpg";

export default function GaleriaClientesSection() {
  const [selected, setSelected] = useState(null);

  const clientes = [
    { nome: "Jardim das Flores", bairro: "Centro", imagem: img1 },
    { nome: "Bela Vista", bairro: "Bela Vista", imagem: img1 },
    { nome: "Solar do Parque", bairro: "Parque das Árvores", imagem: img1 },
    { nome: "Vila Verde", bairro: "Jardim América", imagem: img1 },
    { nome: "Morada do Sol", bairro: "Vila Nova", imagem: img1 },
    { nome: "Porto Seguro", bairro: "Boa Vista", imagem: img1 },
    { nome: "Horizonte Azul", bairro: "São Francisco", imagem: img1 },
  ];

  return (
    <section id="galeria-clientes" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
        <span className="inline-flex items-center text-sm text-blue-700 font-medium mb-2">
          <span className="w-2 h-2 rounded-full bg-blue-700 mr-2" />
          Clientes & Bairros
        </span>
        <h2 className="text-4xl font-bold text-gray-800 mb-12">
          Onde Atuamos e Quem Confia em Nós
        </h2>

        {/* Grid com animações */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {clientes.map((c, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md cursor-pointer"
              onClick={() => setSelected(c)}
            >
              <div className="w-full h-48 overflow-hidden">
                <motion.img
                  src={c.imagem}
                  alt={c.nome}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <div className="p-4 text-left">
                <h3 className="text-lg font-semibold text-gray-800 truncate">
                  {c.nome}
                </h3>
                <p className="text-sm text-gray-500 truncate">
                  {c.bairro}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal com AnimatePresence */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl overflow-hidden max-w-md w-full shadow-lg relative"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <button
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 z-10"
                onClick={() => setSelected(null)}
                aria-label="Fechar"
              >
                <X size={24} />
              </button>
              <img
                src={selected.imagem}
                alt={selected.nome}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  {selected.nome}
                </h3>
                <p className="text-gray-600">Bairro: {selected.bairro}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Fundo de bolinhas */}
      <div className="absolute inset-0 bg-[radial-gradient(#eee_1px,transparent_1px)] bg-[size:16px_16px] z-0" />
    </section>
  );
}
