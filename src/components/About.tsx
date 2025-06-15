
import { Code, Database, Globe, Shield, Sparkles, Zap, Target, Rocket, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  const handleResumeDownload = () => {
    // Create a link to download the resume
    const link = document.createElement('a');
    link.href = '/lovable-uploads/resume.pdf'; // This would be your uploaded resume
    link.download = 'Soundarya_M_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-800/30 to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-teal-900/20"></div>
      
      {/* Floating decorative elements */}
      <div className="absolute top-10 right-10 text-cyan-400/20 animate-pulse">
        <Sparkles size={60} />
      </div>
      <div className="absolute bottom-10 left-10 text-blue-400/20 animate-pulse animation-delay-1000">
        <Zap size={50} />
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Rocket className="text-cyan-400 animate-bounce" size={32} />
            <h2 className="text-4xl md:text-5xl font-bold text-white bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <Target className="text-blue-400 animate-bounce animation-delay-500" size={32} />
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-gray-300 space-y-6">
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-cyan-400 to-blue-400 rounded-full"></div>
              <p className="text-lg leading-relaxed pl-6 hover:text-white transition-colors duration-300">
                I am a passionate Web Technology enthusiast and dedicated Computer Science Engineering student 
                at K S Rangasamy College of Technology with a strong foundation in modern web technologies. 
                Currently maintaining an impressive CGPA of 8.61/10.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-400 to-teal-400 rounded-full"></div>
              <p className="text-lg leading-relaxed pl-6 hover:text-white transition-colors duration-300">
                My journey in web development has been marked by hands-on experience in API testing, 
                secure coding practices, and full-stack development. I specialize in creating innovative 
                solutions with technologies like React.js, JavaScript, and modern databases.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 mt-8 pl-2">
              <span className="bg-gradient-to-r from-cyan-900/50 to-cyan-800/30 text-cyan-300 px-6 py-3 rounded-full text-sm border border-cyan-500/30 backdrop-blur-sm hover:scale-105 transition-transform duration-300 shadow-lg">
                📍 Salem, Tamil Nadu
              </span>
              <span className="bg-gradient-to-r from-blue-900/50 to-blue-800/30 text-blue-300 px-6 py-3 rounded-full text-sm border border-blue-500/30 backdrop-blur-sm hover:scale-105 transition-transform duration-300 shadow-lg">
                📞 +91 9578413638
              </span>
              <Button 
                onClick={handleResumeDownload}
                className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white px-6 py-3 rounded-full text-sm border border-teal-500/30 backdrop-blur-sm hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <Download size={16} className="mr-2" />
                Download Resume
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative bg-slate-800/40 backdrop-blur-sm p-6 rounded-xl text-center hover:bg-slate-700/40 transition-all duration-300 hover:scale-105 border border-slate-700/50 hover:border-cyan-500/50 hover:shadow-2xl">
                <Code className="text-cyan-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" size={40} />
                <h3 className="text-white font-semibold mb-2 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Clean Code</h3>
                <p className="text-gray-400 text-sm">Writing maintainable and efficient code</p>
              </div>
            </div>
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-teal-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative bg-slate-800/40 backdrop-blur-sm p-6 rounded-xl text-center hover:bg-slate-700/40 transition-all duration-300 hover:scale-105 border border-slate-700/50 hover:border-blue-500/50 hover:shadow-2xl">
                <Database className="text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" size={40} />
                <h3 className="text-white font-semibold mb-2 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">Database Design</h3>
                <p className="text-gray-400 text-sm">Optimized database architecture</p>
              </div>
            </div>
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative bg-slate-800/40 backdrop-blur-sm p-6 rounded-xl text-center hover:bg-slate-700/40 transition-all duration-300 hover:scale-105 border border-slate-700/50 hover:border-teal-500/50 hover:shadow-2xl">
                <Globe className="text-teal-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" size={40} />
                <h3 className="text-white font-semibold mb-2 bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Web APIs</h3>
                <p className="text-gray-400 text-sm">RESTful API development & testing</p>
              </div>
            </div>
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-blue-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative bg-slate-800/40 backdrop-blur-sm p-6 rounded-xl text-center hover:bg-slate-700/40 transition-all duration-300 hover:scale-105 border border-slate-700/50 hover:border-indigo-500/50 hover:shadow-2xl">
                <Shield className="text-indigo-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" size={40} />
                <h3 className="text-white font-semibold mb-2 bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">Security</h3>
                <p className="text-gray-400 text-sm">Secure coding practices</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
