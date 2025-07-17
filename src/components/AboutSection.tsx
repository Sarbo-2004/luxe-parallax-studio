import React from 'react';
import { useIntersectionObserver } from '../hooks/useParallax';
import { Award, Users, Clock, Sparkles } from 'lucide-react';
import textureImage from '../assets/texture-bg.jpg';

const AboutSection = () => {
  const { isVisible, ref } = useIntersectionObserver(0.2);

  const stats = [
    { icon: Award, label: 'Years Experience', value: '15+' },
    { icon: Users, label: 'Happy Clients', value: '500+' },
    { icon: Clock, label: 'Projects Completed', value: '1000+' },
    { icon: Sparkles, label: 'Design Awards', value: '25+' },
  ];

  return (
    <section
      id="about"
      className="relative py-32 overflow-hidden"
      ref={ref}
    >
      {/* Background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${textureImage})` }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className={`transition-luxury duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <div className="mb-8">
              <h2 className="font-serif text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Our Philosophy
              </h2>
              <div className="w-16 h-0.5 bg-gradient-gold mb-8" />
            </div>

            <div className="space-y-6 text-lg text-muted-foreground font-sans leading-relaxed">
              <p>
                At Luxe Interiors, we believe that exceptional design transcends 
                mere aesthetics. It's about creating spaces that tell your story, 
                reflect your personality, and enhance your daily life with 
                unparalleled sophistication.
              </p>
              <p>
                Our approach combines timeless elegance with contemporary innovation, 
                carefully curating every element to achieve the perfect balance 
                between luxury and livability.
              </p>
              <p>
                From concept to completion, we work intimately with our clients 
                to transform their vision into reality, ensuring every detail 
                reflects their unique taste and lifestyle.
              </p>
            </div>

            <div className="mt-12">
              <button
                onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
                className="group inline-flex items-center text-primary hover-gold transition-smooth font-sans font-medium"
              >
                Learn About Our Services
                <span className="ml-2 transform group-hover:translate-x-1 transition-smooth">→</span>
              </button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className={`transition-luxury duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="bg-surface border border-border p-8 hover-lift group"
                  style={{ 
                    borderRadius: 'var(--radius)',
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <div className="text-center">
                    <stat.icon className="w-8 h-8 text-primary mx-auto mb-4 group-hover:scale-110 transition-smooth" />
                    <div className="font-serif text-3xl font-bold text-foreground mb-2">
                      {stat.value}
                    </div>
                    <div className="font-sans text-sm text-muted-foreground uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-0 w-20 h-0.5 bg-gradient-gold opacity-30" />
      <div className="absolute bottom-1/4 right-0 w-16 h-0.5 bg-gradient-gold opacity-30" />
    </section>
  );
};

export default AboutSection;