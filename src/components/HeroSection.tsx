import React from 'react';
import { useIntersectionObserver } from '../hooks/useParallax';
import heroImage from '../assets/hero-bg.jpg';

const HeroSection = () => {
  const { isVisible, ref } = useIntersectionObserver(0.1);

  return (
    <section
      id="hero"
      className="relative h-screen overflow-hidden bg-gray-900"
      ref={ref}
    >
      {/* Background with Dark Overlay */}
      <div className="absolute inset-0">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-1000"
          style={{ 
            backgroundImage: `url(${heroImage})`,
            filter: 'brightness(0.6)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center">
        <div className={`text-center max-w-3xl mx-auto px-6 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          {/* Header */}
          <div className="mb-10">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-px bg-amber-300 mr-4 my-auto" />
              <span className="font-sans text-xs text-amber-300 tracking-widest">LUXURY INTERIORS</span>
              <div className="w-20 h-px bg-amber-300 ml-4 my-auto" />
            </div>
            <h1 className="font-serif text-5xl lg:text-6xl font-light text-white mb-6 leading-tight">
              <span className="block">Timeless</span>
              <span className="font-medium italic text-amber-200">Design</span>
            </h1>
            <div className="w-24 h-px bg-amber-300 mx-auto" />
          </div>

          {/* Tagline */}
          <p className="font-sans text-lg text-gray-300 font-light mb-10 leading-relaxed mx-auto max-w-lg">
            Creating bespoke spaces that embody <span className="text-amber-200">sophistication</span> through meticulous craftsmanship and refined aesthetics.
          </p>

          {/* CTA */}
          <button
            onClick={() => document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            className="font-sans text-sm tracking-widest px-10 py-4 border border-amber-300 text-amber-300 hover:bg-amber-300/10 transition-colors duration-300 group"
          >
            EXPLORE OUR WORK
            <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center">
          <span className="text-xs text-amber-300 tracking-widest mb-2">SCROLL</span>
          <div className="w-px h-12 bg-gradient-to-t from-amber-300 to-transparent animate-pulse" />
        </div>
      </div>

      {/* Decorative Gold Elements */}
      <div className="absolute top-1/4 left-10 w-px h-20 bg-gradient-to-b from-transparent via-amber-300 to-transparent opacity-50" />
      <div className="absolute bottom-1/4 right-10 w-px h-16 bg-gradient-to-b from-transparent via-amber-300 to-transparent opacity-50" />
    </section>
  );
};

export default HeroSection;