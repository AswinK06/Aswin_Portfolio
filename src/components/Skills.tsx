
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

  return (
    <section id="skills" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="text-blue-600 dark:text-blue-400" size={40} />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Skills & Technologies
            </h2>
            <Sparkles className="text-blue-600 dark:text-blue-400" size={40} />
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            
            return (
              <div key={index} className="group relative">
                <div className="bg-white dark:bg-gray-900 p-8 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-500 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                      <IconComponent size={24} className="text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="group/skill">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-gray-800 dark:text-gray-300">
                            {skill.name}
                          </span>
                          <span className="text-xs text-blue-600 dark:text-blue-400 opacity-75">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${skill.level}%` }}
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
    </section>
  );
};

export default Skills;
