
import Header from '@/components/Header';
import HeroSlider from '@/components/HeroSlider';
import VideoSection from '@/components/VideoSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import WorkGrid from '@/components/WorkGrid';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSlider />
      <VideoSection />
      <AboutSection />
      <ServicesSection />
      <WorkGrid />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
};

export default Index;
