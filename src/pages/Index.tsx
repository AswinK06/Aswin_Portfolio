
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Contact from '../components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Modern Purple/Violet/Indigo Theme */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/10 via-transparent to-purple-500/10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-purple-400/15 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-indigo-400/15 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-400/10 via-transparent to-transparent"></div>
      
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main floating orbs */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-violet-400 to-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse animation-delay-1000"></div>
        
        {/* Secondary floating elements */}
        <div className="absolute top-1/4 right-1/4 w-40 h-40 bg-gradient-to-br from-violet-400 to-indigo-500 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-pulse animation-delay-3000"></div>
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full mix-blend-multiply filter blur-2xl opacity-18 animate-pulse animation-delay-4000"></div>
        <div className="absolute top-3/4 right-1/3 w-32 h-32 bg-gradient-to-br from-indigo-400 to-violet-500 rounded-full mix-blend-multiply filter blur-2xl opacity-15 animate-pulse animation-delay-500"></div>
        
        {/* Tertiary accent elements */}
        <div className="absolute top-1/3 left-1/6 w-24 h-24 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-25 animate-pulse animation-delay-1500"></div>
        <div className="absolute bottom-1/3 right-1/6 w-28 h-28 bg-gradient-to-br from-indigo-400 to-violet-500 rounded-full mix-blend-multiply filter blur-xl opacity-22 animate-pulse animation-delay-2500"></div>
      </div>
      
      {/* Enhanced Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-3 h-3 bg-violet-400 rounded-full opacity-60 animate-pulse shadow-lg shadow-violet-400/50"></div>
        <div className="absolute top-20 right-20 w-2 h-2 bg-purple-400 rounded-full opacity-70 animate-pulse animation-delay-1000 shadow-lg shadow-purple-400/50"></div>
        <div className="absolute bottom-20 left-20 w-2.5 h-2.5 bg-indigo-400 rounded-full opacity-65 animate-pulse animation-delay-2000 shadow-lg shadow-indigo-400/50"></div>
        <div className="absolute bottom-40 right-40 w-1.5 h-1.5 bg-violet-400 rounded-full opacity-55 animate-pulse animation-delay-3000 shadow-lg shadow-violet-400/50"></div>
        <div className="absolute top-1/2 left-10 w-3 h-3 bg-purple-400 rounded-full opacity-50 animate-pulse animation-delay-4000 shadow-lg shadow-purple-400/50"></div>
        <div className="absolute top-1/3 right-10 w-2 h-2 bg-indigo-400 rounded-full opacity-60 animate-pulse animation-delay-500 shadow-lg shadow-indigo-400/50"></div>
      </div>
      
      {/* Geometric shapes overlay */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute top-1/4 left-1/4 w-16 h-16 border border-white/20 rotate-45 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-12 h-12 border border-white/15 rotate-12 animate-pulse animation-delay-1000"></div>
        <div className="absolute top-3/4 right-1/3 w-8 h-8 border border-white/25 rotate-45 animate-pulse animation-delay-2000"></div>
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
