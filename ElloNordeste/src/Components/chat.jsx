// src/components/ChatWidget.jsx
import React from "react";
import whatsapp from '../assets/whatsapp.png';

export default function ChatWidget() {
  const whatsappNumber = "5583991316577";

  const message = encodeURIComponent(
    "Olá! Vim do site e gostaria de mais informações."
  );

  const handleClick = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="
        fixed bottom-4 right-4
        bg-green-500
        p-2.5 rounded-full shadow-lg 
        z-50 cursor-pointer
        hover:bg-green-600 transition
        flex items-center justify-center
      "
      aria-label="Abrir WhatsApp"
    >
      <img 
        src={whatsapp} 
        alt="WhatsApp" 
        className="w-10 h-10"  // 🔥 AQUI aumentei o ícone
      />
    </button>
  );
}
