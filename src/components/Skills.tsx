
import { useState } from 'react';
import { ExternalLink, Award, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Skills = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<any>(null);

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["C", "Python", "Java", "JavaScript"],
      color: "blue"
    },
    {
      title: "Web Technologies",
      skills: ["HTML", "CSS", "React.js", "Bootstrap"],
      color: "green"
    },
    {
      title: "Databases",
      skills: ["MySQL", "MongoDB"],
      color: "purple"
    },
    {
      title: "Tools & Version Control",
      skills: ["Git", "GitHub", "VS Code", "Figma", "Postman"],
      color: "orange"
    }
  ];

  const certifications = [
    {
      title: "Java Programming Fundamentals",
      provider: "INFOSYS SPRINGBOARD",
      image: "/placeholder.svg", // Replace with actual uploaded image
      description: "Comprehensive course covering Java fundamentals and object-oriented programming",
      date: "2024",
      color: "blue"
    },
    {
      title: "Introduction to AI",
      provider: "INFOSYS SPRINGBOARD", 
      image: "/placeholder.svg", // Replace with actual uploaded image
      description: "Introduction to Artificial Intelligence concepts and applications",
      date: "2024",
      color: "blue"
    },
    {
      title: "Cyber Security and Privacy",
      provider: "NPTEL",
      image: "/placeholder.svg", // Replace with actual uploaded image
      description: "Advanced concepts in cybersecurity, privacy protection, and secure systems",
      date: "2024",
      color: "green"
    },
    {
      title: "Joy of Computing Using Python",
      provider: "NPTEL",
      image: "/placeholder.svg", // Replace with actual uploaded image
      description: "Python programming with focus on computational thinking and problem solving",
      date: "2024",
      color: "green"
    },
    {
      title: "Privacy and Security in Online Social Media",
      provider: "NPTEL",
      image: "/placeholder.svg", // Replace with actual uploaded image
      description: "Understanding privacy and security challenges in social media platforms",
      date: "2024",
      color: "green"
    },
    {
      title: "Oracle SQL Basics",
      provider: "COURSERA",
      image: "/placeholder.svg", // Replace with actual uploaded image
      description: "Fundamental SQL concepts and database management with Oracle",
      date: "2024",
      color: "purple"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-900/50 border-blue-500/50 text-blue-300",
      green: "bg-green-900/50 border-green-500/50 text-green-300",
      purple: "bg-purple-900/50 border-purple-500/50 text-purple-300",
      orange: "bg-orange-900/50 border-orange-500/50 text-orange-300"
    };
    return colors[color as keyof typeof colors];
  };

  const getCertColorClasses = (color: string) => {
    const colors = {
      blue: "bg-gradient-to-br from-blue-600 to-blue-800",
      green: "bg-gradient-to-br from-green-600 to-green-800",
      purple: "bg-gradient-to-br from-purple-600 to-purple-800",
      orange: "bg-gradient-to-br from-orange-600 to-orange-800"
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="skills" className="py-20 px-4 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/50 via-blue-900/30 to-purple-900/50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-center text-white mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Skills & Technologies
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-slate-800/30 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:bg-slate-700/30 transition-all duration-300 hover:scale-105 hover:border-slate-600/50">
              <h3 className="text-white font-semibold mb-4 text-lg">{category.title}</h3>
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
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-3xl font-semibold text-white mb-8 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            <Award className="inline-block mr-3 mb-1" size={32} />
            Professional Certifications
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Click on any certification to view the complete certificate
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={index} 
                className="group bg-slate-800/40 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:bg-slate-700/40 transition-all duration-300 hover:scale-105 cursor-pointer hover:border-slate-600/50"
                onClick={() => setSelectedCertificate(cert)}
              >
                <div className={`w-full h-32 rounded-lg mb-4 flex items-center justify-center text-white font-semibold ${getCertColorClasses(cert.color)}`}>
                  <Award size={48} />
                </div>
                <h4 className="text-white font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                  {cert.title}
                </h4>
                <p className="text-blue-400 text-sm mb-2 font-medium">{cert.provider}</p>
                <p className="text-gray-300 text-sm mb-3">{cert.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-xs">{cert.date}</span>
                  <ExternalLink size={16} className="text-gray-400 group-hover:text-blue-400 transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-auto">
            <div className="p-6 border-b border-slate-700 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-white">{selectedCertificate.title}</h3>
                <p className="text-blue-400">{selectedCertificate.provider}</p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSelectedCertificate(null)}
                className="text-gray-400 hover:text-white"
              >
                <X size={20} />
              </Button>
            </div>
            <div className="p-6">
              <div className="bg-white rounded-lg p-8 mb-4">
                <img 
                  src={selectedCertificate.image} 
                  alt={selectedCertificate.title}
                  className="w-full h-auto"
                />
              </div>
              <p className="text-gray-300 text-center">
                {selectedCertificate.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Skills;
