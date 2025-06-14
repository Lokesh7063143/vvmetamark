
const AboutSection = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-vv-dark mb-6">
            ABOUT <span className="text-vv-primary">VV METAMARK</span>
          </h2>
          <div className="w-24 h-1 bg-vv-primary mx-auto mb-12"></div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-vv-dark mb-4">
                A Creative Force with Purpose
              </h3>
              <p className="text-lg text-vv-dark/80 leading-relaxed">
                Greetings from <span className="font-bold text-vv-orange">VV Metamark</span>, a creative force driven by purpose and passion. 
                "VV" bears the initials of its founders, <span className="font-bold">Venkataswari</span> and <span className="font-bold">Vani</span>, 
                but the spirit behind it is creativity.
              </p>
            </div>

            <div>
              <p className="text-lg text-vv-dark/80 leading-relaxed">
                With years of experience as pioneers in <span className="font-bold text-vv-blue">digital marketing, content production, 
                graphic design, and video editing</span>, both partners are based in Bangalore.
              </p>
            </div>

            <div>
              <p className="text-lg text-vv-dark/80 leading-relaxed">
                VV Metamark is more than just an agency — it's a movement that aims to provide 
                <span className="font-bold text-vv-orange"> Ambur, Vellore</span>, and beyond with top-notch creative solutions.
              </p>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            <div className="bg-vv-primary/5 p-8 rounded-lg">
              <h4 className="text-xl font-bold text-vv-dark mb-4">Our Vision</h4>
              <p className="text-vv-dark/80 leading-relaxed">
                To become a trusted creative partner for individuals, institutions, and enterprises by delivering 
                accessible, innovative, and impactful branding and digital marketing services.
              </p>
            </div>

            <div className="bg-vv-blue/5 p-8 rounded-lg">
              <h4 className="text-xl font-bold text-vv-dark mb-4">Our Mission</h4>
              <ul className="space-y-3 text-vv-dark/80">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-vv-orange rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Empower small businesses and startups with professional branding
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-vv-orange rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Bring urban-level creativity to semi-urban and rural regions
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-vv-orange rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Bridge the digital divide with tailored content strategies
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
