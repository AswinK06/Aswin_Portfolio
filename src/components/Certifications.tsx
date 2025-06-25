
import { Award, Trophy, Eye } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

const Certifications = () => {
  const certifications = [
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
      title: "Cyber Kushti: Hackathon Participation",
      provider: "BREACHX",
      description: "Successfully participated in the Cyber Kushti cybersecurity hackathon",
      date: "February 2025",
      score: "Certificate of Participation",
      image: "/lovable-uploads/af32b548-12f1-42e6-84c8-ec382e1c42e7.png"
    },
    {
      title: "Programming Foundations with JavaScript, HTML and CSS",
      provider: "Duke University (Coursera)",
      description: "Comprehensive foundation in web development using JavaScript, HTML, and CSS",
      date: "2024",
      score: "Completed Successfully",
      image: "/lovable-uploads/555145da-f8fd-4199-956c-d99dcc6d16dc.png"
    },
    {
      title: "Java Programming: Solving Problems with Software",
      provider: "Duke University (Coursera)",
      description: "Advanced Java programming concepts and problem-solving techniques",
      date: "2024",
      score: "Completed Successfully",
      image: "/lovable-uploads/15ccb1cb-f461-4bd2-a944-eff90ea61f39.png"
    },
    {
      title: "Programming, Data Structures and Algorithms Using Python",
      provider: "NPTEL",
      description: "Comprehensive study of programming concepts, data structures, and algorithms using Python",
      date: "2023",
      score: "Score: 61%",
      image: "/lovable-uploads/6e3b40a0-6434-4ddc-9789-2bdd111ac521.png"
    }
  ];

  return (
    <section id="certifications" className="py-20 px-4 relative overflow-hidden bg-gradient-to-br from-white via-purple-50 to-indigo-100 dark:from-purple-900 dark:via-indigo-900 dark:to-slate-900">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100/50 via-indigo-100/30 to-slate-100/50 dark:from-purple-900/50 dark:via-indigo-800/30 dark:to-slate-900/50"></div>
      
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-300/20 to-indigo-300/20 dark:from-purple-400/20 dark:to-indigo-500/20 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-indigo-300/20 to-purple-300/20 dark:from-indigo-400/20 dark:to-purple-500/20 rounded-full blur-2xl animate-pulse animation-delay-1000"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Trophy className="text-purple-600 dark:text-purple-400" size={40} />
            <h3 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-violet-600 dark:from-purple-400 dark:via-indigo-400 dark:to-violet-400 bg-clip-text text-transparent">
              Professional Certifications
            </h3>
            <Trophy className="text-purple-600 dark:text-purple-400" size={40} />
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-400 to-indigo-400 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-300/20 to-indigo-300/20 dark:from-purple-600/20 dark:to-indigo-600/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-8 rounded-xl border border-purple-200/50 dark:border-purple-500/30 hover:border-purple-400/60 dark:hover:border-purple-400/60 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award size={32} className="text-white" />
                  </div>
                  <h4 className="text-gray-800 dark:text-white font-semibold mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors text-lg">
                    {cert.title}
                  </h4>
                  <p className="text-purple-600 dark:text-purple-300 text-sm mb-2 font-medium">{cert.provider}</p>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 line-clamp-3">{cert.description}</p>
                <div className="flex items-center justify-between text-sm mb-4">
                  <span className="text-purple-600 dark:text-purple-200 font-medium">{cert.score}</span>
                  <span className="text-gray-500 dark:text-gray-400">{cert.date}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 bg-purple-100/80 dark:bg-purple-800/30 px-4 py-2 rounded-full border border-purple-300/50 dark:border-purple-600/30">
                    <Award size={16} className="text-purple-600 dark:text-purple-400" />
                    <span className="text-purple-700 dark:text-purple-300 text-xs font-medium">Certified</span>
                  </div>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm" className="border-purple-500 text-purple-600 dark:text-purple-300 hover:bg-purple-600 hover:text-white">
                        <Eye size={16} className="mr-2" />
                        Preview
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl bg-white dark:bg-slate-900 border-purple-300/50 dark:border-purple-600/50">
                      <DialogHeader>
                        <DialogTitle className="text-gray-800 dark:text-purple-300">{cert.title}</DialogTitle>
                      </DialogHeader>
                      <div className="mt-4">
                        <img 
                          src={cert.image} 
                          alt={`${cert.title} Certificate`}
                          className="w-full h-auto rounded-lg border border-purple-300/30 dark:border-purple-600/30"
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
