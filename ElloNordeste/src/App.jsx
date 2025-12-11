import Header from './Components/header';
import Carrosel from './Components/Carrosel';
import Footer from './Components/Footer';

import Sobre from './Sections/Sobre';
import Diferenciais from './Sections/Diferenciais';
import MetricsSection from './Sections/metricas';
import Servicos from './Sections/servicos';
import AppSection from './Sections/aplicativo';
/*import ContatoInfo from './Sections/ContatoInfo';
import ContactSection from './Sections/Contatoform';
import Localizacao from './Sections/localizacao';*/
import SessaoCombinada from './Sections/infointens';
import AtendimentoSection from './Sections/atendimeto';
import ClienteGaleiraSeciton from './Sections/video'
import TestimonialSection from './Sections/Depoimentos';
import Faq from './Sections/faq';
/*import ChatWidget from './Components/chat';
import { VisitCounter } from './Components/visit';
<ChatWidget/>
      <VisitCounter/>*/

function App() {
  return (
    <>
      <Header />
      <Carrosel />
      <Sobre />
     
      <MetricsSection />
      <Diferenciais />
    
      <Servicos />
      <AppSection />
      <TestimonialSection/>
      <ClienteGaleiraSeciton/>
        <Faq/>
      <AtendimentoSection/>
      <SessaoCombinada/>
      
      <Footer />
    </>
  );
}

export default App;
