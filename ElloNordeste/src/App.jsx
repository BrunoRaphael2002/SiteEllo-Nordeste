import Header from './Components/header';
import Carrosel from './Components/Carrosel';
import Footer from './Components/Footer';
import ContatoInfo from './Sections/ContatoInfo';
import Diferenciais from './Sections/Diferenciais';
import Sobre from './Sections/Sobre';
import Localizacao from './Sections/localizacao';
import Servicos from './Sections/servicos';
import MetricsSection from './Sections/metricas';
import VideoIntroSection from './Sections/video';
import ContactSection from './Sections/Contatoform';
import AppSection from './Sections/aplicativo';



function App() {
  return (
    <>
    <Header/>
    <Carrosel/>
    <Sobre/>
    <MetricsSection/>
    <Servicos/>
    <Diferenciais/>
    <AppSection/>
    <VideoIntroSection/>
    <ContatoInfo/>
    <ContactSection/>
    <Localizacao/>
    <Footer/>
    </>
  )
}

export default App