
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative px-4">
      <div className="text-center text-white max-w-4xl mx-auto">
        <div className="mb-8 animate-fade-in">
          {/* Professional Photo */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-gradient-to-r from-violet-400 to-purple-400 p-1 bg-gradient-to-r from-violet-400 to-purple-400">
                <img 
                  src="/lovable-uploads/0ec66dcd-fc62-4ab8-83ab-98f6cd039a05.png" 
                  alt="Aswin K - Professional Photo"
                  className="w-full h-full object-cover rounded-full bg-white"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-violet-400/20 to-purple-400/20 blur-xl"></div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
            Aswin K
          </h1>
          <p className="text-xl md:text-2xl text-purple-200 mb-2">Full-Stack Web Developer</p>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Passionate Web Technology enthusiast with hands-on experience in Web API Testing, 
            Secure Coding, and Full-Stack Development. Building secure, scalable, and efficient web solutions.
          </p>
        </div>
        
        <div className="flex justify-center gap-4 mb-8 animate-fade-in">
          <Button 
            onClick={() => scrollToSection('projects')}
            className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 px-8 py-3 text-lg"
          >
            View My Work
          </Button>
          <Button 
            onClick={() => scrollToSection('contact')}
            variant="outline" 
            className="border-violet-400 text-violet-400 hover:bg-violet-400 hover:text-white px-8 py-3 text-lg"
          >
            Get In Touch
          </Button>
        </div>

        <div className="flex justify-center gap-6 mb-8">
          <a href="https://github.com/AswinK06" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-violet-400 transition-colors">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/aswin-k-6a40ab259" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="mailto:aswinkannan0606@gmail.com" className="text-gray-400 hover:text-indigo-400 transition-colors">
            <Mail size={24} />
          </a>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown 
            size={32} 
            className="text-violet-400 cursor-pointer" 
            onClick={() => scrollToSection('about')}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
