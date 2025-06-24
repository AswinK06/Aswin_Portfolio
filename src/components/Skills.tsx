
import { Award, Sparkles, Trophy, Star } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["C", "Python", "Java", "JavaScript"],
      color: "purple",
      icon: "💻"
    },
    {
      title: "Web Technologies",
      skills: ["HTML", "CSS", "React.js", "Bootstrap"],
      color: "violet",
      icon: "🌐"
    },
    {
      title: "Databases",
      skills: ["MySQL", "MongoDB"],
      color: "indigo",
      icon: "🗄️"
    },
    {
      title: "Development & Testing Tools",
      skills: ["Git", "GitHub", "VS Code", "Figma", "Postman"],
      color: "pink",
      icon: "🛠️"
    }
  ];

  const certifications = [
    {
      title: "Java Programming Fundamentals",
      provider: "INFOSYS SPRINGBOARD",
      description: "Comprehensive course covering Java fundamentals and object-oriented programming",
      date: "November 2024",
      color: "purple",
      score: "Completed Successfully"
    },
    {
      title: "Introduction to AI",
      provider: "INFOSYS SPRINGBOARD", 
      description: "Introduction to Artificial Intelligence concepts and applications",
      date: "November 2024",
      color: "purple",
      score: "Completed Successfully"
    },
    {
      title: "Cyber Security and Privacy",
      provider: "NPTEL",
      description: "Advanced concepts in cybersecurity, privacy protection, and secure systems",
      date: "July-October 2024",
      color: "violet",
      score: "Completed Successfully"
    },
    {
      title: "A Joy of Computing Using Python",
      provider: "NPTEL",
      description: "Python programming with focus on computational thinking and problem solving",
      date: "July-October 2023",
      color: "violet",
      score: "Completed Successfully"
    },
    {
      title: "Privacy and Security in Online Social Media",
      provider: "NPTEL",
      description: "Understanding privacy and security challenges in social media platforms",
      date: "January-April 2025",
      color: "violet",
      score: "Completed Successfully"
    },
    {
      title: "Oracle SQL Basics",
      provider: "COURSERA(LEARNQUEST)",
      description: "Fundamental SQL concepts and database management with Oracle",
      date: "February 2024",
      color: "indigo",
      score: "Completed Successfully"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      purple: "bg-gradient-to-br from-purple-900/50 to-purple-800/30 border-purple-500/50 text-purple-300 hover:from-purple-800/60 hover:to-purple-700/40",
      violet: "bg-gradient-to-br from-violet-900/50 to-violet-800/30 border-violet-500/50 text-violet-300 hover:from-violet-800/60 hover:to-violet-700/40",
      indigo: "bg-gradient-to-br from-indigo-900/50 to-indigo-800/30 border-indigo-500/50 text-indigo-300 hover:from-indigo-800/60 hover:to-indigo-700/40",
      pink: "bg-gradient-to-br from-pink-900/50 to-pink-800/30 border-pink-500/50 text-pink-300 hover:from-pink-800/60 hover:to-pink-700/40"
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="skills" className="py-20 px-4 relative overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-purple-900/40 to-indigo-900/70"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-900/30 via-transparent to-purple-900/20"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-violet-500/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-indigo-500/10 rounded-full blur-xl animate-pulse delay-500"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="text-violet-400 animate-pulse" size={32} />
            <h2 className="text-4xl md:text-5xl font-bold text-white bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <Sparkles className="text-violet-400 animate-pulse" size={32} />
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-400 to-purple-400 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {skillCategories.map((category, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative bg-slate-800/40 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:bg-slate-700/40 transition-all duration-300 hover:scale-105 hover:border-slate-600/50 hover:shadow-2xl">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">{category.icon}</div>
                  <h3 className="text-white font-semibold text-lg bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
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
            <Trophy className="text-violet-400 animate-bounce" size={40} />
            <h3 className="text-3xl md:text-4xl font-semibold text-white bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Professional Certifications
            </h3>
            <Trophy className="text-violet-400 animate-bounce" size={40} />
          </div>
          <div className="flex items-center justify-center gap-2 mb-8">
            <Star className="text-violet-400" size={20} />
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Professional certifications and achievements in technology
            </p>
            <Star className="text-violet-400" size={20} />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-400/20 to-purple-400/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="relative bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700/50 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 hover:border-slate-600/50 hover:shadow-2xl">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award size={32} className="text-white" />
                    </div>
                    <h4 className="text-white font-semibold mb-2 group-hover:text-violet-400 transition-colors text-lg">
                      {cert.title}
                    </h4>
                    <p className="text-violet-400 text-sm mb-2 font-medium">{cert.provider}</p>
                  </div>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">{cert.description}</p>
                  <div className="flex items-center justify-between text-sm mb-4">
                    <span className="text-purple-400 font-medium">{cert.score}</span>
                    <span className="text-gray-400">{cert.date}</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="flex items-center gap-2 bg-gradient-to-r from-violet-900/30 to-purple-900/30 px-4 py-2 rounded-full border border-violet-500/30">
                      <Award size={16} className="text-violet-400" />
                      <span className="text-violet-400 text-xs font-medium">Certified</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
