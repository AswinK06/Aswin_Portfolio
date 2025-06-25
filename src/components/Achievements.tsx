
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
    <section id="achievements" className="py-20 px-4 relative overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-slate-900 dark:bg-gradient-to-br dark:from-purple-900 dark:via-indigo-900 dark:to-slate-900 light:bg-gradient-to-br light:from-indigo-50 light:via-purple-50 light:to-blue-100">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-indigo-800/30 to-slate-900/50 dark:from-purple-900/50 dark:via-indigo-800/30 dark:to-slate-900/50 light:from-indigo-100/30 light:via-purple-100/20 light:to-blue-100/30"></div>
      
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-indigo-500/20 light:from-purple-300/20 light:to-indigo-400/20 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-indigo-400/20 to-purple-500/20 light:from-indigo-300/20 light:to-purple-400/20 rounded-full blur-2xl animate-pulse animation-delay-1000"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] light:bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)]"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Star className="text-purple-400 dark:text-purple-400 light:text-purple-600" size={40} />
            <h2 className="text-4xl md:text-5xl font-bold text-white dark:text-white light:text-gray-900 bg-gradient-to-r from-purple-400 via-indigo-400 to-violet-400 dark:from-purple-400 dark:via-indigo-400 dark:to-violet-400 light:from-purple-600 light:via-indigo-600 light:to-violet-600 bg-clip-text text-transparent">
              Achievements
            </h2>
            <Star className="text-purple-400 dark:text-purple-400 light:text-purple-600" size={40} />
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-400 to-indigo-400 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {achievements.map((achievement, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 light:from-purple-300/20 light:to-indigo-300/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/60 dark:from-slate-800/80 dark:to-slate-900/60 light:from-white/90 light:to-purple-50/50 backdrop-blur-sm p-8 rounded-xl border border-purple-500/30 dark:border-purple-500/30 light:border-purple-200/50 hover:border-purple-400/60 dark:hover:border-purple-400/60 light:hover:border-purple-300/60 transition-all duration-300 shadow-xl hover:shadow-2xl">
                <div className="flex items-start gap-6 mb-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-500 light:from-purple-100 light:to-indigo-100 rounded-lg border-2 border-purple-400/50 dark:border-purple-400/50 light:border-purple-300/50 flex items-center justify-center">
                      <Trophy className="text-white dark:text-white light:text-purple-600" size={32} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <Trophy className="text-purple-400 dark:text-purple-400 light:text-purple-600" size={24} />
                      <h3 className="text-purple-300 dark:text-purple-300 light:text-purple-700 font-bold text-xl">{achievement.title}</h3>
                    </div>
                    <h4 className="text-white dark:text-white light:text-gray-900 font-semibold text-lg mb-2">{achievement.subtitle}</h4>
                    <p className="text-gray-300 dark:text-gray-300 light:text-gray-700 text-sm mb-3">{achievement.description}</p>
                    <div className="flex items-center justify-between">
                      <p className="text-purple-200 dark:text-purple-200 light:text-purple-600 text-sm font-medium">{achievement.provider}</p>
                      <p className="text-gray-400 dark:text-gray-400 light:text-gray-500 text-sm">{achievement.date}</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm" className="border-purple-500 dark:border-purple-500 light:border-purple-300 text-purple-300 dark:text-purple-300 light:text-purple-700 hover:bg-purple-600 dark:hover:bg-purple-600 light:hover:bg-purple-100 hover:text-white dark:hover:text-white light:hover:text-purple-800">
                        <Eye size={16} className="mr-2" />
                        Preview Certificate
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl bg-slate-900 dark:bg-slate-900 light:bg-white border-purple-600/50 dark:border-purple-600/50 light:border-purple-200">
                      <DialogHeader>
                        <DialogTitle className="text-purple-300 dark:text-purple-300 light:text-gray-900">{achievement.subtitle}</DialogTitle>
                      </DialogHeader>
                      <div className="mt-4">
                        <img 
                          src={achievement.image} 
                          alt={`${achievement.subtitle} Certificate`}
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

export default Achievements;
