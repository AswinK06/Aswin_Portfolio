
import { Award, Sparkles, Code, Globe, Database, Settings } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "C", level: 85, proficiency: "Advanced" },
        { name: "Python", level: 90, proficiency: "Expert" },
        { name: "Java", level: 80, proficiency: "Advanced" },
        { name: "JavaScript", level: 85, proficiency: "Advanced" }
      ],
      color: "blue",
      icon: Code
    },
    {
      title: "Web Technologies",
      skills: [
        { name: "HTML", level: 95, proficiency: "Expert" },
        { name: "CSS", level: 90, proficiency: "Expert" },
        { name: "React.js", level: 85, proficiency: "Advanced" },
        { name: "Bootstrap", level: 80, proficiency: "Advanced" }
      ],
      color: "green",
      icon: Globe
    },
    {
      title: "Databases", 
      skills: [
        { name: "MySQL", level: 85, proficiency: "Advanced" },
        { name: "MongoDB", level: 75, proficiency: "Intermediate" }
      ],
      color: "purple",
      icon: Database
    },
    {
      title: "Development & Testing Tools",
      skills: [
        { name: "Git", level: 85, proficiency: "Advanced" },
        { name: "GitHub", level: 90, proficiency: "Expert" },
        { name: "VS Code", level: 95, proficiency: "Expert" },
        { name: "Figma", level: 75, proficiency: "Intermediate" },
        { name: "Postman", level: 80, proficiency: "Advanced" }
      ],
      color: "orange",
      icon: Settings
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return {
          iconBg: 'from-blue-500 to-blue-600',
          progressBg: 'from-blue-500 to-blue-600',
          cardBorder: 'border-blue-200/50 dark:border-blue-500/30 hover:border-blue-300 dark:hover:border-blue-400',
          glowColor: 'from-blue-500/20 to-blue-600/20',
          badgeBg: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
        };
      case 'green':
        return {
          iconBg: 'from-green-500 to-green-600',
          progressBg: 'from-green-500 to-green-600',
          cardBorder: 'border-green-200/50 dark:border-green-500/30 hover:border-green-300 dark:hover:border-green-400',
          glowColor: 'from-green-500/20 to-green-600/20',
          badgeBg: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
        };
      case 'purple':
        return {
          iconBg: 'from-purple-500 to-purple-600',
          progressBg: 'from-purple-500 to-purple-600',
          cardBorder: 'border-purple-200/50 dark:border-purple-500/30 hover:border-purple-300 dark:hover:border-purple-400',
          glowColor: 'from-purple-500/20 to-purple-600/20',
          badgeBg: 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300'
        };
      case 'orange':
        return {
          iconBg: 'from-orange-500 to-orange-600',
          progressBg: 'from-orange-500 to-orange-600',
          cardBorder: 'border-orange-200/50 dark:border-orange-500/30 hover:border-orange-300 dark:hover:border-orange-400',
          glowColor: 'from-orange-500/20 to-orange-600/20',
          badgeBg: 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300'
        };
      default:
        return {
          iconBg: 'from-gray-500 to-gray-600',
          progressBg: 'from-gray-500 to-gray-600',
          cardBorder: 'border-gray-200/50 dark:border-gray-500/30 hover:border-gray-300 dark:hover:border-gray-400',
          glowColor: 'from-gray-500/20 to-gray-600/20',
          badgeBg: 'bg-gray-100 dark:bg-gray-900/30 text-gray-700 dark:text-gray-300'
        };
    }
  };

  return (
    <section id="skills" className="py-24 px-4 relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-l from-indigo-400/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-violet-400/5 to-pink-400/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-2xl mb-6">
            <Sparkles className="text-blue-600 dark:text-blue-400 mr-3" size={32} />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <Sparkles className="text-blue-600 dark:text-blue-400 ml-3" size={32} />
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Comprehensive expertise across modern development technologies and tools
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 mx-auto rounded-full mt-6"></div>
        </div>
        
        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            const colorClasses = getColorClasses(category.color);
            
            return (
              <div key={index} className="group relative">
                {/* Glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${colorClasses.glowColor} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 scale-105`}></div>
                
                {/* Main card */}
                <div className={`relative bg-white/70 dark:bg-slate-800/70 backdrop-blur-lg p-8 rounded-2xl border-2 ${colorClasses.cardBorder} transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl group-hover:shadow-3xl`}>
                  {/* Card header */}
                  <div className="flex items-center mb-8">
                    <div className={`w-16 h-16 bg-gradient-to-br ${colorClasses.iconBg} rounded-xl flex items-center justify-center mr-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent size={28} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                        {category.title}
                      </h3>
                      <div className={`w-12 h-1 bg-gradient-to-r ${colorClasses.progressBg} rounded-full`}></div>
                    </div>
                  </div>
                  
                  {/* Skills list */}
                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="group/skill">
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-base font-semibold text-gray-800 dark:text-gray-200 group-hover/skill:text-gray-900 dark:group-hover/skill:text-white transition-colors">
                            {skill.name}
                          </span>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${colorClasses.badgeBg} border border-current border-opacity-20`}>
                            {skill.proficiency}
                          </span>
                        </div>
                        <div className="relative">
                          <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden shadow-inner">
                            <div 
                              className={`h-full bg-gradient-to-r ${colorClasses.progressBg} rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
                              style={{ width: `${skill.level}%` }}
                            >
                              {/* Animated shine effect */}
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-pulse"></div>
                            </div>
                          </div>
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
    </section>
  );
};

export default Skills;
