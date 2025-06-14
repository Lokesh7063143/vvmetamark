
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowDown } from 'lucide-react';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Creative Design",
      subtitle: "That Speaks",
      description: "Transforming brands through innovative design solutions that captivate and inspire your audience.",
      image: "/slider-image1.jpg",
      cta: "Explore Our Work"
    },
    {
      id: 2,
      title: "Digital Marketing",
      subtitle: "That Converts",
      description: "Strategic digital campaigns that drive engagement, boost visibility, and deliver measurable results.",
      image: "/slider-image.jpg",
      cta: "See Our Campaigns"
    },
    {
      id: 3,
      title: "Brand Identity",
      subtitle: "That Resonates",
      description: "Comprehensive branding solutions that create lasting connections with your target audience.",
      image: "/slider-image2.jpg",
      cta: "View Portfolio"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 h-full flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl">
                <h1 
                  className={`text-5xl lg:text-7xl font-bold text-white mb-4 ${
                    index === currentSlide ? 'slide-in-left' : ''
                  }`}
                >
                  <span className="text-vv-primary">{slide.title}</span>
                  <br />
                  {slide.subtitle}
                </h1>
                <p 
                  className={`text-xl lg:text-2xl text-white/90 mb-8 max-w-2xl ${
                    index === currentSlide ? 'fade-in-up' : ''
                  }`}
                  style={{ animationDelay: '0.3s' }}
                >
                  {slide.description}
                </p>
                <button
                  onClick={() => scrollToSection('work')}
                  className={`bg-vv-primary hover:bg-vv-orange text-vv-dark font-bold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 ${
                    index === currentSlide ? 'slide-in-right' : ''
                  }`}
                  style={{ animationDelay: '0.6s' }}
                >
                  {slide.cta}
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows - Plain White */}
      <button
        onClick={prevSlide}
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 text-white hover:text-vv-primary transition-colors duration-300"
      >
        <ChevronLeft size={32} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 text-white hover:text-vv-primary transition-colors duration-300"
      >
        <ChevronRight size={32} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-vv-primary scale-125' : 'bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Scroll Down Arrow */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <button
          onClick={() => scrollToSection('about')}
          className="bounce-arrow text-white hover:text-vv-primary transition-colors duration-300"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default HeroSlider;
