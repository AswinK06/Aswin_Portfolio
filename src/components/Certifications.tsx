
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
      image: "/lovable-uploads/3f8e1dde-da90-493b-b0ac-19625aae240f.png"
    },
    {
      title: "Privacy and Security in Online Social Media",
      provider: "NPTEL",
      description: "Understanding privacy and security challenges in social media platforms",
      date: "January-April 2025",
      score: "Score: 60%",
      image: "/lovable-uploads/79344da7-973e-4d3c-8af9-316706607608.png"
    },
    {
      title: "A Joy of Computing Using Python",
      provider: "NPTEL",
      description: "Python programming with focus on computational thinking and problem solving",
      date: "July-October 2023",
      score: "Score: 57%",
      image: "/lovable-uploads/7657955f-dd30-4c56-a68f-4057734f8762.png"
    },
    {
      title: "Introduction to Artificial Intelligence (AI)",
      provider: "IBM (Coursera)",
      description: "Comprehensive introduction to artificial intelligence concepts and applications",
      date: "March 2024",
      score: "Completed Successfully",
      image: "/lovable-uploads/08155e08-c3cd-4291-9e4c-94bb9c72bed9.png"
    },
    {
      title: "Oracle SQL Basics",
      provider: "COURSERA (LEARNQUEST)",
      description: "Fundamental SQL concepts and database management with Oracle",
      date: "February 2024",
      score: "Completed Successfully",
      image: "/lovable-uploads/adce0369-aa69-4691-9b48-43eac96594d0.png"
    },
    {
      title: "Cyber Kushti: Hackathon Participation",
      provider: "BREACHX",
      description: "Successfully participated in the Cyber Kushti cybersecurity hackathon",
      date: "February 2025",
      score: "Certificate of Participation",
      image: "/lovable-uploads/2731a8e6-0d07-43f5-9f68-79100329d60d.png"
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
    },
    {
      title: "Basics of Python",
      provider: "INFOSYS SPRINGBOARD",
      description: "Fundamental Python programming concepts and practical applications",
      date: "September 2024",
      score: "Completed Successfully",
      image: "/lovable-uploads/0316cbdc-df07-4974-8b7d-dd89854c933f.png"
    },
    {
      title: "Java Programming Fundamentals",
      provider: "INFOSYS SPRINGBOARD",
      description: "Core Java programming concepts and object-oriented programming principles",
      date: "November 2024",
      score: "Completed Successfully",
      image: "/lovable-uploads/10e6747b-43a3-473f-926f-2e4b05a7b833.png"
    },
    {
      title: "Prompt Engineering",
      provider: "INFOSYS SPRINGBOARD",
      description: "Advanced techniques for effective AI prompt design and optimization",
      date: "November 2024",
      score: "Completed Successfully",
      image: "/lovable-uploads/276ad3a8-50c6-442b-97c0-216181c848b2.png"
    }
  ];

  return (
    <section id="certifications" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Trophy className="text-blue-600 dark:text-blue-400" size={40} />
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Professional Certifications
            </h3>
            <Trophy className="text-blue-600 dark:text-blue-400" size={40} />
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="group relative">
              <div className="bg-white dark:bg-gray-900 p-8 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award size={32} className="text-white" />
                  </div>
                  <h4 className="text-gray-800 dark:text-white font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors text-lg">
                    {cert.title}
                  </h4>
                  <p className="text-blue-600 dark:text-blue-300 text-sm mb-2 font-medium">{cert.provider}</p>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 line-clamp-3">{cert.description}</p>
                <div className="flex items-center justify-between text-sm mb-4">
                  <span className="text-blue-600 dark:text-blue-200 font-medium">{cert.score}</span>
                  <span className="text-gray-500 dark:text-gray-400">{cert.date}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 bg-blue-100 dark:bg-blue-800 px-4 py-2 rounded-full border border-blue-300 dark:border-blue-600">
                    <Award size={16} className="text-blue-600 dark:text-blue-400" />
                    <span className="text-blue-700 dark:text-blue-300 text-xs font-medium">Certified</span>
                  </div>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm" className="border-blue-500 text-blue-600 dark:text-blue-300 hover:bg-blue-600 hover:text-white">
                        <Eye size={16} className="mr-2" />
                        Preview
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl bg-white dark:bg-gray-900 border-blue-300 dark:border-blue-600">
                      <DialogHeader>
                        <DialogTitle className="text-gray-800 dark:text-blue-300">{cert.title}</DialogTitle>
                      </DialogHeader>
                      <div className="mt-4">
                        <img 
                          src={cert.image} 
                          alt={`${cert.title} Certificate`}
                          className="w-full h-auto rounded-lg border border-blue-300 dark:border-blue-600"
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
