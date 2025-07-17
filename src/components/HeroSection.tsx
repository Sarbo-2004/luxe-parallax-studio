import React from 'react';
import { useIntersectionObserver } from '../hooks/useParallax';
import heroImage from '../assets/hero-bg.jpg';
import textureImage from '../assets/texture-bg.jpg';

const HeroSection = () => {
  const { isVisible, ref } = useIntersectionObserver(0.1);

  return (
    <section
      id="hero"
      className="relative h-screen overflow-hidden"
      ref={ref}
    >
      {/* Background Image Layer */}
      <div className="absolute inset-0">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-background/40" />
      </div>

      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="w-full h-full bg-cover bg-center mix-blend-overlay"
          style={{ backgroundImage: `url(${textureImage})` }}
        />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center">
        <div className={`text-center max-w-4xl mx-auto px-6 transition-luxury duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          {/* Logo/Brand */}
          <div className="mb-8 animate-fade-in-up">
            <h1 className="font-serif text-6xl lg:text-8xl font-bold text-primary mb-4">
              Luxe Interiors
            </h1>
            <div className="w-24 h-0.5 bg-gradient-gold mx-auto mb-6" />
          </div>

          {/* Tagline */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <p className="font-sans text-xl lg:text-2xl text-secondary font-light mb-8 leading-relaxed">
              Creating bespoke luxury spaces that reflect 
              <br className="hidden lg:block" />
              your unique vision and sophisticated lifestyle
            </p>
          </div>

          {/* CTA Button */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <button
              onClick={() => document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative inline-flex items-center justify-center px-8 py-4 font-sans text-sm font-medium text-primary-foreground bg-gradient-gold hover:shadow-gold transition-luxury hover:-translate-y-1"
              style={{ borderRadius: 'var(--radius)' }}
            >
              <span className="relative z-10">Explore Our Work</span>
              <div className="absolute inset-0 bg-gradient-gold opacity-0 group-hover:opacity-100 transition-luxury animate-shine" />
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
            <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
              <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-1 h-20 bg-gradient-gold opacity-30 animate-float" />
      <div className="absolute bottom-1/4 right-10 w-1 h-16 bg-gradient-gold opacity-30 animate-float" style={{ animationDelay: '2s' }} />
    </section>
  );
};

export default HeroSection;