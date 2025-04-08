// src/Sections/ContatoInfo.jsx
import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const infoItems = [
  {
    Icon: Phone,
    text: "(83) 1234-5678",
  },
  {
    Icon: Mail,
    text: "contato@elloadmin.com.br",
  },
  {
    Icon: MapPin,
    text: "Rua Exemplo, 123 - João Pessoa, PB",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function ContatoInfo() {
  return (
    <section id="contato-info" className="bg-gray-50 py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Entre em Contato
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {infoItems.map(({ Icon: IconComponent, text }, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-gray-700 hover:shadow-xl transition-shadow"
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
            >
              <IconComponent className="w-10 h-10 text-red-500 mb-4" />
              <p className="text-lg font-medium">{text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
