
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Qualifications from './components/Qualifications';
import Services from './components/Services';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';

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
    <Portfolio/>
    <Testimonials/>
    <Contact/>                                               
    </main>  
    <Footer/>                                                               
    </>
  );
}

export default App;
