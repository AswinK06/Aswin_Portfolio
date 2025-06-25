
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const roles = [
    "Full-Stack Web Developer",
    "MERN Stack Developer", 
    "LeetCode Problem Solver"
  ];

  return (
    <section className="pt-24 pb-16 min-h-screen flex items-center justify-center relative px-4 bg-gradient-to-br from-purple-900 via-slate-900 to-gray-900 dark:bg-gradient-to-br dark:from-purple-900 dark:via-slate-900 dark:to-gray-900 light:bg-gradient-to-br light:from-white light:via-purple-50 light:to-indigo-100 transition-colors duration-300">
      <div className="text-center text-white light:text-gray-800 max-w-4xl mx-auto">
        <div className="mb-8 animate-fade-in">
          {/* Professional Photo */}
          <div className="mb-12 flex justify-center">
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-violet-400/30 to-purple-400/30 light:from-purple-400/20 light:to-indigo-400/20 blur-2xl scale-110 group-hover:scale-125 transition-transform duration-500"></div>
              
              {/* Main image container */}
              <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-gradient-to-r from-violet-400 to-purple-400 light:from-purple-400 light:to-indigo-400 p-1 bg-gradient-to-r from-violet-400 to-purple-400 light:from-purple-400 light:to-indigo-400 shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:scale-105">
                <img 
                  src="/lovable-uploads/0ec66dcd-fc62-4ab8-83ab-98f6cd039a05.png" 
                  alt="Aswin K - Professional Photo"
                  className="w-full h-full object-cover object-center rounded-full"
                />
              </div>
              
              {/* Subtle ring animation */}
              <div className="absolute inset-0 rounded-full border-2 border-violet-400/20 light:border-purple-400/30 animate-pulse"></div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-violet-400 to-purple-400 light:from-purple-600 light:to-indigo-600 bg-clip-text text-transparent">
            Aswin K
          </h1>
          
          {/* Animated Role Text */}
          <div className="mb-4 h-16 flex items-center justify-center">
            <div className="overflow-hidden">
              <div className="animate-[slideUp_6s_infinite] flex flex-col">
                {roles.map((role, index) => (
                  <p key={index} className="text-xl md:text-2xl text-purple-200 light:text-purple-700 font-semibold h-16 flex items-center justify-center">
                    {role}
                  </p>
                ))}
              </div>
            </div>
          </div>
          
          <p className="text-lg text-gray-300 light:text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Passionate Web Technology enthusiast with hands-on experience in Web API Testing, 
            Secure Coding, and Full-Stack Development. Building secure, scalable, and efficient web solutions.
          </p>
        </div>
        
        <div className="flex justify-center gap-4 mb-8 animate-fade-in">
          <Button 
            onClick={() => scrollToSection('projects')}
            className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 light:from-purple-500 light:to-indigo-500 light:hover:from-purple-600 light:hover:to-indigo-600 px-8 py-3 text-lg text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            View My Work
          </Button>
          <Button 
            onClick={() => scrollToSection('contact')}
            variant="outline" 
            className="border-violet-400 text-violet-400 hover:bg-violet-400 hover:text-white light:border-purple-500 light:text-purple-500 light:hover:bg-purple-500 light:hover:text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Get In Touch
          </Button>
        </div>

        <div className="flex justify-center gap-6 mb-8">
          <a 
            href="https://github.com/AswinK06" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 light:text-gray-600 hover:text-violet-400 light:hover:text-purple-500 transition-colors duration-300 hover:scale-110 transform"
          >
            <Github size={24} />
          </a>
          <a 
            href="https://www.linkedin.com/in/aswin-k-6a40ab259" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 light:text-gray-600 hover:text-purple-400 light:hover:text-purple-500 transition-colors duration-300 hover:scale-110 transform"
          >
            <Linkedin size={24} />
          </a>
          <a 
            href="https://leetcode.com/u/Aswin_2005/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 light:text-gray-600 hover:text-orange-400 light:hover:text-orange-500 transition-colors duration-300 hover:scale-110 transform"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
            </svg>
          </a>
          <a 
            href="mailto:aswinkannan0606@gmail.com" 
            className="text-gray-400 light:text-gray-600 hover:text-indigo-400 light:hover:text-indigo-500 transition-colors duration-300 hover:scale-110 transform"
          >
            <Mail size={24} />
          </a>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown 
            size={32} 
            className="text-violet-400 light:text-purple-500 cursor-pointer hover:text-purple-300 light:hover:text-purple-600 transition-colors duration-300" 
            onClick={() => scrollToSection('about')}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
