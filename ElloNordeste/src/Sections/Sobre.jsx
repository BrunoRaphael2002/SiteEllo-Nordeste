import img1 from '../assets/recepcionista.png';
// src/components/AboutSection.jsx
export default function AboutSection() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 items-center gap-16 relative z-10">
        {/* Imagem */}
        <div className="relative">
          <img
            src={img1}
            alt="Equipe administrativa"
            className="rounded-2xl shadow-xl w-full h-auto object-cover"
          />
          {/* Removido o bloco de 25k+ avatares */}
        </div>

        {/* Texto */}
        <div>
          <span className="inline-flex items-center text-sm text-blue-700 font-medium mb-2">
            <span className="w-2 h-2 rounded-full bg-blue-700 mr-2" /> Sobre a empresa
          </span>
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Sobre a Nossa Administradora</h2>
          <p className="text-gray-600 mb-6">
            Atuando no mercado desde o ano de 1987, nossa empresa tem se especializado em oferecer aos clientes, uma cesta de serviços que se encaixe dentro das necessidades que sua administração exige, pois administrar Condomínios, ratear despesas, minimizar custos maximizando serviços, são atividades necessárias que, quando bem geridas, trazem tranquilidade e bem estar a todos os envolvidos.
          </p>
          <p className="text-gray-600 mb-6 py-5">
            Além de contar com pessoal especializado para prestar toda a assessoria contábil, financeira e administrativa, o GRUPO ELLO conta com um sistema de informação atualizado e dinâmico que permite oferecer a nossos clientes posição diária de receita e despesas.
          </p>

          {/* Blocos de destaque */}
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xl">
                →
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Atendimento personalizado</h4>
                <p className="text-sm text-gray-600">
                  Atendimento humanizado com foco em síndicos e moradores, promovendo soluções rápidas e eficazes.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xl">
                →
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Gestão transparente</h4>
                <p className="text-sm text-gray-600">
                  Priorizamos a transparência em todos os processos, com relatórios claros e acompanhamento em tempo real.
                </p>
              </div>
            </div>
          </div>

          {/* Novo botão destacado */}
          <a
            href="#contato"
            className="mt-8 inline-flex items-center px-6 py-3 bg-blue-700 text-white rounded-full font-semibold hover:bg-blue-800 transition-all duration-300"
          >
            Solicite uma proposta →
          </a>
        </div>
      </div>

      {/* Padrão de fundo de bolinhas */}
      <div className="absolute inset-0 bg-[radial-gradient(#eee_1px,transparent_1px)] bg-[size:16px_16px] z-0" />
    </section>
  );
}
