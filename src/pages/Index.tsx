
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Contact from '../components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-purple-500 to-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse animation-delay-1000"></div>
        
        {/* Additional floating elements */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-gradient-to-br from-green-400 to-blue-500 rounded-full mix-blend-multiply filter blur-2xl opacity-15 animate-pulse animation-delay-3000"></div>
        <div className="absolute bottom-1/4 left-1/4 w-40 h-40 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full mix-blend-multiply filter blur-2xl opacity-15 animate-pulse animation-delay-4000"></div>
      </div>
      
      {/* Enhanced Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808015_1px,transparent_1px),linear-gradient(to_bottom,#80808015_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-2 h-2 bg-blue-400 rounded-full opacity-50 animate-pulse"></div>
        <div className="absolute top-20 right-20 w-1 h-1 bg-purple-400 rounded-full opacity-70 animate-pulse animation-delay-1000"></div>
        <div className="absolute bottom-20 left-20 w-1.5 h-1.5 bg-green-400 rounded-full opacity-60 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-40 right-40 w-1 h-1 bg-yellow-400 rounded-full opacity-50 animate-pulse animation-delay-3000"></div>
        <div className="absolute top-1/2 left-10 w-2 h-2 bg-pink-400 rounded-full opacity-40 animate-pulse animation-delay-4000"></div>
        <div className="absolute top-1/3 right-10 w-1 h-1 bg-cyan-400 rounded-full opacity-60 animate-pulse animation-delay-500"></div>
      </div>
      
      {/* Main Content */}
      <div className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </div>
  );
};

export default Index;
