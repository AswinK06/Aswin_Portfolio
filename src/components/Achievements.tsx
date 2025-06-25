
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
    <section id="achievements" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Star className="text-blue-600 dark:text-blue-400" size={40} />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Achievements
            </h2>
            <Star className="text-blue-600 dark:text-blue-400" size={40} />
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {achievements.map((achievement, index) => (
            <div key={index} className="group relative">
              <div className="bg-white dark:bg-gray-900 p-8 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-500 transition-all duration-300 shadow-lg hover:shadow-xl">
                <div className="flex items-start gap-6 mb-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg border-2 border-blue-300 dark:border-blue-400 flex items-center justify-center">
                      <Trophy className="text-white" size={32} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <Trophy className="text-blue-600 dark:text-blue-400" size={24} />
                      <h3 className="text-blue-700 dark:text-blue-300 font-bold text-xl">{achievement.title}</h3>
                    </div>
                    <h4 className="text-gray-900 dark:text-white font-semibold text-lg mb-2">{achievement.subtitle}</h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">{achievement.description}</p>
                    <div className="flex items-center justify-between">
                      <p className="text-blue-600 dark:text-blue-200 text-sm font-medium">{achievement.provider}</p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{achievement.date}</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm" className="border-blue-500 text-blue-600 dark:text-blue-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white">
                        <Eye size={16} className="mr-2" />
                        Preview Certificate
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl bg-white dark:bg-gray-900 border-blue-300 dark:border-blue-600">
                      <DialogHeader>
                        <DialogTitle className="text-gray-900 dark:text-blue-300">{achievement.subtitle}</DialogTitle>
                      </DialogHeader>
                      <div className="mt-4">
                        <img 
                          src={achievement.image} 
                          alt={`${achievement.subtitle} Certificate`}
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

export default Achievements;
