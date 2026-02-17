// src/components/Footer.jsx
import React from 'react';
import Logo from "../assets/logorv.png";
import { Facebook, Instagram, Linkedin, MapPin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo e Descrição */}
        <div className="flex flex-col items-start">
          <img src={Logo} alt="Ello Nordeste Logo" className="w-36 mb-4" />
          <p className="text-sm text-gray-400">
            ELLO NORDESTE<br />
            Administradora de Condomínios
          </p>
        </div>

        {/* Navegação */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Navegação</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#sobre" className="hover:text-white transition-colors">Sobre</a></li>
            <li><a href="#servicos" className="hover:text-white transition-colors">Serviços</a></li>
            <li><a href="#contato" className="hover:text-white transition-colors">Contato</a></li>
          </ul>
        </div>

        {/* Contato */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Contato</h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-blue-500" />
              <a href="tel:+558399131657" className="hover:text-white transition-colors">(83)99131-6577</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-blue-500" />
              <a href="mailto:cristiano@ellonordeste.com.br" className="hover:text-white transition-colors">cristiano@ellonordeste.com.br</a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="w-5 h-5 text-blue-500 mt-1" />
              <span>AV. Maria Rosa 1458, Manaíra<br />João Pessoa – PB</span>
            </li>
          </ul>
        </div>

        {/* Redes Sociais */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Redes Sociais</h3>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Facebook" className="hover:text-white transition-colors">
              <Facebook className="w-6 h-6 text-gray-400 hover:text-blue-500" />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-white transition-colors">
              <Instagram className="w-6 h-6 text-gray-400 hover:text-pink-500" />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-white transition-colors">
              <Linkedin className="w-6 h-6 text-gray-400 hover:text-blue-700" />
            </a>
          </div>
        </div>
      </div>

      {/* Direitos Autorais */}
      <div className="mt-12 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} ELLO NORDESTE. Todos os direitos reservados.
      </div>
    </footer>
  );
}
