import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Phone, Mail } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-gray-950/90 backdrop-blur-md shadow-md border-b-2 border-gray-700'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="font-serif text-2xl font-light text-amber-300">Luxe Interiors</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="font-sans text-sm font-medium text-gray-300 hover:text-amber-300 transition-all duration-300"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Social Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+1234567890" className="text-gray-400 hover:text-amber-300 transition-all">
              <Phone size={18} />
            </a>
            <a href="mailto:hello@luxeinteriors.com" className="text-gray-400 hover:text-amber-300 transition-all">
              <Mail size={18} />
            </a>
            <a href="https://instagram.com" className="text-gray-400 hover:text-amber-300 transition-all">
              <Instagram size={18} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-300">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-950 border-t-2 border-gray-700">
          <div className="px-6 py-6 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left font-sans text-base font-medium text-gray-300 hover:text-amber-300 transition-all duration-300"
              >
                {item.name}
              </button>
            ))}
            <div className="flex items-center space-x-4 pt-4 border-t border-gray-700">
              <a href="tel:+1234567890" className="text-gray-400 hover:text-amber-300 transition-all">
                <Phone size={20} />
              </a>
              <a href="mailto:hello@luxeinteriors.com" className="text-gray-400 hover:text-amber-300 transition-all">
                <Mail size={20} />
              </a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-amber-300 transition-all">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
