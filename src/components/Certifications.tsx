
import { Award, Trophy, Eye } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

const Certifications = () => {
  const certifications = [
    {
      title: "Java Programming Fundamentals",
      provider: "INFOSYS SPRINGBOARD",
      description: "Comprehensive course covering Java fundamentals and object-oriented programming",
      date: "November 2024",
      color: "purple",
      score: "Completed Successfully",
      image: "/lovable-uploads/555145da-f8fd-4199-956c-d99dcc6d16dc.png"
    },
    {
      title: "Introduction to AI",
      provider: "INFOSYS SPRINGBOARD", 
      description: "Introduction to Artificial Intelligence concepts and applications",
      date: "November 2024",
      color: "purple",
      score: "Completed Successfully",
      image: "/lovable-uploads/6accd7f4-d704-4f4f-8634-eb0421b5cfff.png"
    },
    {
      title: "Cyber Security and Privacy",
      provider: "NPTEL",
      description: "Advanced concepts in cybersecurity, privacy protection, and secure systems",
      date: "July-October 2024",
      color: "violet",
      score: "Completed Successfully",
      image: "/lovable-uploads/6e3b40a0-6434-4ddc-9789-2bdd111ac521.png"
    },
    {
      title: "A Joy of Computing Using Python",
      provider: "NPTEL",
      description: "Python programming with focus on computational thinking and problem solving",
      date: "July-October 2023",
      color: "violet",
      score: "Completed Successfully",
      image: "/lovable-uploads/5aa98b0d-f17b-4106-87ec-3d6ddc3486ee.png"
    },
    {
      title: "Privacy and Security in Online Social Media",
      provider: "NPTEL",
      description: "Understanding privacy and security challenges in social media platforms",
      date: "January-April 2025",
      color: "violet",
      score: "Completed Successfully",
      image: "/lovable-uploads/ab470bd7-0d10-47aa-b20b-738dd468d86a.png"
    },
    {
      title: "Oracle SQL Basics",
      provider: "COURSERA(LEARNQUEST)",
      description: "Fundamental SQL concepts and database management with Oracle",
      date: "February 2024",
      color: "indigo",
      score: "Completed Successfully",
      image: "/lovable-uploads/a2fcc6a3-680e-4314-9cea-eda493d0de1d.png"
    }
  ];

  return (
    <section id="certifications" className="py-20 px-4 relative overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-purple-900/40 to-indigo-900/70"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-900/30 via-transparent to-purple-900/20"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-violet-500/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-indigo-500/10 rounded-full blur-xl animate-pulse delay-500"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Trophy className="text-violet-400 animate-bounce" size={40} />
            <h3 className="text-3xl md:text-4xl font-semibold text-white bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Professional Certifications
            </h3>
            <Trophy className="text-violet-400 animate-bounce" size={40} />
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-violet-400 to-purple-400 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-400/20 to-purple-400/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700/50 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 hover:border-slate-600/50 hover:shadow-2xl">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award size={32} className="text-white" />
                  </div>
                  <h4 className="text-white font-semibold mb-2 group-hover:text-violet-400 transition-colors text-lg">
                    {cert.title}
                  </h4>
                  <p className="text-violet-400 text-sm mb-2 font-medium">{cert.provider}</p>
                </div>
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">{cert.description}</p>
                <div className="flex items-center justify-between text-sm mb-4">
                  <span className="text-purple-400 font-medium">{cert.score}</span>
                  <span className="text-gray-400">{cert.date}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 bg-gradient-to-r from-violet-900/30 to-purple-900/30 px-4 py-2 rounded-full border border-violet-500/30">
                    <Award size={16} className="text-violet-400" />
                    <span className="text-violet-400 text-xs font-medium">Certified</span>
                  </div>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm" className="border-violet-400 text-violet-400 hover:bg-violet-400 hover:text-white">
                        <Eye size={16} className="mr-2" />
                        Preview
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl bg-slate-900 border-violet-500/50">
                      <DialogHeader>
                        <DialogTitle className="text-violet-400">{cert.title}</DialogTitle>
                      </DialogHeader>
                      <div className="mt-4">
                        <img 
                          src={cert.image} 
                          alt={`${cert.title} Certificate`}
                          className="w-full h-auto rounded-lg border border-violet-500/30"
                        />
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
