import { useState } from 'react';
import { ExternalLink, Award, X, Sparkles, Trophy, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Skills = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<any>(null);

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["C", "Python", "Java", "JavaScript"],
      color: "blue",
      icon: "💻"
    },
    {
      title: "Web Technologies",
      skills: ["HTML", "CSS", "React.js", "Bootstrap"],
      color: "green",
      icon: "🌐"
    },
    {
      title: "Databases",
      skills: ["MySQL", "MongoDB"],
      color: "purple",
      icon: "🗄️"
    },
    {
      title: "Development & Testing Tools",
      skills: ["Git", "GitHub", "VS Code", "Figma", "Postman"],
      color: "orange",
      icon: "🛠️"
    }
  ];

  const certifications = [
    {
      title: "Java Programming Fundamentals",
      provider: "INFOSYS SPRINGBOARD",
      image: "/lovable-uploads/6accd7f4-d704-4f4f-8634-eb0421b5cfff.png",
      description: "Comprehensive course covering Java fundamentals and object-oriented programming",
      date: "November 2024",
      color: "blue",
      score: "Completed Successfully"
    },
    {
      title: "Introduction to AI",
      provider: "INFOSYS SPRINGBOARD", 
      image: "/lovable-uploads/ab470bd7-0d10-47aa-b20b-738dd468d86a.png",
      description: "Introduction to Artificial Intelligence concepts and applications",
      date: "November 2024",
      color: "blue",
      score: "Completed Successfully"
    },
    {
      title: "Cyber Security and Privacy",
      provider: "NPTEL",
      image: "/lovable-uploads/6e3b40a0-6434-4ddc-9789-2bdd111ac521.png",
      description: "Advanced concepts in cybersecurity, privacy protection, and secure systems",
      date: "July-October 2024",
      color: "green",
      score: "Completed Successfully"
    },
    {
      title: "A Joy of Computing Using Python",
      provider: "NPTEL",
      image: "/lovable-uploads/555145da-f8fd-4199-956c-d99dcc6d16dc.png",
      description: "Python programming with focus on computational thinking and problem solving",
      date: "July-October 2023",
      color: "green",
      score: "Completed Successfully"
    },
    {
      title: "Privacy and Security in Online Social Media",
      provider: "NPTEL",
      image: "/lovable-uploads/5aa98b0d-f17b-4106-87ec-3d6ddc3486ee.png",
      description: "Understanding privacy and security challenges in social media platforms",
      date: "January-April 2025",
      color: "green",
      score: "Completed Successfully"
    },
    {
      title: "Oracle SQL Basics",
      provider: "COURSERA(LEARNQUEST)",
      image: "/lovable-uploads/a2fcc6a3-680e-4314-9cea-eda493d0de1d.png",
      description: "Fundamental SQL concepts and database management with Oracle",
      date: "February 2024",
      color: "purple",
      score: "Completed Successfully"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-gradient-to-br from-blue-900/50 to-blue-800/30 border-blue-500/50 text-blue-300 hover:from-blue-800/60 hover:to-blue-700/40",
      green: "bg-gradient-to-br from-green-900/50 to-green-800/30 border-green-500/50 text-green-300 hover:from-green-800/60 hover:to-green-700/40",
      purple: "bg-gradient-to-br from-purple-900/50 to-purple-800/30 border-purple-500/50 text-purple-300 hover:from-purple-800/60 hover:to-purple-700/40",
      orange: "bg-gradient-to-br from-orange-900/50 to-orange-800/30 border-orange-500/50 text-orange-300 hover:from-orange-800/60 hover:to-orange-700/40"
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="skills" className="py-20 px-4 relative overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-blue-900/40 to-teal-900/70"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/30 via-transparent to-blue-900/20"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-teal-500/10 rounded-full blur-xl animate-pulse delay-500"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="text-cyan-400 animate-pulse" size={32} />
            <h2 className="text-4xl md:text-5xl font-bold text-white bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <Sparkles className="text-cyan-400 animate-pulse" size={32} />
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {skillCategories.map((category, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative bg-slate-800/40 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:bg-slate-700/40 transition-all duration-300 hover:scale-105 hover:border-slate-600/50 hover:shadow-2xl">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">{category.icon}</div>
                  <h3 className="text-white font-semibold text-lg bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    {category.title}
                  </h3>
                </div>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className={`px-3 py-2 rounded-lg border text-sm text-center transition-all duration-200 hover:scale-105 ${getColorClasses(category.color)}`}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Trophy className="text-cyan-400 animate-bounce" size={40} />
            <h3 className="text-3xl md:text-4xl font-semibold text-white bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">
              Professional Certifications
            </h3>
            <Trophy className="text-cyan-400 animate-bounce" size={40} />
          </div>
          <div className="flex items-center justify-center gap-2 mb-8">
            <Star className="text-cyan-400" size={20} />
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Click on any certification to view the complete certificate
            </p>
            <Star className="text-cyan-400" size={20} />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div 
                key={index} 
                className="group relative cursor-pointer"
                onClick={() => setSelectedCertificate(cert)}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="relative bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 hover:border-slate-600/50 hover:shadow-2xl">
                  <div className="relative overflow-hidden rounded-lg mb-4 group-hover:shadow-lg transition-all duration-300">
                    <img 
                      src={cert.image} 
                      alt={cert.title}
                      className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <h4 className="text-white font-semibold mb-2 group-hover:text-cyan-400 transition-colors text-lg">
                    {cert.title}
                  </h4>
                  <p className="text-cyan-400 text-sm mb-2 font-medium">{cert.provider}</p>
                  <p className="text-gray-300 text-sm mb-3 line-clamp-2">{cert.description}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-blue-400 font-medium">{cert.score}</span>
                    <span className="text-gray-400">{cert.date}</span>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center gap-1">
                      <Award size={16} className="text-cyan-400" />
                      <span className="text-cyan-400 text-xs font-medium">Certified</span>
                    </div>
                    <ExternalLink size={16} className="text-gray-400 group-hover:text-cyan-400 transition-colors" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Certificate Modal */}
      {selectedCertificate && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-auto border border-slate-700/50 shadow-2xl">
            <div className="p-6 border-b border-slate-700 flex items-center justify-between bg-gradient-to-r from-cyan-900/30 to-blue-900/30">
              <div>
                <h3 className="text-2xl font-bold text-white bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  {selectedCertificate.title}
                </h3>
                <p className="text-cyan-400 text-lg">{selectedCertificate.provider}</p>
                <p className="text-blue-400 text-sm font-medium">{selectedCertificate.score}</p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSelectedCertificate(null)}
                className="text-gray-400 hover:text-white hover:bg-slate-700/50 rounded-full p-2"
              >
                <X size={24} />
              </Button>
            </div>
            <div className="p-6">
              <div className="bg-white rounded-xl p-4 mb-6 shadow-xl">
                <img 
                  src={selectedCertificate.image} 
                  alt={selectedCertificate.title}
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="text-center space-y-2">
                <p className="text-gray-300 text-lg">{selectedCertificate.description}</p>
                <p className="text-cyan-400 font-medium">Completed: {selectedCertificate.date}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Skills;
