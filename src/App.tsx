import "./App.css";
import About from "./components/About";
import FooterSection from "./components/FooterSection";
import HeroHeader from "./components/HeroHeader";
import DrawerAppBar from "./components/Navbar";
import ValuesSection from "./components/ValuesSection";
import Formule from './components/Formule'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <DrawerAppBar />
      <HeroHeader />
      <About />
      <ValuesSection />
      <Formule />
      <FooterSection />
      <Footer/>
    </>
  );
}

export default App;
