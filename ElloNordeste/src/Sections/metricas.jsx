// src/components/MetricsSection.jsx
import React from 'react';
import { Users, MapPin, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

const metrics = [
  {
    label: 'Condomínios Atendidos',
    value: '100+',
    icon: Users,
    iconColor: 'text-blue-500',
    iconBg: 'bg-blue-100'
  },
  {
    label: 'Localidades de Atuação',
    lines: ['João Pessoa – PB', 'Recife – PE'],
    icon: MapPin,
    iconColor: 'text-green-500',
    iconBg: 'bg-green-100'
  },
  {
    label: 'Empresas Associadas',
    lines: ['TDG Monitoramento Eletrônico', 'Fe Síndico'],
    icon: Briefcase,
    iconColor: 'text-purple-500',
    iconBg: 'bg-purple-100'
  }
];

export default function MetricsSection() {
  return (
    <section className="relative bg-[#1F1F2B] text-white py-24 overflow-hidden">
      {/* Fundo pontilhado */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:20px_20px] opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Nossos Destaques
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {metrics.map((m, i) => {
            const Icon = m.icon;
            return (
              <motion.div
                key={i}
                className="bg-gray-800 rounded-2xl p-6 flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
              >
                <div className={`${m.iconBg} p-4 rounded-full mb-4`}
                     aria-hidden="true">
                  <Icon className={`${m.iconColor} w-8 h-8`} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{m.label}</h3>
                {m.value && (
                  <span className="text-4xl font-extrabold text-white mb-2">
                    {m.value}
                  </span>
                )}
                {m.lines && (
                  <ul className="space-y-1">
                    {m.lines.map((line, idx) => (
                      <li key={idx} className="text-sm text-gray-300">
                        {line}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
