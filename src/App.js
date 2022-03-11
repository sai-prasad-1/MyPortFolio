
import './App.css';
import About from './components/About';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Navbar/>
    <main class="main">
    <HeroSection/> 
    <About/>                                               
    </main>                                                                 
    </>
  );
}

export default App;
