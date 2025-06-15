
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "Wanderluxe",
      description: "Developed a Tourism Management System using JavaScript & MySQL, streamlining bookings and reducing manual effort by 40%. Features comprehensive booking automation and database optimization using HTML, CSS, JavaScript, MySQL, and VS Code.",
      tech: ["JavaScript", "MySQL", "HTML", "CSS", "VS Code"],
      type: "Tourism Management System",
      highlights: ["40% efficiency improvement", "Booking automation", "Database optimization", "User-friendly interface"]
    },
    {
      title: "Consultancy Project",
      description: "Created a user-friendly UI/UX for a temple website, designing login/signup modules, a landing page, and an employment details section using Figma for clean, intuitive design.",
      tech: ["UI/UX Design", "Figma", "Frontend Development", "User Authentication"],
      type: "Temple Management Platform",
      highlights: ["Complete UI/UX design", "User authentication system", "Employment management", "Professional Figma design"]
    },
    {
      title: "Agriseithi",
      description: "Built a responsive web platform providing real-time agricultural insights, integrating APIs for data-driven updates using React.js, HTML, CSS, and JavaScript to enhance accessibility for farmers.",
      tech: ["React.js", "JavaScript", "APIs", "HTML", "CSS", "Responsive Design"],
      type: "Agricultural Technology Platform",
      highlights: ["Real-time data integration", "API integration", "Farmer accessibility", "Responsive design", "Data-driven insights"]
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-blue-900/40 to-teal-900/70"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-blue-900/20"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 border border-slate-700/50 hover:border-cyan-500/50 hover:shadow-2xl">
                <div className="p-6">
                  <div className="mb-4">
                    <span className="text-cyan-400 text-sm font-medium">{project.type}</span>
                    <h3 className="text-xl font-bold text-white mt-2 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2">Key Highlights:</h4>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-cyan-400 text-sm">• {highlight}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-xs border border-blue-500/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <Button size="sm" variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white">
                      <Github size={16} className="mr-2" />
                      Code
                    </Button>
                    <Button size="sm" className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700">
                      <ExternalLink size={16} className="mr-2" />
                      Demo
                    </Button>
                  </div>
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
