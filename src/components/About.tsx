const About = () => {
  const highlights = [
    { label: 'Idade', value: '21 anos' },
    { label: 'Foco', value: 'Full-Stack' },
    { label: 'Status', value: 'Disponível' },
  ];

  return (
    <section id="sobre" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-start">
          <div>
            <p className="section-number mb-3 sm:mb-4 text-xs sm:text-sm">02/ SOBRE MIM</p>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 leading-tight">
              Transformando ideias em 
              <span className="text-muted-foreground"> experiências digitais</span>
            </h2>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              Olá! Sou Caio Vitor, um desenvolvedor web em formação com forte interesse 
              em criar soluções digitais inovadoras. Tenho me aprimorado constantemente 
              em tecnologias modernas como React, Next.js, Node.js e Laravel.
            </p>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              Possuo experiência com ferramentas de IA, Pacote Office, dashboards de 
              análise e me comunico de forma clara e objetiva. Estou em busca da minha 
              primeira oportunidade profissional para aplicar meus conhecimentos e 
              crescer ainda mais na área.
            </p>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              Minha motivação é entregar código limpo, performático e que faça a 
              diferença. Estou pronto para contribuir e evoluir junto com uma equipe!
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16 pt-12 sm:pt-16 border-t border-border">
          {highlights.map((item) => (
            <div key={item.label} className="text-center sm:text-left">
              <p className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground mb-1 sm:mb-2">
                {item.value}
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wider">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
