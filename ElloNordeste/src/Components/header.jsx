import { useState } from "react";
import { Menu, X, Phone, Mail, MapPin, Clock } from "lucide-react";
import logo from "../assets/logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Início", href: "#hero" },
    { name: "Sobre", href: "#sobre" },
    { name: "Serviços", href: "#servicos" },
    { name: "Contato", href: "#contato" },
    { name: "Área do Condomínio", href: "https://sistema.empresa.com", external: true },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow overflow-x-hidden">
      {/* Topo de contato */}
      <div className="hidden md:flex justify-between items-center py-2 text-sm text-gray-700 border-b px-6">
        <div className="flex items-center gap-6">
          <a href="tel:+12366000888" className="flex items-center gap-1 hover:text-red-600">
            <Phone className="w-4 h-4 text-red-600" />
            <span>+123 66 000 888</span>
          </a>
          <a href="mailto:contact@example.com" className="flex items-center gap-1 hover:text-red-600">
            <Mail className="w-4 h-4 text-red-600" />
            <span>contact@example.com</span>
          </a>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4 text-red-600" />
            <span>227 Marion Street, Columbia, SC</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4 text-red-600" />
            <span>08:00 am – 06:00 pm</span>
          </div>
        </div>
      </div>

      {/* Menu principal */}
      <div className="flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-16 w-auto" />
        </div>

        {/* Navegação desktop */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) =>
            item.name === "Área do Condomínio" ? (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 text-white px-4 py-1.5 rounded-lg hover:bg-red-700 transition-colors duration-200"
              >
                {item.name.toUpperCase()}
              </a>
            ) : (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-red-600 font-medium transition-colors duration-200 py-1"
              >
                {item.name.toUpperCase()}
              </a>
            )
          )}
        </nav>

        {/* Botão mobile */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 bg-white shadow-md text-right">
          {navItems.map((item) =>
            item.name === "Área do Condomínio" ? (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block py-2 mt-2 bg-red-600 text-white rounded-md font-semibold hover:bg-red-700 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </a>
            ) : (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 text-gray-700 hover:text-red-600 font-medium"
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </a>
            )
          )}

          {/* Informações extras mobile */}
          <div className="mt-4 border-t pt-4 text-sm text-gray-700 space-y-2">
            <a href="tel:+12366000888" className="flex items-center justify-end gap-2">
              <Phone className="w-4 h-4 text-red-600" />
              +123 66 000 888
            </a>
            <a href="mailto:contact@example.com" className="flex items-center justify-end gap-2">
              <Mail className="w-4 h-4 text-red-600" />
              contact@example.com
            </a>
            <div className="flex items-center justify-end gap-2">
              <Clock className="w-4 h-4 text-red-600" />
              08:00 am – 06:00 pm
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
