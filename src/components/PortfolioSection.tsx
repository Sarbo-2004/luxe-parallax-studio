import React, { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useParallax';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import portfolio1 from '../assets/portfolio-1.jpg';
import portfolio2 from '../assets/portfolio-2.jpg';
import portfolio3 from '../assets/portfolio-3.jpg';
import textureImage from '../assets/texture-bg.jpg';

const PortfolioSection = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const { isVisible, ref } = useIntersectionObserver(0.1);

  const projects = [
    {
      id: 1,
      title: 'Modern Luxury Bedroom',
      category: 'Residential',
      description: 'A sophisticated master suite featuring custom millwork, premium textiles, and carefully curated art pieces.',
      image: portfolio1,
      details: {
        size: '450 sq ft',
        style: 'Contemporary Luxury',
        year: '2024'
      }
    },
    {
      id: 2,
      title: 'Gourmet Kitchen Design',
      category: 'Residential',
      description: 'An innovative culinary space that seamlessly blends functionality with uncompromising elegance.',
      image: portfolio2,
      details: {
        size: '320 sq ft',
        style: 'Modern Classic',
        year: '2024'
      }
    },
    {
      id: 3,
      title: 'Elegant Dining Experience',
      category: 'Residential',
      description: 'A dramatic dining room that sets the stage for memorable gatherings and intimate dinners.',
      image: portfolio3,
      details: {
        size: '280 sq ft',
        style: 'Luxe Traditional',
        year: '2023'
      }
    }
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const currentProjectData = projects[currentProject];

  return (
    <section
      id="portfolio"
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
            Featured Projects
          </h2>
          <div className="w-24 h-0.5 bg-gradient-gold mx-auto mb-8" />
          <p className="font-sans text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our latest creations where luxury meets functionality
          </p>
        </div>

        {/* Project Display */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Project Image */}
          <div className={`transition-luxury duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
          }`}>
              <div className="relative group">
                <div className="aspect-[4/3] bg-surface-elevated overflow-hidden" style={{ borderRadius: 'var(--radius)' }}>
                  <img
                    src={currentProjectData.image}
                    alt={currentProjectData.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-luxury"
                  />
                  <div className="absolute inset-0 bg-background/20 group-hover:bg-background/10 transition-luxury" />
                </div>

                {/* Navigation Buttons */}
                <button
                  onClick={prevProject}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-background/80 backdrop-blur-sm text-foreground hover:bg-primary hover:text-primary-foreground transition-smooth flex items-center justify-center"
                  style={{ borderRadius: 'var(--radius)' }}
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextProject}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-background/80 backdrop-blur-sm text-foreground hover:bg-primary hover:text-primary-foreground transition-smooth flex items-center justify-center"
                  style={{ borderRadius: 'var(--radius)' }}
                >
                  <ChevronRight size={20} />
                </button>

                {/* Project Counter */}
                <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur-sm px-3 py-1 text-sm font-sans text-foreground" style={{ borderRadius: 'var(--radius)' }}>
                  {currentProject + 1} / {projects.length}
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div className={`transition-luxury duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}>
              <div className="space-y-6">
                <div>
                  <div className="text-primary font-sans text-sm font-medium uppercase tracking-wider mb-2">
                    {currentProjectData.category}
                  </div>
                  <h3 className="font-serif text-4xl font-bold text-foreground mb-4">
                    {currentProjectData.title}
                  </h3>
                  <div className="w-12 h-0.5 bg-gradient-gold mb-6" />
                </div>

                <p className="font-sans text-lg text-muted-foreground leading-relaxed">
                  {currentProjectData.description}
                </p>

                {/* Project Specs */}
                <div className="grid grid-cols-3 gap-4 py-6 border-t border-b border-border">
                  <div>
                    <div className="font-sans text-sm text-muted-foreground uppercase tracking-wider mb-1">
                      Size
                    </div>
                    <div className="font-serif text-lg font-medium text-foreground">
                      {currentProjectData.details.size}
                    </div>
                  </div>
                  <div>
                    <div className="font-sans text-sm text-muted-foreground uppercase tracking-wider mb-1">
                      Style
                    </div>
                    <div className="font-serif text-lg font-medium text-foreground">
                      {currentProjectData.details.style}
                    </div>
                  </div>
                  <div>
                    <div className="font-sans text-sm text-muted-foreground uppercase tracking-wider mb-1">
                      Year
                    </div>
                    <div className="font-serif text-lg font-medium text-foreground">
                      {currentProjectData.details.year}
                    </div>
                  </div>
                </div>

                {/* View Project Button */}
                <button className="group inline-flex items-center text-primary hover-gold transition-smooth font-sans font-medium">
                  View Full Project
                  <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-smooth" />
                </button>
              </div>
          </div>
        </div>

        {/* Project Thumbnails */}
        <div className={`mt-16 transition-luxury duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <div className="flex justify-center space-x-4">
            {projects.map((project, index) => (
              <button
                key={project.id}
                onClick={() => setCurrentProject(index)}
                className={`w-20 h-20 overflow-hidden transition-smooth ${
                  index === currentProject
                    ? 'ring-2 ring-primary ring-offset-2 ring-offset-background'
                    : 'hover:ring-2 hover:ring-muted hover:ring-offset-2 hover:ring-offset-background'
                }`}
                style={{ borderRadius: 'var(--radius)' }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;