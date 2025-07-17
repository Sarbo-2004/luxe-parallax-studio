import React from 'react';
import { useIntersectionObserver } from '../hooks/useParallax';
import { Home, Palette, Lightbulb, Sofa, Compass, Sparkles } from 'lucide-react';

const ServicesSection = () => {
  const { isVisible, ref } = useIntersectionObserver(0.1);

  const services = [
    { icon: Home, title: 'Complete Home Design', description: 'Residential spaces crafted with a seamless luxury experience, from concept to finish.' },
    { icon: Palette, title: 'Color & Material Consulting', description: 'Curated palettes and textures that reflect your unique vision with premium materials.' },
    { icon: Lightbulb, title: 'Lighting Design', description: 'Tailored lighting setups enhancing every detail of your home’s architecture.' },
    { icon: Sofa, title: 'Custom Furniture', description: 'Exclusive, handcrafted furniture pieces made to fit your space perfectly.' },
    { icon: Compass, title: 'Space Planning', description: 'Optimized layouts balancing functionality with aesthetic flow.' },
    { icon: Sparkles, title: 'Luxury Styling', description: 'Finishing touches with curated accessories for a polished, timeless look.' },
  ];

  return (
    <section id="services" ref={ref} className="relative py-32 bg-gray-900 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')] opacity-10 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`text-center mb-20 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <span className="font-sans text-xs text-amber-300 tracking-[0.3em] mb-4 block">OUR SERVICES</span>
          <h2 className="font-serif text-5xl lg:text-6xl font-light text-white mb-6">
            Designed for <span className="italic font-medium">Elegance</span>
          </h2>
          <div className="w-24 h-px bg-amber-300 mx-auto mb-8" />
          <p className="font-sans text-lg text-gray-300 font-light max-w-3xl mx-auto leading-relaxed">
            Offering a complete range of interior design services, blending classic craftsmanship with modern sensibilities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`p-8 border-2 border-gray-700 transition-all duration-700 ease-out transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              } hover:border-amber-300/50 hover:scale-[1.02]`}
              style={{
                background: 'linear-gradient(135deg, rgba(17,17,17,0.8) 0%, rgba(30,30,30,0.6) 100%)',
                transitionDelay: `${index * 0.1}s`,
                borderRadius: '1rem',
              }}
            >
              <div className="mb-6 text-center">
                <service.icon className="w-10 h-10 text-amber-300 mx-auto mb-4 transition-transform duration-300 group-hover:scale-110" />
                <h3 className="font-serif text-2xl font-light text-white mb-3">{service.title}</h3>
                <p className="font-sans text-sm text-gray-300 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center mt-20 transition-all duration-1000 ease-out delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="p-12 border-2 border-gray-700 bg-gradient-to-b from-black/70 via-black/50 to-black/70 rounded-xl">
            <h3 className="font-serif text-4xl font-light text-white mb-6">
              Ready to Begin Your <span className="italic font-medium">Transformation?</span>
            </h3>
            <p className="font-sans text-lg text-gray-300 font-light mb-8 max-w-2xl mx-auto leading-relaxed">
              Let’s collaborate and create interiors that are timeless, personal, and rich in character.
            </p>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative inline-flex items-center justify-center px-8 py-4 font-sans text-sm font-medium text-black bg-amber-300 hover:bg-amber-200 hover:shadow-lg hover:shadow-amber-300/20 transition-all duration-300 rounded-xl"
            >
              Start Your Project
              <span className="ml-3 transform group-hover:translate-x-2 transition-transform">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
