import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Technology from '@/components/Technology';
import Speed from '@/components/Speed';
import Solutions from '@/components/Solutions';
import Differential from '@/components/Differential';
import About from '@/components/About';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import { useScrollReveal } from '@/hooks/useScrollReveal';

function App() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-white antialiased">
      <Header />
      <main>
        <Hero />
        <Technology />
        <Speed />
        <Solutions />
        <Differential />
        <About />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
