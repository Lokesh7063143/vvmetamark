
import { Palette, Monitor, Camera } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      title: "Design",
      icon: Palette,
      items: [
        "Brand identity & logo design",
        "Packaging",
        "ATL & BTL campaigns",
        "Social media creatives",
        "Website & App design",
        "Space design",
        "Book design"
      ]
    },
    {
      title: "Digital",
      icon: Monitor,
      items: [
        "Web development",
        "UI/UX",
        "Social media marketing",
        "Email marketing",
        "Media planning",
        "Search engine marketing",
        "Search engine optimization",
        "Online reputation management",
        "IT & consulting",
        "BPO services"
      ]
    },
    {
      title: "Production",
      icon: Camera,
      items: [
        "Printing",
        "Campaign shoot",
        "Photo shoot",
        "Video shoot",
        "Radio spot recording"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-vv-dark mb-4">
            WHAT WE <span className="text-vv-primary">DO</span>
          </h2>
          <div className="w-24 h-1 bg-vv-primary mx-auto"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group hover:transform hover:scale-105 transition-all duration-300"
            >
              {/* Icon and Title - Left Aligned with Rotating Circle */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-20 h-20 border-4 border-dashed rounded-full flex items-center justify-center animate-spin-slow transition-colors duration-300"
                     style={{ 
                       borderColor: '#ff890a',
                     }}
                     onMouseEnter={(e) => e.currentTarget.style.borderColor = '#ff6a00'}
                     onMouseLeave={(e) => e.currentTarget.style.borderColor = '#ff890a'}>
                  <service.icon 
                    size={32} 
                    className="transition-colors duration-300"
                    style={{ color: '#ff890a' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#ff6a00'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#ff890a'}
                  />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-vv-dark">
                  {service.title}
                </h3>
              </div>

              {/* Service Items */}
              <ul className="space-y-3 text-left">
                {service.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="text-vv-dark/80 hover:text-vv-orange transition-colors duration-200 cursor-default"
                  >
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
