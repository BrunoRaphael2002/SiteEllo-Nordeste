import { Quote } from "lucide-react";
import perfil1 from "../assets/4.jpg";
import perfil2 from "../assets/4.jpg";
import perfil3 from "../assets/4.jpg";

export default function TestimonialSection() {
  const testimonials = [
    {
      img: perfil1,
      text: `A Ello Nordeste transformou completamente a gestão do nosso condomínio. 
      Os relatórios diários, a transparência e o profissionalismo da equipe são incomparáveis. 
      Não tenho dúvidas em recomendar!`,
      author: "Dr. Carlos Silva",
      role: "Síndico – Condomínio Jardim das Flores",
      details: "150 unidades | 3 anos com Ello"
    },
    {
      img: perfil2,
      text: `Finalmente vemos transparência total nas contas. O portal digital facilita tudo 
      e o atendimento ao síndico é excepcional. Meus vizinhos também notaram 
      a qualidade da administração.`,
      author: "Dra. Marina Santos",
      role: "Síndica – Condomínio Solar do Parque",
      details: "200 unidades | 3 anos com Ello"
    },
    {
      img: perfil3,
      text: `Sistema dinâmico, relatórios em tempo real e uma equipe que realmente se importa. 
      Essas ferramentas e esse profissionalismo fizeram toda a diferença 
      na administração do nosso condomínio.`,
      author: "João Mendes",
      role: "Síndico – Condomínio Bela Vista",
      details: "100 unidades | 2 anos com Ello"
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-100 to-white">
      <div className="container mx-auto px-4 text-center max-w-5xl">
        
        <p className="text-sm text-blue-600 font-semibold mb-2">
          Histórias de Sucesso
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
          O que Nossos Clientes Dizem
        </h2>

        <p className="text-slate-600 mb-12 text-lg">
          Veja como a Ello Nordeste transformou a gestão de condomínios em toda a região
        </p>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg p-8 text-left border border-slate-200"
            >
              {/* PERFIL NO TOPO */}
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={item.img}
                  alt={item.author}
                  className="w-12 h-12 rounded-full object-cover border border-slate-300 shadow-sm"
                />
                <div>
                  <p className="font-semibold text-slate-900">{item.author}</p>
                  <p className="text-sm text-slate-600">{item.role}</p>
                  <p className="text-xs text-slate-500 mt-1">{item.details}</p>
                </div>
              </div>

              {/* ÍCONE E ESTRELAS */}
              <Quote className="w-6 h-6 text-blue-600 opacity-60 mb-4" />

              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-red-500 text-2xl leading-none">★</span>
                ))}
              </div>

              {/* DEPOIMENTO */}
              <p className="text-slate-700 text-lg leading-relaxed">
                “{item.text}”
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
