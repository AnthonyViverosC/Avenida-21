import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Carta from './components/Carta.jsx';
import Experiencia from './components/Experiencia.jsx';
import Reservas from './components/Reservas.jsx';
import Ubicacion from './components/Ubicacion.jsx';
import Footer from './components/Footer.jsx';
import WhatsAppFloat from './components/WhatsAppFloat.jsx';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Carta />
        <Experiencia />
        <Reservas />
        <Ubicacion />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
