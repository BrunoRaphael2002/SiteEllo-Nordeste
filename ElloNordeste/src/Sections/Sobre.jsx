import imgMain from "../assets/4.jpg";     // imagem grande principal
import img2 from "../assets/4.jpg";       // mini imagem 1
import img3 from "../assets/4.jpg";       // mini imagem 2
import img4 from "../assets/4.jpg";       // mini imagem 3

export default function AboutSection() {
  return (
    <section className="py-24 bg-[#f9fafb]">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">

        {/* --- TEXTO ESQUERDA --- */}
        <div>
          <span className="text-sm font-medium text-blue-700">
            Sobre Nós
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Sobre a Nossa <br /> Administradora
          </h2>

          <p className="text-gray-600 mb-6">
            Atuando no mercado desde o ano de 1987, nossa empresa tem se
            especializado em oferecer aos clientes uma cesta de serviços que se
            encaixe dentro das necessidades que sua administração exige.
          </p>

          <p className="text-gray-600 mb-10">
            Administrar condomínios, ratear despesas, minimizar custos e
            maximizar serviços são atividades essenciais que, quando bem
            geridas, trazem tranquilidade e bem-estar a todos os envolvidos.
          </p>

          {/* --- LISTA DE ITENS --- */}
          <div className="space-y-6">
            {/* Item 1 */}
            <div className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full border-2 border-red-500 flex items-center justify-center">
                <span className="text-red-500 text-lg">✓</span>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900">
                  Atendimento Personalizado
                </h4>
                <p className="text-gray-600 text-sm">
                  Atendimento humanizado com foco em síndicos e moradores,
                  promovendo soluções rápidas e eficazes.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full border-2 border-red-500 flex items-center justify-center">
                <span className="text-red-500 text-lg">✓</span>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900">
                  Gestão Transparente
                </h4>
                <p className="text-gray-600 text-sm">
                  Priorizamos a transparência em todos os processos, com
                  relatórios claros e acompanhamento em tempo real.
                </p>
              </div>
            </div>
          </div>

          {/* BOTÃO */}
          <a
            href="#contato"
            className="mt-10 inline-block bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-full font-semibold transition-all"
          >
            Solicite uma Proposta →
          </a>
        </div>

        {/* --- IMAGEM DIREITA --- */}
        <div className="relative">
          <div className="rounded-3xl overflow-hidden shadow-xl">
            <img src={imgMain} alt="Administração de condomínios" className="w-full object-cover" />
          </div>

          {/* Mini galeria igual ao layout */}
          <div className="grid grid-cols-3 gap-3 mt-4">
            <img src={img2} className="rounded-xl object-cover h-28 w-full" />
            <img src={img3} className="rounded-xl object-cover h-28 w-full" />
            <img src={img4} className="rounded-xl object-cover h-28 w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
