import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import RetroCompanion from '@/components/RetroCompanion';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <RetroCompanion />
      <main>
        <Hero />
        <About />
        <Experience />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
