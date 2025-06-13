
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "Tourism Management System",
      description: "Developed using JavaScript & MySQL, streamlining bookings and reducing manual effort by 40%. Leveraged HTML, CSS, JavaScript, MySQL, and VS Code.",
      tech: ["JavaScript", "MySQL", "HTML", "CSS"],
      type: "Full-Stack Application",
      highlights: ["40% efficiency improvement", "Booking automation", "Database optimization"]
    },
    {
      title: "Temple Management Platform",
      description: "Comprehensive project with user-friendly UI/UX for temple operations, featuring login/signup modules, landing page, and employment details section using Figma for design.",
      tech: ["UI/UX Design", "Figma", "Frontend Development"],
      type: "Web Platform",
      highlights: ["Complete UI/UX design", "User authentication", "Employment management"]
    },
    {
      title: "Agricultural Web Platform",
      description: "Built a responsive platform providing real-time agricultural insights, integrating APIs for data-driven updates using React.js, HTML, CSS, and JavaScript to enhance accessibility for farmers.",
      tech: ["React.js", "JavaScript", "APIs", "Responsive Design"],
      type: "Agricultural Technology",
      highlights: ["Real-time data integration", "API integration", "Farmer accessibility"]
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-16">Featured Projects</h2>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-slate-800/50 rounded-lg overflow-hidden hover:bg-slate-700/50 transition-all duration-300 hover:scale-105">
              <div className="p-6">
                <div className="mb-4">
                  <span className="text-blue-400 text-sm font-medium">{project.type}</span>
                  <h3 className="text-xl font-bold text-white mt-2">{project.title}</h3>
                </div>
                
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">Key Highlights:</h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-green-400 text-sm">• {highlight}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button size="sm" variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white">
                    <Github size={16} className="mr-2" />
                    Code
                  </Button>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    <ExternalLink size={16} className="mr-2" />
                    Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
