
import { Code, Database, Globe, Shield } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-16">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-gray-300 space-y-6">
            <p className="text-lg leading-relaxed">
              I'm a dedicated Computer Science Engineering student at K S Rangasamy College of Technology 
              with a strong foundation in modern web technologies. Currently maintaining an impressive 
              CGPA of 8.61/10.
            </p>
            <p className="text-lg leading-relaxed">
              My journey in web development has been marked by hands-on experience in API testing, 
              secure coding practices, and full-stack development. I'm passionate about creating 
              innovative solutions that make a real impact.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <span className="bg-blue-900/50 text-blue-300 px-4 py-2 rounded-full text-sm">
                📍 Salem, Tamil Nadu
              </span>
              <span className="bg-blue-900/50 text-blue-300 px-4 py-2 rounded-full text-sm">
                📞 +91 9578413638
              </span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-slate-800/50 p-6 rounded-lg text-center hover:bg-slate-700/50 transition-colors">
              <Code className="text-blue-400 mx-auto mb-4" size={40} />
              <h3 className="text-white font-semibold mb-2">Clean Code</h3>
              <p className="text-gray-400 text-sm">Writing maintainable and efficient code</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg text-center hover:bg-slate-700/50 transition-colors">
              <Database className="text-green-400 mx-auto mb-4" size={40} />
              <h3 className="text-white font-semibold mb-2">Database Design</h3>
              <p className="text-gray-400 text-sm">Optimized database architecture</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg text-center hover:bg-slate-700/50 transition-colors">
              <Globe className="text-purple-400 mx-auto mb-4" size={40} />
              <h3 className="text-white font-semibold mb-2">Web APIs</h3>
              <p className="text-gray-400 text-sm">RESTful API development & testing</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg text-center hover:bg-slate-700/50 transition-colors">
              <Shield className="text-red-400 mx-auto mb-4" size={40} />
              <h3 className="text-white font-semibold mb-2">Security</h3>
              <p className="text-gray-400 text-sm">Secure coding practices</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
