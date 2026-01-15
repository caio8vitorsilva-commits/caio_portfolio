import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const navItems = [
    { number: '01', label: 'INÍCIO', href: '#inicio' },
    { number: '02', label: 'SOBRE', href: '#sobre' },
    { number: '03', label: 'HABILIDADES', href: '#habilidades' },
    { number: '04', label: 'CONTATO', href: '#contato' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4 md:py-6 md:px-12 bg-background/80 backdrop-blur-md border-b border-border/50">
      <nav className="flex items-center justify-between max-w-7xl mx-auto w-full">
        <a href="#inicio" className="font-heading font-bold text-lg sm:text-xl tracking-tight text-foreground">
          CAIO.DEV
        </a>
        
        {/* Desktop Menu */}
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

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border">
          <ul className="flex flex-col p-4 gap-2">
            {navItems.map((item) => (
              <li key={item.number}>
                <a 
                  href={item.href} 
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 p-3 text-foreground hover:bg-card rounded-lg transition-colors"
                >
                  <span className="section-number">{item.number}/</span>
                  <span className="font-medium">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
