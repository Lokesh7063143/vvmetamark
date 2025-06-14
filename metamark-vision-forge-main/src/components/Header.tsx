
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  const navigationItems = [
    { name: 'Home', href: 'hero', label: 'Home' },
    { name: 'About', href: 'about', label: 'About' },
    { name: 'Services', href: 'services', label: 'Services' },
    { name: 'Work', href: 'work', label: 'Work' },
    { name: 'Testimonials', href: 'testimonials', label: 'Testimonials' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Scroll spy functionality
      const sections = navigationItems.map(item => document.getElementById(item.href));
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(navigationItems[index].href);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src="/lovable-uploads/f81bb670-18d4-4334-b6c0-f362092449cb.png" 
              alt="VV Metamark" 
              className="h-10 lg:h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`font-medium transition-colors duration-200 ${
                  activeSection === item.href
                    ? 'text-vv-orange'
                    : 'text-vv-dark hover:text-vv-orange'
                }`}
              >
                {item.label}
              </button>
            ))}
            
            {/* GET IN TOUCH Button */}
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-vv-orange hover:bg-vv-dark text-white font-bold py-2 px-6 rounded-lg transition-colors duration-300"
            >
              GET IN TOUCH
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-vv-dark hover:text-vv-orange transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t">
            <nav className="py-4">
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`block w-full px-4 py-3 text-left font-medium transition-colors duration-200 ${
                    activeSection === item.href
                      ? 'text-vv-orange bg-vv-primary/5'
                      : 'text-vv-dark hover:text-vv-orange hover:bg-vv-primary/5'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              
              {/* Mobile GET IN TOUCH Button */}
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full mx-4 mt-4 bg-vv-orange hover:bg-vv-dark text-white font-bold py-3 rounded-lg transition-colors duration-300"
              >
                GET IN TOUCH
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
