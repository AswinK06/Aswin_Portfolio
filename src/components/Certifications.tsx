
import { Award, Trophy, Eye } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

const Certifications = () => {
  const certifications = [
    {
      title: "Introduction to Artificial Intelligence",
      provider: "INFOSYS SPRINGBOARD", 
      description: "Introduction to Artificial Intelligence concepts and applications",
      date: "November 2024",
      color: "gray",
      score: "Completed Successfully",
      image: "/lovable-uploads/43708e32-06d6-4932-b24c-624bb0f47299.png"
    },
    {
      title: "Java Programming Fundamentals",
      provider: "INFOSYS SPRINGBOARD",
      description: "Comprehensive course covering Java fundamentals and object-oriented programming",
      date: "November 2024",
      color: "gray",
      score: "Completed Successfully",
      image: "/lovable-uploads/a438772c-81d9-40b8-974c-397812a80074.png"
    },
    {
      title: "Prompt Engineering",
      provider: "INFOSYS SPRINGBOARD",
      description: "Advanced techniques in prompt engineering for AI applications",
      date: "November 2024",
      color: "gray",
      score: "Completed Successfully",
      image: "/lovable-uploads/15ccb1cb-f461-4bd2-a944-eff90ea61f39.png"
    },
    {
      title: "Basics of Python",
      provider: "INFOSYS SPRINGBOARD",
      description: "Fundamental Python programming concepts and applications",
      date: "September 2024",
      color: "gray",
      score: "Completed Successfully",
      image: "/lovable-uploads/667ad6dd-6c6a-4b25-b112-af01d3634698.png"
    },
    {
      title: "Cyber Security and Privacy",
      provider: "NPTEL",
      description: "Advanced concepts in cybersecurity, privacy protection, and secure systems",
      date: "July-October 2024",
      color: "slate",
      score: "Score: 54%",
      image: "/lovable-uploads/c1672d83-4cdd-4e99-8bae-1791469cb436.png"
    },
    {
      title: "Privacy and Security in Online Social Media",
      provider: "NPTEL",
      description: "Understanding privacy and security challenges in social media platforms",
      date: "January-April 2025",
      color: "slate",
      score: "Score: 60%",
      image: "/lovable-uploads/cd1ff767-a827-44d3-8457-9ae7dc466476.png"
    },
    {
      title: "A Joy of Computing Using Python",
      provider: "NPTEL",
      description: "Python programming with focus on computational thinking and problem solving",
      date: "July-October 2023",
      color: "slate",
      score: "Score: 57%",
      image: "/lovable-uploads/f43a33c6-3dea-4f84-be69-93d99aa38281.png"
    },
    {
      title: "Oracle SQL Basics",
      provider: "COURSERA (LEARNQUEST)",
      description: "Fundamental SQL concepts and database management with Oracle",
      date: "February 2024",
      color: "zinc",
      score: "Completed Successfully",
      image: "/lovable-uploads/11f38f92-3582-465a-a52c-e83f230b83ec.png"
    },
    {
      title: "Introduction to Artificial Intelligence (AI)",
      provider: "COURSERA (IBM)",
      description: "Comprehensive introduction to AI concepts and practical applications",
      date: "March 2024",
      color: "zinc",
      score: "Completed Successfully",
      image: "/lovable-uploads/8be8bcfd-f2a2-4965-9572-eae41aaa65c3.png"
    },
    {
      title: "Cyber Kushti: Hackathon Participation",
      provider: "BREACHX",
      description: "Successfully participated in the Cyber Kushti cybersecurity hackathon",
      date: "February 2025",
      color: "stone",
      score: "Certificate of Participation",
      image: "/lovable-uploads/af32b548-12f1-42e6-84c8-ec382e1c42e7.png"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      gray: "bg-gradient-to-br from-gray-800/50 to-gray-900/30 border-gray-600/50 text-gray-300 hover:from-gray-700/60 hover:to-gray-800/40 dark:from-gray-800/50 dark:to-gray-900/30 dark:border-gray-600/50 dark:text-gray-300 light:from-blue-50/80 light:to-blue-100/40 light:border-blue-200/50 light:text-blue-900",
      slate: "bg-gradient-to-br from-slate-800/50 to-slate-900/30 border-slate-600/50 text-slate-300 hover:from-slate-700/60 hover:to-slate-800/40 dark:from-slate-800/50 dark:to-slate-900/30 dark:border-slate-600/50 dark:text-slate-300 light:from-indigo-50/80 light:to-indigo-100/40 light:border-indigo-200/50 light:text-indigo-900",
      zinc: "bg-gradient-to-br from-zinc-800/50 to-zinc-900/30 border-zinc-600/50 text-zinc-300 hover:from-zinc-700/60 hover:to-zinc-800/40 dark:from-zinc-800/50 dark:to-zinc-900/30 dark:border-zinc-600/50 dark:text-zinc-300 light:from-green-50/80 light:to-green-100/40 light:border-green-200/50 light:text-green-900",
      stone: "bg-gradient-to-br from-stone-800/50 to-stone-900/30 border-stone-600/50 text-stone-300 hover:from-stone-700/60 hover:to-stone-800/40 dark:from-stone-800/50 dark:to-stone-900/30 dark:border-stone-600/50 dark:text-stone-300 light:from-orange-50/80 light:to-orange-100/40 light:border-orange-200/50 light:text-orange-900"
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="certifications" className="py-20 px-4 relative overflow-hidden bg-black dark:bg-black light:bg-gradient-to-br light:from-blue-50 light:to-indigo-50">
      {/* Professional Black Background */}
      <div className="absolute inset-0 bg-black dark:bg-black light:bg-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/30 via-transparent to-gray-800/20 dark:from-gray-900/30 dark:via-transparent dark:to-gray-800/20 light:from-blue-50/20 light:via-transparent light:to-indigo-50/20"></div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] light:bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)]"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Trophy className="text-gray-400 dark:text-gray-400 light:text-blue-600" size={40} />
            <h3 className="text-3xl md:text-4xl font-bold text-white dark:text-white light:text-gray-900">
              Professional Certifications
            </h3>
            <Trophy className="text-gray-400 dark:text-gray-400 light:text-blue-600" size={40} />
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-gray-600 to-gray-400 dark:from-gray-600 dark:to-gray-400 light:from-blue-400 light:to-indigo-400 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-700/20 to-gray-600/20 dark:from-gray-700/20 dark:to-gray-600/20 light:from-blue-200/20 light:to-indigo-200/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative bg-gray-900/80 dark:bg-gray-900/80 light:bg-white/90 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50 dark:border-gray-700/50 light:border-gray-200/50 hover:bg-gray-800/80 dark:hover:bg-gray-800/80 light:hover:bg-white transition-all duration-300 hover:scale-105 hover:border-gray-600/50 dark:hover:border-gray-600/50 light:hover:border-blue-300/50 hover:shadow-2xl light:shadow-xl">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-800 dark:from-gray-700 dark:to-gray-800 light:from-blue-100 light:to-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award size={32} className="text-gray-300 dark:text-gray-300 light:text-blue-600" />
                  </div>
                  <h4 className="text-white dark:text-white light:text-gray-900 font-semibold mb-2 group-hover:text-gray-300 dark:group-hover:text-gray-300 light:group-hover:text-blue-800 transition-colors text-lg">
                    {cert.title}
                  </h4>
                  <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 text-sm mb-2 font-medium">{cert.provider}</p>
                </div>
                <p className="text-gray-300 dark:text-gray-300 light:text-gray-700 text-sm mb-4 line-clamp-3">{cert.description}</p>
                <div className="flex items-center justify-between text-sm mb-4">
                  <span className="text-gray-400 dark:text-gray-400 light:text-gray-600 font-medium">{cert.score}</span>
                  <span className="text-gray-500 dark:text-gray-500 light:text-gray-500">{cert.date}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 bg-gray-800/30 dark:bg-gray-800/30 light:bg-blue-50/50 px-4 py-2 rounded-full border border-gray-600/30 dark:border-gray-600/30 light:border-blue-200/30">
                    <Award size={16} className="text-gray-400 dark:text-gray-400 light:text-blue-600" />
                    <span className="text-gray-400 dark:text-gray-400 light:text-blue-700 text-xs font-medium">Certified</span>
                  </div>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm" className="border-gray-500 dark:border-gray-500 light:border-blue-300 text-gray-300 dark:text-gray-300 light:text-blue-700 hover:bg-gray-700 dark:hover:bg-gray-700 light:hover:bg-blue-50 hover:text-white dark:hover:text-white light:hover:text-blue-800">
                        <Eye size={16} className="mr-2" />
                        Preview
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl bg-gray-900 dark:bg-gray-900 light:bg-white border-gray-600/50 dark:border-gray-600/50 light:border-gray-200">
                      <DialogHeader>
                        <DialogTitle className="text-gray-300 dark:text-gray-300 light:text-gray-900">{cert.title}</DialogTitle>
                      </DialogHeader>
                      <div className="mt-4">
                        <img 
                          src={cert.image} 
                          alt={`${cert.title} Certificate`}
                          className="w-full h-auto rounded-lg border border-gray-600/30 dark:border-gray-600/30 light:border-gray-200/30"
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
