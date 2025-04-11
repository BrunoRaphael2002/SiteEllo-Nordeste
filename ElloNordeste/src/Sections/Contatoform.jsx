import { motion } from "framer-motion";
import img1 from "../assets/4.jpg";

export default function ContactSection() {
  return (
    <section
      className="relative bg-cover bg-center py-24 text-white"
      style={{ backgroundImage: `url(${img1})` }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        {/* Título e subtítulo */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-4 tracking-tight"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Solicite uma consultoria gratuita
        </motion.h2>
        <motion.p
          className="text-lg text-white/80 mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Fale com um especialista e entenda como podemos ajudar seu condomínio
        </motion.p>

        {/* Formulário refinado */}
        <motion.form
          className="bg-white/95 p-10 rounded-3xl shadow-2xl text-black grid gap-6 backdrop-blur-md"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 gap-6">
            <FloatingInput label="Seu nome" name="nome" type="text" required />
            <FloatingInput label="Seu e-mail" name="email" type="email" required />
          </div>

          <FloatingInput label="Assunto" name="assunto" type="text" required />
          <FloatingTextarea label="Mensagem" name="mensagem" required />

          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-red-500 hover:bg-red-600 text-white font-bold px-10 py-3 rounded-full shadow-md transition-all duration-300"
            >
              ENVIAR MENSAGEM
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

// Input com label flutuante
function FloatingInput({ label, name, type = "text", required = false }) {
  return (
    <div className="relative">
      <input
        type={type}
        name={name}
        required={required}
        placeholder=" "
        className="peer w-full p-4 pt-6 text-base bg-white border border-gray-300 rounded-xl placeholder-transparent focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-red-400"
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

// Textarea com label flutuante
function FloatingTextarea({ label, name, required = false }) {
  return (
    <div className="relative">
      <textarea
        name={name}
        rows={4}
        required={required}
        placeholder=" "
        className="peer w-full p-4 pt-6 text-base bg-white border border-gray-300 rounded-xl placeholder-transparent focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-red-400 resize-none"
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
