// src/components/AboutSection.jsx
export default function AboutSection() {
    return (
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 items-center gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Sobre a Nossa Administradora
            </h2>
            <p className="text-gray-700 mb-4">
              Somos uma empresa especializada na gestão de condomínios residenciais e comerciais, oferecendo serviços completos com total transparência, eficiência e tecnologia. 
            </p>
            <p className="text-gray-700 mb-4">
              Com uma equipe qualificada e atendimento humanizado, buscamos sempre o melhor para síndicos, condôminos e investidores. Nossa missão é simplificar a administração condominial e garantir tranquilidade para todos.
            </p>
            <button className="mt-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded-2xl hover:bg-blue-700 transition-all">
              Fale com a gente
            </button>
          </div>
          <div>
            <img
              src="https://source.unsplash.com/600x400/?office,team" 
              alt="Equipe administrativa"
              className="w-full rounded-2xl shadow-md"
            />
          </div>
        </div>
      </section>
    )
  }
  