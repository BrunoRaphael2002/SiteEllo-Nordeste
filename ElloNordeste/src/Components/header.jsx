import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Início", href: "#hero" },
    { name: "Sobre", href: "#sobre" },
    { name: "Serviços", href: "#servicos" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200">
      <div className="flex items-center justify-between px-6 h-20">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-12 w-auto" />
          <div className="flex flex-col leading-none">
          </div>
        </div>

        {/* Navegação desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-700 hover:text-blue-700 font-medium transition-colors"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* CTA Desktop */}
        <a
          href="https://grupoello2017.superlogica.net/clients/areadocondomino/"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex bg-blue-700 text-white px-5 py-2 rounded-lg font-semibold transition-colors hover:bg-blue-800"
        >
          Área do Condomínio
        </a>

        {/* Botão Mobile */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-6 pb-4">
          <nav className="flex flex-col text-left">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="py-3 text-gray-700 border-b border-gray-100 font-medium hover:text-blue-700 transition-colors"
              >
                {item.name}
              </a>
            ))}

            {/* CTA Mobile */}
            <a
              href="https://grupoello2017.superlogica.net/clients/areadocondomino/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-3 bg-blue-700 text-white py-3 text-center rounded-lg font-semibold hover:bg-blue-800 transition-colors"
            >
              Área do Condomínio
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
