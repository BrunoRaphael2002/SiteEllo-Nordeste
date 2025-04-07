// src/components/ServicesSection.jsx
import { Building2, ShieldCheck, FileText, Users, CalendarCheck2, MessageCircle } from "lucide-react"

const services = [
  {
    icon: <Building2 className="w-10 h-10 text-blue-600" />,
    title: "Administração de Condomínios",
    description: "Gestão completa e profissional com foco em transparência e eficiência.",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-blue-600" />,
    title: "Gestão Financeira",
    description: "Controle de receitas, despesas, inadimplência e prestação de contas.",
  },
  {
    icon: <FileText className="w-10 h-10 text-blue-600" />,
    title: "Assembleias e Documentação",
    description: "Organização de assembleias, atas, editais e toda parte burocrática.",
  },
  {
    icon: <Users className="w-10 h-10 text-blue-600" />,
    title: "Atendimento a Moradores",
    description: "Canal direto para solicitações e atendimento personalizado.",
  },
  {
    icon: <CalendarCheck2 className="w-10 h-10 text-blue-600" />,
    title: "Controle de Manutenções",
    description: "Agendamento e acompanhamento de serviços no condomínio.",
  },
  {
    icon: <MessageCircle className="w-10 h-10 text-blue-600" />,
    title: "Comunicação Eficiente",
    description: "Informativos digitais e contato rápido com síndicos e moradores.",
  },
]

export default function ServicesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Nossos Serviços</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition-all">
              <div className="mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
