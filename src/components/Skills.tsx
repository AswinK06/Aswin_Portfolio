
import { Award, Sparkles, Code, Globe, Database, Settings } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 90, icon: "🐍" },
        { name: "JavaScript", level: 85, icon: "⚡" },
        { name: "C", level: 85, icon: "⚙️" },
        { name: "Java", level: 80, icon: "☕" }
      ],
      color: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20"
    },
    {
      title: "Web Technologies",
      skills: [
        { name: "HTML", level: 95, icon: "🌐" },
        { name: "CSS", level: 90, icon: "🎨" },
        { name: "React.js", level: 85, icon: "⚛️" },
        { name: "Bootstrap", level: 80, icon: "🔧" }
      ],
      color: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20"
    },
    {
      title: "Databases", 
      skills: [
        { name: "MySQL", level: 85, icon: "🗄️" },
        { name: "MongoDB", level: 75, icon: "🍃" }
      ],
      color: "from-purple-500 to-violet-500",
      bgGradient: "from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20"
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", level: 85, icon: "📝" },
        { name: "GitHub", level: 90, icon: "🐙" },
        { name: "VS Code", level: 95, icon: "💻" },
        { name: "Figma", level: 75, icon: "🎯" },
        { name: "Postman", level: 80, icon: "📮" }
      ],
      color: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-purple-900">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-conic from-blue-400/20 via-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-conic from-green-400/20 via-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
              <Sparkles className="text-white" size={24} />
            </div>
            <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-purple-600 to-blue-600 dark:from-white dark:via-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
              <Award className="text-white" size={24} />
            </div>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Expertise across modern development technologies
          </p>
        </div>
        
        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="group">
              <div className={`relative p-8 rounded-3xl bg-gradient-to-br ${category.bgGradient} backdrop-blur-sm border border-white/20 dark:border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]`}>
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-14 h-14 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                    {category.title === "Programming Languages" && <Code className="text-white" size={24} />}
                    {category.title === "Web Technologies" && <Globe className="text-white" size={24} />}
                    {category.title === "Databases" && <Database className="text-white" size={24} />}
                    {category.title === "Tools & Technologies" && <Settings className="text-white" size={24} />}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {category.title}
                    </h3>
                    <div className={`w-16 h-1 bg-gradient-to-r ${category.color} rounded-full mt-1`}></div>
                  </div>
                </div>
                
                {/* Skills */}
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group/skill">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{skill.icon}</span>
                          <span className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                            {skill.name}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          {[...Array(5)].map((_, i) => (
                            <div
                              key={i}
                              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                i < Math.floor(skill.level / 20)
                                  ? `bg-gradient-to-r ${category.color} shadow-sm`
                                  : 'bg-gray-200 dark:bg-gray-600'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      
                      {/* Animated Progress Bar */}
                      <div className="relative h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out relative`}
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${skillIndex * 0.1}s`
                          }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 animate-shimmer"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(-12deg); }
          100% { transform: translateX(200%) skewX(-12deg); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  );
};

export default Skills;
