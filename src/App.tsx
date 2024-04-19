import "./App.css";
import FooterSection from "./components/FooterSection";
import HeroHeader from "./components/HeroHeader";
import DrawerAppBar from "./components/Navbar";
import ValuesSection from "./components/ValuesSection";
import Avantage from './components/Avantage'
import Formule from './components/Formule'
import Footer from './components/Footer';
import Instagram from './components/Instagram';

function App() {
  return (
    <>
      <DrawerAppBar />
      <HeroHeader />
      <ValuesSection />
      <Avantage/>
      <Instagram/>
      <Formule />
      <FooterSection />
      <Footer/>
    </>
  );
}

export default App;