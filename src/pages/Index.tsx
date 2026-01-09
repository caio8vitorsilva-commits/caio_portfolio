import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import RobotSection from '@/components/RobotSection';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <RobotSection />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
