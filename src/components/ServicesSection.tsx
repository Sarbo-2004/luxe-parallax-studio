import React from 'react';
import { useIntersectionObserver } from '../hooks/useParallax';
import { Home, Palette, Lightbulb, Sofa, Compass, Sparkles } from 'lucide-react';
import textureImage from '../assets/texture-bg.jpg';

const ServicesSection = () => {
  const { isVisible, ref } = useIntersectionObserver(0.1);

  const services = [
    {
      icon: Home,
      title: 'Complete Home Design',
      description: 'Full-service residential design from concept to completion, creating cohesive luxury throughout your entire home.'
    },
    {
      icon: Palette,
      title: 'Color & Material Consulting',
      description: 'Expert guidance in selecting the perfect palette and premium materials to achieve your desired aesthetic.'
    },
    {
      icon: Lightbulb,
      title: 'Lighting Design',
      description: 'Sophisticated lighting solutions that enhance ambiance and highlight your home\'s architectural features.'
    },
    {
      icon: Sofa,
      title: 'Custom Furniture',
      description: 'Bespoke furniture pieces designed specifically for your space, crafted by master artisans using finest materials.'
    },
    {
      icon: Compass,
      title: 'Space Planning',
      description: 'Optimize your layout for both functionality and flow, maximizing every square foot with purposeful design.'
    },
    {
      icon: Sparkles,
      title: 'Luxury Styling',
      description: 'Final touches that transform spaces into magazine-worthy environments with carefully curated accessories.'
    }
  ];

  return (
    <section
      id="services"
      className="relative py-32 overflow-hidden"
      ref={ref}
    >
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${textureImage})` }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-20 transition-luxury duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <h2 className="font-serif text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Our Services
          </h2>
          <div className="w-24 h-0.5 bg-gradient-gold mx-auto mb-8" />
          <p className="font-sans text-xl text-muted-foreground max-w-3xl mx-auto">
            From initial concept to final installation, we provide comprehensive 
            luxury design services tailored to your unique vision
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group bg-surface border border-border p-8 hover-lift transition-luxury duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ 
                borderRadius: 'var(--radius)',
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="mb-6">
                <service.icon className="w-12 h-12 text-primary group-hover:scale-110 transition-smooth" />
              </div>
              
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-smooth">
                {service.title}
              </h3>
              
              <p className="font-sans text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              <div className="mt-6 pt-6 border-t border-border">
                <button className="group/btn inline-flex items-center text-primary hover-gold transition-smooth font-sans font-medium text-sm">
                  Learn More
                  <span className="ml-2 transform group-hover/btn:translate-x-1 transition-smooth">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div
          className={`text-center mt-20 transition-luxury duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="bg-gradient-dark p-12 border border-border" style={{ borderRadius: 'var(--radius)' }}>
            <h3 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Ready to Transform Your Space?
            </h3>
            <p className="font-sans text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss your vision and create a luxury interior that reflects your unique style and sophistication.
            </p>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group inline-flex items-center justify-center px-8 py-4 font-sans text-sm font-medium text-primary-foreground bg-gradient-gold hover:shadow-gold transition-luxury hover:-translate-y-1"
              style={{ borderRadius: 'var(--radius)' }}
            >
              <span className="relative z-10">Start Your Project</span>
              <div className="absolute inset-0 bg-gradient-gold opacity-0 group-hover:opacity-100 transition-luxury animate-shine" />
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-16 h-0.5 bg-gradient-gold opacity-30" />
      <div className="absolute bottom-1/3 left-0 w-20 h-0.5 bg-gradient-gold opacity-30" />
    </section>
  );
};

export default ServicesSection;