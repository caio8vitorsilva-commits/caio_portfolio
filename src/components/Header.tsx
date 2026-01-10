const Header = () => {
  const navItems = [
    { number: '01', label: 'INÍCIO', href: '#inicio' },
    { number: '02', label: 'SOBRE', href: '#sobre' },
    { number: '03', label: 'HABILIDADES', href: '#habilidades' },
    { number: '04', label: 'CONTATO', href: '#contato' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-6 md:px-12 bg-background/80 backdrop-blur-md border-b border-border/50">
      <nav className="flex items-center justify-between max-w-7xl mx-auto w-full">
        <a href="#inicio" className="font-heading font-bold text-xl tracking-tight text-foreground">
          CAIO.DEV
        </a>
        
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.number}>
              <a href={item.href} className="nav-link flex items-center gap-2 text-sm">
                <span className="section-number">{item.number}/</span>
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
