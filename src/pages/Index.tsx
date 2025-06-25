
import { ThemeProvider } from '@/contexts/ThemeContext';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Projects from '../components/Projects';

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-white via-purple-50 to-indigo-100 transition-colors duration-300">
        {/* Light theme background layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-purple-50 to-indigo-100"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100/30 via-transparent to-indigo-100/20"></div>
        
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb30_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb30_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        {/* Enhanced floating elements for depth */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-300/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-300/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-violet-300/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>
        
        {/* Navigation */}
        <Navigation />
        
        {/* Main Content */}
        <div className="relative z-10">
          <Hero />
          <Projects />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Index;
