import Header from './Components/header';
import Carrosel from './Components/Carrosel';
import Footer from './Components/Footer';

import Sobre from './Sections/Sobre';
import Diferenciais from './Sections/Diferenciais';
import MetricsSection from './Sections/metricas';
import Servicos from './Sections/servicos';
import AppSection from './Sections/aplicativo';

import ContatoInfo from './Sections/ContatoInfo';
import ContactSection from './Sections/Contatoform';
import Localizacao from './Sections/localizacao';

import SessaoCombinada from './Sections/infointens';
import AtendimentoSection from './Sections/atendimeto';
import ClienteGaleiraSeciton from './Sections/video'
import TestimonialSection from './Sections/Depoimentos';
import Faq from './Sections/faq';
import SolucoesDiferenciaisSection from './Sections/solucoes';
import ChatWidget from './Components/chat';
import { VisitCounter } from './Components/visit';
import CTA from './Sections/cta';


function App() {
  return (
    <>
      <Header />
      <Carrosel />
     
      <Sobre />
      <CTA/>
     
      <Diferenciais />
    
      <Servicos />
      <AppSection />
      <TestimonialSection/>
     
        <Faq/>
      <AtendimentoSection/>
      <SessaoCombinada/>
      <Localizacao/>
      <ChatWidget/>
     
      <Footer />
    </>
  );
}

export default App;
