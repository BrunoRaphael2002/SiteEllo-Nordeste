import { ShieldCheck, Eye, Smartphone, Users } from "lucide-react";
import img2 from "../assets/4.jpg"; // Substitua pela imagem desejada

const diferenciais = [
  {
    icon: <ShieldCheck size={28} className="text-red-600" />,
    title: "Segurança Total",
    description: "Soluções 24h com resposta imediata e cobertura completa para condomínios e empresas.",
  },
  {
    icon: <Eye size={28} className="text-red-600" />,
    title: "Monitoramento Inteligente",
    description: "Tecnologia avançada com detecção de movimentos e alertas automáticos por IA.",
  },
  {
    icon: <Smartphone size={28} className="text-red-600" />,
    title: "Acesso via App",
    description: "Controle total através do nosso aplicativo: entradas, câmeras e notificações em tempo real.",
  },
  {
    icon: <Users size={28} className="text-red-600" />,
    title: "Atendimento Personalizado",
    description: "Equipe especializada para entender e atender às necessidades do seu condomínio.",
  },
];

export default function DiferenciaisSection() {
  return (
    <section id="diferenciais" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 items-center gap-16 relative z-10">
        {/* Texto dos diferenciais */}
        <div>
          <span className="inline-flex items-center text-sm text-red-600 font-medium mb-2">
            <span className="w-2 h-2 rounded-full bg-red-600 mr-2" /> Nossos Diferenciais
          </span>
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Por que escolher nossa empresa?</h2>
          <p className="text-gray-600 mb-6">
            Oferecemos soluções completas e inovadoras em segurança eletrônica para proteger o que mais importa.
          </p>

          <div className="space-y-6">
            {diferenciais.map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="mt-8 inline-flex items-center text-sm text-red-600 font-semibold hover:underline">
            Solicite uma demonstração →
          </button>
        </div>

        {/* Imagem à direita */}
        <div className="relative">
          <img
            src={img2}
            alt="Monitoramento eletrônico"
            className="rounded-2xl shadow-xl w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Fundo de bolinhas */}
      <div className="absolute inset-0 bg-[radial-gradient(#eee_1px,transparent_1px)] bg-[size:16px_16px] z-0" />
    </section>
  );
}
