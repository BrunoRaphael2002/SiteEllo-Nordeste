import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import HorarioModal from "../Components/modal";
import Toast from "../components/Toast"; // ⬅ toast importado

export default function SessaoCombinada() {
  const formRef = useRef();

  const [formData, setFormData] = useState({
    from_name: "",
    reply_to: "",
    assunto: "",
    message: "",
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [showToast, setShowToast] = useState(false); // ⬅ controla o toast

  const feriadoMensagem = "";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSendEmail = (e) => {
    e.preventDefault();

    // sua lógica real de envio aqui (ex.: EmailJS)
   // alert("📧 Email enviado (simulação). Configure o EmailJS para ativar!");//

    // 🔥 LIMPAR FORMULÁRIO
    setFormData({
      from_name: "",
      reply_to: "",
      assunto: "",
      message: "",
    });

    formRef.current.reset();

    // 🔥 MOSTRAR TOAST
    setShowToast(true);

    // 🔥 OCULTAR TOAST AUTOMÁTICO
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleSendWhatsApp = () => {
    const { from_name, reply_to, assunto, message } = formData;

    const text = `
Olá! Vim do site e gostaria de mais informações:
👤 Nome: ${from_name}
📧 Email: ${reply_to}
📝 Assunto: ${assunto}
💬 Mensagem: ${message}
    `;

    const url = `https://api.whatsapp.com/send?phone=5583991316577&text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="py-20 bg-[#f4f7fb]">
      <div className="max-w-6xl mx-auto px-6">

        {/* TOAST */}
        <Toast show={showToast} message="E-mail enviado com sucesso!" />

        {/* TÍTULO */}
        <div className="text-center mb-14">
          <p className="text-sm text-blue-600 font-medium">Entrar em Contato</p>
          <h2 className="text-4xl font-bold text-gray-900 mt-2">Fale Conosco</h2>
          <p className="text-gray-600 mt-3">
            Entre em contato pelos nossos canais ou preencha o formulário abaixo
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* FORMULÁRIO */}
          <div className="lg:col-span-2 bg-white shadow-xl rounded-2xl p-10">
            <form ref={formRef} className="grid gap-6" onSubmit={handleSendEmail}>
              
              {/* Nome */}
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-700">Seu Nome</label>
                <input
                  name="from_name"
                  className="p-3 border rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-500"
                  placeholder="João Silva"
                  required
                  onChange={handleChange}
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-700">Seu E-mail</label>
                <input
                  name="reply_to"
                  type="email"
                  className="p-3 border rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-500"
                  placeholder="joao@exemplo.com"
                  required
                  onChange={handleChange}
                />
              </div>

              {/* Assunto */}
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-700">Assunto</label>
                <input
                  name="assunto"
                  className="p-3 border rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-500"
                  placeholder="Dúvida sobre serviços"
                  required
                  onChange={handleChange}
                />
              </div>

              {/* Mensagem */}
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-700">Mensagem</label>
                <textarea
                  name="message"
                  rows="4"
                  className="p-3 border rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-500"
                  placeholder="Sua mensagem aqui..."
                  required
                  onChange={handleChange}
                ></textarea>
              </div>

              {/* Botões */}
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <button
                  type="submit"
                  className="flex-1 bg-blue-800 hover:bg-blue-900 text-white font-semibold py-3 rounded-lg"
                >
                  Enviar via E-mail
                </button>

                <button
                  type="button"
                  onClick={handleSendWhatsApp}
                  className="flex-1 bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-lg"
                >
                  Enviar via WhatsApp
                </button>
              </div>
            </form>
          </div>

          {/* LADO DIREITO */}
          <div className="flex flex-col gap-6">

            {/* TELEFONE */}
            <InfoCard
              Icon={Phone}
              title="Telefone"
              text="(83) 99131-6577"
              onClick={() => window.open("https://wa.me/5583991316577", "_blank")}
            />

            {/* EMAIL */}
            <InfoCard
              Icon={Mail}
              title="E-mail"
              text="cristiano@ellonordeste.com.br"
              onClick={() => (window.location = "mailto:cristiano@ellonordeste.com.br")}
            />

            {/* ENDEREÇO */}
            <InfoCard
              Icon={MapPin}
              title="Endereço"
              text="AV. Maria Rosa 1458, Manaíra, João Pessoa - PB"
              onClick={() =>
                window.open("https://maps.app.goo.gl/3ionWZcNC3yXSW3t5", "_blank")
              }
            />

            {/* HORÁRIO */}
            <div
              onClick={() => setModalOpen(true)}
              className="bg-white p-6 rounded-2xl shadow-lg cursor-pointer hover:shadow-2xl transition"
            >
              <div className="flex items-start gap-4">
                <Clock className="w-8 h-8 text-purple-600" />
                <div>
                  <h4 className="text-gray-900 font-semibold">Horário de Funcionamento</h4>
                  <p className="mt-1 text-gray-600">Segunda à Sexta</p>
                  <p className="text-gray-700 font-medium mt-1">08:00 - 17:30</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* MODAL IMPORTADA */}
        <HorarioModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          feriadoMensagem={feriadoMensagem}
        />
      </div>
    </section>
  );
}


const InfoCard = ({ Icon, title, text, onClick }) => (
  <div
    className="bg-white p-6 rounded-2xl shadow-lg flex items-start gap-4 cursor-pointer hover:shadow-2xl transition"
    onClick={onClick}
  >
    <Icon className="w-8 h-8 text-purple-600" />
    <div>
      <h4 className="text-gray-900 font-semibold">{title}</h4>
      <p className="text-gray-600">{text}</p>
    </div>
  </div>
);
