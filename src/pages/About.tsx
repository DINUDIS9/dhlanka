import React from 'react';
import { Building2, Hammer, HardHat, Ruler } from 'lucide-react';

function About() {
  return (
    <div className="min-h-screen pt-24 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">About DH Lanka Engineering</h1>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="text-gray-300 space-y-4">
            <p className="text-lg">
              DH Lanka is a leading construction and engineering company based in Sri Lanka, 
              delivering excellence in infrastructure development and construction services 
              across the nation.
            </p>
            <p className="text-lg">
              With our team of experienced engineers and construction professionals, 
              we specialize in commercial, residential, and industrial projects, 
              bringing innovation and quality to every endeavor.
            </p>
            <p className="text-lg">
              Our commitment to sustainable construction practices and cutting-edge 
              engineering solutions has established us as a trusted partner in 
              Sri Lanka's development landscape.
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8">
            <div className="grid grid-cols-1 gap-6">
              {[
                {
                  icon: <Building2 className="w-8 h-8 text-pink-500" />,
                  title: "Infrastructure Development",
                  description: "Commercial and residential construction excellence"
                },
                {
                  icon: <HardHat className="w-8 h-8 text-indigo-500" />,
                  title: "Expert Engineering",
                  description: "Professional team of qualified engineers"
                },
                {
                  icon: <Ruler className="w-8 h-8 text-purple-500" />,
                  title: "Project Planning",
                  description: "Comprehensive construction management"
                },
                {
                  icon: <Hammer className="w-8 h-8 text-blue-500" />,
                  title: "Quality Construction",
                  description: "Superior workmanship and materials"
                }
              ].map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  {feature.icon}
                  <div>
                    <h3 className="text-white font-semibold">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;