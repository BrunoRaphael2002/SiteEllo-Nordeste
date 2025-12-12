// src/components/HorarioModal.jsx
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function HorarioModal({ isOpen, onClose, feriadoMensagem }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white rounded-xl shadow-2xl p-8 w-[90%] max-w-md relative"
          >
            {/* Botão fechar */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 p-1 text-gray-500 hover:text-gray-700"
            >
              <X className="w-6 h-6" />
            </button>

                    <h3 className="text-xl font-bold text-gray-800 mb-4">
              Horário de Funcionamento
            </h3>

            <ul className="text-gray-700 space-y-1 mb-4">
              <li>Segunda — 08:00 às 17:30</li>
              <li>Terça — 08:00 às 17:30</li>
              <li>Quarta — 08:00 às 17:30</li>
              <li>Quinta — 08:00 às 17:30</li>
              <li>Sexta — 08:00 às 17:30</li>
              <li className="font-semibold">Sábado e Domingo — Fechado</li>
            </ul>

        

            {feriadoMensagem && (
              <div className="mt-4 p-3 bg-red-100 border border-red-300 text-red-700 rounded-lg">
                {feriadoMensagem}
              </div>
            )}

            {/* Botão fechar */}
            <button
              onClick={onClose}
              className="w-full mt-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition"
            >
              Entendido
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
