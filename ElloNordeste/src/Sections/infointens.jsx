import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

const infoItems = [
  {
    Icon: Phone,
    text: "Ligue para nós",
    subtext: "(83) 1234-5678",
    href: "tel:+558312345678",
  },
  {
    Icon: Mail,
    text: "Envie um e-mail",
    subtext: "contato@elloadmin.com.br",
    href: "mailto:contato@elloadmin.com.br",
  },
  {
    Icon: MapPin,
    text: "Nossa Localização",
    subtext: "Rua Exemplo, 123 - João Pessoa, PB",
    href: "https://goo.gl/maps/exemplo",
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function SessaoCombinada() {
  return (
    <section id="contato-combinado" className="py-20 bg-white relative overflow-hidden">
      {/* Fundo com padrão */}
      <div className="absolute inset-0 bg-[radial-gradient(#f5f5f5_1px,transparent_1px)] bg-[size:20px_20px] z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título da seção */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">Entre em Contato</h2>
          <p className="mt-4 text-gray-600">
            Fale conosco por nossos canais de atendimento ou envie sua mensagem pelo formulário.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulário */}
          <motion.div
            className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl max-w-md mx-auto lg:mx-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form
              className="grid gap-6"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Mensagem enviada com sucesso!");
              }}
            >
              <FloatingInput label="Seu Nome" name="nome" required />
              <FloatingInput label="Seu E-mail" name="email" type="email" required />
              <FloatingInput label="Assunto" name="assunto" required />
              <FloatingTextarea label="Mensagem" name="mensagem" required />

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="mt-4 w-full bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-full shadow-md transition-all duration-300"
              >
                Enviar Mensagem
              </motion.button>
            </form>
          </motion.div>

          {/* Informações de Contato e Mapa */}
          <motion.div
            className="flex flex-col justify-between gap-8"
            initial="hidden"
            whileInView="show"
            variants={containerVariants}
            viewport={{ once: true }}
          >
            {/* Cards de contato */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {infoItems.map(({ Icon, text, subtext, href }, idx) => (
                <motion.a
                  key={idx}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 rounded-xl p-6 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition hover:bg-gray-50"
                  variants={itemVariants}
                >
                  <Icon className="w-8 h-8 text-red-500 mb-3" />
                  <span className="text-sm font-semibold text-gray-700">{text}</span>
                  <span className="text-sm text-gray-500 mt-1 break-words">{subtext}</span>
                </motion.a>
              ))}
            </div>

            {/* Mapa */}
            <motion.div
              className="w-full h-52 sm:h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg border border-gray-200"
              variants={itemVariants}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <iframe
                title="Localização"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!2d3656.6927203737624!2d-46.65657218454576!3d-23.58002836883096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59d05f5e239d%3A0x579e5eaec1f64e6c!2sAv.%20Paulista%2C%201000%20-%20Bela%20Vista%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1615393993070!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Componentes auxiliares
function FloatingInput({ label, name, type = "text", required = false }) {
  return (
    <div className="relative">
      <input
        type={type}
        name={name}
        required={required}
        placeholder=" "
        className="peer w-full p-4 pt-6 text-base bg-white border border-gray-300 rounded-lg placeholder-transparent focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-red-400"
      />
      <label
        htmlFor={name}
        className="absolute left-4 top-4 text-gray-500 text-sm transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1.5 peer-focus:text-sm peer-focus:text-red-500"
      >
        {label}
      </label>
    </div>
  );
}

function FloatingTextarea({ label, name, required = false }) {
  return (
    <div className="relative">
      <textarea
        name={name}
        rows={4}
        required={required}
        placeholder=" "
        className="peer w-full p-4 pt-6 text-base bg-white border border-gray-300 rounded-lg placeholder-transparent focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-red-400 resize-none"
      />
      <label
        htmlFor={name}
        className="absolute left-4 top-4 text-gray-500 text-sm transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1.5 peer-focus:text-sm peer-focus:text-red-500"
      >
        {label}
      </label>
    </div>
  );
}
