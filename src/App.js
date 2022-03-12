
import './App.css';
import About from './components/About';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import Skills from './components/Skills';

function App() {
  return (
    <>
    <Navbar/>
    <main className="main">
    <HeroSection/> 
    <About/>
    <Skills/>                                               
    </main>                                                                 
    </>
  );
}

export default App;
