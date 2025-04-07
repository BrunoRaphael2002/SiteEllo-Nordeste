import img1 from '../assets/1.jpg';
// src/components/AboutSection.jsx
export default function AboutSection() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 items-center gap-16 relative z-10">
        {/* Imagem + sobreposição */}
        <div className="relative">
          <img
            src={img1}
            alt="Equipe administrativa"
            className="rounded-2xl shadow-xl w-full h-auto object-cover"
          />
          <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-md shadow-md rounded-xl p-3 flex items-center space-x-3">
            {/* Avatares */}
            <div className="flex -space-x-2">
              {["/avatar1.jpg", "/avatar2.jpg", "/avatar3.jpg", "/avatar4.jpg"].map((src, index) => (
                <img
                  key={index}
                  src={img1}
                  alt={`avatar-${index}`}
                  className="w-8 h-8 rounded-full border-2 border-white"
                />
              ))}
            </div>
            <span className="text-sm font-medium text-gray-700">25k+ clientes satisfeitos</span>
          </div>
        </div>

        {/* Texto */}
        <div>
          <span className="inline-flex items-center text-sm text-red-600 font-medium mb-2">
            <span className="w-2 h-2 rounded-full bg-red-600 mr-2" /> Sobre a empresa
          </span>
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Sobre a Nossa Administradora</h2>
          <p className="text-gray-600 mb-6">
            Somos uma empresa especializada na gestão de condomínios residenciais e comerciais, oferecendo serviços completos com total transparência, eficiência e tecnologia.
          </p>

          {/* Blocos de destaque */}
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-xl">
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
              <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-xl">
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

          {/* CTA */}
          <button className="mt-8 inline-flex items-center text-sm text-red-600 font-semibold hover:underline">
            Solicite um orçamento →
          </button>
        </div>
      </div>

      {/* Padrão de fundo de bolinhas (fake grid) */}
      <div className="absolute inset-0 bg-[radial-gradient(#eee_1px,transparent_1px)] bg-[size:16px_16px] z-0" />
    </section>
  );
}
