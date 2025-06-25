
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
      score: "Completed Successfully",
      image: "/lovable-uploads/43708e32-06d6-4932-b24c-624bb0f47299.png"
    },
    {
      title: "Java Programming Fundamentals",
      provider: "INFOSYS SPRINGBOARD",
      description: "Comprehensive course covering Java fundamentals and object-oriented programming",
      date: "November 2024",
      score: "Completed Successfully",
      image: "/lovable-uploads/a438772c-81d9-40b8-974c-397812a80074.png"
    },
    {
      title: "Prompt Engineering",
      provider: "INFOSYS SPRINGBOARD",
      description: "Advanced techniques in prompt engineering for AI applications",
      date: "November 2024",
      score: "Completed Successfully",
      image: "/lovable-uploads/15ccb1cb-f461-4bd2-a944-eff90ea61f39.png"
    },
    {
      title: "Basics of Python",
      provider: "INFOSYS SPRINGBOARD",
      description: "Fundamental Python programming concepts and applications",
      date: "September 2024",
      score: "Completed Successfully",
      image: "/lovable-uploads/667ad6dd-6c6a-4b25-b112-af01d3634698.png"
    },
    {
      title: "Cyber Security and Privacy",
      provider: "NPTEL",
      description: "Advanced concepts in cybersecurity, privacy protection, and secure systems",
      date: "July-October 2024",
      score: "Score: 54%",
      image: "/lovable-uploads/c1672d83-4cdd-4e99-8bae-1791469cb436.png"
    },
    {
      title: "Privacy and Security in Online Social Media",
      provider: "NPTEL",
      description: "Understanding privacy and security challenges in social media platforms",
      date: "January-April 2025",
      score: "Score: 60%",
      image: "/lovable-uploads/cd1ff767-a827-44d3-8457-9ae7dc466476.png"
    },
    {
      title: "A Joy of Computing Using Python",
      provider: "NPTEL",
      description: "Python programming with focus on computational thinking and problem solving",
      date: "July-October 2023",
      score: "Score: 57%",
      image: "/lovable-uploads/f43a33c6-3dea-4f84-be69-93d99aa38281.png"
    },
    {
      title: "Oracle SQL Basics",
      provider: "COURSERA (LEARNQUEST)",
      description: "Fundamental SQL concepts and database management with Oracle",
      date: "February 2024",
      score: "Completed Successfully",
      image: "/lovable-uploads/11f38f92-3582-465a-a52c-e83f230b83ec.png"
    },
    {
      title: "Introduction to Artificial Intelligence (AI)",
      provider: "COURSERA (IBM)",
      description: "Comprehensive introduction to AI concepts and practical applications",
      date: "March 2024",
      score: "Completed Successfully",
      image: "/lovable-uploads/8be8bcfd-f2a2-4965-9572-eae41aaa65c3.png"
    },
    {
      title: "Cyber Kushti: Hackathon Participation",
      provider: "BREACHX",
      description: "Successfully participated in the Cyber Kushti cybersecurity hackathon",
      date: "February 2025",
      score: "Certificate of Participation",
      image: "/lovable-uploads/af32b548-12f1-42e6-84c8-ec382e1c42e7.png"
    }
  ];

  return (
    <section id="certifications" className="py-20 px-4 relative overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-slate-900 dark:bg-gradient-to-br dark:from-purple-900 dark:via-indigo-900 dark:to-slate-900 light:bg-gradient-to-br light:from-indigo-50 light:via-purple-50 light:to-blue-100">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-indigo-800/30 to-slate-900/50 dark:from-purple-900/50 dark:via-indigo-800/30 dark:to-slate-900/50 light:from-indigo-100/30 light:via-purple-100/20 light:to-blue-100/30"></div>
      
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-indigo-500/20 light:from-purple-300/20 light:to-indigo-400/20 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-indigo-400/20 to-purple-500/20 light:from-indigo-300/20 light:to-purple-400/20 rounded-full blur-2xl animate-pulse animation-delay-1000"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] light:bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)]"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Trophy className="text-purple-400 dark:text-purple-400 light:text-purple-600" size={40} />
            <h3 className="text-4xl md:text-5xl font-bold text-white dark:text-white light:text-gray-900 bg-gradient-to-r from-purple-400 via-indigo-400 to-violet-400 dark:from-purple-400 dark:via-indigo-400 dark:to-violet-400 light:from-purple-600 light:via-indigo-600 light:to-violet-600 bg-clip-text text-transparent">
              Professional Certifications
            </h3>
            <Trophy className="text-purple-400 dark:text-purple-400 light:text-purple-600" size={40} />
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-400 to-indigo-400 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 light:from-purple-300/20 light:to-indigo-300/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/60 dark:from-slate-800/80 dark:to-slate-900/60 light:from-white/90 light:to-purple-50/50 backdrop-blur-sm p-8 rounded-xl border border-purple-500/30 dark:border-purple-500/30 light:border-purple-200/50 hover:border-purple-400/60 dark:hover:border-purple-400/60 light:hover:border-purple-300/60 transition-all duration-300 hover:scale-105 hover:shadow-2xl light:shadow-xl">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 light:from-purple-100 light:to-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award size={32} className="text-white dark:text-white light:text-purple-600" />
                  </div>
                  <h4 className="text-white dark:text-white light:text-gray-900 font-semibold mb-2 group-hover:text-purple-300 dark:group-hover:text-purple-300 light:group-hover:text-purple-700 transition-colors text-lg">
                    {cert.title}
                  </h4>
                  <p className="text-purple-300 dark:text-purple-300 light:text-purple-600 text-sm mb-2 font-medium">{cert.provider}</p>
                </div>
                <p className="text-gray-300 dark:text-gray-300 light:text-gray-700 text-sm mb-4 line-clamp-3">{cert.description}</p>
                <div className="flex items-center justify-between text-sm mb-4">
                  <span className="text-purple-200 dark:text-purple-200 light:text-purple-600 font-medium">{cert.score}</span>
                  <span className="text-gray-400 dark:text-gray-400 light:text-gray-500">{cert.date}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 bg-purple-800/30 dark:bg-purple-800/30 light:bg-purple-100/50 px-4 py-2 rounded-full border border-purple-600/30 dark:border-purple-600/30 light:border-purple-200/30">
                    <Award size={16} className="text-purple-400 dark:text-purple-400 light:text-purple-600" />
                    <span className="text-purple-300 dark:text-purple-300 light:text-purple-700 text-xs font-medium">Certified</span>
                  </div>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm" className="border-purple-500 dark:border-purple-500 light:border-purple-300 text-purple-300 dark:text-purple-300 light:text-purple-700 hover:bg-purple-600 dark:hover:bg-purple-600 light:hover:bg-purple-100 hover:text-white dark:hover:text-white light:hover:text-purple-800">
                        <Eye size={16} className="mr-2" />
                        Preview
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl bg-slate-900 dark:bg-slate-900 light:bg-white border-purple-600/50 dark:border-purple-600/50 light:border-purple-200">
                      <DialogHeader>
                        <DialogTitle className="text-purple-300 dark:text-purple-300 light:text-gray-900">{cert.title}</DialogTitle>
                      </DialogHeader>
                      <div className="mt-4">
                        <img 
                          src={cert.image} 
                          alt={`${cert.title} Certificate`}
                          className="w-full h-auto rounded-lg border border-purple-600/30 dark:border-purple-600/30 light:border-purple-200/30"
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
