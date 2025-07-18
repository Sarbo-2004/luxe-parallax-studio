import React from 'react';
import { useIntersectionObserver } from '../hooks/useParallax';
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin, Clock } from 'lucide-react';

const ContactSection = () => {
  const { isVisible, ref } = useIntersectionObserver(0.1);

  const contactInfo = [
    { icon: Phone, label: 'Phone', value: '+91 9800664222', href: '' },
    { icon: Mail, label: 'Email', value: 'hello@luxeinteriors.com', href: 'mailto:hello@luxeinteriors.com' },
    { icon: MapPin, label: 'Studio', value: 'Bengal Ambuja, Durgapur, West Bengal, India', href: 'https://maps.google.com' },
    { icon: Clock, label: 'Hours', value: 'Mon-Fri 9AM-6PM, Sat by appointment', href: null }
  ];

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' }
  ];

  return (
    <section id="contact" ref={ref} className="relative py-32 overflow-hidden bg-gray-900">

      {/* ✅ Background Image with Parallax */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://plus.unsplash.com/premium_photo-1733320822557-e4ccfb5f20d1?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          zIndex: 0,
        }}
      />

      {/* ✅ Overlay */}
      <div className="absolute inset-0 bg-black/60 z-[1]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-[2]">

        <div className={`text-center mb-20 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <span className="font-sans text-xs text-amber-300 tracking-[0.3em] mb-4 block">CONTACT US</span>
          <h2 className="font-serif text-5xl lg:text-6xl font-light text-white mb-6">Get In Touch</h2>
          <div className="w-24 h-px bg-amber-300 mx-auto mb-8" />
          <p className="font-sans text-lg text-gray-300 font-light max-w-3xl mx-auto leading-relaxed">
            Ready to begin your luxury interior journey? We’re here to discuss your vision and help bring it to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Contact Information */}
          <div className={`transition-all duration-1000 ease-out delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="space-y-8">
              <div>
                <h3 className="font-serif text-3xl font-light text-white mb-6">Let’s Start a Conversation</h3>
                <p className="font-sans text-lg text-gray-300 font-light leading-relaxed mb-8">
                  Whether it’s a full renovation or a single room refresh, we’ll guide you through every step with tailored design.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <div key={info.label} className="group">
                    {info.href ? (
                      <a
                        href={info.href}
                        className="flex items-start space-x-4 p-4 border-2 border-gray-700 hover:border-amber-300/40 transition-all duration-500 ease-out transform hover:scale-[1.02]"
                        style={{ borderRadius: '1rem', background: 'rgba(17,17,17,0.6)' }}
                      >
                        <info.icon className="w-6 h-6 text-amber-300 mt-1 transition-transform duration-300 group-hover:scale-110" />
                        <div>
                          <div className="font-sans text-xs text-amber-300/80 uppercase tracking-widest mb-1">{info.label}</div>
                          <div className="font-sans text-white group-hover:text-amber-300">{info.value}</div>
                        </div>
                      </a>
                    ) : (
                      <div
                        className="flex items-start space-x-4 p-4 border-2 border-gray-700"
                        style={{ borderRadius: '1rem', background: 'rgba(17,17,17,0.6)' }}
                      >
                        <info.icon className="w-6 h-6 text-amber-300 mt-1" />
                        <div>
                          <div className="font-sans text-xs text-amber-300/80 uppercase tracking-widest mb-1">{info.label}</div>
                          <div className="font-sans text-white">{info.value}</div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="pt-8 border-t border-gray-700">
                <div className="font-sans text-xs text-amber-300/80 uppercase tracking-widest mb-4">Follow Us</div>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 border-2 border-gray-700 flex items-center justify-center hover:border-amber-300/40 hover:scale-105 transition-all duration-500 ease-out"
                      style={{ borderRadius: '1rem', background: 'rgba(17,17,17,0.6)' }}
                    >
                      <social.icon className="w-5 h-5 text-amber-300" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Consultation */}
          <div className={`transition-all duration-1000 ease-out delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="p-12 border-2 border-gray-700 bg-gradient-to-b from-black/70 via-black/50 to-black/70 rounded-xl h-full flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-3xl font-light text-white mb-6 text-center">Schedule Your Consultation</h3>
                <ul className="space-y-4 mb-8">
                  {[
                    'Personalized design consultation',
                    'Space assessment and recommendations',
                    'Style preference discussion',
                    'Project timeline and budget overview',
                    'No obligation, completely complimentary'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-amber-300 rounded-full" />
                      <span className="font-sans text-sm text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-center">
                <button
                  onClick={() => window.open('tel:+91 9800664222', '_self')}
                  className="group relative inline-flex items-center justify-center px-8 py-4 font-sans text-sm font-medium text-black bg-amber-300 hover:bg-amber-200 hover:shadow-lg hover:shadow-amber-300/20 transition-all duration-300 rounded-xl w-full"
                >
                  <Phone className="mr-2 w-4 h-4" />
                  Call Now to Schedule
                </button>

                <div className="text-sm text-gray-300 mt-4">
                  Or email us at{' '}
                  <a href="mailto:hello@luxeinteriors.com" className="text-amber-300 hover:underline">
                    hello@luxeinteriors.com
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Decorative Lines */}
      <div className="absolute top-1/3 left-0 w-20 h-px bg-amber-300 opacity-30" />
      <div className="absolute bottom-1/4 right-0 w-16 h-px bg-amber-300 opacity-30" />

    </section>
  );
};

export default ContactSection;
