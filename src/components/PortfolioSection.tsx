import React, { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useParallax';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import portfolio1 from '../assets/portfolio-1.jpg';
import portfolio2 from '../assets/portfolio-2.jpg';
import portfolio3 from '../assets/portfolio-3.jpg';

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
      details: { size: '450 sq ft', style: 'Contemporary Luxury', year: '2024' },
    },
    {
      id: 2,
      title: 'Gourmet Kitchen Design',
      category: 'Residential',
      description: 'An innovative culinary space that seamlessly blends functionality with uncompromising elegance.',
      image: portfolio2,
      details: { size: '320 sq ft', style: 'Modern Classic', year: '2024' },
    },
    {
      id: 3,
      title: 'Elegant Dining Experience',
      category: 'Residential',
      description: 'A dramatic dining room that sets the stage for memorable gatherings and intimate dinners.',
      image: portfolio3,
      details: { size: '280 sq ft', style: 'Luxe Traditional', year: '2023' },
    },
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const currentProjectData = projects[currentProject];

  return (
    <section id="portfolio" className="relative py-32 overflow-hidden bg-gray-900" ref={ref}>
      
      {/* ✅ Parallax Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://plus.unsplash.com/premium_photo-1746888841255-42d2452f6ebe?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          zIndex: 0,
        }}
      />
      <div className="absolute inset-0 bg-black/60 z-[1]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-[2]">

        <div
          className={`text-center mb-20 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="flex justify-center mb-6">
            <div className="w-24 h-px bg-amber-300 mr-4 my-auto" />
            <span className="font-sans text-xs text-amber-300 tracking-[0.3em]">OUR PORTFOLIO</span>
            <div className="w-24 h-px bg-amber-300 ml-4 my-auto" />
          </div>
          <h2 className="font-serif text-5xl lg:text-6xl font-light text-white mb-6 leading-tight">
            Curated <span className="italic">Excellence</span>
          </h2>
          <p className="font-sans text-lg text-gray-300 max-w-2xl mx-auto">
            Discover our latest creations where luxury meets functionality
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Project Image */}
          <div
            className={`transition-all duration-1000 ease-out delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="relative group">
              <div className="aspect-[4/3] bg-gray-800 overflow-hidden" style={{ borderRadius: '4px' }}>
                <img
                  src={currentProjectData.image}
                  alt={currentProjectData.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-500" />
              </div>

              <button
                onClick={prevProject}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gray-900/80 backdrop-blur-sm text-amber-300 hover:bg-amber-300 hover:text-gray-900 transition-all duration-300 flex items-center justify-center"
                style={{ borderRadius: '4px' }}
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextProject}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gray-900/80 backdrop-blur-sm text-amber-300 hover:bg-amber-300 hover:text-gray-900 transition-all duration-300 flex items-center justify-center"
                style={{ borderRadius: '4px' }}
              >
                <ChevronRight size={20} />
              </button>

              <div className="absolute bottom-4 left-4 bg-gray-900/80 backdrop-blur-sm px-3 py-1 text-sm font-sans text-amber-300" style={{ borderRadius: '4px' }}>
                {currentProject + 1} / {projects.length}
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div
            className={`transition-all duration-1000 ease-out delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="space-y-6">
              <div>
                <div className="text-amber-300 font-sans text-xs uppercase tracking-widest mb-2">
                  {currentProjectData.category}
                </div>
                <h3 className="font-serif text-4xl font-light text-white mb-4">{currentProjectData.title}</h3>
                <div className="w-16 h-px bg-amber-300 mb-6" />
              </div>

              <p className="font-sans text-lg text-gray-300 leading-relaxed">{currentProjectData.description}</p>

              <div className="grid grid-cols-3 gap-4 py-6 border-t border-b border-gray-700">
                <div>
                  <div className="font-sans text-xs text-gray-400 uppercase tracking-widest mb-1">Size</div>
                  <div className="font-serif text-lg font-light text-white">{currentProjectData.details.size}</div>
                </div>
                <div>
                  <div className="font-sans text-xs text-gray-400 uppercase tracking-widest mb-1">Style</div>
                  <div className="font-serif text-lg font-light text-white">{currentProjectData.details.style}</div>
                </div>
                <div>
                  <div className="font-sans text-xs text-gray-400 uppercase tracking-widest mb-1">Year</div>
                  <div className="font-serif text-lg font-light text-white">{currentProjectData.details.year}</div>
                </div>
              </div>

              <button className="group inline-flex items-center text-amber-300 hover:text-white transition-colors duration-300 font-sans text-sm tracking-widest">
                View Full Project
                <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        <div
          className={`mt-16 transition-all duration-1000 ease-out delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="flex justify-center space-x-4">
            {projects.map((project, index) => (
              <button
                key={project.id}
                onClick={() => setCurrentProject(index)}
                className={`w-16 h-16 overflow-hidden transition-all duration-300 ${
                  index === currentProject
                    ? 'ring-2 ring-amber-300 ring-offset-2 ring-offset-gray-900'
                    : 'hover:ring-2 hover:ring-gray-600 hover:ring-offset-2 hover:ring-offset-gray-900'
                }`}
                style={{ borderRadius: '4px' }}
              >
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default PortfolioSection;
