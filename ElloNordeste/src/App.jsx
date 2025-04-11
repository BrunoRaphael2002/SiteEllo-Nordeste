import Header from './Components/header';
import Carrosel from './Components/Carrosel';
import Footer from './Components/Footer';

import Sobre from './Sections/Sobre';
import Diferenciais from './Sections/Diferenciais';
import MetricsSection from './Sections/metricas';
import Servicos from './Sections/servicos';
import AppSection from './Sections/aplicativo';
import VideoIntroSection from './Sections/video';
import ContatoInfo from './Sections/ContatoInfo';
import ContactSection from './Sections/Contatoform';
import Localizacao from './Sections/localizacao';

function App() {
  return (
    <>
      <Header />
      <Carrosel />
      <Sobre />
     
      <MetricsSection />
      <Diferenciais />
      <AppSection />
      <Servicos />
      <VideoIntroSection />
      <ContatoInfo />
      <ContactSection />
      <Localizacao />
      <Footer />
    </>
  );
}

export default App;
