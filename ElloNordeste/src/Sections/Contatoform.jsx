// src/Sections/ContatoForm.jsx
const ContatoForm = () => {
  return (
    <section className="bg-white py-12 px-6" id="formulario-contato">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Fale Conosco</h2>
        <form className="space-y-6">
          <input
            type="text"
            placeholder="Seu nome"
            className="w-full p-3 border rounded-md"
          />
          <input
            type="email"
            placeholder="Seu e-mail"
            className="w-full p-3 border rounded-md"
          />
          <textarea
            placeholder="Sua mensagem"
            rows="5"
            className="w-full p-3 border rounded-md"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
          >
            Enviar Mensagem
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContatoForm;
