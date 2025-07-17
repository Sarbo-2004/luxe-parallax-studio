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

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-950 border-t-2 border-gray-700">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="font-serif text-3xl font-light text-amber-300 mb-4">Luxe Interiors</div>
            <p className="font-sans text-gray-400 font-light leading-relaxed mb-6 max-w-md">
              Creating bespoke luxury spaces that reflect your unique vision and sophisticated lifestyle.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 border-2 border-gray-700 flex items-center justify-center bg-gray-900 hover:border-amber-300 hover:scale-105 transition-all duration-300"
                  style={{ borderRadius: '0.75rem' }}
                >
                  <social.icon className="w-5 h-5 text-amber-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-light text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="font-sans text-sm text-gray-400 hover:text-amber-300 transition-all duration-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-lg font-light text-white mb-4">Contact</h3>
            <div className="space-y-4">
              <a
                href="tel:+15551234567"
                className="flex items-center space-x-3 font-sans text-sm text-gray-400 hover:text-amber-300 transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>+91 98006 64222</span>
              </a>
              <a
                href="mailto:hello@luxeinteriors.com"
                className="flex items-center space-x-3 font-sans text-sm text-gray-400 hover:text-amber-300 transition-all"
              >
                <Mail className="w-4 h-4" />
                <span>hello@luxeinteriors.com</span>
              </a>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-3 font-sans text-sm text-gray-400 hover:text-amber-300 transition-all"
              >
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>Bengal Ambuja<br />Durgapur, West Bengal</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t-2 border-gray-700 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="font-sans text-xs text-gray-500">
            © 2024 Luxe Interiors. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <button className="font-sans text-xs text-gray-500 hover:text-amber-300 transition-all">Privacy Policy</button>
            <button className="font-sans text-xs text-gray-500 hover:text-amber-300 transition-all">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
