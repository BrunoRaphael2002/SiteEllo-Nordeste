// src/Sections/ContatoInfo.jsx
import { Mail, Phone, MapPin } from 'lucide-react';

const ContatoInfo = () => {
  return (
    <section className="bg-gray-100 py-12 px-6" id="contato-info">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Entre em Contato</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <Phone className="w-8 h-8 text-blue-500 mb-2" />
            <p>(83) 1234-5678</p>
          </div>
          <div className="flex flex-col items-center">
            <Mail className="w-8 h-8 text-blue-500 mb-2" />
            <p>contato@elloadmin.com.br</p>
          </div>
          <div className="flex flex-col items-center">
            <MapPin className="w-8 h-8 text-blue-500 mb-2" />
            <p>Rua Exemplo, 123 - João Pessoa, PB</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContatoInfo;
