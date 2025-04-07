import Header from './Components/header';
import Carrosel from './Components/Carrosel';
import Footer from './Components/Footer';
import ContatoInfo from './Sections/ContatoInfo';
import ContatoForm from './Sections/Contatoform';
import Diferenciais from './Sections/Diferenciais';
import Sobre from './Sections/Sobre';
import Localizacao from './Sections/localizacao';
import Servicos from './Sections/servicos';



function App() {
  return (
    <>
    <Header/>
    <Carrosel/>
    <Sobre/>
    <Servicos/>
    <Diferenciais/>
    <ContatoInfo/>
    <ContatoForm/>
    <Localizacao/>
    <Footer/>
    </>
  )
}

export default App