
import { Award, Sparkles } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["C", "Python", "Java", "JavaScript"],
      color: "gray",
      icon: "💻"
    },
    {
      title: "Web Technologies",
      skills: ["HTML", "CSS", "React.js", "Bootstrap"],
      color: "slate",
      icon: "🌐"
    },
    {
      title: "Databases",
      skills: ["MySQL", "MongoDB"],
      color: "zinc",
      icon: "🗄️"
    },
    {
      title: "Development & Testing Tools",
      skills: ["Git", "GitHub", "VS Code", "Figma", "Postman"],
      color: "stone",
      icon: "🛠️"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      gray: "bg-gradient-to-br from-gray-800/50 to-gray-900/30 border-gray-600/50 text-gray-300 hover:from-gray-700/60 hover:to-gray-800/40",
      slate: "bg-gradient-to-br from-slate-800/50 to-slate-900/30 border-slate-600/50 text-slate-300 hover:from-slate-700/60 hover:to-slate-800/40",
      zinc: "bg-gradient-to-br from-zinc-800/50 to-zinc-900/30 border-zinc-600/50 text-zinc-300 hover:from-zinc-700/60 hover:to-zinc-800/40",
      stone: "bg-gradient-to-br from-stone-800/50 to-stone-900/30 border-stone-600/50 text-stone-300 hover:from-stone-700/60 hover:to-stone-800/40"
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="skills" className="py-20 px-4 relative overflow-hidden">
      {/* Professional Black Background */}
      <div className="absolute inset-0 bg-black"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/30 via-transparent to-gray-800/20"></div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="text-gray-400" size={32} />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Skills & Technologies
            </h2>
            <Sparkles className="text-gray-400" size={32} />
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-gray-600 to-gray-400 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-700/20 to-gray-600/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative bg-gray-900/60 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:bg-gray-800/60 transition-all duration-300 hover:scale-105 hover:border-gray-600/50 hover:shadow-2xl">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">{category.icon}</div>
                  <h3 className="text-white font-semibold text-lg">
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
