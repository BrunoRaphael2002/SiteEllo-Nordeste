export default function DiferenciaisSection() {
    const diferenciais = [
      {
        titulo: "Transparência Total",
        descricao: "Acompanhamento completo de despesas e receitas em tempo real.",
      },
      {
        titulo: "Atendimento Personalizado",
        descricao: "Equipe dedicada para atender síndicos e moradores com agilidade.",
      },
      {
        titulo: "Tecnologia de Ponta",
        descricao: "Sistema online para acessar boletos, atas e comunicados.",
      },
      {
        titulo: "Gestão Eficiente",
        descricao: "Redução de custos com foco na valorização do patrimônio.",
      },
    ];
  
    return (
      <section id="diferenciais" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Nossos Diferenciais
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {diferenciais.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition"
              >
                <h3 className="text-xl font-semibold mb-2">{item.titulo}</h3>
                <p className="text-sm text-gray-600">{item.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  