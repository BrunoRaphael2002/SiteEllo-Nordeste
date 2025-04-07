export default function Footer() {
    return (
      <footer className="bg-gray-900 text-gray-200 py-10 mt-16">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div>
            <h2 className="text-xl font-bold mb-4">AdminCondo</h2>
            <p className="text-sm">
              Administradora de condomínios especializada em gestão transparente e eficaz.
            </p>
          </div>
  
          {/* Navegação */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#sobre" className="hover:text-white">Sobre</a></li>
              <li><a href="#servicos" className="hover:text-white">Serviços</a></li>
              <li><a href="#contato" className="hover:text-white">Contato</a></li>
            </ul>
          </div>
  
          {/* Contato */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-2 text-sm">
              <li>Email: contato@admincondo.com.br</li>
              <li>Telefone: (11) 99999-9999</li>
              <li>Endereço: Av. Exemplo, 123 - SP</li>
            </ul>
          </div>
  
          {/* Redes sociais */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white">Facebook</a>
              <a href="#" className="hover:text-white">Instagram</a>
              <a href="#" className="hover:text-white">LinkedIn</a>
            </div>
          </div>
        </div>
  
        {/* Direitos autorais */}
        <div className="mt-10 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} AdminCondo. Todos os direitos reservados.
        </div>
      </footer>
    );
  }

  