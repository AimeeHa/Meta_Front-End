import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Header from './components/Header';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Highlights />
        <Testimonials />
        <About />
      </main>
      <Footer />
    </>
  );
}

export default App;
