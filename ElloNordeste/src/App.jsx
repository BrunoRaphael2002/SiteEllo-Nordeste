import HeroCarousel from './Components/Carrosel'
import Header from './Components/Header'
import ContatoForm from './Sections/Contatoform'
import ContatoInfo from './Sections/ContatoInfo'
import DiferenciaisSection from './Sections/Diferenciais'
import ServicesSection from './Sections/Servicos'
import AboutSection from './Sections/Sobre'
import LocationSection from './Sections/Localizacao'
import Footer from './Components/Footer'

// Novas seções com base no novo layout visual e cores da logo (azul e vermelho)
import CTASection from './Sections/CTA'
import NumerosSection from './Sections/Numeros'
import ClientesAtendidosSection from './Sections/ClientesAtendidos'

function App() {
  return (
    <>
      {/* Cabeçalho com nova identidade visual (azul, branco e vermelho da logo) */}
      <Header />

      {/* Seção Hero com carrossel de imagens e CTA centralizado */}
      <HeroCarousel />

      {/* Seção de serviços com cards icônicos modernos */}
      <ServicesSection />

      {/* Seção sobre com imagem lateral e texto visual */}
      <AboutSection />

      {/* Seção de números e conquistas da empresa */}
      <NumerosSection />

      {/* Seção de diferenciais com novos cards e cores */}
      <DiferenciaisSection />

      {/* Seção com logos ou depoimentos de condomínios atendidos */}
      <ClientesAtendidosSection />

      {/* Seção CTA com fundo destacado, botão chamativo (azul/vermelho) */}
      <CTASection />

      {/* Contato com form e dados separados e visuais modernos */}
      <ContatoForm />
      <ContatoInfo />

      {/* Localização com iframe responsivo e estilo claro */}
      <LocationSection />

      {/* Rodapé limpo com colunas e tons neutros */}
      <Footer />
    </>
  )
}

export default App
