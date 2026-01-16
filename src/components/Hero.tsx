import { ArrowDown } from 'lucide-react';
import WaveBackground from './WaveBackground';

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden px-4 sm:px-6 md:px-12">
      <WaveBackground />
      
      <div className="relative z-10 w-full max-w-7xl mx-auto pt-16 sm:pt-20 md:pt-24">
        <div className="space-y-1 sm:space-y-2 md:space-y-4 overflow-hidden">
          <h1 className="hero-title animate-fade-up break-words">
            DESENVOLVEDOR
          </h1>
          <h2 className="hero-subtitle animate-fade-up-delay-1 break-words">
            CRIATIVO
          </h2>
        </div>

        <div className="mt-8 sm:mt-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6 sm:gap-8">
          <div className="animate-fade-up-delay-2">
            <p className="section-number mb-2 text-xs sm:text-sm">// SOLUÇÕES WEB ESCALÁVEIS.</p>
          </div>

          <div className="max-w-md animate-fade-up-delay-3">
            <p className="text-foreground font-heading text-base sm:text-lg mb-2">
              Caio Vitor / Desenvolvedor Web
            </p>
            <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
              Desenvolvedor em formação com 21 anos, movido pela paixão de criar 
              aplicações eficientes e modernas. Focado em desenvolvimento web 
              full-stack, buscando minha primeira oportunidade profissional.
            </p>
          </div>
        </div>

        <a 
          href="#sobre" 
          className="inline-flex items-center gap-2 mt-12 sm:mt-16 text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors animate-fade-up-delay-4"
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
