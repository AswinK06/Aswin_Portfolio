
import { Trophy, Award, Star, Eye } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

const Achievements = () => {
  const achievements = [
    {
      title: "🏆 First Prize Winner",
      subtitle: "5G Networking Presentation",
      description: "Won first prize at Kumarasamy College of Engineering for expertise in next-generation communication technologies and innovative presentation skills",
      provider: "CHAKRAWAR Technical Combat",
      date: "March 2023",
      image: "/lovable-uploads/5cf2bc37-e8e9-4042-bd58-3013c45ed00f.png"
    },
    {
      title: "🏅 Top Performer",
      subtitle: "Ranked 227th out of 3000+",
      description: "Achieved competitive ranking in Unstop's Engineering February Series - a monthly problem-solving challenge demonstrating technical excellence",
      provider: "Certificate of Excellence",
      date: "February 2025",
      image: "/lovable-uploads/7ab3520a-0d19-4318-8221-8dbf4a1a5d0c.png"
    }
  ];

  return (
    <section id="achievements" className="py-20 px-4 relative overflow-hidden bg-gradient-to-br from-white via-purple-50 to-indigo-100 dark:from-purple-900 dark:via-indigo-900 dark:to-slate-900 transition-colors duration-300">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100/50 via-indigo-100/30 to-slate-100/50 dark:from-purple-900/50 dark:via-indigo-800/30 dark:to-slate-900/50"></div>
      
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-300/20 to-indigo-300/20 dark:from-purple-400/20 dark:to-indigo-500/20 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-indigo-300/20 to-purple-300/20 dark:from-indigo-400/20 dark:to-purple-500/20 rounded-full blur-2xl animate-pulse animation-delay-1000"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Star className="text-purple-600 dark:text-purple-400" size={40} />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-violet-600 dark:from-purple-400 dark:via-indigo-400 dark:to-violet-400 bg-clip-text text-transparent">
              Achievements
            </h2>
            <Star className="text-purple-600 dark:text-purple-400" size={40} />
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {achievements.map((achievement, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-300/20 to-indigo-300/20 dark:from-purple-600/20 dark:to-indigo-600/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative bg-white/80 dark:bg-gradient-to-br dark:from-slate-800/80 dark:to-slate-900/60 backdrop-blur-sm p-8 rounded-xl border border-purple-200/50 dark:border-purple-500/30 hover:border-purple-300/60 dark:hover:border-purple-400/60 transition-all duration-300 shadow-xl hover:shadow-2xl">
                <div className="flex items-start gap-6 mb-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-lg border-2 border-purple-300/50 dark:border-purple-400/50 flex items-center justify-center">
                      <Trophy className="text-white" size={32} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <Trophy className="text-purple-600 dark:text-purple-400" size={24} />
                      <h3 className="text-purple-700 dark:text-purple-300 font-bold text-xl">{achievement.title}</h3>
                    </div>
                    <h4 className="text-gray-900 dark:text-white font-semibold text-lg mb-2">{achievement.subtitle}</h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">{achievement.description}</p>
                    <div className="flex items-center justify-between">
                      <p className="text-purple-600 dark:text-purple-200 text-sm font-medium">{achievement.provider}</p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{achievement.date}</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm" className="border-purple-500 text-purple-600 dark:text-purple-300 hover:bg-purple-600 hover:text-white dark:hover:bg-purple-600 dark:hover:text-white">
                        <Eye size={16} className="mr-2" />
                        Preview Certificate
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl bg-white dark:bg-slate-900 border-purple-300/50 dark:border-purple-600/50">
                      <DialogHeader>
                        <DialogTitle className="text-gray-900 dark:text-purple-300">{achievement.subtitle}</DialogTitle>
                      </DialogHeader>
                      <div className="mt-4">
                        <img 
                          src={achievement.image} 
                          alt={`${achievement.subtitle} Certificate`}
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

export default Achievements;
