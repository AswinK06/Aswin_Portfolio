
import { ThemeProvider } from '@/contexts/ThemeContext';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Certifications from '../components/Certifications';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Achievements from '../components/Achievements';
import Contact from '../components/Contact';

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-purple-900 via-slate-900 to-gray-900 dark:bg-gradient-to-br dark:from-purple-900 dark:via-slate-900 dark:to-gray-900 light:bg-gradient-to-br light:from-white light:via-purple-50 light:to-indigo-100 transition-colors duration-300">
        {/* Theme-aware background layers */}
        <div className="absolute inset-0 dark:bg-gradient-to-br dark:from-purple-900 dark:via-slate-900 dark:to-gray-900 light:bg-gradient-to-br light:from-white light:via-purple-50 light:to-indigo-100"></div>
        <div className="absolute inset-0 dark:bg-gradient-to-br dark:from-gray-900/20 dark:via-transparent dark:to-gray-800/10 light:bg-gradient-to-br light:from-purple-100/30 light:via-transparent light:to-indigo-100/20"></div>
        
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 dark:bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] dark:bg-[size:50px_50px] light:bg-[linear-gradient(to_right,#e5e7eb30_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb30_1px,transparent_1px)] light:bg-[size:50px_50px]"></div>
        
        {/* Enhanced floating elements for depth */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 dark:bg-purple-800/20 light:bg-purple-300/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 dark:bg-slate-700/20 light:bg-indigo-300/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 dark:bg-violet-800/10 light:bg-violet-300/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>
        
        {/* Navigation */}
        <Navigation />
        
        {/* Main Content */}
        <div className="relative z-10">
          <Hero />
          <About />
          <Skills />
          <Certifications />
          <Projects />
          <Experience />
          <Education />
          <Achievements />
          <Contact />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Index;
