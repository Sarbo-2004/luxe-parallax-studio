import React from 'react';
import { useIntersectionObserver } from '../hooks/useParallax';
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin, Clock } from 'lucide-react';
import textureImage from '../assets/texture-bg.jpg';

const ContactSection = () => {
  const { isVisible, ref } = useIntersectionObserver(0.1);

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@luxeinteriors.com',
      href: 'mailto:hello@luxeinteriors.com'
    },
    {
      icon: MapPin,
      label: 'Studio',
      value: '123 Design District, New York, NY 10001',
      href: 'https://maps.google.com'
    },
    {
      icon: Clock,
      label: 'Hours',
      value: 'Mon-Fri 9AM-6PM, Sat by appointment',
      href: null
    }
  ];

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' }
  ];

  return (
    <section
      id="contact"
      className="relative py-32 overflow-hidden bg-surface"
      ref={ref}
    >
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-10">
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
            Get In Touch
          </h2>
          <div className="w-24 h-0.5 bg-gradient-gold mx-auto mb-8" />
          <p className="font-sans text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to begin your luxury interior design journey? We'd love to hear about your vision 
            and discuss how we can bring it to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <div className={`transition-luxury duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
          }`}>
            <div className="space-y-8">
              <div>
                <h3 className="font-serif text-3xl font-bold text-foreground mb-6">
                  Let's Start a Conversation
                </h3>
                <p className="font-sans text-lg text-muted-foreground leading-relaxed mb-8">
                  Whether you're planning a complete home renovation or looking to refresh a single room, 
                  our team is here to guide you through every step of the design process.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={info.label} className="group">
                    {info.href ? (
                      <a
                        href={info.href}
                        className="flex items-start space-x-4 p-4 bg-background/50 border border-border hover-lift transition-luxury"
                        style={{ borderRadius: 'var(--radius)' }}
                      >
                        <info.icon className="w-6 h-6 text-primary mt-1 group-hover:scale-110 transition-smooth" />
                        <div>
                          <div className="font-sans text-sm text-muted-foreground uppercase tracking-wider mb-1">
                            {info.label}
                          </div>
                          <div className="font-sans text-foreground group-hover:text-primary transition-smooth">
                            {info.value}
                          </div>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-start space-x-4 p-4 bg-background/50 border border-border" style={{ borderRadius: 'var(--radius)' }}>
                        <info.icon className="w-6 h-6 text-primary mt-1" />
                        <div>
                          <div className="font-sans text-sm text-muted-foreground uppercase tracking-wider mb-1">
                            {info.label}
                          </div>
                          <div className="font-sans text-foreground">
                            {info.value}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="pt-8 border-t border-border">
                <div className="font-sans text-sm text-muted-foreground uppercase tracking-wider mb-4">
                  Follow Us
                </div>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-background/50 border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-luxury group"
                      style={{ borderRadius: 'var(--radius)' }}
                    >
                      <social.icon className="w-5 h-5 group-hover:scale-110 transition-smooth" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Schedule Consultation */}
          <div className={`transition-luxury duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
          }`}>
            <div className="bg-gradient-dark p-8 lg:p-12 border border-border h-full" style={{ borderRadius: 'var(--radius)' }}>
              <div className="text-center mb-8">
                <h3 className="font-serif text-3xl font-bold text-foreground mb-4">
                  Schedule Your Consultation
                </h3>
                <p className="font-sans text-muted-foreground">
                  Book a complimentary design consultation to discuss your project and explore how we can transform your space.
                </p>
              </div>

              {/* Consultation Benefits */}
              <div className="space-y-4 mb-8">
                {[
                  'Personalized design consultation',
                  'Space assessment and recommendations',
                  'Style preference discussion',
                  'Project timeline and budget overview',
                  'No obligation, completely complimentary'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="font-sans text-sm text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Call to Action */}
              <div className="text-center">
                <button
                  onClick={() => window.open('tel:+15551234567', '_self')}
                  className="group w-full inline-flex items-center justify-center px-8 py-4 font-sans text-sm font-medium text-primary-foreground bg-gradient-gold hover:shadow-gold transition-luxury hover:-translate-y-1 mb-4"
                  style={{ borderRadius: 'var(--radius)' }}
                >
                  <Phone className="mr-2 w-4 h-4" />
                  <span className="relative z-10">Call Now to Schedule</span>
                  <div className="absolute inset-0 bg-gradient-gold opacity-0 group-hover:opacity-100 transition-luxury animate-shine" />
                </button>
                
                <div className="text-sm text-muted-foreground">
                  Or email us at{' '}
                  <a href="mailto:hello@luxeinteriors.com" className="text-primary hover-gold transition-smooth">
                    hello@luxeinteriors.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/3 left-0 w-20 h-0.5 bg-gradient-gold opacity-30" />
      <div className="absolute bottom-1/4 right-0 w-16 h-0.5 bg-gradient-gold opacity-30" />
    </section>
  );
};

export default ContactSection;