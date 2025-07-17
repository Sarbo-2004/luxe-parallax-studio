import React from 'react';
import { Instagram, Facebook, Linkedin, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-surface-elevated border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="font-serif text-3xl font-bold text-primary mb-4">
              Luxe Interiors
            </div>
            <p className="font-sans text-muted-foreground leading-relaxed mb-6 max-w-md">
              Creating bespoke luxury spaces that reflect your unique vision and sophisticated lifestyle. 
              Where elegance meets innovation.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-background border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-luxury group"
                  style={{ borderRadius: 'var(--radius)' }}
                >
                  <social.icon className="w-4 h-4 group-hover:scale-110 transition-smooth" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-bold text-foreground mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="font-sans text-muted-foreground hover-gold transition-smooth"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-lg font-bold text-foreground mb-4">
              Contact
            </h3>
            <div className="space-y-3">
              <a
                href="tel:+15551234567"
                className="flex items-center space-x-3 font-sans text-muted-foreground hover-gold transition-smooth"
              >
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </a>
              <a
                href="mailto:hello@luxeinteriors.com"
                className="flex items-center space-x-3 font-sans text-muted-foreground hover-gold transition-smooth"
              >
                <Mail className="w-4 h-4" />
                <span>hello@luxeinteriors.com</span>
              </a>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-3 font-sans text-muted-foreground hover-gold transition-smooth"
              >
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>123 Design District<br />New York, NY 10001</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="font-sans text-sm text-muted-foreground">
              © 2024 Luxe Interiors. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <button className="font-sans text-sm text-muted-foreground hover-gold transition-smooth">
                Privacy Policy
              </button>
              <button className="font-sans text-sm text-muted-foreground hover-gold transition-smooth">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;