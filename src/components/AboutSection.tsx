import React from 'react';
import { useIntersectionObserver } from '../hooks/useParallax';

const AboutSection = () => {
  const { isVisible, ref } = useIntersectionObserver(0.2);

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-24 overflow-hidden bg-gray-900"
    >
      {/* ✅ Parallax Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          // backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80')`,
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          zIndex: 0,
        }}
      />

      {/* ✅ Overlay */}
      <div className="absolute inset-0 bg-black/60 z-[1]" />

      <div className="relative z-[2] max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Text Content */}
          <div className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="mb-8">
              <span className="font-sans text-xs text-amber-300 tracking-[0.3em] mb-4 block">ABOUT US</span>
              <h2 className="font-serif text-4xl sm:text-5xl font-light text-white leading-tight">
                Thoughtful <span className="italic font-medium">Interiors</span>
              </h2>
            </div>

            <p className="font-sans text-base sm:text-lg text-gray-300 font-light leading-relaxed mb-8">
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
          <div className={`transition-all duration-700 ease-out delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div
              className="w-full h-96 bg-cover bg-center rounded-xl shadow-xl"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80')`,
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
