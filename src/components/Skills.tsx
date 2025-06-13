
const Skills = () => {
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

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-900/50 border-blue-500/50 text-blue-300",
      green: "bg-green-900/50 border-green-500/50 text-green-300",
      purple: "bg-purple-900/50 border-purple-500/50 text-purple-300",
      orange: "bg-orange-900/50 border-orange-500/50 text-orange-300"
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="skills" className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-16">Skills & Technologies</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-slate-800/50 p-6 rounded-lg hover:bg-slate-700/50 transition-all duration-300 hover:scale-105">
              <h3 className="text-white font-semibold mb-4 text-lg">{category.title}</h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className={`px-3 py-2 rounded border text-sm text-center ${getColorClasses(category.color)}`}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-white mb-8">Certifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 p-6 rounded-lg">
              <h4 className="text-blue-400 font-semibold mb-2">INFOSYS SPRINGBOARD</h4>
              <p className="text-gray-300 text-sm">Java Programming Fundamentals</p>
              <p className="text-gray-300 text-sm">Introduction to AI</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg">
              <h4 className="text-green-400 font-semibold mb-2">NPTEL</h4>
              <p className="text-gray-300 text-sm">Cyber Security and Privacy</p>
              <p className="text-gray-300 text-sm">Joy of Computing Using Python</p>
              <p className="text-gray-300 text-sm">Privacy and Security in Online Social Media</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg">
              <h4 className="text-purple-400 font-semibold mb-2">COURSERA</h4>
              <p className="text-gray-300 text-sm">Oracle SQL Basics</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
