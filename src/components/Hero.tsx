import { ArrowDown } from 'lucide-react';
import WaveBackground from './WaveBackground';

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      <WaveBackground />
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pt-24">
        <div className="space-y-4">
          <h1 className="hero-title animate-fade-up">
            DESENVOLVEDOR
          </h1>
          <h2 className="hero-subtitle animate-fade-up-delay-1">
            CRIATIVO
          </h2>
        </div>

        <div className="mt-12 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div className="animate-fade-up-delay-2">
            <p className="section-number mb-2">// SOLUÇÕES WEB ESCALÁVEIS.</p>
          </div>

          <div className="max-w-md animate-fade-up-delay-3">
            <p className="text-foreground font-heading text-lg mb-2">
              Caio Vitor / Desenvolvedor Web
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Desenvolvedor em formação com 21 anos, movido pela paixão de criar 
              aplicações eficientes e modernas. Focado em desenvolvimento web 
              full-stack, buscando minha primeira oportunidade profissional.
            </p>
          </div>
        </div>

        <a 
          href="#sobre" 
          className="inline-flex items-center gap-2 mt-16 text-sm text-muted-foreground hover:text-foreground transition-colors animate-fade-up-delay-4"
        >
          EXPLORAR MEU TRABALHO
          <ArrowDown className="w-4 h-4 animate-float" />
        </a>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
};

export default Hero;
