import React from 'react';
import { useIntersectionObserver } from '../hooks/useParallax';

const AboutSection = () => {
  const { isVisible, ref } = useIntersectionObserver(0.2);

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-24 bg-gray-900 overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')] opacity-10 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className={`transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="mb-8">
              <span className="font-sans text-xs text-amber-300 tracking-[0.3em] mb-4 block">
                ABOUT US
              </span>
              <h2 className="font-serif text-5xl font-light text-white leading-tight">
                Thoughtful <span className="italic font-medium">Interiors</span>
              </h2>
            </div>

            <p className="text-lg text-gray-300 font-light leading-relaxed mb-8">
              We believe true luxury lies in simplicity and attention to detail. 
              Every material, every line, speaks to calm sophistication and lasting quality.
            </p>

            <button
              onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
              className="group inline-flex items-center font-sans text-sm tracking-widest text-amber-300 hover:text-white transition-colors duration-300"
            >
              <span>Our Services</span>
              <span className="ml-3 transform group-hover:translate-x-2 transition-transform">→</span>
            </button>
          </div>

          {/* Image or Texture Block */}
          <div className={`transition-all duration-700 ease-out delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div
              className="w-full h-96 bg-cover bg-center rounded-xl shadow-xl"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80')",
                backgroundBlendMode: 'overlay',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
