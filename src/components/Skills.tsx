
import { Award, Sparkles, Code, Globe, Database, Settings } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "C", level: 85 },
        { name: "Python", level: 90 },
        { name: "Java", level: 80 },
        { name: "JavaScript", level: 85 }
      ],
      color: "blue",
      icon: Code
    },
    {
      title: "Web Technologies",
      skills: [
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
        { name: "React.js", level: 85 },
        { name: "Bootstrap", level: 80 }
      ],
      color: "green",
      icon: Globe
    },
    {
      title: "Databases", 
      skills: [
        { name: "MySQL", level: 85 },
        { name: "MongoDB", level: 75 }
      ],
      color: "purple",
      icon: Database
    },
    {
      title: "Development & Testing Tools",
      skills: [
        { name: "Git", level: 85 },
        { name: "GitHub", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "Figma", level: 75 },
        { name: "Postman", level: 80 }
      ],
      color: "orange",
      icon: Settings
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        card: "bg-gradient-to-br from-blue-900/50 to-blue-800/30 dark:from-blue-900/50 dark:to-blue-800/30 light:from-blue-50/80 light:to-blue-100/40 border-blue-600/50 dark:border-blue-600/50 light:border-blue-200/50 hover:from-blue-800/60 hover:to-blue-700/40",
        text: "text-blue-300 dark:text-blue-300 light:text-blue-900",
        progress: "bg-blue-500 dark:bg-blue-500 light:bg-blue-600",
        progressBg: "bg-blue-900/30 dark:bg-blue-900/30 light:bg-blue-100/50"
      },
      green: {
        card: "bg-gradient-to-br from-green-900/50 to-green-800/30 dark:from-green-900/50 dark:to-green-800/30 light:from-green-50/80 light:to-green-100/40 border-green-600/50 dark:border-green-600/50 light:border-green-200/50 hover:from-green-800/60 hover:to-green-700/40",
        text: "text-green-300 dark:text-green-300 light:text-green-900",
        progress: "bg-green-500 dark:bg-green-500 light:bg-green-600",
        progressBg: "bg-green-900/30 dark:bg-green-900/30 light:bg-green-100/50"
      },
      purple: {
        card: "bg-gradient-to-br from-purple-900/50 to-purple-800/30 dark:from-purple-900/50 dark:to-purple-800/30 light:from-purple-50/80 light:to-purple-100/40 border-purple-600/50 dark:border-purple-600/50 light:border-purple-200/50 hover:from-purple-800/60 hover:to-purple-700/40",
        text: "text-purple-300 dark:text-purple-300 light:text-purple-900",
        progress: "bg-purple-500 dark:bg-purple-500 light:bg-purple-600",
        progressBg: "bg-purple-900/30 dark:bg-purple-900/30 light:bg-purple-100/50"
      },
      orange: {
        card: "bg-gradient-to-br from-orange-900/50 to-orange-800/30 dark:from-orange-900/50 dark:to-orange-800/30 light:from-orange-50/80 light:to-orange-100/40 border-orange-600/50 dark:border-orange-600/50 light:border-orange-200/50 hover:from-orange-800/60 hover:to-orange-700/40",
        text: "text-orange-300 dark:text-orange-300 light:text-orange-900",
        progress: "bg-orange-500 dark:bg-orange-500 light:bg-orange-600",
        progressBg: "bg-orange-900/30 dark:bg-orange-900/30 light:bg-orange-100/50"
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="skills" className="py-20 px-4 relative overflow-hidden bg-black dark:bg-black light:bg-gradient-to-br light:from-gray-50 light:to-blue-50 transition-colors duration-300">
      {/* Professional Background */}
      <div className="absolute inset-0 bg-black dark:bg-black light:bg-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/30 via-transparent to-gray-800/20 dark:from-gray-900/30 dark:via-transparent dark:to-gray-800/20 light:from-gray-50/20 light:via-transparent light:to-blue-50/20"></div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] light:bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)]"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="text-gray-400 dark:text-gray-400 light:text-blue-600" size={32} />
            <h2 className="text-4xl md:text-5xl font-bold text-white dark:text-white light:text-gray-900">
              Skills & Technologies
            </h2>
            <Sparkles className="text-gray-400 dark:text-gray-400 light:text-blue-600" size={32} />
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-gray-600 to-gray-400 dark:from-gray-600 dark:to-gray-400 light:from-blue-400 light:to-indigo-400 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const colorClasses = getColorClasses(category.color);
            const IconComponent = category.icon;
            
            return (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-700/20 to-gray-600/20 dark:from-gray-700/20 dark:to-gray-600/20 light:from-blue-200/20 light:to-indigo-200/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className={`relative ${colorClasses.card} backdrop-blur-sm p-8 rounded-xl border transition-all duration-300 hover:scale-105 hover:shadow-2xl light:shadow-lg`}>
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${colorClasses.progressBg}`}>
                      <IconComponent size={24} className={colorClasses.text} />
                    </div>
                    <h3 className={`text-xl font-semibold ${colorClasses.text}`}>
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="group/skill">
                        <div className="flex justify-between items-center mb-2">
                          <span className={`text-sm font-medium ${colorClasses.text}`}>
                            {skill.name}
                          </span>
                          <span className={`text-xs ${colorClasses.text} opacity-75`}>
                            {skill.level}%
                          </span>
                        </div>
                        <div className={`w-full h-2 rounded-full ${colorClasses.progressBg} overflow-hidden`}>
                          <div 
                            className={`h-full rounded-full ${colorClasses.progress} transition-all duration-1000 ease-out transform origin-left group-hover/skill:scale-x-105`}
                            style={{ 
                              width: `${skill.level}%`,
                              animation: `skillProgress 1s ease-out ${skillIndex * 0.1}s both`
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes skillProgress {
          from {
            width: 0%;
          }
          to {
            width: var(--skill-width);
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
