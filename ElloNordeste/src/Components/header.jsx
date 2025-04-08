import { useState } from "react";
import { Menu, X, Phone, Mail, MapPin, Clock } from "lucide-react";
import logo from "../assets/logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Início", href: "#hero" },
    { name: "Sobre", href: "#sobre" },
    { name: "Serviços", href: "#servicos" },
    { name: "Portfólio", href: "#portfolio" },
    { name: "Páginas", href: "#pages" },
    { name: "Blog", href: "#blog" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow px-2">
      {/* Topo de contato */}
      <div className="hidden md:flex justify-between items-center py-2 text-sm bg-white text-gray-700 border-b">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1">
            <Phone className="w-4 h-4 text-red-600" />
            <span>+123 66 000 888</span>
          </div>
          <div className="flex items-center gap-1">
            <Mail className="w-4 h-4 text-red-600" />
            <span>contact@example.com</span>
          </div>
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
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-2">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-16 w-auto" />
        </div>

        {/* Navegação desktop */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-700 hover:text-red-600 font-medium transition-colors duration-200"
            >
              {item.name.toUpperCase()}
            </a>
          ))}
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
        <div className="md:hidden px-2 pb-4 bg-white shadow-md">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block py-2 text-gray-700 hover:text-red-600 font-medium"
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
