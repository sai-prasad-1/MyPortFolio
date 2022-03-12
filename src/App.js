
import './App.css';
import About from './components/About';
import HeroSection from './components/HeroSection';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Qualifications from './components/Qualifications';
import Services from './components/Services';
import Skills from './components/Skills';

function App() {

  return (
    <>
    {/* <Loader/> */}
    <Navbar/>
    <main className="main">
    <HeroSection/> 
    <About/>
    <Skills/>
    <Qualifications/>
    <Services/>                                               
    </main>                                                                 
    </>
  );
}

export default App;
