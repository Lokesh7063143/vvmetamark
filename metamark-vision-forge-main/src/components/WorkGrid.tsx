
import { useState } from 'react';
import { Eye, X, ChevronLeft, ChevronRight } from 'lucide-react';

const WorkGrid = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const filters = ['All', 'Brand Identity', 'Campaign', 'Digital Marketing', 'Packaging', 'Space Design', 'Brochure'];

  const projects = [
    // Real Projects
    {
      id: 1,
      title: "The Takshilah Global School",
      category: "Brand Identity",
      image: "/The-Takshilah-Global-School.jpg",
      preview: "/The-Takshilah-Global-School1.jpg",
      description: "🎓 Complete branding & school promotions for The Takshilah Global School including logo design, promotional materials, and brand guidelines.",
      isReal: true
    },
    {
      id: 2,
      title: "Two Dots",
      category: "Digital Marketing",
      image: "/Two-Dots.jpg",
      preview: "/Two-Dots1.jpg",
      description: "🎯 Logo & digital identity creation for Two Dots, establishing a strong online presence and brand recognition.",
      isReal: true
    },
    {
      id: 3,
      title: "Agro Life Print_R",
      category: "Brand Identity",
      image: "/Agro-Life-Printr.jpg",
      preview: "/Agro-Life-Printr1.jpg",
      description: "🌱 Agri-brand visuals for Agro Life Print_R including packaging design and agricultural marketing materials.",
      isReal: true
    },
    {
      id: 4,
      title: "Pixel - R",
      category: "Campaign",
      image: "/PixelR.jpg",
      preview: "/PixelR1.jpg",
      description: "🖼 Creative edits & reels production for Pixel - R, featuring dynamic visual content and social media campaigns.",
      isReal: true
    },
    {
      id: 5,
      title: "SGB Publishing",
      category: "Brochure",
      image: "/SGB-Publishing.jpg",
      preview: "/SGB-Publishing1.jpg",
      description: "📚 Book covers & publishing design for SGB, creating compelling visual narratives for literary works.",
      isReal: true
    },
    {
      id: 6,
      title: "PS Endeavours",
      category: "Brand Identity",
      image: "/PS-Endeavours.jpg",
      preview: "/PS-Endeavours1.jpg",
      description: "🚀 Startup identity & launch visuals for PS Endeavours, establishing a strong foundation for business growth.",
      isReal: true
    },
    // Dummy Projects
    {
      id: 7,
      title: "Print-R",
      category: "Brand Identity",
      image: "/Tech-Startup-Branding.jpg",
      preview: "/Tech-Startup-Branding1.jpg",
      description: "Complete brand identity design for innovative tech startup including logo, color palette, and brand guidelines.",
      isReal: false
    },
    {
      id: 8,
      title: "Summer Campaign",
      category: "Campaign",
      image: "/Summer-Campaign.jpg",
      preview: "/Summer-Campaign1.jpg",
      description: "Creative summer marketing campaign featuring vibrant visuals and engaging content strategy.",
      isReal: false
    },
    {
      id: 9,
      title: "Premium Food Packaging",
      category: "Packaging",
      image: "/Premium-Food-Packaging.jpg",
      preview: "/Premium-Food-Packaging1.jpg",
      description: "Luxury packaging design for premium food products with sustainable materials.",
      isReal: false
    },
    {
      id: 10,
      title: "Modern Office Design",
      category: "Space Design",
      image: "/Modern-Office-Design.jpg",
      preview: "/Modern-Office-Design1.jpg",
      description: "Contemporary office space design focusing on productivity and employee wellbeing.",
      isReal: false
    },
    {
      id: 11,
      title: "Digital Transformation",
      category: "Digital Marketing",
      image: "/Digital-Transformation.jpg",
      preview: "/Digital-Transformation1.jpg",
      description: "Comprehensive digital transformation strategy for traditional business.",
      isReal: false
    },
    {
      id: 12,
      title: "Annual Report Design",
      category: "Brochure",
      image: "/Annual-Report-Design.jpg",
      preview: "/Annual-Report-Design1.jpg",
      description: "Professional annual report design with infographics and data visualization.",
      isReal: false
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="work" className="py-20 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-vv-dark mb-4">
            OUR <span className="text-vv-primary">WORK</span>
          </h2>
          <div className="w-24 h-1 bg-vv-primary mx-auto mb-8"></div>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-vv-primary text-vv-dark'
                    : 'bg-white text-vv-dark hover:bg-vv-primary hover:text-vv-dark'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="portfolio-item bg-white rounded-lg overflow-hidden shadow-lg cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <div className="portfolio-overlay absolute inset-0 bg-vv-dark/80 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Eye size={32} className="mb-2 mx-auto" />
                    <p className="font-medium">View Project</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-vv-dark mb-2">{project.title}</h3>
                <p className="text-vv-primary font-medium">{project.category}</p>
                {project.isReal && (
                  <span className="inline-block mt-2 px-2 py-1 bg-vv-orange text-white text-xs rounded-full">
                    Featured Project
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-y-auto relative">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 bg-vv-dark/80 text-white p-2 rounded-full hover:bg-vv-dark transition-colors"
              >
                <X size={24} />
              </button>
              
              <img
                src={selectedProject.preview}
                alt={selectedProject.title}
                className="w-full max-h-96 object-cover"
              />
              
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-3xl font-bold text-vv-dark">{selectedProject.title}</h3>
                  {selectedProject.isReal && (
                    <span className="px-3 py-1 bg-vv-orange text-white text-sm rounded-full">
                      Featured
                    </span>
                  )}
                </div>
                <p className="text-vv-primary font-medium mb-4">{selectedProject.category}</p>
                <p className="text-vv-dark/80 text-lg leading-relaxed">{selectedProject.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default WorkGrid;
