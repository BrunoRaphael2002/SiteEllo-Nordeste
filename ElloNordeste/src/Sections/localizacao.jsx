import React from "react";

const LocationSection = () => {
  return (
    <section className="bg-gray-100 py-12 px-4" id="localizacao">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Onde estamos</h2>
        <p className="text-lg text-gray-600 mb-6">
          Rua Exemplo, 123 - Bairro, Cidade - Estado
        </p>
        <div className="w-full h-96">
          <iframe
            title="Localização no Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.6927203737624!2d-46.65657218454576!3d-23.58002836883096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59d05f5e239d%3A0x579e5eaec1f64e6c!2sAv.%20Paulista%2C%201000%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001310-100!5e0!3m2!1spt-BR!2sbr!4v1615393993070!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            className="rounded-lg shadow-lg border-0"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
