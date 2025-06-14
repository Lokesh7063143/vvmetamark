
import { useState } from 'react';
import { Play, ArrowDown } from 'lucide-react';

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="relative h-screen overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        {isPlaying ? (
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/vvmetamark video.mp4" type="video/mp4" />
          </video>
        ) : (
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/Videobg.jpg')"
            }}
          />
        )}
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-vv-dark/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl text-center mx-auto">
            {!isPlaying && (
              <button
                onClick={() => setIsPlaying(true)}
                className="mb-8 bg-vv-primary hover:bg-vv-orange text-vv-dark p-6 rounded-full transition-all duration-300 hover:scale-110 mx-auto block"
              >
                <Play size={40} fill="currentColor" />
              </button>
            )}
            
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              We Are <span className="text-vv-primary">VV Metamark</span>
            </h2>
            
            <p className="text-xl lg:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              A passionate team of creative professionals dedicated to transforming brands through 
              <span className="text-vv-primary font-semibold"> innovative design</span>, 
              <span className="text-vv-primary font-semibold"> strategic marketing</span>, and 
              <span className="text-vv-primary font-semibold"> digital excellence</span>.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
              <div className="text-center">
                <div className="text-4xl font-bold text-vv-primary mb-2">89+</div>
                <div className="text-lg">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-vv-primary mb-2">100+</div>
                <div className="text-lg">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-vv-primary mb-2">3+</div>
                <div className="text-lg">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Arrow */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <button
          onClick={() => scrollToSection('services')}
          className="bounce-arrow text-white hover:text-vv-primary transition-colors duration-300"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default VideoSection;
