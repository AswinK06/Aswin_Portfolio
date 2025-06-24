
import { Award, Trophy, Eye } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

const Certifications = () => {
  const certifications = [
    {
      title: "Introduction to AI",
      provider: "INFOSYS SPRINGBOARD", 
      description: "Introduction to Artificial Intelligence concepts and applications",
      date: "November 2024",
      color: "gray",
      score: "Completed Successfully",
      image: "/lovable-uploads/6accd7f4-d704-4f4f-8634-eb0421b5cfff.png"
    },
    {
      title: "Java Programming Fundamentals",
      provider: "INFOSYS SPRINGBOARD",
      description: "Comprehensive course covering Java fundamentals and object-oriented programming",
      date: "November 2024",
      color: "gray",
      score: "Completed Successfully",
      image: "/lovable-uploads/555145da-f8fd-4199-956c-d99dcc6d16dc.png"
    },
    {
      title: "Cyber Security and Privacy",
      provider: "NPTEL",
      description: "Advanced concepts in cybersecurity, privacy protection, and secure systems",
      date: "July-October 2024",
      color: "slate",
      score: "Completed Successfully",
      image: "/lovable-uploads/6e3b40a0-6434-4ddc-9789-2bdd111ac521.png"
    },
    {
      title: "Privacy and Security in Online Social Media",
      provider: "NPTEL",
      description: "Understanding privacy and security challenges in social media platforms",
      date: "January-April 2025",
      color: "slate",
      score: "Completed Successfully",
      image: "/lovable-uploads/ab470bd7-0d10-47aa-b20b-738dd468d86a.png"
    },
    {
      title: "A Joy of Computing Using Python",
      provider: "NPTEL",
      description: "Python programming with focus on computational thinking and problem solving",
      date: "July-October 2023",
      color: "slate",
      score: "Completed Successfully",
      image: "/lovable-uploads/5aa98b0d-f17b-4106-87ec-3d6ddc3486ee.png"
    },
    {
      title: "Oracle SQL Basics",
      provider: "COURSERA(LEARNQUEST)",
      description: "Fundamental SQL concepts and database management with Oracle",
      date: "February 2024",
      color: "zinc",
      score: "Completed Successfully",
      image: "/lovable-uploads/a2fcc6a3-680e-4314-9cea-eda493d0de1d.png"
    }
  ];

  return (
    <section id="certifications" className="py-20 px-4 relative overflow-hidden">
      {/* Professional Black Background */}
      <div className="absolute inset-0 bg-black"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/30 via-transparent to-gray-800/20"></div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Trophy className="text-gray-400" size={40} />
            <h3 className="text-3xl md:text-4xl font-bold text-white">
              Professional Certifications
            </h3>
            <Trophy className="text-gray-400" size={40} />
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-gray-600 to-gray-400 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-700/20 to-gray-600/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative bg-gray-900/80 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50 hover:bg-gray-800/80 transition-all duration-300 hover:scale-105 hover:border-gray-600/50 hover:shadow-2xl">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award size={32} className="text-gray-300" />
                  </div>
                  <h4 className="text-white font-semibold mb-2 group-hover:text-gray-300 transition-colors text-lg">
                    {cert.title}
                  </h4>
                  <p className="text-gray-400 text-sm mb-2 font-medium">{cert.provider}</p>
                </div>
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">{cert.description}</p>
                <div className="flex items-center justify-between text-sm mb-4">
                  <span className="text-gray-400 font-medium">{cert.score}</span>
                  <span className="text-gray-500">{cert.date}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 bg-gray-800/30 px-4 py-2 rounded-full border border-gray-600/30">
                    <Award size={16} className="text-gray-400" />
                    <span className="text-gray-400 text-xs font-medium">Certified</span>
                  </div>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm" className="border-gray-500 text-gray-300 hover:bg-gray-700 hover:text-white">
                        <Eye size={16} className="mr-2" />
                        Preview
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl bg-gray-900 border-gray-600/50">
                      <DialogHeader>
                        <DialogTitle className="text-gray-300">{cert.title}</DialogTitle>
                      </DialogHeader>
                      <div className="mt-4">
                        <img 
                          src={cert.image} 
                          alt={`${cert.title} Certificate`}
                          className="w-full h-auto rounded-lg border border-gray-600/30"
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
