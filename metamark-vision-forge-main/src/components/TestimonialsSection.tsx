
import { Quote } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"

const TestimonialsSection = () => {
  const testimonials = [
    {
  id: 1,
  text: "VV Metamark transformed our brand identity completely. Their creative approach and attention to detail exceeded our expectations. The team's professionalism and innovative solutions helped us stand out in a competitive market.",
  author: "Priya Nair",
  company: "InnoTech India Pvt. Ltd.",
  position: "Chief Executive Officer"
},
{
  id: 2,
  text: "Working with VV Metamark was an absolute pleasure. They delivered exceptional digital marketing campaigns that significantly boosted our online presence and customer engagement. Highly recommended!",
  author: "Rohit Mehra",
  company: "Ayura Naturals",
  position: "Marketing Director"
},
{
  id: 3,
  text: "The packaging design created by VV Metamark for our premium product line was outstanding. It perfectly captured our brand essence and helped increase our sales by 40% in the first quarter.",
  author: "Nikita Sharma",
  company: "GlowCare Essentials",
  position: "Brand Manager"
},
{
  id: 4,
  text: "VV Metamark's digital transformation strategy revolutionized our business operations. Their expertise in web development and SEO helped us achieve a 300% increase in online traffic.",
  author: "Ankit Reddy",
  company: "NeoGrid Technologies",
  position: "Founder & CTO"
},
{
  id: 5,
  text: "The social media campaigns designed by VV Metamark were game-changing. Our engagement rates doubled within three months, and we saw a significant boost in brand awareness.",
  author: "Megha Kapoor",
  company: "StyleMantra",
  position: "Head of Marketing"
},
{
  id: 6,
  text: "From concept to execution, VV Metamark delivered beyond our expectations. Their creative vision and technical expertise made our product launch a tremendous success.",
  author: "Karan Desai",
  company: "ThinkBot Solutions",
  position: "Product Head"
},
{
  id: 7,
  text: "VV Metamark's comprehensive branding strategy helped us establish a strong market presence. Their attention to detail and creative solutions are truly exceptional.",
  author: "Shruti Iyer",
  company: "GreenSoul Organics",
  position: "Brand Director"
},
{
  id: 8,
  text: "The web development team at VV Metamark created a stunning, user-friendly website that perfectly represents our brand. The results speak for themselves - our conversion rates increased by 250%.",
  author: "Amit Bhargava",
  company: "WebWings Digital",
  position: "Managing Director"
}

  ];

  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-vv-orange">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-4">
            WHAT OUR <span className="text-vv-dark">CLIENTS SAY</span>
          </h2>
          <div className="w-24 h-1 bg-white mx-auto"></div>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative px-16">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 3000,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="bg-white rounded-lg p-8 shadow-lg relative hover:transform hover:scale-105 transition-all duration-300 h-full">
                    {/* Quote Icon Background */}
                    <Quote 
                      size={80} 
                      className="absolute top-4 right-4 text-vv-primary/10" 
                    />
                    
                    {/* Testimonial Text */}
                    <p className="text-vv-dark/80 text-lg leading-relaxed mb-6 relative z-10">
                      "{testimonial.text}"
                    </p>
                    
                    {/* Author Info */}
                    <div className="border-t border-vv-primary/20 pt-6">
                      <h4 className="font-bold text-vv-dark text-xl mb-1">
                        {testimonial.author}
                      </h4>
                      <p className="text-vv-primary font-medium">
                        {testimonial.position}
                      </p>
                      <p className="text-vv-dark/60">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-12 text-white border-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-vv-orange" />
            <CarouselNext className="-right-12 text-white border-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-vv-orange" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
