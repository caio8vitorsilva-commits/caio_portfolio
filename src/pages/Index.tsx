import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { IlluminatedHero } from '@/components/ui/illuminated-hero';
import { RobotSection } from '@/components/RobotSection';

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      {showIntro && (
        <IlluminatedHero onComplete={() => setShowIntro(false)} />
      )}
      <div className={`min-h-screen bg-background transition-opacity duration-500 ${showIntro ? 'opacity-0' : 'opacity-100'}`}>
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <RobotSection />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
