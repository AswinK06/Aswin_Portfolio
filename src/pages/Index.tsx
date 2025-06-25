
import { ThemeProvider } from '@/contexts/ThemeContext';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import About from '../components/About';
import Skills from '../components/Skills';
import Certifications from '../components/Certifications';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Achievements from '../components/Achievements';
import Contact from '../components/Contact';

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 transition-colors duration-300">
        {/* Dark theme background layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-transparent to-indigo-900/20"></div>
        
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        {/* Enhanced floating elements for depth */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-400/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-400/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-violet-400/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>
        
        {/* Navigation */}
        <Navigation />
        
        {/* Main Content */}
        <div className="relative z-10">
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Experience />
          <Education />
          <Certifications />
          <Achievements />
          <Contact />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Index;
