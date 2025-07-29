import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Phone, Mail } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Services', href: '#services' },
    { name: 'Budget', href: '#budget' },
    { name: 'Contact', href: '#contact' },
    
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-luxury ${
      isScrolled ? 'bg-background/95 backdrop-blur-md shadow-elegant' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="font-serif text-2xl font-bold text-primary">Luxe Interiors</div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => (
              <button key={item.name} onClick={() => scrollToSection(item.href)}
                className="font-sans text-sm font-medium text-foreground hover-gold transition-smooth">
                {item.name}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+1234567890" className="text-muted-foreground hover-gold transition-smooth"><Phone size={18} /></a>
            <a href="mailto:hello@luxeinteriors.com" className="text-muted-foreground hover-gold transition-smooth"><Mail size={18} /></a>
            <a href="https://instagram.com" className="text-muted-foreground hover-gold transition-smooth"><Instagram size={18} /></a>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-foreground">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-surface-elevated backdrop-blur-md border-t border-border">
          <div className="px-6 py-6 space-y-4">
            {navItems.map(item => (
              <button key={item.name} onClick={() => scrollToSection(item.href)}
                className="block w-full text-left font-sans text-base font-medium text-foreground hover-gold transition-smooth">
                {item.name}
              </button>
            ))}
            <div className="flex items-center space-x-4 pt-4 border-t border-border">
              <a href="tel:+1234567890" className="text-muted-foreground hover-gold transition-smooth"><Phone size={20} /></a>
              <a href="mailto:hello@luxeinteriors.com" className="text-muted-foreground hover-gold transition-smooth"><Mail size={20} /></a>
              <a href="https://instagram.com" className="text-muted-foreground hover-gold transition-smooth"><Instagram size={20} /></a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
