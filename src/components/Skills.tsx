const Skills = () => {
  const technicalSkills = [
    'PHP', 'Laravel', 'JavaScript', 'TypeScript', 'React', 'Next.js', 
    'Node.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Git'
  ];

  const softSkills = [
    'Comunicação', 'Trabalho em equipe', 'Resolução de problemas',
    'Aprendizado rápido', 'Proatividade', 'Organização'
  ];

  const tools = [
    'Inteligência Artificial', 'Pacote Office', 'Dashboard de Análise',
    'VS Code', 'Figma', 'GitHub'
  ];

  return (
    <section id="habilidades" className="py-32 px-6 md:px-12 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <p className="section-number mb-4">03/ HABILIDADES</p>
        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-16">
          Tecnologias & <span className="text-muted-foreground">Competências</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="glass-card">
            <h3 className="font-heading text-xl font-semibold mb-6 text-foreground">
              Desenvolvimento
            </h3>
            <div className="flex flex-wrap gap-3">
              {technicalSkills.map((skill) => (
                <span key={skill} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="glass-card">
            <h3 className="font-heading text-xl font-semibold mb-6 text-foreground">
              Soft Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill) => (
                <span key={skill} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="glass-card">
            <h3 className="font-heading text-xl font-semibold mb-6 text-foreground">
              Ferramentas
            </h3>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool) => (
                <span key={tool} className="skill-tag">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
