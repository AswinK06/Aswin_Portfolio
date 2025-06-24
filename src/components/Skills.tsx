
import { Award, Sparkles, Eye } from 'lucide-react';
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

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
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
      </div>
    </section>
  );
};

export default Skills;
