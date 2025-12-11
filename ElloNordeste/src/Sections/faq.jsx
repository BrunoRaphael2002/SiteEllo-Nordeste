import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Faq() {
  const faqs = [
    {
      question: "Como funciona a administração do condomínio pela Ello Nordeste?",
      answer:
        "Nossa equipe assume toda a gestão administrativa, financeira e operacional, oferecendo transparência, relatórios mensais, atendimento dedicado e acesso ao aplicativo do condômino."
    },
    {
      question: "O aplicativo do condômino está incluso no serviço?",
      answer:
        "Sim! Todos os condôminos têm acesso ao app com 2ª via de boletos, comunicados, documentos, extratos e muito mais."
    },
    {
      question: "Quais são as formas de comunicação com o síndico?",
      answer:
        "Oferecemos atendimento via portal, WhatsApp, e-mail e telefone. Nossa equipe responde rapidamente e acompanha todas as demandas."
    },
    {
      question: "Vocês atendem condomínios residenciais e comerciais?",
      answer:
        "Sim! Administramos condomínios residenciais, comerciais, horizontais e associações."
    },
    {
      question: "É possível migrar minha administração atual para a Ello Nordeste?",
      answer:
        "Sim. O processo é simples e nossa equipe acompanha toda a transição, garantindo que nenhum dado seja perdido."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* Título */}
        <span className="px-4 py-1 bg-red-100 text-red-600 rounded-full text-sm font-medium">
          Perguntas Frequentes
        </span>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
          FAQ – Dúvidas Comuns
        </h2>

        <p className="text-gray-600 mt-3 mb-10">
          Encontre respostas para as principais perguntas sobre nossos serviços.
        </p>

        {/* Lista de FAQs */}
        <div className="text-left space-y-4">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl p-4 transition-all bg-gray-50 hover:bg-gray-100"
            >
              {/* Pergunta */}
              <button
                onClick={() => toggleFAQ(index)}
                className="flex items-center justify-between w-full"
              >
                <h3 className="font-semibold text-lg text-gray-900">
                  {faq.question}
                </h3>

                <ChevronDown
                  className={`w-6 h-6 text-gray-600 transition-transform ${
                    openIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>

              {/* Resposta */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-40 mt-3" : "max-h-0"
                }`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
