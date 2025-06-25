
import { Code, Database, Globe, Shield, Sparkles, Zap, Target, Rocket, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  const handleResumeDownload = () => {
    // Create a temporary link element to trigger download
    const link = document.createElement('a');
    link.href = '/lovable-uploads/f5c7362c-7dc4-4df3-a1ad-142ce42a94a0.png';
    link.download = 'Aswin_K_Resume.png';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden bg-gradient-to-br from-white via-purple-50 to-indigo-100 dark:from-slate-900 dark:via-purple-900 dark:to-indigo-900 transition-colors duration-300">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-100/30 to-transparent dark:via-slate-800/30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-200/20 via-transparent to-indigo-200/20 dark:from-purple-900/20 dark:via-transparent dark:to-indigo-900/20"></div>
      
      {/* Floating decorative elements */}
      <div className="absolute top-10 right-10 text-violet-400/20 dark:text-violet-400/20 animate-pulse">
        <Sparkles size={60} />
      </div>
      <div className="absolute bottom-10 left-10 text-purple-400/20 dark:text-purple-400/20 animate-pulse animation-delay-1000">
        <Zap size={50} />
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Rocket className="text-violet-600 dark:text-violet-400 animate-bounce" size={32} />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 dark:from-violet-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <Target className="text-purple-600 dark:text-purple-400 animate-bounce animation-delay-500" size={32} />
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-600 to-purple-600 dark:from-violet-400 dark:to-purple-400 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-gray-800 dark:text-gray-300 space-y-6">
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-violet-600 to-purple-600 dark:from-violet-400 dark:to-purple-400 rounded-full"></div>
              <p className="text-lg leading-relaxed pl-6 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">
                Passionate Web Technology enthusiast with hands-on experience in Web API Testing, 
                Secure Coding, and Full-Stack Development. Solid Proficient in JavaScript, Java, and React, 
                with a solid foundation in C, MySQL and Node.js.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 rounded-full"></div>
              <p className="text-lg leading-relaxed pl-6 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">
                Dedicated to building secure, scalable, and efficient web solutions while continuously 
                exploring innovative technologies. Currently pursuing Bachelor of Engineering in Computer 
                Science Engineering at K S Rangasamy College of Technology.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 mt-8 pl-2">
              <span className="bg-gradient-to-r from-violet-200/50 to-purple-200/30 dark:from-violet-900/50 dark:to-purple-800/30 text-violet-700 dark:text-violet-300 px-6 py-3 rounded-full text-sm border border-violet-300/50 dark:border-violet-500/30 backdrop-blur-sm hover:scale-105 transition-transform duration-300 shadow-lg">
                📍 Salem, Tamil Nadu
              </span>
              <span className="bg-gradient-to-r from-purple-200/50 to-indigo-200/30 dark:from-purple-900/50 dark:to-indigo-800/30 text-purple-700 dark:text-purple-300 px-6 py-3 rounded-full text-sm border border-purple-300/50 dark:border-purple-500/30 backdrop-blur-sm hover:scale-105 transition-transform duration-300 shadow-lg">
                📞 +91 9578413638
              </span>
              <Button 
                onClick={handleResumeDownload}
                className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white px-6 py-3 rounded-full text-sm border border-indigo-500/30 backdrop-blur-sm hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <Download size={16} className="mr-2" />
                Download Resume
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-300/20 to-purple-300/20 dark:from-violet-500/20 dark:to-purple-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative bg-white/60 dark:bg-slate-800/40 backdrop-blur-sm p-6 rounded-xl text-center hover:bg-white/80 dark:hover:bg-slate-700/40 transition-all duration-300 hover:scale-105 border border-slate-200/50 dark:border-slate-700/50 hover:border-violet-300/50 dark:hover:border-violet-500/50 hover:shadow-2xl">
                <Code className="text-violet-600 dark:text-violet-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" size={40} />
                <h3 className="text-gray-900 dark:text-white font-semibold mb-2 bg-gradient-to-r from-violet-600 to-purple-600 dark:from-violet-400 dark:to-purple-400 bg-clip-text text-transparent">Clean Code</h3>
                <p className="text-gray-700 dark:text-gray-400 text-sm">Writing maintainable and efficient code</p>
              </div>
            </div>
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-300/20 to-indigo-300/20 dark:from-purple-500/20 dark:to-indigo-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative bg-white/60 dark:bg-slate-800/40 backdrop-blur-sm p-6 rounded-xl text-center hover:bg-white/80 dark:hover:bg-slate-700/40 transition-all duration-300 hover:scale-105 border border-slate-200/50 dark:border-slate-700/50 hover:border-purple-300/50 dark:hover:border-purple-500/50 hover:shadow-2xl">
                <Database className="text-purple-600 dark:text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" size={40} />
                <h3 className="text-gray-900 dark:text-white font-semibold mb-2 bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">Database Design</h3>
                <p className="text-gray-700 dark:text-gray-400 text-sm">MySQL & MongoDB expertise</p>
              </div>
            </div>
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-300/20 to-violet-300/20 dark:from-indigo-500/20 dark:to-violet-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative bg-white/60 dark:bg-slate-800/40 backdrop-blur-sm p-6 rounded-xl text-center hover:bg-white/80 dark:hover:bg-slate-700/40 transition-all duration-300 hover:scale-105 border border-slate-200/50 dark:border-slate-700/50 hover:border-indigo-300/50 dark:hover:border-indigo-500/50 hover:shadow-2xl">
                <Globe className="text-indigo-600 dark:text-indigo-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" size={40} />
                <h3 className="text-gray-900 dark:text-white font-semibold mb-2 bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400 bg-clip-text text-transparent">Web APIs</h3>
                <p className="text-gray-700 dark:text-gray-400 text-sm">RESTful API development & testing</p>
              </div>
            </div>
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-300/20 to-purple-300/20 dark:from-pink-500/20 dark:to-purple-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative bg-white/60 dark:bg-slate-800/40 backdrop-blur-sm p-6 rounded-xl text-center hover:bg-white/80 dark:hover:bg-slate-700/40 transition-all duration-300 hover:scale-105 border border-slate-200/50 dark:border-slate-700/50 hover:border-pink-300/50 dark:hover:border-pink-500/50 hover:shadow-2xl">
                <Shield className="text-pink-600 dark:text-pink-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" size={40} />
                <h3 className="text-gray-900 dark:text-white font-semibold mb-2 bg-gradient-to-r from-pink-600 to-purple-600 dark:from-pink-400 dark:to-purple-400 bg-clip-text text-transparent">Security</h3>
                <p className="text-gray-700 dark:text-gray-400 text-sm">Secure coding practices</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
