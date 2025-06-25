
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
      <div className="min-h-screen relative overflow-hidden bg-black dark:bg-black light:bg-white transition-colors duration-300">
        {/* Professional Background */}
        <div className="absolute inset-0 bg-black dark:bg-black light:bg-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/20 via-transparent to-gray-800/10 dark:from-gray-900/20 dark:via-transparent dark:to-gray-800/10 light:from-blue-50/20 light:via-transparent light:to-indigo-50/10"></div>
        
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:50px_50px] dark:bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] light:bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)]"></div>
        
        {/* Minimal floating elements for depth */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gray-800/20 dark:bg-gray-800/20 light:bg-blue-200/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gray-700/20 dark:bg-gray-700/20 light:bg-indigo-200/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
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
