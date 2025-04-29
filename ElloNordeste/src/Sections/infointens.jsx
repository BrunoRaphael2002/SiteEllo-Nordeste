// src/components/SessaoCombinada.jsx
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, CheckCircle } from "lucide-react";
// import emailjs from "emailjs-com";

export default function SessaoCombinada() {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    from_name: "",
    reply_to: "",
    assunto: "",
    message: "",
  });
  const [successEmail, setSuccessEmail] = useState(false);
  const [successWhatsApp, setSuccessWhatsApp] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSendEmail = (e) => {
    e.preventDefault();
    // emailjs.sendForm(...)
    //   .then(() => {
    //     setSuccessEmail(true);
    //     setTimeout(() => setSuccessEmail(false), 5000);
    //   })
    //   .catch(console.error);
    setSuccessEmail(true);
    setTimeout(() => setSuccessEmail(false), 5000);
    formRef.current.reset();
    setFormData({ from_name: "", reply_to: "", assunto: "", message: "" });
  };

  const handleSendWhatsApp = () => {
    const { from_name, reply_to, assunto, message } = formData;
    let text = `Olá, vim do site e gostaria de mais informações.`;
    text += `\nNome: ${from_name}`;
    text += `\nEmail: ${reply_to}`;
    text += `\nAssunto: ${assunto}`;
    text += `\nMensagem: ${message}`;
    const url = `https://api.whatsapp.com/send?phone=558312345678&text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
    setSuccessWhatsApp(true);
    setTimeout(() => setSuccessWhatsApp(false), 5000);
  };

  return (
    <section id="contato" className="relative py-20 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#f5f5f5_1px,transparent_1px)] bg-[size:20px_20px] z-0 pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Fale Conosco
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Entre em contato pelos nossos canais ou preencha o formulário.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Formulário */}
          <motion.div
            className="col-span-1 lg:col-span-2 bg-white rounded-3xl p-8 md:p-12 shadow-2xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form ref={formRef} onSubmit={handleSendEmail} className="grid gap-6">
              <FloatingInput
                label="Seu Nome"
                name="from_name"
                onChange={handleChange}
              />
              <FloatingInput
                label="Seu E-mail"
                name="reply_to"
                type="email"
                onChange={handleChange}
              />
              <FloatingInput
                label="Assunto"
                name="assunto"
                onChange={handleChange}
              />
              <FloatingTextarea
                label="Mensagem"
                name="message"
                rows={5}
                onChange={handleChange}
              />

              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  className="flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-4 rounded-full shadow-lg transition-all duration-300"
                >
                  Enviar via E-mail
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  type="button"
                  onClick={handleSendWhatsApp}
                  className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-4 rounded-full shadow-lg transition-all duration-300"
                >
                  Enviar via WhatsApp
                </motion.button>
              </div>

              {(successEmail || successWhatsApp) && (
                <div className="mt-6 flex items-center justify-center gap-3 bg-green-100 text-green-700 p-4 rounded-lg border border-green-300 shadow">
                  <CheckCircle className="w-6 h-6" />
                  <p className="text-sm font-medium">
                    {successEmail
                      ? "Email enviado com sucesso!"
                      : "Mensagem via WhatsApp iniciada!"}
                  </p>
                </div>
              )}
            </form>
          </motion.div>

          {/* Contatos e mapa */}
          <motion.div
            className="flex flex-col justify-start gap-8"
            initial="hidden"
            whileInView="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.2 } }
            }}
            viewport={{ once: true }}
          >
            {/* Info items */}
            {infoItems.map(({ Icon, label, value, href, bg }, idx) => (
              <motion.a
                key={idx}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${bg} text-white rounded-2xl p-6 flex items-center gap-4 shadow-lg hover:shadow-xl transition-shadow duration-300`}
                variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
              >
                <Icon className="w-8 h-8" />
                <div className="text-left">
                  <h4 className="font-semibold">{label}</h4>
                  <p className="text-sm">{value}</p>
                </div>
              </motion.a>
            ))}

            {/* Mapa sem grayscale */}
            <motion.div
              className="w-full h-64 rounded-2xl overflow-hidden shadow-lg border border-gray-200"
              variants={{ hidden: { opacity: 0, scale: 0.95 }, show: { opacity: 1, scale: 1 } }}
            >
              <iframe
                title="Localização"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.2018838434637!2d-34.84216112587693!3d-7.102585992900748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7acdd10e3512321%3A0xc27c36dd136b23cc!2sEllo%20Administração%20de%20Condomínios!5e0!3m2!1spt-BR!2sbr!4v1744595161093!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Dados de contato
const infoItems = [
  {
    Icon: Phone,
    label: "Telefone",
    value: "(83) 1234‑5678",
    href: "tel:+558312345678",
    bg: "bg-red-600"
  },
  {
    Icon: Mail,
    label: "E‑mail",
    value: "contato@elloadmin.com.br",
    href: "mailto:contato@elloadmin.com.br",
    bg: "bg-blue-600"
  },
  {
    Icon: MapPin,
    label: "Endereço",
    value: "Rua Exemplo, 123 – João Pessoa, PB",
    href: "https://goo.gl/maps/exemplo",
    bg: "bg-green-600"
  }
];

// Componentes auxiliares
function FloatingInput({ label, name, type = "text", onChange }) {
  return (
    <div className="relative">
      <input
        id={name}
        name={name}
        type={type}
        placeholder=" "
        required
        onChange={onChange}
        className="peer w-full p-4 pt-6 bg-white border border-gray-300 rounded-lg text-base placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
      <label
        htmlFor={name}
        className="absolute left-4 top-4 text-gray-500 text-sm transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1.5 peer-focus:text-sm peer-focus:text-blue-500"
      >
        {label}
      </label>
    </div>
  );
}

function FloatingTextarea({ label, name, rows = 4, onChange }) {
  return (
    <div className="relative">
      <textarea
        id={name}
        name={name}
        rows={rows}
        placeholder=" "
        required
        onChange={onChange}
        className="peer w-full p-4 pt-6 bg-white border border-gray-300 rounded-lg text-base placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
      />
      <label
        htmlFor={name}
        className="absolute left-4 top-4 text-gray-500 text-sm transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1.5 peer-focus:text-sm peer-focus:text-blue-500"
      >
        {label}
      </label>
    </div>
  );
}
