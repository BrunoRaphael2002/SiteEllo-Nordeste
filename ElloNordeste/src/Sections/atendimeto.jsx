// src/components/AtendimentoSection.jsx
import React from "react";
import { Calendar, Clock, Phone } from "lucide-react";

export default function AtendimentoSection() {
  return (
    <section id="atendimento" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 font-sans text-gray-800">
        {/* Título */}
        <h2 className="text-5xl font-extrabold text-center mb-4">
          Horário de Funcionamento
        </h2>
        {/* Descrição */}
        <p className="text-center text-lg text-gray-600 mb-12">
          Nossa equipe está disponível para atendê‑lo de segunda a sexta‑feira.
        </p>
        {/* Informações em lista definicional */}
        <dl className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Dias */}
          <div className="text-center">
            <dt className="flex items-center justify-center space-x-2 text-lg font-semibold text-gray-800">
              <Calendar className="w-6 h-6 text-red-600" />
              <span>Dias</span>
            </dt>
            <dd className="mt-1 text-gray-600">Segunda a Sexta</dd>
          </div>
          {/* Horário */}
          <div className="text-center">
            <dt className="flex items-center justify-center space-x-2 text-lg font-semibold text-gray-800">
              <Clock className="w-6 h-6 text-red-600" />
              <span>Horário</span>
            </dt>
            <dd className="mt-1 text-gray-600">08:00 – 17:30</dd>
          </div>
          {/* Telefone */}
          <div className="text-center">
            <dt className="flex items-center justify-center space-x-2 text-lg font-semibold text-gray-800">
              <Phone className="w-6 h-6 text-red-600" />
              <span>Telefone</span>
            </dt>
            <dd className="mt-1">
              <a
                href="tel:+558399999999"
                className="text-red-600 hover:underline"
              >
                (83) 9999‑9999
              </a>
            </dd>
          </div>
        </dl>
      </div>
    </section>
);
}
